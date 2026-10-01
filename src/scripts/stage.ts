// Live 3D for the homepage stones and the icon pebbles.
//
// One WebGL renderer draws every object and copies its picture into a small 2D canvas that lives inside the
// object's own section. The canvases scroll with the page like any other element (no overlay that lags behind
// the scroll), CSS clips them, and nothing is drawn while nothing moves or while a view is off screen.
// The poster images stay in the HTML as the first paint and as the fallback when WebGL is unavailable.
import {
  ACESFilmicToneMapping, Group, PerspectiveCamera, PMREMGenerator, Quaternion, Scene, Vector3, WebGLRenderer,
  type Mesh, type Texture,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { HERO_CAMERA, PEBBLE_CAMERA, makeHeroStones, makePebble, type PebbleName } from '../lib/stones';

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
const tmpQuat = new Quaternion();
/** Turn a mesh by an angular velocity (rad/s, world axes) for dt seconds. */
function spin(mesh: Mesh | Group, wx: number, wy: number, wz: number, dt: number) {
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
    // A full-width canvas on a big screen would be huge: keep the picture under about four megapixels.
    const dpr = Math.min(window.devicePixelRatio || 1, this.dprCap, Math.sqrt(4.2e6 / Math.max(1, this.cssW * this.cssH)));
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
    super(stage, host, 1.5);
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

class PebbleView extends View {
  private group = new Group();
  private mesh: Mesh;
  private wx = 0;
  private wy = 0;
  private tiltX = 0;
  private tiltY = 0;
  private lift = 0;
  private hovering = false;
  private pointer: Pointer | null = null;
  private grabbed = false;
  private k = 1;

  constructor(stage: Stage, host: HTMLElement, readonly name: PebbleName, private img: HTMLImageElement) {
    super(stage, host, 2);
    Object.assign(this.canvas.style, { left: '-20%', top: '-20%', width: '140%', height: '140%' });
    host.append(this.canvas);
    this.mesh = makePebble(name);
    this.group.add(this.mesh);
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

  /** Let the page animation (GSAP) turn or scale the pebble. */
  get object() {
    return this.group;
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
    return { x: r.left + r.width / 2, y: r.top + r.height / 2, r: r.width / 2 };
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

  grab(p: Pointer) {
    this.grabbed = true;
    this.pointer = p;
  }
  release() {
    this.grabbed = false;
  }

  poke() {
    this.wx += (Math.random() - 0.5) * 9;
    this.wy += 6 + Math.random() * 4;
    this.lift = 1;
  }

  step(dt: number, scroll: number) {
    const damp = Math.exp(-2.4 * dt);
    this.wx = this.wx * damp - scroll * 0.01;
    this.wy *= damp;

    const p = this.pointer;
    if (this.grabbed && p) {
      // Turn by the pointer's velocity while held.
      this.wy = this.wy * 0.6 + p.vx * 0.014 * 0.4;
      this.wx = this.wx * 0.6 + p.vy * 0.014 * 0.4;
    } else if (this.hovering && p) {
      this.wy += p.vx * 0.00012;
      this.wx += p.vy * 0.00012;
    }
    spin(this.mesh, this.wx, this.wy, 0, dt);

    // Lean toward the cursor and grow a little when it is over the pebble.
    const c = this.center();
    const targetY = this.hovering && p ? clamp((p.x - c.x) / c.r, -1, 1) * 0.45 : 0;
    const targetX = this.hovering && p ? clamp((p.y - c.y) / c.r, -1, 1) * 0.45 : 0;
    const ease = 1 - Math.exp(-9 * dt);
    this.tiltY += (targetY - this.tiltY) * ease;
    this.tiltX += (targetX - this.tiltX) * ease;
    this.lift += ((this.hovering || this.grabbed ? 1 : 0) - this.lift) * ease;

    const settled =
      Math.abs(this.wx) < 0.03 && Math.abs(this.wy) < 0.03 && Math.abs(this.tiltX - targetX) < 0.002 &&
      Math.abs(this.tiltY - targetY) < 0.002 && Math.abs(this.lift - (this.hovering ? 1 : 0)) < 0.002;
    if (scroll !== 0) this.dirty = true;
    return !settled || this.grabbed || (this.hovering && !!p && Math.hypot(p.vx, p.vy) > 20);
  }

  sync() {
    this.group.rotation.set(this.tiltX, this.tiltY, 0);
    this.group.scale.setScalar(1 + this.lift * 0.08);
  }
}

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
  private io: IntersectionObserver;
  private ro: ResizeObserver;
  private observed = new Map<Element, View>();
  private lost = false;

  constructor() {
    this.gl = document.createElement('canvas');
    this.renderer = new WebGLRenderer({ canvas: this.gl, antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(1);
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.toneMapping = ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

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
      if (this.hasPixels(view)) view.showLive();
      else if (++view.fails >= 3) this.retire(view);
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
    return Boolean(document.elementFromPoint(x, y)?.closest('a, button, summary, input, textarea, select, [data-cal-link]'));
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
      view.grab(p);
      document.documentElement.classList.add('is-grabbing');
      e.preventDefault();
      this.wake();
      return;
    }
  };

  private onUp = (e: PointerEvent) => {
    if (this.grabbed) {
      this.grabbed.release(this.pointer);
      this.grabbed = null;
      document.documentElement.classList.remove('is-grabbing');
      this.wake();
    }
    const tap = this.tap;
    this.tap = null;
    if (tap && e.type === 'pointerup' && e.timeStamp - tap.t < 450 && Math.hypot(e.clientX - tap.x, e.clientY - tap.y) < 12) {
      for (const view of this.views) {
        if (view.visible && view.pick(tap.x, tap.y)) {
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
  if (!(heroHost && poster) && !pebbleHosts.length) return;

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
  let made = 0;
  for (const host of pebbleHosts) {
    if (++made % 3 === 0) await yieldMain();
    const name = host.dataset.pebble as PebbleName;
    const img = host.querySelector('img');
    if (img) stage.add(new PebbleView(stage, host, name, img), img);
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
