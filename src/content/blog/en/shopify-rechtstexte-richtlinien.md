---
publishedAt: 2026-10-23
title: "Shopify store policies: where to manage returns, terms, shipping and contact details"
date: 23 October 2026
readingTime: 7 min
excerpt: "Where Shopify manages policies such as returns, terms of service, shipping and contact information, what the automated templates cover, where their details come from and what to save before you switch them on."
image: /og/projects/bazar-bizar.jpg
topic: build
tags:
  - Shopify
  - Store policies
  - Legal pages
  - Checkout
---

Every customer eventually looks for the same texts in a store: returns, shipping terms, contact details, terms of service. Shopify has a dedicated area for them, and many of the texts can be generated automatically from the store settings. That sounds like one click and done. In practice a few things hang on it that you should know first: where the details come from, what gets overwritten when you switch automation on, and where the texts show up in the store at all. This article walks store owners without a technical background through exactly that.

## A note on scope

Everything here comes from the Shopify Help Center page on store policies, as of October 2026. This is **not legal advice**. Shopify says in the help itself that the automated templates are for information only, are not legal advice and do not guarantee compliance with applicable laws. You remain responsible for the accuracy of your published texts and for following them. Which texts your store needs in Germany and how they have to be worded is a question for a lawyer or a provider of legal texts. This article is about the where and how in Shopify.

## Which policies there are

In the Shopify admin you find them under **Settings > Policies**, in the section "Written policies". According to the help you manage these there:

- Return policy
- Privacy policy
- Terms of service
- Shipping policy
- Legal notice
- Contact information
- Subscription policy

Whether the "Legal notice" entry covers the details that have to appear elsewhere in a German store is not something the help says. That is a legal question. Shopify names one more option for legal information: publish it on custom **pages** that you create in the admin and add to a menu.

The privacy policy plays a special role: it has its own automated settings. How they work is covered in [Shopify cookie banner and privacy policy: what the settings do and what you have to check yourself](/blog/shopify-cookie-banner-datenschutz).

## Automated policies: what Shopify takes over

According to the help, four policies can be automated: return and refund, terms of service, shipping and contact information. Automation is switched on per policy with the **Use automated policy** toggle. Turning it on for one policy does not turn it on for the others. The content is generated from your store settings and stays in line with them when you change something later.

The help names cases where the template is not enough and you have to add to it. They include:

- auto-renewing subscriptions,
- regulated products, such as alcohol,
- products with market-specific rules, for example on safety, labeling, cosmetics, electronics, children's products or food-contact materials,
- sites aimed at children.

Shopify advises a lawyer in these cases. Outside them too: do not rely on the template containing every detail of your business.

## Where the details in the text come from

The templates work with variables that are filled from your settings. If something in the published text is wrong, change the source, not the text. The most important ones, according to the table in the help:

- **Address and company name:** from the store contact details under Settings > General. Without a company name, Shopify uses the store name.
- **Email for returns and support:** the store email under Settings > General.
- **Phone number:** also from the contact details.
- **VAT number:** from your tax registrations under Settings > Taxes and duties. If several eligible registrations exist, the first one added is used. IOSS numbers are not used.
- **Return terms:** from your return rules.
- **Shipping destinations:** the countries that are in both your shipping zones and your markets.
- **Processing time:** the fulfillment time under Settings > Shipping and delivery > Estimated delivery dates. It is used only when estimated delivery dates are set to Manual or Automated.

That has a practical consequence: the shipping texts are only as good as your shipping setup. How zones and markets work together is in [Setting up Shopify shipping: zones, rates and the mistakes that stop customers at checkout](/blog/shopify-versand-einrichten).

## Before you switch on: what gets overwritten

On an existing store, switching on automation replaces the content of the policy with Shopify's template. According to the help this includes your own translations in languages that have an automated template. It follows that you should:

1. **Copy the existing text** including translations before you flip the switch.
2. Read the generated policy instead of assuming your earlier edits are kept.
3. If you switch it off later, the current text stays. It is then no longer updated automatically, and you maintain it yourself.
4. If you switch it on again afterwards, the template overwrites your own version again.

The same applies when you switch between automated and manual text and sell in several languages: check the translated versions too, not just the one in the default language.

## What is publicly visible in the texts

One point that is easy to miss: the policies are visible to customers and often contain an address, phone number and email. The help points out that you should use suitable business details, especially if you work from home. It names a PO box or a separate business phone number as alternatives, with the note that some legal disclosures require a physical business address and do not accept a PO box. Which detail has to appear where in your case is again a matter for a lawyer.

Two more things the help says to check: if you use an app for returns, the automated return policy has to match the rules and instructions in the app. And do not promise delivery times you cannot keep.

## Writing and maintaining them manually

If you do not like the automation or there is none for a policy, you write the text yourself. According to the help, the editor supports HTML as well as formatting, links and images. Where "Insert template" is offered, you can start from a template; for the policies that support automation it is not available. You publish with "Save". Here too you are responsible for following your published texts.

If you offer a subscription product through an app, one more point: when the cancellation policy for purchase options is blank in the settings, Shopify shows customers a generated template, linked in the checkout with the text "Subscription policy".

## Where the texts appear in the store

Once you add policies, Shopify links them in the footer of your checkout pages automatically, according to the help. There are also default places: the return policy on the order review page, the shipping policy on product pages and in the cart. Customers often look before they buy, so Shopify recommends also linking the texts in menus or in the footer of your store pages.

In short:

1. In the admin, go to **Content > Menus** and open the menu, for example the footer menu.
2. Choose **Add menu item**, enter a name and search for the policy.
3. Confirm with **Add** and save the menu.

Direct links are added to the end of the store address, for example `/policies/refund-policy`, `/policies/privacy-policy`, `/policies/terms-of-service`, `/policies/shipping-policy` and `/policies/subscription-policy`. That helps when you link the texts in emails or on pages.

The help names a special case for free Shopify themes downloaded after November 2018: they show a link to the shipping policy on product pages. If you do not want it, you can change it through the theme text. In the admin, search "Edit default theme content" for "shipping policy html" and replace the contents with a single space. This is the moment when some store owners prefer to ask someone before something in the theme breaks.

## Exporting past versions

Changes to the return policy, terms of service, shipping policy, contact information and legal notice are archived, in all configured languages, according to the help. Shopify keeps past versions for **two years**. You export them through the menu in the "Written policies" section with **Get past policies**, choosing the policies and the file format. The privacy policy can be exported in the same dialog. The help stresses that you have to keep records of changes as far as you need them. So export before you change texts.

## Multilingual stores

If you sell in several languages, check the policies in every language, not just the default. According to the help, translations have to reflect your actual practices and the commitments in the default-language text. For critical interpretations or legal matters, Shopify recommends a professional translator. More on planning several countries and languages is in [Shopify Markets: selling to several countries without running several stores](/blog/shopify-markets-mehrere-laender).

## Checklist for your store

1. All policies under Settings > Policies reviewed, none left empty?
2. A conscious decision for each one: automated or manual?
3. Old text and translations saved before switching automation on?
4. Address, company name, email, phone and VAT number checked in the settings?
5. Shipping zones, markets and processing time match the text?
6. Returns app and return policy say the same thing?
7. Texts linked in the footer and menus, not only in the checkout?
8. All languages checked?
9. Texts checked by a lawyer or a provider of legal texts?

## When a developer helps

A developer does not write the texts themselves; that is for a lawyer or a provider of legal texts. Help is worthwhile for the technology around them: when menus and footers have to be rebuilt, when language versions and markets have gotten mixed up, when a theme sets its own links to shipping or return texts that should be changed, or when the texts have to be carried over in a migration from another system. Ongoing upkeep belongs here too, because texts go stale as soon as shipping, markets or return rules change. What to watch for is in [Shopify maintenance: what the platform handles and what stays with your store](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Do I have to use the automated policies?** No. According to the help you can switch automation off per policy and maintain the text yourself.

**Are my old texts lost if I switch automation on?** On existing stores, switching on replaces the content of the policy with the template, including your own translations in languages that have a template. Save the old text first.

**Can I look at past versions?** Yes. Shopify archives them for two years according to the help, and you export them through "Get past policies".

**Do the templates replace a lawyer?** No. Shopify itself says the templates are not legal advice and do not guarantee compliance with the law.

**What does it cost to set up the technology around the texts?** That depends on what has to change in the store. I do not name specific amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I look at what is visible from the outside, such as whether policies are linked in the footer, how pages and menus are built and what stands out. I only work with publicly visible data, without access to your account. That does not replace a legal review. What else I do for stores is under [Services](/services).

**Further reading:** [Creating invoices in Shopify](/blog/shopify-rechnung-bestelldokumente)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
