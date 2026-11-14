---
publishedAt: 2026-10-22
title: "Shopify store not found on Google: 7 causes and what you can check"
date: 22 October 2026
readingTime: 5 min
excerpt: "Your Shopify store is not found on Google? Seven typical causes and a ten-minute check you can do without a developer."
image: /og/projects/nimfa.jpg
topic: speed
tags:
  - Shopify
  - SEO
  - Google
---

Your Shopify store is not found on Google, or your products show up nowhere? Check the cause before you buy an SEO app or hire an agency. Often it is a small thing that can be fixed in a few minutes.

## First: not in the index, or just ranked low?

These are two different problems.

- **Not in the index:** Google has not taken the page in. It shows up for no search, not even for your store name. The reason is usually technical and can be fixed.
- **In the index, but far back:** Google knows the page, but other pages fit the search better. That is a question of content, competition and time. Nobody can guarantee you a ranking.

## The ten-minute check

1. **Type `site:your-domain.com` into Google** (with your address). Zero results means nothing is indexed. Results without your products means certain pages are missing.
2. **Open your store in a private window.** If you see a password page, you have found the cause (see cause 1).
3. **Open `your-domain.com/sitemap.xml`.** Shopify creates it automatically. It should list products, collections and pages.
4. **Check a product page in Google Search Console** with the URL inspection tool. It shows whether the page is on Google and, if not, why.
5. **Search the source of a page for "noindex".** Open it with Ctrl+U (Mac: Cmd+Option+U). If the word is there, the page tells Google not to include it.

## The seven typical causes

### 1. The store is still password protected

New Shopify stores start with a password. As long as the protection is on, Google only sees the password page. You turn it off in the Shopify admin under *Online Store → Preferences → Password protection*.

### 2. Products or collections are not published

A product with the status "Draft" or outside the "Online Store" sales channel has no public page. Google only takes in what a visitor can see. In the product, check on the right under "Sales channels" whether Online Store is ticked.

### 3. Google does not know your store yet

A new store first has to be discovered. That takes days to weeks. Add your domain to Google Search Console and submit the sitemap (`/sitemap.xml`).

### 4. Google knows the pages but does not index them

Search Console then shows "Discovered – currently not indexed" or "Crawled – currently not indexed". A common reason: the page has hardly any content of its own. The product text is copied from the manufacturer and appears on many other stores, or the collection has no text at all. Here, your own texts do more than technique.

### 5. An app or the theme blocks Google

Some themes and SEO apps put pages on "noindex". A faulty change to `robots.txt` can also lock Google out. A developer can quickly fix a "noindex" on pages that should be findable.

### 6. A move without redirects

If the addresses changed when you moved to Shopify, Google loses the old pages. Without redirects, their rankings are gone. How to avoid this is covered in [Moving from WooCommerce to Shopify without losing rankings](/blog/woocommerce-to-shopify). For [Jula Bloom](/projects/jula-bloom), the redirect table was written while the old site was still running. If the move has already happened, [Moving to Shopify and SEO: Set Up Redirects, Protect Your Rankings](/blog/shopify-migration-weiterleitungen) helps you redirect afterwards.

### 7. The store is technically too slow or weak on mobile

Google mainly judges the mobile version. A very slow store is rated lower. Causes and a self-test are in [Slow Shopify store? 7 causes](/blog/slow-shopify-store).

## What you can do next

- **Check password, publishing and noindex** first.
- **Write titles and descriptions** so it is clear what visitors will find. You edit them in Shopify under "Search engine listing preview".
- **Be patient.** A new store needs weeks. Changing things too often does not help.

## Frequently asked questions

**How long does it take for a new store to show up on Google?** Days to several weeks. Submitting the sitemap helps, but there is no guarantee.

**Can I force Google to include my pages?** No. You can request indexing in Search Console. Whether and when Google includes the page is Google's decision.

**Do I need an SEO app?** Not necessarily. Shopify brings a sitemap, canonical addresses and editable titles and descriptions. An app does not replace content of your own and can make the store slower.

**Can you guarantee me a ranking on Google?** No, and be careful with anyone who does. I check the technical causes and tell you what can be fixed.

## Do not know what the cause is?

Send me your store's address for the [free store check](#contact). I check password protection, sitemap, noindex, redirects and load time and tell you what can be fixed. If the store is too slow, the [speed-up](/services/shopify-speed) fits; for a move, the [WooCommerce migration](/services/woocommerce-to-shopify). For selling to several countries: [Shopify Markets: selling to several countries](/blog/shopify-markets-mehrere-laender).

**Further reading:** [Hiring someone to optimize your Shopify store](/blog/shopify-shop-optimieren-lassen) · [Moving from Wix to Shopify](/blog/wix-zu-shopify-umzug) · [Hiring someone for Shopify SEO](/blog/shopify-seo-optimieren-lassen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
