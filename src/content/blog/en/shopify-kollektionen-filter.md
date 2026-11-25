---
publishedAt: 2026-10-24
updatedAt: 2026-11-11
title: "Setting up Shopify collections and filters: conditions, sorting and Search & Discovery"
date: 24 October 2026
readingTime: 9 min
excerpt: "Setting up Shopify collections and filters: manual and automated collections, conditions, sorting, SEO fields and Search & Discovery with its limits."
image: /og/projects/lineargent.jpg
topic: build
tags:
  - Shopify
  - Collections
  - Filters
  - Navigation
---

"Customers can't find anything in my store, even though it's all there." Often the cause is how the collections are built, or filters that don't fit the range. You can set up Shopify collections and filters without code, but there are rules.

## A note before we start

Everything here comes from the Shopify Help Center as of October 2026. Menus change, so check your own admin. Menu names are taken from the English interface. I don't quote prices.

## What a collection is

A collection groups products together, for example by category, season, size, colour or "on sale". In the store it becomes a page with those products. According to the help pages, collections are available from the Basic plan; the Starter plan doesn't support them.

Shopify is replacing the old model of **manual** and **automated (smart) collections** with a **new collections model**. If it is already in your admin, all your existing collections were converted automatically. You can see which one you have under **Products > Collections**.

## The old model: manual or automated

- **Manual collection:** contains the products you pick. Whole products only, not single variants.
- **Automated (smart) collection:** includes products that meet your conditions, up to 60 of them. You decide whether all conditions or just one must be met.
- An automated collection **can't be turned into a manual one**. You create a new manual collection.

## The new model: sources instead of a type

In the new model you add one or more **sources** to a collection:

- **Products:** products added automatically by condition or by hand.
- **Variants:** only certain variants, for example only red items for a Valentine's Day collection. The filters then show only the price range, swatches and options of those variants.
- **Collection:** the products of another collection, for example "Tea accessories" built from the collections Teapots, Strainers and Filters.
- **App:** products from an app source.

A product from several sources shows up only once. You can also **exclude** products: one by one, by condition, or as a whole collection. Exclusions always win.

Limits per store according to the help pages: at most 5,000 collections with conditions, 50 collections that include another collection, 5 collections that exclude another collection, and 100 collections with variants.

## Conditions: what matters

Conditions refer to title, type, vendor, product category, tags, status, price, compare-at price, weight, inventory and metafields, at most 60 per collection. Rules from the help pages that often surprise people:

- **"is equal to" is exact, "contains" is partial.** With "contains", the value needs at least 3 characters.
- **There is no "greater than or equal to" or "less than or equal to".** For a price range, you set two conditions with **Match all conditions**, with the boundaries just below and just above the value you want.
- **For products with variants, one variant is enough.** With "inventory greater than 0" in a Products source, a product is included as soon as one variant has stock.
- **Special characters in tags** are ignored or treated as the same. A condition on the tag `red-new` also catches `red_new` and `red+new`.
- **Archived products** stay in collections but aren't visible in the store.
- **Products added by hand** aren't removed by any condition, only by you.
- **Excluding with "is not equal to"** across several vendors or types often doesn't work as expected, according to the help pages. Tags with "is equal to" are more reliable.
- **Compare-at price:** an empty compare-at price is not the same as 0. To keep a product out of a sale collection that uses "compare-at price is set", the help pages say to set its compare-at price to 0.

Collections based on metafields need a metafield definition with the collections setting turned on. More on that: [Shopify metafields and metaobjects](/blog/shopify-metafelder-metaobjects) and [Setting up Shopify product variants](/blog/shopify-produktvarianten-optionen).

If a collection contains the wrong products, the help pages suggest this: duplicate a condition, save, delete the duplicate, save again.

## Collections nobody sees

According to the help pages, some collections are only used internally and aren't published to any sales channel, for example for a **tax override** or as the target of a **discount**. More on that: [Setting up taxes and VAT in Shopify](/blog/shopify-steuern-mwst-einrichten) and [Shopify discount codes and automatic discounts](/blog/shopify-rabattcodes-automatische-rabatte).

## Order, layout, menu

- **Sorting:** new collections are sorted by **Most relevant**. You can also choose best selling, title, price, date or **Manually**, where you order products yourself. Sorting by price uses base prices, not the prices from Markets or B2B catalogs. More on that: [Shopify Markets](/blog/shopify-markets-mehrere-laender) and [Shopify B2B](/blog/shopify-b2b-wholesale).
- **Template:** you choose your own collection templates from the theme editor per collection.
- **Publishing:** you set the sales channels and a date for the Online Store per collection. That doesn't change the visibility of the individual products.
- **Menu:** a published collection doesn't show up in the menu automatically. You add it under **Content > Menus**. If a collection is deleted, its links disappear from menus.

## Collections and Google

Every collection has its own search engine listing: page title, meta description and URL handle. According to the help pages, titles over 70 and descriptions over 320 characters may be cut off in search results. If you change the handle, tick the box for a redirect from the old address, otherwise visitors land on a 404 page. More on that: [Moving to Shopify and SEO: redirects](/blog/shopify-migration-weiterleitungen) and [Shopify store not found on Google](/blog/shopify-shop-bei-google-nicht-gefunden).

## Filters with Search & Discovery

You set up filters on collection pages and in search with the free **Shopify Search & Discovery** app, under **Apps > Search & Discovery > Filters**.

- **Your theme has to support filters.** Otherwise customers won't see them. You check this under **Content > Menus**, in the **Collection and search filters** section.
- **Standard filters** exist for availability, category, price, product type, tags and vendor. **Custom filters** are based on product options, metafields or metaobjects. Up to 25 filters are possible in total.
- **Grouping values:** for example Onyx, Ebony and Midnight into Black.
- **Swatches:** filters with colour swatches or images work through metafields that reference metaobjects, and the theme has to support them.
- **Empty values** can be hidden or moved to the end of the list.
- **Logic:** values from different filters are combined with "and", values within the same filter with "or" by default. For tags and list metafields you can choose "and".

## Limits of filters

- Collections with **more than 5,000 products** don't show filters. The help pages suggest splitting large collections, for example "Women's clothing" into tops, jeans and boots.
- A filter shows **at most 100 values** in the store.
- In search, filters and counts are based on the first 1,000 results.
- The **price filter** appears only in the store's default currency.
- The **tag filter** appears only in the default language, and vendor values always stay in the default language.
- New metafield values may only appear after re-indexing, which takes 24 to 48 hours according to the help pages.
- The same options must have the same name everywhere, so not "Color" in one place and "Color:" in another.

## What the help pages don't answer

The help pages don't say how many collections a range needs, how deep navigation should go, which filters help your customers, or how any of this affects sales and rankings. For search solutions other than Search & Discovery, the provider's rules apply.

## Examples from practice

- For [Lineargent](/projects/lineargent) I built breadcrumbs for collection pages that show where a collection sits in the catalogue. Search and merchandising there run through Searchspring.
- For [Minbie](/projects/minbie) four sippy-cup colours, each its own product, are linked by a colour switcher on the product page.
- For [Jula Bloom](/projects/jula-bloom) one of the things I did was give the filter bar on collection pages a calmer design.

Setting up Search & Discovery filters for a client isn't described in my published projects.

## Before you start: a checklist

1. Old or **new collections model**?
2. Which collections belong in the **menu**, and which are internal only?
3. Are **tags, types and vendors** written consistently?
4. Are there collections with **more than 5,000 products**?
5. Do important collections have a **page title and description** for Google?
6. Does your **theme** support filters, also in **several languages or currencies**?

## When a developer helps

You can set up collections and standard filters yourself. Help is worth it when:

- the theme doesn't support filters or swatches,
- collection pages need their own templates, breadcrumbs or navigation,
- metafields for filters first have to be set up and filled in,
- a large catalogue needs a new structure.

That's often part of a [Shopify redesign](/services/shopify-redesign). Related: [Shopify theme customization](/blog/shopify-theme-customization).

## Frequently asked questions

**Can I turn an automated collection into a manual one?** Not in the old model.

**Why is a sold-out product still in my "in stock" collection?** The help pages say it's enough for one variant to meet the condition.

**Why can't I see any filters in my store?** According to the help pages, usually because the theme doesn't support filters, the collection has more than 5,000 products, or new values haven't been indexed yet.

**Do I need an app for filters?** Yes, the free Shopify Search & Discovery app.

**Does a new collection appear in the menu automatically?** No, you add it under Content > Menus.

**What does the setup cost?** That depends on the scope.

## What about your store?

Send me your store's address for the [free store check](#contact). I only work with publicly visible data, without access to your account. More on the [Shopify redesign](/services/shopify-redesign).

**Further reading:** [Hiring someone for Shopify SEO](/blog/shopify-seo-optimieren-lassen) · [Shopify Flow: workflow automation without code](/blog/shopify-flow-automatisierung)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
