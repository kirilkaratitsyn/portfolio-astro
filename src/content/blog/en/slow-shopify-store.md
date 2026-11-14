---
publishedAt: 2026-10-22
updatedAt: 2026-11-11
title: "Slow Shopify store? 7 causes and what you can check yourself"
date: 22 October 2026
readingTime: 4 min
excerpt: "Why a Shopify store loads slowly, how to measure it yourself in ten minutes and which causes you can fix without a developer. With a real example."
image: /og/projects/pedchem.jpg
topic: speed
tags:
  - Shopify
  - Page speed
  - Performance
---

Is your Shopify store slow, especially on a phone? It is almost never the server: Shopify runs the hosting and the checkout itself. A store gets slow because of what sits in the theme: apps, images, scripts and sections. You can find much of that yourself.

## Measure first: check your store in ten minutes

1. Open [PageSpeed Insights](https://pagespeed.web.dev/) and test your **home page**, a **collection** and a **product page**.
2. Look at the **Mobile** tab. Most visitors come from a phone.
3. At the top, if the store has enough visitors, you see the rating from real user data ("Core Web Vitals"). For Google it counts more than the lab test score below it.
4. Google Search Console shows the same values for the whole store under **Core Web Vitals**.

Write the values down. Later you will see whether a change helped.

## The 7 most common causes

### 1. Too many apps

Every app that shows something in the store loads its own code: reviews, pop-ups, chat, wishlist, upsells, counters. Together they slow down every page. Ask of each app: do I still need it, and can my theme do this by now?

### 2. Leftovers of uninstalled apps

Older apps wrote code straight into the theme files. It keeps loading after the app is deleted. You only see it in the code, for example in `theme.liquid`. That takes someone who reads Liquid.

### 3. Large images and videos on the home page

A slider with five large photos or a background video at the top is often the biggest single item. Shopify resizes images automatically, but only if the theme uses that properly. Do not upload images larger than needed.

### 4. An old or overloaded theme

Themes bought years ago and adjusted again and again carry a lot of weight. Newer themes from the Shopify Theme Store are usually leaner. A change pays off most when much of the store runs on apps that a new theme can replace.

### 5. Tracking and marketing scripts

Google Analytics, Meta pixel, TikTok, Pinterest, heatmaps: every service loads code. Check which ones you actually look at. With Shopify's **customer events (custom pixels)**, tracking code no longer sits directly in the theme.

### 6. Too many fonts

Three typefaces in four weights each are twelve files the browser has to load before the text. Two typefaces in a few weights are almost always enough.

### 7. Too much on one page

Home pages grow by a section with every campaign. Twenty sections with product carousels, an Instagram feed and a review widget take long to load. Fewer sections help both speed and sales.

## What you can do yourself

- Uninstall apps you do not use.
- Resize images before uploading, drop background videos.
- Shorten the home page: which sections does anyone click?
- Remove tracking services you do not use.
- Measure again and compare with your notes.

## When a developer helps more

If the store is still slow after that, the cause is usually in the code: app leftovers in the theme, blocking scripts, or a theme that can no longer be cleaned up. Then a targeted cleanup or a move to a leaner theme helps. How to prepare the job, record baseline values and give access safely is covered in [Hiring Someone to Optimize Your Shopify Store](/blog/shopify-shop-optimieren-lassen).

## An example: Pedchem

[Pedchem](/projects/pedchem), a pest control store with 323 products, ran on the Flex theme. I rebuilt it on the Enterprise theme without adding any apps, gave the product data in metafields proper types and moved the tracking into a custom pixel. Live mobile PageSpeed on the home page went from 57 to 82, LCP from 12.0 to 4.2 seconds. The live store kept selling, and the switch happened only after written approval.

## Frequently asked questions

**Is it my Shopify plan?** No. Load time depends on the theme and what it loads.

**Do I have to buy a new theme?** Not always. Often cleaning up apps and old code is enough.

**How much does the PageSpeed Insights score matter?** It is a guide. For Google, the real user data, the Core Web Vitals, is what counts.

**Does my store keep selling while it is being worked on?** Yes. I work in an unpublished test theme. It goes live only after your approval.

## Want me to look at your store?

Send me your store's address for the [free store check](#contact). I tell you what helps most, even if you then do it yourself. Or I [make your Shopify store faster](/services/shopify-speed), at a fixed price after the briefing.

**Further reading:** [Shopify theme customization](/blog/shopify-theme-customization) · [Shopify metafields and metaobjects](/blog/shopify-metafelder-metaobjects) · [Shopify cookie banner and privacy policy](/blog/shopify-cookie-banner-datenschutz)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
