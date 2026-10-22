// Small WebP versions of the project preview images (public/og/projects/*.jpg, 1200x630) for the blog cards and the menu:
//   public/og/thumbs/<name>-480.webp  (menu and small cards)
//   public/og/thumbs/<name>-800.webp  (blog cards)
//   public/og/thumbs/<name>-1200.webp (cover of an article, the featured card)
//   blog covers (public/og/blog/<locale>/<slug>.jpg, from scripts/make-covers.mjs) become blog-<locale>-<slug>-<width>.webp
// Run after adding or replacing a preview image: node scripts/make-og-thumbs.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const source = new URL('../public/og/projects/', import.meta.url).pathname;
const out = new URL('../public/og/thumbs/', import.meta.url).pathname;
fs.mkdirSync(out, { recursive: true });

let count = 0;
// project previews: public/og/projects/<name>.jpg -> <name>-<width>.webp; blog covers: public/og/blog/<locale>/<slug>.jpg -> blog-<locale>-<slug>-<width>.webp
const sources = [];
for (const file of fs.readdirSync(source)) if (/\.jpe?g$/i.test(file)) sources.push([path.join(source, file), file.replace(/\.[^.]+$/, '')]);
const blog = new URL('../public/og/blog/', import.meta.url).pathname;
if (fs.existsSync(blog)) {
  for (const locale of fs.readdirSync(blog)) {
    if (!fs.statSync(path.join(blog, locale)).isDirectory()) continue;
    for (const file of fs.readdirSync(path.join(blog, locale))) if (/\.jpe?g$/i.test(file)) sources.push([path.join(blog, locale, file), `blog-${locale}-${file.replace(/\.[^.]+$/, '')}`]);
  }
}
for (const [file, name] of sources) {
  for (const [width, quality] of [[480, 72], [800, 76], [1200, 78]]) {
    await sharp(file).resize({ width }).webp({ quality }).toFile(path.join(out, `${name}-${width}.webp`));
    count += 1;
  }
}
console.log(`${count} thumbnails in public/og/thumbs`);
