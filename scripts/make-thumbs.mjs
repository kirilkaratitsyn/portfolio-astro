// Generates small WebP thumbnails of the store screenshots for the work lists:
//   public/source/thumbs/<name>-480.webp  (desktop 2880x2000 -> 480 wide, rows)
//   public/source/thumbs/<name>-640.webp  (desktop -> 640 wide, cards on phones)
//   public/source/thumbs/<name>-1000.webp (desktop -> 1000 wide, feature and case pages)
//   public/source/thumbs/<name>-m200.webp / -m400.webp / -m800.webp (mobile 1179x1977 -> 200 / 400 / 800 wide)
//   src/lib/phone-tints.json: the color of the top of each mobile screenshot, which tints the status bar of the
//   phone mockup (components/Phone.astro), the way Safari does
// Run after adding or replacing a screenshot: node scripts/make-thumbs.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Only screenshots that the site actually references (works.yaml and the case study files).
const content = new URL('../src/content/', import.meta.url).pathname;
const files = [path.join(content, 'works.yaml')];
for (const dir of fs.readdirSync(path.join(content, 'projects'))) {
  for (const file of fs.readdirSync(path.join(content, 'projects', dir))) files.push(path.join(content, 'projects', dir, file));
}
const used = new Set();
for (const file of files) {
  for (const match of fs.readFileSync(file, 'utf8').matchAll(/(?:image|mobileImage): (\S+)/g)) {
    used.add(match[1].split('/').pop().replace(/\.[^.]+$/, '').replace(/-(desktop|mobile)$/, ''));
  }
}

const root = new URL('../public/source/', import.meta.url).pathname;
const out = path.join(root, 'thumbs');
fs.mkdirSync(out, { recursive: true });

const jobs = [
  ['desktop', '-desktop', [['480', 480, 74], ['640', 640, 76], ['1000', 1000, 78]]],
  ['mobile', '-mobile', [['m200', 200, 74], ['m400', 400, 78], ['m800', 800, 76]]],
];

const tints = {};
let count = 0;
for (const [dir, suffix, sizes] of jobs) {
  for (const file of fs.readdirSync(path.join(root, dir))) {
    if (!/\.(webp|png|jpe?g)$/i.test(file)) continue;
    const name = file.replace(/\.[^.]+$/, '').replace(suffix, '');
    if (!used.has(name)) continue;
    if (dir === 'mobile') {
      // Average of the top rows: the page color Safari would paint behind the status bar.
      const { data, info } = await sharp(path.join(root, dir, file)).extract({ left: 0, top: 0, width: 1179, height: 6 }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
      const sum = [0, 0, 0];
      for (let i = 0; i < data.length; i += info.channels) for (let c = 0; c < 3; c += 1) sum[c] += data[i + c];
      const rgb = sum.map((v) => Math.round(v / (data.length / info.channels)));
      const luminance = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;
      tints[name] = { tint: `#${rgb.map((v) => v.toString(16).padStart(2, '0')).join('')}`, dark: luminance < 0.55 };
    }
    for (const [label, width, quality] of sizes) {
      await sharp(path.join(root, dir, file)).resize({ width }).webp({ quality }).toFile(path.join(out, `${name}-${label}.webp`));
      count += 1;
    }
  }
}
fs.writeFileSync(new URL('../src/lib/phone-tints.json', import.meta.url), JSON.stringify(tints, null, 2) + '\n');
console.log(`${count} thumbnails written to public/source/thumbs, ${Object.keys(tints).length} phone tints to src/lib/phone-tints.json`);
