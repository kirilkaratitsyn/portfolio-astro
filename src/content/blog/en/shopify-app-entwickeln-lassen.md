---
publishedAt: 2026-11-08
updatedAt: 2026-11-11
title: "Having a Shopify App Built: When a Custom App Makes Sense and When a Ready-Made App Is Enough"
seoTitle: "Shopify Custom App or Ready-Made App? How to Decide"
date: November 8, 2026
readingTime: 7 min
excerpt: "If your store lacks a feature there are three routes: a ready-made app, a theme change or a custom app. What each does, what to watch for with access and credentials, and how to spot a good offer."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Apps
  - Custom App
---

Your store needs something Shopify doesn't include: a link to your inventory system, a special discount logic, an extra field at checkout. The question then comes quickly: does someone have to build an app? Often not. This article sorts the three routes, shows what Shopify says about custom apps and gives you questions for the conversation with a developer.

## Three routes to a feature

1. **A ready-made app from the Shopify App Store.** According to the Shopify Help Center, most apps are built by third-party developers, not Shopify. For problems you contact the developer.
2. **A theme change.** Much of what sounds like an "app" is theme work: a section, a notice, a layout. See [Having your Shopify theme customized](/blog/shopify-theme-customization).
3. **A custom app.** Shopify defines it as an app that you or a developer builds exclusively for your store, unlike a public app built for many stores.

A rule of thumb from practice, not from Shopify: check them in that order. The further down you land, the more you have to maintain later.

## What a custom app can do, according to Shopify

Per the Help Center, custom apps can add features to your Shopify admin, access your store's data directly through Shopify's APIs, or extend your store to other platforms via the Storefront API. They are managed in the **Dev Dashboard**, which offers logs, health metrics and testing with development stores. Shopify also says that creating a custom app requires development knowledge and can be challenging, and suggests hiring a Shopify Partner.

Two building blocks are worth knowing:

- **Extensions** add functionality to areas like the online store, checkout, customer accounts or POS, for example an extra field at checkout.
- **Functions** customize backend logic, such as a custom discount type, delivery options or payment rules. A note from the Help Center: Shopify Scripts and the Script Editor were retired on June 30, 2026, and scripts no longer run on any store. Discounts, shipping and payment methods are now customized with apps that provide functions. If someone still plans a Script solution, clarify that with your developer.

More on checkout: [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen).

## Ready-made or custom: the decision

**A ready-made app fits better when** the feature is common (reviews, subscriptions, bundles), you need no special behavior and ongoing fees are acceptable. Look at the **Built for Shopify** badge: according to Shopify, such apps meet minimum standards for performance, design and integration, and may not lower your storefront speed by more than 10 performance points. The badge doesn't replace your own check, but it is a signal.

**A custom app fits better when** your process is truly unique, you must move data between the store and a system of your own, or a ready-made app solves several things only halfway. You pay once for the build, but you also carry the upkeep.

App fees: most are billed through Shopify, but some third-party apps charge you directly outside Shopify. Those charges don't appear on your Shopify bill, so you manage them separately. Check this before installing.

## Access and data protection with custom apps

- **Permissions:** when creating the app, the developer defines through API scopes what data and features it can reach. Ask why each scope is needed.
- **Install link:** for a custom app built by a developer you get an install link that works only for your store and, per Shopify, expires after seven days. The install screen lists the data the app can access. Read it before confirming.
- **Don't share your password:** if the developer has a collaborator account, they can install custom apps for you when you grant the "Manage and install apps and channels" permission and activate "Approve app charges". Per the Help Center, collaborators can't access the Dev Dashboard because they lack organization-level permissions. How to give access safely: [Switching your Shopify developer](/blog/shopify-entwickler-wechseln).
- **Personal data:** custom apps that access certain personal data (Level 2 PII) require your store to be on the Grow plan or higher, per the Help Center. Whether and how you may process customer data is a legal question for your legal adviser.
- **Access token:** for apps created in the Dev Dashboard the developer generates the access token; you can't copy it from the admin and send it. That is normal.

## Don't forget upkeep

A custom app is not a one-off project. Shopify notes that apps that are no longer supported trigger warnings, and the warnings go to the developer whose account is linked to the app. Settle in advance: who maintains the app, who receives warnings, what happens if the developer drops out? Per the Help Center, a deleted custom app can't be recovered; to just deactivate it, uninstall it. On ongoing care in general: [Shopify maintenance and support](/blog/shopify-wartung-betreuung).

## How to recognize a good offer

- **It starts with the question whether an app is needed.** An honest developer first checks whether a ready-made app or a theme change is enough.
- **A clearly described scope:** what the app does, what it doesn't, how you accept it.
- **Justified permissions** instead of "grant everything".
- **Small, separately checkable steps**, tested outside your live store.
- **Handover and documentation:** where is the code, who owns the developer account, what does a change of developer look like?
- **A fixed price after the briefing** instead of a number without a look at your store.

## An example from practice

For [Elanora Skin](/projects/elanora-skin) I built a gift engine in the cart that adds free products as real line items, built a checkout app with seven extensions (two cart validation Functions and five checkout blocks, including a removable shipping protection line and a reviews block) and a custom back-in-stock flow via the Klaviyo API. The app was built for this one store and is not an App Store app. I also publish my own app in the Shopify App Store, [Reviews Core](https://apps.shopify.com/reviews-core).

## Frequently asked questions

**Do I need an app for every extra feature?** No. Check Shopify's built-in options, theme changes and ready-made apps first.

**Can I later list a custom app in the App Store or use it for other stores?** According to Shopify, custom apps can only be installed on stores in the same organization, not for other merchants. Publishing would need a different route and is a project of its own.

**What if the developer is no longer available?** That is why code access and documentation belong in the agreement. Rights to the code are governed by the contract; a legal adviser can help there.

**What does it cost?** It depends on scope. With me you get a fixed-price offer after the briefing.

## Do you really need an app?

Send me your shop address for the [free Shop-Check](#contact). I look at what is visible from the outside and tell you honestly whether a ready-made app, a theme change or something custom makes sense. If you want ongoing support: [Shopify support](/services/shopify-betreuung) with a clear scope.

**Further reading:** [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen) · [Switching your Shopify developer](/blog/shopify-entwickler-wechseln) · [Shopify theme customization](/blog/shopify-theme-customization) · [Hiring someone to optimize your Shopify store](/blog/shopify-shop-optimieren-lassen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
