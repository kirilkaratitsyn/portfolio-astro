---
publishedAt: 2026-11-27
title: "Setting up a Shopify newsletter: sign-ups, double opt-in and Shopify Messaging"
seoTitle: "Shopify newsletter setup: sign-up forms and double opt-in"
date: 27 November 2026
readingTime: 7 min
excerpt: "How to set up a newsletter in Shopify: where customers sign up, how to turn on double opt-in for Germany and the EU, what Shopify Messaging (formerly Shopify Email) does and what to check before your first campaign."
image: /og/projects/jula-bloom.jpg
topic: build
tags:
  - Shopify
  - Newsletter
  - Email marketing
  - GDPR
---

You set up a newsletter in Shopify in three steps: collect sign-ups in the store and at checkout, turn on double opt-in where your market needs it (Germany, for example), then send campaigns with Shopify Messaging or another email app. Shopify Messaging was called **Shopify Email** until recently. This article shows where the settings are and what to check before your first campaign. The source is the Shopify Help Center, as of November 2026. This is not legal advice.

## Where customers can sign up

According to the Shopify Help Center there are three ways onto your list:

- **A newsletter form in the online store.** Most themes have a section or block for it. Alternatively, the **Shopify Forms** app builds inline or pop-up forms.
- **A checkbox at checkout.** Customers tick that they want marketing emails while they pay.
- **Sign-in to a customer account.** A consent checkbox can also appear when customers sign in.

All addresses end up in the admin under **Customers**, in the default segment **Email subscribers**. With your own segments you can later write to specific groups.

## Setting up the checkout checkbox

Under **Settings > Checkout**, in the **Marketing opt-in** section, select **Email**. Then choose where the checkbox is **preselected**:

- **Regions recommended by Shopify:** Shopify follows the law in the customer's country.
- **Regions you choose:** you pick the countries yourself. If you choose **no** region, the checkbox is never preselected and every customer has to tick it.

The help is clear that this automation is no substitute for legal advice. According to the help, consent is captured only when the customer clicks **Pay now** (one-page checkout) or **Continue to shipping** (three-page checkout) with the box ticked.

One detail that is easy to miss: the default text next to the checkbox talks about news and offers. If you also send cart reminders, the help says you should change that text. More in [Shopify abandoned checkouts](/blog/shopify-abgebrochene-checkouts).

## Turning on double opt-in

With double opt-in a new subscriber gets an email with a confirmation link and only counts as a subscriber after clicking it. The help says it is required by law in some countries and, for stores located in Germany, that customers must respond to the confirmation before they are included in your marketing if your setup requires it. According to the help, double opt-in also helps with GDPR compliance.

How to turn it on, according to the help:

1. Open **Settings > Notifications**.
2. Click **Customer notifications**.
3. In the **Marketing double opt-in** section, select **Customer marketing confirmation**.

For stores located in Germany the help names an extra checkbox, **Require customers to confirm their subscription**, in the email marketing settings on the Notifications page. You need the **Online Store** sales channel.

Three points from the help that matter in practice:

- **No marketing in the confirmation email.** It should only confirm.
- **Change the confirmation text in the theme.** After submitting, the form should say something like "Check your email to confirm your subscription." You find the text under **Online Store**, on the active theme, via **Edit default theme content**, usually as **Confirmation** under the newsletter form or **Post success** under Sign up.
- **Existing subscribers don't have to reconfirm.** Anyone who signed up before you turned it on stays a subscriber, according to the help. Whether your existing list is clean is a question for your lawyer.

If you use a form or pop-up app, double opt-in has to be set **in the app too**. If the app has no such option, the help says anyone who signs up there is marked as a subscriber straight away.

## Shopify Messaging: newsletters from the admin

According to the help, Shopify Messaging is installed by default and lives under **Apps > Shopify Messaging**. It sends email, SMS and WhatsApp campaigns to your subscribers. What the help says:

- **Requirements:** an active, paid Shopify plan, the Online Store channel and a payment provider. On a free trial you can build campaigns and send test messages to yourself, but not to subscribers.
- **Cost:** based on how many messages you send. Paid plans include a monthly allowance of free emails. The current figures are in the help and in the send dialog. A **monthly spending threshold** only triggers a notification and does not stop billing.
- **Smart delivery:** on by default. Campaigns then go only to subscribers who have recently engaged with your marketing.
- **Automations:** for example a welcome email after sign-up or an abandoned checkout reminder. By default they go only to subscribers. For custom flows or flows with third-party apps the help points to [Shopify Flow](/blog/shopify-flow-automatisierung).
- **Privacy:** it tracks opens, clicks, unsubscribes and spam complaints. You can turn off open tracking under **Settings > Notifications**. According to the help, **Shopify Network Intelligence** must also be on in your privacy settings.

Klaviyo, Mailchimp and other apps are the alternative if you need more segmentation or already have a list there. The checkbox and double opt-in rules above still apply: consent is collected in the store.

## Before your first campaign: sender and delivery

- **Set your sender address.** Without your own authentication, the help says Shopify sends from a shopifyemail.com subdomain and rewrites your sender address to it. Authenticating your own domain is optional but recommended, because customers then see your domain. It happens in your DNS records, more in [Connecting a domain to Shopify](/blog/shopify-domain-verbinden).
- **Start slowly.** Shopify sets send limits per day or week automatically. With low engagement or many spam reports, delivery can be paused. Split large lists into segments.
- **Address in the footer.** By default your store address from **Settings > General** appears at the bottom of every email. Which details belong in marketing emails in your country is a question for your lawyer. For required store pages see [Shopify policies and legal pages](/blog/shopify-rechtstexte-richtlinien).

## Checklist

1. Newsletter form in the footer or as a pop-up, with a link to the privacy policy?
2. Checkout checkbox on, **not** preselected for Germany?
3. Double opt-in on, also in every form app?
4. Confirmation email without marketing, in your customers' language?
5. Theme confirmation text says "check your inbox"?
6. Sender domain authenticated?
7. Welcome email set up as an automation?
8. Privacy policy names the email service, checked with your lawyer? More in [Shopify cookie banner and privacy](/blog/shopify-cookie-banner-datenschutz).

## How I handle it

For [Jula Bloom](/projects/jula-bloom) I added a Klaviyo signup in the footer and pop-ups with sensible delays before launch. For [Bazar Bizar](/projects/bazar-bizar) there is a Mailchimp signup in the footer and the pop-up, both without an app. My part is the theme: where the form sits, when the pop-up appears, that the confirmation text is right and that the page stays fast. I have no list-growth figures from these projects. The store's team writes the campaigns.

## Frequently asked questions

**Is double opt-in required in Germany?** The Shopify Help Center says double opt-in is required by law in some countries and helps with GDPR compliance. In Germany it is the usual way to prove consent. The binding answer for your store comes from your lawyer.

**Where do I find my newsletter subscribers in Shopify?** In the admin under **Customers**, in the **Email subscribers** segment. Sign-ups from forms, checkout and customer accounts end up there.

**What happened to Shopify Email?** The app is now called **Shopify Messaging** and sends SMS and WhatsApp messages as well as emails. You find it under **Apps > Shopify Messaging**.

**Why don't customers get a confirmation email?** Common reasons: double opt-in is off, the form comes from an app with its own settings, or the email lands in spam because the sender domain is not authenticated.

## A newsletter signup that fits your store

Send me your store's address for the [free shop check](#contact): I look at where customers can sign up, whether the checkbox and confirmation are right and whether the pop-up slows the page. Setup and ongoing care fit [Shopify support and maintenance](/services/shopify-betreuung).

**Read next:** [Shopify abandoned checkouts](/blog/shopify-abgebrochene-checkouts) · [Shopify email notifications](/blog/shopify-email-benachrichtigungen) · [Shopify cookie banner and privacy](/blog/shopify-cookie-banner-datenschutz)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
