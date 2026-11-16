---
publishedAt: 2026-10-23
title: "Setting up Shopify shipping: zones, rates and the mistakes that stop customers at checkout"
date: 23 October 2026
readingTime: 5 min
excerpt: "How shipping zones, rates and profiles work together on Shopify, which rate types exist and which gaps make customers see a shipping error at checkout."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Shipping
  - Checkout
  - Shipping profiles
---

"Why does my customer see no shipping method at checkout?" The cause is almost always in the shipping settings, not the theme. Setting up Shopify shipping means four parts working together: zones, rates, profiles and markets.

## A note first

All statements come from the Shopify Help Center, as of October 2026. Shopify is gradually moving shipping profiles and rates to "shipping options by market". According to the Help Center, most stores keep their setup until they are upgraded, and existing rates are migrated automatically. The menus in your admin may therefore differ. Questions about customs, taxes or mandatory information belong with a lawyer or tax adviser.

## The building blocks

- **Shipping zone:** a group of countries or regions. According to the Help Center, a country can belong to only one zone within a shipping profile.
- **Shipping rate:** what the customer pays at checkout in that zone.
- **Shipping profile:** a set of rules for specific products and locations. The General profile is the default and cannot be deleted. You need custom profiles when some products ship differently.
- **Market:** customers can only order from active markets, per the Help Center. If a country is in a zone but its market is not active, nobody there can order. More in [Shopify Markets](/blog/shopify-markets-mehrere-laender).

In the admin: Settings > Shipping and delivery.

## The rate types

1. **Flat:** one fixed price, once per order by default. Charging per product works only with separate rates or an app, per the Help Center.
2. **Order amount:** different prices for value ranges.
3. **Weight:** different prices for weight ranges. Shopify adds your store's default package weight to each product's weight.
4. **Carrier or app calculated:** the price comes live from the carrier. You can add a markup (percentage or fixed amount) or, with a negative value, a discount.
5. **Free shipping:** can be set on any rate type according to the Help Center, for example via a minimum order amount or a price of 0.

Which carriers you can connect depends on country, location and plan. Check the Help Center or support first.

## The most common pitfalls

**1. Gaps between ranges.** If an order falls outside every range there is no rate, and the customer sees a shipping error, per the Help Center. Its advice: the lowest range starts at 0, and the highest leaves the maximum empty.

**2. Missing product weights.** Weight-based and calculated rates need a correct weight on every product, otherwise the price at checkout is wrong.

**3. Several profiles in one cart.** With products from different profiles or locations, the rates are combined into one, per the Help Center. That can raise the cost for the customer.

**4. One product in two profiles.** A product or variant can be in only one profile. Assigning it to a second removes it from the first.

**5. Fixed prices in a foreign currency.** Flat rates are converted when a local currency is active (per the Help Center only with Shopify Payments). For an exact amount in a region, create its own zone.

**6. Free shipping for single products or customers only.** For single products, create a custom profile with a free flat rate. For specific customers, create a free shipping discount code.

## How to test

Checkout shows shipping options only once a delivery address is entered, and only the matching ones. The cheapest is preselected. Place test orders:

- product from the General profile, delivery address in Germany;
- product with its own profile;
- mixed cart;
- address in a country you deliberately do not serve: a clear message should appear;
- cart just below and just above the free-shipping threshold.

Check this on your phone too. Next come [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland) and the packing slip in [Creating invoices in Shopify](/blog/shopify-rechnung-bestelldokumente).

## When a developer helps

For zones and rates you usually do not need one. Help is worthwhile with many profiles, with delivery-time and shipping-method logic the default settings cannot express, or when moving from another system ([WooCommerce to Shopify](/blog/woocommerce-to-shopify)).

Who handles what is explained in [Shopify help](/blog/shopify-help). The shipping policy text is generated from the same settings, see [Shopify store policies](/blog/shopify-rechtstexte-richtlinien).

## Frequently asked questions

**Can I offer free shipping above an order value?** Yes, on any rate type according to the Shopify Help Center. For a gift above an order value, read [Free gift over a minimum order value in Shopify](/blog/shopify-gratisartikel-warenkorb).

**Why does a customer see no shipping method?** Common reasons are an inactive market, a gap in the ranges or missing weights. A test order shows which.

**What does shipping cost?** That depends on your agreements with the carrier. I do not name amounts.

## How is your store doing?

Send me your store's address for the [free store check](#contact). I only check what is publicly visible, such as load time, apps in the page source and page structure, and tell you what stands out. What I do for stores is under [Services](/services) and [store rebuild and redesign](/services/shopify-redesign).

**Further reading:** [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen) · [Setting up taxes and VAT in Shopify](/blog/shopify-steuern-mwst-einrichten) · [Customizing Shopify email notifications](/blog/shopify-email-benachrichtigungen) · [Managing inventory in Shopify](/blog/shopify-lagerbestand-verwalten) · [Connecting Shopify to Google Shopping](/blog/shopify-google-shopping-merchant-center)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
