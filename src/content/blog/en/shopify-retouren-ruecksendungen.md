---
publishedAt: 2026-11-21
title: "Setting up Shopify returns: return rules, return requests and refunds without the chaos"
seoTitle: "Shopify returns and refund policy: return rules and refunds"
date: 21 November 2026
readingTime: 7 min
excerpt: "Setting up Shopify returns: return rules and refund policy under Settings > Policies, a 14-day window, self-serve return requests, refunds, store credit and exchanges."
image: /og/projects/orska-rituals.jpg
topic: build
tags:
  - Shopify
  - Returns
  - Store management
---

Returns are part of selling online in Germany, if only because of the right of withdrawal. Shopify has its own tools for them: return rules, self-serve return requests, returns in the admin and refunds. Many stores use only the "Refund" button and handle the rest by email. This article shows what Shopify can do without an app and where the limits are for stores in Germany. The source is the Shopify Help Center, as of November 2026. This is not legal advice.

## Return rules: the frame for every return

The rules live under **Settings > Policies** in the **Return and cancellation rules** section. There you turn on **Return rules** and set:

- **Return window:** no returns, 14, 30 or 90 days, unlimited or a custom number of days. The window starts at delivery of the item or at delivery of the last item in the order. A checkbox extends it over weekends and holidays.
- **Return shipping cost:** free return shipping, a flat fee per return, or the customer buys their own return label.
- **Restocking fee:** a percentage of the return. Important: according to the Help Center, Shopify does **not deduct this fee from the refund automatically**. Someone on your team has to do it by hand.
- **Final sale:** collections or products that cannot be returned. Bundles cannot be marked as final sale.
- **Different windows** for single collections, products or variants. If an item falls under several, the shortest applies.

Changes only apply to future orders. The rules also apply when you create returns by hand. For several countries you can set rules per market, more on that in [Shopify Markets](/blog/shopify-markets-mehrere-laender).

### What the Help Center recommends for the EU

The Shopify Help Center gives EU merchants concrete settings: a window of at least 14 days, starting at delivery of the last item, the weekend and holiday extension turned on, and cancellation possible until the order ships. It also mentions EU Directive 2023/2673: since 19 June 2026, customers must be able to exercise their withdrawal electronically. Shopify itself says the tools **do not automatically make a store compliant**.

My advice: the return rules in Shopify, your withdrawal notice (Widerrufsbelehrung) and your refund policy must say the same thing. Settle the window, return shipping costs and exceptions such as sealed hygiene products with your legal text provider. Where those texts sit in the store is covered in [Shopify legal texts and policies](/blog/shopify-rechtstexte-richtlinien).

## Letting customers request a return

Instead of emailing, customers can request a return themselves in their customer account. You turn this on under **Settings > Customer accounts**, depending on the store under **Order actions** or with the **Self-serve returns and cancellations** toggle.

What you should know:

- It only works with the **new customer accounts**. Legacy customer accounts show no return option.
- The customer needs no password: they enter their email and get a six-digit code.
- Only fulfilled items can be requested, at most 250 line items per request. Customers cannot request an **exchange** this way.
- You get a notification, review the request in the admin and approve or decline it. When approving you can add return instructions or a label; when declining you can edit the message first.
- The customer gets three emails: request received, approved, declined. The templates are under **Settings > Notifications > Returns**. Check that they describe how you actually handle returns. How to edit templates is in [Shopify email notifications](/blog/shopify-email-benachrichtigungen).

## Creating a return in the admin

If a return comes in by email or phone, you create it yourself: **Orders**, open the order, **Return**. Then pick the quantity and **Return reason**, adjust the fee and return shipping if needed, choose the return shipping option and click **Create return**.

Return reasons depend on the product category, for clothing for example "too big" or "too small". They feed the analytics, for example the report on top returned products with reasons. A refund without a return records no reason. If you want to analyse returns, always create them as a return, not just a refund.

When the parcel arrives, click **Process return**. For each item you choose whether, and at which location, it goes back into stock. How stock and locations fit together is in [managing inventory in Shopify](/blog/shopify-lagerbestand-verwalten).

## Return labels: the limit for stores in Germany

According to the Help Center, you can only buy return labels directly in Shopify when the store location and the customer are **in the same country** and **that country is the United States or Canada**. For a store in Germany that leaves:

- **Upload a label:** you create the label with your carrier or a shipping app and upload it to the return as a PDF, PNG, JPEG or link, with the tracking number.
- **No label:** the **No shipping required** option, the customer sends the parcel back themselves.

Stores with many returns usually end up with a shipping or returns app here. Which one fits depends on your carrier. The basics of profiles and rates are in [setting up Shopify shipping](/blog/shopify-versand-einrichten).

## Refunds, store credit and exchanges

You refund via **Refund** on the order or while processing the return. The options are:

- **Original payment:** back to the original payment method.
- **Store credit:** a balance in the store, optionally with an expiry date. The Help Center notes that countries have different laws on store credit expiry. With a statutory withdrawal, customers expect their money back, not credit. Store credit suits voluntary returns better.
- A mix of both, including partial refunds. Shipping can be refunded up to the amount charged.

Two things that often surprise people: a refund **cannot be cancelled** once it has been issued. And with Shopify Payments, according to the Help Center, you do not get the card fees of the original payment back. Which payment methods are common in Germany is covered in [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland).

You create an **exchange** in the admin, inside the return: in the **Exchange items** section you add the new product. Custom items cannot be added there, and stock for the exchange item is only reserved when the return is processed. If the new item costs more, Shopify can send the customer an invoice.

## Checklist

1. Return rules on, window matching your withdrawal notice?
2. Return shipping costs the same in Shopify, the withdrawal notice and the refund policy?
3. Exceptions (final sale) set up and explained in your legal texts?
4. New customer accounts active, return requests turned on?
5. Emails under Notifications > Returns in German and matching your process?
6. Return label route decided: upload, app or no label?
7. Who deducts fees by hand, who checks the goods, who refunds?
8. Returns always created as returns so reasons show up in reports?

## How I handle it

I do not have a returns case with documented figures in my portfolio. My part is the setup in the store: return rules and policies, new customer accounts, German texts for the return emails, final sale collections and, where needed, choosing and connecting a returns app. I do not write legal texts; those come from your provider or lawyer. In the admin I work through a collaborator account with limited permissions.

## Frequently asked questions

**Where is the refund policy in Shopify?** Under Settings > Policies, the same place as the return rules. The return rules, your withdrawal notice and the refund policy should say the same thing: window, return shipping costs and exceptions.

**Do I need a returns app?** Not for simple cases: Shopify handles rules, requests, returns and refunds itself. An app mainly pays off for return labels in Germany and for high return volumes.

**Why don't customers see a return button?** Usually the store still runs legacy customer accounts, or the option is not turned on under Customer accounts.

**Is the restocking fee deducted automatically?** No. Shopify shows it on the return; you deduct it yourself when refunding.

**Can I give store credit instead of money?** Technically yes, via store credit. Whether that is allowed depends on the reason for the return; with a statutory withdrawal it usually is not.

**Do returned items go back into stock?** Only if you choose a restock location while processing the return.

## Still handling returns by email?

Send me your store's address for the [free shop check](#contact): I will tell you whether your refund policy, footer and customer account look consistent from the outside. Setting up rules, customer accounts and emails fits [Shopify support and maintenance](/services/shopify-betreuung).

**Read next:** [Shopify try before you buy](/blog/shopify-try-before-you-buy) · [Shopify gift cards and vouchers](/blog/shopify-geschenkkarten-gutscheine) · [Shopify invoices and order documents](/blog/shopify-rechnung-bestelldokumente)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
