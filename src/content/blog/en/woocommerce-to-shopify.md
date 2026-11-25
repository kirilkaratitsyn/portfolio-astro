---
publishedAt: 2026-10-15
title: Moving from WooCommerce to Shopify without losing rankings
date: 15 October 2026
readingTime: 4 min
excerpt: "Moving from WooCommerce to Shopify: data, redirect map, theme and a launch checklist from a real migration, so your rankings keep working."
image: /og/projects/jula-bloom.jpg
updatedAt: 2026-11-01
topic: migration
tags:
  - Shopify
  - WooCommerce
  - Migration
---

Moving from WooCommerce to Shopify rarely fails on the technical side. It fails on old links that lead nowhere, on customer accounts and on the design. This checklist comes from the migration of [Jula Bloom](/projects/jula-bloom) in Seattle, live on Shopify since September 2026.

## When the move pays off, and when it does not

It pays off when updates, plugin conflicts and hosting cost you more time than your products. And when you want checkout, payments, markets and languages built in. It pays off less when your store relies on specific WordPress extensions with no equivalent in Shopify. Settle that before the move, plugin by plugin.

## What moves, and in what order

Shopify takes over products, customers, order history, gift cards, blog posts and pages.

- **Products and customers:** by CSV in the Shopify admin. That is how we did it for Jula Bloom.
- **Order history and content:** with a migration app or the API.

The order: products first, then customers, then orders. That links every order to the right product and customer. Backup, overwriting and encoding in the CSV import are covered in [Importing products into Shopify with a CSV file](/blog/shopify-produkte-importieren-csv).

Two things do not move along:

- **Passwords.** They cannot be transferred. After the import, customers get an invitation and set up their account again.
- **Plugin features.** Wishlists, reviews and filters run through the theme or apps in Shopify. For Jula Bloom that meant one wishlist app instead of two.

## The redirect map: collect old URLs while the old site is still up

Your rankings depend on this step. WooCommerce and Shopify build URLs differently: `/product/rose-bouquet/` becomes `/products/rose-bouquet`, and categories become `/collections/...`. Every old address Google knows needs a redirect to its matching new page.

1. Collect all old URLs **while the old site is still reachable**: from the sitemap, from Search Console (pages with clicks and impressions) and from a crawl.
2. Match every old URL to its new page in a spreadsheet: products, categories, blog posts, pages.
3. Import the spreadsheet as CSV in Shopify: *Content → Menus → URL redirects → Import*.
4. After go-live, open every important old URL and check that it lands in the right place.

That is how we did it for Jula Bloom. Old links now lead to their new pages. The rebuild of [Pedchem](/projects/pedchem) shows how to derive redirects from Search Console data. Shopify's limits and the checks after launch are covered in [Moving to Shopify and SEO: Set Up Redirects](/blog/shopify-migration-weiterleitungen).

## Theme: rebuild instead of a one-to-one copy

Use the move to tidy up the design. For Jula Bloom we built a type system with eight roles (headings, body, lead, tagline and more), with button colours that follow the background behind them. New pages stay on brand with no rework.

Build the new theme as an unpublished theme. The old store keeps selling until everything is checked.

## Launch checklist

- Point the domain to Shopify and check SSL ([Shopify DNS settings](/blog/shopify-domain-verbinden)).
- Test the redirects, at least the 20 most important old URLs.
- Submit the new sitemap in Google Search Console.
- Gift cards carried over and redeemable?
- Email signup and pop-ups with sensible delays.
- Legal pages, imprint, contact page.
- Meta descriptions for the most important pages.
- Invite customers to their new account.

## After go-live: watch the 404 errors

In the first weeks Search Console shows pages Google can no longer find ("Not found (404)"). Each one is a missing redirect. Add it, and the error goes away with the next crawl. Plan a few minutes for this every week for the first four weeks.

## Questions

**How long does the move take?** Depending on the size of the store, 2 to 4 weeks.

**Will I lose my rankings?** Not if every old URL redirects cleanly. A few weeks of fluctuation are normal.

**Can customers keep their old password?** No, they set up their account again after an invitation.

**Does my design stay?** Yes, rebuilt on a Shopify theme and tidied up along the way.

## Planning a move?

You can [have your WooCommerce store migrated to Shopify](/services/woocommerce-to-shopify): with a redirect map and launch support, at a fixed price after the briefing. Send me your store's address for the [free store check](#contact) or book an intro call.

Read next:

- Maintain or switch: [WooCommerce Security and Plugin Updates](/blog/woocommerce-sicherheit-plugin-updates)
- From Wix: [Moving from Wix to Shopify](/blog/wix-zu-shopify-umzug)
- From Shopware or Magento: [From Shopware or Magento to Shopify](/blog/shopware-magento-zu-shopify)
- Payments: [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
