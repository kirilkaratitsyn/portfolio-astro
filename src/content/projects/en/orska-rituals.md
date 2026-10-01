---
order: 1
title: Orska Rituals
summary: "A Shopify store for a professional skincare brand, built from an HTML prototype: wholesale pricing for approved estheticians, a members-only Pro Vault, Quick Order, and a first-order limit on the Discovery Kit that the server enforces."
brandSummary: Orska Rituals is a professional skincare brand for estheticians and spas, with customizable protocols and treatment products, a retail line and a wholesale partner program.
brandDescription: Orska Rituals pairs intelligent skin correction with customizable protocols for professional estheticians. The brand serves treatment rooms as well as hotels and resorts, sells to professionals through a partner program and keeps retail access open for everyone else.
image: /source/desktop/orska-rituals-desktop.webp
mobileImage: /source/mobile/orska-rituals-mobile.webp
liveUrl: https://orskarituals.com/
tags:
  - B2B
  - Shopify Functions
  - Custom theme
challenge: "The brand had an HTML prototype and needed it to run as a real Shopify store for two audiences: retail visitors, and approved professionals who see different prices, tools and content. Wholesale rules, the Pro Vault and the Discovery Kit limit had to be enforced by the platform, not just hidden in the interface."
scope:
  - "Turn the HTML prototype into a Shopify theme: home, shop, product pages, journal, FAQ, cart and the Pro Vault."
  - "Set up B2B: region-based wholesale pricing, Quick Order for professionals, and a company that is created automatically when a professional is approved."
  - Enforce purchase rules on the server, including the first-order limit on the Discovery Kit and the minimum order rules for wholesale.
solution:
  - "Built the theme from the prototype with metafield-driven product pages: the Key Ingredients, How To Use and Curated For accordions read per-product data, next to a gallery with a lightbox and a slot for video."
  - Showed retail prices and a partner login prompt to logged-out visitors, hid professional-only items such as chemical peel prices, and showed Quick Order only to signed-in professionals.
  - Wrote a small Cloudflare Worker that creates the Shopify company when a professional is approved, and deployed Shopify Functions for cart validation.
  - "Limited the Discovery Kit in three layers: the theme, a server-side check and an access rule, so nobody outside the program can buy it."
outcome:
  - Retail visitors and approved professionals get different prices and tools on the same storefront.
  - A professional receives a wholesale account right after approval, with no manual setup.
  - The Discovery Kit limit holds even when someone bypasses the interface.
  - The team edits product details in Shopify instead of in code.
stack:
  - Shopify
  - Liquid
  - Shopify B2B
  - Shopify Functions
  - Cloudflare Workers
  - Metafields
screenshotCaptions:
  - Home page rebuilt from the HTML prototype.
  - Wholesale pricing and Quick Order shown only to approved professionals.
  - Product details and the Pro Vault driven by per-product data.
---
