/**
 * Horizontal swipe for the one-slot carousels (sections/Feature.astro, sections/Anatomy.astro on phones): a finger or a
 * mouse dragged sideways over `el` calls onStep(+1) (next) or onStep(-1) (previous). A mostly vertical move is left to
 * the page, so scrolling still works; the first click after a mouse drag is swallowed so a drag never opens a link.
 * The element needs `touch-action: pan-y` (class .swipe-zone in styles/global.css).
 */
export function swipe(el: HTMLElement, onStep: (dir: 1 | -1) => void) {
  const MIN = 48;
  let id = -1;
  let x0 = 0;
  let y0 = 0;
  let dragged = false;

  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    // The arrows and bars are plain buttons.
    if ((e.target as Element).closest('button')) return;
    id = e.pointerId;
    x0 = e.clientX;
    y0 = e.clientY;
    dragged = false;
  });
  el.addEventListener('pointermove', (e) => {
    if (e.pointerId !== id) return;
    const dx = e.clientX - x0;
    if (!dragged && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(e.clientY - y0)) {
      dragged = true;
      el.classList.add('is-dragging');
      // Keep the mouse drag even when it leaves the element (done here, not on pointerdown, so plain clicks are untouched).
      if (e.pointerType === 'mouse') {
        try {
          el.setPointerCapture(e.pointerId);
        } catch {
          // The pointer is already gone; the drag still ends on pointerup.
        }
      }
    }
  });
  const end = (e: PointerEvent, cancelled: boolean) => {
    if (e.pointerId !== id) return;
    id = -1;
    el.classList.remove('is-dragging');
    if (!dragged || cancelled) return;
    const dx = e.clientX - x0;
    const dy = e.clientY - y0;
    if (Math.abs(dx) >= MIN && Math.abs(dx) > Math.abs(dy) * 1.4) onStep(dx < 0 ? 1 : -1);
  };
  el.addEventListener('pointerup', (e) => end(e, false));
  el.addEventListener('pointercancel', (e) => end(e, true));
  // A drag that ends over a link must not follow it; images and links must not start the browser's own drag.
  el.addEventListener(
    'click',
    (e) => {
      if (!dragged) return;
      dragged = false;
      e.preventDefault();
      e.stopPropagation();
    },
    true,
  );
  el.addEventListener('dragstart', (e) => e.preventDefault());
  el.addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLElement && e.target.closest('input, textarea, select')) return;
    if (e.key === 'ArrowRight') onStep(1);
    else if (e.key === 'ArrowLeft') onStep(-1);
  });
}
