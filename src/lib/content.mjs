import { createImageUrlBuilder } from '@sanity/image-url';
import { toHTML } from '@portabletext/to-html';
import { projectId, dataset } from './sanity.mjs';

const builder = createImageUrlBuilder({ projectId, dataset });
export const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
export const plainText = block => (block?.children ?? []).map(child => child.text ?? '').join('');
export const slugify = text => String(text ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const headingId = block => `${slugify(plainText(block) || block.title || block.nom)}${block._key ? `-${block._key}` : ''}`;
export const headingTag = (tag, fallback = 'h2') => /^h[2-6]$/.test(tag) ? tag : fallback;
export function safeUrl(value) {
  if (typeof value !== 'string') return '';
  const url = value.trim();
  return /^(https?:\/\/|mailto:|tel:|\/(?!\/)|#)/i.test(url) ? url : '';
}
export function imageUrl(image, width = 1150, height) {
  if (!image?.asset?._ref && !image?.asset?._id) return '';
  let url = builder.image(image).width(width).fit('max').auto('format');
  if (height) url = url.height(height).fit('crop');
  return url.url();
}
export function imageHtml(image, width = 760) {
  const src = imageUrl(image, width);
  if (!src) return '';
  const dimensions = image.asset?.metadata?.dimensions;
  return `<figure><img src="${escapeHtml(src)}" alt="${escapeHtml(image.alt || '')}" loading="lazy" decoding="async"${dimensions ? ` width="${dimensions.width}" height="${dimensions.height}"` : ''}>${image.caption ? `<figcaption>${escapeHtml(image.caption)}</figcaption>` : ''}</figure>`;
}
export function youtubeId(value) {
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, '');
    const id = host === 'youtu.be' ? url.pathname.slice(1) : ['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(host) ? (url.searchParams.get('v') || url.pathname.split('/').at(-1)) : '';
    return /^[a-zA-Z0-9_-]{11}$/.test(id || '') ? id : '';
  } catch { return ''; }
}
export function portableHtml(blocks = []) {
  if (!Array.isArray(blocks) || !blocks.length) return '';
  return toHTML(blocks, {
    components: {
      block: Object.fromEntries(['h2', 'h3', 'h4', 'h5', 'h6'].map(tag => [tag, ({ value, children }) => `<${tag} id="${escapeHtml(headingId(value))}">${children}</${tag}>`])),
      types: {
        mainImage: ({ value }) => imageHtml(value),
        image: ({ value }) => imageHtml(value),
        youtube: ({ value }) => {
          const id = youtubeId(value.url);
          return id ? `<iframe class="aspect-video w-full" width="760" height="428" src="https://www.youtube-nocookie.com/embed/${id}" title="Vidéo YouTube" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : '';
        },
      },
      marks: {
        internalLink: ({ value, children }) => {
          const slug = value.reference?.slug?.current;
          return slug ? `<a href="/${escapeHtml(slug)}">${children}</a>` : children;
        },
        link: ({ value, children }) => {
          const href = safeUrl(value.href);
          if (!href) return children;
          const rel = [value.blank && 'noopener', (value.noreferrer || value.blank) && 'noreferrer', value.sponsored && 'sponsored', value.ugc && 'ugc'].filter(Boolean).join(' ');
          return `<a href="${escapeHtml(href)}"${value.blank ? ' target="_blank"' : ''}${rel ? ` rel="${rel}"` : ''}>${children}</a>`;
        },
        'Lien externalLink': ({ children }) => children,
      },
    },
  });
}
export function tableOfContents(content = []) {
  const entries = [];
  for (const slice of content.filter(item => !item.disabled)) {
    if (slice.title && ['keyboardsTable', 'keyboardsSection'].includes(slice._type)) entries.push({ id: headingId(slice), title: slice.title, level: 2 });
    if (slice._type === 'switchBlock' && slice.switch?.nom) entries.push({ id: headingId({ ...slice, title: slice.switch.nom }), title: slice.switch.nom, level: 2 });
    for (const block of slice.bodyTextt ?? []) {
      if (['h2', 'h3', 'h4'].includes(block.style)) entries.push({ id: headingId(block), title: plainText(block), level: Number(block.style[1]) });
    }
  }
  return entries;
}
export const formatDate = value => value && !Number.isNaN(Date.parse(value)) ? new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeZone: 'Europe/Paris' }).format(new Date(value)) : '';
