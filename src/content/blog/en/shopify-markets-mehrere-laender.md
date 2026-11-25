---
publishedAt: 2026-10-22
title: "Shopify Markets: selling to several countries without running several stores"
seoTitle: "Shopify Markets: sell internationally in multiple countries"
date: October 22, 2026
readingTime: 7 min
excerpt: "Is Shopify international? Yes: with Shopify Markets one store sells to multiple countries, each with its own currency, language and domain. What to settle first."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Markets
  - International
  - SEO
---

Your store sells in Germany, and orders arrive from Austria or Switzerland. Do you need a second store for that? Usually you don't. **Shopify Markets** is the part of Shopify built for selling internationally: one store sells to multiple countries, and each market gets its own currency, language and address.

## A note first

All statements about features and conditions come from the Shopify Help Center, as of October 2026. Shopify changes plans and features, so check important points in your own account. I do not quote plan prices.

From my own work: since the end of 2025 I have supported a skincare brand that sells in several markets and two languages ([Elanora Skin](/projects/elanora-skin)), with work on the theme and custom checkout extensions. I do not present the setup of the markets themselves, meaning domains, currencies and taxes, as a case of my own.

## What a market is

A market defines how customers experience your store depending on where they are. According to the Help Center you can set per market, among other things:

- the **currency**,
- which **products** are available,
- content in the theme,
- **domain** and **language**,
- **taxes** and shipping options, where available.

There are markets for countries or regions, for retail locations, for B2B customers and for sales channels. When several types overlap, the more specific one wins. The number of country markets is not limited. Discounts and gift cards work across markets.

For customers who match no active market there is a "backup region". According to the Help Center, though, only customers in countries of an active market can check out. Markets can only be activated for countries where you have set up shipping rates.

## What to settle first

According to the Help Center:

- **Paying in several currencies** needs Shopify Payments or Adyen. Without one of them, all markets pay in the store's default currency.
- **Fixed-amount discounts** can only be created in the default currency and are converted at checkout.
- **Post-purchase offer apps** only work in the default currency. These offers do not appear in markets with a different currency.
- **Staff permissions** cannot be assigned per market.
- **One theme** is published at a time. Per-market changes apply to that theme.
- **Plans:** regional markets are free on all plans. Currencies, domains, languages and taxes per market are available on all plans, per-market theme customization only from "Advanced" according to the Help Center.

My recommendation: go through this list before you add a country. Otherwise you may find out after launch that your payment provider cannot handle a second currency, and build twice.

## Prices and currencies

By default Shopify converts your prices at the current market exchange rate. You can also set the rate by hand. Per country or region you can store price adjustments or fixed prices in catalogs.

- Prices can be **rounded** per market so they do not end in odd amounts after conversion. According to the Help Center, rounding is only available with Shopify Payments.
- For customers to see the local currency, the store needs a **country selector**. Full functionality requires Shopify Payments with the one-page checkout, according to the Help Center.

## Language and address: which URL structure?

This decision is the hardest to change later. Shopify names four ways:

- **Primary domain only.** Simple, but no country addresses and no benefit for search.
- **Country domains** (such as `.at` or `.ch`). The strongest local signal, but each domain has to be registered and managed separately.
- **Subdomains** (such as `at.your-shop.com`). They need their own DNS records and, according to the Help Center, may build authority more slowly.
- **Subfolders** (such as `your-shop.com/de-at`). Shopify recommends them for most stores: they share the authority of the main domain with little effort.

Also note:

- Language-only folders like `/en` are possible only for the primary market. Other markets need language and country, following the pattern `/fr-ca`, for Austria something like `/de-at`.
- A custom domain instead of `myshopify.com` is required.
- If the primary domain changes, the subfolder addresses change too.

## Google: hreflang, canonical addresses, sitemap

For markets with their own domain, subdomain or subfolder, Shopify generates automatically, according to the Help Center:

- **hreflang tags** that tell Google which language version is meant for which country, with an `x-default` for the primary domain,
- **canonical addresses**,
- a **sitemap** with all market-specific addresses.

Your tasks: set up the markets, translate content with the **Translate & Adapt** app (Shopify distinguishes translating from adapting), and submit the sitemap in Search Console. Do not turn off the automatic hreflang tags unless you maintain your own. Shopify warns that this can hurt the store's SEO.

If you delete a market, its subfolder addresses lead to 404 errors unless you redirect them. Redirects can be imported by CSV, see [redirects when moving to Shopify](/blog/shopify-migration-weiterleitungen). If your store is already hard to find on Google, fix that before you expand: [Shopify store not found on Google](/blog/shopify-shop-bei-google-nicht-gefunden).

## Redirecting by country

According to the Help Center, Shopify automatically redirects customers to the address that matches their language and location. Search engine crawlers are excluded. Within the EU, Shopify does not redirect automatically, according to the Help Center. The older "Geolocation" app can no longer be installed since February 1, 2025. To link a market directly, use an address of the form `your-shop.com?country=DE`.

## Import duties and taxes

Outside the EU, for example in Switzerland, duties and import taxes can be charged on delivery. Shopify can collect them as an estimate at checkout. The amounts are set by customs based on classification, origin and destination. For the calculation Shopify needs, according to the Help Center, HS codes for your products. Which countries, checkout customizations and order types are supported is explained in the Shopify Help Center on duties.

For tax questions, such as VAT in other EU countries, please ask your tax advisor.

## My recommended order

This is an assessment from practice, not a Shopify requirement:

1. **One additional country**, not five at once. That shows you where it breaks.
2. **Settle payment and shipping first**, then prices.
3. **Subfolders as URL structure**, unless something speaks for a country domain.
4. **Adapt content**, not just translate it: delivery times, returns, contact and messages in the cart.
5. **After launch**, check in Search Console whether the new addresses get indexed.

On shipping per country: [Setting up Shopify shipping](/blog/shopify-versand-einrichten).

## Frequently asked questions

**Is Shopify international?** Yes. One Shopify store can sell to customers in other countries. You set this up under Markets, one market per country or region.

**How many countries can one store sell to?** According to the Help Center the number of country markets is not limited. A market can only be activated for countries where you have set up shipping rates.

**Do I need a separate store for Austria or Switzerland?** No, as a rule one store with several markets is enough.

**Do I have to translate everything?** For buyers in Austria German is enough. Translate further languages with Translate & Adapt or a translation app. The cookie banner and privacy policy belong in every store language too: [Shopify cookie banner and privacy policy](/blog/shopify-cookie-banner-datenschutz).

**Can I set different prices per country?** Yes, through catalogs with an adjustment or fixed prices.

**What does it cost?** According to Shopify, regional markets are free on all plans. The cost of payment, apps and translation depends on your decisions.

## Planning more countries?

Send me your store address for the [free store check](#contact). I only look at publicly visible data, without access to your account, such as how your addresses are built and what Google already knows.

More: [Services](/services) · [Having a Shopify store built: what to know first](/blog/shopify-shop-erstellen-lassen-kosten) · [Shopify freelancer or agency](/blog/shopify-freelancer-oder-agentur)

**Further reading:** [Shopify B2B: trade prices and Quick Order](/blog/shopify-b2b-wholesale) · [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland) · [Free gift over a minimum order value in Shopify](/blog/shopify-gratisartikel-warenkorb) · [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen) · [Creating invoices in Shopify](/blog/shopify-rechnung-bestelldokumente) · [Discount code or automatic discount in Shopify](/blog/shopify-rabattcodes-automatische-rabatte) · [Setting up Shopify gift cards](/blog/shopify-geschenkkarten-gutscheine) · [Setting up taxes and VAT in Shopify](/blog/shopify-steuern-mwst-einrichten) · [A multilingual Shopify store](/blog/shopify-mehrsprachig-uebersetzen) · [Shopify Plus plan: features and when it is worth it](/blog/shopify-plus-wann-lohnt)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
