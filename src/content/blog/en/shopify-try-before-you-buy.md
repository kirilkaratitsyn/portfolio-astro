---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Shopify try before you buy: test first, pay later – requirements, limits and managing orders"
date: 23 October 2026
readingTime: 6 min
excerpt: "Try before you buy in Shopify: payment providers, checkout limits and how to manage payment dates, cards, refunds and cancellations."
image: /og/projects/jula-bloom.jpg
topic: build
tags:
  - Shopify
  - Try before you buy
  - Purchase options
  - Payments
---

"Customers hesitate over an expensive piece because they cannot try it on. Can I send it and charge them later?" Shopify calls this try before you buy, TBYB for short. The purchase option comes with a list of requirements, and some hit German stores directly, for example with payment methods.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus and restrictions change, so check your admin. Menu names are taken from the English interface. This is only about the technology. Clarify consumer law with a lawyer.

## What TBYB is

Shopify knows three purchase options beyond "buy, pay and ship now": subscriptions, pre-orders and try before you buy. With TBYB, customers order without paying right away. You ship as usual. Customers pay at a set later date, after trying the product. According to the help, you can create a full authorization on the payment method before shipping, to make sure the customer can pay later.

## It does not work without an app

According to the help, you need a **TBYB app** from the Shopify App Store. After setup there, the purchase option details appear in the admin, on the product page and in the orders list.

If the app is uninstalled, the data created there (excluding customers' payment information) is deleted after 48 hours. If the app has a backup, it can be restored later. The help does not say which app fits. The cost depends on the app.

## Requirements and restrictions

According to the help:

- You need **Shopify Payments**, **Adyen on Shopify** or Stripe (available only to some merchants).
- **No accelerated checkouts** such as Shop Pay, Apple Pay or Google Pay.
- **No local payment methods** such as Klarna or iDEAL | Wero. More: [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland).
- No TBYB with a **customized checkout**. On that: [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen).
- No **local delivery** and no **pickup in store**.
- Sold only on the **Online Store** and **Custom Storefronts**.
- **Buy X get Y** discounts are not supported.
- Purchase options **cannot be combined** on one product: there is no subscription to try first.
- **Shop Promise** only if the product ships immediately.
- You must give customers the key information at purchase, including **when they will be charged** if the item does not come back.

## Setting up in the admin

After setup in the app:

- **Product:** if a product or a variant has the TBYB option, the app shows details in the product description. Under **Products**, on the product: with **Only show this product with these purchase options** you sell it only with the purchase option. Without the check it is also available as a one-time purchase. On variants: [Setting up Shopify product variants](/blog/shopify-produktvarianten-optionen).
- **Checkout:** the app shows the purchase option details, for example the length of the trial period. In the **Payment** step customers have to confirm that they are buying a product with a purchase option. Otherwise they cannot complete the purchase.
- **Several due dates:** if products in one order have different payment dates, all deferred payments become due on the earliest date. The help's example: a T-shirt due June 3 and a book due June 7, both are due June 3.

## Managing orders and payments

- **Unpaid orders:** under **Orders** filter by **Unpaid**.
- **Changing the payment date:** according to the help, through the payment terms for deferred payments (Due on receipt, Due on fulfillment, Net 7 to Net 90, fixed date). If an order is not paid by the due date, the status becomes **Overdue**.
- **Collecting early:** you can send an invoice or enter the card (**Collect payment**). According to the help, a **chargeback** is possible if the customer is not expecting the charge. Announce it clearly.
- **Updating the card:** under **Customers**, on the customer, in **Payment methods** choose **More actions**. There are **Send link to update card**, **Replace card** (not for all payment methods) and **Delete card**.
- **Bank confirmation:** the customer's bank can challenge later charges. The customer then confirms the payment through a link that Shopify sends by email.
- **Canceling and refunding:** you can cancel an unfulfilled TBYB order. A fulfilled one cannot be canceled, but you can refund fulfilled items in full or in part. If the customer cancels, you may still have to refund manually, and a message shows on the order. When you refund, you may also need to cancel the order in the TBYB app.

On invoices and documents: [Invoices and order documents in Shopify](/blog/shopify-rechnung-bestelldokumente).

## What the help does not answer here

The pages I read say nothing on **which app** to choose, how long the trial period may be, how returns are handled and what applies to customers who do not pay. The effect on conversion rate and returns is missing too. Clarify the legal side (withdrawal, payment deadlines, mandatory information) with a lawyer, more on mandatory texts: [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien).

## Examples from practice

None of my published projects uses try before you buy. Closest is the subscription option I built at [Reserve Kava](/projects/reserve-kava). Subscriptions follow different rules than TBYB.

## Before you start: a checklist

1. Does your store meet the requirements for **payment provider, checkout and delivery**?
2. Which **TBYB app** fits, and is its setup finished?
3. Are the **trial period** and the **charge date** clearly visible at purchase?
4. Who **checks unpaid orders** and when?
5. How do **returns, refunds and cancellations** work, in the app as well?
6. Are **legal questions** clarified with a lawyer?

## When a developer helps

You set up the purchase option yourself with an app. Help is worthwhile here:

- The checkout is customized and still has to work with TBYB.
- Texts about the trial period should show in the theme, on the product page or in emails.
- Orders are reconciled with your warehouse or accounting.
- Several purchase options run side by side.

Related: [Customizing a Shopify theme](/blog/shopify-theme-customization), [Customizing Shopify email notifications](/blog/shopify-email-benachrichtigungen) and [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Do I need an app?** Yes, according to the help a TBYB app from the App Store.

**Can I offer PayPal or Klarna?** Local payment methods such as Klarna are excluded. The pages I read do not mention PayPal.

**Does TBYB work with Shop Pay or Apple Pay?** No, according to the help.

**Can I charge earlier?** Yes, by invoice or stored card. Without an announcement a chargeback is possible, according to the help.

**Can I cancel a fulfilled order?** No, but you can refund in full or in part.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only check publicly visible data such as load time, apps in the source code and page structure, without access to your account. More under [Services](/services).

**Further reading:** [Setting up pre-orders in Shopify](/blog/shopify-vorbestellung-preorder) · [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions) · [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland) · [Setting up Shopify returns](/blog/shopify-retouren-ruecksendungen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
