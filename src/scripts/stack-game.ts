// "Block für Block": the easter egg (components/EasterEgg.astro). A block slides over the tower; a tap, click, Space or
// Enter drops it, what hangs over falls off, and the tower grows one store part per floor. A drop right on top keeps
// the width. Every floor is named: inside the block when it is wide enough, beside it when not. Loaded only when the
// egg is opened; nothing is stored.

export interface StackText {
  layers: string[];
  floors: string;
  perfect: string;
  tap: string;
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
  { face: '#5b8fe0', top: '#b1caf0', side: '#3072d8', text: '#ffffff' },
  { face: '#f4f5fa', top: '#ffffff', side: '#d9ddea', text: '#0e1018' },
  { face: '#0e1018', top: '#2a2e3d', side: '#05060a', text: '#ffffff' },
  { face: '#c9cfe4', top: '#e4e8f5', side: '#aab2cc', text: '#0e1018' },
];
const H = 30;
const TOP = 8;
const FONT = '600 12px Onest, system-ui, sans-serif';

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
  let started = false;
  let flash = 0;
  let frame = 0;
  let last = 0;

  const ground = () => height - 40;
  const label = (i: number) => (i === 0 ? '' : text.layers[(i - 1) % text.layers.length]!);

  const reset = () => {
    const w = Math.round(Math.min(width * 0.6, 260));
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

  const speed = () => Math.min(430, 150 + tower.length * 9);

  const drop = () => {
    if (over) return;
    started = true;
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

  const screenY = (yUp: number) => ground() - yUp - H + camera;

  const box = (x: number, yUp: number, w: number, color: number, alpha = 1) => {
    const c = COLORS[color]!;
    const y = screenY(yUp);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = c.side;
    ctx.beginPath();
    ctx.moveTo(x + w, y);
    ctx.lineTo(x + w + TOP, y - TOP);
    ctx.lineTo(x + w + TOP, y - TOP + H);
    ctx.lineTo(x + w, y + H);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = c.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + TOP, y - TOP);
    ctx.lineTo(x + w + TOP, y - TOP);
    ctx.lineTo(x + w, y);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = c.face;
    ctx.fillRect(x, y, w, H);
    if (color === 1) {
      ctx.strokeStyle = '#d3d7e6';
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 0.5, y + 0.5, w - 1, H - 1);
    }
    ctx.globalAlpha = 1;
  };

  /** The floor's name: inside when it fits, otherwise beside the block (on the side with more room) with a tick. */
  const name = (b: Block, yUp: number, word: string, strong: boolean) => {
    if (!word) return;
    ctx.font = FONT;
    ctx.textBaseline = 'middle';
    const y = screenY(yUp) + H / 2 + 1;
    const tw = ctx.measureText(word).width;
    if (tw + 16 <= b.w) {
      ctx.fillStyle = COLORS[b.color]!.text;
      ctx.textAlign = 'center';
      ctx.fillText(word, b.x + b.w / 2, y);
      return;
    }
    const roomRight = width - (b.x + b.w + TOP);
    const right = roomRight >= tw + 22 || roomRight >= b.x;
    ctx.fillStyle = strong ? '#5b8fe0' : '#5a5f73';
    ctx.strokeStyle = strong ? '#5b8fe0' : '#b6bccf';
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (right) {
      const x0 = b.x + b.w + TOP + 4;
      ctx.moveTo(x0, y);
      ctx.lineTo(x0 + 8, y);
      ctx.stroke();
      ctx.textAlign = 'left';
      ctx.fillText(word, x0 + 12, y);
    } else {
      const x0 = b.x - 4;
      ctx.moveTo(x0, y);
      ctx.lineTo(x0 - 8, y);
      ctx.stroke();
      ctx.textAlign = 'right';
      ctx.fillText(word, x0 - 12, y);
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    tower.forEach((b, i) => box(b.x, i * H, b.w, b.color));
    tower.forEach((b, i) => name(b, i * H, label(i), i === tower.length - 1));
    for (const c of chunks) {
      const y = screenY(c.y);
      ctx.save();
      ctx.translate(c.x + c.w / 2, y + H / 2);
      ctx.rotate(c.rot);
      ctx.translate(-(c.x + c.w / 2), -(y + H / 2));
      box(c.x, c.y, c.w, c.color, 0.9);
      ctx.restore();
    }
    if (!over) {
      const yUp = tower.length * H;
      box(moving.x, yUp, moving.w, moving.color);
      // The floor being built, named above the moving block.
      ctx.font = '700 12px Onest, system-ui, sans-serif';
      ctx.fillStyle = '#5b8fe0';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText(label(tower.length), moving.x + moving.w / 2, screenY(yUp) - TOP - 6);
    }
    ctx.textBaseline = 'alphabetic';
    if (flash > 0) {
      ctx.fillStyle = `rgba(91,143,224, ${flash})`;
      ctx.font = '700 18px Onest, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(text.perfect, width / 2, 58);
    }
    ctx.fillStyle = '#0e1018';
    ctx.font = '700 15px Onest, system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${text.floors}: ${tower.length - 1}`, 14, 26);
    if (!started) {
      ctx.fillStyle = '#5a5f73';
      ctx.font = '500 14px Onest, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(text.tap, width / 2, height * 0.3);
    }
  };

  const tick = (now: number) => {
    const dt = Math.min(0.05, (now - (last || now)) / 1000);
    last = now;
    if (!over) {
      moving.x += moving.dir * speed() * dt;
      if (moving.x > width - moving.w * 0.15 && moving.dir > 0) moving.dir = -1;
      if (moving.x < -moving.w * 0.85 && moving.dir < 0) moving.dir = 1;
    }
    // Keep the top of the tower a little below the middle of the view.
    const want = Math.max(0, (tower.length + 1) * H - height * 0.5);
    camera += (want - camera) * Math.min(1, dt * 6);
    for (const c of chunks) {
      c.vy += 1400 * dt;
      c.y -= c.vy * dt;
      c.rot += (c.x < width / 2 ? -1 : 1) * dt * 2;
    }
    chunks = chunks.filter((c) => screenY(c.y) < height + 80);
    flash = Math.max(0, flash - dt * 1.4);
    draw();
    frame = requestAnimationFrame(tick);
  };

  reset();
  frame = requestAnimationFrame(tick);

  return {
    drop,
    restart: () => {
      started = true;
      reset();
    },
    resize,
    stop: () => cancelAnimationFrame(frame),
  };
}
