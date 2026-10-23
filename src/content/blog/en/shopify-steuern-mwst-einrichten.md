---
publishedAt: 2026-10-23
title: "Setting up taxes and VAT in Shopify: price display, EU rules, OSS and what to clarify first"
date: 23 October 2026
readingTime: 9 min
excerpt: "Taxes in Shopify: showing prices with or without tax, choosing a tax service, selling across the EU with OSS and the threshold, tax overrides, shipping tax, VAT numbers at checkout and invoices."
image: /og/projects/lineargent.jpg
topic: build
tags:
  - Shopify
  - Taxes
  - VAT
  - OSS
---

"Does my store show prices with or without VAT, and what happens when I sell to France?" That is often the first tax question in the Shopify admin. The settings exist, but they depend on each other: price display, tax service, registrations, exceptions. This article shows what the Shopify Help Center says, for merchants without a technical background.

## A note on scope

Everything here comes from the Shopify Help Center, as of October 2026. Menus, availability and thresholds change, so check your admin. I do not name prices for apps or development. Which rate applies to your products, where you have to register and how you file returns is a question for your tax advisor or tax authority. The help itself says Shopify does not give tax advice. This article is only about the technology. Menu names are taken from the English interface.

## Who is responsible for tax

The help is clear here: tax is your responsibility. Shopify does not remit or file taxes unless you use Shopify Tax with automated filing, and that does not apply everywhere. Default rates in the admin have to be confirmed by you. Shopify calculates the tax and collects it at checkout, nothing more.

The general steps in the help: work out where you have to collect tax, register there, set up collection under **Settings > Taxes and duties**, use product categories or tax overrides for reduced rates or exemptions, file returns on the required schedule and keep an eye on your sales.

## Showing prices with or without tax

By default Shopify shows prices **without** tax and VAT, and tax is added at checkout. In many markets that is unusual. The help names two changes:

- **Tax-inclusive pricing:** in the tax settings you turn on the option to include tax in product prices and shipping rates. The displayed price is then the final price. Tax appears at checkout as its own line, and subtotal and total stay the same.
- **Dynamic by customer country:** prices show with or without tax depending on location, for example including VAT in the EU and excluding tax in the US. You set this per market, more in [Shopify Markets: selling in several countries](/blog/shopify-markets-mehrere-laender).

Important according to the help: both change only the **display**, not the calculation. With inclusive prices the tax portion is calculated out of the price you set. **Charge tax on this product** should also stay on for products so that the tax is part of the price. And: if a customer is marked tax exempt but you use inclusive prices, they still pay the full listed price, says the help. Managed Markets and duties and import taxes at checkout can override the tax settings.

## Which tax service you use

For the EU the help distinguishes several routes:

- **Shopify Tax:** calculates rates from your registrations and product categories. Each calendar year the service is free up to a sales threshold per store, above that standard rates apply. The amounts are on the help page "Choose a tax service", I do not name them.
- **Basic Tax:** in the EU available according to the help only if your store was set up to collect tax there **before May 13, 2026**. Stores already using Basic Tax can keep using it. New stores use Shopify Tax or manual tax settings.
- **Manual Tax:** you enter the rates yourself. Default rates are not updated automatically afterwards unless you click **Reset to default tax rates** again. In return, features such as automatic calculation by product category, customer and B2B tax exemptions, tax liability insights and VAT invoices are missing.
- **Tax apps** from third parties for special cases.

The help advises against mixing services: using Manual Tax together with Basic Tax or Shopify Tax in the EU and UK can mean duties are not collected correctly.

## Selling across the EU: registration, threshold, OSS

For merchants in the EU the help describes this logic:

- Customers in your **home country** pay your local VAT rate.
- For customers in **other EU countries** a shared limit of **€10,000** annual sales to all other EU countries combined applies. Below it you can keep charging your home country's rate (the micro-business exemption, which you may have to apply for with your tax authority) or choose OSS. From €10,000 the customer's country rate applies, through OSS or a registration there.
- **A registration in your own country** is typically needed, says the help, if you want to sell to other EU countries.
- **OSS (One-Stop Shop)** lets you collect and remit VAT for all EU countries together instead of registering in each one. In Shopify OSS is available only if you use Shopify Tax or Basic Tax. With Manual Tax you enter the rates yourself.
- A **significant presence** in a country (such as a warehouse or shop) can require its own registration there. You clarify that with the authority or your tax advisor.

In the admin: **Settings > Taxes and duties > Regional settings > European Union**. There you choose one of three registration types: local VAT registration, OSS or the micro-business exemption ("home country registration"). If you use the exemption and later have to be registered in other countries, you lose it. You then switch to OSS or a country-specific registration first.

## Product categories and tax overrides

Not every product has the standard rate. Shopify offers two ways:

- **Product categories** (Shopify Tax only): you assign products a category from Shopify's standard taxonomy, and the service takes reduced rates or exemptions into account. According to the help this reduces the need for overrides.
- **Tax overrides:** you create a **manually filled collection** with the affected products and assign it a rate. Important: the percentage you enter is the rate that is collected, not the exempted share. Overrides work only with manually filled collections, not automated ones. For single products it is enough to turn off **Charge tax on this product**.

Note: an override takes precedence over the product category. A customer exemption takes precedence over all overrides. For an EU override you need at least one registration in the EU. That "0%" is a possible setting does not mean it is correct: the help advises always checking the rate with the tax authority.

## Tax on shipping

In the EU shipping is taxed according to the help, regardless of the **Charge tax on shipping rates** setting. That option only affects countries where tax is not calculated automatically. Mixed carts with taxable and non-taxable items are covered by the help under "proportional shipping tax", and the rule depends on the country. Free items are not automatically tax exempt, they have to be set on the product. More on the rates themselves: [Setting up shipping in Shopify](/blog/shopify-versand-einrichten).

## B2B: VAT numbers at checkout and invoices

Two features mainly concern business customers, both with Shopify Tax only:

- **VAT validation at checkout:** customers enter a VAT ID and can use the reverse charge procedure on cross-border orders in the EU or to the UK. Then no VAT is charged, the customer reports it themselves, and a reverse charge note appears on the invoice. According to the help this applies only if the destination country differs from the fulfillment country, and only for guest or Shop Pay checkout, not for B2B-specific checkouts. You turn on the **Company VAT number** field in the checkout options. More on B2B: [Shopify B2B and wholesale](/blog/shopify-b2b-wholesale).
- **VAT invoices for the EU and UK:** you activate them in the tax settings. They show on the order status page, where customers can save or print them. The help names conditions: destination in the EU or UK, VAT was calculated (even if zero), the order went through Shopify checkout and no duties were charged. After order changes they are not regenerated, so you adjust the PDF manually. There are no automatic VAT invoices for orders to Portugal. How invoices and order documents look in general: [Invoices and order documents in Shopify](/blog/shopify-rechnung-bestelldokumente).

## Reports and tax liabilities

With Shopify Tax the store monitors your sales and locations so you can see in which EU countries obligations might arise. According to the help you get monthly notices, and in the admin each registration shows whether you are below, approaching or over a threshold. No registration recommendation follows from that, the help points to tax experts. For filing itself, reports such as **Taxes** and **Total sales by order** (as CSV) provide figures for your tax advisor.

## What the help does not answer here

The help pages say nothing about **which rate applies to your products in Germany**, whether you should use the small business scheme, whether you should switch to OSS at your sales level, how to handle returns and payments to the tax office, or how accounting and Shopify reports fit together. They also leave open how prices work for your audience (gross or net) and which mandatory details have to appear in the store. That belongs to your tax advisor and a lawyer. On legal texts in the store: [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien). And what the implementation costs depends on the scope.

## Examples from practice

Among my published projects there is no case where I set up a store's taxes, and I do not invent one. These settings depend on the merchant's registration and should be agreed with the tax advisor before they are mirrored in the admin. That is exactly the order the help describes: first clarify where tax arises, then set it up.

## Before you start: a checklist

1. Where do you sell? **Germany only** or **other EU countries** too, and is your sales there below or above **€10,000**?
2. Which **registration** do you have, and was it agreed with your tax advisor?
3. Which **tax service** fits: Shopify Tax, Basic Tax (only if already used before May 13, 2026) or manual rates?
4. Should prices show **gross**, only in your own country or **dynamically** per market?
5. Do products have **reduced rates or exemptions**, by category or by override collection?
6. Is **shipping** taxed correctly, including in mixed carts?
7. Do you sell to **business customers**, and should they enter the VAT ID at checkout?
8. Are **VAT invoices** turned on, and have you checked a **test order** for each destination country?

## When a developer helps

You set the basic settings yourself. Help is worthwhile when price display, markets and tax service have to work together, when override collections should be built cleanly, when the VAT ID at checkout and invoices have to fit the flow with business customers, or when rates and customer exemptions are carried over in a move from another system. Checkout limits are covered in [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen). After that the setup belongs in the ongoing upkeep, see [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Does Shopify show prices with VAT by default?** No. By default without tax, and tax is added at checkout. With tax-inclusive pricing you change that, the calculation stays the same.

**Does Shopify remit VAT to the tax office?** According to the help not, only with Shopify Tax and automated filing, and not everywhere. Filing and payment are up to you.

**Do I need OSS?** Your tax advisor decides that. The help describes OSS as a simplification for sales to other EU countries and names €10,000 as the limit.

**Can I exempt single products?** Yes, on the product or through a manual collection with an override. Which rate applies, you clarify with the tax authority.

**Are there automatic invoices with VAT?** For the EU and UK yes, as VAT invoices with Shopify Tax, under the conditions above.

**What does the setup cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, such as load time, apps in the source code and how pages are built, and tell you what stands out. I only work with publicly visible data, without access to your account. What else I do for stores is under [Services](/services).

**Further reading:** [Shopify Markets](/blog/shopify-markets-mehrere-laender) · [Store policies and legal texts](/blog/shopify-rechtstexte-richtlinien) · [Invoices and order documents in Shopify](/blog/shopify-rechnung-bestelldokumente)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
