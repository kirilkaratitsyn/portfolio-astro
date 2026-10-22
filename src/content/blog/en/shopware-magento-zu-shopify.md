---
publishedAt: 2026-10-22
title: "From Shopware or Magento to Shopify: What to Settle Before the Move"
date: October 22, 2026
readingTime: 8 min
excerpt: Which data you can carry over from Shopware or Magento to Shopify, what gets rebuilt, how to handle customer accounts and old addresses, and in what order the move carries the least risk.
image: /og/projects/jula-bloom.jpg
topic: migration
tags:
  - Shopify
  - Shopware
  - Magento
  - Migration
---

A Shopware or Magento store cannot be moved to Shopify as a whole. What moves is data, mainly products, customers and orders. Design, extensions and special functions get rebuilt in Shopify. This article shows what you can carry over, where such a move tends to get stuck, and in what order to proceed.

A word up front: a Shopware or Magento store is not among the projects I have published. My documented platform move is [Jula Bloom](/projects/jula-bloom), a move from WooCommerce to Shopify. The statements about Shopware, Magento and Shopify below rest on the providers' help and documentation pages, as of October 2026. Check the details in your own system, because versions and interfaces differ.

## Is the move worth it at all?

A move costs time and carries SEO risk. These questions help with the decision:

- **What is missing in your current system today?** Name three things you cannot do, or only awkwardly. If the list stays empty, there is little reason to move.
- **Who runs and maintains your store today?** If updates, hosting and extensions sit with you or an agency, that belongs in the calculation.
- **How much revenue depends on your Google rankings?** The more, the more carefully the move has to be planned.

Shopware 5 adds one more point. According to Shopware's migration page, Shopware 5 was supported until the end of July 2024, in its final phase with security updates only. The same vendor writes that moving from Shopware 5 to Shopware 6 is not a simple update done in a few clicks. So a rebuild is coming either way, and the question is Shopware 6 or another system. That is a real decision to make with numbers and requirements, not out of habit.

## What can be carried over, what cannot?

According to Shopify's help on migrating, this data can be brought into Shopify:

- **Products**
- **Customers**
- **Past orders** (already fulfilled ones)
- **Gift cards and store credit**
- **Blog posts and pages**

The order Shopify recommends: products first, then customers, then orders. Orders and gift cards may need an app or the API. For a larger catalog, Shopify gives as a guideline that from about 250 products a CSV file or an app is the likely route.

What does not move: the design (you pick a theme in Shopify and adapt it) and the extensions from the old system. The functions you actually need, you rebuild in Shopify through settings or apps from the Shopify App Store.

## Step 1: Take stock while the old store is still running

Make a list before you change anything:

- All products, categories, pages and blog posts with their **address**. The sitemap of the old store is the quickest source.
- Which pages bring **visitors from Google** (Search Console, Performance report) and which pages other sites link to.
- Which **product attributes and custom fields** you use. Shopify's Magento guide says Magento attributes have to become Shopify metafields and that the mapping should be settled before the migration.
- Which **extensions and special functions** you really need. The guide advises not to replicate Magento's complexity if it is not driving revenue.
- What should stay behind. According to the Magento guide, migrating dead content only wastes time and clutters the new store.

Keep this list. Later it is the basis for the redirects.

## Step 2: Export the data from the old system

**Shopware 6.** The export sits in the Import/Export area of the settings. According to the official documentation, the module works with CSV files in UTF-8, a semicolon as the field separator and quotation marks as the text delimiter. A **profile** defines which column ends up in which data field. Default profiles exist for products, customers, categories and media, among others. The documentation names three snags itself:

- Prices need a period as the decimal separator; a comma leads to a faulty import.
- Programs such as Excel may not produce a UTF-8 compliant file.
- **Orders** can only be exported with a profile you create yourself. Mandatory fields are id, salesChannelId, orderDateTime and stateId.

**Shopware 5.** The export works differently than in Shopware 6. Look at the documentation of your version, or ask whether a migration app from the Shopify App Store supports your system. Either way, do a test export first.

**Magento.** The path depends on version and setup. What matters is that you map the attributes beforehand (see step 1) and export only what you really need.

Then comes the work that is usually underestimated: the columns of the old system do not match Shopify's template, so the data has to be mapped. From the Shopify help on CSV import:

- **Handle** (the part of the address after `/products/`): letters, numbers and dashes only.
- **Images:** A CSV file contains only text. Shopify reads images from publicly accessible addresses (URLs). Check whether your export contains image addresses.
- **Publishing:** When importing, Shopify advises turning off "publish to all sales channels" so that nothing half-finished becomes visible.

Import **three to five test products** first and check price, weight, stock, description and images before the rest follows.

## Step 3: Customers and orders

- **Customer accounts:** Shopify's Magento guide says passwords cannot be migrated in a usable format. So plan activation or password-reset emails after launch. Plan the same for Shopware: expect that customers will have to activate their account again, and announce it.
- **Orders:** According to Shopify only already fulfilled orders come along, and an app or the API may be needed for that. Ask yourself whether you really need the old order history in the new system. Often an export kept separately as an archive for bookkeeping and queries is enough.

A legal note: you may only carry over customer data for the purpose it was collected for. That applies, for example, to newsletter consents. Clear this with your data protection adviser before loading addresses into a new system. This is not legal advice.

## Step 4: Pages, content blocks, blog

Shopify counts pages and blog posts among the data that can be brought over. Content blocks and widgets from the old system have no direct counterpart, though. The Magento guide says CMS blocks and widgets should be rebuilt natively in Shopify.

Two things save trouble later:

- **Leave the texts of your strongest pages as unchanged as possible.** Rankings depend on content, not only on the address.
- **Check the legal texts** (legal notice, privacy policy, terms, right of withdrawal), because the details on payment methods, shipping and services in use change with the new system.

## Step 5: Old addresses and redirects

This is where a move most often loses something. Shopify's Magento guide is blunt: every indexed address that changes needs a 301 redirect to its Shopify equivalent. A redirect to a 404 page is worse than no redirect at all. The redirects should be ready before the domain points to Shopify.

The Shopify help backs this up: redirects can be set up in advance, also by CSV import (*Content → Menus → URL redirects*), and they should exist for all important pages. Do not rely on assumed address patterns of your old system; read the real addresses from the sitemap and Search Console. How to build the mapping and which limits Shopify sets is covered in detail in [Moving to Shopify and SEO: Set Up Redirects, Protect Your Rankings](/blog/shopify-migration-weiterleitungen).

## Step 6: Test, then switch

Before the domain is switched, the Shopify store should be complete:

- **Payments, shipping, taxes:** Test orders with a successful and a failed payment, refund, cancellation and shipping. Check the automatic emails.
- **Products and pages:** Spot-check against the old store (price, variant, image, description).
- **Redirects:** Imported, and a selection of the most important old addresses checked in the browser.
- **Password protection:** While the store runs in private mode, search engines cannot reach it. Turn it off at launch.

The Magento guide also advises lowering the DNS TTL 24 to 48 hours before the switch, and it calls the first 14 days after launch critical. After the launch, submit the new sitemap (`/sitemap.xml`) in Search Console, open the most important old addresses and look at the Pages report regularly during the first weeks. Every address under "Not found (404)" is a missing redirect. If the store does not show up on Google after launch, [Shopify Store Not Found on Google: 7 Causes and What You Can Check](/blog/shopify-shop-bei-google-nicht-gefunden) helps.

## Frequently asked questions

**Can I move my Shopware or Magento store automatically?** No, not as a whole. Products, customers and fulfilled orders can be carried over; design and extensions are rebuilt in Shopify.

**Do my customers' passwords come along?** For Magento, Shopify's guide says: not in a usable form. For both systems, plan an activation or reset after launch.

**Will I lose my Google rankings?** Not necessarily. According to Google, permanent redirects do not cost PageRank. Losses come from missing or wrong redirects, changed content and technical errors at launch. Nobody can guarantee that everything stays unchanged.

**With Shopware 5, should I rather switch to Shopware 6?** That depends on your requirements. Shopware itself describes the switch as not a simple update. Weigh effort and benefit of both paths against each other.

**How long does a move take?** A flat duration cannot be given. It depends on products, variants, pages, special functions and the quality of the data.

**Should I redesign at the same time?** Better one after the other. The more you change at once, the harder it is to tell later what caused a drop.

## Move from Shopware or Magento planned?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, for example how your addresses are built and which pages are in the Google index. I only work with publicly visible data, without access to your account. For moves to Shopify there is the page [WooCommerce to Shopify](/services/woocommerce-to-shopify) with a redirect map and launch support at a fixed price after the briefing. For Shopware and Magento we clarify in the intro call what is feasible and what the move includes in your case. How I approach a platform move is also shown in [Moving from WooCommerce to Shopify without losing rankings](/blog/woocommerce-to-shopify). Coming from Wix? Then read [Moving from Wix to Shopify](/blog/wix-zu-shopify-umzug).

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
