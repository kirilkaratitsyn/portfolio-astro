---
publishedAt: 2026-10-23
title: "Managing inventory in Shopify: tracking, inventory states, selling when out of stock and multiple locations"
date: 23 October 2026
readingTime: 9 min
excerpt: "Inventory in Shopify: which products to track, what Available, Committed and On hand mean, what happens when stock runs out, how to adjust, count and split quantities across locations."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Inventory
  - Stock
  - Locations
---

"The store says 3 in stock, but the shelf is empty." Or the other way round: a product is sold out but should stay orderable. Both come down to the same settings in the Shopify admin, and they sit in several places. This article shows what the Shopify Help Center says, for merchants without a technical background.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus and features change, so check your admin. I do not name prices for apps or development. How much safety stock suits your range and when to reorder are business decisions, not something the help covers. This article is only about the technology. Menu names are taken from the English interface.

## Which products to track

The help suggests deciding first what you actually count. Typical cases are physical products, items in limited quantities, items you reorder and products you sell in a shop with Shopify POS. According to the help you might not need to track digital products, services, made-to-order products and gift cards, more on that in [Setting up Shopify gift cards](/blog/shopify-geschenkkarten-gutscheine). For dropshipping you can track in Shopify or use a dropshipping app.

## Turning on inventory tracking

Tracking is set per product (per variant if the product has variants):

1. In the admin open **Products** and choose the product, or the variant.
2. In the **Inventory** section turn on **Track quantity**.
3. Enter the number of units under **Available** and save.

Quantities can be entered one by one, in the bulk editor or through a CSV import. If you do not know the exact number yet, the help advises entering a best estimate and adjusting after the first count. To check, look at the quantities under **Products > Inventory**. The help also suggests placing a test order and canceling it afterwards to see whether the stock comes back.

For the product catalog itself in CSV, see [Importing products into Shopify with a CSV file](/blog/shopify-produkte-importieren-csv).

## The inventory states: On hand, Available, Committed and more

Shopify does not count just one number. According to the help there are five states, visible on the Inventory page and on product and variant pages. Tracking has to be on for them to be determined.

- **Available:** can be sold.
- **Committed:** units reserved for unfulfilled orders, for draft orders or for transfers marked ready to ship.
- **Unavailable:** units that apps or you have set aside, for example because they are damaged, in quality control or kept as safety stock. You can move units there from Available with an adjustment.
- **On hand:** the sum of Committed, Unavailable and Available.
- **Incoming:** on the way through transfers, purchase orders or apps. Not sellable until received, then it becomes Available.

The help's example: 10 committed, 6 unavailable and 4 available make 20 on hand. If you edit On hand, Available changes by the same amount, and the other way round. Apps may use further states, such as safety stock.

## What happens when something is "out of stock"

According to the help, out of stock means the product is tracked and the quantity is at zero or below. By default customers cannot buy it then, the product cannot be added to the cart (**Stop selling when out of stock**).

You can change that with **Continue selling when out of stock** in the product's Inventory section. The help names reasons: pre-orders, stock arriving soon, selling first and ordering later, or a store that does not track the actual quantity. The option can only be chosen when **Inventory tracked** is on. How this looks for pre-orders: [Setting up pre-orders in Shopify](/blog/shopify-vorbestellung-preorder).

Three points from the help that often surprise merchants:

- The setting does **not** apply to Shopify POS. There, staff can sell down to zero and below, and POS warns them first.
- With several locations a product can show as out of stock online although stock exists: when the location that fulfills online orders is at zero or below, while a location that does not fulfill online orders has units. The fix according to the help: add stock at the location that fulfills.
- Items from a dropshipping app can show as out of stock when the app's location has no shipping rates.

## Hiding out of stock products

By default a sold-out product stays visible. The help describes four ways to hide it:

- **Collections:** add the condition **Inventory stock** "is greater than" 0 together with **Match all conditions**. It does not work with "any condition". Tracking has to be on.
- **The default "Catalog" collection** (`/collections/all`): first override it with your own collection, then set the same condition.
- **Apps** for inventory management from the App Store, some hide products automatically.
- **Shopify Flow:** the template **Publish and unpublish products based on inventory level** or your own workflow with the trigger **Product variant inventory quantity changed**.

When stock arrives again, the products show in the collections once more. The page I read says nothing on whether hiding is sensible for search engines. That is a separate question.

## Adjusting quantities and tracing changes

You change quantities on the Inventory page (Available and On hand) or on the product and variant pages (Available and Total). There are two methods:

- **Set to:** you enter an exact number, for example after a count.
- **Adjust by:** you add or subtract, for example for goods from a supplier, damaged, lost or expired goods, or to move units to Unavailable.

Changes are not saved right away: first you mark them as pending, then you save. If you leave the page before that, they are lost. You can optionally record a reason (**Add reason**).

Every change lands in the adjustment history. According to the help it shows who made the change, when, and how it changed the quantities, whether it was you, a staff member, an app or a sales channel. Two limits: you see only the last **180 days**, and for products with variants one variant at a time. For older data the help points to the **Inventory adjustment changes** report.

## Stock counts

Under **Inventory > Stock counts** you create a count for a location and choose the products. The team counts with a barcode scanner or by hand, the counted quantity is compared with On hand in Shopify, and a manager can review and approve. I did not read the sub-pages on creating and performing counts in detail, so look at the help there.

## Large quantities with CSV

For many changes at once Shopify offers an export and import of quantities as a CSV file. The export can cover one location or all. The help distinguishes two formats:

- **All states** (recommended by the help): one row per location with columns for every state. According to the help this format protects against accidental overwrites, and columns such as Committed are not editable.
- **Available:** simpler, only the available quantities, without that protection.

## Multiple locations and apps

With more than one location (warehouse, shop, partner) the help says:

- Inventory is tracked **per location**. New products are assigned to all locations automatically with quantity 0.
- A product must be **active** at at least one location to be sellable. Activating or deactivating it at a location does not change quantities.
- You cannot take a product out of stock at a location that has unfulfilled orders or active transfers for it.
- Locations that do not fulfill online orders count in the total inventory but not in the quantity customers see online.
- A new location starts with no inventory. If a quantity is recorded at a location but the product is not active there, Available shows a dash.
- Which location gets an order is decided by order routing. For urgent orders or sync issues the location can be changed.
- Fulfillment apps (dropshipping, logistics partners, print-on-demand) can manage inventory of the same product alongside your own locations.

For the bulk editor the help names up to 50 products at a time, and for catalogs over 100 products the CSV route. On shipping itself: [Setting up shipping in Shopify](/blog/shopify-versand-einrichten).

## What the help does not answer here

The pages I read say nothing on **how much safety stock** suits your range, when you should reorder and how to estimate demand. Which tracking setup fits your store also depends on your range and workflow. Connecting a warehouse management or ERP system stays open, and so do the costs. On the legal side of delivery times and availability statements, ask a lawyer. More on mandatory texts: [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien).

## Examples from practice

Among my published projects there is no case where I set up a store's inventory management, and I do not invent one. The closest is [Elanora Skin](/projects/elanora-skin): as part of ongoing support I added a custom back-in-stock logic through the Klaviyo API. That concerns customer retention, not stock handling in the admin. The numbers in the admin are usually maintained by the merchant.

## Before you start: a checklist

1. Which products are **tracked**, which are not (digital, services, gift cards)?
2. Is **Track quantity** on for all tracked products and variants?
3. Are the **starting quantities** right, or is there a count as a baseline?
4. What should happen at zero: **Stop selling** or **Continue selling**, and is that deliberate for pre-orders?
5. Should sold-out products stay visible or be hidden?
6. Who may change quantities, and is a **reason** recorded for adjustments?
7. With several locations: which location **fulfills online orders**, and does it have stock?
8. Did you check with a **test order** that stock goes down and comes back after canceling?

## When a developer helps

You set the basics yourself. Help is worthwhile when quantities should be taken over from another system, when collections and theme should handle sold-out products cleanly, when back-in-stock emails or a custom "only X left" display are built, when a warehouse or ERP system is connected through the API, or when several locations and fulfillment apps have to work together. Related: [Customizing a Shopify theme](/blog/shopify-theme-customization) and [Creating Shopify bundles](/blog/shopify-bundles-erstellen). After that the setup belongs in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Do I have to track every product?** No. According to the help, digital products, services, made-to-order products and gift cards can often run without tracking.

**What is the difference between Available and On hand?** On hand is the sum of Committed, Unavailable and Available. Available is the part customers can buy.

**Can I keep selling at zero?** Yes, with **Continue selling when out of stock**, as long as tracking is on. In Shopify POS the setting does not apply.

**How long can I see the history of changes?** In the admin the last 180 days per product or variant. For older data there is the Inventory adjustment changes report.

**Can I hide sold-out products?** Yes, through collection conditions, apps or Shopify Flow. Tracking has to be on.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, such as load time, apps in the source code and how pages are built, and tell you what stands out. I only work with publicly visible data, without access to your account. What else I do for stores is under [Services](/services).

**Further reading:** [Setting up pre-orders in Shopify](/blog/shopify-vorbestellung-preorder) · [Importing products into Shopify with a CSV file](/blog/shopify-produkte-importieren-csv) · [Setting up shipping in Shopify](/blog/shopify-versand-einrichten)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
