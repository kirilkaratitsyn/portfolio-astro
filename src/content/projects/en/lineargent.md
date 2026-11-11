---
order: 7
title: "Lineargent"
seoTitle: "Lineargent: Shopify GTM Load 15.4 s to 2.9 s"
summary: "Ongoing Shopify work for Lineargent, a silver jewellery brand from Vic near Barcelona: Searchspring collection and search grids, Beacon 2.0 tracking, a Google tag loader that came 15 seconds late and now loads at 2.9 s, and 1,773 internal links rewritten across 114 collections."
brandSummary: "Lineargent is a silver jewellery brand from Vic, near Barcelona: jewellery designed in Barcelona and sold since 1992."
brandDescription: "Lineargent's collections cover earrings, rings, necklaces and bracelets in silver, from wedding bands to pieces set with zirconia, with free 24–48 hour shipping on orders over €50."
image: /source/desktop/lineargent-desktop.webp
mobileImage: /source/mobile/lineargent-mobile.webp
liveUrl: https://lineargent.com/
tags:
  - "Ongoing support"
  - "Search & merchandising"
  - "Prestige theme"
challenge: "Lineargent runs a customised Prestige theme, a catalogue of hundreds of pieces and a third-party tool for search and merchandising. The store had to keep selling while its search, collection pages, tracking and tag loading were reworked."
scope:
  - "Run collections and search on the Searchspring API and keep that integration working."
  - "Move Searchspring tracking to Beacon 2.0."
  - "Find out why Google tags loaded late and fix it."
  - "Fix the internal links in the collections’ SEO texts."
solution:
  - "Built collection pages and search on the Searchspring API: the grid, filters, sorting and pagination render from its data, with a filter by stone colour, and the collection name goes into the query together with its id so Athos campaigns and pinned products apply."
  - "Moved Searchspring tracking to Beacon 2.0: one shared tracker, identity cookies set from the first page, and render, impression, click and add-to-cart events from search, collections, autocomplete (once per finished query) and the related and cross-sell blocks. The old Beacon 1.0 code was removed. Recommendations run on Athos instead of LimeSpot."
  - "Traced the Google tag and GTM, which loaded about 15 seconds late, to the theme’s speed optimiser: it rewrote Shopify’s load_feature into a deferred script, so Stape inserted GTM only after the first scroll or 6 seconds after load. The fix puts the Cookiebot script and the Google tag first in the head. Google Ads had flagged the tag as not placed correctly on 243 URLs."
  - "Rewrote 1,773 internal links in the SEO texts of 114 collections and their EN/FR translations through the Admin API, with a dry run, a backup before every write and a rollback that does not overwrite parallel edits."
  - "Built the collection pages around the data: breadcrumbs from a collection metafield, a tab row from child collections with scroll arrows that sticks under the header, and “last units” and “sells out fast” badges from product data."
  - "Built Black Friday prices: while a flag is on, a product with a discount percentage shows the reduced price, the crossed-out price and a badge everywhere a price appears, from the product page to the cart."
outcome:
  - "The home page’s GTM loader came at 2.9 s on the live store after the deploy, down from 15.4 s; Cookiebot loads once, in the head."
  - "The repeated dry run showed 0 internal links left to fix in the 114 collections."
  - "Rated 5.0 by the client on Upwork during the first contract."
  - "The work continues under a second contract."
stack:
  - "Shopify"
  - "Prestige theme"
  - "Liquid"
  - "JavaScript"
  - "Searchspring (Athos Commerce)"
  - "Beacon 2.0"
  - "Admin API"
screenshotCaptions:
  - "The home page on the customised Prestige theme."
  - "A product page with related products."
  - "Collection breadcrumbs and Searchspring search."
review:
  quote: "Kiril is a good professional, he works efficiently and solves the problems delivering accurate job on time and welldone."
  rating: 5
---
