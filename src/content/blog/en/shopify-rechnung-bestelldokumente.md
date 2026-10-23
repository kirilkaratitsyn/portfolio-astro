---
publishedAt: 2026-10-23
title: "Creating invoices in Shopify: order documents, Order Printer and templates"
date: 23 October 2026
readingTime: 7 min
excerpt: "How to print invoices and packing slips in Shopify, what the order page, document templates and the Order Printer app can do, where the limits are and what to clarify with your tax adviser first."
image: /og/projects/orska-rituals.jpg
topic: build
tags:
  - Shopify
  - Invoices
  - Packing slips
  - Orders
---

"How do I get an invoice for my orders in Shopify?" The question comes up as soon as the first orders arrive, and the answer is not a single menu item. Shopify offers several ways to print order documents, and they differ in how far you can customise them. This article shows the ways Shopify itself documents, without assuming a technical background.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus and features change, so check your admin. This is **not tax or legal advice**. Which details an invoice has to contain in your case, how invoice numbers are assigned and how long you keep records is a question for your tax adviser. This article is only about what Shopify offers technically. I do not name prices for apps or development.

## Four ways to print a document

The help describes order documents such as invoices, packing slips, receipts and pick lists. That gives four ways:

1. **Print the order page:** the simplest way, no app needed.
2. **Print packing slips:** one by one or in bulk from the order list.
3. **Document templates in the admin:** your own templates for invoice, packing slip and pick list.
4. **The "Shopify Order Printer" app:** invoices and packing slips with your own templates.

## Way 1: print the order page

According to the help you can print an order straight from the admin: **Orders**, open the order, **Print**, then **Print order page**. The printed page also includes the comments from the order's timeline. Draft orders cannot be printed.

The help describes this way as a printout for your own records. For your own invoices, packing slips or other documents it points explicitly to document templates. So the order page is not meant as an invoice for customers, if only because the timeline comments are printed on it.

## Way 2: packing slips

A packing slip lists the items in a package together with shipping and billing address, SKU, quantity and other product details. According to the help you print it with **Print** > **Print packing slips**, one at a time on the order page or in bulk on the orders page. If an order has several shipments, there is a separate packing slip for each. If you have several locations, you choose the location the order ships from.

The packing slip can be adapted with Liquid, Shopify's template language. With a little HTML and CSS you can, for example, add your logo or hide product images. **Revert to default** takes you back to the standard template.

## Way 3: document templates in the admin (early access)

The help also describes document templates directly in the admin, without an app. Important: according to the help this area is in **early access** and is rolling out gradually. Whether it is already available in your store only your admin shows.

What the help names:

- **Document types:** invoice, packing slip, pick list and a blank template for documents of your own.
- **Where:** **Settings** > **Shipping and delivery**, section **Documents**.
- **Customising:** invoice, packing slip and blank templates can be designed with HTML, CSS and Liquid. A template can be up to 135,000 characters. The pick list is set up with options, not code.
- **Several templates per type:** for example one packing slip for wholesale orders and one for retail.
- **Preview:** **Preview** tests the template with a real order before you save.
- **Printing:** individually or in bulk. Invoices come as Letter or A4. Up to 1,500 documents per page size are possible.
- **Permissions:** staff need the **Manage order information** permission to print documents.

According to the help the default invoice is a starting point in which you can, for example, add your logo or change the wording.

## Way 4: the Shopify Order Printer app

The help also names the **Shopify Order Printer** app from the Shopify App Store. With it you print invoices, packing slips and pick lists from the admin and from Shopify POS. The templates can be customised with HTML, CSS and Liquid, for example with a logo and your own order details.

Details from the help:

- With the app you print up to **50 orders at a time**. For more, the help recommends a CSV export of the orders.
- Documents are produced through your browser's print function. You save them as a PDF by choosing "Save as PDF" in the print dialog.
- The older app **Order Printer** (legacy) is deprecated according to the help and is no longer maintained. If you use it, you should migrate your templates and switch to the new app.
- For minor customisations Shopify Support can help within the scope of the design policy, according to the help. More complex changes should be done by an outside designer or developer.

## What Shopify does not explain here

The help pages on printing say **nothing** about whether a document produced this way meets the tax requirements for an invoice in Germany. They also say nothing about an automatic, consecutive invoice number or about sending the invoice by email automatically. The help only mentions that customers receive an order confirmation email after ordering. That is a separate document and not the same as an invoice. Clarify these points with your tax adviser beforehand. If the standard ways are not enough, a dedicated invoicing program or an app may be an option. Which one fits your process depends on your requirements, and the help makes no statement on it.

## Before you start: a checklist

1. Who issues the invoice: a Shopify template, an app or an external program? Agreed with your tax adviser?
2. Are company name, address, email and tax details stored in the shop so the template can output them? (See also [Shopify store policies and legal texts](/blog/shopify-rechtstexte-richtlinien).)
3. Preview checked with a real order, including a discount, shipping costs and several items?
4. Multilingual store: are the documents readable in your customers' language?
5. Who prints and who may? Staff permissions checked?
6. Packing slip in the parcel and shipping process matched? (See [setting up shipping](/blog/shopify-versand-einrichten).)
7. Old templates copied before a change?

## When a developer helps

For the first printout and small text changes you do not need one. Help is worthwhile when the template should be more complex, for example with your own fields from the order, with variants for wholesale and retail (see [Shopify B2B](/blog/shopify-b2b-wholesale)) or with a clean layout for multi-page invoices. How customisations stay clean and maintainable is in [Customizing a Shopify theme](/blog/shopify-theme-customization). Templates and apps then belong in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Can Shopify send an invoice to the customer automatically?** The help pages on printing say nothing about it. According to the help customers receive an order confirmation email; whether and how an invoice is sent automatically depends on the solution you choose.

**Can I save invoices as PDF?** Yes, through the browser's print function ("Save as PDF"), according to the help for the Order Printer apps.

**Is the printed order page enough as an invoice?** According to the help it is a printout for your own records and includes the timeline comments. For customer invoices the help points to document templates.

**How many invoices can I print at once?** With document templates up to 1,500 per page size, with the Shopify Order Printer app up to 50 orders.

**What does a custom invoice template cost?** That depends on the requirements. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, such as load time, apps in the source code and how pages are built, and tell you what stands out. I only work with publicly visible data, without access to your account. It does not check anything for tax purposes. What else I do for stores is under [Services](/services).

**Further reading:** [Setting up taxes and VAT in Shopify](/blog/shopify-steuern-mwst-einrichten) · [Customizing Shopify email notifications](/blog/shopify-email-benachrichtigungen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
