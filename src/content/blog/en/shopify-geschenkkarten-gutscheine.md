---
publishedAt: 2026-10-23
title: "Setting up Shopify gift cards: selling them, creating them yourself and the limits to know first"
date: 23 October 2026
readingTime: 10 min
excerpt: "Setting up Shopify gift cards: gift card product or admin-created card, maximum values, currencies, checkout redemption, refunds and pitfalls."
image: /og/projects/jula-bloom.jpg
topic: build
tags:
  - Shopify
  - Gift cards
  - Vouchers
  - Checkout
---

Before setting up Shopify gift cards, you should know: is the card sold or created by you, which maximum values apply, and how do currencies and refunds work? This article shows what the Shopify Help Center says.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus, fees and limits change, so check your admin. Clarify tax and validity periods with your tax advisor or lawyer, the help says the rules differ by region. This article is only about the technology.

## Two ways: sell them or create them yourself

The help distinguishes two ways:

- **Gift card product:** customers buy it in your store. The card is created when you fulfill the order (by default automatically once the order is paid).
- **Card created in the admin:** you create a card without anyone paying. That suits promotions, rewards, refunds as store credit, or a custom amount paid through a draft order.

The recipient gets a digital card with a unique code. For Shopify POS you can order printed cards in supported countries. According to the help, a card bought in person can also be redeemed in the online store.

## Maximum values and fixed amounts

- The value is always an amount of money greater than zero.
- A **gift card product** has fixed amounts (denominations). Customers **cannot enter a free amount** in the store. The maximum per denomination is $10,000 USD or the equivalent in the card's currency, and it cannot be raised.
- A card **created in the admin** can be worth up to $2,000 USD or the equivalent. Shopify Support can raise or lower this limit after a review.
- For an amount without a denomination the help names a way: create a **draft order** for that amount, and after payment create the card in the admin and send it to the customer.

When you first create a product, Shopify generates several default denominations in your store currency. You can replace, add or delete them, but at least one must remain. Each denomination is a variant of the product.

## Creating a gift card product

You create the product in the admin under **Products > Gift cards**. These points from the help are easy to miss:

- **Currency:** cards in the store currency can be redeemed in any currency. Cards in a **local currency** only when the checkout currency matches or **cross-currency redemption** is turned on. That setting cannot be changed after the product is created.
- **Markets and catalogs:** local currencies need markets and catalogs with the matching price list. You have to publish such cards to catalogs yourself. More in [Shopify Markets: selling in several countries](/blog/shopify-markets-mehrere-laender).
- **No compare-at price for discounts:** use discount codes and automatic discounts instead.
- **Collection discounts do not apply:** discounts must target the gift card product or variant directly.

If a product is edited, archived or deleted later, cards already issued can still be redeemed.

## Discounts on gift cards

According to the help, discount codes and automatic discounts also apply to gift card products, as an amount, a percentage or "Buy X get Y". What counts is the value of the card, not the price paid: with a "$100 card for $80" the customer pays 80 and the card holds 100. Basics: [Discount code or automatic discount in Shopify](/blog/shopify-rabattcodes-automatische-rabatte).

## Recipient and send date

In the online store, buyers can add a recipient only if the **theme supports gift card recipient fields**. The help describes how to add them. With a recipient, the help says the buyer gets a **gift card receipt** with a copy of the card and the recipient or the scheduled send date. The recipient gets the "New gift card" notification. If the fields are missing, that is a small theme adjustment, see [Customizing a Shopify theme](/blog/shopify-theme-customization).

## Redeeming at checkout

- The customer enters the code at checkout, and it is not case sensitive. The field only appears when the store has active gift cards.
- If the balance is not enough, the customer picks another payment method or a second card. The remaining balance stays for later orders.
- The balance applies to the whole total including taxes and shipping. With third-party or estimated taxes the total can still change after the deduction.
- Cards can be **combined with discount codes**.
- With a **subscription product** the card covers the first payment, not recurring payments. More in [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions).
- A gift card **cannot buy another gift card**.
- Cards can be redeemed on all channels that use the Shopify checkout, such as the online store, the Shop app and Shopify POS.

Hiding redemption under certain conditions takes a payment customization app, according to the help. You change the wording "Apply a gift card" in the checkout language settings, without code. More in [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen).

## Managing cards

Under **Products > Gift cards** you see all cards.

- **Code:** in the admin you only see the **last four characters**, the full code only the customer sees. The 16-character code is random and cannot be customised.
- **Balance:** it **cannot be edited directly** in the admin. It goes down through redemption, up through refunds, or is adjusted via the API by a custom integration.
- **Expiry:** by default cards do not expire, because that is illegal in some countries. An expiry defaults to five years, adjustable in years, months or days under **Settings > Payments**. The help warns: check your country's rules first.
- **Resend:** if a customer loses the code, you resend the card, for partly used cards with the remaining balance.
- **Deactivate:** a card cannot be deleted. Deactivating is permanent: the card cannot be reactivated, reloaded or refunded to.
- **Export:** as a CSV with the last four characters. The help says there is no full-code export, so new codes may have to be issued when moving to another system. More: [WooCommerce to Shopify](/blog/woocommerce-to-shopify).
- **Between stores:** a card is valid only in the store that issued it.

## Refunds

If a card was used as payment, the refund can go to the card and the balance updates automatically. For partial refunds with mixed payment, the amount goes to the card first. Special cases according to the help:

- Reloading during returns and exchanges only works if the original payment went through Shopify Payments. Otherwise you create a new card for the refund amount.
- An **expired** card cannot be refunded to until you move the expiry date into the future. You can restore it afterwards.
- A **deactivated** card cannot be refunded to. Issue a new card for the refund amount.
- A **purchased** card is refunded like any product, and is deactivated automatically. Cards created in the admin cannot be refunded, since nothing was paid.

## Currencies and exchange rates

With cross-currency redemption, a card in a local currency can be used at checkout in other currencies. If the exchange rate shifts between sale and redemption, that can cost you money, according to the help. It calls it exchange rate risk and works through an example with a 100 CAD card. This affects anyone whose payout is in a currency other than the card's currency. To avoid it, leave cross-currency redemption off when creating the card.

## Apple Wallet and notifications

Under **Settings > Payments** you activate Apple Wallet passes. Customers then get an "Add to Apple Wallet" button in the email, check the balance and redeem the card in store with a QR code. You adjust the "New gift card" and "Gift card receipt" emails under customer notifications. According to the help that takes HTML, CSS and Liquid knowledge. For your own card image the help recommends 950 × 550 pixels. Value and code cannot be changed in the theme.

## Typical pitfalls

- **No card is created after fulfilling.** It is only created for a real gift card product, not for a regular product named like a voucher. The help's fix: create the card in the admin for the order amount and send it to the customer, and set up a gift card product in future.
- **The card is not fulfilled automatically.** For medium or high risk orders, or with automatic fulfillment turned off, you fulfill manually from the order page.
- **Apple Wallet button missing.** Possible reasons: the theme lacks the code, the notification was customised and the code got lost, or the test email was sent directly from the admin. A test order includes the button.
- **Fees:** for stores created on or after May 12, 2025, the help says third-party transaction fees apply to the amount paid with a card. Details are on Shopify's fees page.

## What the help does not answer here

The help does not say **whether gift cards pay off for your range**, which denominations fit or how much revenue they bring. The legal side also stays open: tax on sale or redemption, minimum validity, notices in the store. Background: [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien).

## Examples from practice

There is no published project where I set up gift cards on their own. Related is [Jula Bloom](/projects/jula-bloom), a Seattle brand for silk flowers with bouquets, vases, gift cards and a mini line. In the move from WooCommerce to Shopify, preparing the gift cards was part of the work, next to the redirect map, email signup and pop-ups. How the cards are solved technically there, I do not claim. The case shows that gift cards have to be planned for separately when changing platforms.

## Before you start: a checklist

1. **Sell** cards (product) or only **hand them out** (admin)?
2. Suitable **denominations** set?
3. **Recipient fields** present in the theme?
4. **Local currency**, **cross-currency redemption** and catalog decided?
5. **Expiry** clarified with your tax advisor or lawyer?
6. **Refunds** settled, especially with Shopify Payments?
7. **Notification email** checked with a **test order**, including Apple Wallet?
8. **Discounts** not set via the compare-at price?

## When a developer helps

You create a gift card product yourself. Help is worthwhile in these cases:

- The theme lacks the **recipient fields**.
- **Email templates** or the card page should match the brand.
- Cards must run across **several markets and currencies**.
- Redemption should be restricted under conditions.

For issuing cards automatically after an order the help recommends [Shopify workflow automation with Flow](/blog/shopify-flow-automatisierung). After that the setup belongs in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Can the customer choose any amount?** Not in the store, where denominations are fixed. Special amounts go through a draft order and a card created in the admin.

**Can I delete a card?** No. It can only be deactivated, and that is permanent.

**Can I change the amount on a card?** Not directly in the admin. The balance only changes through redemption, refunds or an API integration.

**Do gift cards expire?** Not by default. You can set an expiry. Check your country's rules first.

**Can a gift card pay for a subscription?** The first payment yes, recurring payments no.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, without access to your account, and tell you what stands out. What else I do for stores is under [Services](/services).

**Further reading:** [Discount code or automatic discount in Shopify](/blog/shopify-rabattcodes-automatische-rabatte) · [Shopify Markets](/blog/shopify-markets-mehrere-laender) · [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions) · [Managing inventory in Shopify](/blog/shopify-lagerbestand-verwalten)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
