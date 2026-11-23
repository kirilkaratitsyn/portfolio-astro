---
publishedAt: 2026-11-22
title: "Shopify abandoned checkouts: win back customers with a recovery email"
seoTitle: "Shopify abandoned checkout recovery: setup guide"
date: 22 November 2026
readingTime: 6 min
excerpt: "Shopify abandoned checkout recovery: where to find abandoned checkouts, how to set up the automatic email, wait time, discount code, consent in Germany and reporting."
image: /og/blog/en/shopify-abgebrochene-checkouts.jpg
topic: build
tags:
  - Shopify
  - Checkout
  - Email marketing
---

Some customers enter their email address at checkout and then leave without ordering. Shopify saves these abandoned checkouts and can send a reminder automatically. In many stores this was never set up on purpose: the email runs on old settings, in English, or not at all. This article shows what Shopify can do without an app and what stores in Germany should watch out for. The source is the Shopify Help Center, as of November 2026. This is not legal advice.

## What counts as an abandoned checkout

According to the Help Center, a checkout counts as abandoned when it stays incomplete for **more than ten minutes** after the customer has entered their email address. No email, no abandoned checkout you can recover by email. If the customer entered a phone number instead of an email, no recovery email is sent.

Further limits from the Help Center:

- Only checkouts from the **Online Store** and the **Buy Button** are covered. Shopify POS, Shop app checkouts and third-party channels get no reminder.
- For **Shopify B2B**, abandoned checkouts are off by default and can only be turned on through Shopify Support. More on B2B in [Shopify B2B and wholesale](/blog/shopify-b2b-wholesale).
- Some bot and card-testing attempts are filtered out, but not all of them. So some entries in the list still come from bots.

## Where to find abandoned checkouts

Under **Orders > Abandoned checkouts**. For each entry the list shows the **Email status** (was a reminder sent?) and the **Recovery status** (was there an order afterwards?). A click opens the checkout with its timeline, where payment errors also show up. A separate **Blocked** view lists checkouts that Shopify Payments blocked as high risk.

Important: abandoned checkouts **older than three months** are deleted automatically. You cannot delete a single entry by hand. To keep a case, the Help Center suggests creating a draft order with the same details.

## Setting up the automatic recovery email

There are two generations of this email, and many stores still run the old one.

**New automation:** under **Apps > Messaging > Automations**, choose the **Abandoned checkout** template, click **Turn on automation**, review, **Continue**. Your previous settings carry over. According to the Help Center the switch is **permanent**: you cannot go back to the old email afterwards.

In the new automation you edit the recipients (To), subject, preview text, sender and the email content. You change the wait time before sending through [Shopify Flow](/blog/shopify-flow-automatisierung): **Edit** in the automation, then adjust the workflow in Flow. If you create a second automation of this kind, it starts with a **ten-hour** wait.

**Old email (legacy):** according to the Help Center it can be used until Shopify removes it. Its settings are "Send to" (which visitors) and "Send after" (how long to wait); the text lives in the **Abandoned checkout** notification template. How to put templates into German is covered in [Shopify email notifications](/blog/shopify-email-benachrichtigungen).

No reminder is sent if the customer has ordered in the meantime, the payment failed, you don't ship to their address, no products are available any more, or they abandoned a newer checkout whose wait time is still running.

## Consent: who may receive the email

By default, the new automation sends the email **only to customers subscribed to email marketing**. In the To field you can switch this to **All customers**.

In Germany, a cart reminder is widely treated as advertising that requires consent. That makes the default the cautious setting: subscribers only. Whether you switch to "all customers" is something to settle with your lawyer or legal-text provider, not with the Shopify Help Center. Clean consent at checkout and in the cookie banner goes with it, more in [Shopify cookie banner and privacy](/blog/shopify-cookie-banner-datenschutz).

## A discount code in the reminder: yes or no

You can add a discount code to the email that is applied at checkout when the customer clicks the link. Three points from the Help Center:

- Create the code beforehand as a normal discount. No special characters in the name.
- A note like "you've received a discount" is **not added automatically**. You write that sentence into the email yourself.
- If the customer had already entered another code, the recovery code **replaces** it.

My advice: start without a discount. If every reminder comes with a discount, regular customers learn to abandon checkout on purpose. How discounts work in Shopify is covered in [Shopify discount codes and automatic discounts](/blog/shopify-rabattcodes-automatische-rabatte).

## Contacting single customers by hand

In **Orders > Abandoned checkouts**, open the checkout and click the customer's email address. Your email program opens with the link to the checkout. Careful: **anyone with the link can continue that checkout**, and the link cannot be disabled after sending. Send it only to that exact customer. This is worth it for large carts or when the timeline shows a payment error.

## Does the reminder work? How to measure it

Under **Apps > Messaging > Automations**, Shopify shows reach, sessions, orders, conversion rate and sales for the new automation. A detailed report opens from the automation's menu via **View report**. A checkout counts as recovered as soon as the customer orders, whether through the email link or on their own.

Many abandoned checkouts often point to a problem in the checkout itself: unexpected shipping costs, a missing payment method, address errors. So also look at the timeline of individual cases. What you can customise in the checkout is in [Shopify checkout customisation](/blog/shopify-checkout-anpassen); which payment methods German customers expect is in [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland).

## Checklist

1. Is the reminder running at all? Check Email status in Orders > Abandoned checkouts.
2. New automation or still legacy? Decide the switch deliberately, it is permanent.
3. Recipients: subscribers only, or all customers after a legal check?
4. Subject, text and sender in German and in your voice?
5. Wait time set to suit your products?
6. Discount: a deliberate yes or no, with an explaining sentence?
7. Report checked once a month?
8. Odd cases checked in the timeline for payment or shipping errors?

## How I handle it

I don't have a case with documented numbers on recovered checkouts in my portfolio. My part is the setup: checking or switching the automation, German texts in the store's design, the wait time in Flow, discount logic, and above all finding the causes in the checkout that make customers leave. The consent question you decide with your lawyer. In the admin I work through a collaborator account with limited permissions.

## FAQ

**Why do some abandoned checkouts have no email status?** Usually the reminder is not turned on, the customer is not a subscriber, or one of the exclusion reasons applies. The hints in the list show the reason.

**Can I send an SMS too?** The Shopify Help Center on checkout recovery only describes email. SMS usually needs an app, and consent as well.

**How long are abandoned checkouts kept?** Three months, then Shopify deletes them automatically.

**Does this cover the cart, not just the checkout?** Shopify records customers who started checkout and entered their email. Someone who only adds a product to the cart without starting checkout does not end up in this list.

## Do you know why customers leave at checkout?

Send me your store's address for the [free shop check](#contact): I walk the path to checkout like a customer and tell you where it gets stuck. Setup and ongoing care fit [Shopify support and maintenance](/services/shopify-betreuung).

**Read next:** [Shopify store optimisation](/blog/shopify-shop-optimieren-lassen) · [Shopify shipping setup](/blog/shopify-versand-einrichten) · [Shopify returns setup](/blog/shopify-retouren-ruecksendungen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
