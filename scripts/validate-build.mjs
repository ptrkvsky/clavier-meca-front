import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { parseHTML } from 'linkedom';
import { getContent, getRoutes } from '../src/lib/sanity.mjs';
import { plainText } from '../src/lib/content.mjs';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}
const files = await walk('dist');
const htmlFiles = files.filter(file => file.endsWith('.html'));
const content = await getContent();
for (const route of [...getRoutes(content).map(route => route.slug), ...content.authors.map(author => `auteur/${author.slug.current}`), '', 'contact', 'plan-site']) await access(path.join('dist', route, 'index.html'));
for (const file of ['404.html', 'sitemap-index.xml', 'robots.txt']) await access(path.join('dist', file));
const errors = [];
const legacyBrokenLinks = new Set();
const pages = new Map();
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const { document } = parseHTML(html);
  pages.set(file, document);
  if (document.querySelectorAll('h1').length !== 1) errors.push(`${file}: un seul h1 attendu`);
  if (document.documentElement.lang !== 'fr') errors.push(`${file}: langue manquante`);
  if (!document.querySelector('link[rel="canonical"]')) errors.push(`${file}: URL canonique manquante`);
  if (/___gatsby|gatsby-image-wrapper|data-emotion/.test(html)) errors.push(`${file}: ancien rendu Gatsby/Emotion`);
  const ids = [...document.querySelectorAll('[id]')].map(element => element.id);
  if (new Set(ids).size !== ids.length) errors.push(`${file}: identifiants HTML dupliqués`);
  for (const anchor of document.querySelectorAll('a[href^="#"]')) {
    const id = decodeURIComponent(anchor.getAttribute('href').slice(1));
    if (id && !ids.includes(id)) errors.push(`${file}: ancre manquante #${id}`);
  }
  for (const anchor of document.querySelectorAll('a[href^="/"]')) {
    const target = decodeURIComponent(anchor.getAttribute('href').split(/[?#]/)[0]);
    if (target.startsWith('//')) continue;
    const candidates = [path.join('dist', target), path.join('dist', target, 'index.html')];
    if (!files.some(file => candidates.includes(file))) legacyBrokenLinks.add(target);
  }
  for (const image of document.querySelectorAll('img')) if (!image.hasAttribute('alt')) errors.push(`${file}: image sans attribut alt`);
}
const normalize = text => text.replace(/\s+/g, ' ').trim();
let verifiedBlocks = 0;
for (const post of content.posts) {
  const document = pages.get(path.join('dist', post.slug.current, 'index.html'));
  for (const br of document.querySelectorAll('main br')) br.replaceWith(document.createTextNode('\n'));
  const text = normalize(document.querySelector('main').textContent);
  for (const slice of (post.content || []).filter(slice => !slice.disabled)) {
    assert.ok(['hero', 'bodySection', 'highlight', 'productsSection', 'keyboardsTable', 'keyboardsSection', 'switchBlock', 'illustration'].includes(slice._type), `Bloc non migré : ${slice._type}`);
    const blocks = slice.bodyTextt || slice.bref || (slice._type === 'highlight' ? slice.content : []) || [];
    for (const block of blocks) {
      const expected = normalize(plainText(block));
      if (expected && !text.includes(expected)) errors.push(`${post.slug.current}: texte absent ${expected.slice(0, 70)}`);
      if (expected) verifiedBlocks++;
    }
  }
}
assert.deepEqual(errors, [], errors.slice(0, 30).join('\n'));
console.log(`${htmlFiles.length} pages HTML vérifiées ; ${content.posts.length} articles, ${content.categories.length} catégories, ${content.authors.length} auteurs, ${verifiedBlocks} blocs éditoriaux. Contenu, ancres, SEO et routes : OK.`);
if (legacyBrokenLinks.size) console.log('Liens éditoriaux vers des pages absentes du CMS :', [...legacyBrokenLinks].join(', '));
