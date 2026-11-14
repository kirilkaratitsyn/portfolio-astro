---
publishedAt: 2026-10-22
title: "Moving from Wix to Shopify: the Process, the Snags and What Does Not Come Along"
date: October 22, 2026
readingTime: 8 min
excerpt: "Moving from Wix to Shopify: what you can carry over, what you rebuild, and how to handle your domain, email and old addresses."
image: /og/projects/lumppings.jpg
topic: migration
tags:
  - Shopify
  - Wix
  - Migration
---

If you are moving from Wix to Shopify, you cannot move the store as a whole. Wix states that the website has to be hosted and run on Wix's servers, so there is no export of the finished shop. What you can carry over is data: products and customers through CSV files, orders through third-party apps. Design, pages and functions get rebuilt in Shopify.

I have not published a Wix store as a project so far. My documented platform move is [Jula Bloom](/projects/jula-bloom), a move from WooCommerce to Shopify. The statements below come from the help pages of Wix and Shopify, as of October 2026. Both interfaces change, so check your own account against them.

## Is the move worth it at all?

A move costs time and carries SEO risk. Settle three questions first:

- **What exactly is missing today?** Name three things you cannot do in Wix, or only awkwardly. If the list stays empty, there is little reason to move.
- **What else runs in Wix besides the shop?** Bookings, member areas, forms or events need an app or another solution in Shopify.
- **How much depends on your Google rankings?** The more revenue comes from search, the more careful the planning has to be.

## What can be carried over, what cannot?

According to Shopify's guide "Migrate from Wix":

- **Products**: Yes, by CSV export, adapted to Shopify's template, or through the "Store Migration" app (in early access, according to Shopify)
- **Customers**: Yes, by CSV, after editing the Wix file
- **Order history**: Only through third-party apps
- **Reviews**: Cannot be exported
- **Pages and blog posts**: Not covered in the Shopify guide, so recreate them manually
- **Design, functions, apps**: Cannot be transferred

## Step 1: Take stock while Wix is still running

Make a list before you change anything. Later it is the basis for the redirects.

- All products, categories, pages and blog posts with their **address**. The quickest source is the Wix sitemap.
- Pages that bring **visitors from Google** (Search Console, Performance report) and pages other sites link to (Links report).
- Apps and functions from Wix that you need in Shopify.
- The registrar of your **domain** and the email addresses that depend on it.

## Step 2: Export and adapt the products

In Wix the export sits under "Products" (More Actions → Export). According to the Wix help, a CSV file holds up to 5,000 rows, and digital products cannot be exported.

The Wix file has different columns than Shopify's template. From the Shopify guide and the Shopify help on CSV import:

- **Handle** (the part of the address after `/products/`): letters, numbers and dashes only.
- **Weight:** Wix delivers kilograms, Shopify expects grams.
- **Variants:** A product with a missing variant option does not import correctly.
- **Images:** Shopify reads them from publicly accessible URLs, one row per image, up to 250 per product. The Wix help does not say whether the Wix export contains image addresses. Check with a test export.
- **Stock:** The quantity column only fits a single location. For several you need the separate inventory CSV.
- **Publishing:** Shopify advises turning off "publish to all sales channels" during import.

According to Shopify, the "Store Migration" app takes the Wix file unchanged. It does not support prices by location (the highest price applies), and products with more than three options are not imported with those options.

Import **three to five test products** first and check price, weight, stock, description and images. Backup, overwriting and encoding are covered in [Importing products into Shopify with a CSV file](/blog/shopify-produkte-importieren-csv).

## Step 3: Customers, orders, reviews

- **Customers** are exported in Wix from the contacts. According to Shopify the file cannot be imported unchanged, and there is no mapping help. You adapt the columns to Shopify's customer template yourself, including the country code (ISO code).
- **Orders** reach Shopify only through third-party apps. Often a Wix export is enough as an archive for bookkeeping and queries.
- **Reviews** cannot be exported. Plan a review app early and enter the most important reviews by hand.

You may only carry over customer data for the purpose it was collected for, for example with newsletter consents. Clear this with your data protection adviser beforehand.

## Step 4: Pages and blog

Wix offers no complete export of the website, and the Shopify guide does not cover pages and blog posts. You copy texts, upload images again and take over headings and meta descriptions by hand.

- **Leave the texts of your strongest pages as unchanged as possible.** Rankings depend on content, not only on the address.
- **Adapt legal texts** (legal notice, privacy policy, terms, right of withdrawal). Payment methods, shipping and services in use change with the new system.

## Step 5: Old addresses and redirects

This is where a Wix move most often loses something. Shopify builds addresses by a fixed scheme: `/products/…`, `/collections/…`, `/pages/…`, `/blogs/…`. According to the Wix help, Wix uses different patterns by default:

- Products: `/product-page/{product}`
- Blog posts: `/post/{post}`

These prefixes can be changed in the Wix SEO settings. So read the real addresses from your sitemap. Every old address that Google knows or that is linked to needs a redirect to the matching new page.

Once the domain points to Shopify, Shopify answers on these addresses. The redirects therefore live in Shopify (*Content → Menus → URL redirects*, also by CSV import), and according to Shopify they should be in place **before** the domain switch.

Two limits:

- Shopify cannot redirect addresses that begin with `/shop`. A Wix help page shows a shop page at `/shop` in its example. Check whether your product overview lives there.
- Addresses with parameters such as `?page=2` might not behave as expected, according to Shopify.

More on this: [Moving to Shopify and SEO: Set Up Redirects, Protect Your Rankings](/blog/shopify-migration-weiterleitungen).

## Step 6: Domain and email

The path depends on where the domain is registered.

- **Connect the domain.** The domain stays at its registrar, you only change where it points.
- **Transfer the domain from Wix to Shopify.** According to the Wix help the domain must be unlocked. A transfer is not possible if the domain is younger than 60 days, if the registrant details were just changed or if it was transferred recently (ICANN rule). Wix sends an authorization code by email, the transfer usually takes up to 7 days, and the Wix site is disconnected from the domain. Shopify advises disconnecting the domain from the old platform beforehand, otherwise SSL certificate errors may follow.
- **The domain stays at Wix, DNS is managed elsewhere.** According to Wix the way leads through custom nameservers.

**Email:** according to Wix, after the transfer the business email only works again once you recreate the MX records at the new provider. Note the records beforehand and test sending and receiving afterwards.

Do not switch domain and system **on the same day**. Google advises making changes one after the other where possible.

## Step 7: Test, then switch

Before you switch the domain, check:

- **Payments, shipping, taxes:** Test orders with a successful and a failed payment, refund, cancellation and shipping, plus the automatic emails.
- **Products and pages:** Spot-check against the old site (price, variant, image, description).
- **Redirects:** imported and checked in the browser for the most important old addresses.
- **Password protection:** turn it off at launch, otherwise search engines cannot reach the sitemap.

After the launch:

- Submit the sitemap in Search Console (`/sitemap.xml`, which Shopify creates automatically).
- Open the 20 to 50 most important old addresses.
- Check the Pages report every week during the first weeks. Every address under "Not found (404)" is a missing redirect.

If the store does not show up, see [Shopify Store Not Found on Google: 7 Causes](/blog/shopify-shop-bei-google-nicht-gefunden).

## Frequently asked questions

**Can I move my whole Wix store automatically?** No. Products and customers come along by CSV, orders only through apps, reviews not at all. Design and functions are rebuilt.

**Will I lose my Google rankings?** Not necessarily. According to Google, permanent redirects do not cost PageRank. Losses come from missing or wrong redirects, changed content and technical errors at launch. Nobody can give a guarantee.

**Can I keep my domain?** Yes. Shopify allows you to connect or transfer an existing domain. For a transfer, mind the 60-day lock and the email records.

**How long does a move take?** It depends on the number of products, variants, pages and special functions. The domain transfer alone can take up to 7 days.

**Should I redesign the shop at the same time?** Better one after the other. Otherwise it is hard to tell later what caused a drop.

## Move from Wix planned?

Send me your store's address for the [free store check](#contact). I only look at publicly visible data, such as how your addresses are built and which pages are in the Google index. What is feasible for Wix, we clarify in the intro call.

Further reading:

- [WooCommerce to Shopify](/services/woocommerce-to-shopify): redirect map and launch support at a fixed price after the briefing
- [WooCommerce to Shopify without losing rankings](/blog/woocommerce-to-shopify)
- [From Shopware or Magento to Shopify](/blog/shopware-magento-zu-shopify)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
