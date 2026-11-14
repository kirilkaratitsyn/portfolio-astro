---
publishedAt: 2026-10-22
title: "From Shopware or Magento to Shopify: What to Settle Before the Move"
date: October 22, 2026
readingTime: 8 min
excerpt: "From Shopware or Magento to Shopify: which data carries over, what gets rebuilt, and in what order the move carries the least risk."
image: /og/projects/jula-bloom.jpg
topic: migration
tags:
  - Shopify
  - Shopware
  - Magento
  - Migration
---

A Shopware or Magento store cannot be moved to Shopify as a whole. What moves is data, mainly products, customers and orders. Design, extensions and special functions get rebuilt in Shopify.

A Shopware or Magento store is not among my published projects. My documented platform move is [Jula Bloom](/projects/jula-bloom), from WooCommerce to Shopify. The statements below rest on the providers' help and documentation pages, as of October 2026. Check the details in your own system, because versions differ.

## Is the move worth it at all?

A move costs time and carries SEO risk. Three questions first:

- **What is missing in your current system?** Name three things you cannot do, or only awkwardly. If the list stays empty, there is little reason to move.
- **Who runs and maintains your store today?** Updates, hosting and extensions belong in the calculation.
- **How much revenue depends on your Google rankings?** The more, the more careful the planning.

According to Shopware's migration page, Shopware 5 was supported until the end of July 2024, at the end with security updates only. Moving to Shopware 6 is, it says, not a simple update done in a few clicks. So a rebuild is coming either way. Choose between Shopware 6 and another system by numbers and requirements, not out of habit.

## What can be carried over, what cannot?

According to Shopify's help on migrating, this data can be brought into Shopify:

- **Products**
- **Customers**
- **Past orders** (already fulfilled ones)
- **Gift cards and store credit**
- **Blog posts and pages**

Shopify recommends the order products, customers, orders. Orders and gift cards may need an app or the API. From about 250 products, Shopify recommends a CSV file or an app.

Design and extensions do not move. In Shopify you pick a theme and adapt it. You rebuild the functions you need through settings or apps from the Shopify App Store.

## Step 1: Take stock while the old store is still running

Make a list before you change anything:

- All products, categories, pages and blog posts with their **address**. The sitemap is the quickest source.
- Which pages bring **visitors from Google** (Search Console, Performance report) and which pages other sites link to.
- Which **product attributes and custom fields** you use. According to Shopify's Magento guide, Magento attributes become Shopify metafields, and the mapping should be settled before the migration.
- Which **extensions and special functions** you really need. The guide advises not to replicate Magento's complexity if it is not driving revenue.
- What should stay behind. According to the guide, outdated content only costs time.

Later this list is the basis for the redirects.

## Step 2: Export the data from the old system

**Shopware 6.** The export sits in the settings under Import/Export. According to the official documentation, the module works with CSV files in UTF-8, a semicolon as the field separator and quotation marks as the text delimiter. A **profile** defines which column ends up in which data field. Default profiles exist for products, customers, categories and media, among others. The documentation names three snags:

- Prices need a period as the decimal separator; a comma leads to a faulty import.
- Programs such as Excel may not produce a UTF-8 compliant file.
- **Orders** can only be exported with a profile you create yourself. Mandatory fields are id, salesChannelId, orderDateTime and stateId.

**Shopware 5.** The export works differently than in Shopware 6. Look at the documentation of your version, or check whether a migration app from the Shopify App Store supports your system. Do a test export first.

**Magento.** The path depends on version and setup. Map the attributes beforehand (see step 1) and export only what you need.

The columns of the old system do not match Shopify's template. They have to be mapped. From the Shopify help on CSV import:

- **Handle** (the part of the address after `/products/`): letters, numbers and dashes only.
- **Images:** Shopify reads images from publicly accessible addresses (URLs). Check whether your export contains them.
- **Publishing:** Shopify advises turning off "publish to all sales channels" when importing, so that nothing half-finished becomes visible.

Import **three to five test products** first and check price, weight, stock, description and images. Backup, overwriting and encoding are covered in [Importing products into Shopify with a CSV file](/blog/shopify-produkte-importieren-csv).

## Step 3: Customers and orders

- **Customer accounts:** According to Shopify's Magento guide, passwords cannot be migrated in a usable format. Plan activation or password-reset emails after launch, for Shopware too, and announce it.
- **Orders:** According to Shopify only already fulfilled orders come along, and an app or the API may be needed for that. Often an export kept separately as an archive for bookkeeping and queries is enough.

You may only carry over customer data for the purpose it was collected for, for example with newsletter consents. Clear this with your data protection adviser before loading addresses into a new system. This is not legal advice.

## Step 4: Pages, content blocks, blog

Shopify counts pages and blog posts among the data that can be brought over. Content blocks and widgets have no direct counterpart. According to the Magento guide, they should be rebuilt natively in Shopify.

- **Leave the texts of your strongest pages as unchanged as possible.** Rankings depend on content, not only on the address.
- **Check the legal texts** (legal notice, privacy policy, terms, right of withdrawal). Details on payment methods, shipping and services in use change with the new system.

## Step 5: Old addresses and redirects

This is where a move most often loses. According to Shopify's Magento guide, every indexed address that changes needs a 301 redirect to its Shopify equivalent. A redirect to a 404 page is, it says, worse than no redirect at all. The redirects should be ready before the domain points to Shopify.

According to the Shopify help, they can be set up in advance, also by CSV import (*Content → Menus → URL redirects*). Read the real addresses from the sitemap and Search Console instead of assuming address patterns. Mapping and limits are covered in [Moving to Shopify and SEO: Set Up Redirects](/blog/shopify-migration-weiterleitungen).

## Step 6: Test, then switch

Before the domain is switched, the Shopify store should be complete:

- **Payments, shipping, taxes:** Test orders with a successful and a failed payment, refund, cancellation and shipping. Check the automatic emails too.
- **Products and pages:** Spot-check against the old store (price, variant, image, description).
- **Redirects:** Imported, and the most important old addresses checked in the browser.
- **Password protection:** In private mode, search engines cannot reach the store. Turn it off at launch.

The Magento guide advises lowering the DNS TTL 24 to 48 hours before the switch, and it calls the first 14 days after launch critical. After launch, submit the new sitemap (`/sitemap.xml`) in Search Console and look at the Pages report regularly during the first weeks. Every address under "Not found (404)" is a missing redirect. If the store does not show up on Google, see [Shopify Store Not Found on Google](/blog/shopify-shop-bei-google-nicht-gefunden).

## Frequently asked questions

**Can I move my Shopware or Magento store automatically?** No, not as a whole. Data can be carried over; design and extensions are rebuilt in Shopify.

**Do my customers' passwords come along?** For Magento, according to Shopify's guide, not in a usable form. For both systems, plan an activation or reset after launch.

**Will I lose my Google rankings?** Not necessarily. According to Google, permanent redirects do not cost PageRank. Losses come from missing or wrong redirects, changed content and technical errors at launch. Nobody can guarantee it.

**With Shopware 5, should I rather switch to Shopware 6?** That depends on your requirements. According to Shopware, this switch is not a simple update either.

**How long does a move take?** That depends on products, variants, pages, special functions and the quality of the data.

**Should I redesign at the same time?** Better one after the other. Otherwise it is hard to tell later what caused a drop.

## Move from Shopware or Magento planned?

Send me your store's address for the [free store check](#contact). I only work with publicly visible data, without access to your account. What is feasible for Shopware and Magento, we clarify in the intro call.

For moves to Shopify there is the page [WooCommerce to Shopify](/services/woocommerce-to-shopify) with a redirect map and launch support at a fixed price after the briefing. My approach is shown in [Moving from WooCommerce to Shopify](/blog/woocommerce-to-shopify). Coming from Wix: [Moving from Wix to Shopify](/blog/wix-zu-shopify-umzug).

**Further reading:** [WooCommerce security and plugin updates](/blog/woocommerce-sicherheit-plugin-updates) · [Shopify metafields and metaobjects](/blog/shopify-metafelder-metaobjects)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
