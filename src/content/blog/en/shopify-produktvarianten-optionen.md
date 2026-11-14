---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Setting up Shopify product variants: options, limits, prices, images and what to know first"
date: 23 October 2026
readingTime: 7 min
excerpt: "Setting up Shopify product variants: options and values, limits, price, stock and image per variant, and hiding variants instead of deleting them."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Variants
  - Products
  - Options
---

"My T-shirt comes in three sizes and two colors, should I create six products?" No, that is what Shopify product variants are for. This article covers what the Shopify Help Center says about them.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus and limits change, so check your admin. Menu names are in English. I do not name prices for apps or development.

## Options, values, variants

A product has **options** (for example size and color). Each option has **values** (S, M, L and blue, green). Each combination of values can be a **variant**, such as the small blue T-shirt.

Without variants you set price, stock and shipping on the product page, says the help. With variants you set them **for each variant** on its detail page. You also manage stock on the Inventory page, see [Managing inventory in Shopify](/blog/shopify-lagerbestand-verwalten).

## The limits

- Up to **2,048 variants** per product.
- Up to **three options** per product.
- For more, the help names an app from the App Store, or theme code that passes customer input on as line item properties.
- From 500,000 variants in the store, a daily limit applies to uploads through an app or CSV: up to 10,000 new variants per day. Shopify Plus is exempt.

With the **Combined Listings** app, Shopify Plus merchants bundle several products into one listing. It can have up to three options on top of those of the products it contains.

### When it goes past 100 variants

Then, according to the help:

- Up to **250 media** (for example images) per product. Each variant gets **one** medium from the product's media list.
- For variants as their own tile in collections and search results, the help names Combined Listings.
- Some third-party themes, theme app extensions, public apps and sales channels do not support more than 100 variants. For themes the help points to a guide for developers. For apps, ask the app developer.
- The apps Stocky and the old Order Printer do not support more than 100 variants. Custom apps using the REST Admin API have to move to the GraphQL Admin API.

## Adding variants

In the admin, open **Products**, choose the product, and in the **Variants** area click **+ Add options like size or color**. You enter the option name and the values, and customers see both. **+ Add another option** adds one more, up to three. After **Done** and **Save** you set the prices.

Three ways to add variants later:

- **Add a value to an existing option:** this creates all the new combinations. The help's example: with three sizes and two colors, the new color yellow creates three new variants.
- **Create a single variant** (**Add variant**): this creates only that one variant. An exact duplicate cannot be saved.
- **Duplicate a variant** (**Duplicate**): it takes over all details, and at least one option value has to change. This works only in the admin on desktop or phone.

For each variant you can set image, price, quantity, SKU, barcode, HS code, country of origin and locations, or take over the product's defaults.

### Options as category metafields

Options can be linked to **category metafields**. If you then rename a color from Black to Graphite, the name changes everywhere the metafield is linked. The help says colors can show as swatches on the product page if the product has a category. Linking an existing option to a metafield deletes its existing values, says the help. A dialog warns you first. More: [Shopify metafields and metaobjects](/blog/shopify-metafelder-metaobjects).

## Editing variants

- **One at a time:** on the variant page you change options, price, stock and shipping.
- **From the product page:** variant image, price and available stock per location (filter by location first). If the list is grouped by an option, the top row is not a variant of its own. A price or image changed there changes all variants in the group.
- **Several at once:** in the bulk editor.
- **A new option:** the default value you enter applies to all existing variants.
- **Order:** by drag and drop. That is how customers see options and values.

If you delete the only value of an option, the whole option has to be removed.

## Hide variants instead of deleting

To stop selling a variant but keep it for history or later sale, the help recommends **unpublishing** it. That works per sales channel and per catalog:

- A variant shows only if **both product and variant** are published there.
- If all variants are unpublished, the whole product is hidden there.
- New variants are published by default, unless the product is not, or you change it before the first save.
- There is **no** publish date for individual variants.
- In catalogs with their own price adjustment, unpublished variants do not get it. On catalogs and markets: [Shopify Markets](/blog/shopify-markets-mehrere-laender).

For a product with no variants at all, the help says to delete all options and values, including the default one. Otherwise the selection menu stays visible to customers.

## Metafields for variants

On the variant page you can add your own fields with metafields. The help says two different things about this. The overview page says variant metafields cannot currently be shown to customers. The how-to pages say a compatible theme lets you add references to them in the theme editor. Check that in your theme. Maintaining the whole range through a file: [Importing products into Shopify with a CSV file](/blog/shopify-produkte-importieren-csv).

## What the help does not answer here

The pages I read say nothing on **how many variants** are clear for customers, how to name options or build SKUs, whether a menu, buttons or swatches work better, or how variants affect search engines. The display depends on the theme, the cost on the scope.

## Examples from practice

At [Reserve Kava](/projects/reserve-kava), a brand for instant kava, I built a purchase selector for a one-time purchase and a monthly subscription. The price per jar and the saving are calculated from the live price. At [Petaljet](/projects/petaljet) I made the variant list cleaner in a configurator for carnation boxes. Neighboring topics: [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions) and [Creating Shopify bundles](/blog/shopify-bundles-erstellen).

## Before you start: a checklist

1. Which **options** does the product need, and are three enough?
2. Are there **more than 100** combinations?
3. Does every variant have **price, stock, shipping weight, SKU and image**?
4. Should colors appear as **swatches**, and is a category set?
5. Which variants should be visible in which **channel or catalog**?
6. Do your **theme and apps** cope with your number of variants?

## When a developer helps

You set up the basics yourself. Help is worthwhile in these cases:

- more than three options or more than 100 variants,
- a custom display in the theme (swatches, buttons, a configurator),
- variants with bundles or subscriptions,
- variants taken over from another system,
- apps and theme have to work together.

Related: [Customizing a Shopify theme](/blog/shopify-theme-customization) and [Managing inventory in Shopify](/blog/shopify-lagerbestand-verwalten). For ongoing upkeep: [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**How many variants can a product have?** According to the help, up to 2,048, with up to three options.

**Can I use more than three options?** According to the help, with an app from the App Store or theme code, and on Shopify Plus also with Combined Listings.

**Should I delete or hide a variant?** If you want to keep the data, the help recommends unpublishing.

**Can every variant have its own image?** Yes, one medium per variant from the product's media list.

**What happens if I add a value to an option?** All the new combinations with the other options are created.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only check publicly visible data, such as load time, apps in the source code and page structure, without access to your account. More [Services](/services).

**Further reading:** [Managing inventory in Shopify](/blog/shopify-lagerbestand-verwalten) · [Shopify metafields and metaobjects](/blog/shopify-metafelder-metaobjects) · [Creating Shopify bundles](/blog/shopify-bundles-erstellen) · [Shopify try before you buy](/blog/shopify-try-before-you-buy) · [Shopify collections and filters](/blog/shopify-kollektionen-filter)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
