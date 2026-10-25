---
publishedAt: 2026-10-25
title: "Shopify Flow: automate store tasks without code"
date: 25 October 2026
readingTime: 7 min
excerpt: "Shopify Flow for merchants without a technical background: triggers, conditions and actions, templates, waiting, testing and errors. What the free app can do, where its limits are and when a developer helps."
image: /og/projects/orska-rituals.jpg
topic: support
tags:
  - Shopify
  - Shopify Flow
  - Automation
  - Store management
---

"Every morning I go through the same orders, tag customers by hand and check what's sold out." Shopify Flow can take over routines like these. The app watches for events in your store and then runs the steps you've set. This article covers what the Shopify Help Center says about it, for merchants without a technical background.

## A note before we start

Everything here comes from the Shopify Help Center as of October 2026. Menus change, so check your own admin. Menu names are taken from the English interface. I don't quote prices for plans, apps or development. Which workflows are worth it for your store depends on your processes, not on the help pages.

## What Shopify Flow is

According to the Help Center, Shopify Flow is a platform for automating tasks in your store and across your apps. Flow is a **free app**, available on the Basic, Grow, Advanced and Plus plans. You install it from the Shopify App Store and then open it in your admin under **Apps > Flow**.

Most features are available on all of these plans. The exceptions the Help Center names: the **Send HTTP request** action is available from Grow up, and tasks from custom partner apps only on Plus. Usage limits in Flow also depend on the plan, because they follow the API limits of the plan.

## The three building blocks of a workflow

In Flow, an automation is called a **workflow** and has three parts:

- **Trigger:** the event that starts the workflow. Examples from the Help Center list: **Order created**, **Customer created**, **Product created**, **Product variant inventory quantity changed** and **Scheduled time** for workflows that run on a schedule. Every workflow starts with a trigger from Flow or from an app.
- **Condition:** checks whether the workflow should continue, like an "if, then". Without a condition, the actions run right away.
- **Action:** changes something in your store, works with data inside the workflow, or does something in another app. Examples: **Add order tags**, **Add customer tags**, **Hold fulfillment order**, **Cancel order**, **Send internal email** and **Wait**.

According to the Help Center, workflows run as soon as possible once the trigger happens.

## What merchants typically use it for

The Help Center lists example workflows. A few of them:

- **Risk:** cancel high-risk orders and restock the items, or capture payment only if the order isn't high-risk.
- **Inventory:** get notified when stock is low, hide products when they're sold out. More on this: [Managing Shopify inventory](/blog/shopify-lagerbestand-verwalten).
- **Customers:** group customers into tiers by lifetime spend, or tag them by email address, for example for an education discount.
- **Orders:** tag orders paid with a gift card, or email the logistics team when an order needs to be expedited. On gift cards: [Shopify gift cards and vouchers](/blog/shopify-geschenkkarten-gutscheine).
- **Fulfillment:** request or hold fulfillments based on criteria, get notified about unusually large quantities, tag orders by shipping method. See: [Setting up Shopify shipping](/blog/shopify-versand-einrichten).
- **Payment:** send a payment reminder after the due date.

## Template or your own workflow

You create a workflow under **Create workflow**, either from a template via **Browse templates** or from scratch: pick a trigger, add a condition with **+**, and set the action on the **True** branch. It only goes live once you click **Turn on workflow**.

Two notes from the Help Center on templates: they contain placeholder data that you replace with your own values before turning them on. And many templates use triggers or actions from other apps, which need the matching connector installed. If you let Sidekick generate a workflow, it starts out inactive, and the Help Center says to review and test it thoroughly.

## Conditions: what often surprises people

- **AND and OR:** with AND the result is true only if every criterion is true, with OR one is enough.
- **Missing data:** if there's no data, an AND condition counts as **true** and an OR condition as **false**, according to the Help Center. This is a typical reason for workflows that fire too often or never.
- **Lists:** for lists, such as the line items of an order, there are "at least one of", "all of" and "none of". If the list is empty, the conditions aren't evaluated at all.
- **Negation:** the Help Center calls it a common mistake to try to reverse a condition with "is not equal to".
- **Upper and lower case** don't matter in text comparisons.
- **Tags:** conditions on tags might not work if an order, product or customer has more than 250 tags.
- **Orders and drafts** are separate: triggers and actions for orders don't affect draft orders, and the other way round.

The Help Center also advises picking a more specific trigger than **Order created** where possible, for example **Order risk analyzed** for risk workflows.

## Waiting instead of acting right away

With the **Wait** action, a workflow pauses before it continues, for example to check an order only after some time has passed. According to the Help Center:

- A workflow can wait for at most **90 days**. With more, it can't be turned on. For longer gaps, the Help Center recommends a scheduled workflow.
- After the wait, the data is **refreshed**. What changed in the meantime is what counts.
- If you edit an active workflow, the change also applies to runs that are currently waiting. If you turn it off or delete it, waiting runs are stopped.

## Test before it goes live

Flow can test a workflow before you turn it on, via **Test your workflow** at the trigger. A test uses real store data but, according to the Help Center, doesn't change your store. It stops at the first action that would make a change. Actions that reach external services, such as Send HTTP request, can't be simulated, and test runs don't appear in the list of runs.

## When something goes wrong

- You'll find all runs under **Apps > Flow > Recent runs**, with the statuses **In progress**, **Waiting** or **Completed** and filters, for example for errors.
- Runs are stored for **14 days** after they complete.
- Flow retries temporary errors with growing gaps. Each section of a workflow has an upper limit of 36 hours. Permanent errors aren't retried, and the run is marked as failed.
- Failed runs can be retried by hand.
- With the **Workflow error occurred** trigger you can get notified about errors, via a Shopify alert, email or Slack.

## The "Send internal email" action

According to the Help Center, it's meant for emails to **your own team**. For emails to customers, the Help Center points to marketing automations. The recipient address is fixed and can't be set with variables. Separate several recipients with a comma. Which emails Shopify itself sends to customers: [Shopify email notifications](/blog/shopify-email-benachrichtigungen).

## What the help pages don't answer

The pages I read don't say which workflows are worth it for your store, how much time they save or whether they change your sales. Triggers and actions from other apps follow that provider's rules. And what the setup costs depends on the scope.

## Examples from practice

None of my published projects describes a Shopify Flow workflow for a client, and I won't make one up. There is related automation: at [Orska Rituals](/projects/orska-rituals), a B2B company is created automatically once a professional is approved. At [Elanora Skin](/projects/elanora-skin), I extended a back-in-stock flow through the Klaviyo API.

## Before you start: a checklist

1. Which task do you do **by hand every week** in the same way?
2. Which **event** starts it, and is there a more specific trigger than Order created?
3. Under which **conditions** should it run, and what happens if data is missing?
4. Is there a **template**, and which placeholders need replacing?
5. Does the workflow need **other apps**, and is the connector installed?
6. Have you **tested** the workflow before turning it on?
7. Who gets a **message** when a run fails?

## When a developer helps

You can set up simple workflows from templates yourself. Help is worth it when a workflow needs data from metafields ([Shopify metafields and metaobjects](/blog/shopify-metafelder-metaobjects)), when Flow should talk to external systems via HTTP or the Admin API, when workflows connect several apps, or when wholesale customers should be approved automatically, as with [Shopify B2B and wholesale](/services/shopify-b2b). After that, existing workflows belong to ongoing care, see [Shopify maintenance and support](/blog/shopify-wartung-betreuung).

## Frequently asked questions

**Does Shopify Flow cost anything?** According to the Help Center, Flow is a free app on the Basic, Grow, Advanced and Plus plans.

**Can Flow send emails to customers?** The Send internal email action is meant for your own team. For customers, the Help Center points to marketing automations.

**Does a test change my store?** No. According to the Help Center, the test stops before the first action that would make a change.

**How long can a workflow wait?** At most 90 days.

**Where can I see whether a workflow ran?** Under Apps > Flow > Recent runs, for 14 days after the run completes.

**What does the setup cost?** That depends on the scope. I don't quote amounts here.

## How is your store doing?

Send me your store's address for the [free store check](#contact). I look at what's visible from the outside, such as load time, apps in the source code and how the pages are built, and tell you what stands out. I only work with publicly visible data, without access to your account. What I do for wholesale stores is on [Shopify B2B and wholesale](/services/shopify-b2b).

**Read next:** [Managing Shopify inventory](/blog/shopify-lagerbestand-verwalten) · [Shopify collections and filters](/blog/shopify-kollektionen-filter) · [Shopify help](/blog/shopify-help)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
