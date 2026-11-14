---
publishedAt: 2026-10-23
title: "Setting up taxes and VAT in Shopify: price display, EU rules, OSS and what to clarify first"
date: 23 October 2026
readingTime: 8 min
excerpt: "Setting up taxes and VAT in Shopify: prices with or without tax, tax service, EU sales with OSS, overrides, shipping tax, VAT numbers and invoices."
image: /og/projects/lineargent.jpg
topic: build
tags:
  - Shopify
  - Taxes
  - VAT
  - OSS
---

"Does my store show prices with or without VAT, and what happens when I sell to France?" That is often the first question when merchants start setting up taxes and VAT in Shopify.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus and thresholds change, so check your admin. Which rate applies and where you register is a question for your tax advisor or tax authority. According to the help, Shopify does not give tax advice. Menu names are taken from the English interface.

## Who is responsible for tax

According to the help, you are. Shopify calculates the tax and collects it at checkout. It remits and files only with Shopify Tax and automated filing, and that does not apply everywhere. You confirm the default rates in the admin yourself.

The order in the help: work out where you have to collect tax, register there, set up collection under **Settings > Taxes and duties**, file returns on the required schedule.

## Showing prices with or without tax

By default Shopify shows prices **without** tax and VAT, and tax is added at checkout. Two options change that:

- **Tax-inclusive pricing:** tax is part of product prices and shipping rates, and the displayed price is the final price. At checkout it appears as its own line, and subtotal and total stay the same.
- **Dynamic by customer country:** prices show with or without tax depending on location, for example including VAT in the EU and excluding tax in the US. Set per market, see [Shopify Markets](/blog/shopify-markets-mehrere-laender).

According to the help, both change only the **display**, not the calculation:

- With inclusive prices the tax portion is calculated out of the price you set.
- **Charge tax on this product** should stay on for products.
- A tax-exempt customer still pays the full listed price with inclusive prices.
- Managed Markets and duties and import taxes at checkout can override the tax settings.

## Which tax service you use

For the EU the help names several routes:

- **Shopify Tax:** calculates rates from your registrations and product categories. Each calendar year the service is free up to a sales threshold per store. The amounts are on the help page "Choose a tax service".
- **Basic Tax:** in the EU, according to the help, only for stores that were set up to collect tax there **before May 13, 2026**. New stores use Shopify Tax or manual tax settings.
- **Manual Tax:** you enter the rates yourself. They are updated only when you click **Reset to default tax rates** again. Missing features include calculation by product category, customer and B2B tax exemptions, tax liability insights and VAT invoices.
- **Tax apps** from third parties for special cases.

Do not mix services. According to the help, Manual Tax next to Basic Tax or Shopify Tax can lead to wrongly collected duties in the EU and UK.

## Selling across the EU: registration, threshold, OSS

For merchants in the EU the help says:

- Customers in your **home country** pay your local VAT rate.
- For **other EU countries** a shared limit of **€10,000** annual sales to all other EU countries combined applies. Below it you can charge your home country's rate (the micro-business exemption, which you may have to apply for with your tax authority) or choose OSS. From €10,000 the customer's country rate applies, through OSS or a registration there.
- If you sell to other EU countries, you typically need **a registration in your own country**.
- With **OSS (One-Stop Shop)** you remit VAT for all EU countries together. In Shopify OSS is available only with Shopify Tax or Basic Tax.
- A **significant presence** (such as a warehouse or shop) can require a separate registration in that country.

Under **Settings > Taxes and duties > Regional settings > European Union** you choose one of three registration types: local VAT registration, OSS or the micro-business exemption ("home country registration"). If you use the exemption and later have to be registered in other countries, you switch to OSS or a country-specific registration first.

## Product categories and tax overrides

For products without the standard rate there are two ways:

- **Product categories** (Shopify Tax only): you assign products a category from Shopify's standard taxonomy. The service derives reduced rates or exemptions from it.
- **Tax overrides:** you assign a rate to a **manually filled collection**. The percentage is the rate that is collected, not the exempted share. This does not work with automated collections. For single products it is enough to turn off **Charge tax on this product**.

The order of precedence:

- An override takes precedence over the product category.
- A customer exemption takes precedence over all overrides.
- For an EU override you need at least one registration in the EU.

"0%" can be set, but that does not make it correct. According to the help, always check the rate with the tax authority.

## Tax on shipping

In the EU shipping is taxed according to the help, regardless of the **Charge tax on shipping rates** setting. That option only affects countries where tax is not calculated automatically. Mixed carts fall under "proportional shipping tax", depending on the country. Free items are not automatically tax exempt, you set that on the product. On shipping rates: [Setting up shipping in Shopify](/blog/shopify-versand-einrichten).

## B2B: VAT numbers at checkout and invoices

Two features for business customers, both with Shopify Tax only:

- **VAT validation at checkout:** customers enter a VAT ID and use the reverse charge procedure on cross-border orders in the EU or to the UK. No VAT is charged, the customer reports it themselves, and the invoice carries a note on it. According to the help this applies only if the destination country differs from the fulfillment country, and only for guest or Shop Pay checkout, not for B2B-specific checkouts. You turn on the **Company VAT number** field in the checkout options. More: [Shopify B2B and wholesale](/blog/shopify-b2b-wholesale).
- **VAT invoices for the EU and UK:** you activate them in the tax settings, and customers find them on the order status page. Conditions according to the help: destination in the EU or UK, VAT was calculated (even if zero), order placed through Shopify checkout, no duties charged. After order changes you adjust the PDF manually. There are no automatic VAT invoices for Portugal. See also [Invoices and order documents in Shopify](/blog/shopify-rechnung-bestelldokumente).

## Reports and tax liabilities

With Shopify Tax the store monitors your sales and locations. According to the help you get monthly notices, and in the admin each registration shows whether you are below, approaching or over a threshold. That is not a registration recommendation. For filing, reports such as **Taxes** and **Total sales by order** (as CSV) provide figures for your tax advisor.

## What the help does not answer here

The help pages say nothing about:

- **which rate applies to your products in Germany**
- whether you should use the small business scheme or switch to OSS
- how to handle returns and payments to the tax office and reconcile them with your accounting
- whether gross or net prices suit your audience and which mandatory details have to appear in the store

That belongs to your tax advisor and a lawyer. On legal texts: [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien).

## Examples from practice

Among my published projects there is no case where I set up a store's taxes, and I do not invent one.

## Before you start: a checklist

1. **Destination countries:** Germany only or other EU countries too, below or above **€10,000** there?
2. **Registration:** which one do you have, agreed with your tax advisor?
3. **Tax service:** Shopify Tax, Basic Tax (only if already used before May 13, 2026) or manual rates?
4. **Price display:** gross, only in your own country or dynamic per market?
5. **Reduced rates or exemptions:** by category or override collection?
6. **Shipping:** taxed correctly, including in mixed carts?
7. **Business customers:** VAT ID at checkout?
8. **VAT invoices** turned on, **test order** checked for each destination country?

## When a developer helps

You set the basic settings yourself. Help is worthwhile here:

- Price display, markets and tax service have to work together.
- Override collections should be built cleanly.
- The VAT ID at checkout and invoices have to fit the flow with business customers.
- Rates and customer exemptions are carried over in a move from another system.

See also [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen) and [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Does Shopify show prices with VAT by default?** No, tax is added at checkout. Tax-inclusive pricing changes only the display.

**Does Shopify remit VAT to the tax office?** According to the help only with Shopify Tax and automated filing, and not everywhere.

**Do I need OSS?** Your tax advisor decides that. The help names €10,000 as the limit.

**Can I exempt single products?** Yes, on the product or through a manual collection with an override.

**Are there automatic invoices with VAT?** For the EU and UK yes, as VAT invoices with Shopify Tax.

**What does the setup cost?** That depends on the scope.

## What about your store?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, without access to your account. More under [Services](/services).

**Further reading:** [Shopify Markets](/blog/shopify-markets-mehrere-laender) · [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien) · [Invoices and order documents in Shopify](/blog/shopify-rechnung-bestelldokumente)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
