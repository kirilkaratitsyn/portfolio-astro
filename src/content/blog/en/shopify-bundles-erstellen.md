---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Creating Shopify bundles: bundle types, limits of the free app and what to watch for"
date: 23 October 2026
readingTime: 7 min
excerpt: "Creating Shopify bundles: bundle types, limits of the free app, inventory, discounts, returns and when a developer helps."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Bundles
  - Product pages
  - Discounts
---

Creating Shopify bundles sounds simple: two products as a set, at a small discount. But there are three kinds of bundles, a free app with clear limits and stumbling blocks around inventory, shipping and subscriptions.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Check your admin, because menus and features change. I do not name prices for apps or development. How a bundle price or a crossed-out comparison price must be stated under the law is a question for your legal adviser.

## What a bundle is

According to the help, a bundle is a set of two or more related products, often at a discount. You can sell it in the Online Store, the Shop channel and Shopify POS, and on the Google & YouTube channel only as a fixed bundle.

A bundles app must be installed.

## Three kinds of bundles

The help distinguishes:

- **Fixed:** a predetermined set of products and variants. If products have several variants, customers choose among them.
- **Multipack:** more than one of the same product.
- **Mix-and-match:** interchangeable products. Customers put the bundle together themselves.

According to the help, fixed bundles and multipacks work with the free **Shopify Bundles** app on all plans. That app explicitly does not support mix-and-match. For it the help names third-party bundle apps or, on Plus only, a custom bundle offering through the Bundles APIs.

## The free Shopify Bundles app: limits

According to the help:

- **Components:** fixed bundles up to 30, dynamic bundles up to 150 components, up to 2000 units per component.
- **Options and variants:** at most 3 options and 100 variants per bundle. Products with no or only one variant show no variant selector.
- **Orders:** orders list the SKUs of the individual items, not the SKU of the bundle. Weight is derived from the individual items.
- **Filters:** bundles do not appear under the option filters of Search & Discovery.
- **Inventory:** stock is tracked overall, not per location.
- **Prices:** if the price of a single product changes, including through a price import, the bundle price stays the same. You adjust it in the admin yourself.

## Creating one in four steps

The single products have to exist first. After that, according to the help:

1. In the admin open **Apps** > **Bundles** and choose **Create bundle**.
2. Enter a title and select the products. Quantity and variants can be adjusted. For a multipack you duplicate the product.
3. Combine options with the same name so customers pick, say, the size only once. The combined option counts as one of the three possible.
4. **Save and continue**, add product details, check the sales channels and set the status from **Draft** to **Active**. Only then is the bundle published.

## Requirements and incompatibilities

According to the help:

- Your shop must use an **upgraded checkout**. Shops with customisations or features from `checkout.liquid` are **not** compatible (see [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen)).
- Bundles are **not compatible with purchase options** such as subscriptions, pre-orders and try-before-you-buy, nor with the Shopify Subscriptions app.
- Bundles have their **own SKU**. If the SKU of a component changes, you have to delete and recreate the bundle. For detailed component tracking the help names metafields or third-party apps (see [Metafields and metaobjects](/blog/shopify-metafelder-metaobjects)).
- Bundles have **no shipping profile of their own**. Shipping costs follow the profiles of the products inside (see [Setting up shipping](/blog/shopify-versand-einrichten)).
- Bundles **cannot contain other bundles** and support **neither import, export nor bulk editing**.
- Bundles **cannot be used in exchanges**, even when exchanging for the same bundle.
- Draft orders may use an older checkout that does not support bundles.

If a shop later becomes ineligible, for example through `checkout.liquid` customisations, fixed bundles are set to draft and no longer published, according to the help.

## Inventory, discounts, returns

**Inventory:** For each product Shopify divides the available stock by the quantity needed for the bundle. The lowest number (rounded down) is the number of sellable bundles. The help's example: 15 chairs at 2 per bundle give 7, 8 desks at 1 per bundle give 8, so 7 bundles are available. Products without inventory tracking, or set to "Continue selling when out of stock", do not count.

**Discounts:** Bundles support discount codes and automatic discounts. For product or collection discounts the parent bundle product must be selected. The components alone are not enough. The discount is calculated on the bundle and distributed to the components by weighted price, and tax is calculated on the individual components. How discounts combine is set by the combination rules in the admin. For cart logic see [free items in the cart](/blog/shopify-gratisartikel-warenkorb).

**Returns:** A bundle cannot be marked final sale in the return rules. Whether it can be returned depends on whether the single products count as final sale. Take legal questions about withdrawal and returns to your legal adviser. Background is in [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien).

## Reporting

According to the help the app shows total bundle sales, number of bundle orders, top-selling and most-ordered bundles. More reports are in the admin under **Analytics**.

## What the help does not answer here

The help pages do not say **which products sell well as a bundle**, how large the discount should be or whether bundles raise your basket value. Load time and display in the theme are missing too.

## Examples from practice

I have no published project case for a bundle. The closest is the buy box I built at [Reserve Kava](/projects/reserve-kava), an instant kava brand: a one-time purchase and a monthly subscription in one block. According to the help, Shopify bundles cannot be combined with subscriptions. So it has to be clear before the build which purchase options come together on the product page.

## Before you start: a checklist

1. Which **kind** of bundle: fixed, multipack or mix-and-match?
2. Is the **Shopify Bundles** app enough, or do you need a third-party app?
3. Does your shop still use **`checkout.liquid`**?
4. Should bundles be combined with **subscriptions or pre-orders**?
5. Who maintains the **bundle price** when a single price changes?
6. Are the **SKUs** of the components stable, and is inventory tracking active everywhere?
7. Is the **bundle product** selected for the discount and checked with a test order?

## When a developer helps

A fixed set or a multipack you create yourself in the app. Help is worthwhile when:

- customers should build bundles freely,
- the buy box has to show bundle, multipacks and subscription clearly,
- the checkout first has to be moved off `checkout.liquid`,
- bundle logic and discounts should fit together.

How customisations stay maintainable is in [Customizing a Shopify theme](/blog/shopify-theme-customization). After that the setup belongs in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Do I need an app for bundles?** Yes. For fixed bundles and multipacks there is the free Shopify Bundles app.

**Are bundles available on the Basic plan?** Yes, the Shopify Bundles app is available on all plans according to the help. Custom bundle offerings through the APIs are reserved for Plus.

**Can customers put their own bundle together?** That is mix-and-match. The Shopify Bundles app cannot do it, third-party apps can.

**Can I sell bundles with a subscription?** Not according to the help: bundles are not compatible with purchase options such as subscriptions.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only work with publicly visible data, without access to your account. What else I do for stores is under [Services](/services).

**Further reading:** [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen) · [Free items in the Shopify cart](/blog/shopify-gratisartikel-warenkorb) · [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions) · [Discount code or automatic discount in Shopify](/blog/shopify-rabattcodes-automatische-rabatte) · [Setting up pre-orders in Shopify](/blog/shopify-vorbestellung-preorder) · [Managing inventory in Shopify](/blog/shopify-lagerbestand-verwalten) · [Setting up Shopify product variants](/blog/shopify-produktvarianten-optionen) · [Shopify try before you buy](/blog/shopify-try-before-you-buy)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
