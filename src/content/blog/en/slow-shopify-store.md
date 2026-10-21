---
publishedAt: 2026-10-22
title: "Slow Shopify store? 7 causes and what you can check yourself"
date: 22 October 2026
readingTime: 6 min
excerpt: Why a Shopify store loads slowly, how to measure it yourself in ten minutes and which causes you can fix without a developer. With a real example.
image: /og/projects/pedchem.jpg
tags:
  - Shopify
  - Page speed
  - Performance
---

Does your store feel sluggish, especially on a phone? You are not alone. The good news: with Shopify it is almost never the server. Shopify runs the hosting and the checkout itself. A store gets slow because of what sits in the theme: apps, images, scripts and sections. And you can find much of that yourself.

## Measure first: check your store in ten minutes

1. Open [PageSpeed Insights](https://pagespeed.web.dev/) and enter the address of your **home page**. Repeat with a **collection** and a **product page**, because that is where your customers buy.
2. Look at the **Mobile** tab. Most visitors come from a phone, and that is where the difference is biggest.
3. At the top, if the store has enough visitors, you see the rating from real user data ("Core Web Vitals"). For Google it counts more than the score below it, which comes from a lab test only.
4. In Google Search Console, under **Core Web Vitals**, you find the same values for the whole store.

Write the values down. Later you will see whether a change really helped.

## The 7 most common causes

### 1. Too many apps

Every app that shows something in the store loads its own code: reviews, pop-ups, chat, wishlist, upsells, counters. Each one is small, together they slow down every page. Go through your apps and ask of each one: do I still need it, and can my theme do this by now?

### 2. Leftovers of uninstalled apps

Deleting an app does not always remove its code. Older apps wrote code straight into the theme files, and it keeps loading. You only see it in the code, for example in `theme.liquid`. This is where someone who reads Liquid helps.

### 3. Large images and videos on the home page

A slider with five large photos or a background video at the top is often the biggest single item. Shopify resizes images automatically, but only if the theme uses that properly. Do not upload images larger than needed, and ask yourself whether the slider really sells or just looks nice.

### 4. An old or overloaded theme

Themes bought years ago and adjusted again and again carry a lot of weight. Newer themes from the Shopify Theme Store are usually much leaner. A change pays off most when much of the store already runs on apps that a new theme can do itself.

### 5. Tracking and marketing scripts

Google Analytics, Meta pixel, TikTok, Pinterest, heatmaps: every service loads code. Check which ones you actually look at. Shopify offers **customer events (custom pixels)** for this, so tracking code no longer sits directly in the theme.

### 6. Too many fonts

Three typefaces in four weights each are twelve files the browser has to load before text shows properly. Two typefaces in a few weights are almost always enough.

### 7. Too much on one page

Home pages grow by a section with every campaign. Twenty sections with product carousels, an Instagram feed and a review widget take as long to load as that sounds. Fewer, clearer sections help both speed and sales.

## What you can do yourself

- Clean up apps: uninstall everything you do not use.
- Resize images before uploading, drop background videos.
- Shorten the home page: which sections does anyone actually click?
- Remove tracking services you do not use.
- Measure again and compare with your notes.

## When a developer helps more

If the simple steps are done and the store is still slow, the cause is usually in the code: app leftovers in the theme, scripts that block everything, or a theme that can no longer be cleaned up sensibly. Then either a targeted cleanup or a move to a leaner theme is the bigger lever.

## An example: Pedchem

[Pedchem](/projects/pedchem), a pest control store with 323 products, ran on the Flex theme with several paid apps. I rebuilt the store on the Enterprise theme without paid apps, moved the product data into metafields and the tracking into a custom pixel. In the lab test the new theme scored 96 for performance, the old one 57. The live store kept selling in the meantime, and the switch happened only after written approval.

## Frequently asked questions

**Is it my Shopify plan?** No. Load time does not depend on the plan, but on the theme and what it loads.

**Do I have to buy a new theme?** Not always. Often cleaning up apps and old code is enough. A change pays off when the old theme carries a lot of weight.

**How much does the PageSpeed Insights score matter?** It is a good guide. For Google, the real user data, the Core Web Vitals, is what counts in the end.

**Does my store keep selling while it is being worked on?** Yes. I work in an unpublished test theme; it goes live only after your approval.

## Want me to look at your store?

Send me your store's address for the [free store check](#contact). I look at load time, apps and theme and tell you what helps most, even if you then do it yourself. If you would rather hand it over: I [make your Shopify store faster](/services/shopify-speed), at a fixed price after the briefing.

*Kiril Karatitsyn, Shopify developer in Germany*
