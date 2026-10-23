---
publishedAt: 2026-10-23
title: "Importing products into Shopify with a CSV file: what to know first and where it goes wrong"
date: 23 October 2026
readingTime: 7 min
excerpt: "How the CSV product import in Shopify works, what overwriting existing products means, which errors are common and why you need a backup before you import."
image: /og/projects/reserve-kava.jpg
topic: migration
tags:
  - Shopify
  - Product import
  - CSV
  - Migration
---

A new store is quickly set up, but its products are not. If you are moving from another system, or want to change hundreds of prices at once, you sooner or later end up at the CSV import. That is a spreadsheet in which every row describes a product or a variant. The import itself takes a few clicks. The work is in the preparation, and a few pitfalls cannot be undone afterwards. This article walks store owners without a technical background through the process.

A note on scope: I rely on Shopify's help pages on importing and exporting products (as of October 2026). I cannot promise from them that your particular file will run through at once. That depends on how it is built.

## What the CSV import is for

According to the Shopify Help Center, the import is useful when you switch from another platform to Shopify or when you want to make many changes to products or stock at once. During the import, the data in the file is converted into products. You choose whether new products are published to all sales channels or only to the online store.

For smaller changes you do not need the import: the help pages name the bulk editor in the admin as the easiest way to edit several products or variants at the same time.

## The most important rule: back up first

Two notes from the Shopify help that I would put first:

- A CSV import **cannot be canceled** once it has started, and there is no history of past imports. What an import changed can be checked in the store's activity log.
- Shopify explicitly advises you to make a **backup of your product data** before importing.

The backup is simple: export your products as a CSV first (under Products, the Export button). That file is also your template, because it shows how Shopify names the columns. When exporting you can choose between a CSV for Excel, Numbers or another spreadsheet program and a plain CSV for a text editor. Depending on the size, the file arrives by email instead of as a download.

## What belongs in the file

When you create new products, only the **Title** column is required according to the help. As soon as a product has variants, you also need the **URL handle** column, the identifier that also appears in the product address. When you update existing products, URL handle and Title are the only required columns.

But the columns depend on one another. If you change a variant column such as SKU or weight, you must also include **Option1 name** and **Option1 value**. If these two are missing, the help says a new default variant is created and existing variants are deleted. A product can have up to three options, for example size and color.

Two things the CSV import does not support: variant metafields (use the variant bulk editor for those) and deleting products in bulk. Product availability on other sales channels cannot be bulk-updated by CSV either.

## Create new or overwrite?

The import has the option **Overwrite products with matching handles**. Its effect:

- **Without the option**, products whose handle already exists are ignored during the import.
- **With the option**, the values in the file replace the values of the existing products, for all columns included in the file.

Three rules follow, which Shopify states in the help and which are often overlooked:

1. If a **non-required column is blank in the file**, the existing value in the store becomes blank too. If the store has a vendor name and the file has nothing there, the name is gone afterwards.
2. If a column is **missing from the file entirely**, the existing value in the store stays as it is.
3. If you **change option values** (Option1 value to Option3 value), existing variant IDs are deleted and new ones are created. That can break things that rely on those IDs, such as third-party apps.

If you only want to change prices, include only the columns you really change, plus the necessary required and option columns.

## Where it often goes wrong

The Shopify help keeps its own list of typical problems. The most important ones from a store owner's point of view:

**Sorting in Excel or Numbers.** If a CSV is sorted in a spreadsheet program, products can be separated from their image links, and the images are lost during the import. According to the help, a sorted file can overwrite your existing products with bad data that cannot be recovered. So do not sort the sheet before you import it.

**Odd characters in texts.** If special characters look wrong, the file was not saved as UTF-8. According to the help, Google Sheets saves in UTF-8 automatically; other programs may need an extra step. It is worth checking, especially with German umlauts.

**Column headers do not match.** The headers must match the template exactly, including upper and lower case ("Title", not "title"). If they differ or headers are missing, the import fails according to the help. A message such as "Network error: Unexpected token" can then appear.

**Curly quotation marks.** An "illegal quoting" error occurs, according to the help, when the file contains commas or quotation marks that are not UTF-8 encoded. Typical are curly instead of straight quotation marks.

**File size.** The product CSV may not exceed 15 MB. If you get an error or a timeout, split the file into several smaller ones and upload them one after another.

**Moving options.** If you move an option from position 1 to position 2 (for example Size from Option 1 to Option 2, with a new option in first place), you can get an error such as "Line is invalid". The help describes a workaround with a temporary option name and a second import.

The help also recommends using the Google Chrome browser for the upload.

## How the import runs

1. In the Shopify admin, go to **Products** and choose **Import**.
2. Add the CSV file.
3. Decide whether new products appear in all sales channels or only in the online store.
4. Decide whether existing products with the same handle should be overwritten.
5. **Upload and continue**, check the summary and confirm the import.

After the upload, the email address of your account receives a confirmation from Shopify. One detail on status: if the **Status** column is missing from the file, the help says products are uploaded as active. If you want to check new products before customers see them, set the status deliberately.

## Large import: test a small one first

Shopify advises partners doing a large import for a merchant to test a small subset in a development store first. The principle holds without partner status too: import two or three products first, look at variants, images, prices and special characters in the store, and only then run the whole file.

## Checklist before the import

1. Export of all products saved as a backup?
2. File saved as UTF-8, headers unchanged?
3. Sheet not sorted?
4. For variants: URL handle, Option1 name and Option1 value in every affected row?
5. Only columns in the file that should really change?
6. Overwrite option set or left unset on purpose?
7. Status column set, so nothing goes live by accident?
8. A small test import done first?

## When moving from another system

If the products come from WooCommerce, Wix, Shopware or another store, the CSV import is only one part of the move. The file has to match the Shopify format. With missing or differing headers the import fails. On top of that come redirects from old addresses, customer data, orders and texts. How to plan the addresses is in [Moving to Shopify and SEO: Set Up Redirects, Protect Your Rankings](/blog/shopify-migration-weiterleitungen). The checklist for a complete move from WooCommerce is in [Moving from WooCommerce to Shopify without losing rankings](/blog/woocommerce-to-shopify).

## When a developer helps

For a few dozen products, many store owners manage with export, spreadsheet and import alone. Help is worthwhile when the file comes from a foreign system and has to be rebuilt, when many variants with several options are involved, when existing products are to be overwritten without apps or orders suffering, or when the import is part of a move with a fixed launch date. Who is responsible for what is explained in [Shopify help: when the Help Center is enough and when you need a developer](/blog/shopify-help).

## Frequently asked questions

**Can I undo an import?** According to the Shopify help, a running CSV import cannot be canceled, and there is no history of past imports. Hence the backup beforehand. You can see changes in the store's activity log.

**Is Excel enough?** Excel works if the file is saved as CSV with commas between values and in UTF-8. According to the help, Google Sheets saves in UTF-8 automatically; other programs may need an extra step.

**Can I delete products with a CSV?** No. According to the help, products cannot be deleted in bulk by CSV. For that there are bulk actions under Products in the admin.

**What does a product import by a developer cost?** That depends on the scope and the state of the data. I do not name specific amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, such as load time, apps in the page source and the structure of the pages, and tell you what stands out. I only work with publicly visible data, without access to your account. If you are coming from WooCommerce, I take care of the [move to Shopify](/services/woocommerce-to-shopify). What else I do for stores is under [Services](/services).

**Further reading:** [Shopify metafields and metaobjects: structured product data](/blog/shopify-metafelder-metaobjects)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
