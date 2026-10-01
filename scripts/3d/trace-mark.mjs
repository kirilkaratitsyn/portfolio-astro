// Turns the logo PNG into the outline the 3D logo is extruded from (src/lib/mark-paths.json).
// Run from the repo root: npm i --no-save d3-contour && node scripts/3d/trace-mark.mjs
// SIGMA / THR set how much heavier the strokes become (a blur, then a lower cut-off = a clean dilation).
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { contours } from 'd3-contour';
const root = new URL('../../', import.meta.url).pathname;
const sharp = createRequire(root + 'package.json')('sharp');
const src = path.join(root, 'src/assets/brand/mark-black.png');
const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;
// "ink" = how opaque and dark a pixel is
const values = new Float64Array(W * H);
for (let i = 0; i < W * H; i++) { const a = data[i * 4 + 3] / 255; const l = 1 - (data[i * 4] + data[i * 4 + 1] + data[i * 4 + 2]) / 765; values[i] = a * l; }
// Make the strokes about 50% heavier: blur the ink and cut it lower (a clean dilation, small gaps stay open).
const blurred = await sharp(Buffer.from(Uint8Array.from(values, (v) => Math.round(v * 255))), { raw: { width: W, height: H, channels: 1 } }).blur(Number(process.env.SIGMA ?? 12)).raw().toBuffer({ resolveWithObject: true });
const ch = blurred.info.channels;
const thick = Float64Array.from({ length: W * H }, (_, i) => blurred.data[i * ch] / 255);
const multi = contours().size([W, H]).thresholds([Number(process.env.THR ?? 0.27)])(thick)[0];
// Ramer-Douglas-Peucker
const rdp = (pts, eps) => {
  if (pts.length < 3) return pts;
  const [a, b] = [pts[0], pts[pts.length - 1]];
  let dmax = 0, idx = 0;
  const dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
  for (let i = 1; i < pts.length - 1; i++) { const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + b[0] * a[1] - b[1] * a[0]) / len; if (d > dmax) { dmax = d; idx = i; } }
  if (dmax <= eps) return [a, b];
  return [...rdp(pts.slice(0, idx + 1), eps).slice(0, -1), ...rdp(pts.slice(idx), eps)];
};
const out = [];
let total = 0;
for (const polygon of multi.coordinates) {
  const rings = polygon.map((ring) => {
    const pts = ring.slice(0, -1);
    let far = 0, best = 0;
    pts.forEach((q, i) => { const d = Math.hypot(q[0] - pts[0][0], q[1] - pts[0][1]); if (d > best) { best = d; far = i; } });
    const h1 = rdp(pts.slice(0, far + 1), 0.2);
    const h2 = rdp([...pts.slice(far), pts[0]], 0.2);
    const simple = [...h1.slice(0, -1), ...h2.slice(0, -1)];
    return simple.map(([x, y]) => [Math.round((x - W / 2) / H * 1000) / 1000, Math.round((H / 2 - y) / H * 1000) / 1000]);
  }).filter((r) => r.length >= 3);
  total += rings.reduce((n, r) => n + r.length, 0);
  out.push(rings);
}
fs.writeFileSync(path.join(root, 'src/lib/mark-paths.json'), JSON.stringify({ aspect: W / H, polygons: out }));
console.log('polygons', out.length, 'rings', out.map((p) => p.length), 'points', total, 'bytes', JSON.stringify(out).length);
