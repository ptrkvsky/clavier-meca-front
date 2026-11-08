import test from 'node:test';
import assert from 'node:assert/strict';
import { createContentStore, getRoutes } from '../src/lib/sanity.mjs';
import { portableHtml, headingId, tableOfContents, safeUrl, youtubeId, imageUrl } from '../src/lib/content.mjs';

const block = (text, style = 'normal', key = 'key') => ({ _type: 'block', _key: key, style, children: [{ _type: 'span', text, marks: [] }], markDefs: [] });

test('published references resolve without loops or draft leakage', () => {
  const docs = [
    { _id: 'post', _type: 'post', slug: { current: 'article' }, author: { _ref: 'author' }, missing: { _ref: 'missing' } },
    { _id: 'author', _type: 'author', slug: { current: 'eric' }, post: { _ref: 'post' } },
    { _id: 'drafts.post', _type: 'post', slug: { current: 'secret' } },
    { _id: 'versions.release.post', _type: 'post', slug: { current: 'future' } },
  ];
  const store = createContentStore(docs);
  assert.equal(store.posts.length, 1);
  assert.equal(store.posts[0].author._id, 'author');
  assert.equal(store.posts[0].author.post._ref, 'post');
  assert.equal(store.posts[0].missing._ref, 'missing');
  assert.doesNotThrow(() => JSON.stringify(store));
});

test('routes retain articles and categories and reject reserved URLs', () => {
  const store = createContentStore([
    { _id: 'p', _type: 'post', slug: { current: 'guide' } },
    { _id: 'c', _type: 'category', slug: { current: 'guides' } },
  ]);
  assert.deepEqual(getRoutes(store).map(route => route.slug), ['guide', 'guides']);
  assert.throws(() => getRoutes({ posts: [{ slug: { current: 'contact' } }], categories: [] }), /réservée/);
});

test('Portable Text preserves formatting, nested lists and safe internal links', () => {
  const content = [block('Titre & détails', 'h2'), { ...block('Élément'), listItem: 'bullet', level: 1 }, { ...block('Sous-élément'), listItem: 'bullet', level: 2 }, {
    ...block('Guide'), children: [{ _type: 'span', text: 'Guide', marks: ['link'] }],
    markDefs: [{ _key: 'link', _type: 'internalLink', reference: { slug: { current: 'guide' } } }],
  }];
  const html = portableHtml(content);
  assert.ok(html.includes(`id="${headingId(content[0])}"`));
  assert.ok(html.includes('Titre &amp; détails'));
  assert.equal((html.match(/<ul>/g) || []).length, 2);
  assert.ok(html.includes('href="/guide"'));
});

test('content URLs and text cannot introduce script markup', () => {
  for (const url of ['javascript:alert(1)', 'data:text/html,hi', '//evil.example', ' JAVASCRIPT:alert(1)']) assert.equal(safeUrl(url), '');
  const html = portableHtml([{ ...block('<script>alert(1)</script>'), children: [{ _type: 'span', text: '<img onerror=alert(1)>', marks: ['x'] }], markDefs: [{ _key: 'x', _type: 'link', href: 'javascript:alert(1)' }] }]);
  assert.ok(!html.includes('<img'));
  assert.ok(!html.includes('javascript:'));
});

test('affiliation and new-window attributes survive migration', () => {
  const html = portableHtml([{ ...block('Acheter'), children: [{ _type: 'span', text: 'Acheter', marks: ['x'] }], markDefs: [{ _key: 'x', _type: 'link', href: 'https://example.com', blank: true, sponsored: true, ugc: true }] }]);
  assert.ok(html.includes('target="_blank"'));
  for (const token of ['noopener', 'noreferrer', 'sponsored', 'ugc']) assert.ok(html.includes(token));
});

test('table of contents skips disabled sections and matches heading IDs', () => {
  const title = block('Comment choisir ?', 'h2');
  const content = [{ _type: 'bodySection', bodyTextt: [title] }, { _type: 'bodySection', disabled: true, bodyTextt: [block('Masqué', 'h2')] }, { _type: 'switchBlock', _key: 'switch', switch: { nom: 'Cherry MX' } }];
  const toc = tableOfContents(content);
  assert.equal(toc.length, 2);
  assert.equal(toc[0].id, headingId(title));
  assert.equal(toc[1].id, 'cherry-mx-switch');
});

test('video embeds accept YouTube only and images use Sanity transformations', () => {
  assert.equal(youtubeId('https://youtu.be/dQw4w9WgXcQ'), 'dQw4w9WgXcQ');
  assert.equal(youtubeId('https://www.youtube.com/watch?v=dQw4w9WgXcQ'), 'dQw4w9WgXcQ');
  assert.equal(youtubeId('https://evil.example/dQw4w9WgXcQ'), '');
  const image = { asset: { _ref: 'image-bb3ee0b48e642bcdc2101e457c374a56c430a77e-568x758-jpg' } };
  assert.match(imageUrl(image, 400), /cdn\.sanity\.io\/images\/dhh9ms17\/production\/.+w=400/);
  assert.equal(imageUrl(null), '');
});
