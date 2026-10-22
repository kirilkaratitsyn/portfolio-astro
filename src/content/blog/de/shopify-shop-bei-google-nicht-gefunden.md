---
publishedAt: 2026-10-22
title: "Shopify-Shop wird bei Google nicht gefunden: 7 Ursachen und was Sie prüfen können"
date: 22. Oktober 2026
readingTime: 6 Min
excerpt: Ihr Shopify-Shop taucht bei Google nicht auf? Erst klären, ob er gar nicht im Index ist oder nur schlecht platziert. Dann sieben typische Ursachen und ein Zehn-Minuten-Check, den Sie ohne Entwickler machen können.
image: /og/projects/jula-bloom.jpg
tags:
  - Shopify
  - SEO
  - Google
---

Sie suchen Ihren Shop bei Google und finden ihn nicht, oder Ihre Produkte tauchen nirgends auf? Bevor Sie eine SEO-App kaufen oder eine Agentur beauftragen, lohnt ein ruhiger Blick auf die Ursache. Denn oft liegt es an einer Kleinigkeit, die sich in wenigen Minuten beheben lässt. Und manchmal ist es etwas ganz anderes, als Sie vermuten.

## Zuerst klären: nicht im Index oder nur schlecht platziert?

Das sind zwei verschiedene Probleme.

- **Nicht im Index:** Google hat die Seite nicht aufgenommen. Sie taucht für keine Suche auf, auch nicht für Ihren eigenen Shopnamen. Das ist meist ein technischer Grund und lässt sich beheben.
- **Im Index, aber weit hinten:** Google kennt die Seite, es gibt aber viele andere Seiten, die für die Suche besser passen. Das ist eine Frage von Inhalt, Wettbewerb und Zeit. Dafür gibt es keine schnelle Abkürzung, und niemand kann Ihnen eine Platzierung garantieren.

Der folgende Check zeigt Ihnen in zehn Minuten, in welcher Lage Sie sind.

## Der Zehn-Minuten-Check

1. **Geben Sie bei Google `site:ihre-domain.de` ein** (mit Ihrer Adresse). Google zeigt, welche Seiten Ihres Shops im Index sind. Null Treffer heißt: nichts ist aufgenommen. Einige Treffer, aber nicht Ihre Produkte, heißt: es fehlen bestimmte Seiten.
2. **Öffnen Sie Ihren Shop in einem privaten Fenster.** Sehen Sie eine Passwortseite statt Ihres Shops, ist die Ursache schon gefunden (siehe Ursache 1).
3. **Rufen Sie `ihre-domain.de/sitemap.xml` auf.** Shopify legt sie automatisch an. Sie sollte eine Liste mit Produkten, Kollektionen und Seiten zeigen.
4. **Prüfen Sie eine Produktseite in der Google Search Console** mit der URL-Prüfung. Sie sagt Ihnen, ob die Seite bei Google ist und, wenn nicht, warum.
5. **Suchen Sie im Quelltext einer Seite nach „noindex“.** In Ihrem Browser mit Strg+U (Mac: Cmd+Option+U) öffnen und nach dem Wort suchen. Steht es dort, sagt die Seite Google ausdrücklich, dass sie nicht aufgenommen werden soll.

## Die sieben typischen Ursachen

### 1. Der Shop ist noch passwortgeschützt

Neue Shopify-Shops sind zunächst mit einem Passwort geschützt, damit nicht jeder sie vor dem Start sieht. Solange der Schutz aktiv ist, sieht auch Google nur die Passwortseite. Sie finden die Einstellung im Shopify-Admin unter *Onlineshop → Einstellungen → Passwortschutz*. Bei einem fertigen Shop gehört er ausgeschaltet.

### 2. Produkte oder Kollektionen sind nicht veröffentlicht

Ein Produkt im Status „Entwurf“, oder eines, das nicht im Vertriebskanal „Onlineshop“ verfügbar ist, hat im Shop keine öffentliche Seite. Google kann nur aufnehmen, was ein Besucher auch sehen kann. Prüfen Sie im Produkt rechts unter „Vertriebskanäle“, ob der Onlineshop angehakt ist.

### 3. Google kennt Ihren Shop noch nicht

Ein neuer Shop muss erst entdeckt werden. Das dauert Tage bis Wochen. Sie helfen nach, wenn Sie Ihre Domain in der Google Search Console anlegen und die Sitemap (`/sitemap.xml`) einreichen. Eine Garantie, wann Google die Seiten aufnimmt, gibt es nicht.

### 4. Google kennt die Seiten, nimmt sie aber nicht auf

In der Search Console steht dann bei einzelnen Seiten „Gefunden – zurzeit nicht indexiert“ oder „Gecrawlt – zurzeit nicht indexiert“. Häufige Gründe: Die Seite hat kaum eigenen Inhalt, etwa weil der Produkttext vom Hersteller kopiert wurde und genauso auf vielen anderen Shops steht, oder Kollektionen ganz ohne Text. Hier helfen eigene, hilfreiche Texte mehr als jede Technik.

### 5. Eine App oder das Theme blockiert Google

Manche Themes und SEO-Apps haben Einstellungen, die Seiten auf „noindex“ setzen. Auch die `robots.txt` lässt sich in Shopify anpassen, und eine fehlerhafte Änderung kann Google aussperren. Zeigt der Quelltext „noindex“ auf Seiten, die auffindbar sein sollen, ist das einer der schnellsten Fehler, den ein Entwickler behebt.

### 6. Ein Umzug ohne Weiterleitungen

Wenn Sie von einem anderen System zu Shopify gewechselt sind und die Adressen sich geändert haben, verliert Google die alten Seiten. Ohne Weiterleitungen sind die Rankings der alten Adressen weg. Wie man das vermeidet, steht in [Von WooCommerce zu Shopify umziehen, ohne Rankings zu verlieren](/de/blog/woocommerce-to-shopify). Bei [Jula Bloom](/de/projects/jula-bloom) wurde die Weiterleitungs-Tabelle geschrieben, solange die alte Seite noch lief.

### 7. Der Shop ist technisch zu langsam oder auf dem Smartphone schwach

Google bewertet vor allem die Smartphone-Version. Ein sehr langsamer Shop wird schlechter bewertet und kommt schwerer in Fahrt. Ursachen und eine Anleitung zum Selbsttest finden Sie in [Shopify-Shop langsam? 7 Ursachen](/de/blog/slow-shopify-store).

## Was Sie danach tun können

- **Passwort, Veröffentlichung und noindex** zuerst prüfen. Das sind die schnellen Fälle.
- **Search Console einrichten** und die Sitemap einreichen, falls noch nicht geschehen.
- **Eigene Texte** für Ihre wichtigsten Kollektionen und Produkte schreiben, statt Herstellertexte zu übernehmen.
- **Titel und Beschreibung** der Seiten so formulieren, dass klar ist, was Besucher dort finden. Sie bearbeiten sie in Shopify unter „Vorschau der Suchmaschinenlisten“.
- **Geduld haben.** Ein neuer Shop braucht Wochen, bis die Lage klarer wird. Zu oft ändern hilft nicht.

## Häufige Fragen

**Wie lange dauert es, bis ein neuer Shop bei Google auftaucht?** Das lässt sich nicht verlässlich sagen: Tage bis mehrere Wochen. Die Sitemap in der Search Console einzureichen hilft, eine Garantie gibt es nicht.

**Kann ich Google zum Aufnehmen zwingen?** Nein. Sie können in der Search Console die Indexierung einer Seite anfordern, ob und wann Google sie aufnimmt, entscheidet Google.

**Brauche ich eine SEO-App?** Nicht unbedingt. Shopify bringt eine Sitemap, kanonische Adressen und bearbeitbare Titel und Beschreibungen mit. Eine App ersetzt keine eigenen, guten Inhalte, und jede zusätzliche App kann den Shop auch langsamer machen.

**Können Sie mir eine Platzierung bei Google garantieren?** Nein, und Vorsicht bei jedem, der das tut. Ich prüfe die technischen Ursachen und sage Ihnen, was sich beheben lässt.

## Sie wissen nicht, woran es liegt?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir die technischen Gründe an (Passwortschutz, Sitemap, noindex, Weiterleitungen, Ladezeit) und sage Ihnen ehrlich, was sich beheben lässt und was nicht in meiner Hand liegt. Bei einem Shop, der zu langsam ist, passt die [Beschleunigung](/de/services/shopify-speed), bei einem Umzug der [Umzug von WooCommerce](/de/services/woocommerce-to-shopify).

*Kiril Karatitsyn, Shopify-Entwickler in Deutschland*
