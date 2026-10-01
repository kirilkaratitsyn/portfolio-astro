# 3D art for the homepage

The cobalt stones in the hero and the pebbles used as icons exist twice:

- as WebP posters in `public/source/3d/` (rendered once with the scripts here). They are the first paint, the LCP image and the fallback when WebGL, scripts or motion are unavailable.
- as live three.js objects (`src/scripts/stage.ts`, shapes in `src/lib/stones.ts`) that replace the posters after the page has loaded. The shapes come from the same generator and seeds, so the swap is invisible. Seeds: pebbles cobalt 3, cobalt2 9, white 11, black 5; hero stones seed 7.

Tone mapping is `NeutralToneMapping` at exposure 1 everywhere (live renderer, `stones.html`, `pebble.html`). ACES, used before, shifted the brand cobalt #2433F0 toward violet; keep the three in sync or the posters and the live objects will differ in color.

If you change the shapes in `src/lib/stones.ts`, change `stones.html` / `pebble.html` the same way and re-render the posters (`pebble.html?...&r=2.25` is the size used on the site).

To re-render:

1. In a scratch folder: `npm i three@0.186.1`, copy `stones.html` and `pebble.html` next to `node_modules`, and serve the folder (`python3 -m http.server 8765`).
2. Open `stones.html?p=cobalt` (1720 x 1188) and `pebble.html?c=%232433f0&seed=3` (520 x 520) in headless Chrome with `--enable-unsafe-swiftshader --use-angle=swiftshader`, wait for `window.__done`, and screenshot the `#c` canvas with a transparent background.
3. Convert to WebP with sharp (stones: 1720 and 860 px wide, quality 82; pebbles: 360 px wide).

## Icons and the logo

The icons of the Services and Process sections and the 3D logo (header and footer) are built in code, `src/lib/icons.ts`: simple shapes with soft bevels in the same glossy material as the stones, no model files. The logo is extruded from an outline traced from the brand PNG: `node scripts/3d/trace-mark.mjs` (needs `npm i --no-save d3-contour`), result `src/lib/mark-paths.json`.

Every icon also has a poster image, `public/source/3d/icon-<name>.webp` (first paint and fallback). They are captured from the live objects at rest, so they match exactly: build the site, serve it on port 4321, then `node scripts/3d/capture-posters.mjs`. Re-run it after changing an icon.

Dragging uses an arcball, so a drag inside the object turns it about X and Y and a drag near its edge spins it about Z. Icons and the logo drift back to their resting pose; pebbles stay where you leave them.
