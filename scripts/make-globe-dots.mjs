// Land dots for the globe section (src/sections/Globe.astro, scripts/stage.ts GlobeView).
// Samples a Fibonacci sphere and keeps the points that fall on land in Natural Earth's 1:110m land polygons
// (public domain), then writes them to src/lib/globe-dots.json as a flat [lat, lng, lat, lng, ...] array.
// Run once (needs network): node scripts/make-globe-dots.mjs
import fs from 'node:fs';

const SOURCE = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson';
const COUNT = 15000;

const land = await (await fetch(SOURCE)).json();
const rings = [];
for (const feature of land.features) {
  const g = feature.geometry;
  const polys = g.type === 'Polygon' ? [g.coordinates] : g.coordinates;
  for (const poly of polys) rings.push({ outer: poly[0], holes: poly.slice(1) });
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
const onLand = (lng, lat) => rings.some((r) => inside(r.outer, lng, lat) && !r.holes.some((h) => inside(h, lng, lat)));

const out = [];
const golden = Math.PI * (3 - Math.sqrt(5));
for (let i = 0; i < COUNT; i++) {
  const y = 1 - (i / (COUNT - 1)) * 2;
  const r = Math.sqrt(1 - y * y);
  const theta = golden * i;
  const lat = (Math.asin(y) * 180) / Math.PI;
  const lng = ((((Math.atan2(Math.sin(theta) * r, Math.cos(theta) * r) * 180) / Math.PI) + 540) % 360) - 180;
  if (lat < -58) continue; // no Antarctica
  if (onLand(lng, lat)) out.push(Math.round(lat * 10) / 10, Math.round(lng * 10) / 10);
}
fs.writeFileSync(new URL('../src/lib/globe-dots.json', import.meta.url), JSON.stringify(out));
console.log(`${out.length / 2} land dots written to src/lib/globe-dots.json`);
