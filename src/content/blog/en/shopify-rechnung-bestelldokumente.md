---
publishedAt: 2026-10-23
title: "Creating invoices in Shopify: order documents, Order Printer and templates"
date: 23 October 2026
readingTime: 6 min
excerpt: "Creating invoices in Shopify: what the order page, packing slips, document templates and Order Printer can do, and what to ask your tax adviser."
image: /og/projects/orska-rituals.jpg
topic: build
tags:
  - Shopify
  - Invoices
  - Packing slips
  - Orders
---

Creating invoices in Shopify is not a single menu item. Shopify offers several ways to print order documents. They differ in how far you can customise them.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus and features change, so check your admin. This is **not tax or legal advice**. Which details an invoice has to contain, how invoice numbers are assigned and how long you keep records is a question for your tax adviser.

## Four ways to print a document

The help describes order documents such as invoices, packing slips, receipts and pick lists. There are four ways: the order page, packing slips, document templates in the admin and the "Shopify Order Printer" app.

## Way 1: print the order page

According to the help you print an order straight from the admin: **Orders**, open the order, **Print**, then **Print order page**. Draft orders cannot be printed.

The help describes this as a printout for your own records, including the comments from the order's timeline. For your own invoices and packing slips it points to document templates.

## Way 2: packing slips

A packing slip lists the items in a package with shipping and billing address, SKU, quantity and other product details. According to the help you print it with **Print** > **Print packing slips**, one at a time on the order page or in bulk on the orders page. Each shipment of an order gets its own packing slip. If you have several locations, you choose the location the order ships from.

You adapt the packing slip with Liquid, Shopify's template language. With a little HTML and CSS you add your logo or hide product images. **Revert to default** restores the standard template.

## Way 3: document templates in the admin (early access)

According to the help there are also document templates directly in the admin, without an app. The area is in **early access** and is rolling out gradually. Only your admin shows whether it is available in your store.

- **Document types:** invoice, packing slip, pick list and a blank template for documents of your own.
- **Where:** **Settings** > **Shipping and delivery**, section **Documents**.
- **Customising:** you design invoice, packing slip and blank templates with HTML, CSS and Liquid. A template can be up to 135,000 characters. The pick list is set up with options, not code.
- **Several templates per type:** for example one packing slip for wholesale orders and one for retail.
- **Preview:** **Preview** tests the template with a real order.
- **Printing:** individually or in bulk, invoices as Letter or A4. Up to 1,500 documents per page size are possible.
- **Permissions:** staff need the **Manage order information** permission to print.

## Way 4: the Shopify Order Printer app

According to the help, the **Shopify Order Printer** app from the Shopify App Store prints invoices, packing slips and pick lists from the admin and from Shopify POS. You customise the templates with HTML, CSS and Liquid, for example with a logo and your own order details.

- The app prints up to **50 orders at a time**. For more, the help recommends a CSV export of the orders.
- For a PDF, choose "Save as PDF" in the browser's print dialog.
- The older app **Order Printer** (legacy) is deprecated according to the help and is no longer maintained. If you use it, you should migrate your templates and switch to the new app.
- For minor customisations Shopify Support helps within the scope of the design policy, according to the help. More complex changes should be done by an outside designer or developer.

## What Shopify does not explain here

The help pages on printing say **nothing** about

- whether a document produced this way meets the tax requirements for an invoice in Germany,
- whether there is an automatic, consecutive invoice number,
- whether the invoice is sent by email automatically.

The help only mentions the order confirmation email customers receive after ordering. That is not an invoice. Clarify these points with your tax adviser beforehand. If the standard ways are not enough, a dedicated invoicing program or an app may be an option.

## Before you start: a checklist

1. Who issues the invoice: a Shopify template, an app or an external program? Agreed with your tax adviser?
2. Are company name, address, email and tax details stored in the shop? (See [Shopify store policies and legal texts](/blog/shopify-rechtstexte-richtlinien).)
3. Preview checked with a real order, including a discount, shipping costs and several items?
4. Multilingual store: are the documents readable in your customers' language?
5. Who prints? Staff permissions checked?
6. Packing slip in the parcel and shipping process matched? (See [setting up shipping](/blog/shopify-versand-einrichten).)
7. Old templates copied before a change?

## When a developer helps

For the first printout and small text changes you do not need one. Help is worthwhile for more complex templates:

- your own fields from the order,
- variants for wholesale and retail (see [Shopify B2B](/blog/shopify-b2b-wholesale)),
- a layout for multi-page invoices.

How customisations stay maintainable is in [Customizing a Shopify theme](/blog/shopify-theme-customization). Templates and apps then belong in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Can Shopify send an invoice to the customer automatically?** The help pages on printing say nothing about it. That depends on the solution you choose.

**Can I save invoices as PDF?** Yes, through the browser's print function ("Save as PDF"), according to the help for the Order Printer apps.

**Is the printed order page enough as an invoice?** According to the help it is a printout for your own records. For customer invoices the help points to document templates.

**How many invoices can I print at once?** With document templates up to 1,500 per page size, with the Shopify Order Printer app up to 50 orders.

**What does a custom invoice template cost?** That depends on the requirements. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only check publicly visible data, without access to your account, and tell you what stands out. It does not check anything for tax purposes. What I do for stores is under [Services](/services).

**Further reading:** [Setting up taxes and VAT in Shopify](/blog/shopify-steuern-mwst-einrichten) · [Customizing Shopify email notifications](/blog/shopify-email-benachrichtigungen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
