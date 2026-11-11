---
order: 1
title: Orska Rituals
seoTitle: "Orska Rituals: Shopify B2B Store, Workers and Dropship"
summary: "A Shopify store for a professional skincare brand, built from the client’s HTML prototype: access tiers for approved estheticians, a members-only Pro Vault, Quick Order, a Cloudflare Worker that turns an approved professional into a B2B company, cart validation Functions and a dropship backend."
brandSummary: Orska Rituals is a professional skincare brand for estheticians and spas, with customizable protocols and treatment products, a retail line and a wholesale partner program.
brandDescription: Orska Rituals pairs intelligent skin correction with customizable protocols for professional estheticians. The brand serves treatment rooms as well as hotels and resorts, sells to professionals through a partner program and keeps retail access open for everyone else.
image: /source/desktop/orska-rituals-desktop.webp
mobileImage: /source/mobile/orska-rituals-mobile.webp
liveUrl: https://orskarituals.com/
tags:
  - "B2B"
  - "Shopify Functions"
  - "Cloudflare Workers"
challenge: "The brand had an HTML prototype and needed it to run as a real Shopify store for several audiences: guests, approved professionals and partners on higher tiers, each with different prices, tools and content. The rules for each tier had to hold in the cart and at checkout, not only in the interface."
scope:
  - "Turn the HTML prototype into a Shopify theme: home, shop, product pages, journal, FAQ, Quick Order and the Pro Vault."
  - "Gate prices, tools and content by access tier."
  - "Create a B2B company automatically when a professional is approved."
  - "Enforce purchase rules in the cart, including the Discovery Kit limit and the wholesale minimum order."
  - "Build the backend for dropship orders that partners place for their own clients."
solution:
  - "Built the theme from the prototype: 71 sections, 167 blocks and 14 templates. The product pages read the Key Ingredients, How To Use and Curated For accordions from metafields, with a gallery overlay that leaves Horizon’s core files alone, breadcrumbs, and Organization markup."
  - "Gave every customer an access tier from tags (guest, approved, ordered, committed) in one snippet. The Pro Vault, Quick Order and the buy buttons read it, and professional-only items stay hidden from guests."
  - "Built the Pro Vault on metaobjects: playlists, a media library with filters and pagination, and a training library."
  - "Wrote a Cloudflare Worker that turns an approved professional into a native B2B company: it verifies the webhook, reads the customer through the Admin API, creates the company and its contact, and assigns the Location admin role and the main contact. The catch was that Shopify attaches the market and catalogue to a location only once a contact has an ordering role. Reading a live order also showed why labels failed to print, and the fix puts the business name where the label expects it."
  - "Wrote two cart-validation Functions: a wholesale minimum order, and a Discovery Kit limit of one per account and two per order. Kept the theme in step with the client’s Locksmith lock, Helium tags and order-limit app, so the product page and checkout never disagree about the same customer."
  - "Built the dropship backend as a second Worker behind an App Proxy: a signed request, identity only from the logged-in customer, a client book in a customer metafield, and an order created as a draft to the partner’s client with prices and shipping from draftOrderCalculate, so the invoice matches the panel. Currency is fixed to USD."
  - "Switched off “ship to any address” on the B2B locations of partners below the committed tier, with the old values saved for rollback."
outcome:
  - "Guests, approved professionals and higher tiers get different prices and tools on one storefront."
  - "A newly approved professional becomes a B2B company without manual setup: the location the worker creates gets 2 markets, 1 catalogue and ordering approved."
  - "The Discovery Kit limit is enforced by a Function in the cart, and the theme agrees with it."
  - "Dropship orders carry the dropship tag on real orders since 26 October 2026."
stack:
  - "Shopify"
  - "Horizon theme"
  - "Liquid"
  - "Shopify B2B"
  - "Shopify Functions"
  - "Cloudflare Workers"
  - "App Proxy"
  - "Metaobjects"
screenshotCaptions:
  - "Home page rebuilt from the HTML prototype."
  - "Prices and Quick Order depend on the access tier."
  - "Product details and the Pro Vault driven by per-product data."
review:
  quote: "Kiril did an amazing job building our custom shopify. We used Claude to design the site and Kiril implemented the design perfectly. We did have a lot of complexities. We are a B2B skincare product website with some custom javascript and also have workers running off site on Cloudflare that help our shopify store run the way we want. I will continue to work with him. Great job!"
  rating: 5
---
