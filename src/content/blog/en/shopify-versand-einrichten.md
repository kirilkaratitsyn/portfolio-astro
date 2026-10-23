---
publishedAt: 2026-10-23
title: "Setting up Shopify shipping: zones, rates and the mistakes that stop customers at checkout"
date: 23 October 2026
readingTime: 7 min
excerpt: "How shipping zones, rates and profiles work together on Shopify, which rate types exist and which gaps make customers see a shipping error at checkout."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Shipping
  - Checkout
  - Shipping profiles
---

"Why does my customer see no shipping method at checkout?" This is one of the more common questions after launch, and the cause is almost always in the shipping settings, not the theme. This text explains how the parts fit together: zones, rates, profiles and markets. It is written for store owners without a technical background.

## A note first

All statements come from the Shopify Help Center, as of October 2026. Shopify is gradually moving shipping profiles and rates to "shipping options by market". According to the Help Center, most stores keep their current setup until they are upgraded, and existing rates are migrated automatically. The menus in your admin may therefore differ from what is described here. I do not name shipping costs, and questions about customs, taxes or mandatory information belong with a lawyer or tax adviser.

## The building blocks

- **Shipping zone:** a group of countries or regions. According to the Help Center, a country can belong to only one zone within a shipping profile.
- **Shipping rate:** what the customer pays at checkout in that zone.
- **Shipping profile:** a set of rules for specific products and locations. The General profile is the default and cannot be deleted; you need custom profiles when some products ship differently from the rest.
- **Market:** customers can only order from active markets, per the Help Center. If a country is in a zone but its market is not active, nobody there can order. More in [Shopify Markets](/blog/shopify-markets-mehrere-laender).

You find the settings in the admin under Settings > Shipping and delivery.

## The rate types

1. **Flat:** one fixed price for every order. Flat rates apply once per order by default. Charging per product works only with separate rates or an app, per the Help Center.
2. **Order amount:** different prices for value ranges.
3. **Weight:** different prices for weight ranges. Shopify adds your store's default package weight to each product's weight.
4. **Carrier or app calculated:** the price comes live from the carrier. You can add a markup (percentage or fixed amount) or, with a negative value, a discount.
5. **Free shipping:** can be set on any rate type according to the Help Center, for example via a minimum order amount or a price of 0.

Which carriers you can connect depends on country, location and plan; check the Help Center or support before planning around it.

## The most common pitfalls

**1. Gaps between ranges.** If an order falls outside every range there is no rate, and the customer sees a shipping error, per the Help Center. Its advice: the lowest range starts at 0, and the highest leaves the maximum empty.

**2. Missing product weights.** Weight-based and calculated rates need a correct weight on every product, otherwise the price at checkout is wrong.

**3. Country in a zone, market not active.** See above: no active market, no order.

**4. Several profiles in one cart.** If a cart holds products from different profiles or locations, the rates are combined into one, which can raise the cost for the customer, per the Help Center. Test with a mixed cart.

**5. One product in two profiles.** A product or variant can be in only one profile; assigning it to a second removes it from the first.

**6. Fixed prices in a foreign currency.** Flat rates are converted when a local currency is active (per the Help Center only with Shopify Payments). If you want an exact amount for a region, create its own zone.

**7. Free shipping for single products or customers only.** For single products, create a custom profile with a free flat rate; for specific customers, a free shipping discount code.

## How to test

Checkout shows shipping options only once a delivery address is entered, and only the matching ones, with the cheapest preselected. So place test orders that run through each case:

- a product from the General profile, delivery address in Germany;
- a product with its own profile;
- a mixed cart;
- an address in a country you deliberately do not serve, which should show a clear message;
- a cart just below and just above the free-shipping threshold.

Check this on your phone too. How to settle payment afterwards is in [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland).

## When a developer helps

For zones and rates you usually do not need one. Help is worthwhile with many profiles, with delivery-time and shipping-method logic the default settings cannot express, or when a move from another system is coming ([WooCommerce to Shopify](/blog/woocommerce-to-shopify)). Who handles what is explained in [Shopify help: when the Help Center is enough](/blog/shopify-help).

## Frequently asked questions

**Can I offer free shipping above an order value?** Yes, on any rate type according to the Shopify Help Center.

**Why does a customer see no shipping method?** Common reasons are an inactive market, a gap in the ranges or missing weights. A test order finds it quickly.

**What does shipping cost?** That depends on your agreements with the carrier. I do not name amounts here.

## How is your store doing?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, such as load time, apps in the page source and the structure of the pages, and tell you what stands out. I only work with publicly visible data, without access to your account. What I do for stores is under [Services](/services) and [store rebuild and redesign](/services/shopify-redesign).

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
