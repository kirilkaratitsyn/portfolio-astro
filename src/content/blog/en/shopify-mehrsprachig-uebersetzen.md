---
publishedAt: 2026-11-15
updatedAt: 2026-11-26
title: "A multilingual Shopify store: translate it without a half-finished language going live"
seoTitle: "Shopify multi-language store: translation with Translate & Adapt"
date: 15 November 2026
readingTime: 7 min
excerpt: "Shopify multi-language setup: requirements, translation with Translate & Adapt, automatic translation, URLs and hreflang, and what cannot be translated."
image: /og/projects/bazar-bizar.jpg
topic: build
tags:
  - Shopify
  - Languages
  - International
---

Shopify handles multiple languages in one store, so making a Shopify store multilingual does not take a second store: you add a language, translate the content and publish it. Each language gets its own URLs, for example `your-store.com/de`. The work is in the translations and in the places Shopify does not translate. The source is the Shopify Help Center, as of November 2026.

## What your store needs

According to the Shopify Help Center, these points have to be met:

- **Plan:** on Basic, Grow and Advanced you sell in up to 20 languages, on Shopify Plus in up to 30.
- **Theme:** the active theme has to support multiple languages. All free themes from Shopify do. For a bought theme, ask its developer; an older theme may need an update.
- **Language selector:** most Shopify themes include one that you activate in the theme settings.
- **Translations:** they come from Shopify's **Translate & Adapt** app, from a compatible translation app or from a CSV file.

A custom-built theme has one more technical point: internal links have to be built with the Liquid `routes` object, not hard-coded as `/cart`. Otherwise a click on the cart sends the customer back to the default language.

Speed is not a concern: according to the Help Center, translated content is served dynamically, and extra languages do not slow the store down.

## Adding and publishing a language

The path in the admin: **Settings > Languages > Add language**. You pick the language and the domain it should appear on. Translate & Adapt is installed automatically at that point.

Adding and publishing are two steps. Customers only see an added language once you click **Publish** in the languages table. That is the protection against half-finished translations:

- If you publish a language without your own translations, the store shows only the default theme and checkout texts in that language.
- Everything else appears in your default language. The result is a German navigation above English product texts.

So translate first and publish after.

## Translate & Adapt: by hand or automatically

In the app you translate products, collections, pages, blog posts, policies and theme texts. There are two ways.

**By hand.** You enter each text yourself, in the app or directly on the content through **More actions > Localize**. You control the wording, can swap images, videos and logos per language, and can translate URL handles.

**Automatically.** Shopify translates with AI. What you can use depends on the country of the store:

- Stores in Germany, Austria, Switzerland, the United Kingdom, the United States and some other countries translate **up to 8 languages** automatically. **Translate now** translates once, **Auto-sync** then updates weekly.
- In all other countries it is 2 languages, without Auto-sync.

Four rules from the Help Center worth knowing beforehand:

- Automatic translation adds missing texts and updates outdated machine translations. **It does not touch translations you edited by hand.**
- An automatically translated language cannot be swapped for another one. Removing a language does not free the slot either.
- **Legal policies are not translated automatically.** Shopify recommends a professional translator for them.
- Review automatic translations before you publish the language. The Help Center says so explicitly.

Auto-sync does not start right away: the first translation runs at the next weekly slot, so up to a week later. If you want it sooner, also click Translate now.

## What cannot be translated

This is where multilingual stores keep their gaps. According to the Help Center:

- **Tags** (product, article and blog tags) cannot be translated. If your theme shows tags as filters or labels, they read the same in every language.
- Translate & Adapt does not translate **collection filters**, forms from the Shopify Forms app, **manual payment method** instructions or product images.
- **Content from third-party apps** only appears translated if the app uses Shopify's translation interface. Check reviews, pop-ups and size charts from apps one by one.
- In translated URLs the fixed part stays: `/products/chair` becomes `/de/products/stuhl`, the word `products` does not change.

How filters and tags relate is covered in [Shopify collections and filters](/blog/shopify-kollektionen-filter).

## URLs, hreflang and Google

For every published language Shopify creates its own URLs by adding the language code to the domain: `your-store.com/de`, `your-store.com/fr`. Alternatively a language sits on its own domain or subdomain.

According to the Help Center, Shopify handles automatically:

- **hreflang tags** for all language URLs,
- including all published languages in the **sitemap**.

Your tasks:

- Translate **URL handles** if you want them. Automatic translation leaves them out. When you create a translated handle, Shopify creates a redirect from the old URL.
- Check **SEO title and description**. If they are on default, Shopify uses the translated product title and description. If you wrote them by hand, you translate them by hand too.
- Check **links inside your texts**. A link in a German collection description that points to the English URL is not rewritten automatically (an observation from my own work, not from the Help Center).

If the store should detect the browser language, activate the **Language** setting under **Online Store > Preferences > Automatic redirection**. If you also sell to several countries with their own currencies, that belongs to [Shopify Markets](/blog/shopify-markets-mehrere-laender). More on search: [Hiring someone for Shopify SEO](/blog/shopify-seo-optimieren-lassen).

## Checkout and emails

The checkout appears in the language the customer browsed the store in. Shopify ships translations for 49 languages. Your own wording in the checkout needs a translation app or the CSV import, see also [Customizing the Shopify checkout](/blog/shopify-checkout-anpassen).

Order emails go out in the language the order was placed in, provided a translation exists. You maintain them under **Settings > Notifications**: open the email, **Localize**, save, then view each language through **Preview**. More: [Shopify email notifications](/blog/shopify-email-benachrichtigungen).

## Translations by CSV

If you work with a translation agency, the CSV file is the practical route. Under **Settings > Languages > Export** you choose the language and the scope, for example only untranslated or only outdated content. The file arrives by email. The translation goes into the **Translated content** column, all other columns stay unchanged.

Two notes from the Help Center:

- Set your spreadsheet program to **comma** as the delimiter, not semicolon. Otherwise columns whose HTML contains a semicolon shift.
- Imported texts count as translated by hand. Automatic translation will not overwrite them later.

## Three mistakes that cost you translations

- **Changing the default language.** According to the Help Center this deletes the existing translations of the language you switch to, and they do not become the store's content. Export them as CSV first.
- **Deleting a language.** This deletes all translations of that language for good. To withdraw one, use **Unpublish**: the language disappears for customers, the texts stay.
- **Unpublishing a language without redirects.** Its URLs return a 404 error afterwards. The Help Center advises redirects, see [setting up redirects](/blog/shopify-migration-weiterleitungen).

If you later change texts in the default language, Shopify marks the translation as **Outdated**. After a theme update your own translations are kept, and changed places are marked as outdated too.

## Checklist before publishing

1. Does the theme support multiple languages, and is the language selector active?
2. Are navigation, home page, products, collections and pages translated?
3. Have the legal texts been translated and checked by a person?
4. Are checkout texts and order emails right in every language?
5. What do apps (reviews, pop-ups, forms) show in the new language?
6. Do links in texts and menus lead to the right language?
7. Are the cookie banner and privacy policy translated? (See [Shopify cookie banner](/blog/shopify-cookie-banner-datenschutz).)
8. One test order in every language, from product to order email.

## Examples from practice

[Bazar Bizar](/projects/bazar-bizar), an interior brand from Antwerp and Bali, sells in 6 languages and 53 countries. My part was not the translation but the storefront logic: a script asks Shopify for the visitor's language and country suggestion and sends them there before the page is visible. A choice the visitor makes by hand is never overridden.

For [Lineargent](/projects/lineargent) I rewrote 1,773 internal links in the SEO texts of 114 collections and their English and French translations, with a dry run and a backup before every write. Hence the point about links in the checklist.

## How I handle it

I am a developer, not a translator. The texts come from you, a translation agency or automatic translation. I check whether the theme is built for multiple languages, set up the language selector and redirection, find the places that stay untranslated in the new language (fixed texts in the theme, apps, filters) and test the path from product to order email. In the admin I work through a collaborator account with limited permissions.

## Frequently asked questions

**Does Shopify support multiple languages?** Yes. On Basic, Grow and Advanced you sell in up to 20 languages, on Shopify Plus in up to 30, all in one store.

**How do I translate my Shopify store?** Add the language under Settings > Languages, translate the content in Translate & Adapt by hand or automatically, and click Publish only once the translation is ready.

**Do I need a separate store for each language?** No. One store carries up to 20 or 30 languages, depending on the plan.

**Do I need another language for Austria and Switzerland?** Not for German-speaking customers. Different terms or notes per country are adapted per market in Translate & Adapt, without adding a language.

**Is automatic translation enough?** Often as a base, but review it before publishing. Shopify does not translate legal policies automatically.

**Does a multilingual store hurt rankings?** Shopify sets hreflang tags and sitemap entries automatically. Whether a language version ranks depends on its content. Nobody can promise that.

**Can I remove a language again?** Yes. Unpublish it first and set up redirects. Deleting removes the translations for good.

## Planning a second language, or already live with one?

Send me your store address for the [free Shop-Check](#contact): I tell you what stands out from outside in each language. For an existing store, [Shopify support and maintenance](/services/shopify-betreuung) fits; for a new one that should be multilingual from the start, [Have your Shopify store built](/services/shopify-shop-erstellen-lassen).

**Further reading:** [Shopify Markets: selling in several countries](/blog/shopify-markets-mehrere-laender) · [Shopify email notifications](/blog/shopify-email-benachrichtigungen) · [Connecting a domain to Shopify](/blog/shopify-domain-verbinden)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
