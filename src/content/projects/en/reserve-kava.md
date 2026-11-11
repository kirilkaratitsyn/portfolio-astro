---
order: 10
title: Reserve Kava
seoTitle: "Reserve Kava: Shopify Product Page, Subscribe-First"
summary: "A product page for an instant-kava brand, rebuilt to the client’s design handoff and put on the live theme as a second template without touching the existing pages: one purchase selector for a one-time purchase and a monthly subscription, and a home page of its own sections."
brandSummary: "Reserve Kava sells 100% noble instant kava from Vanuatu: a jar you mix with water, with no kneading, straining or brewing, positioned as an evening ritual for relaxation."
brandDescription: The brand sells two instant kava jars, Borogu and Kelai. Its site leans on a monospaced, minimal look and plain-spoken copy, with the product itself, not decoration, as the focus.
image: /source/desktop/reserve-kava-desktop.webp
mobileImage: /source/mobile/reserve-kava-mobile.webp
liveUrl: https://reservekava.com/
tags:
  - "Product pages"
  - "Subscriptions"
  - "Safe deploy"
challenge: "The Borogu product page had to be rebuilt to the client’s design handoff while the store kept selling. The live theme was not in version control and the rebuilt page existed only on a preview theme, so it had to go live without changing the pages that already sold."
scope:
  - "Rebuild the Borogu product page to the design handoff: gallery, buy column and content sections."
  - "Put one purchase selector in the buy column for a one-time purchase and a monthly subscription."
  - "Take the page live as a second product template, leaving the existing pages as they were."
solution:
  - "Built the page from its own sections: a gallery with a square photo and a thumbnail row that moves in one sticky block on desktop, a product marquee that stands still under reduced motion, and reasons, comparison, timeline and call-to-action sections."
  - "Built the purchase selector as one block: one-time purchase and a monthly subscription. Price per jar and the saving are calculated from the live price, so a price change needs no developer."
  - "Shipped the page to the live theme as a second template: 15 new files and no edits to existing ones. The copied sections got their own root classes, because Shopify bundles the CSS of all sections into one file and the copy’s styles would otherwise leak into the original page."
  - "Checked after the deploy: the original Borogu page, Kelai and the home page had the same HTML length and the same section list, first-screen screenshots matched pixel for pixel, and /cart.js showed the subscription plan next to a one-time purchase without a plan."
  - "Built the home page from its own sections: hero, education, origin, proof, story, products, bundle, reviews, FAQ and email."
outcome:
  - "The subscribe-first Borogu page has been the live product page since 5 November 2026; the old template is kept for rollback."
  - "Purchase options, price per jar and saving come from one block and follow the live price."
  - "The existing Borogu, Kelai and home pages were unchanged by the deploy."
stack:
  - "Shopify"
  - "Liquid"
  - "Dawn theme"
  - "Product pages"
  - "Subscriptions"
screenshotCaptions:
  - "Home page with the two jars up front."
  - "Product page rebuilt to the design handoff."
  - "The buy column of the product page."
---
