---
publishedAt: 2026-11-07
updatedAt: 2026-11-11
title: "Switching Your Shopify Developer: How a New Developer Takes Over Your Store Without Losing Anything"
seoTitle: "Switch Shopify Developer: Handover, Access, Audit"
date: November 7, 2026
readingTime: 7 min
excerpt: "Switching your Shopify developer: what to secure before the handover, how to give safe access and how to end the old access."
image: /og/projects/lineargent.jpg
topic: support
tags:
  - Shopify
  - Developer
  - Handover
---

You want to switch your Shopify developer because the current one no longer answers, is fully booked, or the collaboration no longer works. First find out what is already there: who has access, where does the code live, which apps are tied to the theme?

## Step 1: Take stock before you invite anyone

This takes about an hour and needs no technical knowledge:

- **Who has access today?** In Shopify under Settings > Users (depending on the account, "Users and permissions"). It lists staff and collaborators, meaning Shopify Partners with access. According to Shopify Help, a filter shows all collaborator accounts.
- **Which apps are installed?** Under Settings > Apps.
- **Which theme is published, and are there drafts?** Under Online Store > Themes. Older versions from the previous developer are there too.
- **Who owns the domain and the store?** You are the store owner, and the account runs on your email address. Check whether the domain and add-on services are registered to you or to the agency.

Write it down as bullet points for the new developer.

## Step 2: Secure what can be secured

- **Theme copy.** According to Shopify Help, duplicating a theme is the recommended way to keep a state before changes. It secures the theme only: according to Shopify, a theme download does not include products, collections, menus, pages, blog posts or files.
- **Products.** A CSV export saves the product data, see [importing Shopify products via CSV](/blog/shopify-produkte-importieren-csv).
- **App data.** According to Shopify Help, some apps store data that cannot be recovered after uninstalling. Export what you need first.
- **Logins outside Shopify.** Email services, domain registrar, payment providers. These logins are yours.

## Step 3: Access for the new developer, without your password

Do not give anyone your own login. Shopify has **collaborator accounts** for this. According to Shopify Help, it works like this:

- The developer needs a Shopify Partner account and sends an access request. You give them a **request code** for it. You can generate a new code at any time, and the old one stops working.
- You see the request in user management and decide whether to accept.
- You set the **permissions**. Shopify advises giving only the ones you are comfortable with. The developer should be able to explain why they need a permission.
- On a single store, collaborators cannot be given the Administrator role. Ownership cannot be transferred to a collaborator.
- The partner must have two-step authentication enabled, otherwise they cannot log in.
- Collaborators do not count toward your plan's user limit.
- Permissions for specific apps and sales channels can be set separately.

According to Shopify Help, customer and financial data fall under "sensitive permissions", to be given only to your most trusted users. Developers usually do not need them for theme work.

## Step 4: End the old access

This is the most important security step. After the handover, check:

- **Old collaborator:** According to Shopify Help, you remove the account in user management. This is permanent, and new access needs a new request. Without removal, access expires if the collaborator has not logged in for 90 days.
- **Old staff accounts:** If the agency got a regular staff account, delete or deactivate it.
- **Old request code:** Generate a new code.
- **Passwords:** If a password was shared, change it and turn on two-step authentication.
- **Apps and webhooks:** Under Settings > Apps, check which apps still belong to the old developer (for example custom-built apps) and whether you still need them.

According to Shopify, the names and actions of a removed collaborator stay visible in the activity log and the order timeline.

## Step 5: An audit before the first rebuild

A developer who rebuilds right away changes something they do not understand yet. An audit is the better start:

1. **Check the theme:** Which customizations are in the code, which in settings? What is outdated or duplicated?
2. **Check the apps:** What is installed, what is used, what is tied to the theme? According to Shopify Help, the info page of a third-party app shows which areas it can view or edit and whether permissions have been unused for 30 days. Apps made by Shopify are not listed there.
3. **Check the costs:** Is an app billed outside Shopify? According to the Help page, uninstalling does not end it.
4. **List the problems:** What is broken, what is only ugly, what is risky? That gives an action plan in order.

The result is a short document you understand. The offer is based on it.

## What to look for in a takeover offer

- **It starts with an audit**, not with a complete rebuild.
- **Access through a collaborator request.** Someone who asks for your login is a warning sign.
- **Small steps you can check one by one**, previewed in an unpublished theme. The live store keeps selling.
- **Documentation:** what was changed, where, why?
- **Honesty about legacy code:** if code is hard to maintain, the developer says so and names options.
- **A fixed price or clearly bounded milestones after the briefing.** Someone who names a sum without looking at the store does not know it.
- **Clarity after the handover:** who takes care of updates and small fixes? See [Shopify maintenance and support](/blog/shopify-wartung-betreuung).

Whether a freelancer or an agency fits better is covered in [Shopify freelancer or agency](/blog/shopify-freelancer-oder-agentur). I am a freelancer myself, so read the comparison with that in mind.

## An example from practice: Lineargent

[Lineargent](/projects/lineargent), a silver jewelry brand from near Barcelona, runs a customized Prestige theme with hundreds of products and an external tool for search and merchandising. I work there in small steps that can each be checked in the live store.

One example: a Google tag loader came 15 seconds late. The cause was in the theme’s speed optimiser and was fixed in one change. Before that, the live files were compared with a backup, because the client’s designer also edits the live theme.

The client rated the project 5.0 on Upwork, and the collaboration continues with a second contract. The example shows the "review first, then change in small steps" approach, not a takeover from a predecessor.

## Frequently asked questions

**Do I have to ask my old developer for permission?** No. The store is yours and you decide who has access. A conversation is still worth it, because of logins outside Shopify and open questions about the code. Legal questions, such as usage rights to the code, are for legal advice and your contract.

**Can the new developer work with my store login?** Technically yes, but it is not recommended. Collaborator access is limited, traceable and can be removed at any time.

**What if the old developer no longer answers?** As store owner you remove collaborator accounts yourself and change the request code. You only get custom apps or code documentation as far as they live in the store.

**Is anything lost?** Changing access does not touch products, orders or customers. Loss comes from deleting apps or themes too early. So secure first.

**What does a takeover cost?** That depends on the state of the store. With me, you get a fixed-price offer after the briefing and a first look at the store.

## Should I take a look at your store?

Send me your store address for the [free Shop-Check](#contact). I tell you where the risks of a handover are. For ongoing care: [Shopify support](/services/shopify-betreuung) with a clear scope and a fixed price after the briefing.

**Further reading:** [Shopify theme customization](/blog/shopify-theme-customization) · [Hiring someone to optimize your Shopify store](/blog/shopify-shop-optimieren-lassen) · [Shopify relaunch](/blog/shopify-relaunch-theme-wechsel) · [Having a Shopify app built](/blog/shopify-app-entwickeln-lassen)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
