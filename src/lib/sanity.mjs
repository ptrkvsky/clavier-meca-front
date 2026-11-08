export const projectId = import.meta.env?.SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || import.meta.env?.GATSBY_SANITY_PROJECTID || process.env.GATSBY_SANITY_PROJECTID || 'dhh9ms17';
export const dataset = import.meta.env?.SANITY_DATASET || process.env.SANITY_DATASET || import.meta.env?.GATSBY_SANITY_DATASET || process.env.GATSBY_SANITY_DATASET || 'production';
const token = import.meta.env?.SANITY_READ_TOKEN || process.env.SANITY_READ_TOKEN || import.meta.env?.GATSBY_SANITY_TOKEN || process.env.GATSBY_SANITY_TOKEN;
let pending;
let expires = 0;

/** One published-content snapshot per build, refreshed every minute in development. */
/** @returns {Promise<import("./types").SiteContent>} */
export async function getContent() {
  if (!pending || Date.now() > expires) {
    expires = Date.now() + 60_000;
    pending = fetchDocuments().then(createContentStore).catch(error => {
      pending = undefined;
      throw error;
    });
  }
  return pending;
}

async function fetchDocuments() {
  const url = new URL(`https://${projectId}.api.sanity.io/v2025-02-19/data/query/${dataset}`);
  url.searchParams.set('query', '*[!(_id in path("drafts.**")) && !(_id in path("versions.**"))]');
  const response = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`Sanity : réponse HTTP ${response.status}. Vérifiez le projet, le dataset et les droits de lecture.`);
  const body = await response.json();
  if (!Array.isArray(body.result)) throw new Error('Sanity : contenu invalide.');
  return body.result;
}

export function createContentStore(documents) {
  const published = documents.filter(doc => !/^(drafts|versions)\./.test(doc._id));
  const byId = new Map(published.map(doc => [doc._id, doc]));
  function resolve(value, ancestors = new Set(), depth = 0) {
    if (!value || typeof value !== 'object' || depth > 30) return value;
    if (Array.isArray(value)) return value.map(item => resolve(item, ancestors, depth + 1));
    if (value._ref) {
      const target = byId.get(value._ref);
      if (!target || ancestors.has(value._ref)) return { ...value };
      return { ...resolve(target, new Set([...ancestors, value._ref]), depth + 1), _ref: value._ref, ...(value._key ? { _key: value._key } : {}) };
    }
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, resolve(item, ancestors, depth + 1)]));
  }
  const ofType = type => published.filter(doc => doc._type === type).map(doc => resolve(doc, new Set([doc._id])));
  const posts = ofType('post').filter(doc => doc.slug?.current);
  const categories = ofType('category').filter(doc => doc.slug?.current);
  const authors = ofType('author').filter(doc => doc.slug?.current);
  return { home: ofType('home')[0], menu: ofType('menu').find(doc => doc.slug?.current === 'main-menu'), posts, categories, authors };
}

export function getRoutes(content) {
  const reserved = new Set(['contact', 'plan-site', '404', 'auteur']);
  const routes = new Map();
  // Articles retain precedence when a category has the same URL.
  for (const [kind, entries] of [['post', content.posts], ['category', content.categories]]) {
    for (const entry of entries) {
      const slug = entry.slug.current;
      if (reserved.has(slug) || !/^[a-zA-Z0-9_-]+$/.test(slug)) throw new Error(`URL Sanity invalide ou réservée : ${slug}`);
      if (!routes.has(slug)) routes.set(slug, { slug, kind, entry });
    }
  }
  return [...routes.values()];
}
