---
publishedAt: 2026-10-23
title: "Importing products into Shopify with a CSV file: what to know first and where it goes wrong"
date: 23 October 2026
readingTime: 7 min
excerpt: "Importing products into Shopify with a CSV file: how it works, what overwriting does, which errors are common and why you need a backup first."
image: /og/projects/reserve-kava.jpg
topic: migration
tags:
  - Shopify
  - Product import
  - CSV
  - Migration
---

Importing products into Shopify with a CSV file means preparing a spreadsheet in which every row describes a product or a variant. You need it, for example, when you move from another system or change hundreds of prices at once. The import takes a few clicks, the work is in the preparation. Some mistakes cannot be undone afterwards.

This article is based on Shopify's help pages on importing and exporting products (as of October 2026).

## What the CSV import is for

According to the Shopify Help Center, the import is useful when you switch from another platform to Shopify or want to make many changes to products or stock at once. For smaller changes, the help pages name the bulk editor in the admin as the easiest way to edit several products or variants at the same time.

## The most important rule: back up first

- According to the Shopify help, a CSV import **cannot be canceled** once it has started, and there is no history of past imports. What an import changed can be checked in the store's activity log.
- Shopify advises you to make a **backup of your product data** before importing.

To do that, export your products as a CSV (under Products, the Export button). That file is also your template, because it shows how Shopify names the columns. Depending on the size, it arrives by email instead of as a download.

## What belongs in the file

According to the help:

- New products: only the **Title** column is required.
- Products with variants: also the **URL handle** column, the identifier that appears in the product address.
- Updating existing products: URL handle and Title are the only required columns.

The columns depend on one another. If you change a variant column such as SKU or weight, you must also include **Option1 name** and **Option1 value**. If these two are missing, the help says a new default variant is created and existing variants are deleted. A product can have up to three options, for example size and color.

The CSV import does not support variant metafields (use the variant bulk editor for those) or deleting products in bulk. Product availability on other sales channels cannot be bulk-updated by CSV either.

## Create new or overwrite?

The import has the option **Overwrite products with matching handles**:

- **Without the option**, products whose handle already exists are ignored.
- **With the option**, the values in the file replace the values of the existing products, for all columns included in the file.

Three rules from the Shopify help follow:

1. If a **non-required column is blank in the file**, the existing value in the store becomes blank too. If the store has a vendor name and the file has nothing there, the name is gone afterwards.
2. If a column is **missing from the file entirely**, the existing value in the store stays as it is.
3. If you **change option values** (Option1 value to Option3 value), existing variant IDs are deleted and new ones are created. That can break things that rely on those IDs, such as third-party apps.

If you only want to change prices, include only the columns you change, plus the necessary required and option columns.

## Where it often goes wrong

The Shopify help lists these typical problems:

**Sorting in Excel or Numbers.** Sorting can separate products from their image links, and the images are lost during the import. According to the help, a sorted file can overwrite existing products with bad data that cannot be recovered. Do not sort the sheet before you import it.

**Odd characters in texts.** If special characters such as German umlauts look wrong, the file was not saved as UTF-8. According to the help, Google Sheets saves in UTF-8 automatically, and other programs may need an extra step.

**Column headers do not match.** The headers must match the template exactly, including upper and lower case ("Title", not "title"). If they differ or are missing, the import fails according to the help, for example with the message "Network error: Unexpected token".

**Curly quotation marks.** An "illegal quoting" error occurs, according to the help, when the file contains commas or quotation marks that are not UTF-8 encoded. Typical are curly instead of straight marks.

**File size.** The product CSV may not exceed 15 MB. If you get an error or a timeout, split the file into several smaller ones and upload them one after another.

**Moving options.** If you move an option from position 1 to position 2, you can get an error such as "Line is invalid". The help describes a workaround with a temporary option name and a second import.

For the upload, the help recommends the Google Chrome browser.

## How the import runs

1. In the Shopify admin, go to **Products** and choose **Import**.
2. Add the CSV file.
3. Decide whether new products appear in all sales channels or only in the online store.
4. Decide whether existing products with the same handle should be overwritten.
5. **Upload and continue**, check the summary and confirm the import.

If the **Status** column is missing from the file, the help says products are uploaded as active. If you want to check new products first, set the status.

## Large import: test a small one first

Shopify advises partners doing a large import for a merchant to test a small subset in a development store first. This holds without partner status too: import two or three products first and check variants, images, prices and special characters. Only then run the whole file.

## Checklist before the import

1. Export of all products saved as a backup?
2. File in UTF-8, headers unchanged?
3. Sheet not sorted?
4. For variants: URL handle, Option1 name and Option1 value in every affected row?
5. Only columns that should change?
6. Overwrite option chosen on purpose?
7. Status column set?
8. Small test import done?

## When moving from another system

If the products come from WooCommerce, Wix, Shopware or another store, the CSV import is only one part of the move. On top of that come redirects from old addresses, customer data, orders and texts.

- Planning the addresses: [Moving to Shopify and SEO: Set Up Redirects](/blog/shopify-migration-weiterleitungen)
- Checklist for a complete move: [Moving from WooCommerce to Shopify](/blog/woocommerce-to-shopify)

## When a developer helps

For a few dozen products, many store owners manage with export, spreadsheet and import alone. Help is worthwhile when:

- the file comes from a foreign system and has to be rebuilt,
- many variants with several options are involved,
- existing products are to be overwritten without apps or orders suffering,
- the import is part of a move with a fixed launch date.

Who is responsible for what is explained in [Shopify help: when the Help Center is enough](/blog/shopify-help).

## Frequently asked questions

**Can I undo an import?** No. According to the Shopify help, a running CSV import cannot be canceled. So make a backup beforehand.

**Is Excel enough?** Yes, if the file is saved as CSV with commas between values and in UTF-8.

**Can I delete products with a CSV?** No, according to the help not in bulk. For that there are bulk actions under Products in the admin.

**What does a product import by a developer cost?** That depends on the scope and the state of the data. I do not name specific amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only work with publicly visible data, without access to your account. I also take care of the [move from WooCommerce to Shopify](/services/woocommerce-to-shopify), and everything else is under [Services](/services).

**Further reading:** [Shopify metafields and metaobjects](/blog/shopify-metafelder-metaobjects) · [Moving from Wix to Shopify](/blog/wix-zu-shopify-umzug) · [Managing inventory in Shopify](/blog/shopify-lagerbestand-verwalten) · [Setting up Shopify product variants](/blog/shopify-produktvarianten-optionen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
