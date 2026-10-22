---
publishedAt: 2026-10-22
title: "Moving from Wix to Shopify: the Process, the Snags and What Does Not Come Along"
date: October 22, 2026
readingTime: 9 min
excerpt: What you can carry over from a Wix store to Shopify, what you have to rebuild, how to handle domain, email and old addresses, and in what order the move carries the least risk.
image: /og/projects/lumppings.jpg
topic: migration
tags:
  - Shopify
  - Wix
  - Migration
---

A Wix store cannot be moved to Shopify as a whole. Wix states that the website has to be hosted and run on Wix's servers, so there is no export of the finished shop. What you can carry over is data: products and customers through CSV files, orders through third-party apps. Everything else, from the design to pages and functions, gets rebuilt in Shopify. This article walks through the process, names the places where moves usually get stuck, and shows what to know about domain, email and old addresses.

A word up front: a Wix store is not among the projects I have published. My documented platform move is [Jula Bloom](/projects/jula-bloom), a move from WooCommerce to Shopify. The statements about Wix and Shopify below rest on the help pages of both providers, as of October 2026. Check the screens in your own account anyway, because both interfaces change.

## Is the move worth it at all?

A move costs time and carries SEO risk. These questions help with the decision:

- **What exactly is missing today?** Name the three things you cannot do in Wix, or only awkwardly. If the list stays empty, there is little reason to move.
- **What else runs in Wix besides the shop?** Bookings, member areas, forms or events have no automatic counterpart in Shopify. There you need an app or another solution.
- **How much depends on your Google rankings?** The more revenue comes from search hits, the more carefully the move has to be planned.

Once you have the answers, plan the move in the order below.

## What can be carried over, what cannot?

According to Shopify's guide "Migrate from Wix":

- **Products**: Yes, through a CSV export from Wix, adapted to Shopify's template, or through the "Store Migration" app (in early access, according to Shopify)
- **Customers**: Yes, through CSV, but the Wix file has to be edited before import
- **Order history**: No built-in import, only through third-party apps
- **Reviews**: Cannot be exported. Re-enter them or collect them through a review app
- **Pages and blog posts**: Not covered in the Shopify guide, so recreate them manually if in doubt
- **Design, functions, apps**: Cannot be transferred, rebuilt in Shopify

## Step 1: Take stock while Wix is still running

Make a list before you change anything:

- All products, categories, pages and blog posts with their **address**. The sitemap of your Wix site is the quickest source.
- Which pages bring **visitors from Google** (Search Console, Performance report) and which pages other sites link to (Links report).
- Which apps and functions you use in Wix and which of them you really need in Shopify.
- Where your **domain** is registered and which email addresses depend on it.

Keep a copy of this list. Later it is the basis for the redirects.

## Step 2: Export and adapt the products

In Wix the export sits under the "Products" tab (More Actions → Export). The Wix help names two limits explicitly: a CSV file holds up to 5,000 rows, and digital products cannot be exported.

Then comes the work that is usually underestimated: the Wix file has different columns than Shopify's template, so the data has to be mapped. From the Shopify guide and the Shopify help on CSV import:

- **Handle** (the part of the address after `/products/`): letters, numbers and dashes only.
- **Weight:** Wix delivers kilograms, Shopify expects grams.
- **Variants:** A product with a missing variant option does not import correctly and may have to be completed by hand.
- **Images:** A CSV file contains only text. Shopify reads images from publicly accessible addresses (URLs), and every image needs its own row, up to 250 per product. The Wix help does not say whether your Wix export contains image addresses. Do a test export and look.
- **Stock:** The quantity column in the template only fits a single location. With several locations you need the separate inventory CSV.
- **Publishing:** When importing, Shopify advises turning off "publish to all sales channels" so that nothing half-finished becomes visible.

According to Shopify, the "Store Migration" app takes the Wix file without changes, but it has restrictions: prices by location are not supported (the highest price applies then), and products with more than three options are not imported with those options. Import **three to five test products** first, check price, weight, stock, description and images, and only then the rest.

## Step 3: Customers, orders, reviews

- **Customers** are exported in Wix from the contacts. According to Shopify the file cannot be imported unchanged, and there is no mapping help for the CSV import. You adapt the columns to Shopify's customer template yourself, including the country code (ISO code).
- **Orders** reach Shopify only through third-party apps. Ask yourself whether you really need the old order history in the new system. Often an export from Wix, kept separately as an archive for bookkeeping and queries, is enough.
- **Reviews** cannot be exported. If they matter for your shop, plan a review app early and the manual transfer of the most important ones.

A legal note: you may only carry over customer data for the purpose it was collected for. That applies, for example, to newsletter consents. Clear this with your data protection adviser before loading addresses into a new mailing tool.

## Step 4: Pages and blog

The Shopify guide does not cover pages and blog posts, and Wix offers no complete export of the website. So expect manual work: copy texts, upload images again, take over headings and meta descriptions.

Two things save trouble later:

- **Leave the texts of your strongest pages as unchanged as possible.** Rankings depend on content, not only on the address.
- **Check and adapt legal texts** (legal notice, privacy policy, terms, right of withdrawal), because the details on payment methods, shipping and services in use change with the new system.

## Step 5: Old addresses and redirects

This is where a Wix move most often loses something. Shopify builds addresses by a fixed scheme: `/products/…`, `/collections/…`, `/pages/…`, `/blogs/…`. According to the Wix help, Wix uses different patterns by default:

- Products: `/product-page/{product}`
- Blog posts: `/post/{post}`

Wix allows these prefixes to be changed in the SEO settings. So do not rely on the default patterns; read the real addresses from your sitemap. Every old address that Google knows or that is linked to needs a redirect to the matching new page. As soon as your domain points to Shopify, Shopify answers on these addresses, no longer Wix. The redirects therefore have to live in Shopify (*Content → Menus → URL redirects*, also by CSV import), and according to Shopify they should be in place **before** the domain switch.

Two limits that can matter for Wix stores:

- Shopify cannot redirect addresses that begin with `/shop`. A Wix help page shows a shop page at `/shop` in its example. Check whether your product overview lives there.
- Addresses with parameters such as `?page=2` might not behave as expected, according to Shopify.

How to build the mapping, which rules Google gives for it and where Shopify sets further limits is covered in detail in [Moving to Shopify and SEO: Set Up Redirects, Protect Your Rankings](/blog/shopify-migration-weiterleitungen).

## Step 6: Domain and email

For the domain there are several paths, and the right one depends on where it is registered.

- **The domain stays at its registrar, Shopify is connected.** Shopify offers to connect or transfer an existing domain. When connecting, you change where the domain points, and the registrar stays.
- **The domain is transferred from Wix to Shopify.** According to the Wix help the domain must be unlocked. A transfer is not possible if the domain is younger than 60 days, if the registrant details were just changed or if it was transferred recently (ICANN rule). Wix sends an authorization code by email, the transfer usually takes up to 7 days, and the Wix site is disconnected from the domain in the process. Shopify advises disconnecting the domain from the old platform before the transfer, otherwise SSL certificate errors may follow.
- **Your own DNS management for a Wix domain.** If the domain is to stay registered at Wix and DNS is managed elsewhere, according to Wix the way leads through custom nameservers.

Also watch **email**: after the transfer the business email on the domain only works again, according to Wix, once you recreate the MX records at the new provider. Note the current records beforehand, and test sending and receiving after the switch.

Rule of thumb: do not switch domain and system **on the same day** and not without a test. Google also advises making changes one after the other where possible.

## Step 7: Test, then switch

Before the domain is switched, the Shopify store should be complete:

- **Payments, shipping, taxes:** Test orders with a successful and a failed payment, refund, cancellation and shipping. Check the automatic emails.
- **Products and pages:** Spot-check against the old site (price, variant, image, description).
- **Redirects:** Imported, and a selection of the most important old addresses checked in the browser.
- **Password protection:** While the store runs in private mode, search engines cannot reach the sitemap. Turn it off at launch.

After the launch, submit the new sitemap (`/sitemap.xml`, which Shopify creates automatically) in Search Console, open the 20 to 50 most important old addresses and look at the Pages report every week during the first weeks. Every address under "Not found (404)" is a missing redirect. The details of the check are in the redirects article. If the store does not show up after launch, [Shopify Store Not Found on Google: 7 Causes](/blog/shopify-shop-bei-google-nicht-gefunden) helps.

## Frequently asked questions

**Can I move my whole Wix store automatically?** No. Products and customers can be carried over by CSV, orders only through apps, reviews not at all. Design and functions are rebuilt in Shopify.

**Will I lose my Google rankings?** Not necessarily. According to Google, permanent redirects do not cost PageRank. The loss comes from missing or wrong redirects, from changed content and from technical errors at launch. Nobody can guarantee that everything stays unchanged.

**Can I keep my domain?** Yes. Shopify allows you to connect or transfer an existing domain. For a transfer, mind the 60-day lock and the email records.

**How long does a move take?** It depends on the number of products, variants, pages and special functions. The domain transfer alone can take up to 7 days.

**Should I redesign the shop at the same time?** Better one after the other. The more you change at once, the harder it is to tell later what caused a drop.

## Move from Wix planned?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, for example how your addresses are built and which pages are in the Google index. I only work with publicly visible data, without access to your account. For moves to Shopify there is the page [WooCommerce to Shopify](/services/woocommerce-to-shopify) with a redirect map and launch support at a fixed price after the briefing. For Wix we clarify in the intro call what is feasible and what the move includes in your case. How I approach a platform move is also shown in [Moving from WooCommerce to Shopify without losing rankings](/blog/woocommerce-to-shopify). Coming from Shopware or Magento? See [From Shopware or Magento to Shopify: What to Settle Before the Move](/blog/shopware-magento-zu-shopify).

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
