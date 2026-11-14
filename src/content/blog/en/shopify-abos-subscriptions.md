---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Setting up Shopify subscriptions: requirements, payment methods, customer portal and common pitfalls"
date: 23 October 2026
readingTime: 8 min
excerpt: "Setting up Shopify subscriptions: what the free Shopify Subscriptions app does, which payment gateways and themes you need, when a developer helps."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Subscriptions
  - Payment methods
  - Product pages
---

"Customers should receive our product regularly without ordering again every time." That is a subscription. Setting up Shopify subscriptions starts with a free app made by Shopify. Payment gateway, theme, checkout notices and shipping all have to fit together.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus and features change, so check your admin. I do not name prices. This is only about the technology. Which details on term, price, cancellation and withdrawal are legally required is a question for your legal adviser.

## What a subscription is in Shopify

The help lists subscriptions as one of three "purchase options", next to pre-orders and try-before-you-buy. Customers buy a product at an agreed price on a fixed schedule, such as daily, weekly or monthly.

Without a subscription app there is no subscription. The help names two ways:

- **An app from the Shopify App Store** that is integrated with the checkout, including the free **Shopify Subscriptions** app made by Shopify.
- **A custom solution built on the subscription API.** According to the help this requires experience working with APIs.

For billing the help distinguishes "pay-as-you-go" (customers pay on an ongoing basis, for example monthly) and "pre-paid" (one advance payment for a set number of months).

## What the Shopify Subscriptions app can do

According to the help you can use it to:

- create auto-billed subscriptions that renew weekly, monthly or yearly
- modify, skip, pause and cancel plans and contracts
- apply discounts to subscription products (percentage, amount, buy X get Y or fixed price)
- show a subscription widget in the shop and subscription details on the product, cart and thank-you pages
- send email notifications to customers
- monitor active, paused and cancelled subscriptions

You create a **subscription plan** under **Apps** > **Subscriptions** > **Plans** > **Create plan**. According to the help you set:

- the title and internal description
- the products and an optional discount
- the delivery frequency (week, month or year)
- a specific billing day
- a maximum number of orders after which the subscription ends automatically

Plans can also be managed from a product's page in the admin.

## Requirements

This is where most pitfalls are. According to the help:

- **Payment gateway:** your shop needs a supported gateway. Named are Shopify Payments, PayPal Express, Authorize.net, Adyen and Stripe. Availability depends on region and the gateway's terms. Stripe is available only to select merchants.
- **Customer payment method:** customers generally need a payment method that can be billed on a recurring basis. Local, manual or non-credit-card payment methods might not be available for subscriptions. The help does not say whether your method works. More in [Payment methods in Shopify for Germany](/blog/shopify-zahlungsarten-deutschland).
- **Theme:** the theme has to be compatible with sections and blocks. The help names Online Store 2.0 themes built by Shopify, the Horizon themes, Debut from version 15.0 and Brooklyn from version 17.0. For other themes ask the theme's developer.
- **Sales channels:** subscriptions are supported only on the Online Store, Shopify POS, the Shop channel and custom storefronts. Subscription-only products without a one-time purchase option can be sold only on the Online Store.
- **Draft orders:** subscriptions cannot be used with draft orders.
- **Bundles:** they are not compatible with the Shopify Subscriptions app. More in [Creating Shopify bundles](/blog/shopify-bundles-erstellen).
- **Order edits API:** it does not support subscriptions.
- **Permissions:** staff need a role with the apps and sales channels permission.

## Subscription widget and product page

According to the help you add the **Subscription widget** block under **Product information** in the theme editor. With Online Store 2.0 themes the widget should be switched off under **App embeds** so it displays correctly. Per product you decide whether it is sold **only as a subscription** or also as a one-time purchase. How it fits into the buy box depends on the theme, see [Customizing a Shopify theme](/blog/shopify-theme-customization).

## Checkout, shipping and notices

**First and recurring deliveries:** at checkout customers choose the shipping method for the first delivery. For the following ones the help says the least expensive available method applies. Recurring shipments are billed and fulfilled separately. On shipping profiles: [Setting up shipping in Shopify](/blog/shopify-versand-einrichten).

**Billing:** according to the help the customer is billed on the day after the subscription is due, at 10:00 am in your store's local time.

**Checkout notice:** if the cart contains a subscription, the checkout shows a mandatory notice about the automatically renewing payment. According to the help it **cannot be removed on any plan**. What you can edit:

- "subscription agreement" and "consent text": Shopify Plus merchants only
- cancel text, cancellation instructions and cancellation policy (under **Settings** > **Policies**): merchants on all plans

The help advises having custom wording legally reviewed first. More on the checkout: [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen).

**Cancellation policy:** with the first subscription, Shopify adds a policy for cancellation. If it is empty, customers see a template. Customers have to agree to it at purchase. More: [Store policies and legal texts in Shopify](/blog/shopify-rechtstexte-richtlinien).

**Discounts and gift cards:** automatic discounts can be applied to subscription orders. Shopify Scripts that discount subscription costs or shipping apply only to the first payment, according to the help, and so do gift cards.

## The customer portal

Customers manage their subscription in their customer account. According to the help they can:

- change payment details and the shipping address
- pause, resume or cancel subscriptions
- skip upcoming orders and view past ones

Sign-in uses the email address and a six-digit code, without a password. A cancellation cannot be undone, according to the help. Anyone who only wants a break pauses the subscription.

So that customers find the management, you add blocks in the checkout and accounts editor: a separate **Subscription management** page, action buttons on the **Order** and **Order status** pages and a link on the thank-you page.

According to the help, Shopify Subscriptions sends a reminder email three days before each recurring charge. Subscriptions managed by a third-party app follow that app's own notification schedule.

## When cards expire

With Shopify Payments, saved card details are updated automatically through the card networks, according to the help. This reduces failed payments. Support is widespread in the United States and varies internationally. With other gateways customers may have to update their details themselves. Clarify that with the gateway.

## What the help does not answer here

The help pages do not say **which products suit a subscription**, how large a subscription discount should be or how many customers keep a subscription. On fees, they only say that the app may involve additional fees depending on the setup. Check that with the app itself.

## Examples from practice

For [Reserve Kava](/projects/reserve-kava), an instant kava brand, I built a buy box for the product page with a one-time purchase and a monthly subscription. According to the help, Shopify bundles cannot be combined with subscriptions. So it has to be clear before the start which purchase options come together on the product page.

## Before you start: a checklist

1. **Model:** pay-as-you-go or pre-paid, and which products?
2. **App:** Shopify Subscriptions, a third-party app or a custom solution?
3. **Payment:** gateway supported, payment methods billable on a recurring basis?
4. **Theme:** compatible, subscription widget in the right place?
5. **Bundles, draft orders, order edits:** limits checked?
6. **Cancel text and policy:** maintained and legally reviewed?
7. **Real test order:** checkout notice, confirmation email, customer portal, first follow-up delivery.

## When a developer helps

You can create a simple subscription plan yourself in the app. Help is worthwhile when:

- the subscription should be built into the product page, for example with single, multiple and subscription choice
- theme and widget do not fit together
- an existing subscription system is to be migrated
- checkout and customer account have to be adapted

After that the setup belongs in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Do I need an app for subscriptions?** Yes, or a custom solution built on the API. Shopify Subscriptions is free.

**Can I combine subscriptions with bundles?** According to the help, not with the Shopify Subscriptions app.

**Which payment gateways do I need?** Shopify Payments, PayPal Express, Authorize.net, Adyen or Stripe. Stripe only for select merchants.

**Can customers cancel their subscription themselves?** Yes, in their customer account. A cancellation cannot be undone, according to the help. Pausing is possible.

**Can I remove the subscription notice in the checkout?** No, not on any plan. Individual parts can be edited, some only with Shopify Plus.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only check publicly visible data, without access to your account. What else I do for stores is under [Services](/services).

**Further reading:** [Creating Shopify bundles](/blog/shopify-bundles-erstellen) · [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland) · [Setting up pre-orders in Shopify](/blog/shopify-vorbestellung-preorder) · [Setting up Shopify gift cards](/blog/shopify-geschenkkarten-gutscheine) · [Customizing Shopify email notifications](/blog/shopify-email-benachrichtigungen) · [Setting up Shopify product variants](/blog/shopify-produktvarianten-optionen) · [Shopify try before you buy](/blog/shopify-try-before-you-buy)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
