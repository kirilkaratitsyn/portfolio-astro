---
publishedAt: 2026-10-23
title: "Customizing Shopify email notifications: customer emails, staff alerts, SMS and what to know first"
date: 23 October 2026
readingTime: 8 min
excerpt: "Customizing Shopify email notifications: which emails run automatically, which can be turned off, templates, staff notifications, SMS and webhooks."
image: /og/projects/peter-bijoux.jpg
topic: build
tags:
  - Shopify
  - Email
  - Notifications
  - Orders
---

"The order confirmation looks like every other store's, and the shipping email goes out even though I did not want it." Shopify sends many emails on its own. If you want to customize Shopify email notifications, turn some off or add SMS and staff alerts, the settings sit in several places.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus and country lists change, so check your admin. Ask your tax advisor or lawyer about mandatory details in invoices and emails. Menu names come from the English interface.

## Where notifications live

In the admin under **Settings > Notifications**. The help distinguishes five groups:

- **Customer emails** about orders, shipping and account events
- **SMS notifications** as an order confirmation by text message
- **Staff notifications** for you and your team
- **Emails for exchanges and returns**
- **Webhooks** for connections to other services

Most are sent automatically. An order triggers the **Order confirmation**, fulfillment the **Shipping confirmation**, a refund the **Order refund**.

## What can be turned off and what cannot

According to the help, most customer notifications cannot be deactivated. Six can, each at the point where you perform the action:

- **Order canceled:** when canceling, deselect "Send a notification to the customer".
- **Order refund:** when refunding, deselect the same checkbox.
- **Shipping confirmation:** when fulfilling, deselect "Send shipment details to your customer now".
- **Shipping update:** when editing the tracking info, deselect "Send notification email to customer".
- **Out for delivery** and **Delivered:** turn them off under **Settings > Notifications > Customer notifications** in the "Shipping updated" section. Local delivery orders get a separate delivery email instead, once you mark the order as delivered.

On Shopify Plus, the store owner can ask Support to turn off specific emails and SMS. **Shop app** notifications about tracking and order status can only be turned off by customers in the app, not by merchants. More on this: [Setting up shipping in Shopify](/blog/shopify-versand-einrichten).

## Logo and colors for all templates

Under **Settings > Notifications > Customer notifications > Customize email template** you upload a logo and set the accent color with a color code or the picker. Both apply to all customer templates. In the "Branding" section you can turn off "Powered by Shopify" in the footer. The help calls this early access, only for certain stores. On Shopify Plus the line does not appear.

## Editing single templates

Open the notification and click **Edit code**. There you edit **Email subject** and **Email body (HTML)**. According to the help:

- First you need to **confirm your sender email address**. Otherwise body and subject cannot be edited.
- **Preview** shows unsaved changes. **Send test email** sends the message to your admin account.
- **Revert to** and **Default** reset a template to its original state.
- For HTML changes the help itself mentions hiring a Shopify Partner.

The templates use Liquid variables for order and customer data.

### Language of the templates

According to the help, the language follows your theme's language as long as you have changed nothing:

- Subject and body changed: switching the theme language no longer changes anything.
- Only the body changed: the subject switches, the body does not.

If you sell in several languages, customers receive the emails in their language. The help describes the translations under "Checkout and email notifications". More on this: [Shopify Markets](/blog/shopify-markets-mehrere-laender).

### Registration number in emails

In some countries a tax or VAT ID belongs on invoices or notices. The help describes how to add the number in the template's HTML. Ask your tax advisor or the authority first whether it is required. More on this: [Invoices and order documents in Shopify](/blog/shopify-rechnung-bestelldokumente).

## Staff notifications

These emails tell you or your team about events in the admin:

- **Store order summary:** orders, sales and top products. The default is weekly on Monday at 9 AM local time. You can change the day and time, or set it to daily.
- **New order:** a customer places an order.
- **New return request:** a customer requests a return.
- **Sales attribution ended:** the attributed staff member on an order is changed.
- **New draft order:** a customer submits a draft order. Sent to the store owner only.
- **Order dispute updates:** chargebacks and inquiries. Sent only to team members with the matching permission. The template cannot be customized.

The account owner receives all new orders by default. You turn that off under **Staff notifications**. You add further recipients by email address or as a team member, and with Shopify POS optionally per location. Recipients can be turned off temporarily. **Send test notification** sends an email with test data. To make changes you need the **Orders** and **Manage settings** permissions.

## SMS notifications

Customers can enter a phone number at checkout instead of an email address. You set this under **Settings > Checkout** in the "Customer contact method" section. The help names these limits:

- There is only **one** SMS, the order confirmation. Shipping updates need a transactional SMS app.
- SMS are sent only to customers **without** an email address. A customer who enters an address gets the email.
- The SMS **cannot be edited**. Custom wording requires an app.
- According to the help there is no cost to you. Customers may pay their carrier's standard rates.
- Your **business address** must be in a supported country: Germany, France, Ireland, Italy, Spain, United Kingdom, United States, Canada, Australia, New Zealand, Brazil or Japan.
- Stores that sell CBD products are excluded. An abandoned checkout started with a phone number cannot be recovered.
- Without the international dialing code, an SMS to a customer abroad may not arrive. The help names the E.164 format, for example `+18005550123`.
- The sender name is your store name, truncated to 11 characters, without spaces or special characters. In some countries a phone number is shown instead.

If you use a third-party app for SMS, deactivate Shopify's SMS. Otherwise customers get duplicates.

## Exchanges and returns

If you customized templates and add exchange items to a return, you may have to update four templates by hand: **Order invoice**, **Order refund**, **Return created** and **Return request approved**. According to the help, this requires familiarity with the code. If you are unsure, ask the developer who made the changes or reset the template to the default.

## Webhooks

A webhook reports an event to an `https://` address, in JSON or XML. Typical uses named in the help: accounting software, a data warehouse, alerts to a messenger. If a webhook fails, the store owner gets an email, but only for webhooks created by an app or a custom app. If the destination repeatedly returns something other than status 200, Shopify deletes the subscription.

## What the help does not answer here

The help does not say **which emails your store really needs**, how to word them or how an email looks in each mail program. It only lists supported programs, including Apple Mail, Outlook, Gmail, Yahoo and Thunderbird. Which notices legally belong in order and shipping emails is a question for your lawyer. On mandatory texts: [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien).

## Examples from practice

Among my published projects there is no case where I customized a store's notifications, and I do not invent one. Before launch, place a test order and read all the emails as a customer, also on a smartphone.

## When a developer helps

You set logo, color and sender yourself. Help is worthwhile when:

- templates should be rebuilt in HTML and Liquid,
- emails for several languages and markets have to fit together,
- custom templates need updating after a change to exchanges or returns,
- a webhook should hand orders to accounting or the warehouse.

Related topics: [Customizing a Shopify theme](/blog/shopify-theme-customization), [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen) and, for ongoing upkeep, [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Can I turn off the order confirmation?** According to the help, no. Six notifications about cancellation, refund and shipping can be turned off.

**Can I change the sender address?** Yes, in the sender address settings.

**Why do emails not arrive?** The help advises checking the spam or junk folder first, and otherwise testing an address with a different provider.

**Can I reword the SMS?** No. Custom wording needs a transactional SMS app.

**What happens to the emails after a theme change?** That depends on what you changed in the templates, see the language section.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I look only at publicly visible data, without access to your account, and tell you what stands out. More under [Services](/services).

**Further reading:** [Invoices and order documents in Shopify](/blog/shopify-rechnung-bestelldokumente) · [Setting up shipping in Shopify](/blog/shopify-versand-einrichten) · [Setting up pre-orders in Shopify](/blog/shopify-vorbestellung-preorder) · [Shopify try before you buy](/blog/shopify-try-before-you-buy) · [Connecting a domain to Shopify](/blog/shopify-domain-verbinden) · [A multilingual Shopify store](/blog/shopify-mehrsprachig-uebersetzen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
