// Live 3D for the homepage stones and the icon pebbles.
//
// One WebGL renderer draws every object and copies its picture into a small 2D canvas that lives inside the
// object's own section. The canvases scroll with the page like any other element (no overlay that lags behind
// the scroll), CSS clips them, and nothing is drawn while nothing moves or while a view is off screen.
// The poster images stay in the HTML as the first paint and as the fallback when WebGL is unavailable.
import {
  Group, NeutralToneMapping, PerspectiveCamera, PMREMGenerator, Quaternion, Scene, Vector3, WebGLRenderer,
  type Mesh, type Object3D, type Texture,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { HERO_CAMERA, PEBBLE_CAMERA, makeHeroStones, makePebble, type PebbleName } from '../lib/stones';
import { isIcon, makeIcon, makeLogo } from '../lib/icons';
import { GLOBE_CAMERA, GLOBE_LAND, GLOBE_MAX_ZOOM, GLOBE_RADIUS, makeGlobe, type Globe, type GlobeMarker } from '../lib/globe';

const DEG = Math.PI / 180;
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const HERO_DISTANCE = HERO_CAMERA.position[2];
/** World units across the hero poster: 2 * distance * tan(fov / 2) * aspect. */
const HERO_UNITS_WIDE = 2 * HERO_DISTANCE * Math.tan((HERO_CAMERA.fov / 2) * DEG) * HERO_CAMERA.aspect;
/** World units across the pebble poster. */
const PEBBLE_UNITS = 2 * PEBBLE_CAMERA.distance * Math.tan((PEBBLE_CAMERA.fov / 2) * DEG);

interface Pointer {
  x: number;
  y: number;
  /** Smoothed velocity, px per second. */
  vx: number;
  vy: number;
  type: string;
  inside: boolean;
}

const yieldMain = () => new Promise<void>((resolve) => setTimeout(resolve, 0));

const tmpAxis = new Vector3();
const tmpAxis2 = new Vector3();
const tmpTo = new Vector3();
const tmpQuat = new Quaternion();
/** Turn an object by an angular velocity (rad/s, world axes) for dt seconds. */
function spin(mesh: Object3D, wx: number, wy: number, wz: number, dt: number) {
  const speed = Math.hypot(wx, wy, wz);
  if (speed < 1e-6) return;
  tmpAxis.set(wx / speed, wy / speed, wz / speed);
  tmpQuat.setFromAxisAngle(tmpAxis, speed * dt);
  mesh.quaternion.premultiply(tmpQuat);
}

abstract class View {
  readonly canvas = document.createElement('canvas');
  readonly ctx: CanvasRenderingContext2D;
  readonly scene = new Scene();
  readonly camera = new PerspectiveCamera();
  visible = false;
  dirty = true;
  live = false;
  /** The copy to the page canvas came out empty too often: leave the poster alone. */
  dead = false;
  fails = 0;
  cssW = 0;
  cssH = 0;
  pw = 0;
  ph = 0;

  constructor(
    protected readonly stage: Stage,
    readonly host: HTMLElement,
    private readonly dprCap: number,
    /** Upper limit of the canvas in device pixels: every frame of it is rendered and copied. */
    private readonly budget = 4.2e6,
  ) {
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('2D canvas is unavailable');
    this.ctx = ctx;
    this.scene.environment = stage.env;
    this.canvas.setAttribute('aria-hidden', 'true');
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.position = 'absolute';
  }

  resize() {
    this.measure();
    // A full-width canvas on a big screen would be huge: keep the picture within the budget.
    const dpr = Math.min(window.devicePixelRatio || 1, this.dprCap, Math.sqrt(this.budget / Math.max(1, this.cssW * this.cssH)));
    this.pw = Math.max(1, Math.round(this.cssW * dpr));
    this.ph = Math.max(1, Math.round(this.cssH * dpr));
    this.canvas.width = this.pw;
    this.canvas.height = this.ph;
    this.dirty = true;
  }

  /** Called once the first picture is on the canvas: hide the poster. */
  abstract showLive(): void;
  abstract hideLive(): void;
  protected abstract measure(): void;
  /** Advance the simulation; true while anything is still moving. */
  abstract step(dt: number, scroll: number): boolean;
  /** Copy the simulation into the meshes just before drawing. */
  abstract sync(): void;
  abstract pick(x: number, y: number): boolean;
  /** Pointer moved over the page; true when this view needs frames for it. */
  hover(_p: Pointer): boolean {
    return false;
  }
  leave() {}
  grab(_p: Pointer) {}
  drag(_p: Pointer) {}
  release(_p: Pointer) {}
  poke(_x: number, _y: number) {}
}

/* ------------------------------------------------------------------ hero stones */

interface HeroStone {
  mesh: Mesh;
  home: Vector3;
  radius: number;
  /** Position in world units relative to the poster center, and velocity. */
  x: number;
  y: number;
  vx: number;
  vy: number;
  /** Free spin (rad/s): pointer strokes, scroll, flings. Rolling is added on top. */
  wx: number;
  wy: number;
  wz: number;
  /** Parallax strength on scroll, from depth. */
  drift: number;
  grabbed: boolean;
  grabDx: number;
  grabDy: number;
}

class HeroView extends View {
  private stones: HeroStone[];
  private poster: HTMLImageElement;
  private k = 1;
  private cx = 0;
  private cy = 0;
  private pointer: Pointer | null = null;
  private grabbed: HeroStone | null = null;

  constructor(stage: Stage, host: HTMLElement, poster: HTMLImageElement) {
    // The hero redraws on every scroll frame (its stones drift at different depths), so it gets the smaller budget.
    super(stage, host, 1.5, 2.4e6);
    this.poster = poster;
    Object.assign(this.canvas.style, { inset: '0', width: '100%', height: '100%' });
    host.append(this.canvas);
    this.stones = makeHeroStones().map(({ mesh, home, radius }) => {
      this.scene.add(mesh);
      return {
        mesh, home, radius, x: home.x, y: home.y, vx: 0, vy: 0, wx: 0, wy: 0, wz: 0,
        drift: 0.05 + 0.1 * (1 - (home.z + 1.6) / 2.8), grabbed: false, grabDx: 0, grabDy: 0,
      };
    });
    this.camera.position.set(0, HERO_CAMERA.position[1], HERO_DISTANCE);
  }

  showLive() {
    this.poster.style.opacity = '0';
    this.live = true;
  }
  hideLive() {
    this.poster.style.opacity = '';
    this.live = false;
  }

  protected measure() {
    this.cssW = this.host.clientWidth;
    this.cssH = this.host.clientHeight;
    const hostRect = this.host.getBoundingClientRect();
    const posterRect = this.poster.getBoundingClientRect();
    this.cx = posterRect.left + posterRect.width / 2 - hostRect.left;
    this.cy = posterRect.top + posterRect.height / 2 - hostRect.top;
    this.k = posterRect.width / HERO_UNITS_WIDE;
    // A frustum centered on the poster that covers the whole canvas, then the canvas slice of it.
    const fullW = 2 * Math.max(this.cx, this.cssW - this.cx);
    const fullH = 2 * Math.max(this.cy, this.cssH - this.cy);
    this.camera.fov = (2 * Math.atan(fullH / this.k / 2 / HERO_DISTANCE)) / DEG;
    this.camera.aspect = fullW / fullH;
    this.camera.setViewOffset(fullW, fullH, fullW / 2 - this.cx, fullH / 2 - this.cy, this.cssW, this.cssH);
    this.camera.lookAt(0, 0, 0);
    this.camera.updateProjectionMatrix();
  }

  /** Screen scale of a point at depth z. */
  private depth(z: number) {
    return HERO_DISTANCE / (HERO_DISTANCE - z);
  }

  private local(p: Pointer) {
    const rect = this.canvas.getBoundingClientRect();
    return { x: p.x - rect.left, y: p.y - rect.top, inside: p.x >= rect.left && p.x <= rect.right && p.y >= rect.top && p.y <= rect.bottom };
  }

  pick(x: number, y: number) {
    return this.stoneAt(x, y) !== null;
  }

  private stoneAt(clientX: number, clientY: number): HeroStone | null {
    const rect = this.canvas.getBoundingClientRect();
    const px = clientX - rect.left;
    const py = clientY - rect.top;
    let best: HeroStone | null = null;
    for (const s of this.stones) {
      const f = this.depth(s.home.z);
      const dx = px - (this.cx + s.x * this.k * f);
      const dy = py - (this.cy - s.y * this.k * f);
      if (Math.hypot(dx, dy) < s.radius * this.k * f * 0.92 && (!best || s.home.z > best.home.z)) best = s;
    }
    return best;
  }

  hover(p: Pointer) {
    this.pointer = p;
    return this.local(p).inside;
  }
  leave() {
    this.pointer = null;
  }

  grab(p: Pointer) {
    const s = this.stoneAt(p.x, p.y);
    if (!s) return;
    const l = this.local(p);
    const f = this.depth(s.home.z);
    s.grabbed = true;
    s.grabDx = s.x - (l.x - this.cx) / (this.k * f);
    s.grabDy = s.y + (l.y - this.cy) / (this.k * f);
    s.vx = s.vy = 0;
    this.grabbed = s;
  }
  drag(p: Pointer) {
    this.pointer = p;
  }
  release() {
    if (this.grabbed) this.grabbed.grabbed = false;
    this.grabbed = null;
  }

  poke(x: number, y: number) {
    const s = this.stoneAt(x, y);
    if (!s) return;
    const rect = this.canvas.getBoundingClientRect();
    const f = this.depth(s.home.z);
    const dx = s.x - (x - rect.left - this.cx) / (this.k * f);
    const dy = s.y + (y - rect.top - this.cy) / (this.k * f);
    const d = Math.hypot(dx, dy) || 1;
    s.vx += (dx / d) * 5;
    s.vy += (dy / d) * 5 + 4;
    s.wx += (Math.random() - 0.5) * 8;
    s.wy += (Math.random() - 0.5) * 8;
  }

  /** A small shove so the stones visibly wake up when they turn live. */
  wake() {
    for (const s of this.stones) {
      s.vx += (Math.random() - 0.5) * 2.4;
      s.vy += (Math.random() - 0.2) * 2.4;
      s.wx += (Math.random() - 0.5) * 3;
      s.wy += (Math.random() - 0.5) * 3;
    }
  }

  step(dt: number, scroll: number) {
    const stones = this.stones;
    const pointer = this.pointer;
    const local = pointer && pointer.type !== 'touch' ? this.local(pointer) : null;
    let moving = false;
    const steps = 2;
    const h = dt / steps;

    for (let n = 0; n < steps; n++) {
      for (const s of stones) {
        const f = this.depth(s.home.z);
        let ax = -22 * (s.x - s.home.x) - 3.4 * s.vx;
        let ay = -22 * (s.y - s.home.y) - 3.4 * s.vy;

        if (s.grabbed && local && pointer) {
          const tx = (local.x - this.cx) / (this.k * f) + s.grabDx;
          const ty = -(local.y - this.cy) / (this.k * f) + s.grabDy;
          ax = (tx - s.x) * 200 - s.vx * 24;
          ay = (ty - s.y) * 200 - s.vy * 24;
        } else if (local?.inside && pointer) {
          // Cursor repels the stones it runs into; a quick swipe throws them.
          const dx = s.x - (local.x - this.cx) / (this.k * f);
          const dy = s.y + (local.y - this.cy) / (this.k * f);
          const reach = s.radius * 0.9 + 1.1;
          const d = Math.hypot(dx, dy) || 0.001;
          if (d < reach) {
            const push = (1 - d / reach) ** 2;
            ax += (dx / d) * push * 120 + (pointer.vx / (this.k * f)) * push * 0.5;
            ay += (dy / d) * push * 120 - (pointer.vy / (this.k * f)) * push * 0.5;
            s.wx += (dy / d) * push * 0.4;
            s.wy -= (dx / d) * push * 0.4;
          }
        }

        s.vx += ax * h;
        s.vy += ay * h;
      }

      // Stones bump into each other, but never closer than they sit at rest.
      for (let i = 0; i < stones.length; i++) {
        for (let j = i + 1; j < stones.length; j++) {
          const a = stones[i]!;
          const b = stones[j]!;
          const rest = Math.hypot(a.home.x - b.home.x, a.home.y - b.home.y, (a.home.z - b.home.z) * 0.6);
          const min = Math.min(rest, a.radius + b.radius) * 0.9;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d3 = Math.hypot(dx, dy, (a.home.z - b.home.z) * 0.6);
          if (d3 < min) {
            const d = Math.hypot(dx, dy) || 0.001;
            const push = (min - d3) * 90;
            a.vx += (dx / d) * push * h;
            a.vy += (dy / d) * push * h;
            b.vx -= (dx / d) * push * h;
            b.vy -= (dy / d) * push * h;
          }
        }
      }

      for (const s of stones) {
        const speed = Math.hypot(s.vx, s.vy);
        if (speed > 38) {
          s.vx *= 38 / speed;
          s.vy *= 38 / speed;
        }
        s.x += s.vx * h;
        s.y += s.vy * h;
        // Walls of the canvas
        const f = this.depth(s.home.z);
        const edge = s.radius * 0.55;
        const minX = edge - this.cx / (this.k * f);
        const maxX = (this.cssW - this.cx) / (this.k * f) - edge;
        const maxY = this.cy / (this.k * f) - edge;
        const minY = -(this.cssH - this.cy) / (this.k * f) + edge;
        if (s.x < minX) { s.x = minX; s.vx = Math.abs(s.vx) * 0.5; }
        if (s.x > maxX) { s.x = maxX; s.vx = -Math.abs(s.vx) * 0.5; }
        if (s.y > maxY) { s.y = maxY; s.vy = -Math.abs(s.vy) * 0.5; }
        if (s.y < minY) { s.y = minY; s.vy = Math.abs(s.vy) * 0.5; }
      }
    }

    const damp = Math.exp(-2.2 * dt);
    for (const s of stones) {
      // Rolling follows the motion; free spin fades out.
      const roll = 1 / (s.radius * 0.9);
      s.wx = s.wx * damp - scroll * 0.012;
      s.wy *= damp;
      s.wz *= damp;
      spin(s.mesh, s.wx - s.vy * roll, s.wy + s.vx * roll, s.wz, dt);
      const offset = Math.hypot(s.x - s.home.x, s.y - s.home.y);
      if (s.grabbed || Math.hypot(s.vx, s.vy) > 0.02 || offset > 0.003 || Math.hypot(s.wx, s.wy, s.wz) > 0.03) moving = true;
    }
    if (scroll !== 0) this.dirty = true;
    if (local?.inside && pointer && Math.hypot(pointer.vx, pointer.vy) > 20) moving = true;
    return moving;
  }

  sync() {
    const lift = window.scrollY;
    for (const s of this.stones) {
      const f = this.depth(s.home.z);
      s.mesh.position.set(s.x, s.y - (lift * s.drift) / (this.k * f), s.home.z);
    }
  }
}

/* ------------------------------------------------------------------ icon pebbles */

/** What a `data-pebble` host shows: a pebble, one of the icons, or the logo. Icons and the logo have a resting pose. */
function makeObject(name: string, hostWidth: number): { object: Object3D; rest: Quaternion | null } {
  if (name.startsWith('logo')) {
    const object = makeLogo(name === 'logo-white' ? 'white' : 'ink');
    return { object, rest: object.userData.rest as Quaternion };
  }
  if (isIcon(name)) {
    const object = makeIcon(name);
    return { object, rest: object.userData.rest as Quaternion };
  }
  // A pebble 270 px wide needs a fine mesh, one 54 px wide does not.
  return { object: makePebble(name as PebbleName, Math.min(12, Math.max(5, Math.round(hostWidth / 16)))), rest: null };
}

class PebbleView extends View {
  private group = new Group();
  private object: Object3D;
  private rest: Quaternion | null;
  private w = new Vector3();
  private tiltX = 0;
  private tiltY = 0;
  private lift = 0;
  private hovering = false;
  private pointer: Pointer | null = null;
  private grabbed = false;
  private arcFrom = new Vector3(0, 0, 1);
  private k = 1;

  constructor(stage: Stage, host: HTMLElement, readonly name: string, private img: HTMLImageElement) {
    super(stage, host, 2);
    Object.assign(this.canvas.style, { left: '-20%', top: '-20%', width: '140%', height: '140%' });
    host.append(this.canvas);
    const made = makeObject(name, host.clientWidth);
    this.object = made.object;
    this.rest = made.rest;
    this.group.add(this.object);
    this.scene.add(this.group);
    this.camera.position.set(0, PEBBLE_CAMERA.y, PEBBLE_CAMERA.distance);
    this.camera.lookAt(0, 0, 0);
  }

  showLive() {
    this.img.style.opacity = '0';
    this.live = true;
  }
  hideLive() {
    this.img.style.opacity = '';
    this.live = false;
  }

  protected measure() {
    const size = this.host.clientWidth * 1.4;
    this.cssW = this.cssH = size;
    this.k = this.host.clientWidth / PEBBLE_UNITS;
    this.camera.aspect = 1;
    this.camera.fov = (2 * Math.atan(size / this.k / 2 / PEBBLE_CAMERA.distance)) / DEG;
    this.camera.updateProjectionMatrix();
  }

  private center() {
    const r = this.host.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2, r: Math.max(r.width, r.height) / 2 };
  }

  pick(x: number, y: number) {
    const c = this.center();
    return Math.hypot(x - c.x, y - c.y) < c.r * 0.92;
  }

  hover(p: Pointer) {
    const was = this.hovering;
    this.hovering = p.type !== 'touch' && this.pick(p.x, p.y);
    this.pointer = this.hovering ? p : null;
    return this.hovering || was;
  }
  leave() {
    this.hovering = false;
    this.pointer = null;
  }

  /** The pointer on a virtual sphere around the object (an arcball): dragging inside the ring turns it about X and Y, dragging near the rim spins it about Z. */
  private onSphere(p: Pointer, into: Vector3) {
    const c = this.center();
    const radius = c.r * 1.3;
    const x = (p.x - c.x) / radius;
    const y = -(p.y - c.y) / radius;
    const d2 = x * x + y * y;
    const z = d2 <= 0.5 ? Math.sqrt(1 - d2) : 0.5 / Math.sqrt(d2);
    return into.set(x, y, z).normalize();
  }

  grab(p: Pointer) {
    this.grabbed = true;
    this.pointer = p;
    this.onSphere(p, this.arcFrom);
  }
  release() {
    this.grabbed = false;
    const speed = this.w.length();
    if (speed > 14) this.w.multiplyScalar(14 / speed);
  }

  poke() {
    this.w.x += (Math.random() - 0.5) * 9;
    this.w.y += 6 + Math.random() * 4;
    this.lift = 1;
  }

  step(dt: number) {
    const w = this.w;
    const p = this.pointer;
    const damp = Math.exp(-2.4 * dt);

    if (this.grabbed && p) {
      // Turn by exactly as much as the pointer moved on the sphere; keep the speed for the throw.
      const to = this.onSphere(p, tmpTo);
      const axis = tmpAxis2.copy(this.arcFrom).cross(to);
      const sine = axis.length();
      if (sine > 1e-6) {
        const angle = Math.atan2(sine, this.arcFrom.dot(to)) * 1.5;
        axis.divideScalar(sine);
        tmpQuat.setFromAxisAngle(axis, angle);
        this.object.quaternion.premultiply(tmpQuat);
        w.lerp(axis.multiplyScalar(angle / Math.max(dt, 1 / 120)), 0.5);
      } else {
        w.multiplyScalar(0.5);
      }
      this.arcFrom.copy(to);
    } else {
      w.multiplyScalar(damp);
      if (w.length() > 12) w.setLength(12);
      if (this.hovering && p) {
        w.y += p.vx * 0.00012;
        w.x += p.vy * 0.00012;
      }
      spin(this.object, w.x, w.y, w.z, dt);
      // Icons and the logo drift back to their resting pose.
      if (this.rest) this.object.quaternion.slerp(this.rest, 1 - Math.exp(-1.5 * dt));
    }

    // Lean toward the cursor and grow a little when it is over the object.
    const c = this.center();
    const targetY = this.hovering && p ? clamp((p.x - c.x) / c.r, -1, 1) * 0.35 : 0;
    const targetX = this.hovering && p ? clamp((p.y - c.y) / c.r, -1, 1) * 0.35 : 0;
    const ease = 1 - Math.exp(-9 * dt);
    this.tiltY += (targetY - this.tiltY) * ease;
    this.tiltX += (targetX - this.tiltX) * ease;
    this.lift += ((this.hovering || this.grabbed ? 1 : 0) - this.lift) * ease;

    const away = this.rest ? this.object.quaternion.angleTo(this.rest) : 0;
    const settled =
      w.length() < 0.03 && away < 0.004 && Math.abs(this.tiltX - targetX) < 0.002 &&
      Math.abs(this.tiltY - targetY) < 0.002 && Math.abs(this.lift - (this.hovering ? 1 : 0)) < 0.002;
    // Scrolling alone does not redraw a pebble: its canvas moves with the page, and redrawing a dozen of them on
    // every scroll frame was what made scrolling heavy.
    return !settled || this.grabbed || (this.hovering && !!p && Math.hypot(p.vx, p.vy) > 20);
  }

  sync() {
    this.group.rotation.set(this.tiltX, this.tiltY, 0);
    this.group.scale.setScalar(1 + this.lift * 0.08);
  }
}

/* ------------------------------------------------------------------ globe */

interface GlobeLabels {
  open: string;
  home: string;
}

/**
 * The worldwide globe: turns slowly by itself, follows a drag with a little inertia, shows the store under the
 * cursor in a tooltip (a real link) and opens it on click. It draws on every frame while it is on screen.
 */
class GlobeView extends View {
  readonly name = 'globe';
  private globe: Globe;
  // Facing the North Atlantic, tilted so the US and Europe (most of the stores) sit at the front.
  private yaw = 0.62;
  private pitch = 0.62;
  private vyaw = 0;
  private time = 0;
  private hovered: { pin: Globe['pins'][number] | null; home: boolean } | null = null;
  private pinned = false;
  /** The pointer is on the tooltip (on its way to a link in it): keep it open. */
  private overTip = false;
  private grabbedAt: { x: number; y: number; yaw: number; pitch: number; t: number } | null = null;
  private moved = 0;
  private pointer: Pointer | null = null;
  private tip: HTMLDivElement;
  /** Radius of the ball on screen at zoom 1, in CSS px. */
  private baseR = 1;
  // Zoom: pinch (trackpad or two fingers), ⌘/Ctrl + wheel, or the +/− buttons. Plain wheel keeps scrolling the page.
  private zoom = 1;
  private zoomTo = 1;
  private pinch: { d: number; zoom: number } | null = null;
  private gestureFrom = 0;
  private finger = { x: 0, y: 0, t: 0, vx: 0 };
  private zoomIn: HTMLElement | null;
  private zoomOut: HTMLElement | null;
  /** The place under the cursor or the pinch: it stays under them while the zoom changes. */
  private anchor: { x: number; y: number; at: Vector3 } | null = null;
  /** Which of the finer land grids (GLOBE_LAND) have been asked for. */
  private fineLand = GLOBE_LAND.map(() => false);
  // A country picked in the list next to the globe (sections/Globe.astro): only its stores, turned to the front.
  private country: string | null = null;
  private turnTo: { yaw: number; pitch: number; solo: Globe['pins'][number] | null } | null = null;
  private readonly ray = new Vector3();
  private readonly world = new Vector3();
  private readonly toCamera = new Vector3();

  constructor(stage: Stage, host: HTMLElement, private img: HTMLImageElement, markers: GlobeMarker[], private labels: GlobeLabels) {
    super(stage, host, 2, 1.3e6);
    // The round mask lets a zoomed-in ball fade out in a circle instead of being cut by the square.
    const mask = 'radial-gradient(closest-side, #000 88%, transparent)';
    Object.assign(this.canvas.style, { inset: '0', width: '100%', height: '100%', maskImage: mask, webkitMaskImage: mask });
    host.append(this.canvas);
    this.globe = makeGlobe(markers);
    this.scene.add(this.globe.group, this.globe.halo);
    this.camera.position.set(0, 0, GLOBE_CAMERA.distance);
    this.camera.lookAt(0, 0, 0);
    this.tip = document.createElement('div');
    this.tip.className = 'globe-tip';
    // Mouse and touch only (its links are out of the tab order): the stores are listed as links on /projects, and the
    // globe is hidden from assistive tech.
    host.append(this.tip);
    this.tip.addEventListener('pointerenter', () => (this.overTip = true));
    this.tip.addEventListener('pointerleave', () => (this.overTip = false));

    const controls = host.parentElement?.querySelector<HTMLElement>('[data-globe-zoom]');
    this.zoomIn = controls?.querySelector<HTMLElement>('[data-zoom="in"]') ?? null;
    this.zoomOut = controls?.querySelector<HTMLElement>('[data-zoom="out"]') ?? null;
    this.zoomIn?.addEventListener('click', () => this.setZoom(this.zoomTo * 1.6));
    this.zoomOut?.addEventListener('click', () => this.setZoom(this.zoomTo / 1.6));
    host.style.touchAction = 'pan-y';
    host.addEventListener('wheel', this.onWheel, { passive: false });
    for (const type of ['touchstart', 'touchmove', 'touchend', 'touchcancel']) host.addEventListener(type, this.onTouch as EventListener, { passive: false });
    for (const type of ['gesturestart', 'gesturechange', 'gestureend']) host.addEventListener(type, this.onGesture);
    host.addEventListener('globe:country', (e) => this.setCountry((e as CustomEvent<string>).detail));
    if (host.dataset.country) this.setCountry(host.dataset.country);
    // Scrolled away, the globe zooms back out, so on a phone a zoomed globe never keeps holding the page.
    new IntersectionObserver(([entry]) => {
      if (entry && !entry.isIntersecting && this.zoomTo !== 1) {
        this.setZoom(1);
        this.zoom = 1;
        this.applyZoom();
      }
    }).observe(host);
  }

  showLive() {
    this.img.style.opacity = '0';
    this.live = true;
    this.zoomIn?.parentElement?.removeAttribute('hidden');
  }
  hideLive() {
    this.img.style.opacity = '';
    this.live = false;
    this.zoomIn?.parentElement?.setAttribute('hidden', '');
  }

  private get screenR() {
    return this.baseR * this.zoom;
  }

  protected measure() {
    this.cssW = this.host.clientWidth;
    this.cssH = this.host.clientHeight;
    this.camera.fov = GLOBE_CAMERA.fov;
    this.camera.aspect = this.cssW / Math.max(1, this.cssH);
    this.camera.updateProjectionMatrix();
    this.baseR = (this.cssH / 2) * (GLOBE_RADIUS / (GLOBE_CAMERA.distance * Math.tan((GLOBE_CAMERA.fov / 2) * DEG)));
    this.globe.setZoom(this.zoom, this.screenR);
    this.dotSize();
  }

  override resize() {
    super.resize();
    this.dotSize();
  }

  private dotSize() {
    const dpr = this.pw / Math.max(1, this.cssW);
    this.globe.setDotSize(Math.max(2, this.cssW / 150) * dpr);
  }

  private applyZoom() {
    this.camera.zoom = this.zoom;
    this.camera.updateProjectionMatrix();
    this.globe.setZoom(this.zoom, this.screenR);
    this.dirty = true;
  }

  /** Zoom toward a page point (cursor, middle of a pinch) or, without one, toward the middle of the globe. */
  private setZoom(zoom: number, x?: number, y?: number) {
    this.aim(x, y);
    this.zoomTo = clamp(zoom, 1, GLOBE_MAX_ZOOM);
    if (Math.abs(this.zoomTo - 1) < 0.02) this.zoomTo = 1;
    const zoomed = this.zoomTo > 1;
    // The finer grids of land dots, each fetched once the zoom heads toward it.
    GLOBE_LAND.forEach((grid, level) => {
      if (this.zoomTo <= grid.from || this.fineLand[level]) return;
      this.fineLand[level] = true;
      fetch(grid.url)
        .then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(new Error(String(r.status)))))
        .then((buffer) => {
          this.globe.addFineLand(buffer, level);
          this.dirty = true;
          this.stage.wake();
        })
        .catch(() => (this.fineLand[level] = false));
    });
    // Zoomed in, one finger turns the globe instead of scrolling the page.
    this.host.style.touchAction = zoomed ? 'none' : 'pan-y';
    this.zoomOut?.setAttribute('aria-disabled', String(!zoomed));
    this.zoomIn?.setAttribute('aria-disabled', String(this.zoomTo >= GLOBE_MAX_ZOOM));
    this.stage.wake();
  }

  /** Show the stores of one country and turn it to the front (yaw = −lng, pitch = lat); empty shows them all again. */
  private setCountry(code: string) {
    this.country = code || null;
    this.globe.setCountry(this.country);
    this.hovered = null;
    this.pinned = false;
    this.showTip();
    this.turnTo = null;
    this.vyaw = 0;
    const pins = this.globe.pins.filter((pin) => pin.k === this.country);
    if (pins.length) {
      const mean = new Vector3();
      for (const pin of pins) mean.add(this.ray.copy(pin.at).normalize());
      mean.normalize();
      const lng = Math.atan2(mean.x, mean.z);
      this.turnTo = {
        yaw: this.yaw + wrapAngle(-lng - this.yaw),
        pitch: clamp(Math.asin(mean.y), -1.0, 1.25),
        // A country with one store gets its tooltip once it has turned to the front.
        solo: pins.length === 1 ? pins[0]! : null,
      };
    }
    this.dirty = true;
    this.stage.wake();
  }

  private onWheel = (e: WheelEvent) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    // Lenis leaves ctrl wheels (trackpad pinch) alone by itself; this keeps it from scrolling on ⌘ + wheel.
    (e as WheelEvent & { lenisStopPropagation?: boolean }).lenisStopPropagation = true;
    if (this.gestureFrom) return;
    const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
    this.setZoom(this.zoomTo * Math.exp(-clamp(dy, -60, 60) * 0.008), e.clientX, e.clientY);
  };

  /** Safari reports a trackpad pinch as gesture events (on iOS next to the touches, which win). */
  private onGesture = (e: Event) => {
    e.preventDefault();
    const g = e as Event & { scale?: number; clientX?: number; clientY?: number };
    if (e.type === 'gestureend') this.gestureFrom = 0;
    else if (e.type === 'gesturestart') this.gestureFrom = this.zoomTo;
    else if (!this.pinch && this.gestureFrom) this.setZoom(this.gestureFrom * (g.scale ?? 1), g.clientX, g.clientY);
  };

  private onTouch = (e: TouchEvent) => {
    const list = e.touches;
    const a = list[0];
    const b = list[1];
    if (a && b) {
      e.preventDefault();
      this.grabbedAt = null;
      const d = Math.max(1, Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY));
      if (this.pinch) this.setZoom(this.pinch.zoom * (d / this.pinch.d), (a.clientX + b.clientX) / 2, (a.clientY + b.clientY) / 2);
      else this.pinch = { d, zoom: this.zoomTo };
      return;
    }
    this.pinch = null;
    const f = this.finger;
    const p = (x: number, y: number): Pointer => ({ x, y, vx: f.vx, vy: 0, type: 'touch', inside: true });
    if (a && this.zoomTo > 1) {
      if (!this.grabbedAt) {
        Object.assign(f, { x: a.clientX, y: a.clientY, t: e.timeStamp, vx: 0 });
        this.grab(p(a.clientX, a.clientY));
      } else if (e.type === 'touchmove') {
        e.preventDefault();
        const dt = Math.max(1, e.timeStamp - f.t) / 1000;
        f.vx = f.vx * 0.5 + ((a.clientX - f.x) / dt) * 0.5;
        Object.assign(f, { x: a.clientX, y: a.clientY, t: e.timeStamp });
        this.drag(p(a.clientX, a.clientY));
      }
      return;
    }
    if (!a && this.grabbedAt) this.release(p(f.x, f.y));
  };

  private local(x: number, y: number) {
    const r = this.host.getBoundingClientRect();
    return { x: x - r.left - r.width / 2, y: y - r.top - r.height / 2, w: r.width, h: r.height, left: r.left, top: r.top };
  }

  pick(x: number, y: number) {
    const l = this.local(x, y);
    return Math.hypot(l.x, l.y) < Math.min(this.screenR * 1.02, Math.min(l.w, l.h) / 2);
  }

  /** Where the line of sight through a page point meets the ball: a unit vector in world space, or null off the ball. */
  private surface(x: number, y: number, into: Vector3) {
    const l = this.local(x, y);
    const eye = this.camera.position;
    into.set(l.x / (l.w / 2), -l.y / (l.h / 2), 0.5).unproject(this.camera).sub(eye).normalize();
    const b = eye.dot(into);
    const disc = b * b - (eye.lengthSq() - GLOBE_RADIUS * GLOBE_RADIUS);
    if (disc < 0) return null;
    return into.multiplyScalar(-b - Math.sqrt(disc)).add(eye).normalize();
  }

  /** Remember the place of the ball under a page point, in the globe's own space. */
  private aim(x?: number, y?: number) {
    const w = x === undefined || y === undefined ? null : this.surface(x, y, this.ray);
    this.anchor = w ? { x: x!, y: y!, at: w.clone().applyQuaternion(this.globe.group.quaternion.clone().invert()) } : null;
  }

  /**
   * Turn the globe so the anchored place is under its page point again at the current zoom. The globe turns as
   * Rx(pitch) · Ry(yaw): yaw alone sets the x of the place, then pitch turns its (y, z) onto the target.
   */
  private holdAnchor() {
    const a = this.anchor;
    const w = a && this.surface(a.x, a.y, this.ray);
    if (!a || !w) return;
    const p = a.at;
    const rho = Math.hypot(p.x, p.z);
    if (rho < 1e-4 || Math.abs(w.x) > rho) return;
    const base = Math.atan2(p.z, p.x);
    const spread = Math.acos(w.x / rho);
    const d1 = wrapAngle(base + spread - this.yaw);
    const d2 = wrapAngle(base - spread - this.yaw);
    this.yaw += Math.abs(d1) < Math.abs(d2) ? d1 : d2;
    const qz = -p.x * Math.sin(this.yaw) + p.z * Math.cos(this.yaw);
    this.pitch = clamp(wrapAngle(Math.atan2(w.z, w.y) - Math.atan2(qz, p.y)), -1.0, 1.25);
  }

  /** Inside the round window the ball is drawn in (the canvas mask), in host px. */
  private inWindow(s: { x: number; y: number }) {
    return Math.hypot(s.x - this.cssW / 2, s.y - this.cssH / 2) < Math.min(this.cssW, this.cssH) * 0.44;
  }

  /** Screen position (CSS px, host space) of a point on the ball, and whether it faces the viewer. */
  private project(at: Vector3) {
    this.world.copy(at).applyMatrix4(this.globe.group.matrixWorld);
    this.toCamera.copy(this.camera.position).sub(this.world).normalize();
    const facing = this.world.clone().normalize().dot(this.toCamera);
    this.world.project(this.camera);
    return { x: ((this.world.x + 1) / 2) * this.cssW, y: ((1 - this.world.y) / 2) * this.cssH, facing };
  }

  private pinAt(x: number, y: number, reach: number) {
    const l = this.local(x, y);
    const px = l.x + this.cssW / 2;
    const py = l.y + this.cssH / 2;
    let best: { pin: Globe['pins'][number] | null; home: boolean; d: number } | null = null;
    for (const pin of this.globe.pins) {
      if (!pin.dot.visible) continue;
      const s = this.project(pin.at);
      if (s.facing < 0.18 || !this.inWindow(s)) continue;
      const d = Math.hypot(s.x - px, s.y - py);
      if (d < reach && (!best || d < best.d)) best = { pin, home: false, d };
    }
    const h = this.project(this.globe.home.at);
    if (h.facing > 0.18 && this.inWindow(h)) {
      const d = Math.hypot(h.x - px, h.y - py);
      if (d < reach && (!best || d < best.d)) best = { pin: null, home: true, d };
    }
    return best;
  }

  private showTip() {
    const target = this.hovered;
    if (!target) {
      this.tip.classList.remove('is-on');
      return;
    }
    const link = (url: string, body: string, cls = '') =>
      `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" tabindex="-1"${cls ? ` class="${cls}"` : ''}>${body}</a>`;
    if (target.home) {
      this.tip.innerHTML = `<b>${this.labels.home}</b>`;
    } else if (target.pin) {
      const pin = target.pin;
      if (pin.stores.length === 1) {
        this.tip.innerHTML = link(pin.u, `<b>${escapeHtml(pin.t)}</b><span>${escapeHtml(pin.c)}, ${escapeHtml(pin.n)}</span><em>${this.labels.open}</em>`);
      } else {
        // Several stores in one place: the place, then a link per store.
        const cities = [...new Set(pin.stores.map((s) => s.c))].join(' · ');
        this.tip.innerHTML =
          `<span>${escapeHtml(cities)}, ${escapeHtml(pin.n)}</span>` +
          pin.stores.map((s) => link(s.u, `<b>${escapeHtml(s.t)}</b><em>↗</em>`, 'globe-tip-row')).join('');
      }
    }
    this.tip.classList.add('is-on');
    this.placeTip();
  }

  private placeTip() {
    const target = this.hovered;
    if (!target) return;
    const s = this.project(target.home ? this.globe.home.at : target.pin!.at);
    if (s.facing < 0.05 || !this.inWindow(s)) {
      this.hovered = null;
      this.pinned = false;
      this.tip.classList.remove('is-on');
      return;
    }
    this.tip.style.transform = `translate(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px)`;
  }

  hover(p: Pointer) {
    this.pointer = p;
    if (this.grabbedAt || this.pinned || this.overTip) return true;
    const found = p.type === 'touch' ? null : this.pinAt(p.x, p.y, 16);
    const next = found ? { pin: found.pin, home: found.home } : null;
    if (next?.pin !== this.hovered?.pin || next?.home !== this.hovered?.home) {
      this.hovered = next;
      this.showTip();
    }
    return true;
  }
  leave() {
    this.pointer = null;
    if (!this.pinned) {
      this.hovered = null;
      this.showTip();
    }
  }

  grab(p: Pointer) {
    this.anchor = null;
    this.turnTo = null;
    this.grabbedAt = { x: p.x, y: p.y, yaw: this.yaw, pitch: this.pitch, t: performance.now() };
    this.moved = 0;
    this.vyaw = 0;
    this.pinned = false;
  }
  drag(p: Pointer) {
    const g = this.grabbedAt;
    if (!g) return;
    const dx = p.x - g.x;
    const dy = p.y - g.y;
    this.moved = Math.max(this.moved, Math.hypot(dx, dy));
    const k = 1 / Math.max(80, this.screenR);
    this.yaw = g.yaw + dx * k * 1.15;
    // Zoomed in, the globe tilts further, far enough to bring Australia to the middle.
    const zoomed = this.zoomTo > 1;
    this.pitch = clamp(g.pitch + dy * k * 0.9, zoomed ? -1.0 : -0.5, zoomed ? 1.25 : 1.0);
    if (this.moved > 4 && this.hovered) {
      this.hovered = null;
      this.showTip();
    }
  }
  release(p: Pointer) {
    const g = this.grabbedAt;
    this.grabbedAt = null;
    if (!g) return;
    if (this.moved < 5) {
      // A tap shows the tooltip first (poke); only a mouse click opens the store right away.
      if (p.type === 'touch') return;
      const found = this.pinAt(p.x, p.y, 16);
      if (found?.pin && found.pin.stores.length === 1) window.open(found.pin.u, '_blank', 'noopener');
      else if (found?.pin) {
        // A pin for several stores keeps its list open, so a store in it can be picked.
        this.hovered = { pin: found.pin, home: false };
        this.pinned = true;
        this.showTip();
      }
      return;
    }
    // Keep the speed of the throw, in yaw only.
    this.vyaw = clamp(p.vx / Math.max(80, this.screenR) * 1.15, -4, 4);
  }

  /** A tap on a phone shows the tooltip of the pin under the finger (the tooltip itself is the link). */
  poke(x: number, y: number) {
    const found = this.pinAt(x, y, 26);
    this.hovered = found ? { pin: found.pin, home: found.home } : null;
    this.pinned = Boolean(found);
    this.showTip();
  }

  step(dt: number) {
    this.time += dt;
    if (this.zoom !== this.zoomTo) {
      this.zoom += (this.zoomTo - this.zoom) * (1 - Math.exp(-14 * dt));
      if (Math.abs(this.zoomTo - this.zoom) < 0.002) this.zoom = this.zoomTo;
      this.applyZoom();
    }
    if (!this.grabbedAt) {
      this.vyaw *= Math.exp(-1.8 * dt);
      // Turn slowly by itself, and hold still while a store is shown or the globe is zoomed in on a place.
      const free = this.zoomTo === 1 && !this.country;
      const auto = this.hovered || !free ? 0 : 0.085;
      this.yaw += (this.vyaw + auto) * dt;
      if (free) this.pitch += (0.62 - this.pitch) * (1 - Math.exp(-1.2 * dt));
      const turn = this.turnTo;
      if (turn) {
        const k = 1 - Math.exp(-3.2 * dt);
        this.yaw += (turn.yaw - this.yaw) * k;
        this.pitch += (turn.pitch - this.pitch) * k;
        if (Math.abs(turn.yaw - this.yaw) + Math.abs(turn.pitch - this.pitch) < 0.004) {
          this.turnTo = null;
          if (turn.solo) {
            this.hovered = { pin: turn.solo, home: false };
            this.pinned = true;
            this.showTip();
          }
        }
      }
      this.holdAnchor();
      if (this.zoom === this.zoomTo) this.anchor = null;
    }
    this.globe.group.rotation.set(this.pitch, this.yaw, 0);
    this.globe.group.updateMatrixWorld();
    this.globe.update(this.time);
    if (this.hovered) this.placeTip();
    return true;
  }

  sync() {}
}

const wrapAngle = (a: number) => Math.atan2(Math.sin(a), Math.cos(a));
const escapeHtml = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

/* ------------------------------------------------------------------ stage */

class Stage {
  readonly gl: HTMLCanvasElement;
  readonly renderer: WebGLRenderer;
  env!: Texture;
  private probe = document.createElement('canvas');
  readonly views: View[] = [];
  private raf = 0;
  private last = 0;
  private scrollY = window.scrollY;
  private scrollAcc = 0;
  private pointer: Pointer = { x: -1e4, y: -1e4, vx: 0, vy: 0, type: 'mouse', inside: false };
  private pointerTime = 0;
  private grabbed: View | null = null;
  private tap: { x: number; y: number; t: number } | null = null;
  private downAt: { x: number; y: number } | null = null;
  private io: IntersectionObserver;
  private ro: ResizeObserver;
  private observed = new Map<Element, View>();
  private lost = false;
  /** The copy from the WebGL canvas works in this browser (checked on the first view only: the check stalls the GPU). */
  private copyOk = false;

  constructor() {
    this.gl = document.createElement('canvas');
    this.renderer = new WebGLRenderer({ canvas: this.gl, antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(1);
    this.renderer.setClearColor(0x000000, 0);
    // Neutral (Khronos PBR) tone mapping keeps the brand cobalt cobalt; ACES pushed it toward violet.
    this.renderer.toneMapping = NeutralToneMapping;
    this.renderer.toneMappingExposure = 1;

    this.io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const view = this.views.find((v) => v.host === entry.target);
          if (!view || view.dead) continue;
          view.visible = entry.isIntersecting;
          if (view.visible) view.dirty = true;
        }
        this.wake();
      },
      { rootMargin: '120px 0px' },
    );
    this.ro = new ResizeObserver((entries) => {
      for (const entry of entries) this.observed.get(entry.target)?.resize();
      this.wake();
    });

    this.gl.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      this.lost = true;
      for (const v of this.views) v.hideLive();
    });

    window.addEventListener('pointermove', this.onMove, { passive: true });
    window.addEventListener('pointerdown', this.onDown);
    window.addEventListener('pointerup', this.onUp);
    window.addEventListener('pointercancel', this.onUp);
    document.documentElement.addEventListener('pointerleave', this.onLeave);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    document.addEventListener('visibilitychange', () => document.hidden || this.wake());
  }

  /** Image-based lighting, built in its own task. */
  async prepare() {
    await yieldMain();
    const pmrem = new PMREMGenerator(this.renderer);
    this.env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    await yieldMain();
  }

  /** True when the 2D canvas really received the picture (some browsers hand back an empty frame). */
  private hasPixels(view: View) {
    const probe = this.probe;
    probe.width = probe.height = 16;
    const ctx = probe.getContext('2d', { willReadFrequently: true });
    if (!ctx) return false;
    ctx.drawImage(view.canvas, 0, 0, 16, 16);
    const data = ctx.getImageData(0, 0, 16, 16).data;
    for (let i = 3; i < data.length; i += 4) if ((data[i] ?? 0) > 8) return true;
    return false;
  }

  private retire(view: View) {
    view.dead = true;
    view.visible = false;
    view.canvas.remove();
  }

  add(view: View, ...observe: Element[]) {
    this.views.push(view);
    this.io.observe(view.host);
    for (const el of [view.host, ...observe]) {
      this.observed.set(el, view);
      this.ro.observe(el);
    }
    view.resize();
  }

  private ensureSize(w: number, h: number) {
    if (w > this.gl.width || h > this.gl.height) this.renderer.setSize(Math.max(w, this.gl.width), Math.max(h, this.gl.height), false);
  }

  render(view: View) {
    if (this.lost) return;
    const { renderer, gl } = this;
    this.ensureSize(view.pw, view.ph);
    view.sync();
    renderer.setViewport(0, 0, view.pw, view.ph);
    renderer.setScissor(0, 0, view.pw, view.ph);
    renderer.setScissorTest(true);
    renderer.render(view.scene, view.camera);
    view.ctx.clearRect(0, 0, view.pw, view.ph);
    view.ctx.drawImage(gl, 0, gl.height - view.ph, view.pw, view.ph, 0, 0, view.pw, view.ph);
    if (!view.live) {
      if (this.copyOk || this.hasPixels(view)) {
        this.copyOk = true;
        view.showLive();
      } else if (++view.fails >= 3) this.retire(view);
    }
  }

  wake() {
    if (this.raf || this.lost) return;
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.tick);
  }

  private tick = (now: number) => {
    const dt = Math.min((now - this.last) / 1000, 1 / 30) || 1 / 60;
    this.last = now;
    const scroll = this.scrollAcc;
    this.scrollAcc = 0;
    const decay = Math.exp(-9 * dt);
    this.pointer.vx *= decay;
    this.pointer.vy *= decay;
    // Content that scrolls under a still pointer never reports a pointer move: look again where the pointer is.
    if (scroll !== 0 && this.pointer.inside && this.pointer.type !== 'touch' && !this.grabbed) {
      let over = false;
      const blocked = this.overControl(this.pointer.x, this.pointer.y);
      for (const view of this.views) {
        if (!view.visible || view.dead) continue;
        view.hover(this.pointer);
        if (!blocked && view.pick(this.pointer.x, this.pointer.y)) over = true;
      }
      document.documentElement.classList.toggle('is-grab', over);
    }
    let busy = false;
    for (const view of this.views) {
      if (!view.visible || view.dead) continue;
      const moving = view.step(dt, scroll);
      if (moving || view.dirty) {
        this.render(view);
        view.dirty = false;
      }
      // A view whose first picture has not been confirmed yet gets another try on the next frame.
      busy ||= moving || (!view.live && !view.dead);
    }
    this.raf = busy ? requestAnimationFrame(this.tick) : 0;
  };

  private onScroll = () => {
    const y = window.scrollY;
    this.scrollAcc += y - this.scrollY;
    this.scrollY = y;
    this.wake();
  };

  private onMove = (e: PointerEvent) => {
    const p = this.pointer;
    const dt = Math.max(1, e.timeStamp - this.pointerTime) / 1000;
    this.pointerTime = e.timeStamp;
    if (p.inside) {
      p.vx = p.vx * 0.5 + ((e.clientX - p.x) / dt) * 0.5;
      p.vy = p.vy * 0.5 + ((e.clientY - p.y) / dt) * 0.5;
    }
    p.x = e.clientX;
    p.y = e.clientY;
    p.type = e.pointerType;
    p.inside = true;
    if (this.grabbed) {
      this.grabbed.drag(p);
      this.wake();
      return;
    }
    let over = false;
    let awake = false;
    const blocked = e.pointerType === 'touch' || this.overControl(p.x, p.y);
    for (const view of this.views) {
      if (!view.visible) continue;
      if (view.hover(p)) awake = true;
      if (!blocked && view.pick(p.x, p.y)) over = true;
    }
    document.documentElement.classList.toggle('is-grab', over);
    if (awake) this.wake();
  };

  /** A stone behind a link or button must not swallow the click. */
  private overControl(x: number, y: number) {
    const el = document.elementFromPoint(x, y);
    if (!el || el.closest('[data-grab]')) return false;
    return Boolean(el.closest('a, button, summary, input, textarea, select, [data-cal-link]'));
  }

  private onLeave = () => {
    this.pointer.inside = false;
    for (const view of this.views) view.leave();
    document.documentElement.classList.remove('is-grab');
    this.wake();
  };

  private onDown = (e: PointerEvent) => {
    const p = this.pointer;
    p.x = e.clientX;
    p.y = e.clientY;
    p.type = e.pointerType;
    p.inside = true;
    if (e.pointerType === 'touch') {
      this.tap = { x: e.clientX, y: e.clientY, t: e.timeStamp };
      return;
    }
    if (e.button !== 0 || this.overControl(p.x, p.y)) return;
    for (const view of this.views) {
      if (!view.visible || !view.pick(p.x, p.y)) continue;
      this.grabbed = view;
      this.downAt = { x: e.clientX, y: e.clientY };
      view.grab(p);
      document.documentElement.classList.add('is-grabbing');
      e.preventDefault();
      this.wake();
      return;
    }
  };

  private onUp = (e: PointerEvent) => {
    if (this.grabbed) {
      // A drag that started on a link (the logo) must not count as a click on it.
      if (this.downAt && Math.hypot(e.clientX - this.downAt.x, e.clientY - this.downAt.y) > 4) {
        const stop = (event: Event) => {
          event.preventDefault();
          event.stopPropagation();
        };
        window.addEventListener('click', stop, { capture: true, once: true });
        window.setTimeout(() => window.removeEventListener('click', stop, { capture: true }), 120);
      }
      this.grabbed.release(this.pointer);
      this.grabbed = null;
      document.documentElement.classList.remove('is-grabbing');
      this.wake();
    }
    const tap = this.tap;
    this.tap = null;
    if (tap && e.type === 'pointerup' && e.timeStamp - tap.t < 450 && Math.hypot(e.clientX - tap.x, e.clientY - tap.y) < 12) {
      for (const view of this.views) {
        if (view.visible && !this.overControl(tap.x, tap.y) && view.pick(tap.x, tap.y)) {
          view.poke(tap.x, tap.y);
          this.wake();
          break;
        }
      }
    }
  };
}

export async function start() {
  const heroHost = document.querySelector<HTMLElement>('[data-hero-stage]');
  const poster = document.querySelector<HTMLImageElement>('[data-hero-poster]');
  const pebbleHosts = [...document.querySelectorAll<HTMLElement>('[data-pebble]')];
  const globeHost = document.querySelector<HTMLElement>('[data-globe]');
  if (!(heroHost && poster) && !pebbleHosts.length && !globeHost) return;

  const stage = new Stage();
  await stage.prepare();
  let hero: HeroView | null = null;
  if (heroHost && poster) {
    hero = new HeroView(stage, heroHost, poster);
    stage.add(hero, poster);
    // Compile the material off the main thread before the first frame.
    await stage.renderer.compileAsync(hero.scene, hero.camera);
    await yieldMain();
  }
  // Pebbles, icons and logos are built well before they reach the screen, one at a time in idle moments, with their
  // shaders compiled in the background, so nothing heavy happens while the page is being scrolled.
  const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
  const build = async (host: HTMLElement) => {
    const name = host.dataset.pebble ?? 'cobalt';
    const img = host.querySelector('img');
    if (!img) return;
    const view = new PebbleView(stage, host, name, img);
    await stage.renderer.compileAsync(view.scene, view.camera).catch(() => {});
    stage.add(view, img);
    stage.wake();
  };
  const lazy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        lazy.unobserve(entry.target);
        idle(() => void build(entry.target as HTMLElement), { timeout: 600 });
      }
    },
    { rootMargin: '1400px 0px' },
  );
  for (const host of pebbleHosts) lazy.observe(host);

  // The globe: built the same way, a little later than the pebbles since it is bigger.
  if (globeHost) {
    const img = globeHost.querySelector('img');
    let markers: GlobeMarker[] = [];
    try {
      markers = JSON.parse(globeHost.dataset.markers ?? '[]') as GlobeMarker[];
    } catch {
      markers = [];
    }
    const labels = { open: globeHost.dataset.open ?? 'Open store ↗', home: globeHost.dataset.home ?? 'Germany' };
    const globeIo = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || !img) return;
        globeIo.disconnect();
        idle(async () => {
          const view = new GlobeView(stage, globeHost, img, markers, labels);
          await stage.renderer.compileAsync(view.scene, view.camera).catch(() => {});
          stage.add(view, img);
          stage.wake();
        }, { timeout: 600 });
      },
      { rootMargin: '1200px 0px' },
    );
    globeIo.observe(globeHost);
  }
  stage.wake();
  // Turn the first picture on, then give the hero stones a nudge.
  requestAnimationFrame(() => {
    if (hero && hero.visible) {
      hero.wake();
      stage.wake();
    }
  });
  (window as unknown as { __stage?: Stage }).__stage = stage;
}
