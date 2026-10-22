// Small WebP versions of the project preview images (public/og/projects/*.jpg, 1200x630) for the blog cards and the menu:
//   public/og/thumbs/<name>-480.webp  (menu and small cards)
//   public/og/thumbs/<name>-800.webp  (blog cards)
//   public/og/thumbs/<name>-1200.webp (cover of an article, the featured card)
// Run after adding or replacing a preview image: node scripts/make-og-thumbs.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const source = new URL('../public/og/projects/', import.meta.url).pathname;
const out = new URL('../public/og/thumbs/', import.meta.url).pathname;
fs.mkdirSync(out, { recursive: true });

let count = 0;
for (const file of fs.readdirSync(source)) {
  if (!/\.jpe?g$/i.test(file)) continue;
  const name = file.replace(/\.[^.]+$/, '');
  for (const [width, quality] of [[480, 72], [800, 76], [1200, 78]]) {
    await sharp(path.join(source, file)).resize({ width }).webp({ quality }).toFile(path.join(out, `${name}-${width}.webp`));
    count += 1;
  }
}
console.log(`${count} thumbnails in public/og/thumbs`);
