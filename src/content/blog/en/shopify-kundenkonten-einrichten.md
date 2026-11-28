---
publishedAt: 2026-11-28
title: "Setting up Shopify customer accounts: passwordless sign-in, settings and upgrading from legacy accounts"
seoTitle: "Shopify customer accounts: setup, sign-in and legacy upgrade"
date: 28 November 2026
readingTime: 7 min
excerpt: "How to set up Shopify customer accounts: how passwordless sign-in works, which settings sit under Customer accounts, what customers can do in their account and how the upgrade from legacy customer accounts runs."
image: /og/projects/petaljet.jpg
topic: build
tags:
  - Shopify
  - Customer accounts
  - Customer login
  - Checkout
---

You set up Shopify customer accounts under **Settings > Customer accounts**: that is where you turn on the sign-in link in your store and decide what customers can do in their account on their own. In the current version customers sign in without a password, using a six-digit code sent by email. The old accounts with email and password are now called **legacy customer accounts**, and the Shopify Help Center marks them as deprecated. This article shows where the settings are and how the upgrade runs. The source is the Shopify Help Center as of November 2026. This is not legal advice.

## Two versions: customer accounts and legacy

The Shopify Help Center describes two versions:

- **Customer accounts** (the new version): customers enter their email address and receive a one-time six-digit code. There is no password, so there is no password reset either.
- **Legacy customer accounts:** sign-in with email and password, after registering on a separate page or accepting an invite.

According to the comparison table in the Help Center, only the new version offers: return requests from the account, store credit that customers can view and spend at checkout, reordering with the **Buy again** button, and support for B2B and Markets. Order history and saved addresses exist in both versions.

One more difference that matters day to day: the new accounts are **managed independently from your theme**. A theme update does not change the account. Legacy accounts live as templates inside the theme, and changes made in Liquid code break easily during theme updates.

## How sign-in works for customers

- **No registration.** Anyone who already has a customer profile in your admin, for example from an order, already has an account according to the Help Center. Signing in with the same email address shows their past orders.
- **New email address:** if someone signs in with an address Shopify does not know, a new customer profile is created automatically.
- **Long sessions.** A sign-in session lasts up to 365 days. Customers do not have to sign in again on their next visit.
- **Faster checkout.** For signed-in customers the stored details are pre-filled at checkout.

On top of the email code you can offer more ways to sign in:

- **Sign in with Shop:** customers use their Shop account. According to the Help Center this is turned on automatically for stores that use Shop Pay.
- **Social sign-in:** sign-in with Google or Facebook. The Help Center says the only customer data synced to Shopify is the email address.
- **Your own identity provider:** Shopify Plus only. It replaces the default sign-in completely. More on the plan in [Shopify Plus: when it pays off](/blog/shopify-plus-wann-lohnt).

## The settings under Customer accounts

Everything important sits in the admin under **Settings > Customer accounts**:

1. Turn on **Show sign-in links** and save. Only then do customers see the sign-in in your store. How it looks depends on the theme: usually a person icon in the header, the customer's first initial or a text label such as "Account".
2. **Self-serve returns and cancellations:** customers request returns and cancellations from their account. How to set the rules is covered in [Shopify returns](/blog/shopify-retouren-ruecksendungen).
3. **Store credit:** customers see their balance in the account and spend it at checkout.
4. **URL:** your own subdomain for the account, for example `account.your-store.com`.
5. **Social sign-in** and **Sign in with Shop:** the extra sign-in options from above.

If you turn **Show sign-in links** off, customers can no longer sign in, and the account menu disappears from the store.

Two points that often surprise store owners:

- **You cannot deactivate a single account.** You can delete a customer profile. But if the customer signs in again with the same email, a new profile is created.
- **Extra fields at sign-in are not available yet.** Sign-in asks for the email address only. An optional form after the first sign-in, for a birthday or business details, has been announced but is not available to any store yet. If you need a piece of information from every customer, the Help Center recommends collecting it at checkout.

The checkout settings also contain an option to require sign-in before checkout. My recommendation, not from the Help Center: for a regular consumer store, keep guest checkout open. Mandatory sign-in fits wholesale and closed stores.

## What customers can do in their account

According to the Help Center the account consists of four pages: **Sign-in**, **Orders**, **Order status** and **Profile**. There customers can:

- view all orders and the status with tracking,
- complete outstanding payments and reorder,
- change their name, email address and shipping addresses,
- request returns and view store credit, if you turned these on,
- pause, skip or cancel a subscription, if you sell subscriptions. More in [Shopify subscriptions](/blog/shopify-abos-subscriptions).

When a customer changes their email address, they have to verify it. Their email marketing consent stays the same. Customers cannot merge two profiles themselves; you do that in the admin under **Customers**.

For business customers: the new accounts work with Shopify B2B automatically. After signing in, a B2B customer orders for their company, sees orders across several company locations and pays outstanding balances. More in [Shopify B2B and wholesale](/blog/shopify-b2b-wholesale).

## Branding, apps and your own subdomain

**Branding.** Customer accounts and checkout share the same brand settings. You set the logo, colours and fonts in the **checkout and accounts editor**, reached through **Settings > Checkout**. How the editor works is covered in [customising the Shopify checkout](/blog/shopify-checkout-anpassen).

**Apps.** Extra features such as a loyalty programme, a wishlist or reviews are added as **app blocks** on the Orders, Order status and Profile pages. In the Shopify App Store, filter by **Customer accounts** under **Works with**. The sign-in page does not accept blocks; there you only change the logo, colours, fonts and a brand image.

**Subdomain.** Without your own setting, the account pages run on a `shopify.com` address with your store's ID. That includes the order status page. With a subdomain such as `account.your-store.com` customers see your domain throughout. You need a connected domain first. If it sits with a third-party provider, you add a DNS record there; see [connecting a domain to Shopify](/blog/shopify-domain-verbinden). Two notes from the Help Center:

- If you use social sign-in or an identity provider, add the new subdomain at the provider **first** and only then switch in Shopify. Otherwise customers cannot sign in for a while.
- There is only **one** domain for customer accounts, even if your store has several country domains.

**Sign-in without leaving the page.** The **account component** shows sign-in as a menu in the header, so customers stay in the store. According to the Help Center it is included in the latest version of the Horizon themes. Other themes can get it through customisation.

## Upgrading from legacy customer accounts: the steps

The Help Center describes the upgrade in nine steps. In short:

1. **Review your customisations.** The theme editor has a **Legacy customer accounts** group in the page menu, with the templates for login, register, account, addresses and order. In the code they sit under **templates > customers**. Note which ones you want to keep. They are not carried over.
2. **Duplicate your configuration.** Under **Settings > Checkout**, in the **Configurations** section, click **Duplicate**. You work in the copy as a draft.
3. **Replace customisations with apps.** Add app blocks in the editor. If no app fits, the Help Center names a custom app built by a developer as the way out; more in [Shopify custom app development](/blog/shopify-app-entwickeln-lassen).
4. **Check your brand settings** across all checkout and account pages.
5. **Connect a subdomain** (optional, but sensible before the upgrade).
6. **Check your sender email.** Sign-in codes are sent from your sender email address. You need access to it.
7. **Publish the configuration.** The store still links to the legacy accounts after this.
8. **Test.** The address of the new accounts is under **Settings > Customer accounts** in the **URL** field. Open it in a new tab, sign in with a test customer and check every sign-in option.
9. Click **Upgrade** in the banner at the top of the page.

According to the Help Center you can revert within 30 days. The AI assistant **Sidekick** in the admin can scan your theme and apps for customisations and build a to-do list. You make the changes yourself.

What to know before you upgrade:

- **Old links keep working.** After the upgrade Shopify automatically redirects addresses such as `/account/login` to the new accounts, including links hard-coded in the theme.
- **Custom sign-in windows have to go.** If you built sign-in or registration as your own pop-up or on a separate page, you may need to remove that from the theme before upgrading.
- **Check Flow and segments.** After the upgrade the **Customer account enabled** trigger starts on the first sign-in to the new account, not for customers who already had a legacy account. Other triggers around legacy accounts are no longer supported. Sidekick does not check workflows or customer segments. More on workflows in [Shopify workflow automation with Flow](/blog/shopify-flow-automatisierung).

## Checklist

1. **Show sign-in links** turned on, icon visible in the header?
2. Signed in with a test address: does the code arrive, and not in spam?
3. Sender address correct and on your own domain?
4. Logo, colours and font in the account match the store?
5. Return requests and store credit deliberately on or off?
6. Own subdomain connected, order status page shows your domain?
7. On legacy: customisations noted and replaced before you click **Upgrade**?
8. Privacy policy mentions the customer account and sign-in options, agreed with your lawyer? More in [Shopify legal pages and policies](/blog/shopify-rechtstexte-richtlinien).

## How I handle it

I do not have a documented legacy upgrade in my portfolio. What I can show from projects is theme work around the account: at [Petaljet](/projects/petaljet), a flower wholesaler, only buyers with an account see prices. In an upgrade my part is the review: which customisations sit in the old templates, which of them an app replaces and which need a custom solution.

## Frequently asked questions

**Where do I set up customer accounts in Shopify?** In the admin under **Settings > Customer accounts**. Turn on **Show sign-in links** there. Branding and apps are set in the checkout and accounts editor under **Settings > Checkout**.

**Do customers need a password in Shopify?** Not in the new customer accounts. Customers enter their email address and receive a one-time six-digit code. Only legacy customer accounts use a password.

**Do customers have to register to place an order?** No, as long as you do not require sign-in before checkout. Anyone who has ordered before already has an account and simply signs in with their email address.

**What happens to existing customers when I upgrade from legacy accounts?** The customer profiles stay. Customers sign in with their email address and a code, and the old password is no longer needed. Shopify redirects old login links automatically.

**Can I show the customer account on my own domain?** Yes, with a subdomain such as `account.your-store.com` under **Settings > Customer accounts**. Without it the account pages run on a shopify.com address.

## A customer account that fits your store

Send me your store address for the [free Shop-Check](#contact): I look at whether the sign-in is easy to find in the header, which version of customer accounts is running and whether the account and order status page match your store. Setup, upgrade and ongoing care fit [Shopify support and maintenance](/services/shopify-betreuung).

**Read next:** [Shopify returns](/blog/shopify-retouren-ruecksendungen) · [Customising the Shopify checkout](/blog/shopify-checkout-anpassen) · [Shopify newsletter setup](/blog/shopify-newsletter-double-opt-in)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
