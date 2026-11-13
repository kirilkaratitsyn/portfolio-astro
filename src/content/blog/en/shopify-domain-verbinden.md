---
publishedAt: 2026-11-13
title: "Connecting a domain to Shopify: set up your own address without breaking email or the store"
seoTitle: "Connect a domain to Shopify: steps, DNS and common errors"
date: 13 November 2026
readingTime: 7 min
excerpt: "Connect, transfer or buy new: which route fits your domain, which DNS records Shopify needs, what to watch for with .de domains and email, and what usually goes wrong when the address does not work."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Domain
  - Setup
---

Your store starts out under an address like `your-shop.myshopify.com`. For customers, Google and business cards you want your own domain there, for example `www.your-shop.com`. It is not a big job, but it has pitfalls: one wrong line at your domain provider and the store cannot be reached at that address. This article explains the three routes, the DNS records, the special points about .de domains and email, and the most common reasons it does not work. The source is the Shopify Help Center, as of November 2026.

## Three routes to your own domain

According to the Shopify Help Center there are three options:

1. **Buy a domain through Shopify.** The simplest: you manage everything in the Shopify admin.
2. **Connect an existing domain.** The domain stays with your current provider; you change DNS records there so they point to Shopify. Management, payment and renewal stay with the provider.
3. **Transfer an existing domain to Shopify.** Management moves to Shopify; settings, billing and renewal are in the admin.

For most shops that already own a domain, **connecting** is the right start. Shopify itself says that if you are unsure, start by connecting: you can still transfer later.

## Connect or transfer: the comparison

**Connect:**

- DNS settings, payment and renewal stay with your current provider.
- Shopify Support only helps with problems connecting the store.
- Time: minutes to 48 hours. No additional cost from Shopify. Works with all domain extensions.

**Transfer:**

- DNS settings, payment and renewal are in the Shopify admin, and support covers the domain fully.
- Time: up to 20 days. A one-year renewal fee applies. Not every extension can be transferred.

**Connecting fits if** you want to keep the domain with the provider, other services (such as email) are tied to it, the extension cannot be transferred, or the domain was registered or transferred within the last 60 days.

**This matters for .de:** Shopify explicitly lists extensions such as `.at`, `.co.uk`, `.de`, `.jp` and `.kr` as **not eligible for transfer**. A .de domain is therefore connected.

**Transferring fits if** you want everything in one place and want Shopify's support for the domain. If the domain is already in use, a transfer can cause downtime, so Shopify advises **connecting it first**.

## The DNS records Shopify needs

For a manual connection you change three records in your domain provider's account (area "DNS" or "domain management"). Shopify's help gives these values:

- **A record** (host `@`): `23.227.38.65`
- **AAAA record** (host `@`): `2620:0127:f00f:5::`. If your provider rejects the short notation, use the expanded one: `2620:0127:f00f:0005:0000:0000:0000:0000`.
- **CNAME record** for `www`: `shops.myshopify.com.` (with the dot at the end)

A few rules often decide whether it works:

- There may be **only one A record and only one AAAA record**. Delete old ones. With several, browsers pick one at random and part of your visitors land somewhere else.
- There may be only **one `www` CNAME**. Further CNAMEs need their own names, such as `shop`.
- Leave the **TTL** at the default.
- After connecting, Shopify may show an A address with a different ending, such as `23.227.38.32`. According to the help this is valid and not an error.

Then in the Shopify admin go to **Settings > Domains > Connect existing domain**, enter the domain **without** `www` and confirm. For some providers (Shopify names GoDaddy, IONOS, Cloudflare, Namecheap, Wix and Squarespace, among others) there is a dedicated guide, and in some cases the connection runs automatically. Always check your values against the current Shopify help: the numbers above apply to November 2026.

Important: **Shopify Support cannot log in to your domain provider account**, not even with your permission. For questions about the settings there, only the provider can help.

## How long it takes

After the change, DNS needs time. For connecting, Shopify usually names up to two hours and in some cases **up to 48 hours**. During that time the domain may show errors now and then, and the admin shows a "TLS pending" status. Shopify creates the certificate (https) automatically and for free once the records are right.

Do not keep changing records during the wait: according to the help this can reset the waiting time. You can see whether the records have arrived with free tools such as whatsmydns.net or dnschecker.org.

## Set the primary domain

Your store can have several domains (up to 20 in addition to the myshopify address), but **one** of them is the **primary** one. It is the address shown in the browser bar. According to the help, all other domains redirect to it, including the `myshopify.com` address. Requirement: the new domain has the status **Connected** in the admin, which can take up to 48 hours.

In practice: decide beforehand whether your main address should appear with or without `www`, and set only that one as primary. This avoids two versions of the same page.

## Do not forget email

Shopify does **not offer a mailbox**. If email addresses are already tied to your domain, they run with another service. Before you change DNS records there:

- **Write down all existing records**, at least the MX and TXT records (this recommendation is mine, not from the Shopify help). A screenshot of the DNS page lets you undo any change.
- **Leave your provider's nameservers as they are** unless you have set up something else. The help warns that custom or external nameservers can cause **connection and email problems** if they are not set up correctly. If another provider (such as Cloudflare) already hosts your DNS records, you do not need to switch back.
- If you **buy or transfer** a domain at Shopify, Shopify offers free **forwarding addresses**. If you later attach a real mailbox (Zoho, Google Workspace), the forwarding is affected according to the help as soon as MX records are added.

The sender address from which Shopify sends your order emails is set separately in the admin. More in [Shopify email notifications](/blog/shopify-email-benachrichtigungen).

## .de domain: mind the verification

With EU extensions such as `.de`, `.eu`, `.nl` or `.it`, the registrar may require an **identity check** (according to Shopify the background is the NIS2 regulation). If your domain shows an "Action Required" badge in the admin, look in your email inbox: there is a verification request. This verification is a separate step alongside the DNS records.

## When it does not work: the most common causes

The Shopify help has a long troubleshooting guide. In practice, check these first:

- **Typos** in the A, AAAA or CNAME record, or the dot at the end of the CNAME address is missing.
- **More than one A or AAAA record**, because an old record from the previous host stayed.
- **A proxy between the domain and Shopify**, for example the Cloudflare proxy. The help says third-party proxies are not supported and can cause disruptions.
- **Broken DNSSEC.** Then the domain does not count as fully connected even if all records are right. Your domain provider resolves this.
- **CAA records**, if present: they must allow `letsencrypt.org`, `pki.goog` and `ssl.com`, otherwise the certificate cannot be issued.
- **Domain expired or suspended** at the provider.
- **Looked too early**: wait out the 48 hours before changing more.

Before you contact Shopify Support, gather the domain, the current DNS records (as a screenshot) and the status from the admin. It saves follow-up questions.

## The domain during a store migration

If you are moving to Shopify from another system, I would switch the domain **last**, after the new store has been checked, so the old site stays reachable until then (a practical recommendation, not from the Shopify help). If the domain is already connected to another Shopify store, the help says you have to confirm ownership with a TXT record before it moves to the new store. What matters for search engines during a migration is in [Shopify migration and SEO: setting up redirects](/blog/shopify-migration-weiterleitungen); the process for a specific system is described in [Moving from WooCommerce to Shopify](/blog/woocommerce-to-shopify) and [Moving from Wix to Shopify](/blog/wix-zu-shopify-umzug).

## Examples from practice

None of my projects is a dedicated domain case that I could show you here as proof. The process above comes from the Shopify help; the recommendations on email and order of steps come from experience with store builds and migrations. What I concretely do is in the next section.

## How I handle it

If you hire me to build or move your store, we clarify the domain in the briefing: where it is, which services (email) are tied to it, and when the address should point to the new store. I do not need your password at the domain provider for that: I tell you exactly which records to change, you or your provider enter them, and afterwards I check that the store can be reached at the address. In the Shopify admin I work through a collaborator account with limited rights, not with your owner login.

## Frequently asked questions

**Can I transfer my .de domain to Shopify?** According to the Shopify help, `.de` is one of the extensions that cannot be transferred. You connect it instead.

**Will my email break if I connect the domain?** Not necessarily, but it sits in the same DNS zone. Back up the existing records first and change only A, AAAA and the `www` CNAME.

**What does connecting cost?** Shopify charges nothing extra for it. You keep paying for the domain itself at your provider.

**Can I put several domains on one store?** Yes, up to 20 in addition to the myshopify address. One is primary, the others redirect to it.

**Do I have to change the myshopify address?** No. You can change it only once, and it redirects to your primary domain.

## Domain is set, but the store is not?

Send me your store address for the [free Shop-Check](#contact): I look at what is visible from outside and tell you what stands out. If a new store including domain and email switch is on the plan, the page [Have your Shopify store built](/services/shopify-shop-erstellen-lassen) shows how that works with me. What the build costs overall is explained in [Having a Shopify store built: what the cost depends on](/blog/shopify-shop-erstellen-lassen-kosten).

**Further reading:** [Shopify email notifications](/blog/shopify-email-benachrichtigungen) · [Shopify migration and SEO](/blog/shopify-migration-weiterleitungen) · [Shopify Markets: selling in several countries](/blog/shopify-markets-mehrere-laender)

*[Kiril Karatitsyn](/about), Shopify developer in Germany*
