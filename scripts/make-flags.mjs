// Flags for the country list next to the globe (sections/Globe.astro): flag-icons (MIT, github.com/lipis/flag-icons),
// 1:1 SVGs rasterized to 40 px WebP in public/source/flags/, a few hundred bytes each.
// Run when a country is added to works.yaml (needs network): node scripts/make-flags.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = new URL('..', import.meta.url).pathname;
const yaml = fs.readFileSync(path.join(root, 'src/content/works.yaml'), 'utf8');
const works = yaml
  .split(/\n(?=- id: )/)
  .map((b) => ({ id: b.match(/- id: (\S+)/)?.[1], url: b.match(/\n {2}url: (\S+)/)?.[1], country: b.match(/\n {2}country: (\S+)/)?.[1], archived: /\n {2}archived: true/.test(b) }))
  .filter((w) => w.id && w.url && w.country && !w.archived);

const get = (url) => fetch(url, { signal: AbortSignal.timeout(20000) });
const out = (dir) => {
  const d = path.join(root, 'public/source', dir);
  fs.mkdirSync(d, { recursive: true });
  return d;
};

// Flags of the countries on the globe.
const flags = out('flags');
for (const code of [...new Set(works.map((w) => w.country.toLowerCase()))]) {
  const svg = Buffer.from(await (await get(`https://cdn.jsdelivr.net/npm/flag-icons@7/flags/1x1/${code}.svg`)).arrayBuffer());
  await sharp(svg, { density: 300 }).resize(40, 40).webp({ quality: 85 }).toFile(path.join(flags, `${code}.webp`));
  console.log('flag', code);
}
