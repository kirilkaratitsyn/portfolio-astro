---
publishedAt: 2026-11-07
title: "Switching Your Shopify Developer: How a New Developer Takes Over Your Store Without Losing Anything"
seoTitle: "Switch Shopify Developer: Handover, Access, Audit"
date: November 7, 2026
readingTime: 7 min
excerpt: The previous developer is gone, too expensive or no longer reachable. What to secure before the handover, how to give the new developer safe access, how to end the old access and how to spot a good takeover offer.
image: /og/projects/lineargent.jpg
topic: support
tags:
  - Shopify
  - Developer
  - Handover
---

The developer who built your store no longer answers, is fully booked, or the collaboration just does not work anymore. The question that remains is rarely the new name. It is: what happens to what is already there? Who has access, where does the code live, which apps are tied to the theme? This article shows what to secure before a handover, how the new developer gets safe access, how you end the old access and how to spot a good takeover offer.

## Step 1: Take stock before you invite anyone

A handover is easier when you know what exists. It takes about an hour and needs no technical knowledge:

- **Who has access today?** In Shopify under Settings > Users (depending on the account, "Users and permissions"). It lists staff and collaborators, meaning Shopify Partners you gave access to. According to Shopify Help, a filter shows all collaborator accounts.
- **Which apps are installed?** Under Settings > Apps. Each app has an info page with billing, permissions and history.
- **Which theme is published, and are there drafts?** Under Online Store > Themes. Older versions the previous developer left behind are there too.
- **Who owns the domain and the accounts around the store?** You are the store owner, so the account runs on your email address. For the domain and add-on services, check whether they are registered to you or to the agency. That is a practical recommendation, not a statement from Shopify Help.

Write it down, even if it is only bullet points. With this list the new developer can ask targeted questions instead of guessing.

## Step 2: Secure what can be secured

- **Theme copy.** According to Shopify Help, duplicating a theme is the recommended way to keep a state before you change it. A copy secures the theme, not the whole store: a theme download does not include products, collections, menus, pages, blog posts or files, according to Shopify.
- **Products.** A CSV export saves product data, as described in [importing Shopify products via CSV](/blog/shopify-produkte-importieren-csv).
- **App data.** Some apps store data that cannot be recovered after uninstalling. Export what you need before an app is removed. This is stated in the Shopify Help page on uninstalling apps.
- **Logins outside Shopify.** Email services, domain registrar, payment providers. These logins are yours and should be with you.

## Step 3: Access for the new developer, without your password

Do not give anyone your own login. Shopify has **collaborator accounts** for this. According to Shopify Help, it works like this:

- The developer needs a Shopify Partner account and sends an access request for your store. You give them a **request code**. Only people who know the code can send a request. You can generate a new code at any time, and the old one stops working.
- You see the request in user management, with a few details about the partner (for example, since when the Partner account exists), and decide whether to accept.
- You decide which **permissions** the collaborator gets. Shopify advises giving only the ones you are comfortable with. If the developer asks for a permission, they should be able to explain why. On a single store, collaborators cannot be given the Administrator role, and ownership cannot be transferred to a collaborator.
- The partner must have two-step authentication enabled, otherwise they cannot log in.
- Collaborators do not count toward your plan's user limit.
- Permissions for specific apps and sales channels can be set separately.

Sensitive data such as customer or financial data belongs to what Shopify Help calls "sensitive permissions", to be given only to your most trusted users. Developers usually do not need them for theme work. If in doubt, ask for the reason.

## Step 4: End the old access

Many people forget this, and it is the most important security step. After the handover, check:

- **Old collaborator:** According to Shopify Help, the account can be removed in user management. This is permanent. If someone wants access again later, they have to send a new request. Without removal, access expires automatically if the collaborator has not logged in for 90 days.
- **Old staff accounts:** If the agency got a regular staff account, delete or deactivate it.
- **Old request code:** Generate a new code so nobody can send a new request with an old one.
- **Passwords:** If a password was shared anywhere, change it and turn on two-step authentication.
- **Apps and webhooks:** In Settings > Apps, check which apps still belong to the old developer (for example custom-built apps) and whether they are still needed.

According to Shopify, the names and actions of a removed collaborator remain visible in the activity log and the order timeline. That helps if someone later asks who changed something.

## Step 5: An audit before the first rebuild

A new developer who starts changing things right away changes something they do not understand yet. A good start is an audit:

1. **Check the theme:** Which customizations are in the code, which in settings? What is outdated or duplicated?
2. **Check the apps:** What is installed, what is used, what is tied to the theme? According to Shopify Help, the info page of a third-party app shows which areas it can view or edit and whether permissions have been unused for 30 days. Apps made by Shopify are not listed there.
3. **Check the costs:** Is an app billed outside Shopify? According to the Help page, uninstalling does not end it.
4. **List the problems:** What is broken, what is only ugly, what is risky? An action plan in order, not a wish list.

The result should be a short document you understand. The offer comes from it, not the other way round.

## What to look for in a takeover offer

- **It starts with an audit or a clearly scoped review**, not with a complete rebuild.
- **Access through a collaborator request**, not your password. Someone who asks for your login is a warning sign.
- **Small steps you can check one by one**, previewed in an unpublished theme. The live store keeps selling.
- **Documentation:** what was changed, where, why. So the next developer (or you) can follow what happened.
- **Honesty about legacy code:** if code is hard to maintain, the developer should say so and offer options instead of hiding it.
- **A fixed price or clearly bounded milestones after the briefing.** Someone who names a sum without looking at the store does not know it.
- **Clarity after the handover:** who takes care of updates and small fixes? See [Shopify maintenance and support](/blog/shopify-wartung-betreuung).

Whether a freelancer or an agency fits better depends on your store: [Shopify freelancer or agency](/blog/shopify-freelancer-oder-agentur) covers that. I am a freelancer myself, so read the comparison with that in mind.

## An example from practice: Lineargent

[Lineargent](/projects/lineargent), a silver jewelry brand from near Barcelona, runs a customized Prestige theme with hundreds of products and an external tool for search and merchandising. In this collaboration I first reviewed the existing theme and then delivered the fixes in seven small milestones, each small enough to check in the live store. The client rated the project 5.0 on Upwork, and the collaboration continues with a second contract. It is an example of the "review first, then change in small steps" approach, not a report of a takeover from a predecessor.

## Frequently asked questions

**Do I have to ask my old developer for permission?** The store is yours and you decide who has access. A friendly conversation is still worth it, because of logins outside Shopify and open questions about the code. Legal questions, such as usage rights to the code, are for legal advice and your contract.

**Can the new developer work with my store login?** Technically yes, but it is not recommended. Collaborator access is limited, traceable and can be removed at any time.

**What if the old developer no longer answers?** As store owner you can remove collaborator accounts yourself and change the request code. You will only get custom apps or code documentation as far as they live in the store.

**Is anything lost?** Changing access does not touch products, orders or customers. Loss is more likely from deleting apps or themes too early. That is why you secure first.

**What does a takeover cost?** That depends on the state of the store. With me, you get a fixed-price offer after the briefing and a first look at the store.

## Should I take a look at your store?

Send me your store address for the [free Shop-Check](#contact). I look at what is visible from the outside and tell you where the risks of a handover are, even if you hire someone else afterwards. If you would rather hand over ongoing care: [Shopify support](/services/shopify-betreuung) with a clear scope and a fixed price after the briefing.

**Further reading:** [Shopify theme customization](/blog/shopify-theme-customization) · [Hiring someone to optimize your Shopify store](/blog/shopify-shop-optimieren-lassen) · [Shopify relaunch](/blog/shopify-relaunch-theme-wechsel)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
