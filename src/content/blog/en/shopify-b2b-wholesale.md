---
publishedAt: 2026-10-17
updatedAt: 2026-11-14
title: "Shopify B2B: trade prices, Quick Order and rules that hold"
date: 17 October 2026
readingTime: 4 min
excerpt: "Shopify B2B: retail customers and trade buyers shop in one store, with their own prices, Quick Order and purchase rules the server enforces."
image: /og/projects/orska-rituals.jpg
topic: build
tags:
  - Shopify
  - B2B
  - Wholesale
---

Many brands sell to retail customers and to retailers, salons or resellers. The trade prices then often run on the side, by email, PDF and spreadsheet. With Shopify B2B, both work in one store. The example here is [Orska Rituals](/projects/orska-rituals), a professional skincare brand for treatment rooms and spas.

## One store for both groups

A second store just for trade buyers means maintaining products, content and stock twice. At Orska everyone shops in the same store, but they do not see the same thing:

- **Logged-out visitors** see retail prices and a prompt to log in as a partner.
- **Approved professionals** see their wholesale prices, Quick Order and the Pro Vault, an area for members only.
- **Content for professionals only**, such as the prices of the chemical peels, stays hidden from everyone else.

## Trade prices by region

Wholesale prices do not have to be the same everywhere. At Orska the B2B catalogue and markets were already set up in Shopify before I joined. Shopify sets the price based on the company account a professional is logged in with, not a script in the theme. I added the worker below. It attaches a new company’s location to them.

## Trade accounts without manual work

In many B2B stores someone has to create every trade account by hand. At Orska a small Cloudflare Worker creates the company in Shopify as soon as a professional is approved. The professional has their wholesale account right away.

## Quick Order for professionals

People who reorder regularly do not want to click through product pages. At Orska only logged-in professionals see Quick Order. Retail customers see the normal store.

## Rules that hold even when someone bypasses the interface

A minimum quantity or a limit that lives only in the theme can be bypassed, for example with a direct cart link. That is why I check purchase rules on the server, with Shopify Functions.

At Orska the Discovery Kit is limited for the first order on three levels:

1. in the theme,
2. by a check on the server,
3. by an access rule in the client’s own apps, so that nobody outside the programme can buy it.

If one level fails, the others hold.

## Product data the team edits itself

Professionals need more information than retail customers. At Orska the ingredients, usage and target group of a product come from metafields. The team edits them in Shopify, without a developer and without code.

## Do I need Shopify Plus?

Not necessarily. According to the Shopify Help Center, Shopify B2B is available on the Basic, Grow, Advanced and Plus plans. Plus adds, among other things, unlimited catalogs, deposits and partial payments. Which of that you need, I settle with you on the intro call, before you switch plans. More in [Shopify Plus: what the plan unlocks](/blog/shopify-plus-wann-lohnt).

## Checklist before you start

- Who counts as a trade buyer, and how are they approved?
- Which prices apply to which group or region?
- Which minimum quantities and limits have to hold on the server?
- Which products and content are for trade buyers only?
- Who maintains product data, and where?
- Are the trade and retail views tested separately before go-live?
- Which order documents do trade buyers need, such as an invoice or packing slip? See [Creating invoices in Shopify](/blog/shopify-rechnung-bestelldokumente).

## Planning B2B?

I set up [B2B and wholesale in Shopify](/services/shopify-b2b), at a fixed price after the briefing. Request the free store check or book an intro call.

**Further reading:** [Shopify Markets](/blog/shopify-markets-mehrere-laender) · [Having a Shopify store built: cost](/blog/shopify-shop-erstellen-lassen-kosten) · [Shopify payment methods](/blog/shopify-zahlungsarten-deutschland) · [Importing products with CSV](/blog/shopify-produkte-importieren-csv) · [Shopify metafields and metaobjects](/blog/shopify-metafelder-metaobjects) · [Shopify taxes and VAT](/blog/shopify-steuern-mwst-einrichten) · [Shopify Flow: workflow automation without code](/blog/shopify-flow-automatisierung)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
