// "Block für Block": the easter egg (components/EasterEgg.astro). A block slides over the tower; a tap, click, Space or
// Enter drops it, what hangs over falls off, and the tower grows one store part per floor. A drop right on top keeps
// the width. Loaded only when the egg is opened; nothing is stored.

export interface StackText {
  layers: string[];
  floors: string;
  perfect: string;
}

interface Block {
  x: number;
  w: number;
  color: number;
}
interface Chunk {
  x: number;
  y: number;
  w: number;
  vy: number;
  rot: number;
  color: number;
}

const COLORS = [
  { face: '#2433f0', top: '#5b66ff', text: '#ffffff' },
  { face: '#f4f5fa', top: '#ffffff', text: '#0e1018' },
  { face: '#0e1018', top: '#2a2e3d', text: '#ffffff' },
  { face: '#c9cfe4', top: '#e4e8f5', text: '#0e1018' },
];
const H = 34;
const TOP = 9;

export function startStack(canvas: HTMLCanvasElement, text: StackText, onOver: (floors: number) => void) {
  const ctx = canvas.getContext('2d')!;
  let width = 0;
  let height = 0;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();

  let tower: Block[] = [];
  let chunks: Chunk[] = [];
  let moving: Block & { dir: number } = { x: 0, w: 0, color: 0, dir: 1 };
  let camera = 0;
  let over = false;
  let flash = 0;
  let frame = 0;
  let last = 0;

  const reset = () => {
    const w = Math.round(width * 0.62);
    tower = [{ x: Math.round((width - w) / 2), w, color: 0 }];
    chunks = [];
    camera = 0;
    over = false;
    flash = 0;
    spawn();
  };

  const spawn = () => {
    const top = tower[tower.length - 1]!;
    const dir = tower.length % 2 ? 1 : -1;
    moving = { x: dir > 0 ? -top.w : width, w: top.w, color: tower.length % COLORS.length, dir };
  };

  const speed = () => Math.min(420, 150 + tower.length * 9);

  const drop = () => {
    if (over) return;
    const top = tower[tower.length - 1]!;
    const left = Math.max(moving.x, top.x);
    const right = Math.min(moving.x + moving.w, top.x + top.w);
    const overlap = right - left;
    const y = tower.length * H;
    if (overlap <= 0) {
      chunks.push({ x: moving.x, y, w: moving.w, vy: 0, rot: 0, color: moving.color });
      over = true;
      onOver(tower.length - 1);
      return;
    }
    if (Math.abs(moving.x - top.x) <= 4) {
      // Right on top: the full width again, and a flash.
      tower.push({ x: top.x, w: top.w, color: moving.color });
      flash = 1;
    } else {
      tower.push({ x: left, w: overlap, color: moving.color });
      const cutX = moving.x < top.x ? moving.x : right;
      chunks.push({ x: cutX, y, w: moving.w - overlap, vy: 0, rot: 0, color: moving.color });
    }
    spawn();
  };

  const block = (x: number, yUp: number, w: number, color: number, label?: string, alpha = 1) => {
    const c = COLORS[color]!;
    const y = height - 60 - yUp + camera;
    ctx.globalAlpha = alpha;
    // top face, a little lighter, for some depth
    ctx.fillStyle = c.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + TOP, y - TOP);
    ctx.lineTo(x + w + TOP, y - TOP);
    ctx.lineTo(x + w, y);
    ctx.closePath();
    ctx.fill();
    // side face
    ctx.fillStyle = color === 1 ? '#dfe3ef' : c.top;
    ctx.globalAlpha = alpha * 0.7;
    ctx.beginPath();
    ctx.moveTo(x + w, y);
    ctx.lineTo(x + w + TOP, y - TOP);
    ctx.lineTo(x + w + TOP, y - TOP + H);
    ctx.lineTo(x + w, y + H);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = c.face;
    ctx.fillRect(x, y, w, H);
    if (color === 1) {
      ctx.strokeStyle = '#d3d7e6';
      ctx.strokeRect(x + 0.5, y + 0.5, w - 1, H - 1);
    }
    if (label && w > 70) {
      ctx.fillStyle = c.text;
      ctx.font = '600 13px Onest, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, x + w / 2, y + H / 2 + 1, w - 12);
    }
    ctx.globalAlpha = 1;
  };

  const label = (i: number) => (i === 0 ? '' : text.layers[(i - 1) % text.layers.length]);

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    tower.forEach((b, i) => block(b.x, i * H, b.w, b.color, label(i)));
    for (const c of chunks) {
      const y = height - 60 - c.y + camera;
      ctx.save();
      ctx.translate(c.x + c.w / 2, y + H / 2);
      ctx.rotate(c.rot);
      ctx.translate(-(c.x + c.w / 2), -(y + H / 2));
      block(c.x, c.y, c.w, c.color, undefined, 0.9);
      ctx.restore();
    }
    if (!over) block(moving.x, tower.length * H, moving.w, moving.color, label(tower.length));
    if (flash > 0) {
      ctx.fillStyle = `rgba(36, 51, 240, ${flash * 0.9})`;
      ctx.font = '700 16px Onest, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(text.perfect, width / 2, 64);
    }
    ctx.fillStyle = '#0e1018';
    ctx.font = '700 15px Onest, system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(`${text.floors}: ${tower.length - 1}`, 16, 30);
  };

  const tick = (now: number) => {
    const dt = Math.min(0.05, (now - (last || now)) / 1000);
    last = now;
    if (!over) {
      moving.x += moving.dir * speed() * dt;
      if (moving.x > width - moving.w * 0.15 && moving.dir > 0) moving.dir = -1;
      if (moving.x < -moving.w * 0.85 && moving.dir < 0) moving.dir = 1;
    }
    // keep the top of the tower in the lower middle of the view
    const want = Math.max(0, tower.length * H - height * 0.45);
    camera += (want - camera) * Math.min(1, dt * 6);
    for (const c of chunks) {
      c.vy += 1400 * dt;
      c.y -= c.vy * dt;
      c.rot += (c.x < width / 2 ? -1 : 1) * dt * 2;
    }
    chunks = chunks.filter((c) => height - 60 - c.y + camera < height + 80);
    flash = Math.max(0, flash - dt * 1.5);
    draw();
    frame = requestAnimationFrame(tick);
  };

  reset();
  frame = requestAnimationFrame(tick);

  return {
    drop,
    restart: reset,
    resize,
    stop: () => cancelAnimationFrame(frame),
  };
}
