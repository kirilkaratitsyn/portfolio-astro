---
order: 6
title: "Pedchem"
seoTitle: "Pedchem: Shopify Theme Replacement, Mobile Speed 57 to 82"
summary: "A theme replacement and clean-up for Pedchem, the pest control shop of Phoenix Environmental Design: from Flex to the Enterprise theme, live mobile PageSpeed up from 57 to 82, typed metafields behind the spec charts of 323 products, and redirects based on Search Console."
brandSummary: "Pedchem is the online shop of Phoenix Environmental Design Inc. in West Richland, Washington, selling pesticides, herbicides and other pest control products."
brandDescription: "Pedchem stocks the pest control products the pros use, from granular herbicides to aerosol pesticides and catch-and-release traps, from trusted brands, across lawn care, pest control and government sales."
image: /source/desktop/pedchem-desktop.webp
mobileImage: /source/mobile/pedchem-mobile.webp
liveUrl: https://www.pedchem.com/
tags:
  - "Theme replacement"
  - "Metafields"
  - "Performance"
challenge: "The store ran on the Flex theme. The client's request for quotation, in five parts, asked for a new theme, a clearer home page and navigation, product data in metafields, the issues in Search Console fixed and faster pages, with the live store untouched until they approved the switch in writing."
scope:
  - "Build the Enterprise theme next to the live one, unpublished."
  - "Rework the home page and navigation."
  - "Give the product specification data of 323 products proper metafield types."
  - "Fix the issues Search Console reports and set up redirects from its data."
  - "Publish only after the client's written approval, with the speed targets agreed up front."
solution:
  - "Rebuilt the store on the Enterprise theme with sections of its own, such as the spec chart and product Q&A without an app script, and no new apps."
  - "Defined 10 metafield types over 1,404 spec values that were already stored on 349 products; the spec chart and document links on all 323 product pages rendered the same as before."
  - "Found a leftover snippet of an uninstalled app that loaded a second copy of the same GTM container, blocked it (178 to 288 ms less blocking time in lab runs), and moved the GA4 page_view event into a custom pixel."
  - "Set up 33 redirects, 24 of them from the URLs Search Console reported, and put noindex on empty collection pages that had been counted as 34 soft 404s."
  - "Built and checked everything on a preview theme while the old theme kept selling, then published by runbook after the client's written approval, with the old theme kept unpublished as a way back."
outcome:
  - "The new theme is live on pedchem.com."
  - "Live mobile PageSpeed on the home page went from 57 to 82 (median of three runs), LCP from 12.0 to 4.2 seconds, accessibility from 78 to 100."
  - "Field data at day 28: LCP at the 75th percentile fell from 3.0 to 1.5 seconds, and Search Console's mobile Core Web Vitals report went from 460 URLs in 'needs improvement' to 436 good."
  - "All 33 redirects answer with 301 on day 28."
stack:
  - "Shopify"
  - "Enterprise theme"
  - "Liquid"
  - "Metafields"
  - "Search Console"
  - "GA4"
screenshotCaptions:
  - "The home page on the Enterprise theme."
  - "Spec charts on product pages, from metafields."
  - "Built on a preview theme, published after approval."
---
