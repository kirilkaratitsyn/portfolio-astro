---
order: 2
title: Elanora Skin
seoTitle: "Elanora Skin: Shopify Checkout App and A/B Tests"
summary: "An ongoing Shopify partnership since the end of 2025: a checkout app with two cart-validation Functions and five checkout blocks, a gift engine in the cart, an A/B test of a checkout countdown counted per order, and storefront logic for markets in nine currencies."
brandSummary: élanora is a skincare brand from Breda inspired by Korean skincare traditions and Western simplicity, combining pure ingredients with modern formulas for everyday self-care.
brandDescription: élanora frames skincare as both effective care and a daily ritual of calm. The brand mixes Korean skincare inspiration with a cleaner Western aesthetic, positioning its products around glow, routine, and accessible self-care rather than a purely clinical beauty experience.
image: /source/desktop/elanora-skin-desktop.webp
mobileImage: /source/mobile/elanora-skin-mobile.webp
liveUrl: https://elanoraskin.com/
tags:
  - "Ongoing support"
  - "Checkout & Functions"
  - "A/B tests"
  - "Multi-market"
challenge: "The store sells in many markets and two languages and runs a steady stream of offers. Gifts, prices and labels had to stay consistent in the cart and at checkout, every offer had to be testable against a control, and checkout itself had to carry some of the rules."
scope:
  - "Work as an ongoing technical partner on the Shopify storefront, with regular releases."
  - "Build checkout extensions and cart validation Functions."
  - "Build offer logic with free gifts and tiers, with A/B tests whose results are counted per order."
  - "Set up new markets with their own currency and price list."
  - "Extend retention with a back-in-stock flow through the Klaviyo API and a skincare quiz."
solution:
  - "Built a checkout app on API 2026-07 with seven extensions: two cart-validation Functions and five checkout blocks. One Function refuses a basket that holds only free gifts. It recognises the 15 gift products by ID rather than by a price of 0, so draft and replacement orders pass. The other makes a phone number required for delivery to Hong Kong only, and raises the error before the PayPal button opens."
  - "Built the checkout blocks: a shipping protection line the buyer can remove, the struck-through value of a free gift in the buyer’s market currency, a countdown, a Trustpilot slider and a guarantee panel."
  - "Built the gift engine for tiered offers: all gifts of one pass go in one /cart/add.js call, quantity fixes in one /cart/update.js keyed by line, and the .js endpoints replaced redirects that returned 500 KB of HTML per add. /cart.js reads per action fell from 5 to 2–3."
  - "Built the A/B engine on one URL: the half is decided in the head before paint, without a redirect, and orders are tagged. For the checkout countdown, each checkout goes to a half by a hash of its token. When about a quarter of iDEAL and Bancontact orders lost their test tag, each order’s half was recovered from the token and matched the recorded one on 341 of 341 orders. The report counts every order."
  - "Prepared seven new markets (IS, AE, SA, QA, SG, HK, JP), each with its own price list written by a script, and market metafields for the free-shipping and gift thresholds. For AED shoppers, one script swaps the official dirham sign into about 150 money outputs and falls back to “Dhs.” if it fails."
  - "Added a back-in-stock popup through the Klaviyo Client API, a four-question skincare quiz and a drift check that lists every field a theme push would change before it deletes a client edit."
outcome:
  - "The checkout countdown test showed no difference between the halves: orders B to A ×1.011, p 0.77."
  - "A basket of free gifts only cannot reach payment, and a phone number is required only where it matters."
  - "Free gifts show their value in each market’s currency, and the cart makes fewer calls per change."
stack:
  - "Shopify"
  - "Shopify Functions"
  - "Checkout UI extensions"
  - "Liquid"
  - "JavaScript"
  - "A/B testing"
  - "Klaviyo API"
screenshotCaptions:
  - "Ongoing Shopify work focused on offers and conversion."
  - "Gift and tiered-offer logic that adapts by market and language."
  - "Back-in-stock flow through the Klaviyo API."
---
