---
publishedAt: 2026-10-22
title: "Shopify-Shop wird bei Google nicht gefunden: 7 Ursachen und was Sie prüfen können"
date: 22. Oktober 2026
readingTime: 4 Min
excerpt: "Ihr Shopify-Shop wird bei Google nicht gefunden? Sieben typische Ursachen und ein Zehn-Minuten-Check, den Sie ohne Entwickler machen können."
image: /og/projects/nimfa.jpg
topic: speed
tags:
  - Shopify
  - SEO
  - Google
---

Ihr Shopify-Shop wird bei Google nicht gefunden, oder Ihre Produkte tauchen nirgends auf? Prüfen Sie die Ursache, bevor Sie eine SEO-App kaufen oder eine Agentur beauftragen. Oft ist es eine Kleinigkeit, die sich in wenigen Minuten beheben lässt.

## Zuerst klären: nicht im Index oder nur schlecht platziert?

Das sind zwei verschiedene Probleme.

- **Nicht im Index:** Google hat die Seite nicht aufgenommen. Sie taucht für keine Suche auf, auch nicht für Ihren Shopnamen. Der Grund ist meist technisch und lässt sich beheben.
- **Im Index, aber weit hinten:** Google kennt die Seite, andere Seiten passen aber besser zur Suche. Das ist eine Frage von Inhalt, Wettbewerb und Zeit. Eine Platzierung kann Ihnen niemand garantieren.

## Der Zehn-Minuten-Check

1. **Geben Sie bei Google `site:ihre-domain.de` ein** (mit Ihrer Adresse). Null Treffer heißt: nichts ist im Index. Treffer ohne Ihre Produkte heißt: bestimmte Seiten fehlen.
2. **Öffnen Sie Ihren Shop in einem privaten Fenster.** Sehen Sie eine Passwortseite, ist die Ursache gefunden (siehe Ursache 1).
3. **Rufen Sie `ihre-domain.de/sitemap.xml` auf.** Shopify legt sie automatisch an. Sie sollte Produkte, Kollektionen und Seiten auflisten.
4. **Prüfen Sie eine Produktseite in der Google Search Console** mit der URL-Prüfung. Sie zeigt, ob die Seite bei Google ist und, wenn nicht, warum.
5. **Suchen Sie im Quelltext einer Seite nach „noindex“.** Öffnen Sie ihn mit Strg+U (Mac: Cmd+Option+U). Steht das Wort dort, soll Google die Seite nicht aufnehmen.

## Die sieben typischen Ursachen

### 1. Der Shop ist noch passwortgeschützt

Neue Shopify-Shops sind zunächst mit einem Passwort geschützt. Solange der Schutz aktiv ist, sieht Google nur die Passwortseite. Sie schalten ihn im Shopify-Admin unter *Onlineshop → Einstellungen → Passwortschutz* aus.

### 2. Produkte oder Kollektionen sind nicht veröffentlicht

Ein Produkt im Status „Entwurf“ oder außerhalb des Vertriebskanals „Onlineshop“ hat keine öffentliche Seite. Google nimmt nur auf, was ein Besucher sehen kann. Prüfen Sie im Produkt rechts unter „Vertriebskanäle“, ob der Onlineshop angehakt ist.

### 3. Google kennt Ihren Shop noch nicht

Ein neuer Shop muss erst entdeckt werden. Das dauert Tage bis Wochen. Legen Sie Ihre Domain in der Google Search Console an und reichen Sie die Sitemap (`/sitemap.xml`) ein.

### 4. Google kennt die Seiten, nimmt sie aber nicht auf

In der Search Console steht dann „Gefunden – zurzeit nicht indexiert“ oder „Gecrawlt – zurzeit nicht indexiert“. Häufiger Grund: Die Seite hat kaum eigenen Inhalt. Der Produkttext ist vom Hersteller kopiert und steht auf vielen anderen Shops, oder die Kollektion hat gar keinen Text. Hier helfen eigene Texte mehr als Technik.

### 5. Eine App oder das Theme blockiert Google

Manche Themes und SEO-Apps setzen Seiten auf „noindex“. Auch eine fehlerhafte Änderung der `robots.txt` kann Google aussperren. Ein „noindex“ auf Seiten, die auffindbar sein sollen, behebt ein Entwickler schnell.

### 6. Ein Umzug ohne Weiterleitungen

Haben sich beim Wechsel zu Shopify die Adressen geändert, verliert Google die alten Seiten. Ohne Weiterleitungen sind deren Rankings weg. Wie Sie das vermeiden, steht in [Von WooCommerce zu Shopify umziehen, ohne Rankings zu verlieren](/de/blog/woocommerce-to-shopify). Bei [Jula Bloom](/de/projects/jula-bloom) wurde die Weiterleitungs-Tabelle geschrieben, solange die alte Seite noch lief. Ist der Umzug schon passiert, hilft [Shopify-Umzug und SEO: Weiterleitungen einrichten, Rankings schützen](/de/blog/shopify-migration-weiterleitungen) beim nachträglichen Weiterleiten.

### 7. Der Shop ist technisch zu langsam oder auf dem Smartphone schwach

Google bewertet vor allem die Smartphone-Version. Ein sehr langsamer Shop wird schlechter bewertet. Ursachen und einen Selbsttest finden Sie in [Shopify-Shop langsam? 7 Ursachen](/de/blog/slow-shopify-store).

## Was Sie danach tun können

- **Passwort, Veröffentlichung und noindex** zuerst prüfen.
- **Titel und Beschreibung** so formulieren, dass klar ist, was Besucher finden. Sie bearbeiten sie in Shopify unter „Vorschau der Suchmaschinenlisten“.
- **Geduld haben.** Ein neuer Shop braucht Wochen. Zu oft ändern hilft nicht.

## Häufige Fragen

**Wie lange dauert es, bis ein neuer Shop bei Google auftaucht?** Tage bis mehrere Wochen. Die Sitemap einzureichen hilft, eine Garantie gibt es nicht.

**Kann ich Google zum Aufnehmen zwingen?** Nein. Sie können in der Search Console die Indexierung anfordern. Ob und wann Google die Seite aufnimmt, entscheidet Google.

**Brauche ich eine SEO-App?** Nicht unbedingt. Shopify bringt eine Sitemap, kanonische Adressen und bearbeitbare Titel und Beschreibungen mit. Eine App ersetzt keine eigenen Inhalte und kann den Shop langsamer machen.

**Können Sie mir eine Platzierung bei Google garantieren?** Nein, und Vorsicht bei jedem, der das tut. Ich prüfe die technischen Ursachen und sage Ihnen, was sich beheben lässt.

## Sie wissen nicht, woran es liegt?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe Passwortschutz, Sitemap, noindex, Weiterleitungen und Ladezeit und sage Ihnen, was sich beheben lässt. Ist der Shop zu langsam, passt die [Beschleunigung](/de/services/shopify-speed), bei einem Umzug der [Umzug von WooCommerce](/de/services/woocommerce-to-shopify). Für den Verkauf in mehrere Länder: [Shopify Markets: In mehrere Länder verkaufen](/de/blog/shopify-markets-mehrere-laender).

**Weiterlesen:** [Shopify-Shop optimieren lassen](/de/blog/shopify-shop-optimieren-lassen) · [Von Wix zu Shopify wechseln](/de/blog/wix-zu-shopify-umzug) · [Shopify SEO optimieren lassen](/de/blog/shopify-seo-optimieren-lassen) · [Shopify mit Google Shopping verbinden](/de/blog/shopify-google-shopping-merchant-center)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
