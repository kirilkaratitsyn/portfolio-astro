// The site icons, from the logo mark (src/assets/brand/mark.svg, traced once from mark-black.png): the white mark on a
// cobalt tile. Writes public/favicon.svg, favicon.ico (16, 32, 48), favicon-48x48.png, apple-touch-icon.png (square:
// iOS rounds it) and the two Android icons of site.webmanifest. Small sizes get a heavier line and a larger mark, so
// the hand-drawn K still reads at 16 px.
// Usage: node scripts/make-favicons.mjs
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require('sharp');

const root = new URL('..', import.meta.url).pathname;
const out = (name) => path.join(root, 'public', name);
const mark = fs.readFileSync(path.join(root, 'src/assets/brand/mark.svg'), 'utf8');
const d = mark.match(/ d="([^"]+)"/)[1];
const [, , mw, mh] = mark.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);

const BG = '#5b8fe0';
const FG = '#FFFFFF';

/** The icon as SVG: tile corner radius and mark size as shares of the tile, line weight in mark units. */
function icon({ size = 512, radius = 0.22, height = 0.66, weight = 26 }) {
  const s = (size * height) / mh;
  const tx = (size - mw * s) / 2;
  const ty = (size - mh * s) / 2;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">` +
    `<rect width="${size}" height="${size}" rx="${Math.round(size * radius)}" fill="${BG}"/>` +
    `<path transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${s.toFixed(5)})" d="${d}" fill-rule="evenodd" fill="${FG}" stroke="${FG}" stroke-width="${weight}" stroke-linejoin="round"/>` +
    `</svg>`
  );
}

const png = (px, opts) => sharp(Buffer.from(icon(opts))).resize(px, px).png().toBuffer();
const small = { height: 0.74, weight: 60 };

// The SVG browsers pick for the tab: a touch heavier than the large icons, as it is mostly drawn at 16 to 32 px.
fs.writeFileSync(out('favicon.svg'), icon({ height: 0.72, weight: 44 }) + '\n');
fs.writeFileSync(out('favicon-48x48.png'), await png(48, small));
fs.writeFileSync(out('apple-touch-icon.png'), await png(180, { radius: 0, height: 0.6 }));
fs.writeFileSync(out('android-chrome-192x192.png'), await png(192, { height: 0.62 }));
fs.writeFileSync(out('android-chrome-512x512.png'), await png(512, { height: 0.62 }));

// favicon.ico: PNG images in an ICO container (header, one directory entry per size, then the PNG data).
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((px) => png(px, small)));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((px, i) => {
  const at = 6 + 16 * i;
  header.writeUInt8(px % 256, at);
  header.writeUInt8(px % 256, at + 1);
  header.writeUInt16LE(1, at + 4);
  header.writeUInt16LE(32, at + 6);
  header.writeUInt32LE(images[i].length, at + 8);
  header.writeUInt32LE(offset, at + 12);
  offset += images[i].length;
});
fs.writeFileSync(out('favicon.ico'), Buffer.concat([header, ...images]));
console.log('favicons written:', ['favicon.svg', 'favicon.ico', 'favicon-48x48.png', 'apple-touch-icon.png', 'android-chrome-192x192.png', 'android-chrome-512x512.png'].join(', '));
