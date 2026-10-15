// The hero cube: 27 rounded blocks in the site's colours (cobalt, white, pale, ink), most of them in the same glossy
// finish as the stones and the 3D icons, a few with a pattern (perforated, ribbed). It turns slowly by itself, and
// every two or three seconds one layer twists a quarter turn, like a puzzle cube: a few twists mix it up, then the
// same twists run backwards and it is whole again. Drawn by the stage as a `data-pebble="cube"` object
// (scripts/stage.ts), so dragging, tilting and the poster fallback work as for the pebbles and icons.
// Original work: shapes, colours and patterns are drawn here in code, no model or image files.
import {
  CanvasTexture, DirectionalLight, Group, Matrix4, Mesh, MeshPhysicalMaterial, Quaternion, RepeatWrapping, SRGBColorSpace, Vector3,
  type MeshPhysicalMaterialParameters, type Texture,
} from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const COBALT = '#2433f0';
const INK = '#0e1018';
const WHITE = '#f4f5fa';
const PALE = '#c9cfe4';
/** Distance between block centres; the blocks are 1 wide, so the gaps are 0.05. */
const STEP = 1.05;
const RADIUS = 0.14;
/** Seconds per quarter turn of a layer, and the pause between turns. */
const TURN = 0.85;
const PAUSE: [number, number] = [1.3, 2.3];

/** Small seeded random numbers, so the cube looks the same on every visit (and in its poster). */
function makeRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/**
 * RoundedBoxGeometry spreads one 0..1 square over a flat face and its rounded edges; the flat part starts here, so a
 * pattern drawn inside it sits on the flat face with an even margin.
 */
const INNER = ((Math.PI * RADIUS) / 4) / ((Math.PI * RADIUS) / 2 + 1 - 2 * RADIUS);

/** A face pattern drawn on a canvas. */
function pattern(draw: (ctx: CanvasRenderingContext2D, size: number) => void, size = 256): Texture {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  draw(canvas.getContext('2d')!, size);
  const texture = new CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.anisotropy = 8;
  return texture;
}
const colour = (texture: Texture) => ((texture.colorSpace = SRGBColorSpace), texture);

/** Few and large holes (5 x 5 on the flat face): they read at hero size and do not shimmer while the cube turns. */
function holes(ctx: CanvasRenderingContext2D, size: number, ground: string, dot: string) {
  ctx.fillStyle = ground;
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = dot;
  const n = 5;
  const from = INNER * size;
  const cell = (size - 2 * from) / n;
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    ctx.beginPath();
    ctx.arc(from + (x + 0.5) * cell, from + (y + 0.5) * cell, cell * 0.25, 0, Math.PI * 2);
    ctx.fill();
  }
}

/** Soft ribs: a gradient per rib, so the grooves stay smooth when the texture is scaled down. */
function ribs(ctx: CanvasRenderingContext2D, size: number, light: string, dark: string) {
  const n = 7;
  const from = INNER * size;
  const cell = (size - 2 * from) / n;
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < n; i++) {
    const x = from + i * cell;
    const g = ctx.createLinearGradient(x, 0, x + cell, 0);
    g.addColorStop(0, dark);
    g.addColorStop(0.22, light);
    g.addColorStop(0.78, light);
    g.addColorStop(1, dark);
    ctx.fillStyle = g;
    ctx.fillRect(x, 0, cell, size);
  }
}

/** The stones' finish: a deep clear coat over a smooth colour. */
const glossy = (hex: string, extra: MeshPhysicalMaterialParameters = {}) =>
  new MeshPhysicalMaterial({ color: hex, roughness: 0.2, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1, ...extra });

type Tone = 'cobalt' | 'light' | 'ink';
interface Finish {
  material: MeshPhysicalMaterial;
  count: number;
  tone: Tone;
  plain: boolean;
}

/** The finishes and how many of the 27 blocks get each: mostly cobalt and white, ink and patterns as accents. */
function finishes(): Finish[] {
  return [
    { material: glossy(COBALT), count: 9, tone: 'cobalt', plain: true },
    { material: glossy(WHITE), count: 6, tone: 'light', plain: true },
    { material: glossy(PALE, { roughness: 0.42, clearcoatRoughness: 0.3 }), count: 3, tone: 'light', plain: true },
    { material: glossy(INK, { envMapIntensity: 1.25 }), count: 5, tone: 'ink', plain: true },
    {
      material: glossy('#ffffff', { map: colour(pattern((ctx, s) => holes(ctx, s, WHITE, '#2a2e3d'))), roughness: 0.3 }),
      count: 2, tone: 'light', plain: false,
    },
    {
      // Ribbed cobalt: the ribs shade the colour and the bump map; satin rather than glossy, so the ribs show.
      material: glossy(COBALT, {
        map: colour(pattern((ctx, s) => ribs(ctx, s, '#ffffff', '#c3c8f2'))),
        bumpMap: pattern((ctx, s) => ribs(ctx, s, '#ffffff', '#1a1f5a')),
        bumpScale: 2.2, roughness: 0.34, clearcoat: 0.35, clearcoatRoughness: 0.25,
      }),
      count: 2, tone: 'cobalt', plain: false,
    },
  ];
}

type Axis = 'x' | 'y' | 'z';
interface Move {
  axis: Axis;
  layer: number;
  dir: number;
}

/** Round a rotation to whole quarter turns, so many twists add up without drift. */
function snap(q: Quaternion) {
  const m = new Matrix4().makeRotationFromQuaternion(q);
  const e = m.elements;
  for (const i of [0, 1, 2, 4, 5, 6, 8, 9, 10]) e[i] = Math.round(e[i]!);
  return q.setFromRotationMatrix(m);
}

/** The 27 cells, x then y then z. */
const CELLS: Vector3[] = [];
for (let x = -1; x <= 1; x++) for (let y = -1; y <= 1; y++) for (let z = -1; z <= 1; z++) CELLS.push(new Vector3(x, y, z));
/** Cells on the three faces seen at the resting pose (right, top, front). */
const SEEN = CELLS.map((c) => c.x === 1 || c.y === 1 || c.z === 1);

/**
 * Deal the finishes to the cells: of many seeded shuffles, keep the one where the faces seen at rest have the
 * fewest touching blocks of the same tone and show three patterns and three ink blocks, none of them on the near
 * corner. Same result on every visit.
 */
function deal(pool: Finish[]): Finish[] {
  let best = pool;
  let bestScore = Infinity;
  for (let seed = 1; seed <= 400; seed++) {
    const rnd = makeRng(seed * 7919);
    const deck = pool.slice();
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [deck[i], deck[j]] = [deck[j]!, deck[i]!];
    }
    let score = 0;
    for (let a = 0; a < 27; a++) for (let b = a + 1; b < 27; b++) {
      if (SEEN[a] && SEEN[b] && CELLS[a]!.distanceToSquared(CELLS[b]!) === 1 && deck[a]!.tone === deck[b]!.tone) score += 1;
    }
    const patterns = deck.filter((d, i) => SEEN[i] && !d.plain).length;
    const inks = deck.filter((d, i) => SEEN[i] && d.tone === 'ink').length;
    score += Math.abs(patterns - 3) * 2 + Math.abs(inks - 3) * 2;
    // The corner nearest to the eye (the last cell) is the brightest spot: no ink block there.
    if (deck[26]!.tone === 'ink') score += 4;
    if (score < bestScore) {
      bestScore = score;
      best = deck;
    }
  }
  return best;
}

export function makeCube() {
  const root = new Group();
  // `body` turns slowly by itself; the drag and tilt of the stage act on `root`.
  const body = new Group();
  root.add(body);
  const geometry = new RoundedBoxGeometry(1, 1, 1, 4, RADIUS);
  const dealt = deal(finishes().flatMap((f) => Array.from({ length: f.count }, () => f)));
  const blocks = CELLS.map((cell, i) => {
    const block = new Mesh(geometry, dealt[i]!.material);
    block.position.copy(cell).multiplyScalar(STEP);
    block.userData.home = cell.clone();
    block.userData.cell = cell.clone();
    body.add(block);
    return block;
  });
  // A resting angle that shows three faces (right, top, front), like a cube held up to the light.
  root.rotation.set(0.5, -0.74, 0.05);
  root.scale.setScalar(1);
  root.userData.rest = root.quaternion.clone();
  // A longer lens than the pebbles' (9.5): a product shot, not a wide angle with a bulging near corner.
  root.userData.distance = 20;
  // A key light from the upper left, fixed in the scene (the stage adds it there): the top faces come out brightest, the
  // left ones a little darker and the right ones darkest, so the cube reads as a solid at a glance.
  const key = new DirectionalLight('#ffffff', 2.6);
  key.position.set(-2.5, 9, 2.5);
  root.userData.lights = [key];

  const pivot = new Group();
  body.add(pivot);
  const axes: Axis[] = ['x', 'y', 'z'];
  let rnd = makeRng(23);
  let wait = 1.2;
  let turn: (Move & { t: number; pieces: Mesh[] }) | null = null;
  /** The twists made so far; once there are a few, they are undone one by one, last first. */
  let done: Move[] = [];
  let solving = false;
  let goal = 4;

  const nextMove = (): Move => {
    if (solving) {
      const last = done.pop()!;
      return { ...last, dir: -last.dir };
    }
    const prev = done[done.length - 1];
    let move: Move;
    // Never the same layer twice in a row (that would undo the last twist or look like one longer turn).
    do move = { axis: axes[Math.floor(rnd() * 3)]!, layer: Math.floor(rnd() * 3) - 1, dir: rnd() < 0.5 ? 1 : -1 };
    while (prev && prev.axis === move.axis && prev.layer === move.layer);
    done.push(move);
    return move;
  };

  const start = () => {
    const move = nextMove();
    const pieces = blocks.filter((b) => (b.userData.cell as Vector3)[move.axis] === move.layer);
    pivot.rotation.set(0, 0, 0);
    pivot.updateMatrixWorld();
    for (const piece of pieces) pivot.attach(piece);
    turn = { ...move, t: 0, pieces };
  };

  const finish = () => {
    if (!turn) return;
    pivot.rotation.set(0, 0, 0);
    pivot.rotation[turn.axis] = (turn.dir * Math.PI) / 2;
    pivot.updateMatrixWorld();
    for (const piece of turn.pieces) {
      body.attach(piece);
      const cell = piece.userData.cell as Vector3;
      cell.set(Math.round(piece.position.x / STEP), Math.round(piece.position.y / STEP), Math.round(piece.position.z / STEP));
      piece.position.copy(cell).multiplyScalar(STEP);
      snap(piece.quaternion);
    }
    pivot.rotation.set(0, 0, 0);
    turn = null;
    wait = PAUSE[0] + rnd() * (PAUSE[1] - PAUSE[0]);
    if (!solving && done.length >= goal) solving = true;
    else if (solving && !done.length) {
      // Whole again: hold it a little longer, then mix it up anew.
      solving = false;
      goal = 3 + Math.floor(rnd() * 3);
      wait += 1.4;
    }
  };

  /** Back to the resting state of the poster: every block home, no spin, no twist under way. */
  root.userData.reset = () => {
    if (turn) for (const piece of turn.pieces) body.attach(piece);
    turn = null;
    pivot.rotation.set(0, 0, 0);
    for (const block of blocks) {
      const home = block.userData.home as Vector3;
      (block.userData.cell as Vector3).copy(home);
      block.position.copy(home).multiplyScalar(STEP);
      block.quaternion.identity();
    }
    body.rotation.set(0, 0, 0);
    rnd = makeRng(23);
    wait = 1.2;
    done = [];
    solving = false;
    goal = 4;
  };
  /** Set by the poster capture (scripts/3d/capture-cube.mjs): no spin and no twists. */
  root.userData.paused = false;
  /** How far the twist under way is (0..1), or -1 between twists. */
  root.userData.twist = () => (turn ? turn.t : -1);

  const reduce = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : null;

  /**
   * Called by the stage on every frame while the cube is on screen. True while it moves by itself: always, unless it
   * is paused or the visitor asked for less motion (a twist under way is then completed at once).
   */
  root.userData.tick = (dt: number) => {
    if (root.userData.paused || reduce?.matches) {
      if (!turn) return false;
      finish();
      return true;
    }
    body.rotation.y += dt * 0.16;
    if (!turn) {
      wait -= dt;
      if (wait <= 0) start();
      return true;
    }
    turn.t = Math.min(1, turn.t + dt / TURN);
    const t = turn.t;
    const e = t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;
    pivot.rotation[turn.axis] = (e * turn.dir * Math.PI) / 2;
    if (t >= 1) finish();
    return true;
  };
  return root;
}
