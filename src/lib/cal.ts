/** Cal.com links. The booking popup is set up in layouts/BaseLayout.astro. */
export const BOOKING_LINK = 'kiril-karatitsyn/free-consultation-call';

/**
 * The free store check: a Cal.com routing form (a form, no time slot), "forms/<id>". Until it is set, the store check
 * shows only on Vercel preview builds, so production never gets a button that opens nothing.
 */
export const SHOP_CHECK_LINK: string | null = null;
export const showShopCheck = Boolean(SHOP_CHECK_LINK) || process.env.VERCEL_ENV === 'preview' || process.env.SHOW_SHOP_CHECK === '1';
