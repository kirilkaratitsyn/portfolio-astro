---
publishedAt: 2026-11-13
title: "Connecting a domain to Shopify: set up your own address without breaking email or the store"
seoTitle: "Connect a domain to Shopify: steps, DNS and common errors"
date: 13 November 2026
readingTime: 8 min
excerpt: "Connect a domain to Shopify: which route fits, which DNS records Shopify needs, what applies to .de domains and email, and what usually goes wrong."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Domain
  - Setup
---

Your store starts out under `your-shop.myshopify.com`. You connect a domain to Shopify, for example `www.your-shop.com`, with three DNS records at your domain provider. One wrong line there and the store cannot be reached at that address. The source is the Shopify Help Center, as of November 2026.

## Three routes to your own domain

According to the Shopify Help Center there are three options:

1. **Buy a domain through Shopify.** You manage everything in the Shopify admin.
2. **Connect an existing domain.** It stays with your provider, only the DNS records point to Shopify.
3. **Transfer an existing domain to Shopify.** Management moves to Shopify.

If you already own a domain, **connecting** is usually the right start. Shopify itself recommends it when you are unsure: you can still transfer later.

## Connect or transfer: the comparison

**Connect:**

- DNS settings, payment and renewal stay with your current provider.
- Shopify Support only helps with problems connecting the store.
- Time: minutes to 48 hours. No additional cost from Shopify. Works with all domain extensions.

**Transfer:**

- DNS settings, payment and renewal are in the Shopify admin, and support covers the domain fully.
- Time: up to 20 days. A one-year renewal fee applies. Not every extension can be transferred.

**Connecting fits if** other services (such as email) are tied to the domain, the extension cannot be transferred, or the domain was registered or transferred within the last 60 days.

**This matters for .de:** Shopify lists extensions such as `.at`, `.co.uk`, `.de`, `.jp` and `.kr` as **not eligible for transfer**. A .de domain is therefore connected.

**Transferring fits if** you want everything in one place and want Shopify's support for the domain. A domain already in use risks downtime, so Shopify advises **connecting it first**.

## The DNS records Shopify needs

In your domain provider's account (area "DNS" or "domain management") you change three records. The values according to Shopify's help:

- **A record** (host `@`): `23.227.38.65`
- **AAAA record** (host `@`): `2620:0127:f00f:5::`. If your provider rejects the short notation, use the expanded one: `2620:0127:f00f:0005:0000:0000:0000:0000`.
- **CNAME record** for `www`: `shops.myshopify.com.` (with the dot at the end)

These rules often decide whether it works:

- There may be **only one A record and only one AAAA record**. Delete old ones, otherwise part of your visitors land somewhere else.
- There may be only **one `www` CNAME**. Further CNAMEs need their own names, such as `shop`.
- Leave the **TTL** at the default.
- Afterwards Shopify may show an A address with a different ending, such as `23.227.38.32`. According to the help this is valid.

Then in the Shopify admin go to **Settings > Domains > Connect existing domain** and enter the domain **without** `www`. For some providers (GoDaddy, IONOS, Cloudflare, Namecheap, Wix and Squarespace, among others) Shopify has a dedicated guide, and in some cases the connection runs automatically. The values above apply to November 2026, so check them against the current Shopify help.

**Shopify Support cannot log in to your domain provider account**, not even with your permission. Only the provider can help there.

## How long it takes

Shopify usually names up to two hours and in some cases **up to 48 hours**. During that time the domain may show errors now and then, and the admin shows "TLS pending". Shopify creates the certificate (https) automatically and for free once the records are right.

Do not change anything again during the wait: according to the help this can reset the waiting time. You can check the records with free tools such as whatsmydns.net or dnschecker.org.

## Set the primary domain

Your store can have up to 20 domains in addition to the myshopify address. **One** is the **primary** one, shown in the browser bar. According to the help, all others redirect to it, including the `myshopify.com` address. For that the new domain needs the status **Connected** in the admin, which can take up to 48 hours.

Set only one variant as primary, with or without `www`. This avoids two versions of the same page.

## Do not forget email

Shopify does **not offer a mailbox**. Before you change DNS records:

- **Write down all existing records**, at least MX and TXT, ideally as a screenshot of the DNS page (this recommendation is mine, not from the Shopify help). Then you can undo any change.
- **Leave your provider's nameservers as they are.** The help warns that incorrectly set up custom or external nameservers can cause **connection and email problems**. If another provider (such as Cloudflare) already hosts your DNS records, you do not need to switch back.
- A domain **bought at or transferred to** Shopify comes with free **forwarding addresses**. If MX records for a real mailbox (Zoho, Google Workspace) are added later, the forwarding is affected according to the help.

The sender address for order emails is set separately in the admin, see [Shopify email notifications](/blog/shopify-email-benachrichtigungen).

## .de domain: mind the verification

With EU extensions such as `.de`, `.eu`, `.nl` or `.it`, the registrar may require an **identity check** (according to Shopify the background is the NIS2 regulation). If your domain shows the "Action Required" badge in the admin, there is a verification request in your email inbox. It is a separate step alongside the DNS records.

## When it does not work: the most common causes

Check these points first:

- **Typos** in the A, AAAA or CNAME record, or the dot at the end of the CNAME address is missing.
- **More than one A or AAAA record**, because an old record from the previous host stayed.
- **A proxy between the domain and Shopify**, for example the Cloudflare proxy. According to the help, third-party proxies are not supported.
- **Broken DNSSEC.** Then the domain does not count as fully connected even with correct records. Your domain provider resolves this.
- **CAA records**, if present: they must allow `letsencrypt.org`, `pki.goog` and `ssl.com`, otherwise no certificate is issued.
- **Domain expired or suspended** at the provider.

For Shopify Support, have the domain, the DNS records (as a screenshot) and the admin status ready.

## The domain during a store migration

When moving from another system, I would switch the domain **last**, after the new store has been checked. That way the old site stays reachable until then (a practical recommendation, not from the Shopify help). If the domain is already connected to another Shopify store, the help says you confirm ownership with a TXT record.

More on migrating: [Shopify migration and SEO: setting up redirects](/blog/shopify-migration-weiterleitungen), [Moving from WooCommerce to Shopify](/blog/woocommerce-to-shopify) and [Moving from Wix to Shopify](/blog/wix-zu-shopify-umzug).

## Examples from practice

I cannot show a dedicated domain case from my projects as proof. The process comes from the Shopify help, the recommendations on email and order of steps from store builds and migrations.

## How I handle it

In a build or migration we clarify in the briefing where the domain is, which services (email) are tied to it, and when it should point to the new store. I do not need your password at the domain provider: I name the records, you or your provider enter them, and I check that the store can be reached. In the Shopify admin I work through a collaborator account with limited rights, not with your owner login.

## Frequently asked questions

**Can I transfer my .de domain to Shopify?** No. According to the Shopify help, `.de` cannot be transferred. You connect the domain.

**Will my email break if I connect the domain?** Not necessarily, but it sits in the same DNS zone. Back up the existing records and change only A, AAAA and the `www` CNAME.

**What does connecting cost?** Shopify charges nothing extra for it. You keep paying for the domain itself at your provider.

**Can I put several domains on one store?** Yes, up to 20 in addition to the myshopify address.

**Do I have to change the myshopify address?** No. You can change it only once, and it redirects to your primary domain.

## Domain is set, but the store is not?

Send me your store address for the [free Shop-Check](#contact): I tell you what stands out from outside. How a new store including domain and email switch works with me is on [Have your Shopify store built](/services/shopify-shop-erstellen-lassen), and what the build costs overall is in [Having a Shopify store built: what the cost depends on](/blog/shopify-shop-erstellen-lassen-kosten).

**Further reading:** [Shopify email notifications](/blog/shopify-email-benachrichtigungen) · [Shopify migration and SEO](/blog/shopify-migration-weiterleitungen) · [Shopify Markets: selling in several countries](/blog/shopify-markets-mehrere-laender)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
