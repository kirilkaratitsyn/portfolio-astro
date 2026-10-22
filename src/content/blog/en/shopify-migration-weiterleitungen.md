---
publishedAt: 2026-10-22
title: "Moving to Shopify and SEO: Set Up Redirects, Protect Your Rankings"
date: October 22, 2026
readingTime: 8 min
excerpt: Which old addresses to collect before the move, how to redirect them in Shopify, where Shopify sets limits and what to check after launch. Also for the case where the move already happened without redirects.
image: /og/projects/lumppings.jpg
topic: migration
tags:
  - Shopify
  - SEO
  - Migration
---

When you move your store to Shopify, you almost always change the addresses of your pages. For Google and for everyone who links to your pages, that is like moving house without a mail-forwarding order: whoever visits the old address stands in front of an empty door. The good news: according to Google, permanent redirects do not cost PageRank. The loss does not come from the move itself but from redirects that are missing or lead to the wrong place. This article shows how to plan them, set them up in Shopify and check them afterwards, whichever system you come from. The checklist for a concrete move is in [Moving from WooCommerce to Shopify without losing rankings](/blog/woocommerce-to-shopify). Here the redirects get a closer look.

## Why the addresses change at all

Shopify sets the structure: products live under `/products/…`, collections under `/collections/…`, pages under `/pages/…` and blog posts under `/blogs/…`. Other systems build their addresses differently, for example `/product/…` in WooCommerce, endings such as `.html`, or parameters such as `?id=123`. Even if your domain stays the same, the paths behind it change. Every old address that Google knows or that other pages link to then needs a redirect to the matching new page.

## Step 1: Collect all old addresses while the old site is running

The list is the basis for everything else. Good sources:

- **The old site's sitemap.** It contains the addresses your old site itself considered important.
- **Search Console, Performance report.** Export the pages with clicks and impressions. These are the addresses your traffic depends on.
- **Search Console, Links report.** It shows which of your pages other websites link to. Google explicitly names a list of sites linking to your old URLs as part of the preparation.
- **A crawl of the site.** A crawler finds addresses that are in no sitemap.
- **Landing pages from your analytics.** They show where visitors actually arrive.

If the old site is already switched off, Search Console data, a backup or the Internet Archive help. The list is rarely complete in that case.

## Step 2: Map every old address to a new page

The list becomes a table with two columns: old address, new address. An example of the structure:

- `/product/rosen-strauss/` → `/products/rosen-strauss` (product, one to one)
- `/product-category/straeusse/` → `/collections/straeusse` (a category becomes a collection)
- `/blog/pflege-tipps/` → `/blogs/news/pflege-tipps` (blog post)
- `/ueber-uns/` → `/pages/ueber-uns` (page)

A few rules apply:

1. **Every address to the page that matches in content.** Google explicitly advises against redirecting many old addresses to one irrelevant destination, such as the home page. That can confuse visitors and may be treated as a soft 404.
2. **If a product is discontinued, use the nearest matching page.** That is a similar product or the matching collection, not the home page.
3. **If several pages were merged, all the old addresses may point to the one new page.** Google names this as the exception to rule 1.
4. **No chains.** Redirect straight to the final destination. Google recommends avoiding chains where possible and gives an upper limit of ideally no more than three, and fewer than five, redirects in a row. If the old site already had redirects (for example from `http` to `https`, or from an even older structure), point the oldest addresses straight at the destination.

## Step 3: Set it up in Shopify

You create single redirects in the Shopify admin under *Content → Menus → URL redirects*: the old address under "Redirect from", the new one under "Redirect to". Within your domain a relative path such as `/products/rosen-strauss` is enough. According to Shopify, a redirect works immediately.

For many addresses you import a CSV file through the same area. Shopify's template has two columns, `Redirect from` and `Redirect to`, with rows like `/example_product.php,/products/example-product`. After the import, check a sample before the store is switched to the new domain or system.

The upper limit is 100,000 redirects, and 20,000,000 on the Plus plan. For very large numbers, the Shopify help points to third-party apps.

## Step 4: Where Shopify sets limits

The Shopify help lists restrictions you should know before the start, because otherwise they only show up in the 404 report:

- **Redirects only work from "broken" addresses.** If the old address already loads a valid page in Shopify, the redirect does not take effect. Check whether an old address happens to match a new page.
- **Some paths cannot be redirected.** According to the Shopify help, this applies to addresses beginning with `/apps`, `/application`, `/cart`, `/carts`, `/orders`, `/services` or `/shop`. The paths `/products`, `/collections` and `/collections/all` themselves are also fixed. This matters for WooCommerce: the classic shop page at `/shop/` falls under this restriction. It needs a different solution than a URL redirect, and the important thing is to know it beforehand.
- **Addresses with parameters.** According to Shopify, addresses with query strings such as `?id=123` might not work as expected. If your old site had many of them, test early.
- **The `.html` ending.** An address ending in `.html` cannot be redirected to the same address without `.html`, because Shopify treats both as the same address.
- **Markets and language folders.** Redirects do not automatically apply to all subfolders of your markets. For `/en-ca/…` or `/fr/…` you need separate redirects. This mainly affects stores with several languages.
- **Caching.** Browsers and search engines cache 301 redirects. If you delete a redirect later, it may keep working for visitors for a while. So do not experiment in the live store; test the mapping beforehand.

## Step 5: More than redirects

Redirects are the most important part, but not the only one:

- **Take titles and meta descriptions along.** Your key pages should carry the same search terms in the new store as in the old one. Rankings depend on content, not only on the address.
- **Point internal links to the new addresses.** Menus, texts and email templates should link straight to the new pages, not through the redirect. Google recommends updating your own links to the new addresses.
- **Check indexing.** Password protection off, no "noindex" on pages that should be findable, `robots.txt` in order. How that works is in [Shopify store not found on Google](/blog/shopify-shop-bei-google-nicht-gefunden).
- **Submit the new sitemap.** Shopify creates `/sitemap.xml` automatically. Submit it in Search Console.
- **Change of Address only for a new domain.** According to Google you need the Change of Address tool in Search Console only when the domain or subdomain changes, not for path changes within the same domain.

Google also advises changing only one thing at a time: not domain, system and layout all at once. The more you change at once, the harder it is to tell later what caused a drop. For most stores that means: keep the domain, and keep the addresses and texts of your strongest pages as stable as possible.

## Check after the launch

- **On launch day:** open the 20 to 50 most important old addresses. Each should lead to the right new page, and the new page should load normally. In a terminal, `curl -I https://old-address.com/product/rosen-strauss/` shows the status code (expected: 301) and the destination in the `location` line. The URL Inspection in Search Console also helps for single addresses.
- **In the first weeks:** look at the Pages report in Search Console every week. Each address under "Not found (404)" is a missing redirect: add it. The status "Page with redirect", on the other hand, is not an error but exactly what you want.
- **Plan for fluctuation:** Google writes that for medium-sized websites it can take a few weeks or more until the new addresses are shown instead of the old ones. That is no sign that something is going wrong.
- **Leave the redirects in place:** Google recommends keeping them as long as possible, generally at least a year, so that all signals transfer.

## The move already happened without redirects?

Then it is not too late, but the situation is less comfortable, and you should not accept promises. Here is how to proceed:

1. **Reconstruct the old addresses.** From Search Console (performance data and links), from a backup of the old site, from the Internet Archive and from your analytics.
2. **Catch up on the mapping and import.** Redirects help even late: Google has to visit the old addresses again before it sees the redirect. The longer the gap, the more may already have dropped out of the index.
3. **Check indexing.** A forgotten password protection or a "noindex" left from the test phase looks like a ranking loss but is a different problem.

How much comes back cannot be said beforehand, and nobody can guarantee it.

## Frequently asked questions

**Do I lose link strength through redirects?** According to Google, 301 and other permanent redirects do not cause a loss of PageRank.

**How long do I have to keep redirects?** As long as possible, generally at least a year. From the users' point of view you can also leave them in place permanently.

**Do I have to change anything in Search Console?** If the domain stays the same, you do not need a Change of Address, but you should submit the new sitemap and watch the reports.

**How many redirects does Shopify allow?** Up to 100,000, and up to 20,000,000 on the Plus plan.

**Does this also apply if I am not coming from WooCommerce?** The approach is the same: collect, map, redirect, check. The old address patterns differ from system to system, and addresses with parameters should be tested early. For Wix there is a separate article: [Moving from Wix to Shopify](/blog/wix-zu-shopify-umzug).

## Move planned or already done?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, for example how old addresses respond and which pages are missing from the Google index. I only work with publicly visible data, without access to your backend and without a security scan. If you come from WooCommerce, I take on the [move to Shopify](/services/woocommerce-to-shopify) with a redirect map and launch support at a fixed price after the briefing. For other systems we clarify in the intro call what is feasible. The reasons for a switch are covered in [WooCommerce Security and Plugin Updates: Maintain or Switch?](/blog/woocommerce-sicherheit-plugin-updates).

*Kiril Karatitsyn, Shopify developer in Germany*
