---
publishedAt: 2026-10-23
title: "Shopify discount code or automatic discount: which fits, and why a code does not apply"
date: 23 October 2026
readingTime: 9 min
excerpt: "Discount code or automatic discount in Shopify: differences, limits, minimum purchase, typical checkout messages and when a developer helps."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Discounts
  - Discount codes
  - Checkout
---

"The customer says the code does not work." Usually a setting is behind it: a combination that is not allowed, a minimum purchase that counts differently than expected, or a discount that does not apply to these products. This article covers what the Shopify Help Center says about discount codes and automatic discounts.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus, plans and limits change, so check your admin. I do not name prices for apps or development.

## Two methods, three types

- **Method:** how the customer gets the discount. They enter a **discount code** at checkout, or an **automatic discount** applies in the cart and at checkout once the conditions are met.
- **Type:** what the discount does. The help lists amount or percentage off (on products or on the order), "Buy X get Y" and free shipping.

Every type exists as a code and as an automatic discount.

## Code or automatic: what the help says

**Automatic discounts** suit store-wide promotions, specific collections and larger quantities, according to the help. They can simplify checkout and raise conversion and order value. The catch: customers may not notice the discount, or may get a bigger discount than intended.

**Discount codes** are the most common method, according to the help, for example for email campaigns or partnerships. They can create interest, a sense of exclusivity and urgency. The catch: forgotten codes can lead to cart abandonment.

As a rule of thumb: a promotion for everyone, such as free shipping on a holiday, suits an automatic discount. A promotion for a group, such as an email list, suits a code. Only your own numbers show what works better with your customers.

## What you can set on a code

According to the help, you can set among other things:

- the **period** in which the code is valid
- how often it applies **in total** and whether it applies **once** per customer (the customer's email address or phone number is tracked for that)
- a **minimum purchase** amount or quantity
- which **products, collections or variants** it applies to
- which **customers, customer segments or markets** may use it
- whether it can be **combined** with other discount classes

Times and the end date follow the time zone in your admin.

## Limits worth knowing

From the help on codes and automatic discounts:

- A code can apply to **up to 100** specific customers, products and variants. Beyond that an error message appears.
- A store can have at most **20 million** unique codes.
- At most **25 automatic discounts** can be active, app discounts included.
- The **discount type** cannot be changed after creation. For a different type, create the discount again.
- A code name should contain **no special characters**, so that it is carried into the checkout URL correctly.
- **Shipping:** amount and percentage discounts do not apply to shipping costs. For that there is the free shipping type, optionally without very expensive shipping rates.
- **After the purchase:** discounts created in the admin do not apply to the post-purchase page at checkout.
- **Crossed-out prices:** discounts take effect only in the cart and at checkout. For product and collection pages the help names compare-at prices, a discount app or a custom solution.

## How the minimum purchase is counted

According to the help:

- **Product prices** count, never shipping costs and taxes.
- For a discount on specific products or collections, **only those products** count.
- Purchased gift cards do not count for amount-off product discounts unless you select the gift card explicitly. For free shipping they do count.
- For an order discount, two totals have to reach the minimum: the sum before product discounts (without purchased gift cards) and the subtotal after product discounts.
- If a combinable discount has already reduced a product's price, the reduced price counts for free shipping. For "Buy X get Y", a product that is already discounted does not count at all.
- Gift cards and credit used as **payment** do not change the minimum. They are applied only after the discounts.

## Combining: the short version

The details on order and free items are in [Free items in the Shopify cart](/blog/shopify-gratisartikel-warenkorb). The key points from the help:

- Every discount belongs to a class: **product**, **order** or **shipping**. Discounts combine only if **every** discount involved allows it.
- All merchants can combine order discounts with free shipping, product discounts with free shipping and product discounts on different items.
- Product discounts with order discounts, and order discounts with each other, are only available to eligible merchants. Among other things, the shop must not use customisations or features from `checkout.liquid` (see [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen)).
- Several product discounts on the **same** line need Shopify Plus.
- Order: product discounts first, then order discounts on the new subtotal, shipping discounts last.
- Two percentage order discounts are each calculated on the original subtotal. The help's example: 10% and 20% make 30% and not 28%.
- Up to five product or order codes and one shipping code are possible per order.
- If discounts cannot be combined, the **best** one for the customer applies.
- Combining works only in the online store, through the Storefront API and in Shopify POS, not on external checkouts such as Facebook, Instagram or Google.

## Why does the code not apply? The messages at a glance

The help names these messages at checkout and their causes:

- **"Enter a valid discount code":** the code does not exist, is not active or was deactivated.
- **The code does not apply to the items in the cart:** the code exists but does not match these products.
- **Several codes that cannot be combined:** checkout applies the best combination and points that out.
- **"The code has already been used" although no order exists:** when the order is submitted, the code is held against its usage limit until the payment completes or fails. A declined payment releases it again. If a checkout stays unfinished, the code can remain stuck. Deleting and reactivating or renaming it does not reset the usage history. The help advises checking the orders and, if needed, creating a new code with the same conditions.
- **The discount code field is missing:** at least one active code must exist. For a checkout coming from a draft order the field is not available by default. With Shop Pay the customer has to log in first. An app that changes prices or checkout behaviour can also hide the field.

A discount for certain customer segments only applies to existing customers, according to the help. First-time buyers have no customer profile yet and only join the segment after the first order.

## What the help does not answer here

The help does not say **how high a discount should be**, whether codes or automatic discounts bring more orders with your customers or which promotion suits your range. How to state discounts and crossed-out prices correctly under the law, for example under price indication rules, is for your lawyer; background is in [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien). What the implementation costs depends on the scope.

## Examples from practice

For [Elanora Skin](/projects/elanora-skin), a skincare brand selling in 15 markets in two languages, I built an offer logic by market and language as part of ongoing support, including free gifts in the cart with a crossed-out price. That included making sure the discount labels at checkout display correctly in both languages.

## Before you start: a checklist

1. Promotion for **everyone** (automatic) or for a **group** (code)?
2. Which **type**: amount or percentage, "Buy X get Y" or free shipping? It cannot be changed later.
3. Which **products, collections or variants**, and how does the **minimum purchase** count?
4. Can it **combine** with other discounts, and does the shop meet the requirements (for example no `checkout.liquid`)?
5. Is the **period** right in the admin's time zone?
6. Are **usage limits** set (in total and per customer)?
7. Checked with a **test order**, including two codes at once and in a phone browser?
8. With several countries: labels and texts checked in every language? (See [Shopify Markets](/blog/shopify-markets-mehrere-laender).)

## When a developer helps

You can create a simple code or automatic discount yourself in the admin. Help is worthwhile in these cases:

- tiered discounts, custom eligibility rules or a gift that lands in the cart automatically
- crossed-out prices on product pages
- codes that should be rejected with a specific message (the help points to a Discount Function)
- a shop that first has to move off `checkout.liquid`

How customisations stay maintainable is in [Customizing a Shopify theme](/blog/shopify-theme-customization). After that the setup belongs in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Which is better, discount code or automatic discount?** According to the help, the automatic discount suits promotions for everyone and the code suits targeted promotions such as email campaigns.

**Can a customer use several discount codes?** Yes, if all discounts involved allow it: up to five product or order codes and one shipping code. Otherwise checkout applies the best combination.

**Why does my code show as "already used"?** According to the help, an unfinished checkout can hold the code. Check the orders and, if needed, create a new code with the same conditions.

**Can I show the discount crossed out on the product page?** Not with the standard discounts. The help names compare-at prices, a discount app or a custom solution.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only check what is publicly visible, such as load time, apps in the source code and page structure, and tell you what stands out. Other work I do for stores is under [Services](/services).

**Further reading:** [Free items in the Shopify cart](/blog/shopify-gratisartikel-warenkorb) · [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen) · [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions) · [Setting up Shopify gift cards](/blog/shopify-geschenkkarten-gutscheine)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
