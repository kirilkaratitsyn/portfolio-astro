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
  const flies = flyLogo();
  hero(flies);
  headings();
  reveals();
  rows();
  peek();
  stats();
  marquee();
  feature();
  anatomy();
  about();
  reviews(lenis);
  contact();
  footer();
  magnets();
  cards();
  stackGrid();

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

function hero(wordFlies: boolean) {
  const section = qs('[data-hero]');
  if (!section) return;
  const claim = qs('h1', section);
  const button = qs('.hero-cta', section);
  const ribbon = qs('.hero-ribbon', section);

  const tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: section, start: 'top top', end: 'bottom 12%', scrub: 0.7 } });
  // Without the flight (no header logo to land in) the letters sink into the floor of their row instead.
  const word = wordFlies ? null : qs('[data-hero-wm]', section);
  if (word) {
    const split = SplitText.create(word, { type: 'chars', charsClass: 'wm-ch', aria: 'none' });
    fitWordmark(word, split.chars);
    tl.to(split.chars, { yPercent: (i: number) => 24 + ((i * 37) % 7) * 9, rotate: (i: number) => (i % 2 ? 1 : -1) * (3 + (i % 3) * 3), stagger: { each: 0.02, from: 'random' } }, 0);
  }
  if (claim) tl.to(claim, { y: -70, autoAlpha: 0 }, 0);
  if (button) tl.to(button, { y: -46 }, 0);
  if (ribbon) tl.to(ribbon, { yPercent: 36, scaleY: 1.25, transformOrigin: '50% 0%' }, 0);
}

/**
 * Home only: while you scroll the first screen, the big surname lifts off the page, shrinks and flies into the
 * header logo, which grows to make room for it. A fixed copy of the word does the flying; the original is hidden
 * the moment the copy takes over and the header's own text takes over again at the end, so there is no jump.
 * Returns false (and leaves the header whole) when something needed is missing.
 */
function flyLogo(): boolean {
  const root = document.documentElement;
  const word = qs('[data-hero-wm]');
  const wrap = word?.parentElement;
  const name = qs('[data-brand-name]');
  const text = qs('[data-brand-text]');
  const bar = qs('[data-header]');
  const show = () => {
    if (name) Object.assign(name.style, { maxWidth: 'none', opacity: '1' });
    return false;
  };
  if (!root.hasAttribute('data-fly-logo')) return false;
  if (!word || !wrap || !name || !text || !bar) return show();

  const fly = document.createElement('span');
  fly.className = 'wm-fly';
  fly.setAttribute('aria-hidden', 'true');
  fly.textContent = word.textContent;
  document.body.appendChild(fly);

  // Where the copy starts (over the hero word), where it lands (the header text) and how much smaller it is there.
  const geo = { x0: 0, y0: 0, tx: 0, ty: 0, scale: 1, full: 0, lineH: 0 };
  const measure = () => {
    const cs = getComputedStyle(word);
    Object.assign(fly.style, { fontSize: cs.fontSize, lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing });
    const from = wrap.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();
    const to = text.getBoundingClientRect();
    const tcs = getComputedStyle(text);
    geo.lineH = parseFloat(cs.lineHeight);
    geo.x0 = from.left;
    geo.y0 = from.top + window.scrollY;
    geo.scale = parseFloat(tcs.fontSize) / parseFloat(cs.fontSize);
    // The header may be hidden (shifted up) right now, so measure from its own top and left, not from the screen.
    geo.tx = to.left - barRect.left + parseFloat(tcs.paddingLeft) - geo.x0;
    geo.ty = to.top - barRect.top + to.height / 2 - geo.y0 - (geo.lineH * geo.scale) / 2;
    geo.full = text.offsetWidth;
  };

  const travel = gsap.parseEase('power2.inOut');
  const shrink = gsap.parseEase('power3.out');
  const state = { p: 0 };
  const render = () => {
    const p = state.p;
    const e = travel(p);
    const scale = 1 + (geo.scale - 1) * shrink(p);
    const lift = Math.sin(Math.PI * p) * -28; // a slight arc, so it flies rather than slides
    gsap.set(fly, { x: geo.x0 + geo.tx * e, y: geo.y0 + geo.ty * e + lift, scale });
    const started = p > 0.002;
    word.style.visibility = started ? 'hidden' : '';
    const land = Math.min(1, Math.max(0, (p - 0.9) / 0.1)); // the last tenth: the header's own text fades in under the copy
    fly.style.opacity = started ? String(1 - land) : '0';
    name.style.maxWidth = `${geo.full * Math.min(1, p / 0.9)}px`;
    name.style.opacity = String(land);
  };

  gsap.to(state, {
    p: 1,
    ease: 'none',
    onUpdate: render,
    scrollTrigger: {
      start: 0,
      end: () => `+=${Math.round(Math.min(window.innerHeight * 0.5, 480))}`,
      scrub: 0.5,
      invalidateOnRefresh: true,
      onRefresh: () => {
        measure();
        render();
      },
    },
  });
  return true;
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
    const title = qs('[data-row-title]', link) ?? link.firstElementChild;
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
    gsap.to(box, { autoAlpha: 0, scale: 0.6, duration: 0.35, ease: 'power3.in', overwrite: 'auto' });
  };
  const enter = (link: HTMLAnchorElement) => {
    leave();
    active = link;
    img.src = link.dataset.peek ?? '';
    x(px);
    y(py);
    const arrow = arrowOf(link);
    if (arrow) gsap.to(arrow, { x: 10, duration: 0.5, ease: 'power3.out', overwrite: true });
    gsap.to(box, { autoAlpha: 1, scale: 1, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
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
    // Pixels per second, so the band keeps its pace whatever its size: a calm drift that scrolling speeds up.
    const pxPerSecond = 60 + boost * 170;
    position = wrapX(position + ((direction * pxPerSecond * (delta / 1000)) / Math.max(1, track.scrollWidth)) * 100);
    apply(position);
    skew(gsap.utils.clamp(-9, 9, direction * boost * -1.6));
  });
}

/* ---------------------------------------------------------------- feature, how I work, reviews, contact */

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

/**
 * How I work (the anatomy section): while the tall wrapper scrolls past its sticky stage, the stack of layers opens up
 * and tilts into an isometric view, then each step in turn comes into focus together with its item in the list. No pin, so the
 * scroll positions of everything below stay as they are.
 */
function anatomy() {
  const wrap = qs('[data-anatomy]');
  const stack = wrap ? qs('[data-anatomy-stack]', wrap) : null;
  if (!wrap || !stack) return;
  const layers = qsa('[data-layer]', wrap);
  const items = qsa('[data-anatomy-item]', wrap);
  const open = gsap.parseEase('power2.inOut');
  const mm = gsap.matchMedia();
  mm.add('(min-width: 768px)', () => {
    let active = -1;
    const focus = (i: number) => {
      if (i === active) return;
      active = i;
      layers.forEach((layer, k) => {
        layer.classList.toggle('is-on', k === i);
        // Layers above the one in focus fade so it can be seen whole.
        layer.classList.toggle('is-past', k < i);
      });
      items.forEach((item, k) => item.classList.toggle('is-on', k === i));
    };
    const apply = (p: number) => {
      const o = open(Math.min(1, p / 0.24));
      // Opened, the stack is about 370px tall whatever the number of layers.
      const gap = 370 / Math.max(1, layers.length - 1) - 8;
      stack.style.setProperty('--gap', `${(8 + o * gap).toFixed(1)}px`);
      stack.style.setProperty('--tilt', (0.6 + o * 0.4).toFixed(3));
      focus(Math.min(layers.length - 1, Math.floor((Math.max(0, p - 0.2) / 0.78) * layers.length)));
    };
    const st = ScrollTrigger.create({ trigger: wrap, start: 'top top', end: 'bottom bottom', onUpdate: (self) => apply(self.progress), onRefresh: (self) => apply(self.progress) });
    apply(st.progress);
    return () => {
      st.kill();
      stack.style.removeProperty('--gap');
      stack.style.removeProperty('--tilt');
      layers.forEach((l) => l.classList.remove('is-on', 'is-past'));
      items.forEach((l) => l.classList.remove('is-on'));
    };
  });
}

/** About: the photo is uncovered, drifts inside its frame while you scroll, and the cobalt panel behind it tilts. */
function about() {
  const photo = qs('[data-about-photo]');
  if (!photo) return;
  const img = qs('img', photo);
  const panel = qs('[data-about-panel]');
  gsap.fromTo(photo, { clipPath: 'inset(100% 0% 0% 0% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', duration: 1.5, ease: EXPO, clearProps: 'clipPath', scrollTrigger: { trigger: photo, start: 'top 85%', once: true } });
  if (img) gsap.fromTo(img, { yPercent: -7, scale: 1.14 }, { yPercent: 7, scale: 1.14, ease: 'none', scrollTrigger: { trigger: photo, start: 'top bottom', end: 'bottom top', scrub: true } });
  if (panel) gsap.fromTo(panel, { rotation: -1 }, { rotation: -6, ease: 'none', scrollTrigger: { trigger: photo, start: 'top bottom', end: 'bottom top', scrub: true } });
}

function reviews(lenis: Lenis | null) {
  const rail = qs<HTMLUListElement>('[data-rail]');
  if (!rail) return;
  const section = rail.closest('section');
  const cards = qsa('.review-card', rail);
  const bar = qs('[data-rail-progress]');
  const prev = qs<HTMLButtonElement>('[data-rail-prev]');
  const next = qs<HTMLButtonElement>('[data-rail-next]');
  const first = () => cards[0]?.offsetLeft ?? 0;
  const maxLeft = () => rail.scrollWidth - rail.clientWidth;
  const offsetOf = (card: HTMLElement) => card.offsetLeft - first();

  // The cards slide in from the right when the rail comes into view.
  gsap.from(cards, { x: 110, opacity: 0, duration: 1.15, ease: EXPO, stagger: 0.08, scrollTrigger: { trigger: rail, start: 'top 88%', once: true } });

  const sync = () => {
    const max = maxLeft();
    const share = max > 0 ? rail.scrollLeft / max : 0;
    if (bar) bar.style.transform = `scaleX(${(0.12 + share * 0.88).toFixed(3)})`;
    if (prev) prev.disabled = rail.scrollLeft < 4;
    if (next) next.disabled = rail.scrollLeft > max - 4;
  };
  rail.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync);
  sync();

  const mm = gsap.matchMedia();

  // Desktop: the page stops on the reviews and vertical scrolling slides the cards sideways until the last one,
  // then the page carries on.
  mm.add('(min-width: 768px)', () => {
    if (!section) return;
    rail.classList.add('is-driven');

    // The pin works only on the way down. Once the visitor has scrolled past the reviews and the page has come to
    // rest, the pin is taken out and the scroll position is corrected by the same amount, so nothing on screen moves;
    // scrolling back up then passes through the reviews like any other section. When the visitor is above the
    // section again (nothing below it on screen, so the pin's space can come back unseen), the cards glide back to
    // the first one and a fresh pin is set up.
    let st: ScrollTrigger | null = null;
    let rewind: gsap.core.Tween | null = null;
    const build = () => {
      const progress = { value: 0 };
      st = gsap.to(progress, {
        value: () => maxLeft(),
        ease: 'none',
        onUpdate: () => {
          rail.scrollLeft = progress.value;
        },
        scrollTrigger: { trigger: section, start: 'top 96px', end: () => `+=${maxLeft()}`, pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true },
      }).scrollTrigger!;
    };
    build();

    const jump = (y: number) => {
      if (lenis) lenis.scrollTo(y, { immediate: true, force: true });
      else window.scrollTo({ top: y, behavior: 'instant' });
    };
    const unpin = () => {
      if (!st || window.scrollY <= st.end + 1) return;
      const y = window.scrollY - (st.end - st.start);
      st.animation?.kill();
      st.kill(true);
      st = null;
      rail.scrollLeft = maxLeft();
      jump(y);
      ScrollTrigger.refresh();
      sync();
    };
    const repin = () => {
      if (st || rewind) return;
      const box = section.getBoundingClientRect();
      if (box.top < 140 || box.bottom < window.innerHeight - 1) return;
      rewind = gsap.to(rail, {
        scrollLeft: 0,
        duration: 0.7,
        ease: 'power3.inOut',
        onComplete: () => {
          rewind = null;
          build();
          ScrollTrigger.refresh();
        },
      });
    };
    // "At rest": no scroll event for a quarter of a second (and Lenis has stopped gliding).
    let rest = 0;
    const onScroll = () => {
      repin();
      window.clearTimeout(rest);
      if (st && window.scrollY > st.end + 1) rest = window.setTimeout(function settle() {
        if (lenis?.isScrolling) rest = window.setTimeout(settle, 120);
        else unpin();
      }, 250);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // Opened (or reloaded) below the reviews: no pin on the way up from the start.
    requestAnimationFrame(() => {
      if (st && window.scrollY > st.end + 1) unpin();
    });

    // The arrows move along the page scroll to the neighbouring card (or slide the rail itself when it is not pinned).
    const goTo = (left: number) => {
      if (!st) {
        rail.scrollTo({ left, behavior: 'smooth' });
        return;
      }
      const share = maxLeft() > 0 ? Math.min(1, Math.max(0, left / maxLeft())) : 0;
      const y = st.start + share * (st.end - st.start);
      if (lenis) lenis.scrollTo(y, { duration: 1.1 });
      else window.scrollTo({ top: y, behavior: 'smooth' });
    };
    const onPrev = () => {
      const target = [...cards].reverse().find((c) => offsetOf(c) < rail.scrollLeft - 60);
      goTo(target ? offsetOf(target) : 0);
    };
    const onNext = () => {
      const target = cards.find((c) => offsetOf(c) > rail.scrollLeft + 60);
      goTo(target ? offsetOf(target) : maxLeft());
    };
    prev?.addEventListener('click', onPrev);
    next?.addEventListener('click', onNext);
    return () => {
      rail.classList.remove('is-driven');
      window.clearTimeout(rest);
      window.removeEventListener('scroll', onScroll);
      rewind?.kill();
      st?.animation?.kill();
      st?.kill(true);
      prev?.removeEventListener('click', onPrev);
      next?.removeEventListener('click', onNext);
    };
  });

  // Phones and narrow windows: swipe the rail; the arrows step through it.
  mm.add('(max-width: 767px)', () => {
    const step = () => (cards[1] ? cards[1].offsetLeft - first() : rail.clientWidth);
    const onPrev = () => rail.scrollBy({ left: -step(), behavior: 'smooth' });
    const onNext = () => rail.scrollBy({ left: step(), behavior: 'smooth' });
    prev?.addEventListener('click', onPrev);
    next?.addEventListener('click', onNext);
    return () => {
      prev?.removeEventListener('click', onPrev);
      next?.removeEventListener('click', onNext);
    };
  });
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

/** Stack wall: the grid lines and the tile under the cursor light up around it. */
function stackGrid() {
  const grid = qs('[data-stack-grid]');
  if (!grid || !fine) return;
  const tiles = qsa('.stack-tile', grid);
  let frame = 0;
  let x = 0;
  let y = 0;
  const paint = () => {
    frame = 0;
    const g = grid.getBoundingClientRect();
    grid.style.setProperty('--gx', `${x - g.left}px`);
    grid.style.setProperty('--gy', `${y - g.top}px`);
    for (const tile of tiles) {
      const r = tile.getBoundingClientRect();
      tile.style.setProperty('--mx', `${x - r.left}px`);
      tile.style.setProperty('--my', `${y - r.top}px`);
    }
  };
  grid.addEventListener('pointermove', (e) => {
    x = e.clientX;
    y = e.clientY;
    if (!frame) frame = requestAnimationFrame(paint);
  });
  grid.addEventListener('pointerleave', () => {
    grid.style.removeProperty('--gx');
    grid.style.removeProperty('--gy');
  });
}

/** Project cards: the panel tilts toward the cursor, the devices float at their own depth, a light follows the pointer. */
function cards() {
  if (!fine) return;
  qsa('[data-card]').forEach((card) => {
    const panel = qs('[data-tilt]', card);
    if (!panel) return;
    gsap.set(panel, { transformPerspective: 1100 });
    const rx = gsap.quickTo(panel, 'rotationX', { duration: 0.7, ease: 'power3' });
    const ry = gsap.quickTo(panel, 'rotationY', { duration: 0.7, ease: 'power3' });
    const layers = qsa('[data-depth]', panel).map((el) => ({
      depth: Number(el.dataset.depth ?? 0),
      x: gsap.quickTo(el, 'x', { duration: 0.8, ease: 'power3' }),
      y: gsap.quickTo(el, 'y', { duration: 0.8, ease: 'power3' }),
    }));
    const reset = () => {
      rx(0);
      ry(0);
      layers.forEach((l) => {
        l.x(0);
        l.y(0);
      });
    };
    card.addEventListener('pointermove', (e) => {
      const r = panel.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      ry(nx * 10);
      rx(-ny * 8);
      layers.forEach((l) => {
        l.x(-nx * l.depth);
        l.y(-ny * l.depth);
      });
      panel.style.setProperty('--mx', `${(nx + 0.5) * 100}%`);
      panel.style.setProperty('--my', `${(ny + 0.5) * 100}%`);
    });
    card.addEventListener('pointerleave', reset);
    // A card that scrolls away from a still pointer never gets `pointerleave`.
    window.addEventListener('scroll', reset, { passive: true });
  });
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
