---
publishedAt: 2026-10-23
title: "Shopify maintenance: what the platform handles and what stays with your store"
date: 23 October 2026
readingTime: 6 min
excerpt: "Shopify is hosted, yet a store still needs care: theme updates, apps, access, copies before changes. A list of what you can do yourself and what to settle before you hire ongoing support."
image: /og/projects/elanora-skin.jpg
topic: support
tags:
  - Shopify
  - Maintenance
  - Support
---

"You don't have to maintain anything on Shopify": you hear that often, and it is half true. Servers, platform updates and the checkout are Shopify's job. What belongs to your own store, namely the theme, apps, access and content, does not look after itself. This text sorts out what stays with you, what you can do without technical knowledge, and what to settle before you hire someone for ongoing support.

## What Shopify takes off your hands

Shopify is a hosted platform. You do not install platform updates and you do not run your own server (the comparison is in [WooCommerce security and plugin updates](/blog/woocommerce-sicherheit-plugin-updates)). On its [security page](https://www.shopify.com/security) Shopify states, among other things, certification to PCI DSS Level 1 and SOC 2 Type II and SOC 3 reports for the service. At the same time it writes there that it helps you with data protection, but some steps remain yours, and for legal questions it points to a lawyer. The same goes for this text: I do not cover data protection or law here.

## What stays with you

### 1. Access

According to the Shopify Help Center, everyone who works in the store should have their own staff account with fitting permissions; the owner's login details are not shared, not even with staff. For Shopify Payments, two-step authentication on your account is required. If an account is compromised, Shopify advises contacting Shopify Support immediately and securing the account.

In practice: once a quarter, go through who has access. Anyone who no longer works with the store, whether staff, agency or a former freelancer, gets removed.

### 2. Apps

Every installed app is third-party code. In the admin, an app's "Activity and permissions" section shows which areas of your store it can view or edit. A look once a quarter is enough: do you still need the app? Does the access fit? More apps also often mean a slower store, see [Slow Shopify store? 7 causes](/blog/slow-shopify-store).

### 3. The theme

Shopify does not move new theme versions into your live theme on its own. The Help Center describes the route: click the notification and add the new version as a draft. According to Shopify:

- Customizations you made in the theme editor are copied to the new version, including added, reordered or hidden sections.
- Code edits are carried over only if they do not conflict with the update. Otherwise the admin shows that code edits could not be included, and you have to copy them into the new version.
- Shopify explicitly recommends always saving a copy of any customized code before updating.

This is where stores without support most often lose customizations: someone clicks "update", and the special solution from a year ago is gone. If your theme has been customized, do not apply updates on your own. More on when code is needed: [Shopify theme customization](/blog/shopify-theme-customization).

### 4. Copies and exports

According to the Help Center, products can be exported to CSV: the current page, all products, selected ones or those matching a search. A regular copy of your key data takes little time. The help pages I checked say nothing about backups of themes and store data, so I do not claim an automatic backup here: check in your account and with your apps what is backed up and what is not.

### 5. Content and tests

No update, new app or new code belongs in the live store untested. After every change, a short run on a smartphone is worth it: home page, a product, cart, checkout up to the payment choice. If you do not want to place an order, going up to checkout is enough.

## A simple rhythm

This is a recommendation from practice, not a Shopify requirement:

- **Monthly** (15 minutes): a test order or a run to the checkout on a smartphone, read the Shopify notifications in the admin, check unusual orders.
- **Quarterly:** go through staff and apps, remove unused apps, check the theme version, take a copy of key data.
- **When changing things:** a theme update or larger customization only in a copy, then test, then publish.

## When ongoing support is worth it

If you rarely change anything, the rhythm above is enough, and for problems the Help Center and support help (who is responsible for what: [Shopify help](/blog/shopify-help)). Fixed support is more worthwhile if

- your theme has a lot of code that gets in the way of updates,
- promotions, markets or features keep being added,
- nobody on the team has time to keep an eye on apps and access,
- a checkout outage would noticeably cost revenue.

An example from my work: I have worked on the [Elanora Skin](/projects/elanora-skin) store on an ongoing basis since late 2025. That is not an off-the-shelf maintenance package but continuing work on a store I know. What makes sense for you can therefore only be said once I have seen your theme, apps and the changes you plan.

## What to settle before a support agreement

Ask, whether it is a freelancer or an agency:

1. **What exactly is included?** Theme updates, app review, small changes, bug fixing: in writing, not "everything technical".
2. **How does a change work?** Does the person work in a copy of the theme and publish only after your approval?
3. **Which access does the person need?** A staff or collaborator access with limited rights is usual, not your owner login. The access ends with the agreement.
4. **How fast do they reply?** Response time for outages, availability, a stand-in.
5. **How is it billed?** A fixed price after a briefing, a block of hours or hourly, and what happens if more effort is needed?
6. **Who owns what at the end?** Code, documentation, access: you should have everything when the agreement ends.

On whether an individual or a team suits you better: [Shopify freelancer or agency](/blog/shopify-freelancer-oder-agentur).

## Frequently asked questions

**Do I have to install security updates on Shopify?** Not for the platform, Shopify handles that. For your theme, apps and access, yes.

**Will I lose customizations in a theme update?** Not those from the theme editor, which the Help Center says are carried over. Code edits can be lost if they do not fit the update. Save a copy first.

**Do I need a maintenance contract?** Not necessarily. It pays off with frequent changes or customized code.

**What does support cost?** It depends on the scope. I do not name amounts here.

## How is your store doing?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, such as load time, apps in the page source and the structure of the pages, and tell you what stands out. I only work with publicly visible data, without access to your account. What I do for stores is under [Services](/services).

**Further reading:** [Shopify cookie banner and privacy policy](/blog/shopify-cookie-banner-datenschutz) · [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
