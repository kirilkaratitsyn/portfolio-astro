---
publishedAt: 2026-10-15
title: Moving from WooCommerce to Shopify without losing rankings
date: 15 October 2026
readingTime: 6 min
excerpt: Data, redirect map, theme and a launch checklist from a real migration, so old links and Google rankings keep working.
image: /og/projects/jula-bloom.jpg
topic: migration
tags:
  - Shopify
  - WooCommerce
  - Migration
---

Moving from WooCommerce to Shopify is not hard on the technical side. Where it goes wrong is elsewhere: old links that suddenly lead nowhere, customer accounts, and a design that looks different in the new store than expected. This checklist comes from a real migration, the store of [Jula Bloom](/projects/jula-bloom) in Seattle, which went live on Shopify in September 2026.

## When the move pays off, and when it does not

It pays off when you spend more time on updates, plugin conflicts and hosting than on your products, and when you want what Shopify has built in: checkout, payments, markets and languages. It pays off less when your store relies on very specific WordPress extensions with no equivalent in Shopify. Settle that before the move, plugin by plugin.

## What moves, and in what order

Shopify can take over products, customers, order history, gift cards, blog posts and pages. Products and customers go in by CSV straight in the Shopify admin; order history and content need a migration app or the API. The order matters: products first, then customers, then orders, so every order is linked to the right product and customer. For Jula Bloom we moved products and customers by CSV.

Two things do not simply move along:

- **Passwords.** They are encrypted outside Shopify and cannot be transferred. After the import, customers get an invitation and set up their account again.
- **Plugin features.** Wishlists, reviews and filters run through the theme or apps in Shopify. For Jula Bloom we tidied up along the way: one wishlist app instead of two.

## The redirect map: collect old URLs while the old site is still up

This is the step your rankings depend on. WooCommerce and Shopify build URLs differently: `/product/rose-bouquet/` becomes `/products/rose-bouquet` in Shopify, and categories become `/collections/...`. Every old address that Google knows and other sites link to needs a redirect to its matching new page.

This is how I do it:

1. Collect all old URLs **while the old site is still reachable**: from the sitemap, from Search Console (pages with clicks and impressions) and from a crawl of the site.
2. Match every old URL to its new page in a spreadsheet: products, categories, blog posts, pages.
3. Import the spreadsheet as CSV in Shopify: *Content → Menus → URL redirects → Import*.
4. After go-live, open every important old URL once and check that it lands in the right place.

For Jula Bloom we wrote the redirect map while the WooCommerce site was still running. Old links now lead to their new pages. The rebuild of [Pedchem](/projects/pedchem) shows how to derive redirects from Search Console data, too. Redirects in detail, with Shopify's limits and the checks after launch, are covered in [Moving to Shopify and SEO: Set Up Redirects, Protect Your Rankings](/blog/shopify-migration-weiterleitungen).

## Theme: rebuild instead of a one-to-one copy

A migration is the chance to tidy up the design. For Jula Bloom we built a type system with eight roles (headings, body, lead, tagline and more) and applied it page by page, with button colours that follow the background behind them. New pages stay on brand without anyone fixing them afterwards.

Build the new theme in the background, as an unpublished theme. The old store keeps selling until everything is checked.

## Launch checklist

- Point the domain to Shopify and check SSL.
- Spot-check the redirects, at least the 20 most important old URLs.
- Submit the new sitemap in Google Search Console.
- Gift cards carried over and redeemable?
- Email signup and pop-ups with sensible delays.
- Legal pages, imprint, contact page.
- Meta descriptions for the most important pages.
- Invite customers to their new account.

## After go-live: watch the 404 errors

In the first weeks Search Console shows pages Google can no longer find ("Not found (404)"). Each one is a missing redirect: add it, and the error goes away with the next crawl. Plan a few minutes for this every week for the first four weeks.

## Questions

**How long does the move take?** Depending on the size of the store, 2 to 4 weeks.

**Will I lose my rankings?** Not if every old URL redirects cleanly. A few weeks of fluctuation are normal while Google processes the new pages.

**Can customers keep their old password?** No, they set up their account again after an invitation.

**Does my design stay?** Yes, rebuilt on a Shopify theme and tidied up along the way.

## Planning a move?

I handle the [WooCommerce to Shopify migration](/services/woocommerce-to-shopify) with a redirect map and launch support, at a fixed price after the briefing. Request the free store check or book an intro call.

Not sure yet whether a move is worth it or good maintenance is enough? [WooCommerce Security and Plugin Updates: Maintain or Switch?](/blog/woocommerce-sicherheit-plugin-updates) helps you decide.

Coming from Wix rather than WooCommerce? See [Moving from Wix to Shopify: the Process, the Snags and What Does Not Come Along](/blog/wix-zu-shopify-umzug). Coming from Shopware or Magento? See [From Shopware or Magento to Shopify: What to Settle Before the Move](/blog/shopware-magento-zu-shopify).

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
