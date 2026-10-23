---
publishedAt: 2026-10-17
title: "Shopify B2B: trade prices, Quick Order and rules that hold"
date: 17 October 2026
readingTime: 4 min
excerpt: How retail customers and trade buyers shop in the same Shopify store, with their own prices, Quick Order and purchase rules the server enforces. From a real project.
image: /og/projects/orska-rituals.jpg
topic: build
tags:
  - Shopify
  - B2B
  - Wholesale
---

Many brands sell to two groups: to retail customers and to retailers, salons or resellers. The trade prices then often run on the side, by email, PDF and spreadsheet. This can work in one store. This article shows how I set up B2B in Shopify, using the example of [Orska Rituals](/projects/orska-rituals), a professional skincare brand for treatment rooms and spas.

## One store for both groups

A second store just for trade buyers means maintaining products, content and stock twice. So at Orska everyone shops in the same store, but they do not see the same thing:

- **Logged-out visitors** see retail prices and a prompt to log in as a partner.
- **Approved professionals** see their wholesale prices, Quick Order and the Pro Vault, an area for members only.
- **Content for professionals only**, such as the prices of the chemical peels, stays hidden from everyone else.

## Trade prices by region

Wholesale prices do not have to be the same everywhere. At Orska they are set by region. Which price someone sees is decided by Shopify, based on the company account a professional is logged in with, not by a script in the theme.

## Trade accounts without manual work

The bottleneck in many B2B stores is approval: someone has to create every trade account by hand. At Orska a small Cloudflare Worker creates the company in Shopify as soon as a professional is approved. The professional has their wholesale account right away, with nobody having to step in.

## Quick Order for professionals

People who reorder regularly do not want to click through product pages. At Orska, Quick Order appears only for logged-in professionals. Retail customers see the normal store.

## Rules that hold even when someone bypasses the interface

This is where most mistakes happen. A minimum quantity or a limit that lives only in the theme can be bypassed, for example with a direct cart link. That is why I check purchase rules on the server, with Shopify Functions.

At Orska the Discovery Kit is limited for the first order, on three levels:

1. in the theme, that is, in the interface,
2. by a check on the server,
3. by an access rule, so that nobody outside the programme can buy it.

If one level fails, the others hold.

## Product data the team edits itself

Professionals need more information than retail customers. At Orska the ingredients, how to use a product and who it is meant for come from metafields. The team edits them in Shopify, without a developer and without code.

## Do I need Shopify Plus?

It depends on which B2B features you need and what your plan includes. I settle that with you on the intro call, before you change anything or switch plans.

## Checklist before you start

- Who counts as a trade buyer, and how are they approved?
- Which prices apply to which group or region?
- Which minimum quantities and limits have to hold on the server?
- Which products and content are for trade buyers only?
- Who maintains product data, and where?
- Test the trade and retail views separately before go-live.
- Which order documents do trade buyers need, such as an invoice or packing slip? (See [Creating invoices in Shopify](/blog/shopify-rechnung-bestelldokumente).)

## Planning B2B?

I set up [B2B and wholesale in Shopify](/services/shopify-b2b), at a fixed price after the briefing. Request the free store check or book an intro call.

**Further reading:** [Shopify Markets: selling to several countries](/blog/shopify-markets-mehrere-laender) · [Having a Shopify store built: what the cost depends on](/blog/shopify-shop-erstellen-lassen-kosten) · [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland) · [Importing products into Shopify with a CSV file](/blog/shopify-produkte-importieren-csv) · [Shopify metafields and metaobjects: structured product data](/blog/shopify-metafelder-metaobjects)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
