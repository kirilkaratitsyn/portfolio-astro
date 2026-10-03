// Small icons for the globe section (sections/Globe.astro): the store's own favicon, for its tooltip, and the flag of
// every country in the list next to the globe. Flags: flag-icons (MIT, github.com/lipis/flag-icons), 1:1 SVGs.
// Both are rasterized to small WebP (icons 64 px, flags 40 px) in public/source/, a few KB each.
// Run when works.yaml changes (needs network): node scripts/make-store-icons.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = new URL('..', import.meta.url).pathname;
const yaml = fs.readFileSync(path.join(root, 'src/content/works.yaml'), 'utf8');
const works = yaml
  .split(/\n(?=- id: )/)
  .map((b) => ({ id: b.match(/- id: (\S+)/)?.[1], url: b.match(/\n {2}url: (\S+)/)?.[1], country: b.match(/\n {2}country: (\S+)/)?.[1], archived: /\n {2}archived: true/.test(b) }))
  .filter((w) => w.id && w.url && w.country && !w.archived);

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129 Safari/537.36';
const get = (url) => fetch(url, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(20000) });
const out = (dir) => {
  const d = path.join(root, 'public/source', dir);
  fs.mkdirSync(d, { recursive: true });
  return d;
};

// Favicons: the store's <link rel="icon">, asked for at 128 px (Shopify's CDN resizes on request).
const logos = out('store-icons');
for (const w of works) {
  try {
    const html = await (await get(w.url)).text();
    const tag = html.match(/<link[^>]+rel=["'](?:shortcut )?icon["'][^>]*>/i)?.[0] ?? html.match(/<link[^>]+rel=["']apple-touch-icon["'][^>]*>/i)?.[0];
    const href = tag?.match(/href=["']([^"']+)["']/)?.[1]?.replace(/&amp;/g, '&');
    if (!href) throw new Error('no icon link');
    const src = new URL(href, w.url);
    if (src.searchParams.has('width')) src.searchParams.set('width', '128');
    if (src.searchParams.has('height')) src.searchParams.set('height', '128');
    const res = await get(src.href);
    if (!res.ok) throw new Error(`icon ${res.status}`);
    const input = Buffer.from(await res.arrayBuffer());
    await sharp(input, { density: 300 }).resize(64, 64, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } }).flatten({ background: '#ffffff' }).webp({ quality: 90 }).toFile(path.join(logos, `${w.id}.webp`));
    console.log('icon', w.id);
  } catch (e) {
    console.log('icon', w.id, 'skipped:', e.message);
  }
}

// Flags of the countries on the globe.
const flags = out('flags');
for (const code of [...new Set(works.map((w) => w.country.toLowerCase()))]) {
  const svg = Buffer.from(await (await get(`https://cdn.jsdelivr.net/npm/flag-icons@7/flags/1x1/${code}.svg`)).arrayBuffer());
  await sharp(svg, { density: 300 }).resize(40, 40).webp({ quality: 85 }).toFile(path.join(flags, `${code}.webp`));
  console.log('flag', code);
}
