---
publishedAt: 2026-10-23
title: "Shopify store policies: where to manage returns, terms, shipping and contact details"
date: 23 October 2026
readingTime: 8 min
excerpt: "Where to manage Shopify store policies, what the automated templates cover and what to save before you switch them on."
image: /og/projects/bazar-bizar.jpg
topic: build
tags:
  - Shopify
  - Store policies
  - Legal pages
  - Checkout
---

Shopify store policies such as returns, shipping, contact details and terms of service are managed in a dedicated area of the admin. Many of the texts can be generated automatically from the store settings. What matters is where the details come from, what automation overwrites and where the texts show up in the store.

## A note on scope

Everything here comes from the Shopify Help Center page on store policies, as of October 2026. This is **not legal advice**. According to Shopify, the automated templates are for information only and do not guarantee compliance with applicable laws. You remain responsible for the accuracy of your published texts. Which texts your store needs in Germany and how to word them is a question for a lawyer or a provider of legal texts.

## Which policies there are

In the Shopify admin they are under **Settings > Policies**, in the section "Written policies". According to the help these are:

- Return policy
- Privacy policy
- Terms of service
- Shipping policy
- Legal notice
- Contact information
- Subscription policy

Whether "Legal notice" covers the details that have to appear elsewhere in a German store is a legal question. The help does not answer it. Shopify says you can also publish legal information on custom **pages** that you create in the admin and add to a menu.

The privacy policy has its own automated settings, see [Shopify cookie banner and privacy policy](/blog/shopify-cookie-banner-datenschutz).

## Automated policies: what Shopify takes over

According to the help, four policies can be automated: return and refund, terms of service, shipping and contact information. You switch automation on for each policy separately with the **Use automated policy** toggle. The content is generated from your store settings and follows them when you change something there.

The help says the template is not enough for:

- auto-renewing subscriptions,
- regulated products, such as alcohol,
- products with market-specific rules, for example on safety, labeling, cosmetics, electronics, children's products or food-contact materials,
- sites aimed at children.

Shopify advises a lawyer here.

## Where the details in the text come from

The templates fill variables from your settings. If something in the text is wrong, change the source, not the text. The main sources according to the help:

- **Address, company name and phone number:** from the store contact details under Settings > General. Without a company name, Shopify uses the store name.
- **Email for returns and support:** the store email under Settings > General.
- **VAT number:** from your tax registrations under Settings > Taxes and duties. If several eligible registrations exist, the first one added is used. IOSS numbers are not used.
- **Return terms:** from your return rules.
- **Shipping destinations:** the countries that are in both your shipping zones and your markets.
- **Processing time:** the fulfillment time under Settings > Shipping and delivery > Estimated delivery dates. It is used only when estimated delivery dates are set to Manual or Automated.

So the shipping texts are only as good as your shipping setup, see [Setting up Shopify shipping](/blog/shopify-versand-einrichten).

## Before you switch on: what gets overwritten

On an existing store, switching on automation replaces the content of the policy with Shopify's template. The help says this includes your own translations in languages with an automated template.

1. **Copy the existing text** including translations before you flip the switch.
2. Read the generated policy. Your earlier edits are not kept.
3. If you switch it off later, the current text stays. You then maintain it yourself.
4. If you switch it on again afterwards, the template overwrites your own version again.

## What is publicly visible in the texts

The policies are visible to customers and often contain an address, phone number and email. The help advises suitable business details, especially if you work from home, and names a PO box or a separate business phone number. Some legal disclosures require a physical business address, though. What has to appear where is a matter for a lawyer.

Two more points from the help:

- If you use an app for returns, the automated return policy has to match the rules and instructions in the app.
- Do not promise delivery times you cannot keep.

## Writing and maintaining them manually

Without automation you write the text yourself. According to the help, the editor supports HTML, formatting, links and images. "Insert template" gives you a starting template, but not for the policies that support automation. You publish with "Save".

For subscription products sold through an app: when the cancellation policy for purchase options is blank in the settings, Shopify shows customers a generated template. It is linked in the checkout with the text "Subscription policy".

## Where the texts appear in the store

Once you add policies, the help says Shopify links them in the footer of your checkout pages automatically. There are also fixed places: the return policy on the order review page, the shipping policy on product pages and in the cart. Because customers often look before they buy, Shopify recommends extra links in menus or in the footer of your store pages:

1. In the admin, go to **Content > Menus** and open the menu, for example the footer menu.
2. Choose **Add menu item**, enter a name and search for the policy.
3. Confirm with **Add** and save the menu.

Direct links are added to the end of the store address, for example `/policies/refund-policy`, `/policies/privacy-policy`, `/policies/terms-of-service`, `/policies/shipping-policy` and `/policies/subscription-policy`.

According to the help, free Shopify themes downloaded after November 2018 show a link to the shipping policy on product pages. If you do not want it, search "Edit default theme content" in the admin for "shipping policy html" and replace the contents with a single space.

## Exporting past versions

Changes to the return policy, terms of service, shipping policy, contact information and legal notice are archived, in all configured languages, according to the help. Shopify keeps past versions for **two years**. You export them through the menu in the "Written policies" section with **Get past policies**, choosing the policies and the file format. The privacy policy can be exported in the same dialog. The help says keeping records of changes is up to you. So export before you change texts.

## Multilingual stores

Check the policies in every language, including after every switch between automated and manual text. The help says translations have to reflect your actual practices and the commitments in the default-language text. For critical interpretations or legal matters, Shopify recommends a professional translator. More in [Shopify Markets: selling to several countries](/blog/shopify-markets-mehrere-laender).

## Checklist for your store

1. No policy under Settings > Policies left empty?
2. Decided for each policy: automated or manual?
3. Old text and translations saved before switching on?
4. Address, company name, email, phone and VAT number checked?
5. Shipping zones, markets and processing time match the text?
6. Returns app and return policy say the same thing?
7. Texts also linked in the footer and menus?
8. All languages checked?
9. Texts checked by a lawyer or a provider of legal texts?

## When a developer helps

A developer does not write the texts. That is for a lawyer or a provider of legal texts. Help is worthwhile for the technology around them:

- Menus and footers have to be rebuilt.
- Language versions and markets have gotten mixed up.
- A theme's own links to shipping or return texts should be changed.
- The texts are carried over in a migration from another system.

Ongoing upkeep belongs here too: texts go stale as soon as shipping, markets or return rules change. More in [Shopify maintenance: what the platform handles](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Do I have to use the automated policies?** No. The help says you can switch automation off per policy.

**Are my old texts lost if I switch automation on?** On existing stores yes, including translations in languages that have a template. Save the text first.

**Can I look at past versions?** Yes. The help says Shopify archives them for two years. You export them through "Get past policies".

**Do the templates replace a lawyer?** No. Shopify says they are not legal advice and do not guarantee compliance with the law.

**What does it cost to set up the technology around the texts?** That depends on what has to change in the store. I do not name specific amounts here.

## What about your store?

Send me your store's address for the [free store check](#contact). I only check publicly visible data, such as whether policies are linked in the footer, without access to your account. That does not replace a legal review. More under [Services](/services).

**Further reading:** [Creating invoices in Shopify](/blog/shopify-rechnung-bestelldokumente) · [Setting up Shopify gift cards](/blog/shopify-geschenkkarten-gutscheine) · [Setting up taxes and VAT in Shopify](/blog/shopify-steuern-mwst-einrichten) · [Setting up Shopify returns](/blog/shopify-retouren-ruecksendungen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
