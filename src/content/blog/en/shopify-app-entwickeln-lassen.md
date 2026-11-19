---
publishedAt: 2026-11-08
updatedAt: 2026-11-19
title: "Having a Shopify App Built: When a Custom App Makes Sense and When a Ready-Made App Is Enough"
seoTitle: "Shopify Custom App Development or a Ready-Made App? How to Decide"
date: November 8, 2026
readingTime: 6 min
excerpt: "Shopify custom app development or a ready-made app? Three routes to a missing feature, how a custom app project runs, access, upkeep and how to spot a good offer."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Apps
  - Custom App
---

Your store needs something Shopify doesn't include: a link to your inventory system, a special discount logic, an extra field at checkout. Do you need Shopify custom app development for that, or is a ready-made app enough? Often you don't need a custom one.

## Three routes to a feature

1. **A ready-made app from the Shopify App Store.** According to the Shopify Help Center, most apps are built by third-party developers, who also provide the support.
2. **A theme change.** Much of what sounds like an "app" is theme work: a section, a notice, a layout. See [Having your Shopify theme customized](/blog/shopify-theme-customization).
3. **A custom app.** Per Shopify, an app that you or a developer builds exclusively for your store, unlike a public app built for many stores.

My rule of thumb, not Shopify's: check them from top to bottom. The further down you land, the more upkeep follows.

## What a custom app can do, according to Shopify

Per the Help Center, custom apps can:

- add features to your Shopify admin,
- access your store's data directly through Shopify's APIs,
- extend your store to other platforms via the Storefront API.

They are managed in the **Dev Dashboard**. For the build, Shopify suggests hiring a Shopify Partner.

Two building blocks:

- **Extensions** add functionality to areas like the online store, checkout, customer accounts or POS, for example an extra field at checkout.
- **Functions** change backend logic: a custom discount type, delivery options, payment rules.

Per the Help Center, Shopify Scripts and the Script Editor were retired on June 30, 2026, and scripts no longer run on any store. Discounts, shipping and payment methods are now customized with apps that provide functions. More on checkout: [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen).

## Ready-made or custom: the decision

**A ready-made app fits better when** the feature is common (reviews, subscriptions, bundles), you need no special behavior and ongoing fees are acceptable. Look for the **Built for Shopify** badge: according to Shopify, such apps meet minimum standards for performance, design and integration, and may not lower your storefront speed by more than 10 performance points.

**A custom app fits better when** your process is unique, you must move data between the store and a system of your own, or a ready-made app solves several things only halfway. You pay once for the build and carry the upkeep afterwards.

Fees of a ready-made app: most go through your Shopify bill, some third-party apps charge you directly and separately. Check this before installing.

## How Shopify custom app development runs, step by step

This is the order I keep for custom app projects. It turns the points above into a plan you can check.

1. **Briefing:** what should happen, for whom, with which data. In the same conversation: would a ready-made app or a theme change be enough?
2. **Written scope:** what the app does and what it doesn't, which API scopes it will request and how you will accept it.
3. **Building outside your live store:** first on a development store, in small steps you can test one by one.
4. **Your acceptance:** you check the agreed cases before anything reaches the live store.
5. **Installation:** via the install link for your store. The install screen shows which data the app can access.
6. **Handover:** where the code lives, the documentation, and who owns the developer account.
7. **Upkeep:** agreed in advance, as ongoing support or on request.

## Access and data protection with custom apps

- **Permissions:** the developer defines through API scopes what data and features the app can reach. Ask why each scope is needed.
- **Install link:** the link works only for your store and, per Shopify, expires after seven days. The install screen lists the data the app can access.
- **Don't share your password:** a developer with a collaborator account can install custom apps for you when you grant the "Manage and install apps and channels" permission and activate "Approve app charges". More on this: [Switching your Shopify developer](/blog/shopify-entwickler-wechseln).
- **Personal data:** custom apps that access certain personal data (Level 2 PII) require your store to be on the Grow plan or higher, per the Help Center. Whether and how you may process customer data is a question for your legal adviser.
- **Access token:** for apps created in the Dev Dashboard the developer generates the token. You can't copy it from the admin.

## Don't forget upkeep

Per Shopify, apps that are no longer supported trigger warnings. They go to the developer whose account is linked to the app. Settle in advance who maintains the app and who receives the warnings.

Per the Help Center, a deleted custom app can't be recovered. To deactivate it, uninstalling is enough. On ongoing care: [Shopify maintenance and support](/blog/shopify-wartung-betreuung).

## How to recognize a good offer

- **It starts with the question whether an app is needed** or whether a ready-made app or a theme change is enough.
- **A clear scope:** what the app does, what it doesn't, how you accept it.
- **Justified permissions** instead of "grant everything".
- **Small, separately checkable steps**, tested outside your live store.
- **Handover and documentation:** where is the code, who owns the developer account?
- **A fixed price after the briefing** instead of a number without a look at your store.

## An example from practice

For [Elanora Skin](/projects/elanora-skin), a skincare brand I support on an ongoing basis, I built a custom checkout app whose extensions run in the checkout and fit the store's design.

The app was built for this one store only and is not in the App Store. I also publish my own app in the Shopify App Store, [Reviews Core](https://apps.shopify.com/reviews-core).

## Frequently asked questions

**Do I need an app for every extra feature?** No. Check Shopify's built-in options, theme changes and ready-made apps first.

**Can I later list a custom app in the App Store or use it for other stores?** According to Shopify, custom apps can only be installed on stores in the same organization, not for other merchants. Publishing is a project of its own.

**What if the developer is no longer available?** That is why code access and documentation belong in the agreement. Rights to the code are governed by the contract.

**What does it cost?** It depends on scope. With me you get a fixed-price offer after the briefing.

## Do you really need an app?

Send me your shop address for the [free Shop-Check](#contact). I will tell you whether a ready-made app, a theme change or something custom makes sense. For ongoing support: [Shopify support](/services/shopify-betreuung) with a clear scope.

**Further reading:** [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen) · [Switching your Shopify developer](/blog/shopify-entwickler-wechseln) · [Shopify theme customization](/blog/shopify-theme-customization) · [Hiring someone to optimize your Shopify store](/blog/shopify-shop-optimieren-lassen) · [Shopify Plus: what the plan unlocks](/blog/shopify-plus-wann-lohnt)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
