---
publishedAt: 2026-10-23
title: "Managing inventory in Shopify: tracking, inventory states, selling when out of stock and multiple locations"
date: 23 October 2026
readingTime: 9 min
excerpt: "Managing inventory in Shopify: tracking, states such as Available and On hand, selling when out of stock, adjustments, stock counts and multiple locations."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Inventory
  - Stock
  - Locations
---

"The store says 3 in stock, but the shelf is empty." Or a sold-out product should stay orderable. Both come down to the settings for managing inventory in Shopify. They sit in several places in the admin.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus change, so check your admin. Menu names are taken from the English interface, and I do not name prices.

## Which products to track

The help suggests deciding first what you count. Typical cases are physical products, items in limited quantities, items you reorder and products you sell in a shop with Shopify POS.

You might not need to track digital products, services, made-to-order products and gift cards, see [Setting up Shopify gift cards](/blog/shopify-geschenkkarten-gutscheine). For dropshipping you track in Shopify or in a dropshipping app.

## Turning on inventory tracking

Tracking is set per product, or per variant if the product has variants:

1. In the admin open **Products** and choose the product or the variant.
2. In the **Inventory** section turn on **Track quantity**.
3. Enter the number of units under **Available** and save.

You enter quantities one by one, in the bulk editor or through a CSV import. If you do not know the number yet, the help advises an estimate that you adjust after the first count. You see the quantities under **Products > Inventory**. As a check, the help suggests a test order that you cancel afterwards. The stock has to come back.

On the product catalog: [Importing products into Shopify with a CSV file](/blog/shopify-produkte-importieren-csv).

## The inventory states: On hand, Available, Committed and more

According to the help there are five states, visible on the Inventory page and on product and variant pages. Tracking has to be on.

- **Available:** can be sold.
- **Committed:** reserved for unfulfilled orders, draft orders or transfers marked ready to ship.
- **Unavailable:** set aside by apps or by you, for example because of damage, quality control or as safety stock. You move units there from Available with an adjustment.
- **On hand:** the sum of Committed, Unavailable and Available.
- **Incoming:** on the way through transfers, purchase orders or apps. It becomes Available only once received.

The help's example: 10 committed, 6 unavailable and 4 available make 20 on hand. If you edit On hand, Available changes by the same amount, and the other way round. Apps may use further states, such as safety stock.

## What happens when something is "out of stock"

According to the help, out of stock means the product is tracked and the quantity is at zero or below. By default it cannot be added to the cart then (**Stop selling when out of stock**).

You change that with **Continue selling when out of stock** in the product's Inventory section. Reasons named by the help: pre-orders, stock arriving soon, selling first and ordering later, or a store that does not track the actual quantity. The option is only available when **Inventory tracked** is on. More on this: [Setting up pre-orders in Shopify](/blog/shopify-vorbestellung-preorder).

Three points from the help:

- The setting does **not** apply to Shopify POS. There, staff can sell down to zero and below, and POS warns them first.
- With several locations a product can show as out of stock online although stock exists. In that case the location that fulfills online orders is at zero or below, and only a location that does not fulfill online orders has units. According to the help, you add stock at the location that fulfills.
- Items from a dropshipping app can show as out of stock when the app's location has no shipping rates.

## Hiding out of stock products

By default a sold-out product stays visible. The help describes four ways to hide it:

- **Collections:** the condition **Inventory stock** "is greater than" 0 together with **Match all conditions**. It does not work with "any condition". Tracking has to be on.
- **The default "Catalog" collection** (`/collections/all`): first override it with your own collection, then set the same condition.
- **Apps** for inventory management from the App Store, some hide products automatically.
- **[Shopify Flow](/blog/shopify-flow-automatisierung):** the template **Publish and unpublish products based on inventory level** or your own workflow with the trigger **Product variant inventory quantity changed**.

When stock arrives again, the products show in the collections once more. The help page does not say whether hiding is sensible for search engines.

## Adjusting quantities and tracing changes

You change quantities on the Inventory page (Available and On hand) or on the product and variant pages (Available and Total). There are two methods:

- **Set to:** you enter an exact number, for example after a count.
- **Adjust by:** you add or subtract, for example for received goods, damaged, lost or expired goods, or to move units to Unavailable.

Changes are first only marked as pending and apply once you save. If you leave the page before that, they are lost. You can optionally record a reason (**Add reason**).

According to the help, the adjustment history shows who changed the quantities, when and how: you, a staff member, an app or a sales channel. You see only the last **180 days**, and for variants one variant at a time. For older data the help points to the **Inventory adjustment changes** report.

## Stock counts

Under **Inventory > Stock counts** you create a count for a location and choose the products. The team counts with a barcode scanner or by hand. Shopify compares the counted quantity with On hand, and a manager can review and approve. I did not read the sub-pages on creating and performing counts in detail.

## Large quantities with CSV

You handle many changes at once through a CSV export and import, for one location or for all. The help distinguishes two formats:

- **All states** (recommended by the help): one row per location with columns for every state. According to the help this format protects against accidental overwrites, and columns such as Committed are not editable.
- **Available:** only the available quantities, without that protection.

## Multiple locations and apps

With more than one location (warehouse, shop, partner) the help says:

- Inventory is tracked **per location**. New products are assigned to all locations automatically with quantity 0.
- A product must be **active** at at least one location to be sellable. Activating or deactivating does not change quantities.
- If a location has unfulfilled orders or active transfers for a product, you cannot take the product out of stock there.
- Locations that do not fulfill online orders count in the total inventory but not in the quantity customers see online.
- A new location starts with no inventory. If a quantity is recorded but the product is not active there, Available shows a dash.
- Which location gets an order is decided by order routing. For urgent orders or sync issues the location can be changed.
- Fulfillment apps (dropshipping, logistics partners, print-on-demand) can manage inventory of the same product alongside your locations.

For the bulk editor the help names up to 50 products at a time, and for catalogs over 100 products the CSV route. On shipping: [Setting up shipping in Shopify](/blog/shopify-versand-einrichten).

## What the help does not answer here

The help pages do not say **how much safety stock** suits your range, when to reorder and how to estimate demand. Those are business decisions. Connecting a warehouse management or ERP system also stays open, and so do the costs.

On the legal side of delivery times and availability statements, ask a lawyer. On mandatory texts: [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien).

## Examples from practice

Among my published projects there is no case where I set up a store's inventory management.

## When a developer helps

You set the basics yourself. Help is worthwhile when:

- quantities are taken over from another system,
- collections and theme should handle sold-out products cleanly,
- back-in-stock emails or a custom "only X left" display are built,
- a warehouse or ERP system is connected through the API,
- several locations and fulfillment apps have to work together.

Related: [Customizing a Shopify theme](/blog/shopify-theme-customization) and [Creating Shopify bundles](/blog/shopify-bundles-erstellen). After that the setup belongs in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Do I have to track every product?** No. According to the help, digital products, services, made-to-order products and gift cards can often run without tracking.

**What is the difference between Available and On hand?** On hand is the sum of Committed, Unavailable and Available. Available is the part customers can buy.

**Can I keep selling at zero?** Yes, with **Continue selling when out of stock**, as long as tracking is on. In Shopify POS the setting does not apply.

**How long can I see the history of changes?** In the admin the last 180 days per product or variant. For older data there is the Inventory adjustment changes report.

**Can I hide sold-out products?** Yes, through collection conditions, apps or [Shopify workflow automation with Flow](/blog/shopify-flow-automatisierung). Tracking has to be on.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only work with publicly visible data, without access to your account. More under [Services](/services).

**Further reading:** [Setting up pre-orders in Shopify](/blog/shopify-vorbestellung-preorder) · [Importing products into Shopify with a CSV file](/blog/shopify-produkte-importieren-csv) · [Setting up shipping in Shopify](/blog/shopify-versand-einrichten) · [Setting up Shopify product variants](/blog/shopify-produktvarianten-optionen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
