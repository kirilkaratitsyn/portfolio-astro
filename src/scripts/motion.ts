// Scroll and pointer motion for the whole site (GSAP + ScrollTrigger + SplitText, Lenis for the scroll feel).
// Everything here is an enhancement: the HTML is complete without it, hidden start states exist only
// under the `motion` class, and nothing above the fold waits for this file.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

const qs = <T extends HTMLElement = HTMLElement>(selector: string, root: ParentNode = document) => root.querySelector<T>(selector);
const qsa = <T extends HTMLElement = HTMLElement>(selector: string, root: ParentNode = document) => [...root.querySelectorAll<T>(selector)];
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const EXPO = 'expo.out';

export function init() {
  (window as unknown as { __motion?: boolean }).__motion = true;
  gsap.registerPlugin(ScrollTrigger, SplitText);
  ScrollTrigger.config({ ignoreMobileResize: true });

  const lenis = smoothScroll();
  header();
  hero();
  headings();
  reveals();
  rows();
  peek();
  stats();
  marquee();
  feature();
  process();
  reviews();
  contact();
  footer();
  magnets();

  // Fonts and lazy images move things: measure again.
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  if (lenis) window.addEventListener('resize', () => lenis.resize());
}

/* ---------------------------------------------------------------- scroll feel */

function smoothScroll() {
  if (!fine) return null;
  const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.95, anchors: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  document.documentElement.classList.add('lenis-on');

  // In-page links (header: /#work, /#services, /#faq) glide instead of jumping.
  document.addEventListener('click', (event) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    event.preventDefault();
    lenis.scrollTo(target, { offset: 0, duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4) });
    history.pushState(null, '', url.hash);
  });
  return lenis;
}

/* ---------------------------------------------------------------- header */

function header() {
  const bar = qs('[data-header]');
  if (!bar) return;
  let hidden = false;
  const set = (value: boolean) => {
    if (value === hidden) return;
    hidden = value;
    gsap.to(bar, { yPercent: value ? -140 : 0, duration: 0.6, ease: 'power3.out', overwrite: true });
  };
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const menuOpen = qs('[data-menu-toggle]')?.getAttribute('aria-expanded') === 'true';
      set(!menuOpen && self.direction === 1 && self.scroll() > 520);
      if (self.direction === -1) set(false);
    },
  });
}

/* ---------------------------------------------------------------- hero */

/** SplitText gives up the font's kerning between letters; scale the type so the word still fills its row. */
function fitWordmark(word: HTMLElement, chars: Element[]) {
  const first = chars[0]?.getBoundingClientRect();
  const last = chars[chars.length - 1]?.getBoundingClientRect();
  const row = word.parentElement;
  if (!first || !last || !row) return;
  const width = last.right - first.left;
  if (width > 0) word.style.fontSize = `calc(14.4cqi * ${(row.clientWidth / width).toFixed(4)})`;
}

function hero() {
  const section = qs('[data-hero]');
  if (!section) return;
  const word = qs('[data-hero-wm]', section);
  const claim = qs('h1', section);
  const button = qs('.hero-cta', section);
  const ribbon = qs('.hero-ribbon', section);

  const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: section, start: 'top top', end: 'bottom 12%', scrub: 0.7 } });
  if (word) {
    const split = SplitText.create(word, { type: 'chars', charsClass: 'wm-ch', aria: 'none' });
    fitWordmark(word, split.chars);
    // The letters sink into the floor of their row one after another, each at its own speed and tilt.
    tl.to(split.chars, { yPercent: (i: number) => 24 + ((i * 37) % 7) * 9, rotate: (i: number) => (i % 2 ? 1 : -1) * (3 + (i % 3) * 3), stagger: { each: 0.02, from: 'random' } }, 0);
  }
  if (claim) tl.to(claim, { y: -70, autoAlpha: 0 }, 0);
  if (button) tl.to(button, { y: -46 }, 0);
  if (ribbon) tl.to(ribbon, { yPercent: 36, scaleY: 1.25, transformOrigin: '50% 0%' }, 0);
}

/* ---------------------------------------------------------------- text */

function headings() {
  qsa('[data-split]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'ln',
      autoSplit: true,
      onSplit(self) {
        // Keep descenders inside the mask.
        self.masks.forEach((mask) => Object.assign((mask as HTMLElement).style, { paddingBottom: '0.14em', marginBottom: '-0.14em' }));
        el.style.visibility = 'visible';
        return gsap.from(self.lines, { yPercent: 115, duration: 1.15, ease: EXPO, stagger: 0.09, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      },
    });
  });
}

function reveals() {
  const items = qsa('[data-reveal]');
  if (items.length) {
    gsap.set(items, { opacity: 0, y: 36 });
    ScrollTrigger.batch(items, {
      start: 'top 92%',
      once: true,
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: EXPO, stagger: 0.09, overwrite: true }),
    });
  }
  qsa('[data-stagger]').forEach((list) => {
    const kids = [...list.children];
    gsap.set(kids, { opacity: 0, y: 26 });
    ScrollTrigger.create({
      trigger: list,
      start: 'top 90%',
      once: true,
      onEnter: () => gsap.to(kids, { opacity: 1, y: 0, duration: 1, ease: EXPO, stagger: 0.07 }),
    });
  });
}

/* ---------------------------------------------------------------- work rows */

function rows() {
  qsa('[data-row]').forEach((row) => {
    const link = qs('a', row);
    if (!link) return;
    const title = link.firstElementChild;
    const strip = qs('[data-strip]', link);
    const trigger = { trigger: row, start: 'top 94%', once: true } as const;
    if (title) gsap.from(title, { x: -48, opacity: 0, duration: 1.1, ease: EXPO, scrollTrigger: trigger });
    if (strip) {
      gsap.from(strip, { x: 140, opacity: 0, duration: 1.2, ease: EXPO, delay: 0.08, scrollTrigger: trigger });
      // The screenshots slowly scroll inside their frames while the row crosses the screen.
      qsa<HTMLImageElement>('img', strip).forEach((img, i) => {
        const down = i % 2 === 0;
        gsap.fromTo(img, { objectPosition: `50% ${down ? 0 : 100}%` }, { objectPosition: `50% ${down ? 100 : 0}%`, ease: 'none', scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: true } });
      });
    }
  });
}

/**
 * Work row hover: the arrow nudges and a larger screenshot follows the cursor. One delegated listener decides which
 * row is under the pointer, because rows that scroll away under a still pointer never get a `pointerleave`.
 */
function peek() {
  if (!fine) return;
  if (!qs('[data-row] a[data-peek]')) return;
  const box = document.createElement('div');
  box.className = 'peek';
  box.setAttribute('aria-hidden', 'true');
  const img = new Image();
  img.alt = '';
  img.decoding = 'async';
  box.append(img);
  document.body.append(box);
  gsap.set(box, { xPercent: -50, yPercent: -50, scale: 0.6, autoAlpha: 0, rotation: 0 });
  const x = gsap.quickTo(box, 'x', { duration: 0.55, ease: 'power3' });
  const y = gsap.quickTo(box, 'y', { duration: 0.55, ease: 'power3' });
  const turn = gsap.quickTo(box, 'rotation', { duration: 0.7, ease: 'power3' });

  let active: HTMLAnchorElement | null = null;
  let px = -1;
  let py = -1;
  let settle = 0;
  const rowAt = (target: Element | null) => target?.closest<HTMLAnchorElement>('[data-row] a[data-peek]') ?? null;
  const arrowOf = (link: HTMLAnchorElement) => qs('[data-arrow]', link);

  const leave = () => {
    if (!active) return;
    const arrow = arrowOf(active);
    if (arrow) gsap.to(arrow, { x: 0, duration: 0.6, ease: 'power3.out', overwrite: true });
    active = null;
    gsap.to(box, { autoAlpha: 0, scale: 0.6, duration: 0.35, ease: 'power3.in', overwrite: true });
  };
  const enter = (link: HTMLAnchorElement) => {
    leave();
    active = link;
    img.src = link.dataset.peek ?? '';
    x(px);
    y(py);
    const arrow = arrowOf(link);
    if (arrow) gsap.to(arrow, { x: 10, duration: 0.5, ease: 'power3.out', overwrite: true });
    gsap.to(box, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'power3.out', overwrite: true });
  };

  document.addEventListener(
    'pointermove',
    (e) => {
      const turnBy = (e.clientX - px) * 0.5;
      px = e.clientX;
      py = e.clientY;
      const link = rowAt(e.target as Element);
      if (!link) return leave();
      if (link !== active) enter(link);
      x(px);
      y(py);
      turn(gsap.utils.clamp(-10, 10, turnBy));
    },
    { passive: true },
  );
  // While the page scrolls the rows slide under a still pointer: hide, then look again once it stops.
  window.addEventListener(
    'scroll',
    () => {
      leave();
      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        const link = px >= 0 ? rowAt(document.elementFromPoint(px, py)) : null;
        if (link) enter(link);
      }, 140);
    },
    { passive: true },
  );
  document.documentElement.addEventListener('pointerleave', leave);
  window.addEventListener('blur', leave);
}

/* ---------------------------------------------------------------- numbers, marquee */

function stats() {
  qsa('[data-stat]').forEach((el) => {
    const match = el.textContent?.trim().match(/^(\d+)(.*)$/);
    if (!match) return;
    const end = Number(match[1]);
    const suffix = match[2] ?? '';
    const counter = { value: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => gsap.to(counter, { value: end, duration: 2.2, ease: 'power3.out', onUpdate: () => (el.textContent = `${Math.round(counter.value)}${suffix}`) }),
    });
  });
}

function marquee() {
  const wrap = qs('[data-marquee-wrap]');
  const track = qs('[data-marquee]');
  if (!wrap || !track) return;
  track.style.animation = 'none';
  const wrapX = gsap.utils.wrap(-50, 0);
  let position = 0;
  let boost = 0;
  let direction = -1;
  let running = false;
  const skew = gsap.quickSetter(track, 'skewX', 'deg') as (value: number) => void;
  const apply = gsap.quickSetter(track, 'xPercent') as (value: number) => void;

  ScrollTrigger.create({
    trigger: wrap,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (self) => (running = self.isActive),
    onUpdate: (self) => {
      // Scrolling speeds the band up and the direction of the scroll turns it around.
      direction = self.direction === 1 ? -1 : 1;
      boost = Math.min(Math.abs(self.getVelocity()) / 1000, 6);
    },
  });
  gsap.ticker.add((_time, delta) => {
    if (!running) return;
    boost *= 0.94;
    const speed = (0.9 + boost * 2.2) * (delta / 16.7);
    position = wrapX(position + direction * speed * 0.03);
    apply(position);
    skew(gsap.utils.clamp(-9, 9, direction * boost * -1.6));
  });
}

/* ---------------------------------------------------------------- feature, process, reviews, contact */

function feature() {
  const section = qs('[data-feature]');
  const panel = qs('[data-feature-panel]', section ?? document);
  if (!section || !panel) return;
  const desk = qs('[data-feature-desk]', panel);
  const phone = qs('[data-feature-phone]', panel);
  const pebbles = qsa('.pebble', panel);
  const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: panel, start: 'top 95%', end: 'bottom 35%', scrub: 0.8 } });
  tl.fromTo(panel, { scale: 0.86, borderRadius: 96 }, { scale: 1, borderRadius: 28 }, 0);
  if (desk) tl.fromTo(desk, { yPercent: 22, rotateX: 16, transformPerspective: 1400, transformOrigin: '50% 100%' }, { yPercent: -3, rotateX: 0 }, 0);
  if (phone) tl.fromTo(phone, { yPercent: 55, rotate: 9 }, { yPercent: -4, rotate: 0 }, 0);
  pebbles.forEach((p, i) => tl.fromTo(p, { yPercent: i ? -60 : 70 }, { yPercent: i ? 30 : -35 }, 0));
}

function process() {
  const list = qs('[data-process]');
  if (!list) return;
  const line = qs('[data-process-line]', list);
  if (line) gsap.fromTo(line, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', ease: 'none', scrollTrigger: { trigger: list, start: 'top 72%', end: 'bottom 62%', scrub: 0.6 } });
  qsa('[data-step]', list).forEach((step) => {
    const pebble = qs('.pebble', step);
    const text = qsa('h3, p', step);
    const tl = gsap.timeline({ scrollTrigger: { trigger: step, start: 'top 88%', once: true } });
    if (pebble) tl.from(pebble, { scale: 0.15, yPercent: 40, duration: 1.4, ease: 'elastic.out(1, 0.55)' }, 0);
    tl.from(text, { y: 34, opacity: 0, duration: 1, ease: EXPO, stagger: 0.12 }, 0.12);
  });
}

function reviews() {
  const quote = qs('[data-quote]');
  if (quote) {
    // The quote lights up word by word while you read down the page.
    const split = SplitText.create(quote, { type: 'words', aria: 'none' });
    // Dimmed only once the quote scrolls into view, so it is never low-contrast at rest.
    gsap.fromTo(split.words, { opacity: 0.14 }, { opacity: 1, ease: 'none', stagger: 0.12, immediateRender: false, scrollTrigger: { trigger: quote, start: 'top 100%', end: 'bottom 52%', scrub: true } });
  }
  const bars = qsa('[data-bar-row] i');
  if (bars.length) {
    gsap.from(bars, { scaleX: 0, transformOrigin: '0 50%', duration: 1.6, ease: EXPO, stagger: 0.12, scrollTrigger: { trigger: bars[0]?.closest('ul') ?? bars[0], start: 'top 82%', once: true } });
  }
}

function contact() {
  const panel = qs('[data-contact]');
  if (!panel) return;
  gsap.fromTo(panel, { scale: 0.88, borderRadius: 96 }, { scale: 1, borderRadius: 28, ease: 'none', scrollTrigger: { trigger: panel, start: 'top 100%', end: 'top 30%', scrub: 0.7 } });
  // The pebbles fall into the block and bounce.
  gsap.from(qsa('.pebble', panel), { yPercent: -260, duration: 1.9, ease: 'bounce.out', stagger: 0.2, scrollTrigger: { trigger: panel, start: 'top 55%', once: true } });
}

function footer() {
  const word = qs('[data-footer-wm]');
  if (!word) return;
  const split = SplitText.create(word, { type: 'chars', charsClass: 'wm-ch', aria: 'none' });
  fitWordmark(word, split.chars);
  gsap.from(split.chars, { yPercent: 120, duration: 1.3, ease: EXPO, stagger: 0.05, scrollTrigger: { trigger: word, start: 'top 98%', once: true } });
  if (!fine) return;
  // Letters lean away from the cursor.
  const lift = split.chars.map((char) => gsap.quickTo(char, 'yPercent', { duration: 0.6, ease: 'power3' }));
  const wrap = word.parentElement as HTMLElement;
  wrap.addEventListener('pointermove', (e) => {
    split.chars.forEach((char, i) => {
      const r = (char as HTMLElement).getBoundingClientRect();
      const d = Math.abs(e.clientX - (r.left + r.width / 2));
      lift[i]?.(-Math.max(0, 1 - d / 220) * 22);
    });
  });
  wrap.addEventListener('pointerleave', () => lift.forEach((to) => to(0)));
}

/** Buttons that book a call lean toward the cursor. */
function magnets() {
  if (!fine) return;
  qsa('main [data-cal-link], [data-header] [data-cal-link]').forEach((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
    const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      x((e.clientX - (r.left + r.width / 2)) * 0.28);
      y((e.clientY - (r.top + r.height / 2)) * 0.34);
    });
    const reset = () => {
      x(0);
      y(0);
    };
    el.addEventListener('pointerleave', reset);
    // A button that scrolls away from a still pointer never gets `pointerleave`.
    window.addEventListener('scroll', reset, { passive: true });
  });
}
