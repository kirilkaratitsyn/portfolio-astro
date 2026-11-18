---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Customizing the Shopify checkout: what works without Plus, what apps do and where code is needed"
date: 23 October 2026
readingTime: 8 min
excerpt: "Customizing the Shopify checkout: what the checkout editor does, what depends on your plan, what apps add and what happened to checkout.liquid."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Checkout
  - Checkout editor
  - Apps
---

You can customize the Shopify checkout, but not everything and not on every plan. Shopify itself is most responsible for the checkout, so it follows its own rules.

## A note on scope

Everything here comes from the Shopify Help Center and the developer documentation (shopify.dev), as of October 2026. Menus, plans and deadlines change, so check your admin.

## The checkout editor: your control centre

You do not customise the checkout in the theme editor but under **Settings** > **Checkout**: in the **Configurations** section, click **Edit** next to the configuration. According to the help, the "checkout and accounts editor" covers these pages:

- **Checkout** (with one-page checkout) or **Information**, **Shipping** and **Payment** (with three-page checkout)
- **Review**, the optional confirmation page, only if the matching setting is on
- **Thank you** and **Order status**
- Customer account pages: **Orders**, **Profile**, **Sign-in**

According to the help the editor works in a **simulated environment**. You cannot place orders there, and actions such as "Pay Now" are deactivated. Whether a flow works with a real order you only see in the shop itself.

## What works without Plus

According to the help, standard customisations are available from the Basic plan and advanced features only with Shopify Plus. For the style of the checkout the help names, among others:

- Adding a **logo**, with width and alignment left, centre or right
- **Colours** for header, main area, order summary, accents and buttons, plus your own **colour palette**
- A **font** from a list
- An **order summary** with a background colour or image

The help advises a simple design with high-contrast colours, because customers enter shipping and payment details at checkout.

**A change since February 2026:** according to the help you can no longer add a background image to the header and the main area of the checkout since 5 February 2026. An image that is already set can only be removed and cannot be added again afterwards.

## What only works with Plus

According to the help:

- **Checkout editor:** from the Basic plan.
- **Apps for the Thank you and Order status pages:** from Basic, as far as they are listed as eligible.
- **Apps for the Information, Shipping and Payment pages:** **only with Shopify Plus**.
- **Checkout Branding API** for advanced design by code: **only with Plus**.
- **Custom apps built with Shopify Functions:** **only with Plus**. Public apps with Functions are also available from Basic.
- **Checkout Blocks**, a free Shopify app for customisations with UI extensions and Functions: from Basic with limited features, on Plus without those limits.
- **Customisation for individual markets** (for example a notice for one market only): only on the Advanced or Plus plan.

So changes to address, shipping and payment are reserved for Plus, apart from the limited scope of Checkout Blocks.

## One page or three

According to the help the **one-page checkout** is the default: contact details, shipping and payment appear on one page. You choose the three-page checkout in the editor's settings. According to the help both collect the same information, and your customisations keep working after a switch. The help names two possible effects:

- The header looks different. A background image may display incorrectly and would have to be replaced with a colour.
- New customisable wording appears. Check it if you have changed texts or translations.

Address suggestions in the checkout come, according to the help, from a service such as Google Autocomplete and are also available for customers in Germany, Austria and Switzerland.

## Apps and blocks in the checkout

Features such as an upsell in the order summary reach the checkout through apps, according to the help. You install the app from the Shopify App Store and add it in the editor as a **block**, through the **Sections** or **Apps** sidebar. Some blocks can only be placed in certain areas. Per highlighted area the help names an upper limit of **three apps**.

You can filter the App Store for apps that customise the checkout.

## checkout.liquid: the old method has been replaced

For `checkout.liquid` and "Additional scripts", shopify.dev says:

- For the Information, Shipping and Payment steps `checkout.liquid` is no longer supported.
- For the Thank you and Order status pages `checkout.liquid` and additional scripts were sunset on 28 August 2025.
- Script tags were sunset there on 28 August 2025 for Plus shops and, according to the page, on 26 August 2026 for shops without Plus. That date has now passed.

Shops that still use `checkout.liquid` there have to move to Shopify Extensions in Checkout, according to the documentation. For this, shopify.dev recommends a public app built with extensions, a custom app or a service partner. Plan the upgrades for checkout, thank-you page and order status page together where possible, so you do not maintain two technology stacks.

## Drafts and tests before going live

The checkout can be saved in several **configurations**. According to the help, shops on Plus can create up to 99 drafts, shops on Basic, Grow and Advanced up to 20. Only one configuration is ever active. A published draft replaces it, and the previous one becomes a draft. The help advises **duplicating** the configuration before bigger style changes and testing drafts before sale periods such as Black Friday.

## What the help does not answer here

The help pages do not say **which customisation raises your completion rate**, which checkout app is the right one for your shop or how a change affects load time and abandoned payments. Which notices and mandatory information at checkout are legally required is a question for your legal adviser (see also [store policies and legal texts](/blog/shopify-rechtstexte-richtlinien)).

## Examples from practice

For [Elanora Skin](/projects/elanora-skin), a skincare brand I support on an ongoing basis, I build custom checkout extensions that fit the store's design and its markets.

## Before you start: a checklist

1. Which **plan** are you on, and what is possible on it?
2. Only the **look** (logo, colours, font) or also the **function** (upsell, extra fields, notices)?
3. **One-page or three-page checkout**? Effects on header and texts checked?
4. **Public app** or a solution of your own?
5. Still using **checkout.liquid, additional scripts or script tags**, above all on the thank-you and order status pages? Then the move is due.
6. Change built in a **draft**, with a copy of the active configuration?
7. Checked with a **real test order**, on desktop and phone?
8. Several countries: texts and labels checked in every language? (See [Shopify Markets](/blog/shopify-markets-mehrere-laender).)

## When a developer helps

You change logo, colours and font yourself in the editor. Help is worthwhile when:

- a feature is missing that no ready-made app provides
- you have to move away from `checkout.liquid`
- custom logic for discounts or shipping is needed
- checkout, cart and offers should fit together, as with [free items in the cart](/blog/shopify-gratisartikel-warenkorb)

More on this: [Customizing a Shopify theme](/blog/shopify-theme-customization) and [Shopify maintenance](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Can I customise the checkout without Plus?** Yes, within limits. According to the help, logo, colours, font and apps for the thank-you and order status pages work from Basic. Apps for Information, Shipping and Payment are available only with Plus.

**Can I set a background image in the checkout?** Not any more, according to the help: since 5 February 2026 no new background image can be added to the header and the main area. For the order summary the help still names a background image or colour.

**Does my old checkout.liquid still work?** For Information, Shipping and Payment it is no longer supported, according to shopify.dev. For the thank-you and order status pages it was sunset on 28 August 2025.

**Can I test changes without touching the live checkout?** Yes, through draft configurations. The editor does not replace a real order, because it only simulates.

**What does the customisation cost?** That depends on the scope. I do not name amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only check publicly visible data such as load time, apps in the source code and page structure, without access to your account. What I do for stores is under [Services](/services).

**Further reading:** [Shopify payment methods in Germany](/blog/shopify-zahlungsarten-deutschland) · [Setting up shipping in Shopify](/blog/shopify-versand-einrichten) · [Creating Shopify bundles](/blog/shopify-bundles-erstellen) · [Setting up Shopify subscriptions](/blog/shopify-abos-subscriptions) · [Discount code or automatic discount in Shopify](/blog/shopify-rabattcodes-automatische-rabatte) · [Setting up pre-orders in Shopify](/blog/shopify-vorbestellung-preorder) · [Shopify try before you buy](/blog/shopify-try-before-you-buy) · [Having a Shopify app built](/blog/shopify-app-entwickeln-lassen) · [Shopify Plus: what the plan unlocks](/blog/shopify-plus-wann-lohnt)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
