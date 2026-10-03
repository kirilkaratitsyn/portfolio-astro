// The globe of the worldwide section (src/sections/Globe.astro): a glossy white ball in the material of the stones,
// land as ink dots, a cobalt pin for every client store, and an arc from home (Bad Bentheim, Germany) to each pin
// with a light travelling along it. Built in code; the land dots come from src/lib/globe-dots.json
// (scripts/make-globe-dots.mjs), so no map data is loaded at runtime. Zoomed in, grids of land dots three and six times
// as dense (GLOBE_LAND, fetched when first needed) take over from them, and the pins in a crowd shrink to keep apart.
import {
  BackSide, BufferAttribute, BufferGeometry, Color, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshPhysicalMaterial,
  Points, RingGeometry, ShaderMaterial, SphereGeometry, TubeGeometry, Vector3, Curve,
} from 'three';
import dots from './globe-dots.json';

const DEG = Math.PI / 180;
export const GLOBE_RADIUS = 2;
export const GLOBE_CAMERA = { fov: 30, distance: 9.4 };
/** How far the globe zooms in (camera zoom), close enough to see the Benelux stores well apart. */
export const GLOBE_MAX_ZOOM = 8;
/** The finer grids of land dots, fetched as the globe is zoomed in: file, how many times denser, zoom to fetch at. */
export const GLOBE_LAND = [
  { url: '/source/3d/globe-land.bin', density: 3, from: 1 },
  { url: '/source/3d/globe-land-2.bin', density: 6, from: 3 },
] as const;
/** Where the arcs start: Bad Bentheim, Germany. */
export const HOME = { lat: 52.3, lng: 7.16 };

const COBALT = '#2433f0';
const INK = '#0e1018';

/** A pin as the page hands it over (data-markers on the globe host). */
export interface GlobeMarker {
  /** store title, city, localized country name, country code, store url, latitude, longitude, store logo */
  t: string;
  c: string;
  n: string;
  k: string;
  u: string;
  la: number;
  lo: number;
  l?: string;
}

/** A pin: one store, or several that sit in the same place (one city, or two towns next to each other). */
export interface GlobePin extends GlobeMarker {
  stores: GlobeMarker[];
  /** Position on the ball in the globe's own space. */
  at: Vector3;
  /** A pin for several stores is a little bigger. */
  size: number;
  dot: Mesh;
  ring: Mesh;
  arc: Mesh;
  comet: Mesh;
  phase: number;
}

export function toVector(lat: number, lng: number, r = GLOBE_RADIUS, into = new Vector3()) {
  const phi = lat * DEG;
  const lam = lng * DEG;
  return into.set(r * Math.cos(phi) * Math.sin(lam), r * Math.sin(phi), r * Math.cos(phi) * Math.cos(lam));
}

/** A great-circle path from a to b that lifts off the ball; long flights fly higher. */
class Arc extends Curve<Vector3> {
  private a: Vector3;
  private b: Vector3;
  private angle: number;
  private lift: number;
  constructor(from: Vector3, to: Vector3) {
    super();
    this.a = from.clone().normalize();
    this.b = to.clone().normalize();
    this.angle = this.a.angleTo(this.b);
    this.lift = 0.04 + 0.34 * (this.angle / Math.PI);
  }
  override getPoint(t: number, into = new Vector3()) {
    const s = Math.sin(this.angle) || 1;
    const wa = Math.sin((1 - t) * this.angle) / s;
    const wb = Math.sin(t * this.angle) / s;
    into.copy(this.a).multiplyScalar(wa).addScaledVector(this.b, wb).normalize();
    return into.multiplyScalar(GLOBE_RADIUS * (1.006 + this.lift * Math.sin(Math.PI * t)));
  }
}

const dotShader = {
  vertex: /* glsl */ `
    uniform float uSize;
    varying float vFacing;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vFacing = normalize(normalMatrix * normalize(position)).z;
      gl_PointSize = uSize * (10.0 / -mv.z);
      gl_Position = projectionMatrix * mv;
    }`,
  fragment: /* glsl */ `
    uniform vec3 uColor;
    uniform float uAlpha;
    varying float vFacing;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      if (d > 0.5) discard;
      float a = smoothstep(0.5, 0.36, d) * smoothstep(0.02, 0.4, vFacing) * 0.78 * uAlpha;
      gl_FragColor = vec4(uColor, a);
    }`,
};

const haloShader = {
  vertex: /* glsl */ `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragment: /* glsl */ `
    uniform vec3 uColor;
    varying vec3 vNormal;
    void main() {
      // Seen from inside (back faces), so -z grows from 0 at the outer edge of the glow to its inner edge at the ball.
      float glow = smoothstep(0.0, 0.42, -vNormal.z);
      gl_FragColor = vec4(uColor, glow * glow * 0.28);
    }`,
};

function srgb(hex: string) {
  const c = new Color(hex);
  return new Vector3(c.r, c.g, c.b);
}

export function makeGlobe(markers: GlobeMarker[]) {
  const group = new Group();
  group.rotation.order = 'XYZ';

  // The ball, in the glossy white of the pebbles.
  const ball = new Mesh(
    new SphereGeometry(GLOBE_RADIUS, 96, 64),
    new MeshPhysicalMaterial({ color: '#f4f5f9', roughness: 0.3, metalness: 0, clearcoat: 0.8, clearcoatRoughness: 0.12, envMapIntensity: 1 }),
  );
  group.add(ball);

  // A faint cobalt glow around the rim (it stays still while the ball turns).
  const halo = new Mesh(
    new SphereGeometry(GLOBE_RADIUS * 1.1, 64, 48),
    new ShaderMaterial({ vertexShader: haloShader.vertex, fragmentShader: haloShader.fragment, uniforms: { uColor: { value: srgb(COBALT) } }, transparent: true, depthWrite: false, side: BackSide }),
  );

  // Land as dots; the dots fade out toward the rim.
  const land = dots as number[];
  const positions = new Float32Array((land.length / 2) * 3);
  const v = new Vector3();
  for (let i = 0; i < land.length; i += 2) {
    toVector(land[i]!, land[i + 1]!, GLOBE_RADIUS * 1.003, v);
    positions.set([v.x, v.y, v.z], (i / 2) * 3);
  }
  const dotLayer = (positions: Float32Array) => {
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    const material = new ShaderMaterial({
      vertexShader: dotShader.vertex,
      fragmentShader: dotShader.fragment,
      uniforms: { uSize: { value: 4 }, uAlpha: { value: 1 }, uColor: { value: srgb(INK) } },
      transparent: true,
      depthWrite: false,
    });
    const points = new Points(geometry, material);
    group.add(points);
    return { points, uniforms: material.uniforms as { uSize: { value: number }; uAlpha: { value: number } } };
  };
  const coarse = dotLayer(positions);
  const grids: (ReturnType<typeof dotLayer> | null)[] = GLOBE_LAND.map(() => null);

  // Pins, arcs from home, and a light flying along each arc.
  const PIN = GLOBE_RADIUS * 0.022;
  const HOME_PIN = GLOBE_RADIUS * 0.03;
  const pinGeometry = new SphereGeometry(PIN, 20, 14);
  const pinMaterial = new MeshPhysicalMaterial({ color: COBALT, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1 });
  const ringGeometry = new RingGeometry(GLOBE_RADIUS * 0.03, GLOBE_RADIUS * 0.038, 40);
  const arcMaterial = new MeshBasicMaterial({ color: COBALT, transparent: true, opacity: 0.32, toneMapped: false, depthWrite: false });
  const cometGeometry = new SphereGeometry(GLOBE_RADIUS * 0.014, 12, 10);
  const cometMaterial = new MeshBasicMaterial({ color: COBALT, toneMapped: false });
  // Arcs in three thicknesses: zoomed in, a thinner one is swapped in so the lines stay lines.
  const ARC_WIDTHS = [0.0032, 0.0016, 0.0008];

  const home = toVector(HOME.lat, HOME.lng, GLOBE_RADIUS * 1.01);
  const homePin = new Mesh(new SphereGeometry(HOME_PIN, 20, 14), new MeshPhysicalMaterial({ color: INK, roughness: 0.25, clearcoat: 1, envMapIntensity: 0.4 }));
  homePin.position.copy(home);
  group.add(homePin);

  // Stores of one country closer than ~35 km share a pin, or their balls would sit inside each other.
  const places: GlobeMarker[][] = [];
  for (const m of markers) {
    const near = places.find((p) => p[0]!.k === m.k && Math.hypot(p[0]!.la - m.la, (p[0]!.lo - m.lo) * Math.cos(m.la * DEG)) < 0.35);
    if (near) near.push(m);
    else places.push([m]);
  }

  const pins: GlobePin[] = [];
  const arcs: TubeGeometry[][] = [];
  const comets: { mesh: Mesh; arc: Arc; phase: number; speed: number }[] = [];
  places.forEach((stores, i) => {
    const m: GlobeMarker = { ...stores[0]!, la: stores.reduce((a, s) => a + s.la, 0) / stores.length, lo: stores.reduce((a, s) => a + s.lo, 0) / stores.length };
    const size = 1 + 0.25 * Math.min(2, stores.length - 1);
    const at = toVector(m.la, m.lo, GLOBE_RADIUS * 1.008);
    const pin = new Mesh(pinGeometry, pinMaterial);
    pin.position.copy(at);
    pin.scale.setScalar(size);
    group.add(pin);
    const ring = new Mesh(ringGeometry, new MeshBasicMaterial({ color: COBALT, transparent: true, opacity: 0, side: DoubleSide, toneMapped: false, depthWrite: false }));
    ring.position.copy(at);
    ring.lookAt(at.clone().multiplyScalar(2));
    group.add(ring);
    const phase = (i * 0.618) % 1;
    const arc = new Arc(home, at);
    const widths = ARC_WIDTHS.map((w) => new TubeGeometry(arc, 64, GLOBE_RADIUS * w, 5, false));
    arcs.push(widths);
    const tube = new Mesh(widths[0], arcMaterial);
    group.add(tube);
    const comet = new Mesh(cometGeometry, cometMaterial);
    group.add(comet);
    comets.push({ mesh: comet, arc, phase, speed: 0.22 + ((i * 0.37) % 1) * 0.12 });
    pins.push({ ...m, stores, at, size, dot: pin, ring, arc: tube, comet, phase });
  });

  // How far each pin (and home, last) is from its nearest neighbour, as an angle on the ball.
  const units = [...pins.map((p) => p.at.clone().normalize()), home.clone().normalize()];
  const gaps = units.map((u, i) => Math.min(Math.PI, ...units.filter((_, j) => j !== i).map((v) => u.angleTo(v))));
  const pinScale = pins.map((p) => p.size);

  const tmp = new Vector3();
  let zoom = 1;
  let dotPx = 4;
  let arcWidth = 0;
  const ramp = (v: number, a: number, b: number) => Math.min(1, Math.max(0, (v - a) / (b - a)));
  /**
   * Coarse dots grow a little with the zoom until the 3× grid fades in (zoom 1.4–2.4), and the 6× grid after it
   * (3.4–4.6). Each grid draws its dots at about half the gap between them, so the land stays dotted, not filled.
   */
  const sizeDots = () => {
    const k = (GLOBE_CAMERA.distance - GLOBE_RADIUS) / 10;
    const f1 = grids[0] ? ramp(zoom, 1.4, 2.4) : 0;
    const f2 = grids[1] ? ramp(zoom, 3.4, 4.6) : 0;
    const weights = [(1 - f1) * (1 - f2), f1 * (1 - f2), f2];
    coarse.uniforms.uSize.value = dotPx * zoom ** 0.75 * k;
    coarse.uniforms.uAlpha.value = weights[0]!;
    coarse.points.visible = weights[0]! > 0;
    grids.forEach((grid, i) => {
      if (!grid) return;
      grid.uniforms.uSize.value = dotPx * (zoom / GLOBE_LAND[i]!.density) * 0.95 * k;
      grid.uniforms.uAlpha.value = weights[i + 1]!;
      grid.points.visible = weights[i + 1]! > 0;
    });
  };
  /**
   * The scale of a ball of radius `radius` that is `base` on its own: in a crowd it shrinks until two neighbours fill at
   * most 60% of the gap between them, but never below about 3.5 px on screen.
   */
  const fit = (base: number, gap: number, radius: number, ballPx: number) => {
    const apart = (0.6 * GLOBE_RADIUS * gap) / (2 * radius);
    const least = (3.5 * GLOBE_RADIUS) / (radius * Math.max(1, ballPx));
    return Math.max(Math.min(base, apart), Math.min(base, least));
  };
  return {
    group,
    halo,
    pins,
    home: { at: home },
    /** Dot size in device pixels at the front of the ball, at zoom 1. */
    setDotSize(px: number) {
      dotPx = px;
      sizeDots();
    },
    /** Zoom of the camera, and the radius of the ball on screen at that zoom (CSS px). */
    setZoom(value: number, ballPx: number) {
      zoom = value;
      const marks = zoom ** -0.7;
      pins.forEach((pin, i) => {
        pinScale[i] = fit(marks * pin.size, gaps[i]!, PIN, ballPx);
        pin.dot.scale.setScalar(pinScale[i]!);
      });
      homePin.scale.setScalar(fit(marks, gaps[pins.length]!, HOME_PIN, ballPx));
      const width = zoom < 2.2 ? 0 : zoom < 4.5 ? 1 : 2;
      if (width !== arcWidth) {
        arcWidth = width;
        pins.forEach((pin, i) => (pin.arc.geometry = arcs[i]![width]!));
      }
      sizeDots();
    },
    /** Show the stores of one country only (its pins, rings, arcs and lights), or all of them with null. */
    setCountry(code: string | null) {
      for (const pin of pins) {
        const on = !code || pin.k === code;
        pin.dot.visible = pin.ring.visible = pin.arc.visible = pin.comet.visible = on;
      }
    },
    get hasFineLand() {
      return Boolean(grids[0]);
    },
    /** A finer grid (GLOBE_LAND[level]): a uint32 with the size of its Fibonacci sphere, then one bit per point (1 = land). */
    addFineLand(buffer: ArrayBuffer, level = 0) {
      if (grids[level] || buffer.byteLength < 4) return;
      const n = new DataView(buffer).getUint32(0, true);
      const bits = new Uint8Array(buffer, 4);
      const golden = Math.PI * (3 - Math.sqrt(5));
      const r = GLOBE_RADIUS * 1.003;
      let count = 0;
      for (let i = 0; i < n; i++) if ((bits[i >> 3] ?? 0) & (1 << (i & 7))) count++;
      const list = new Float32Array(count * 3);
      let o = 0;
      for (let i = 0; i < n; i++) {
        if (!((bits[i >> 3] ?? 0) & (1 << (i & 7)))) continue;
        // The same point as scripts/make-globe-dots.mjs fibonacci(), placed like toVector().
        const y = 1 - (i / (n - 1)) * 2;
        const ring = Math.sqrt(1 - y * y);
        const theta = golden * i;
        list[o++] = r * ring * Math.sin(theta);
        list[o++] = r * y;
        list[o++] = r * ring * Math.cos(theta);
      }
      grids[level] = dotLayer(list);
      sizeDots();
    },
    /** Pulse the pin rings and move the lights along the arcs. */
    update(time: number) {
      pins.forEach((pin, i) => {
        const k = (time * 0.45 + pin.phase) % 1;
        pin.ring.scale.setScalar((1 + k * 1.6) * pinScale[i]!);
        (pin.ring.material as MeshBasicMaterial).opacity = 0.55 * (1 - k);
      });
      const light = zoom ** -0.85;
      for (const c of comets) {
        if (!c.mesh.visible) continue;
        const t = (time * c.speed + c.phase) % 1;
        c.arc.getPoint(t, tmp);
        c.mesh.position.copy(tmp);
        c.mesh.scale.setScalar((Math.sin(Math.PI * t) * 1.1 + 0.05) * light);
      }
    },
  };
}

export type Globe = ReturnType<typeof makeGlobe>;
