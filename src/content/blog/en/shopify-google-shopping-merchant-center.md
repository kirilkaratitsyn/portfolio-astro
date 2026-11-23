---
publishedAt: 2026-11-16
title: "Connecting Shopify to Google Shopping: setting up Merchant Center without your products being disapproved"
seoTitle: "Shopify Google Shopping: connecting Merchant Center"
date: 16 November 2026
readingTime: 7 min
excerpt: "Connecting Shopify to Google Shopping: requirements, the Google & YouTube app, product data and GTIN, disapproved products and free listings in Germany."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Google Shopping
  - Marketing
---

For your products to appear in Google's Shopping tab, your Shopify store needs a connection to Google Merchant Center. The **Google & YouTube** app, run by Google, handles it: it sends products, prices and shipping across automatically. Most of the work is not the connecting itself but the requirements and clean product data. Sources are the Shopify Help Center and Google's Merchant Center Help, as of November 2026.

If your store does not show up in normal Google search at all, that is a different topic, see [Shopify store not found on Google](/blog/shopify-shop-bei-google-nicht-gefunden). This article is about the product feed.

## What has to be in place before you connect

According to the Shopify Help Center, Google checks the store itself, not only the products. These points should be met before you connect:

- **The store is public.** A store with a password page cannot be connected.
- **A payment method is set up.** See [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland).
- **A refund policy and terms of service** are created under **Settings > Policies** and sit in the footer menu. The Help Center asks for the **Policies** link type, not custom links to pages. More in [Shopify store policies](/blog/shopify-rechtstexte-richtlinien).
- **Contact details are visible:** phone, email, postal address or contact form, at least one of them. The app cannot check this; you confirm it with a checkbox. The Help Center warns that confirming something that is not true can get the Merchant Center account suspended.
- **Shipping is set up**, with a shipping zone for the target country. Only rates from the **General shipping** profile are synced. Custom shipping profiles cause sync errors. How profiles work is in [Setting up Shopify shipping](/blog/shopify-versand-einrichten).

For Germany, a Google rule comes on top: shipping costs are required for Shopping ads and free listings. According to the Shopify Help Center, an offer without shipping information is disapproved.

## Connecting in three steps

1. In the admin, open **Sales channels > Google & YouTube** (install the app from the Shopify App Store first).
2. Click **Connect Google Account**, choose or create a Google account and allow Shopify access.
3. Choose a Merchant Center account or create one with **Create new**. The phone number is verified with an SMS code.

What to know along the way:

- The list only shows Merchant Center accounts in which your Google account is an **Admin**. After changing access, the Help Center suggests waiting about ten minutes.
- A Merchant Center account can be connected to one Shopify store only.
- If you connect an existing Merchant Center account, an existing product feed is **overwritten**.
- Shopify claims your domain in Merchant Center automatically. If another Google account has already claimed it, the claim can be transferred. According to the Help Center, that cannot be undone. If a previous agency created the account, clarify first who owns it.

Google Ads and Google Analytics 4 can be connected in the same app, even without Merchant Center. Whether the app sets a tracking tag in the process is not described precisely in the Help Center. Check it after connecting, before you trust any numbers, and keep the [cookie banner](/blog/shopify-cookie-banner-datenschutz) in mind.

## What product data Google needs

On first setup, all products available in the online store are synced. A product goes to Google when both **Online Store** and **Google & YouTube** are active under **Sales channels** on the product. The data comes from the product itself:

- **Title and description.** Titles in capital letters trigger the "Excessive capitalization" error, according to the Help Center.
- **Images.** At least one image. Text, logos or watermarks on the image cause the "Promotional overlay on image" error. From 31 January 2027, the main image must be at least 500 × 500 pixels in all categories, otherwise the product is not approved.
- **Barcode (GTIN).** It sits on the product in the **Inventory** section. In Europe it is usually the 13-digit EAN. Each variant needs its own GTIN.
- **Brand, manufacturer part number (MPN), Google product category.** You fill these in the app. Without a category, Google assigns one itself, with possible errors according to the Help Center.

### No GTIN? That is allowed

Here the sources seem to contradict each other. Shopify calls "Missing GTIN or MPN" an error. Google writes that products without an assigned GTIN do not need to submit one, for example own brands or products only you sell. Put together: if the product has a barcode, enter it. If it does not, enter brand and MPN. Google explicitly forbids making up or guessing a GTIN.

### Variant names: English or German?

The Shopify Help Center says that product options, including variants, need to be in English to sync with Google. Google itself, on the other hand, asks that title, description and variant information match the language of the data source, or products may perform worse or be disapproved. For a German store with options such as "Farbe" and "Größe", that means: do not rename everything as a precaution. Connect, and look at which errors the app actually reports. How options are built is in [Setting up Shopify product variants](/blog/shopify-produktvarianten-optionen).

### Unit price for goods sold by weight or volume

In the EU, Google requires a unit price for certain products, for example goods sold by weight, volume, length or area. You enter it on the product in the Google & YouTube app.

## How long it takes

The sources name three different steps:

- **First sync:** up to 24 hours. Later changes usually arrive within a few hours.
- **Google's review of new products:** 3 to 5 business days after the first sync.
- **Review of the whole account**, if Google flags something: usually 7 business days, according to Google.

If you see nothing in the Shopping tab on day one, you have usually not done anything wrong.

## Disapproved products and account suspension

You see problems in two places: sync errors are shown by the app in Shopify, Google's issues are listed in Merchant Center under **Products > Needs attention**. There, **View fix** leads to the solution. When you change the product data, Google re-reviews the affected products automatically. If you disagree with an issue, you can request a review. Remove products that really break the rules first, otherwise bulk requests can fail, according to the Help Center.

Account-level issues are more serious. For most violations, Google sends a warning and gives 7 or 28 calendar days to fix it. For egregious violations, Google suspends without warning. Under "misrepresentation", Google lists among other things:

- not disclosing the total price including all taxes and fees,
- not stating all shipping costs,
- refusing returns although a return policy promises otherwise.

For German stores that means: prices including VAT, shipping costs and the right of withdrawal must match in the store and in the feed. See also [Setting up taxes and VAT in Shopify](/blog/shopify-steuern-mwst-einrichten).

Important for support: Google runs the app. Shopify Support helps with installation and product data; for account suspensions, Google Ads and ad approvals, only Google can help.

## Free or paid?

There are two ways into the Shopping area.

**Free listings.** Approved products can appear without an ad budget in the Shopping tab, Google Search, Google Images, Maps and Lens. The Shopify pages explicitly name stores selling in the United States for this. Google's own help, however, lists Germany among the countries for free listings and says products synced with the Shopify app can appear there for free. For a store in Germany, Google's list is what counts.

**Performance Max.** This is the paid campaign; it replaced Smart Shopping and runs across YouTube, Google Search, Gmail and Maps. You set the budget in Google Ads, not in Shopify. I do not quote any amounts here. My advice: get the free listings working cleanly first, then think about ads.

## Checklist

1. Store without password, payment method active?
2. Refund policy and terms created under Policies and linked in the footer?
3. Contact details visible in the store?
4. Shipping rates for Germany in the General shipping profile?
5. Prices with VAT, shipping costs and withdrawal clearly visible in the store?
6. Barcode, or brand and MPN, on every product, category set?
7. Main images without text and logo, at least 500 × 500 pixels?
8. Who owns the Merchant Center account, and is the domain free?

## How I handle it

I do not have a Google Shopping case with documented results in my portfolio, and I do not manage ad campaigns. My part is the store itself: policies and footer, shipping profiles, product data with barcodes and metafields, images, and the theme spots where price, shipping and unit price are shown. In the admin I work through a collaborator account with limited permissions; the Google and Merchant Center accounts stay with you.

## Frequently asked questions

**What does Google Shopping cost?** Free listings need no ad budget. Ads cost money, and you set their budget in Google Ads.

**Do I need my own Merchant Center account?** The app can create one for you. An existing one can be connected; its previous feed is then overwritten.

**Why are my products not visible?** Often the review is still running (3 to 5 business days), or shipping costs, GTIN or brand are missing. Merchant Center shows the reason under Needs attention.

**Do all products have to go to Google?** No. You control it per product under Sales channels, also for several products at once.

**What about other countries?** The app syncs countries and languages automatically, but can be switched to manual. For several countries, have a look at [Shopify Markets](/blog/shopify-markets-mehrere-laender).

## Feed set up, but products are disapproved?

Send me your store address for the [free Shop-Check](#contact): I tell you which requirements are missing from outside, such as policies in the footer, contact details or shipping costs. Ongoing work on product data and the theme fits [Shopify support and maintenance](/services/shopify-betreuung).

**Further reading:** [Hiring someone for Shopify SEO](/blog/shopify-seo-optimieren-lassen) · [Importing products into Shopify with a CSV file](/blog/shopify-produkte-importieren-csv) · [Shopify metafields and metaobjects](/blog/shopify-metafelder-metaobjects) · [Shopify product reviews](/blog/shopify-produktbewertungen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
