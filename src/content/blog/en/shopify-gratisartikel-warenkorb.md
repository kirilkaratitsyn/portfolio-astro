---
publishedAt: 2026-10-23
title: "Free gift over a minimum order value in Shopify: discount, automatic discount or custom logic"
date: 23 October 2026
readingTime: 7 min
excerpt: "Free gift over a minimum order value in Shopify: what Buy X get Y can do, why the gift does not add itself to the cart and when you need custom logic."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Discounts
  - Free gifts
  - Cart
---

A free gift over a minimum order value is quick to set up in Shopify, for example "Get a free sample from 50 euros". The catch shows in the cart: the gift does not land there by itself.

## A note on scope

All statements about discounts come from the Shopify Help Center, as of October 2026. Menus and features change, so check your admin. How to advertise promotions legally is a question for your lawyer.

## Three ways to a free gift

1. **Discount code:** the customer enters the code at checkout.
2. **Automatic discount:** the discount applies as soon as the matching products are in the cart.
3. **Custom logic in the theme or through an app:** code or an app puts the gift into the cart.

The first two ways belong to the standard feature "Buy X get Y". You need the third when the standard feature is not enough.

## What Buy X get Y can do

According to the Shopify Help Center you define what the customer buys ("Customer buys") and what they get ("Customer gets"). In addition:

- **Value of the gift:** the items are free, or reduced by a percentage or an amount per item.
- **Per order or per item:** the discount applies once per order or once per qualifying item. The help's example: one hat per order or one per T-shirt.
- **Minimum requirement:** a minimum quantity or a minimum purchase amount. The amount counts product prices only, not shipping and taxes.
- **Audience:** all customers, specific customers, customer segments or specific markets.
- **Period:** start and end follow your store's time zone. Without an end date the discount does not expire.
- **Usage limits:** a maximum number of uses per order; for discount codes also a total limit and a limit per customer.

## The catch: the gift does not put itself into the cart

According to the help, customers have to add all items to their cart manually. The free or discounted item is never added automatically.

So whoever reads "From 50 euros you get a gift" has to find the gift and add it. That can work when the gift is a normal product in your store and the promotion is explained well. It works badly when customers miss the notice, or when the gift is not meant to be visible as a separate product.

More rules from the help:

- **Counting:** only products from "Customer buys" count towards the minimum, at full price before other discounts. Items already reduced by a combinable discount do not count.
- **Gift cards and credit:** gift cards count if they are in the selected products or collections. Gift cards and store credit used as payment do not.
- **Inventory:** if the inventory of a free product drops to zero, it is shown as sold out.
- **Same product in both parts:** for automatic discounts, the lower-priced item is then discounted.
- **After purchase:** discounts created in the admin do not apply to post-purchase offers at checkout, according to the help.

## Combinations and limits

Shopify has three discount classes: product discounts, order discounts and shipping discounts. According to the help, among other things:

- Product and order discounts are calculated in that order, followed by shipping discounts.
- Order discounts and product discounts can each be combined with free shipping. Product discounts on different items can also be combined.
- Several product discounts on the same line item require Shopify Plus.
- Up to 25 automatic discounts can be active (including app discounts). Per order, customers can use up to 5 product or order codes and 1 shipping code.
- Without Plus the help says: products in a Buy X get Y discount are not eligible for further product discounts.

Whether the promotion works with your other discounts only shows in a test with a real cart.

## When the standard feature is not enough

If the gift should appear automatically, you need an app or custom development.

- **Discount apps:** for more complicated discount logic Shopify names apps from the Shopify App Store, for example for tiered discounts or custom eligibility rules.
- **Shopify Functions:** developers use them to create new discount types that Shopify calculates when a customer adds a product to the cart. According to the developer documentation, stores on any plan can use public apps that contain functions, while custom apps with Function APIs are limited to Shopify Plus.

These pages do not say whether a gift can be added automatically this way. That depends on the solution. Settle these questions beforehand (from my practice, not from the help):

- Is the gift a **real line** in the cart, so that it appears in the order, inventory and shipping?
- What happens when the customer **drops below the threshold** or removes the main product?
- Is the price **recognisable as free**, for example struck through, in every language and market?
- What applies when the gift is **sold out**?
- Does it run **fast**, without the cart hanging on every change?

## An example from practice

For Elanora Skin I built a gift engine for the cart. It adds free products as real lines with their own title, image and struck-through price. It sends them in a single cart update so the cart stays fast. The store sells in 15 markets and two languages, and the promotion logic follows market and language. More in the [project](/projects/elanora-skin).

## How to test the promotion

- A cart **just below** and **just above** the threshold.
- Gift added **before** and **after** the main product.
- **Remove** the main product again: what happens to the gift?
- Combination with a **discount code** and free shipping (see [setting up shipping](/blog/shopify-versand-einrichten)).
- Every **market and language** you serve ([Shopify Markets](/blog/shopify-markets-mehrere-laender)).
- **Smartphone** and checkout up to the order summary.
- Gift **sold out**.

## When a developer helps

For a gift the customer adds themselves you do not need one. Custom logic only pays off when the flow would otherwise be too awkward for customers: the gift should appear automatically, promotions differ by market or language, or several promotions have to work together. See [Customizing a Shopify theme](/blog/shopify-theme-customization) and, for ongoing upkeep, [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Can Shopify put the gift into the cart automatically?** Not with Buy X get Y, according to the help. That takes an app or custom development.

**Can I offer a gift above an order value without a code?** Yes, as an automatic discount with a minimum purchase amount, if the customer adds the gift themselves.

**Do shipping and taxes count towards the minimum order value?** No, according to the help only product prices count.

**What does a custom solution cost?** That depends on the requirements. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only work with publicly visible data, without access to your account. More under [Services](/services) and [Store rebuild and redesign](/services/shopify-redesign).

**Further reading:** [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen) · [Creating Shopify bundles](/blog/shopify-bundles-erstellen) · [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions) · [Discount code or automatic discount in Shopify](/blog/shopify-rabattcodes-automatische-rabatte) · [Having a Shopify app built](/blog/shopify-app-entwickeln-lassen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
