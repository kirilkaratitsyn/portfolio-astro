---
order: 15
title: "White Canvas Earth"
seoTitle: "White Canvas Earth: Shopify B2B Wholesale Section and Shipping"
summary: "Shopify work for an artisan clothing brand: a native B2B wholesale section where an application becomes a company for approval, a B2B-only catalogue with working filters, a minimum-order panel and per-piece wholesale shipping on a Basic plan."
brandSummary: "White Canvas Earth is an artisan women’s clothing brand based in Indore, India, selling through its own Shopify store."
brandDescription: "White Canvas Earth is a women’s clothing brand. The store runs on the Atelier theme, with a retail storefront and, since 2026, a wholesale section for boutiques, multi-brand stores and distributors."
image: "/source/desktop/white-canvas-earth-desktop.webp"
mobileImage: "/source/mobile/white-canvas-earth-mobile.webp"
liveUrl: "https://whitecanvasearth.com/"
tags:
  - "B2B"
  - "Wholesale"
  - "Shipping"
  - "Redesign pages"
challenge: "The brand wanted to sell wholesale from the same store, without a wholesale app: buyers apply, the team approves them by hand, and approved buyers see wholesale prices, a minimum order and a delivery cost counted per piece. The store is on a Basic plan, where the usual tools for custom shipping are locked."
scope:
  - "Redesign the About, Craft, Contact and Wholesale pages of the Atelier theme."
  - "Fix the technical SEO of the store."
  - "Build a native B2B wholesale section: application, approval, catalogue and cart rules."
  - "Set up wholesale delivery that is counted per piece on a Basic plan."
solution:
  - "Built the wholesale application as a styled form in the theme that drives a hidden Shopify Forms embed, so each application lands in Customers → Companies for approval or denial instead of arriving as an email. An approved buyer sees a compact company plate instead of the form."
  - "Fixed the bugs that silently lost applications: the Forms country selector was a custom control and never got set, so every application was saved with the default country and UK, AU and CA postcodes were refused with a 422. Hidden required billing fields stopped the submit button from doing anything, and the submit hung on “Submitting” in a background tab because requestAnimationFrame does not run there. Shipping and billing get separate sets of fields, so country, phone, name and province are now carried into both."
  - "Put the wholesale catalogue on a collection template, visible only to B2B customers. Storefront filters work only on collection and search templates, so a collection picked in a page setting would not filter."
  - "Built the minimum-order panel in Liquid: progress to the threshold set in the theme settings, shown in the cart and in a banner, with the checkout button off until the cart total reaches it. The cart section is re-rendered by the server on every quantity change, and B2B buyers always get a cart page instead of a drawer."
  - "Moved wholesale prices out of the theme: the price calculation left the price snippet so prices come from the B2B catalogue, product recommendations run in the B2B context and wholesale buyers get their own announcement bar. Wholesale stays in USD, so the redirect that sends Turkish visitors to the local store is switched off for B2B customers."
  - "Delivered per-piece wholesale shipping on a Basic plan. Shopify Functions for delivery need Plus, and per-piece rate apps depend on carrier-calculated shipping, which Basic does not have. So I set a real weight on all 250 variants of the wholesale collection (25 products, all at 0 kg before) through the Admin API and built three weight tiers (up to 10 kg, 10.01–15 kg, from 15.01 kg) on a separate Wholesale delivery profile."
  - "Reworked the redesign pages and the catalogue: About and Craft, Contact, Wholesale, a related-products carousel, size sorting in the picker and quick add, filter mapping, and the upsell block that picks products by name and collection."
  - "Fixed technical SEO: canonical URLs by request path that keep the language, noindex on paginated collection pages, meta tags for variant pages and a rule in robots.txt against .atom feeds. For speed, deferred the styles from the Shopify header and fixed the slideshow and background video; no measurements were taken."
outcome:
  - "A wholesale application now becomes a company waiting for approval in Shopify, with the right country and address."
  - "Applications from the UK, Australia and Canada are no longer refused."
  - "The checkout stays closed below the minimum order, and the cart shows how far the buyer is."
  - "Wholesale delivery is counted by weight tiers on a Basic plan, with no extra shipping app."
stack:
  - "Shopify"
  - "Atelier theme"
  - "Liquid"
  - "JavaScript"
  - "Shopify B2B"
  - "Shopify Forms"
  - "Admin API"
---
