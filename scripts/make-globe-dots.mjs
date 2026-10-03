// Land dots for the globe section (src/sections/Globe.astro, scripts/stage.ts GlobeView).
// Samples a Fibonacci sphere and keeps the points that fall on land in Natural Earth's 1:110m land polygons
// (public domain), then writes them to src/lib/globe-dots.json as a flat [lat, lng, lat, lng, ...] array.
// For zooming in it also writes finer grids from the 1:50m polygons: three times as dense to
// public/source/3d/globe-land.bin and six times as dense to globe-land-2.bin. Each is a little-endian uint32 with the
// size of its Fibonacci sphere, then one bit per point of it (1 = land). The globe fetches them as it is zoomed in.
// Run once (needs network): node scripts/make-globe-dots.mjs
import fs from 'node:fs';

const SOURCE = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson';
const DENSE_SOURCE = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_land.geojson';
const COUNT = 15000;
const DENSE = [
  { count: COUNT * 9, file: 'globe-land.bin' },
  { count: COUNT * 36, file: 'globe-land-2.bin' },
];

async function loadLand(url) {
  const land = await (await fetch(url)).json();
  const rings = [];
  for (const feature of land.features) {
    const g = feature.geometry;
    const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
    for (const poly of polys) {
      const xs = poly[0].map((p) => p[0]);
      const ys = poly[0].map((p) => p[1]);
      rings.push({ outer: poly[0], holes: poly.slice(1), box: [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)] });
    }
  }
  return (lng, lat) =>
    rings.some((r) => lng >= r.box[0] && lng <= r.box[2] && lat >= r.box[1] && lat <= r.box[3] && inside(r.outer, lng, lat) && !r.holes.some((h) => inside(h, lng, lat)));
}
const inside = (ring, x, y) => {
  let hit = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
};

/** Point i of a Fibonacci sphere of n points, as [lat, lng] in degrees (the same formula as src/lib/globe.ts). */
const golden = Math.PI * (3 - Math.sqrt(5));
function fibonacci(i, n) {
  const y = 1 - (i / (n - 1)) * 2;
  const r = Math.sqrt(1 - y * y);
  const theta = golden * i;
  const lat = (Math.asin(y) * 180) / Math.PI;
  const lng = ((((Math.atan2(Math.sin(theta) * r, Math.cos(theta) * r) * 180) / Math.PI) + 540) % 360) - 180;
  return [lat, lng];
}

const onLand = await loadLand(SOURCE);
const out = [];
for (let i = 0; i < COUNT; i++) {
  const [lat, lng] = fibonacci(i, COUNT);
  if (lat < -58) continue; // no Antarctica
  if (onLand(lng, lat)) out.push(Math.round(lat * 10) / 10, Math.round(lng * 10) / 10);
}
fs.writeFileSync(new URL('../src/lib/globe-dots.json', import.meta.url), JSON.stringify(out));
console.log(`${out.length / 2} land dots written to src/lib/globe-dots.json`);

const onLandFine = await loadLand(DENSE_SOURCE);
for (const { count, file } of DENSE) {
  const bits = new Uint8Array(4 + Math.ceil(count / 8));
  new DataView(bits.buffer).setUint32(0, count, true);
  let dense = 0;
  for (let i = 0; i < count; i++) {
    const [lat, lng] = fibonacci(i, count);
    if (lat < -58 || !onLandFine(lng, lat)) continue;
    bits[4 + (i >> 3)] |= 1 << (i & 7);
    dense++;
  }
  fs.writeFileSync(new URL(`../public/source/3d/${file}`, import.meta.url), bits);
  console.log(`${dense} land dots (of ${count}) written to public/source/3d/${file}`);
}
