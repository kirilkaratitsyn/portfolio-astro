---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Shopify metafields and metaobjects: maintaining and showing structured product data"
date: 23 October 2026
readingTime: 5 min
excerpt: "What metafields and metaobjects are in Shopify, how definition, values and theme fit together, what can be filtered and when a developer helps."
image: /og/projects/pedchem.jpg
topic: build
tags:
  - Shopify
  - Metafields
  - Metaobjects
  - Product data
---

Ingredients, dimensions, usage, technical data: some products need more details than title, description and price can carry. A long description gets cluttered and is hard to maintain. Shopify offers metafields and metaobjects for this.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus and features change, so check your admin. Which product details are legally required is a question for your legal adviser.

## Two terms: metafields and metaobjects

The help groups both under **custom data**:

- **Metafields** attach extra details to a product, a variant, a collection or a customer. Example: an "Ingredients" field.
- **Metaobjects** are standalone, reusable entries with several fields that do not have to belong to a product. The help gives Product highlight, FAQ, Event appearance and Influencer profile as examples.

My rule of thumb, not from the help: a detail for exactly one product is usually a metafield. A block for several places, such as an FAQ entry, is more likely a metaobject.

## No clean field without a definition

Metafields are created through a **definition**. According to the help it fixes the name and type of the field and can contain validation rules. The help advises using Shopify's **standard definitions** where possible and names an upper limit of 256 definitions per resource type.

Three steps:

1. **Create the definition:** name, type, rules if needed.
2. **Enter values:** per product or variant.
3. **Connect to the theme:** a value in the admin does not show up in the shop by itself.

## Showing it in the shop: dynamic sources or Liquid

According to the help there are two ways:

- **Dynamic sources:** in many themes you connect a field of a section to a metafield in the theme editor. Each product then shows its own value, without code.
- **Liquid:** a table built from several fields needs Liquid, Shopify's template language. The help says this requires coding experience and points to a Shopify Partner.

Access for the online store (**Storefronts access**) also has to be on. Metaobjects can be used through Liquid or the Storefront API. Their entries can be published as web pages, switch between draft and active, and be translated.

## Everyday upkeep: filtering and bulk editing

Two functions from the help:

- **Filter products in the admin:** this works when the option "Filter on the product list and in the Admin API" is on in the definition and the field type is supported.
- **Bulk editing:** under **Products**, **Edit products**, **Columns**, **Metafields** you show metafields as columns and edit many products at once.

CSV import does not support variant metafields, see [Importing products by CSV](/blog/shopify-produkte-importieren-csv).

## Taking over existing metafields

If metafields come from an earlier store or an app, the help says invalid values have to be fixed first, otherwise validation errors appear. For a move from Magento, Shopify's guide says attributes become metafields and the mapping should be settled before the migration, see [From Shopware or Magento to Shopify](/blog/shopware-magento-zu-shopify).

## What the help does not answer here

The help does not say **how to structure your product data** or which fields make sense in your industry. It also says nothing about search engines or load time.

## Examples from practice

For [Pedchem](/projects/pedchem), a pest control store, I gave the specification data of 323 products proper metafield types. Each product page generates a data table from them. At [Orska Rituals](/projects/orska-rituals) the accordions Key Ingredients, How To Use and Curated For read their data per product from metafields. The team maintains them in Shopify, without code.

## Before you start: a checklist

1. Which details should customers see?
2. Does a Shopify **standard definition** fit?
3. Field type and **validation** decided (text, number, choice, reference)?
4. Who maintains the values, and is bulk editing enough?
5. Should the field be **filterable** in the admin?
6. Is **access for the online store** on, and is the field connected to the theme?
7. Multilingual store: are the values translated? (See [Shopify Markets](/blog/shopify-markets-mehrere-laender).)
8. Existing metafields checked for **invalid values**?

## When a developer helps

For a few fields with dynamic sources you do not need one. Help is worthwhile when:

- data should appear as a table,
- many products come from an old system,
- metaobjects should become pages of their own.

More on this: [Customizing a Shopify theme](/blog/shopify-theme-customization), product data in wholesale under [Shopify B2B](/blog/shopify-b2b-wholesale), ongoing upkeep under [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Do I need an app for metafields?** No. According to the help, both are part of Shopify and are managed in the admin under Custom data.

**Where do I create metaobjects?** The definition under **Settings** > **Custom data**, the entries under **Content** > **Metaobjects**, according to the help.

**Can I display metafields without code?** Partly, through dynamic sources in the theme editor. More complex displays need Liquid.

**Can I import variant metafields by CSV?** Not according to the help. There is the bulk editor for variants.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only look at publicly visible data, without access to your account, and tell you what stands out. More under [Services](/services).

**Further reading:** [Creating Shopify bundles](/blog/shopify-bundles-erstellen) · [Setting up Shopify product variants](/blog/shopify-produktvarianten-optionen) · [Shopify collections and filters](/blog/shopify-kollektionen-filter)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
