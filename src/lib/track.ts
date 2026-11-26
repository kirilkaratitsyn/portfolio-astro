// Conversion events. Names only, no personal data: the event goes to Microsoft Clarity and, for a sent form, to Google Ads,
// and only when the visitor has accepted it (window.clarity and window.gtag exist only after consent, see
// components/Consent.astro).
import { ADS_FORM_SENT } from './analytics';

type Tracker = (command: string, ...args: unknown[]) => void;

export function track(name: string) {
  const w = window as unknown as { clarity?: Tracker; gtag?: Tracker };
  try {
    w.clarity?.('event', name);
    if (name === 'form_sent') w.gtag?.('event', 'conversion', { send_to: ADS_FORM_SENT });
  } catch {
    // analytics must never break the page
  }
}

/** One delegated listener for the three ways to reach Kiril that are links or buttons; the form calls track() itself. */
export function trackClicks() {
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    if (target.closest('[data-cal-link]')) return track('book_call');
    if (target.closest('a[href^="mailto:"]')) return track('email_click');
    if (target.closest('a[href$="#contact"], a[href$="#shop-check"]')) track('cta_shop_check');
  });
}
