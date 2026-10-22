---
publishedAt: 2026-10-22
title: "Shopify store not found on Google: 7 causes and what you can check"
date: 22 October 2026
readingTime: 6 min
excerpt: Your Shopify store does not show up on Google? First find out whether it is missing from the index or just ranked low. Then seven typical causes and a ten-minute check you can do without a developer.
image: /og/projects/nimfa.jpg
topic: speed
tags:
  - Shopify
  - SEO
  - Google
---

You search for your store on Google and cannot find it, or your products show up nowhere? Before you buy an SEO app or hire an agency, it is worth calmly looking for the cause. Often it is a small thing that can be fixed in a few minutes. And sometimes it is something quite different from what you suspect.

## First: not in the index, or just ranked low?

These are two different problems.

- **Not in the index:** Google has not taken the page in. It shows up for no search at all, not even for your own store name. This is usually a technical reason and can be fixed.
- **In the index, but far back:** Google knows the page, but many other pages fit the search better. That is a question of content, competition and time. There is no quick shortcut, and nobody can guarantee you a ranking.

The check below shows you in ten minutes which situation you are in.

## The ten-minute check

1. **Type `site:your-domain.com` into Google** (with your address). Google shows which pages of your store are in the index. Zero results means nothing is indexed. Some results, but not your products, means certain pages are missing.
2. **Open your store in a private window.** If you see a password page instead of your store, you have found the cause (see cause 1).
3. **Open `your-domain.com/sitemap.xml`.** Shopify creates it automatically. It should show a list of products, collections and pages.
4. **Check a product page in Google Search Console** with the URL inspection tool. It tells you whether the page is on Google and, if not, why.
5. **Search the source of a page for "noindex".** Open it in your browser with Ctrl+U (Mac: Cmd+Option+U) and search for the word. If it is there, the page is explicitly telling Google not to include it.

## The seven typical causes

### 1. The store is still password protected

New Shopify stores start with a password so that not everyone can see them before launch. As long as the protection is on, Google only sees the password page. You find the setting in the Shopify admin under *Online Store → Preferences → Password protection*. For a finished store it should be off.

### 2. Products or collections are not published

A product with the status "Draft", or one that is not available in the "Online Store" sales channel, has no public page. Google can only take in what a visitor can also see. In the product, check on the right under "Sales channels" whether Online Store is ticked.

### 3. Google does not know your store yet

A new store first has to be discovered. That takes days to weeks. You help by adding your domain to Google Search Console and submitting the sitemap (`/sitemap.xml`). There is no guarantee when Google takes the pages in.

### 4. Google knows the pages but does not index them

In Search Console, individual pages then show "Discovered – currently not indexed" or "Crawled – currently not indexed". Common reasons: the page has hardly any content of its own, for example because the product text was copied from the manufacturer and appears identically on many other stores, or collections have no text at all. Here, your own helpful texts do more than any technique.

### 5. An app or the theme blocks Google

Some themes and SEO apps have settings that put pages on "noindex". The `robots.txt` can also be customized in Shopify, and a faulty change can lock Google out. If the source shows "noindex" on pages that should be findable, that is one of the quickest errors a developer can fix.

### 6. A move without redirects

If you moved to Shopify from another system and the addresses changed, Google loses the old pages. Without redirects, the rankings of the old addresses are gone. How to avoid this is covered in [Moving from WooCommerce to Shopify without losing rankings](/blog/woocommerce-to-shopify). For [Jula Bloom](/projects/jula-bloom), the redirect table was written while the old site was still running. If the move has already happened, [Moving to Shopify and SEO: Set Up Redirects, Protect Your Rankings](/blog/shopify-migration-weiterleitungen) shows how to reconstruct the old addresses and redirect them afterwards.

### 7. The store is technically too slow or weak on mobile

Google mainly judges the mobile version. A very slow store is rated lower and has a harder time getting going. Causes and a self-test guide are in [Slow Shopify store? 7 causes](/blog/slow-shopify-store).

## What you can do next

- **Check password, publishing and noindex** first. These are the quick cases.
- **Set up Search Console** and submit the sitemap, if you have not yet.
- **Write your own texts** for your most important collections and products instead of taking manufacturer texts.
- **Write titles and descriptions** so it is clear what visitors will find on the page. You edit them in Shopify under "Search engine listing preview".
- **Be patient.** A new store needs weeks before the picture gets clearer. Changing things too often does not help.

## Frequently asked questions

**How long does it take for a new store to show up on Google?** That cannot be said reliably: days to several weeks. Submitting the sitemap in Search Console helps, but there is no guarantee.

**Can I force Google to include my pages?** No. You can request indexing of a page in Search Console, but whether and when Google includes it is Google's decision.

**Do I need an SEO app?** Not necessarily. Shopify brings a sitemap, canonical addresses and editable titles and descriptions. An app does not replace good content of your own, and every additional app can also make the store slower.

**Can you guarantee me a ranking on Google?** No, and be careful with anyone who does. I check the technical causes and tell you what can be fixed.

## Do not know what the cause is?

Send me your store's address for the [free store check](#contact). I look at the technical reasons (password protection, sitemap, noindex, redirects, load time) and tell you honestly what can be fixed and what is not in my hands. For a store that is too slow, the [speed-up](/services/shopify-speed) fits; for a move, the [WooCommerce migration](/services/woocommerce-to-shopify). If you sell to several countries, the address structure matters too: [Shopify Markets: selling to several countries](/blog/shopify-markets-mehrere-laender).

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
