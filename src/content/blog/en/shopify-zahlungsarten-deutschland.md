---
publishedAt: 2026-10-23
title: "Shopify payment methods in Germany: Shopify Payments, PayPal, Klarna and what to settle first"
date: 23 October 2026
readingTime: 7 min
excerpt: "Which payment methods Shopify Payments includes in Germany, where PayPal and third-party providers come in, what bank transfer in advance means and which requirements to settle before launch."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Payment methods
  - Checkout
  - Klarna
---

"Which payment methods does my store need, and how do I get them in?" This question comes up before launch and again when customers ask for invoice, PayPal or Klarna. The good news: on Shopify, payment methods are switched on in the settings, usually without code. The less good news: there are three different routes, and they cannot be mixed freely. This text sorts them out for store owners without a technical background.

## A note first

All statements about features and conditions come from the Shopify Help Center, as of October 2026. Shopify changes providers, country lists and conditions from time to time, so check important points again in your admin and in the Help Center before deciding. I do not name fees here: according to Shopify, they depend on your plan with Shopify Payments and on the provider's terms with others. I also do not cover legal and tax questions (for example mandatory information in the order process); a lawyer or tax adviser is the right address for those.

## The three routes at a glance

1. **Shopify Payments:** Shopify's own payment processing, managed in your admin.
2. **Third-party providers and PayPal:** another provider for credit cards, and PayPal as a payment method of its own.
3. **Manual payment methods:** for example bank transfer in advance or cash on delivery, where you match the money yourself.

For many stores the first route plus PayPal is enough. When the others make sense is covered below.

## Shopify Payments in Germany

According to the Shopify Help Center, these come without further setup in Germany:

- **Credit and debit cards:** American Express, Maestro, Mastercard, UnionPay and Visa. They are activated automatically when you switch on Shopify Payments.
- **Accelerated checkouts:** Apple Pay, Google Pay and Shop Pay, also active automatically.

On top of that there are **local payment methods**, which you activate yourself under Settings > Payments. They are shown at checkout based on your customer's location, not your store's location. A store in Germany can therefore show different options depending on the customer's country. For Germany the Help Center lists, among others, Klarna, Bancontact (Belgium), BLIK and Przelewy24 (Poland), EPS (Austria), iDEAL | Wero (Netherlands), TWINT (Switzerland) and more.

### Klarna

Klarna is a topic for many German merchants. According to Shopify, customers can pay immediately, by invoice, or in installments by direct debit or credit card; the money arrives with your next Shopify Payments payout, and the customer settles the rest with Klarna. Which Klarna options appear at checkout depends, per the Help Center, on the country of your Shopify Payments account, the customer's location and the chosen currency. Whether "buy on invoice" is actually offered in your store is therefore something you only see by checking it in your store.

### iDEAL | Wero: a hurdle that is easy to miss

If you want to serve customers in the Netherlands: according to the Help Center, you must have processed at least 100 orders with Shopify Payments in Germany before you can activate iDEAL | Wero. For a new store that means not planning it for launch day.

### What is not on the list

The Help Center page "Customer payment methods with Shopify Payments in Germany" lists neither PayPal nor SEPA direct debit as a Shopify Payments method. PayPal works on Shopify through a route of its own (below). For SEPA direct debit the help pages I checked say nothing, so I claim nothing here: if you need it, ask Shopify Support or check your admin.

## Requirements worth settling before launch

For Shopify Payments in Germany, the Help Center requires, among other things:

- an **eligible business type**: certain businesses are excluded in the Shopify Payments terms of service, so check there before you invest a lot of time in the store;
- a **bank account** in euros that is eligible for SEPA transfers and has an IBAN from a supported country. Not supported are, among others, savings accounts, accounts that accept only wire transfers, accounts that hold several currencies at once, and fintech services that merely imitate a bank account;
- **personal and business details** for the verification that Shopify and its banking partners must carry out under rules against financial crime. Further details may be requested later;
- **two-step authentication** on your Shopify account, which is required for Shopify Payments (more on access: [Shopify maintenance](/blog/shopify-wartung-betreuung)).

The practical advice: submit the verification early, not the day before launch. I cannot predict when your account will be approved.

## PayPal

According to the Shopify Help Center, every new store automatically gets a PayPal Express Checkout account; Shopify asks for your email address for it and shares it with PayPal. You should complete the setup promptly, or deactivate PayPal in the payment settings if you do not want to use it. Only the store owner can edit the PayPal details.

On costs the Help Center says: third-party transaction fees apply to all transactions through third-party and alternative payment providers, even when Shopify Payments is active. If Shopify Payments is your main provider, PayPal transactions are exempt. The actual fees for your location are on Shopify's pricing page or with support.

## Third-party providers instead of Shopify Payments

If Shopify Payments is not an option for you (for example because of your business type, or because you already have a payment provider), Shopify offers over 100 credit card providers according to the Help Center. One important difference:

- With **direct providers**, your customers pay directly in your store.
- With **external providers**, they go to a checkout page outside your store to pay.

You can use a third-party provider alone or together with Shopify Payments. In the second variant the third-party provider handles cards, and Shopify Payments handles additional methods such as Shop Pay and local payment methods. Restrictions apply: only one direct third-party provider can run alongside, retrying failed payments applies to cards only, and subscription payments run through the third-party provider by default. Check these points in the Help Center before you plan such a setup.

## Manual payment methods: advance payment, cash on delivery

For customers who do not want to pay online, Shopify knows manual payment methods such as bank transfer in advance or cash on delivery. It works like this: the customer orders, the order shows as **unpaid** in the admin, you send an invoice if needed, and once the payment arrives you **mark it as paid by hand** and ship. According to the Help Center, no third-party transaction fees apply to these. The price is the effort: you have to match incoming payments yourself. For business customers this can fit, see [Shopify B2B and wholesale](/blog/shopify-b2b-wholesale).

## Do you also sell abroad?

Then note: the payment methods at checkout depend on the customer's location, and some are tied to country and currency (EPS, for example, to Austrian customers paying in euros, TWINT to customers in Switzerland paying in CHF). How this fits with currencies and markets is covered in [Shopify Markets: selling to several countries](/blog/shopify-markets-mehrere-laender).

## A simple checklist before launch

1. Business type checked against the Shopify Payments terms of service?
2. Bank account: euro, SEPA, right account type?
3. Documents for verification ready and submitted early?
4. Two-step authentication switched on?
5. PayPal set up, or deliberately deactivated?
6. Every activated payment method looked at on a smartphone up to the payment choice?
7. For manual methods: who matches incoming payments, and when?

## When a developer helps

For switching on payment methods you usually need none. Help is worthwhile if a payment method does not appear and you cannot find the cause, if an existing store is to change its payment provider (for example when moving from another system, see [WooCommerce to Shopify](/blog/woocommerce-to-shopify)), or if several markets and currencies come together. Who is responsible for what is explained in [Shopify help: when the Help Center is enough](/blog/shopify-help).

## Frequently asked questions

**Do I have to use Shopify Payments?** No. According to the Shopify Help Center you can also use third-party providers. Third-party transaction fees then apply to those transactions.

**Can I offer PayPal and Shopify Payments at the same time?** Yes. If Shopify Payments is your main provider, PayPal transactions are exempt from third-party transaction fees according to the Help Center.

**Is there buy on invoice?** The Help Center names invoice as one Klarna option; whether it is shown to you depends on country, customer location and currency. Check it in your store.

**What do the payment methods cost?** That depends on the plan and the provider. I do not name amounts here.

## How is your store doing?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, such as load time, apps in the page source and the structure of the pages, and tell you what stands out. I only work with publicly visible data, without access to your account. What I do for stores is under [Services](/services).

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
