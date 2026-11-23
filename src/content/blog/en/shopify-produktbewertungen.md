---
publishedAt: 2026-11-23
title: "Shopify product reviews: star ratings in your store, on Google and legally sound"
seoTitle: "Shopify product reviews: setup guide"
date: 23 November 2026
readingTime: 7 min
excerpt: "Shopify product reviews: what the Shop app shows, what to check in a reviews app, why stars are missing in your theme, when Google shows stars and what German law (§ 5b UWG) requires."
image: /og/projects/minbie.jpg
topic: build
tags:
  - Shopify
  - Reviews
  - SEO
---

Stars under a product and real words from buyers help customers decide. In Shopify, though, reviews are spread across three layers: the Shop app, a reviews app in your online store, and the theme that displays the stars. On top of that come Google and, in Germany, competition law. This article sorts it out. Sources are the Shopify Help Center, the Shopify developer docs, Google Search documentation and the German UWG, as of November 2026. This is not legal advice.

First, so you can judge my view: I publish a reviews app in the Shopify App Store myself, [Reviews Core](https://apps.shopify.com/reviews-core). So I am not neutral on this topic. That is why there is no app ranking here, only criteria you can use to check any app.

## Reviews in the Shop app

The "Product reviews" page in the Shopify Help Center describes reviews in the **Shop app**, not a reviews module for your online store. There, customers can rate your product with **1 to 5 stars**. Reviews and the average are public and appear on the product page in the Shop app.

If you use one of the partner apps the Help Center names (**Judge.me, Loox, Okendo, Stamped.io, Yotpo**), the reviews collected there are, according to the Help Center, shown in Shop automatically. For stars in your own online store you usually need a reviews app.

## Choosing a reviews app: six criteria

These are my own checks from theme work, not official Shopify rules:

1. **Does the app write the standard metafields?** More on that below. It decides whether your theme finds the stars without extra code.
2. **How does it ask for reviews?** A request by email after delivery brings more reviews than a form nobody finds. Check the timing, language and sender of the email.
3. **Can it import existing reviews?** Important when you switch apps or platforms. Wix, for example, does not export reviews, see [Moving from Wix to Shopify](/blog/wix-zu-shopify-umzug).
4. **Does it mark verified buyers?** You need that for the disclosure under § 5b UWG, see below.
5. **Does the text appear in your store's languages?** App content is only translated if the app uses Shopify's translation interface. More in [A multilingual Shopify store](/blog/shopify-mehrsprachig-uebersetzen).
6. **How much load time does the widget cost?** Every app that shows something in the store loads its own code. Test the product page before and after, as described in [Slow Shopify store](/blog/slow-shopify-store).

## Why stars are missing in your theme: standard metafields

Shopify has two standard metafields for reviews, for products and variants:

- **Product rating**, `reviews.rating`, type `rating`: the average rating.
- **Product rating count**, `reviews.rating_count`, type `number_integer`: the number of ratings.

According to the Shopify developer docs, reviews apps **should** write to these fields and update them whenever the rating changes, and themes that display stars **should** read exactly this field. "Should" means not every app and not every theme does.

A typical picture: the app's widget sits on the product page, but the stars are missing on product cards in collections. Then the app writes its data to its own fields, or the theme does not read the standard field. The fix is either a setting in the app or a small change to the theme. What metafields are is explained in [Shopify metafields and metaobjects](/blog/shopify-metafelder-metaobjects).

## Stars in Google results

Google can show review stars in search results when the page has matching structured data. **Product** is one of the eligible types in Google's documentation. The key rules from the docs:

- If you mark up **AggregateRating**, the average rating must also be **visible on the page**.
- Reviews from **other websites** must not be aggregated.
- **Fake** or undisclosed incentivised reviews are not allowed, on the page or in the markup.
- Reviews about **your own business** (LocalBusiness or Organization) that the business itself controls do not get stars. A "4.9 stars for our store" widget on the home page will not bring stars on Google.

Even with clean markup, Google decides whether stars appear. Which parts of the structured data come from the theme and which from the app, you check with Google's Rich Results Test. More on SEO in Shopify in [Hiring someone for Shopify SEO](/blog/shopify-seo-optimieren-lassen).

## Germany: what § 5b UWG requires

Under **§ 5b(3) UWG**, a trader who makes consumer reviews available must state whether and how they ensure that the reviews come from consumers who actually used or bought the product. Two bans from the annex of the UWG come on top:

- **No. 23b:** claiming reviews come from real buyers without reasonable and proportionate steps to check this.
- **No. 23c:** submitting or commissioning fake reviews.

In practice: a short, clearly visible note at the reviews section, for example whether only buyers with an order can leave a review and how that is checked. If you don't check, the note says exactly that. Agree the wording with your lawyer or legal text provider. More on required pages in [Shopify legal texts and policies](/blog/shopify-rechtstexte-richtlinien).

## Checklist

1. A reviews app chosen that meets your needs for request emails, import and language?
2. Does the app write `reviews.rating` and `reviews.rating_count`?
3. Stars visible on the product page **and** product cards, on mobile too?
4. Request email in your customers' language, after delivery, from your sender?
5. § 5b UWG note at the reviews section, agreed with a lawyer?
6. No bought or self-written reviews, incentives disclosed?
7. Rich Results Test for a product page without errors?
8. Product page load time compared before and after the app?

## How I handle it

For [Minbie](/projects/minbie), an Australian baby feeding brand, I brought Okendo star ratings to product cards and product pages in the Blum theme. The stars there are read from Okendo's own metafields. I also updated the review count on the home page and added a template for the reviews page. That is my part in this topic: the display in the theme, with the goal that stars are right wherever customers expect them and the page stays fast. I don't have sales figures from reviews from this project. In the admin I work through a collaborator account with limited permissions.

## Frequently asked questions

**Does Shopify have its own reviews feature for the online store?** The Shopify Help Center describes reviews in the Shop app. For stars in their own online store, most stores use a reviews app.

**Do reviews from my app also appear in the Shop app?** According to the Help Center, automatically, if you use one of the partner apps: Judge.me, Loox, Okendo, Stamped.io or Yotpo.

**May I give a discount for a review?** Google bans undisclosed incentives. If at all, disclose the incentive and check the legal side with your lawyer.

**Why does Google show no stars despite reviews?** Common reasons: broken or duplicate markup from theme and app, the rating not visible on the page, or Google simply decides against it. The Rich Results Test shows the first two.

## Stars missing on your product cards?

Send me your store's address for the [free shop check](#contact): I look at where stars are missing, whether the markup is right and how much load time the app costs. Setup and ongoing care fit [Shopify support and maintenance](/services/shopify-betreuung).

**Read next:** [Shopify metafields and metaobjects](/blog/shopify-metafelder-metaobjects) · [Hiring someone for Shopify SEO](/blog/shopify-seo-optimieren-lassen) · [Connecting Shopify to Google Shopping](/blog/shopify-google-shopping-merchant-center)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
