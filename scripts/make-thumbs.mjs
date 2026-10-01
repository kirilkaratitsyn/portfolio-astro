// Generates small WebP thumbnails of the store screenshots for the work lists:
//   public/source/thumbs/<name>-480.webp  (desktop 2880x2000 -> 480 wide, rows)
//   public/source/thumbs/<name>-1000.webp (desktop -> 1000 wide, feature and case pages)
//   public/source/thumbs/<name>-m200.webp / -m400.webp (mobile 1179x1977 -> 200 / 400 wide)
// Run after adding or replacing a screenshot: node scripts/make-thumbs.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = new URL('../public/source/', import.meta.url).pathname;
const out = path.join(root, 'thumbs');
fs.mkdirSync(out, { recursive: true });

const jobs = [
  ['desktop', '-desktop', [['480', 480, 74], ['1000', 1000, 78]]],
  ['mobile', '-mobile', [['m200', 200, 74], ['m400', 400, 78]]],
];

let count = 0;
for (const [dir, suffix, sizes] of jobs) {
  for (const file of fs.readdirSync(path.join(root, dir))) {
    if (!/\.(webp|png|jpe?g)$/i.test(file)) continue;
    const name = file.replace(/\.[^.]+$/, '').replace(suffix, '');
    for (const [label, width, quality] of sizes) {
      await sharp(path.join(root, dir, file)).resize({ width }).webp({ quality }).toFile(path.join(out, `${name}-${label}.webp`));
      count += 1;
    }
  }
}
console.log(`${count} thumbnails written to public/source/thumbs`);
