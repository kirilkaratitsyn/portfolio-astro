---
publishedAt: 2026-10-23
title: "Shopify cookie banner and privacy policy: what the settings do and what you have to check yourself"
date: 23 October 2026
readingTime: 8 min
excerpt: "Shopify cookie banner and privacy policy: where to set them, what the automated settings cover and when you need a third-party banner."
image: /og/projects/marinepatches.jpg
topic: build
tags:
  - Shopify
  - Cookie banner
  - Privacy
  - Consent Mode
---

Shopify ships its own settings for the cookie banner and the privacy policy, and on new stores they are already switched on. What stays open is what these settings cover and what you have to check yourself once apps, pixels or tracking tools are involved.

## A note on scope

Everything here comes from the Shopify Help Center pages on privacy settings, as of October 2026. This is **not legal advice**: according to Shopify you remain responsible for complying with the law, and for specific questions Shopify recommends a lawyer. Whether your store has to collect consent is a question for a lawyer or your data protection officer. This article is about the technology.

## Where the settings are

In the Shopify admin, go to **Settings > Customer privacy**. According to the help, there are three building blocks:

1. **Privacy policy:** how your store collects and uses personal data.
2. **Cookie banner:** the request for consent to cookies and similar technologies.
3. **Data sharing opt-out page:** here visitors can opt out of the sale or sharing of their data.

Two more entries are easy to miss: **Shopify Network Intelligence** (see below) and the location where Shopify hosts your store, order and customer data.

## Automated settings: what Shopify does on its own

On new stores the **automated privacy settings** are active from the start, according to the help. On existing stores you switch them on yourself. Among other things this means:

- If you have active markets in the United Kingdom or the EEA, Shopify configures the cookie banner for visitors from those regions automatically.
- Changes are recorded in the store's activity log.
- The feature supports all 32 languages Shopify offers in checkout and themes.

Shopify adds: review whether the default content reflects how your business actually runs and which services are connected. The automation does not know marketing tools that were built in by hand. For your own texts or regions, switch off "Use automated settings".

## The privacy policy

The automated privacy policy is a template that changes along with your settings. According to the help it contains many of the required disclosures, but not all of them. Some things only you can add, and Shopify advises reviewing it regularly for accuracy.

- Variables, for example for address, email and shop name, and conditions such as "selling to Europe" adapt the content to your active markets.
- According to the help, Shopify archives earlier versions for **two years**. You can export them under **Settings > Policies**. How long you need to keep records of changes is your responsibility.
- You can only switch on the cookie banner and the opt-out page once the privacy policy is published. The other texts live in the same area: [Shopify store policies](/blog/shopify-rechtstexte-richtlinien).

## Shopify's cookie banner

According to the help, the banner can appear on storefront pages, in the cart, in checkout and in customer accounts, in each case for visitors from the configured regions. You can adjust regions, texts, colors and position and check the result in the preview. If display in checkout is not activated, customers find their cookie preferences through a link in the footer.

According to the help, Shopify's banner governs **Shopify's own tools**, including Shopify Pixels. If you built in third-party cookies or pixels by hand or through apps, you may need a third-party banner or custom logic so that these services also honor the visitor's choice.

## Adding a third-party banner

Cookie consent apps have their own category in the Shopify App Store. The help names three things to watch:

- **The same regions in both places:** The regions in the admin (Customer privacy) and in the app must match. Otherwise non-essential data can be processed before a visitor has consented.
- **Remove Shopify's banner:** where the option is shown. Then set the regions manually.
- **Adjust the texts:** Shopify recommends naming Shopify in the banner, linking to your privacy policy and referring there to Shopify's consumer privacy policy.

Technically the app has to work with Shopify's **Customer Privacy API**. Shopify then respects the visitor's choice. Whether an app does this is something you check in the browser, not in the app's marketing text.

## Google Consent Mode v2

Consent Mode v2 concerns you if you use Google advertising or Google Analytics. According to the Shopify help, event data from customers in the EEA, for example, is not used for personalized advertising unless Consent Mode v2 is active and valid consent has been given. For this:

- Consent has to be passed on to Google correctly through the privacy settings.
- A third-party banner must be connected to Shopify's privacy settings.
- If you use a custom pixel, for example through Google Tag Manager, you have to insert a code snippet **by hand**.

## Why your numbers look different afterwards

With an active banner, data in the configured regions is collected only after consent. Shopify points out that this can reduce the data available for analytics, marketing and personalization. You see it in lower session counts and in metrics that depend on them, such as the conversion rate. This is not an error in the store and not a traffic problem.

## Shopify Network Intelligence

This mainly concerns merchants who use the Shop channel, Shopify Audiences or Search & Discovery. If Shopify Network Intelligence is on, Shopify uses your customer data together with that of other merchants for additional services. Extra requirements then apply to your privacy policy.

Some apps and features **require the setting**. If you switch it off, the help says they are deactivated or uninstalled immediately, and reinstalling does not bring them back. Read the list of affected features in the help before you click "Disable".

## Multilingual stores

If you sell in several languages, the banner, privacy policy and opt-out page should be translated as well. According to the help this works through the Translate & Adapt app or a compatible translation app. When you add a language, Shopify supplies professional translations of these texts for Shopify-built themes. If a language is not available, a warning appears. For planning several countries and languages, see [Shopify Markets: selling to several countries](/blog/shopify-markets-mehrere-laender).

## Checklist for your store

1. Privacy policy published, read and completed?
2. Automated settings deliberately on or off?
3. Cookie banner active in your sales regions?
4. Your own pixels and tracking scripts listed?
5. Third-party banner: regions identical in admin and app, Shopify's banner removed?
6. Consent Mode v2 checked for Google advertising or Analytics?
7. Banner, privacy policy and opt-out page in all store languages?
8. Affected features read before disabling Shopify Network Intelligence?
9. Text checked by a lawyer or data protection officer?

## When a developer helps

Any merchant can handle the admin settings alone. Help is worthwhile in these cases:

- Nobody knows where the scripts and pixels in the store come from.
- A third-party banner is supposed to work cleanly with Shopify.
- Consent Mode has to run through your own Tag Manager.
- You want to know which scripts still load before consent.

Every additional app and every script in the page source also costs load time, more in [Hiring Someone to Optimize Your Shopify Store](/blog/shopify-shop-optimieren-lassen).

## Frequently asked questions

**Do I need a cookie banner?** According to the Shopify help, the banner is meant for regions that require consent before data is collected: the EEA countries and the United Kingdom. In the United States it is off by default, the help says. Whether your store needs one is a legal question.

**Is Shopify's banner enough?** According to the help, only for Shopify's own tools. Additional pixels or apps that set cookies themselves may need a second tool or custom logic.

**Do I have to check the automated privacy policy?** Yes, Shopify advises this in the help. It is a template and not a substitute for a legal review.

**What does setup by a developer cost?** That depends on how many scripts and services are in the store. I do not name specific amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I check what is visible from the outside, such as load time, apps and scripts in the page source, without access to your account. This does not replace legal advice. Where scripts slow your store down, I help with [Shopify optimization](/services/shopify-speed), and everything else is under [Services](/services).

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
