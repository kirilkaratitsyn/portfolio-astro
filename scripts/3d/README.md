# 3D art for the site

Every 3D object on the site exists twice:

- as a WebP poster in `public/source/3d/`, captured from the live object at rest by the scripts here. It is the first paint (the hero cube's is the LCP image) and the fallback when WebGL, scripts or motion are unavailable.
- as a live three.js object (`src/scripts/stage.ts`; the cube and the blocks in `src/lib/cube.ts`, the icons and the logo in `src/lib/icons.ts`, the globe in `src/lib/globe.ts`) that replaces the poster once the page has loaded.

Tone mapping is `NeutralToneMapping` at exposure 1 in the live renderer, and the posters are captured from it. ACES, used before, shifted the brand cobalt #2433F0 toward violet.

`stones-1720.webp` is the picture of the stones that used to be in the hero. It stays only because `og-image.html` (the template of `public/og-image.jpg`) still uses it.

## Icons and the logo

The icons of the Services and Process sections and the 3D logo (header and footer) are built in code, `src/lib/icons.ts`: simple shapes with soft bevels in a glossy clear-coated material, no model files. The logo is extruded from an outline traced from the brand PNG: `node scripts/3d/trace-mark.mjs` (needs `npm i --no-save d3-contour`), result `src/lib/mark-paths.json`.

Every icon also has a poster image, `public/source/3d/icon-<name>.webp` (first paint and fallback). They are captured from the live objects at rest, so they match exactly: build the site, serve it on port 4321, then `node scripts/3d/capture-posters.mjs`. Re-run it after changing an icon.

Dragging uses an arcball, so a drag inside the object turns it about X and Y and a drag near its edge spins it about Z. Every object drifts back to its resting pose.

## Hero cube

The puzzle cube in the hero is built in code too, `src/lib/cube.ts`: 27 rounded blocks in the site's colours, a few with a pattern drawn on a canvas (perforated, ribbed), no model or image files. It turns slowly, twists one layer every two or three seconds and, after a few twists, runs them backwards until it is whole again. It is a `data-pebble="cube"` host, so the stage gives it the same drag, tilt and poster swap as the icons, plus its own longer lens and key light (`userData.distance`, `userData.lights`).

Its poster, `public/source/3d/cube-560.webp` and `cube-1120.webp`, is captured from the live cube at rest (paused, every block home): build the site, serve it on port 4321, then `node scripts/3d/capture-cube.mjs`. Re-run it after changing the cube; the script also warns when the resting cube reaches past its host.

## Blocks

The small 3D objects around the site (stat cards, About, Feature, Contact, case pages) are single blocks of the hero cube, `makeBlock` in `src/lib/cube.ts`, placed with `src/components/Pebble.astro` (named after the pebbles they replaced). Same shape, finishes, lens and light as the cube: `white` is perforated white, `black` glossy ink, `cobalt` ribbed cobalt, `cobalt2` glossy cobalt. `<Pebble small>` (`data-pebble="<name>-small"`) is for blocks a few dozen pixels wide: plain white instead of the holes and three wide ribs instead of seven.

Their posters, `public/source/3d/block-<name>.webp` and `block-<name>-small.webp` (360 x 360), are captured from the live blocks at rest: build the site, serve it on port 4321, then `node scripts/3d/capture-blocks.mjs`.
