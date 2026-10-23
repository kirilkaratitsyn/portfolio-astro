---
publishedAt: 2026-10-23
title: "Customizing Shopify email notifications: customer emails, staff alerts, SMS and what to know first"
date: 23 October 2026
readingTime: 8 min
excerpt: "Notifications in Shopify: which customer emails run automatically, which can be turned off, logo and colors, editing templates, staff notifications, SMS and webhooks."
image: /og/projects/peter-bijoux.jpg
topic: build
tags:
  - Shopify
  - Email
  - Notifications
  - Orders
---

"The order confirmation looks like every other store's, and the shipping email goes out even though I did not want it." Merchants often say this once the first orders come in. Shopify sends many emails on its own. If you want to style them, turn some off or add SMS and staff alerts, the settings sit in several places. This article shows what the Shopify Help Center says, for merchants without a technical background.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus, availability and country lists change, so check your admin. I do not name prices for apps or development. Which mandatory details must appear in invoices and emails is a question for your tax advisor or lawyer. This article is only about the technology. Menu names are taken from the English interface.

## Where notifications live

In the admin under **Settings > Notifications**. The help distinguishes five groups:

- **Customer emails** about orders, shipping and account events
- **SMS notifications** as an order confirmation by text message
- **Staff notifications** for you and your team
- **Emails for exchanges and returns**
- **Webhooks** for connections to other services

According to the help, most notifications are sent automatically, triggered by events in the store: an order comes in and the **Order confirmation** goes out. You fulfill the order and the **Shipping confirmation** follows. You refund an order and the **Order refund** is sent.

## What can be turned off and what cannot

According to the help, most customer notifications cannot be deactivated. Six can, each at the point where you perform the action:

- **Order canceled:** when canceling the order, deselect "Send a notification to the customer".
- **Order refund:** when refunding, deselect the same checkbox.
- **Shipping confirmation:** when fulfilling, deselect "Send shipment details to your customer now".
- **Shipping update:** when editing the tracking info, deselect "Send notification email to customer".
- **Out for delivery** and **Delivered:** turn them off under **Settings > Notifications > Customer notifications** in the "Shipping updated" section. These two do not exist for local delivery orders. Those have their own delivery email, sent when you mark the order as delivered.

On Shopify Plus, the store owner can ask Support to turn off specific emails and SMS. Notifications from the **Shop app** about tracking and order status cannot be turned off or edited by you as a merchant. Customers turn them off only in their Shop app settings. More on shipping itself: [Setting up shipping in Shopify](/blog/shopify-versand-einrichten).

## Logo and colors for all templates

Under **Settings > Notifications > Customer notifications > Customize email template** you upload a logo and set the accent color with a color code or the picker. According to the help, both apply to all customer templates at once. There is also a "Branding" section where the "Powered by Shopify" line in the footer can be turned off. The help calls this early access, available only for certain stores. On Shopify Plus the line does not appear anyway.

## Editing single templates

To change the subject and text of one email, open the notification and click **Edit code**. There you edit **Email subject** and **Email body (HTML)**. Important according to the help:

- You first need to **confirm your sender email address**. Without it, body and subject cannot be edited.
- **Preview** shows unsaved changes. **Send test email** sends the message to the account you are logged in with.
- **Revert to** and **Default** reset a template to its original state.
- For HTML changes the help itself mentions hiring a Shopify Partner.

The templates use Liquid variables for order and customer data. The help points to a separate reference page for them.

### Language of the templates

According to the help, the language depends on your theme's language and on what you have already changed. If you changed both subject and body, switching the theme language no longer changes anything. If you changed only the body, the subject switches but the body does not. If you sell in several languages, customers receive the emails in their language. You maintain the translations in a separate place that the help describes under "Checkout and email notifications". More on selling in several languages: [Shopify Markets](/blog/shopify-markets-mehrere-laender).

### Registration number in emails

In some countries you must show a tax or VAT ID on invoices or notices. The help describes how to add the number in the template's HTML, and advises checking with your tax advisor or the authority first whether it is required. On invoices and documents in general: [Invoices and order documents in Shopify](/blog/shopify-rechnung-bestelldokumente).

## Staff notifications

These emails tell you or your team about events in the admin. According to the help there are:

- **Store order summary:** a summary of orders, sales and top products. The default is weekly on Monday at 9 AM in your local time. You can change the day and time or set it to daily.
- **New order:** when a customer places an order.
- **New return request:** when a customer requests a return.
- **Sales attribution ended:** when the attributed staff member on an order is changed.
- **New draft order:** when a customer submits a draft order, sent to the store owner only.
- **Order dispute updates:** about chargebacks and inquiries. Only team members with the matching permission receive it, and the template cannot be customized.

The account owner receives all new orders by default, which can be turned off under **Staff notifications**. You add further recipients by email address or as a team member, and with Shopify POS optionally per location. **Send test notification** sends a test with fake data. To make changes you need the **Orders** and **Manage settings** permissions. Recipients can be turned off temporarily without deleting them.

## SMS notifications

Customers can enter a phone number at checkout instead of an email address. You set this under **Settings > Checkout** in the "Customer contact method" section. The help names limits that often surprise merchants:

- There is only **one** SMS, the order confirmation. Shipping updates and other types do not go by SMS unless you use a transactional SMS app.
- SMS are sent only to customers **without** an email address. If a customer has an address, they get the email, and they cannot choose SMS instead.
- The SMS **cannot be edited**. Custom wording requires an app.
- According to the help there is no cost to you. Customers may pay their carrier's standard rates.
- SMS work only if your **business address** is in a supported country. The list names Germany, France, Ireland, Italy, Spain, the United Kingdom, the United States, Canada, Australia, New Zealand, Brazil and Japan.
- Not supported for stores that sell CBD products. An abandoned checkout started with a phone number cannot be recovered.
- Without the full international dialing code, an SMS to customers abroad may not arrive. The help names the E.164 format, for example `+18005550123`.
- The sender name is based on your store name, truncated to 11 characters and without spaces or special characters. In some countries a phone number is shown instead.

If you use a third-party app for SMS, the help says to deactivate Shopify's SMS so customers do not get duplicates.

## Exchanges and returns

If you customized templates and add exchange items to a return, you may have to update four templates by hand: **Order invoice**, **Order refund**, **Return created** and **Return request approved**. The help says this requires familiarity with the code in the templates. If you are unsure, it suggests asking the developer who made the changes or resetting the template to the default.

## Webhooks

A webhook reports an event to an `https://` address you specify, in JSON or XML. Typical uses named in the help are accounting software, data for a data warehouse, or alerts to a messenger. If a webhook fails, the store owner gets an email, but only for webhooks created by an app or a custom app. If the destination repeatedly returns something other than status 200, Shopify deletes the subscription automatically.

## What the help does not answer here

The pages I read say nothing about **which emails your store really needs**, how to word them so customers read them, or how an email looks in each individual mail program. The help only lists supported programs, including Apple Mail, Outlook, Gmail, Yahoo and Thunderbird. The legal side (which notices belong in order and shipping emails) also stays open and belongs with your lawyer. On mandatory texts in the store: [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien). And what the implementation costs depends on the scope.

## Examples from practice

Among my published projects there is no case where I customized a store's notifications, and I do not invent one. The topic belongs to every store with orders. It is worth reading the emails once as a customer before the store goes live.

## Before you start: a checklist

1. Is the **sender email address** confirmed?
2. Are **logo and accent color** set, and does the preview fit the store?
3. Which of the six emails that can be turned off do you **not** want to send, and does your team know?
4. Did you place a **test order** and read all the emails, also on a smartphone?
5. Are **subject and body** in the right language, also for other markets?
6. Who gets the **staff emails**, and is the weekly summary set to the right day?
7. Do you want **SMS**, and is your business address in a supported country?
8. Are there custom templates that need updating for **exchanges**?

## When a developer helps

You set logo, color and sender yourself. Help is worthwhile when templates should be rebuilt in HTML and Liquid, when emails for several languages and markets have to fit together, when custom templates need updating after a change to exchanges or returns, or when a webhook should hand orders to accounting or the warehouse. Related topics: [Customizing a Shopify theme](/blog/shopify-theme-customization) and [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen). After that the setup belongs in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Can I turn off the order confirmation?** According to the help, no. Six notifications about cancellation, refund and shipping can be turned off.

**Can I change the sender address?** Yes, the help points to the sender address settings. Without a confirmed address, body and subject cannot be edited.

**Why do emails not arrive?** The help advises checking the spam or junk folder first, and otherwise trying an address with a different provider.

**Can I reword the SMS?** No, Shopify's SMS cannot be edited. Custom wording needs a transactional SMS app.

**What happens to the emails after a theme change?** That depends on what you changed in the templates. The rules are in the language section above.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, such as load time, apps in the source code and how pages are built, and tell you what stands out. I only work with publicly visible data, without access to your account. What else I do for stores is under [Services](/services).

**Further reading:** [Invoices and order documents in Shopify](/blog/shopify-rechnung-bestelldokumente) · [Setting up shipping in Shopify](/blog/shopify-versand-einrichten) · [Setting up pre-orders in Shopify](/blog/shopify-vorbestellung-preorder)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
