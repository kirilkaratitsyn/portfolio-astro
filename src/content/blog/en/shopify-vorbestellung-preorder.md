---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Setting up Shopify pre-orders: pre-order app, checkout limits and what to clarify first"
date: 23 October 2026
readingTime: 6 min
excerpt: "Setting up Shopify pre-orders: pre-order app, deposits, payment methods, inventory, cancellation and the checkout limits named in the Shopify help."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Pre-orders
  - Purchase options
  - Checkout
---

"The product is not here yet, but I want to start selling." Shopify covers this with pre-orders, one of its purchase options. Setting up Shopify pre-orders requires a pre-order app, and checkout has limits.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus, conditions and payment methods change, so check your admin.

## What pre-orders are

According to the help, pre-orders let you sell products that are out of stock or not yet available. That way you can estimate demand for a new product.

Depending on the option, the full amount, a partial amount or nothing is collected when the order is placed. The customer's payment method is stored and you collect the rest later.

Pre-orders are one of three purchase options, next to subscriptions and try-before-you-buy. On subscriptions: [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions).

## It does not work without an app

According to the help you need a **pre-order app** from the Shopify App Store. You set the product up as a pre-order there.

If you uninstall the app, the pre-order data created there (excluding customers' payment information) is deleted after 48 hours. With a backup in the app you can restore it.

According to the help, pre-orders are currently only available to merchants using **Shopify Payments or PayPal Express**.

## Requirements and limits

According to the help:

- **Delivery promise:** you need a reasonable basis for the shipping time you promise. With no date stated, you must reasonably believe the product will ship within **30 days** of purchase.
- **Delay:** you must give a revised ship date and explain the customer's right to cancel or get a refund.
- **Customised checkout:** pre-orders are not supported on stores with a customised checkout (see [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen)).
- **Accelerated checkouts:** Shop Pay, Apple Pay and Google Pay do not work.
- **Local payment methods:** Klarna and mollie iDEAL | Wero cannot be used. More: [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland).
- **Sales channels:** only the Online Store and Custom Storefront.
- **No mixing:** one product can have several purchase options, but customers cannot combine them in a single checkout. A subscription product cannot be pre-ordered.
- **Discounts:** "Buy X get Y" is not supported (see [Shopify discount code or automatic discount](/blog/shopify-rabattcodes-automatische-rabatte)).
- **Shop Promise** is not supported.
- **Bundles:** according to the help they are not compatible with purchase options such as pre-orders (see [Creating Shopify bundles](/blog/shopify-bundles-erstellen)).

## At checkout: deposit and due date

With a deposit, the amount due is shown in the order summary and the rest is due later. In the **Payment** step the customer has to confirm they are buying a product with a purchase option. Without that agreement the purchase cannot be completed.

For several pre-orders in the cart, the help gives fixed rules:

- **Specific due dates:** the earliest date applies to all products. If a shirt is due June 3 and a book June 7, both are due June 3.
- **Due on fulfillment:** this term takes priority over specific dates.
- **Deposits:** they are combined and charged at checkout.

## Managing orders

According to the help:

- **Changing the payment method:** if a later charge fails, send a link to update the card from the customer profile, or replace the card.
- **Bank confirmation:** if the customer's bank asks for confirmation of the later charge, Shopify sends the customer an email with a link.
- **Holding fulfillment:** an unfulfilled order can be put on **hold**.
- **Filtering:** the "Unfulfilled" and "Unpaid" tabs in the orders list show open pre-orders.
- **Editing:** you can change quantity and discounts, remove a product and add a one-time purchase. A new pre-order product cannot be added.
- **Collecting early:** if the goods are ready earlier, collect the remaining amount early by invoice or the stored card. The help warns: announce it clearly, or a chargeback may follow.
- **Inventory:** depending on the app it is reserved at the time of sale or at fulfillment.
- **Cancelling and refunding:** a partially paid, unfulfilled order can be cancelled. Once fulfilled, only a full or partial refund is possible. After that you may also need to cancel the order in the pre-order app.

## What the help does not answer here

The help does not say **which pre-order app** suits your store, how high a deposit should be or whether pre-orders raise demand with your customers. Ask your lawyer how delivery time, withdrawal and deposits must be stated under the law. Background is in [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien).

## Examples from practice

I have no published project case with pre-orders. Closely related is [Reserve Kava](/projects/reserve-kava), an instant kava brand: I built one buy box for the product page with a one-time purchase and a monthly subscription. Which purchase options should come together has to be clear before building.

## Before you start: a checklist

1. Do you use **Shopify Payments or PayPal Express**?
2. Is the checkout **not customised**?
3. Can your customers do without **Klarna, Shop Pay, Apple Pay and Google Pay**?
4. Is the **delivery date** reliable, and what happens if it slips?
5. Full amount, **deposit** or payment later?
6. Is **inventory** reserved at the sale or at fulfillment?
7. Can the product do without a **subscription or bundle**?
8. Have you placed a **test order** with a later payment and a cancellation?

## When a developer helps

You can install and configure the pre-order app yourself. Help is worthwhile in three cases:

- The checkout first has to move off `checkout.liquid` so pre-orders become possible.
- Product page, purchase options and delivery-time notes have to fit together (see [Customizing a Shopify theme](/blog/shopify-theme-customization)).
- Payment methods and markets need replanning (see [Shopify Markets](/blog/shopify-markets-mehrere-laender)).

After that the setup belongs in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Do I need an app for pre-orders?** Yes, according to the help a pre-order app from the App Store.

**Can a customer pre-order with Klarna or Shop Pay?** Not according to the help. Apple Pay and Google Pay do not work either.

**Does the full amount have to be paid right away?** No. Depending on the option, the full amount, a partial amount or nothing is collected.

**What applies if I cannot deliver on time?** The help requires a revised ship date and a note on the right to cancel or get a refund.

**What does the setup cost?** That depends on the scope.

## What about your store?

Send me your store's address for the [free store check](#contact). I tell you what stands out from the outside, without access to your account. More under [Services](/services).

**Further reading:** [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions) · [Creating Shopify bundles](/blog/shopify-bundles-erstellen) · [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland) · [Customizing Shopify email notifications](/blog/shopify-email-benachrichtigungen) · [Managing inventory in Shopify](/blog/shopify-lagerbestand-verwalten) · [Shopify try before you buy](/blog/shopify-try-before-you-buy)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
