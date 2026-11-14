---
publishedAt: 2026-10-22
title: "Moving to Shopify and SEO: Set Up Redirects, Protect Your Rankings"
date: October 22, 2026
readingTime: 7 min
excerpt: "Moving to Shopify: collect old addresses, set up redirects, know Shopify's limits and check after launch. Also if the move already happened."
image: /og/projects/lumppings.jpg
topic: migration
tags:
  - Shopify
  - SEO
  - Migration
---

Moving to Shopify almost always changes the addresses of your pages. According to Google, permanent redirects do not cost PageRank. You lose rankings when redirects are missing or lead to the wrong place: old links and Google results then go nowhere. The checklist for a concrete move is in [Moving from WooCommerce to Shopify without losing rankings](/blog/woocommerce-to-shopify). Here the redirects get a closer look.

## Why the addresses change at all

Shopify sets the structure: products live under `/products/…`, collections under `/collections/…`, pages under `/pages/…` and blog posts under `/blogs/…`. Other systems use, for example, `/product/…` (WooCommerce), endings such as `.html` or parameters such as `?id=123`. So the paths change even if your domain stays the same. Every old address that Google knows or that other pages link to needs a redirect to the matching new page.

## Step 1: Collect all old addresses while the old site is running

Good sources for the list:

- **The old site's sitemap.**
- **Search Console, Performance report.** Export the pages with clicks and impressions.
- **Search Console, Links report.** It shows which pages other websites link to. Google explicitly names this list as part of the preparation.
- **A crawl of the site.** It finds addresses that are in no sitemap.
- **Landing pages from your analytics.**

If the old site is already switched off, Search Console, a backup or the Internet Archive help. The list is rarely complete in that case.

## Step 2: Map every old address to a new page

The list becomes a table with two columns:

- `/product/rosen-strauss/` → `/products/rosen-strauss` (product, one to one)
- `/product-category/straeusse/` → `/collections/straeusse` (a category becomes a collection)
- `/blog/pflege-tipps/` → `/blogs/news/pflege-tipps` (blog post)
- `/ueber-uns/` → `/pages/ueber-uns` (page)

Four rules apply:

1. **Every address to the page that matches in content.** Google explicitly advises against redirecting many old addresses to one irrelevant destination, such as the home page. That may be treated as a soft 404.
2. **If a product is discontinued, use the nearest matching page.** That means a similar product or the collection, not the home page.
3. **Merged pages may all point to the one new page.** Google names this as the exception to rule 1.
4. **No chains.** Redirect straight to the final destination. Google gives an upper limit of ideally no more than three, and fewer than five, redirects in a row. If the old site already had redirects, for example from `http` to `https`, the oldest addresses also point straight at the destination.

## Step 3: Set it up in Shopify

You create single redirects in the Shopify admin under *Content → Menus → URL redirects*. The old address goes in "Redirect from", the new one in "Redirect to". Within your domain a relative path such as `/products/rosen-strauss` is enough. According to Shopify, a redirect works immediately.

For many addresses, import a CSV file there. The template has two columns, `Redirect from` and `Redirect to`, with rows like `/example_product.php,/products/example-product`. After the import, check a sample before the store is switched over.

The upper limit is 100,000 redirects, and 20,000,000 on the Plus plan. For very large numbers, the Shopify help points to third-party apps.

## Step 4: Where Shopify sets limits

The Shopify help lists these restrictions:

- **Redirects only work from "broken" addresses.** If the old address already loads a valid page in Shopify, the redirect does not take effect.
- **Some paths cannot be redirected.** According to the Shopify help, this applies to addresses beginning with `/apps`, `/application`, `/cart`, `/carts`, `/orders`, `/services` or `/shop`. `/products`, `/collections` and `/collections/all` themselves are also fixed. For WooCommerce this affects the classic shop page at `/shop/`. It needs a different solution than a URL redirect.
- **Addresses with parameters.** According to Shopify, query strings such as `?id=123` might not work as expected. Test this early.
- **The `.html` ending.** An address ending in `.html` cannot be redirected to the same address without `.html`. Shopify treats both as the same address.
- **Markets and language folders.** Redirects do not automatically apply to the subfolders of your markets. For `/en-ca/…` or `/fr/…` you need separate ones.
- **Caching.** Browsers and search engines cache 301 redirects. A deleted redirect may keep working for a while. So test the mapping beforehand, not in the live store.

## Step 5: More than redirects

- **Take titles and meta descriptions along.** Your key pages should carry the same search terms as in the old store.
- **Update internal links.** Menus, texts and email templates should link straight to the new pages. Google recommends this too.
- **Check indexing.** Password protection off, no "noindex" on pages that should be findable, `robots.txt` in order. More in [Shopify store not found on Google](/blog/shopify-shop-bei-google-nicht-gefunden).
- **Submit the new sitemap.** Shopify creates `/sitemap.xml` automatically. It belongs in Search Console.
- **Change of Address only for a new domain.** According to Google you need the Change of Address tool in Search Console only when the domain or subdomain changes, not for new paths.

Google also advises changing only one thing at a time, so not domain, system and layout all at once. Otherwise it is hard to tell later what caused a drop. Keep the domain and keep your strongest pages as stable as possible.

## Check after the launch

- **On launch day:** Open the 20 to 50 most important old addresses. Each should lead to the right new page, and that page should load normally. In a terminal, `curl -I https://old-address.com/product/rosen-strauss/` shows the status code (expected: 301) and the destination in the `location` line. The URL Inspection in Search Console also helps for single addresses.
- **In the first weeks:** Look at the Pages report in Search Console every week. Each address under "Not found (404)" is a missing redirect. The status "Page with redirect" is not an error.
- **Plan for fluctuation:** According to Google, for medium-sized websites it can take a few weeks or more until the new addresses are shown instead of the old ones.
- **Leave the redirects in place:** Google recommends keeping them as long as possible, generally at least a year.

## The move already happened without redirects?

Then it is not too late:

1. **Reconstruct the old addresses.** Sources: Search Console (performance data and links), a backup, the Internet Archive, your analytics.
2. **Catch up on the mapping and import.** Google has to visit the old addresses again before it sees the redirect. The longer the gap, the more may already have dropped out of the index.
3. **Check indexing.** A forgotten password protection or a "noindex" left from the test phase looks like a ranking loss.

Nobody can say beforehand or guarantee how much comes back.

## Frequently asked questions

**Do I lose link strength through redirects?** According to Google, 301 and other permanent redirects do not cause a loss of PageRank.

**How long do I have to keep redirects?** As long as possible, generally at least a year.

**Do I have to change anything in Search Console?** If the domain stays the same, you do not need a Change of Address. Just submit the new sitemap.

**How many redirects does Shopify allow?** Up to 100,000, and up to 20,000,000 on the Plus plan.

**Does this also apply if I am not coming from WooCommerce?** Yes. The approach is the same, only the old address patterns differ. For Wix: [Moving from Wix to Shopify](/blog/wix-zu-shopify-umzug). For Shopware and Magento: [From Shopware or Magento to Shopify: What to Settle Before the Move](/blog/shopware-magento-zu-shopify).

## Move planned or already done?

Send me your store's address for the [free store check](#contact). I only check publicly visible data, such as how old addresses respond and which pages are missing from the Google index. If you come from WooCommerce, I take on the [move to Shopify](/services/woocommerce-to-shopify) with a redirect map and launch support at a fixed price after the briefing. For other systems we clarify in the intro call what is feasible. Reasons for a switch: [WooCommerce Security and Plugin Updates: Maintain or Switch?](/blog/woocommerce-sicherheit-plugin-updates).

**Further reading:** [Connecting a domain to Shopify](/blog/shopify-domain-verbinden)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
