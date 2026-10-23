---
publishedAt: 2026-10-23
title: "Setting up Shopify gift cards: selling them, creating them yourself and the limits to know first"
date: 23 October 2026
readingTime: 8 min
excerpt: "Gift cards in Shopify: gift card product versus a card created in the admin, maximum values, currencies, redeeming at checkout, refunds and typical pitfalls."
image: /og/projects/jula-bloom.jpg
topic: build
tags:
  - Shopify
  - Gift cards
  - Vouchers
  - Checkout
---

"Customers keep asking for a voucher they can give as a gift." That is often the moment merchants look into gift cards. Shopify has them built in. Still, there are differences worth knowing first: whether the card is sold or created by you, which maximum values apply, how currencies and refunds work. This article shows what the Shopify Help Center says, for merchants without a technical background.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus, fees and limits change, so check your admin. I do not name prices for apps or development. Whether and how gift cards are taxed and how long they must stay valid is a question for your tax advisor or lawyer. The help itself says the rules differ by region. This article is only about the technology.

## Two ways: sell them or create them yourself

The help distinguishes two ways to produce a card:

- **Gift card product:** you create a product that customers buy in your store. The card is created when you fulfill the order with that product (by default automatically once the order is paid).
- **Card created in the admin:** you create a card of any eligible value without anyone paying. That suits promotions, rewards, refunds as store credit, or a custom amount a customer paid for beforehand through a draft order.

The recipient gets a digital card with a unique code, which they redeem at checkout. If you sell cards in a physical store, you can order printed cards for Shopify POS in supported countries. According to the help, cards created in the admin and in POS are interchangeable: someone who buys a card in person can redeem it in the online store.

## Maximum values and fixed amounts

From the help on values:

- The value is always an amount of money greater than zero.
- A **gift card product** has fixed amounts (denominations). Customers **cannot enter a free amount** in the store. The maximum per denomination is $10,000 USD or the equivalent in the card's currency, and it cannot be raised.
- A card **created in the admin** can be worth up to $2,000 USD or the equivalent. Shopify Support can raise or lower this limit after a review.
- If a customer wants an amount that is not offered as a denomination, the help names a way: create a **draft order** for that amount, and after the invoice is paid create the card in the admin and send it to the customer.

When you first create a product, Shopify generates several default denominations in your store currency. You can replace, add or delete them, but at least one must remain. Each denomination is a variant of the product.

## Creating a gift card product

In the admin under **Products > Gift cards** you create a product: title, description, image, currency, publishing and optionally collections and tags. The help lists a few points that are easy to miss:

- **Currency:** cards in the store currency can be redeemed in any currency. Cards in a **local currency** only when the checkout currency matches, unless **cross-currency redemption** is turned on. That setting cannot be changed after the product is created.
- **Markets and catalogs:** for local currencies, markets and catalogs with the matching price list must be set up. Such cards are not published to catalogs by default, you have to do that yourself. More on markets in [Shopify Markets: selling in several countries](/blog/shopify-markets-mehrere-laender).
- **No compare-at price for discounts:** the "Compare-at price" field is not meant for discounting gift cards. Use discount codes or automatic discounts.
- **Collection discounts do not apply:** a discount on a collection does not apply to gift card products in that collection. Discounts must target the product or variant directly.

Editing, archiving or deleting a product later does not change cards already issued. Customers can still redeem them.

## Discounts on gift cards

The help describes that discount codes and automatic discounts can be applied to gift card products, for example as an amount or percentage or as "Buy X get Y". What counts is the value of the card, not the price paid: with a "$100 card for $80" the customer pays 80 and the card holds 100. How discounts work in general is covered in [Discount code or automatic discount in Shopify](/blog/shopify-rabattcodes-automatische-rabatte).

## Recipient and send date

Someone giving a card as a gift usually wants to send it straight to another person. In the online store, buyers can add a recipient only if the **theme supports gift card recipient fields**. The help describes how to add them. When a recipient is set, the buyer gets a **gift card receipt** with a copy of the card, confirming who it went to or when it is scheduled to send. The recipient gets the "New gift card" notification. If the theme lacks the fields, that is a typical case for a small theme adjustment, see [Customizing a Shopify theme](/blog/shopify-theme-customization).

## Redeeming at checkout

From the help on redemption:

- The customer enters the code at checkout. Codes are not case sensitive. The field only appears when the store has active gift cards.
- If the balance does not cover the order, the customer picks another payment method, or a second card. The remaining balance stays and can be used on later orders.
- The balance applies to the whole total including taxes and shipping. With third-party or estimated taxes the total can still change after the deduction.
- Cards can be **combined with discount codes**, and several cards can be used on one order.
- On an order containing a **subscription product** the card can be used for the first payment, not for recurring payments. More in [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions).
- A gift card **cannot buy another gift card**.
- Cards can be redeemed on channels that use the Shopify checkout, such as the online store, the Shop app and Shopify POS.

To hide redemption under certain conditions, the help says you need a payment customization app. You change the wording "Apply a gift card" at checkout in the checkout language settings, without code. More on checkout limits in [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen).

## Managing cards

Under **Products > Gift cards** you see all cards. Important from the help:

- **Code:** cards are treated like money. In the admin you only see the **last four characters**, the full code only the customer sees. You do not need to keep a copy, the card works anyway. The 16-character code is random and cannot be customised.
- **Balance:** it cannot be edited directly in the admin. It goes down through redemption, up through refunds, or is adjusted via the API by a custom integration.
- **Expiry:** by default cards do not expire, because that is illegal in some countries. If you set an expiry, the default is five years, adjustable in years, months or days under **Settings > Payments**. The help warns explicitly to check your country's rules first.
- **Resend:** if a customer loses the code, you resend the card. For partly used cards only the remaining balance is sent.
- **Deactivate:** a card cannot be deleted. Deactivating is permanent, the card cannot be reactivated, reloaded or refunded to. Then you issue a new one.
- **Export:** as a CSV with the last four characters, for example for open balances. When moving to another system, the help says there is no full-code export, so new codes may have to be issued. More on moving in [WooCommerce to Shopify](/blog/woocommerce-to-shopify).
- **Between stores:** a card is valid only in the store that issued it, and there is no native way to transfer cards between stores.

## Refunds

If a card was used as payment, the refund can go to the card and the balance updates automatically. For partial refunds with mixed payment, the amount goes to the card first. The help names special cases:

- Reloading during returns and exchanges only works if the original payment went through Shopify Payments. Otherwise you create a new card for the refund amount.
- An **expired** card cannot be refunded to until you move the expiry date into the future. You can restore it afterwards.
- A **deactivated** card cannot be refunded to. Issue a new card for the refund amount.
- A **purchased** card is refunded like any product, and is deactivated automatically. Cards created in the admin cannot be refunded, since nothing was paid.

## Currencies and exchange rates

This topic is often underestimated. If you turn on cross-currency redemption for a card in a local currency, it can be used at checkout in other currencies. If the exchange rate shifts between sale and redemption, that can cost you money, according to the help. It calls it exchange rate risk and works through an example with a 100 CAD card. Anyone whose payout is in a currency other than the card's currency is directly affected. To avoid the effect, leave cross-currency redemption off when creating the card.

## Apple Wallet and notifications

Under **Settings > Payments** you can activate Apple Wallet passes. Customers then get an "Add to Apple Wallet" button in the email, can check the balance and redeem the card in store with a QR code. You adjust the "New gift card" and "Gift card receipt" emails under customer notifications. According to the help that takes HTML, CSS and Liquid knowledge. For your own card image the help recommends 950 × 550 pixels. The value and code of the card cannot be changed in the theme.

## Typical pitfalls

The help describes these cases:

- **No card is created after fulfilling.** A card is only created for a real gift card product. A regular product that is merely named like a voucher creates none. The help's fix: create the card in the admin for the order amount and send it to the customer, and set up a gift card product in future.
- **The card is not fulfilled automatically.** By default it is fulfilled once the order is paid. For medium or high risk orders it is not, and you fulfill manually from the order page. If you turned off automatic fulfillment for all items, the same applies.
- **Apple Wallet button missing.** Possible reasons: the theme lacks the code, the notification was customised and the code got lost, or the test email was sent directly from the admin. A test order includes the button.
- **Fees:** for stores created on or after May 12, 2025, the help says third-party transaction fees apply to the amount paid with a card. Amounts and details are on Shopify's fees page.

## What the help does not answer here

The help pages say nothing about **whether gift cards pay off for your range**, which denominations suit your customers or how much revenue they bring. The legal side (tax on sale or redemption, minimum validity, notices in the store) also stays open, that belongs to your tax advisor or lawyer. Background on legal texts: [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien). And what the implementation costs depends on the scope.

## Examples from practice

Among my published projects there is no store where I set up gift cards on their own. Related is [Jula Bloom](/projects/jula-bloom), a Seattle brand for silk flowers with bouquets, vases, gift cards and a mini line. In the move from WooCommerce to Shopify, preparing the gift cards was explicitly part of the work, next to the redirect map, email signup and pop-ups. How the cards are solved technically there, I do not claim here. The case only shows that gift cards have to be planned for separately when changing platforms.

## Before you start: a checklist

1. Should cards be **sold** (product) or only **handed out** (admin)? The maximum values differ.
2. Which **denominations** fit? There are no free amounts in the store.
3. Does your **theme support recipient fields** if customers should give cards as gifts?
4. Selling in several currencies: decide **local currency** and **cross-currency redemption** deliberately, publish the catalog?
5. **Expiry** set, and clarified with your tax advisor or lawyer?
6. How are **refunds** handled, especially with Shopify Payments?
7. Is the **notification email** in your style and checked with a **test order**, including Apple Wallet?
8. Is it clear how **discounts** on cards are set (not via the compare-at price)?

## When a developer helps

You create a gift card product yourself. Help is worthwhile when the theme does not support the **recipient fields**, when the **email templates** or the card page should match the brand, when cards must run cleanly across **several markets and currencies**, or when redemption at checkout should be restricted under conditions (the help points to a payment customization app for that). For issuing cards automatically after an order the help recommends Shopify Flow. After that the setup belongs in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Can the customer choose any amount?** Not in the store. There are fixed denominations. For a special amount the help names the route via a draft order and a card created in the admin.

**Can I delete a card?** No. It can only be deactivated, and that is permanent.

**Can I change the amount on a card?** Not directly in the admin. The balance changes through redemption, refunds or a custom integration via the API.

**Do gift cards expire?** Not by default. You can set an expiry, the default is five years. Check your country's rules first.

**Can a gift card pay for a subscription?** For the first payment yes, for recurring payments no.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, such as load time, apps in the source code and how pages are built, and tell you what stands out. I only work with publicly visible data, without access to your account. What else I do for stores is under [Services](/services).

**Further reading:** [Discount code or automatic discount in Shopify](/blog/shopify-rabattcodes-automatische-rabatte) · [Shopify Markets](/blog/shopify-markets-mehrere-laender) · [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
