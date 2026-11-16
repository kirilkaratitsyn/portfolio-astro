---
order: 9
title: Petaljet
seoTitle: "Petaljet: Shopify Box Builders and Search for Wholesale"
summary: "Ongoing Shopify work for Petaljet, a wholesale flower supplier: the store search now finds what florists type, boxes with a delivery date go into the cart in one step, and only customers with an account see prices."
brandSummary: Petaljet is a wholesale flower supplier for florists and professional designers, shipping farm-direct blooms across the U.S. for weddings, events, and everyday floral programs.
brandDescription: Petaljet is built for B2B flower buying, serving florists, event designers, and other professional buyers with farm-direct wholesale flowers. The brand emphasizes dependable supply, broad category depth, and a workflow that supports recurring orders, large events, and everyday floral operations with less friction.
image: /source/desktop/petaljet-desktop.webp
mobileImage: /source/mobile/petaljet-mobile.webp
liveUrl: https://petaljet.com/
tags:
  - "Product builder"
  - "Site search"
  - "Wholesale"
challenge: "Petaljet sells wholesale flowers to florists and event designers. The store needed ordering tools made for that: boxes composed from the catalogue with a delivery date, a search that finds what buyers actually type, and prices that only buyers with an account can see."
scope:
  - "Build box builders for wholesale buyers."
  - "Fix the site search so partial words and synonyms find products."
  - "Hide prices from logged-out visitors everywhere, search included."
  - "Fix technical SEO from a checklist and speed up key pages."
  - "Stay on as an ongoing support partner."
solution:
  - "Built the Build Your Own Blooms Box: eight positions, a variety and colour chosen per position from a list, a photo collage that follows the choice and a box price that recalculates. The whole box goes into the cart in one /cart/add.js call, each line carrying private bundle properties, and the cart and mini-cart group the lines back into one box."
  - "Put the delivery date inside the builder: the calendar of the delivery-date app is embedded, the box cannot be added without a date, and the date and time go into every line’s properties. The calendar also stays on screen on phones."
  - "Built a carnation box builder for one product: hidden variants in the list and a photo collage with numbered positions."
  - "Fixed the site search. Shopify’s search ignores * inside title: and tag:, so the dropdown found “f269 carna” while the results page showed 0. The results query is now built from the suggest response, with stop words dropped, singular forms, synonyms, product type, and typo correction that leaves short words alone. A Playwright suite runs against the live theme."
  - "Closed a price leak: predictive search and the search JSON view showed prices to logged-out visitors, and both now hide them."
  - "Fixed technical SEO from a checklist: noindex for URLs with parameters, own JSON-LD snippets for home, collection, article and product, robots.txt rules, and meta and H1 templates for collections. For speed, worked on the review widget’s images, a hero preload and inline critical CSS."
outcome:
  - "Searching “christmas” now finds 157 products instead of 0, “premium roses” 269 instead of 5 and “carna” 63 instead of 0 (checked 30–31 October 2026)."
  - "Only logged-in customers see wholesale prices, in search too."
  - "A box goes into the cart in one step and shows up there as one line."
stack:
  - "Shopify"
  - "Turbo theme"
  - "Liquid"
  - "JavaScript"
  - "Product builder"
  - "Playwright"
screenshotCaptions:
  - "The storefront on the Turbo theme."
  - "A box builder that lets florists compose an order from the catalogue."
  - "Site search on the live store."
industry: "Wholesale flowers"
period: "Ongoing support"
highlights:
  - value: "157"
    label: "results for “christmas”, was 0"
  - value: "269"
    label: "results for “premium roses”, was 5"
  - value: "1"
    label: "step until the box is in the cart"
needs:
  - need: "Boxes that florists build from the catalogue with a delivery date."
    answer: "Box builders with a delivery date: the box goes into the cart in one step and shows up there as one line."
  - need: "A search that finds what buyers actually type."
    answer: "The search finds partial words and synonyms: “carna” 63 results instead of 0, “christmas” 157 instead of 0."
  - need: "Prices only for buyers with an account."
    answer: "Logged-out visitors see no prices, not even through search."
---
