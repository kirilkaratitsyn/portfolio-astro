// Picks an accent color for every project of the catalog from its screenshot (the most prominent saturated color)
// and writes it to src/content/works.yaml as `accent`. The project cards use it as their background.
// Run after adding a project: node scripts/make-accents.mjs   (hand-tuned values are kept: set `accentLocked: true`)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import YAML from 'yaml';

const root = new URL('../', import.meta.url).pathname;
const file = path.join(root, 'src/content/works.yaml');
const works = YAML.parse(fs.readFileSync(file, 'utf8'));

function toHsv(r, g, b) {
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  let h = 0;
  if (d) h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [((h * 60) + 360) % 360, max ? d / max : 0, max / 255];
}
function toRgb(h, s, v) {
  const c = v * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = v - c;
  const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return [r + m, g + m, b + m].map((n) => Math.round(n * 255));
}
const hex = (rgb) => '#' + rgb.map((n) => n.toString(16).padStart(2, '0')).join('');

async function accentOf(image) {
  const src = path.join(root, 'public', image);
  const { data } = await sharp(src).resize(96, 66, { fit: 'fill' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const bins = Array.from({ length: 36 }, () => ({ w: 0, r: 0, g: 0, b: 0 }));
  let luma = 0;
  const total = data.length / 3;
  for (let i = 0; i < data.length; i += 3) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    luma += (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    const [h, s, v] = toHsv(r, g, b);
    if (s < 0.3 || v < 0.25) continue;
    const w = s * (0.4 + v);
    const bin = bins[Math.floor(h / 10) % 36];
    bin.w += w; bin.r += w * r; bin.g += w * g; bin.b += w * b;
  }
  // a hue and its two neighbours count together, so a gradient is not split
  let best = -1, bestW = 0;
  bins.forEach((_, i) => { const w = bins[i].w + 0.6 * (bins[(i + 35) % 36].w + bins[(i + 1) % 36].w); if (w > bestW) { bestW = w; best = i; } });
  if (best < 0 || bestW / total < 0.02) return luma / total < 0.5 ? '#0e1018' : '#dfe2f0';
  const near = [bins[best], bins[(best + 35) % 36], bins[(best + 1) % 36]];
  const w = near.reduce((n, b) => n + b.w, 0);
  const rgb = [near.reduce((n, b) => n + b.r, 0) / w, near.reduce((n, b) => n + b.g, 0) / w, near.reduce((n, b) => n + b.b, 0) / w];
  const [h, s, v] = toHsv(...rgb);
  return hex(toRgb(h, Math.min(0.9, Math.max(0.45, s * 1.1)), Math.min(0.88, Math.max(0.42, v))));
}

for (const work of works) {
  if (work.accentLocked) continue;
  work.accent = await accentOf(work.image);
  console.log(work.id.padEnd(26), work.accent);
}
fs.writeFileSync(file, YAML.stringify(works, { lineWidth: 0 }));
