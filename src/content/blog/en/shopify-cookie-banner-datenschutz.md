---
publishedAt: 2026-10-23
title: "Shopify cookie banner and privacy policy: what the settings do and what you have to check yourself"
date: 23 October 2026
readingTime: 7 min
excerpt: "Where Shopify manages the privacy policy and cookie banner, what the automated settings cover, when a third-party banner is needed and why your analytics look different afterwards."
image: /og/projects/marinepatches.jpg
topic: build
tags:
  - Shopify
  - Cookie banner
  - Privacy
  - Consent Mode
---

If you sell in Germany or the EU, sooner or later you end up asking: "Do I have a cookie banner, and is my privacy policy right?" Shopify ships its own settings for this, and on new stores they are even switched on already. That is reassuring, but it leaves two things open: what exactly these settings cover, and what you still have to check yourself as soon as apps, pixels or tracking tools are involved. This article walks store owners without a technical background through both.

## A note on scope

Everything here comes from the Shopify Help Center pages on privacy settings, as of October 2026. This is **not legal advice**, and Shopify says so itself in the help: you remain responsible for complying with the law, and for specific questions Shopify recommends a lawyer. Whether and in what form your store has to collect consent is therefore not something I answer. A lawyer or your data protection officer is the right address. This article is about the technology: where you set things, what Shopify does automatically and where manual work remains.

## Where the settings are

In the Shopify admin, go to **Settings > Customer privacy**. According to the help, there are three building blocks:

1. **Privacy policy:** the text that explains how your store collects and uses personal data.
2. **Cookie banner:** the prompt that asks visitors for consent to cookies and similar technologies.
3. **Data sharing opt-out page:** a dedicated page where visitors can opt out of the sale or sharing of their data.

Two more entries are easy to overlook: the **Shopify Network Intelligence** setting (more on it below) and the information on where Shopify hosts your store, order and customer data.

## Automated settings: what Shopify does on its own

On new stores the **automated privacy settings** are active from the start, according to the help. Among other things this means: if you have active markets in the United Kingdom or the EEA, Shopify configures the cookie banner for visitors from those regions automatically. Changes are logged in the store's activity log, and the feature supports all 32 languages Shopify offers in checkout and themes. On existing stores you can switch the automation on yourself.

Note the sentence Shopify adds itself: review the default content to see whether it reflects how your business actually runs and which services are connected. The automation follows your store settings, but it does not know which marketing tool a web designer built in by hand two years ago. If you want to set texts or regions yourself, switch off "Use automated settings".

## The privacy policy

The automated privacy policy is a template that changes along with your settings. According to the help it already contains many of the required disclosures, but not all of them: some things only you can add, and Shopify advises reviewing it regularly for accuracy. Using the template still means reading it.

Good to know:

- The text uses variables, for example for address, email and shop name, and conditions such as "selling to Europe". That is how the content adapts to your active markets.
- According to the help, Shopify archives earlier versions for **two years**. You can export them under **Settings > Policies**. How long you need to keep records of changes is your responsibility.
- You can only switch on the cookie banner and the opt-out page once the privacy policy is published.

## Shopify's cookie banner

According to the help, Shopify's banner can appear on storefront pages, in the cart, in checkout and in customer accounts, in each case for visitors from the configured regions. You can adjust regions and texts, set colors and position, and use the preview to see how it looks in your store. If display in checkout is not activated, customers find their cookie preferences through a link in the footer.

The decisive limit is stated in the help as well: Shopify's banner governs **Shopify's own tools**, including Shopify Pixels. If you built in third-party cookies or pixels by hand or through apps, you may need a third-party banner or custom logic so that these services also honor the visitor's choice.

## Adding a third-party banner

The Shopify App Store has its own category for cookie consent apps. If you use one, the help says to keep three things in mind:

- **The same regions in both places:** The regions in the admin (Customer privacy) and in the app must match. Otherwise non-essential data can be processed before a visitor has consented.
- **Remove Shopify's banner:** The steps in the help include removing Shopify's banner (where the option is shown) and then setting the regions manually.
- **Adjust the texts:** Shopify recommends naming Shopify in the banner, linking to your privacy policy and referring in that policy to Shopify's consumer privacy policy.

Technically this depends on the app working with Shopify's **Customer Privacy API**. Shopify then respects the visitor's choice. Whether a particular app does this properly is something you check in the browser, not in the app's marketing text.

## Google Consent Mode v2

If you use Google advertising or Google Analytics, you will meet Consent Mode v2 at some point. According to the Shopify help, event data from customers in the EEA, for example, is not used for personalized advertising unless Consent Mode v2 is active and valid consent has been given. For this, consent has to be passed on to Google correctly through the privacy settings. With a third-party banner, it must be connected to Shopify's privacy settings. And if you use a custom pixel, for example through Google Tag Manager, you have to insert a code snippet **by hand**. This is one of the places where a developer saves time.

## Why your numbers look different afterwards

With an active banner, data in the configured regions is collected only after consent. Shopify itself points out that this can reduce the data available for analytics, marketing and personalization. It shows up as lower session counts and in metrics that depend on them, such as the conversion rate. This is not an error in the store. If you compare before and after switching it on, you should know this, otherwise a setting quickly turns into an apparent traffic problem.

## Shopify Network Intelligence

This point mainly concerns merchants who use Shopify features such as the Shop channel, Shopify Audiences or Search & Discovery. If Shopify Network Intelligence is on, Shopify uses your customer data together with that of other merchants for additional services, and extra requirements apply to your privacy policy. Some apps and features **require the setting**. If you switch it off, the help says they are deactivated or uninstalled immediately, and reinstalling does not bring them back. The list of affected features is in the help; read it before you click "Disable".

## Multilingual stores

If you sell in several languages, the banner, privacy policy and opt-out page should be translated as well. According to the help this works through the Translate & Adapt app or a compatible translation app. When you add a new language, Shopify supplies professional translations of these texts for Shopify-built themes. If a language is not available, a warning appears. How to plan several countries and languages as a whole is covered in [Shopify Markets: selling to several countries without running several stores](/blog/shopify-markets-mehrere-laender).

## Checklist for your store

1. Privacy policy published, default text read and missing parts added?
2. Automated settings switched on or off deliberately?
3. Cookie banner active in the regions where you sell?
4. All pixels and tracking scripts you built in yourself listed?
5. If a third-party banner runs: regions identical in the admin and in the app, Shopify's banner removed?
6. Consent Mode v2 checked if you use Google advertising or Analytics?
7. Banner, privacy policy and opt-out page available in all store languages?
8. Before disabling Shopify Network Intelligence, the list of affected features read?
9. Text checked by a lawyer or data protection officer?

## When a developer helps

Any merchant can handle the admin settings alone. Help is worthwhile if you have scripts and pixels nobody knows the origin of, if a third-party banner is supposed to work cleanly with Shopify, if Consent Mode has to run through your own Tag Manager, or if you want to know after switching it on which scripts still load before consent. The link to load time is practical too: every additional app and every script in the page source costs load time, more in [Hiring Someone to Optimize Your Shopify Store: What It Covers and How to Spot a Good Offer](/blog/shopify-shop-optimieren-lassen). The legal assessment stays with your lawyer.

## Frequently asked questions

**Do I need a cookie banner?** According to the Shopify help, the banner is meant for regions that require consent before data is collected, the EEA countries and the United Kingdom are named. In the United States it is off by default according to this description. Whether your store needs one in your specific case is a legal question that I do not answer.

**Is Shopify's banner enough?** According to the help, the banner governs Shopify's own tools. If you built in additional pixels or apps that set cookies themselves, a second tool or custom logic may be needed.

**Do I have to check the automated privacy policy?** Yes, Shopify explicitly advises in the help to review it regularly. It is a template and not a substitute for a legal review.

**What does setup by a developer cost?** That depends on how many scripts and services are in the store. I do not name specific amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, such as load time, apps and scripts in the page source and the structure of the pages, and tell you what stands out. I only work with publicly visible data, without access to your account. This does not replace legal advice. Where scripts slow your store down, I help with [Shopify optimization](/services/shopify-speed). What else I do for stores is under [Services](/services).

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
