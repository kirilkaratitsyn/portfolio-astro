---
publishedAt: 2026-10-22
title: "Shopify Markets: In mehrere Länder verkaufen, ohne mehrere Shops zu betreiben"
date: 22. Oktober 2026
readingTime: 6 Min
excerpt: "Shopify Markets: ein Shop für mehrere Länder. Währungen, Sprachen, URL-Struktur, hreflang und Zölle. Und was Sie vorher klären sollten."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Markets
  - International
  - SEO
---

Ihr Shop verkauft in Deutschland, und es kommen Bestellungen aus Österreich oder der Schweiz. Brauchen Sie dafür einen zweiten Shop? Meist nicht. Mit **Shopify Markets** verkaufen Sie aus einem Shop in mehrere Länder. Jeder Markt hat eine eigene Währung, Sprache und Adresse.

## Vorab eine Einordnung

Alle Angaben zu Funktionen und Bedingungen stammen aus der Shopify-Hilfe, Stand Oktober 2026. Shopify ändert Pläne und Funktionen, prüfen Sie wichtige Punkte deshalb in Ihrem Konto. Preise für Pläne nenne ich nicht.

Aus eigener Arbeit: Seit Ende 2025 betreue ich eine Hautpflegemarke, die in mehreren Märkten und zwei Sprachen verkauft ([Elanora Skin](/de/projects/elanora-skin)), mit Arbeit am Theme und eigenen Checkout-Erweiterungen. Den Aufbau der Märkte selbst, also Domains, Währungen und Steuern, stelle ich nicht als eigenen Fall dar.

## Was ein Market ist

Ein Market legt fest, wie Kunden Ihren Shop je nach Standort erleben. Pro Market können Sie laut Shopify-Hilfe unter anderem einstellen:

- die **Währung**,
- welche **Produkte** verfügbar sind,
- Inhalte im Theme,
- **Domain** und **Sprache**,
- **Steuern** und Versandoptionen, wo verfügbar.

Es gibt Märkte für Länder oder Regionen, für Ladengeschäfte, für B2B-Kunden und für Verkaufskanäle. Mischen sich mehrere Typen, gewinnt der speziellere. Die Zahl der Länder-Märkte ist nicht begrenzt. Rabatte und Geschenkkarten funktionieren über Märkte hinweg.

Für Kunden, die zu keinem aktiven Markt passen, gibt es eine „Rückfall-Region“. Bestellen können laut Hilfe aber nur Kunden aus Ländern eines aktiven Marktes. Märkte lassen sich nur für Länder aktivieren, für die Sie Versandraten angelegt haben.

## Was Sie vorher klären sollten

Laut Shopify-Hilfe gilt:

- **Zahlung in mehreren Währungen** braucht Shopify Payments oder Adyen. Ohne eines von beiden zahlen alle Märkte in der Hauptwährung des Shops.
- **Rabatte mit festem Betrag** lassen sich nur in der Hauptwährung anlegen und werden an der Kasse umgerechnet.
- **Apps für Angebote nach dem Kauf** funktionieren nur in der Hauptwährung. In Märkten mit anderer Währung erscheinen diese Angebote nicht.
- **Mitarbeiterrechte** lassen sich nicht pro Markt vergeben.
- **Ein Theme:** Es ist immer nur ein Theme veröffentlicht. Anpassungen pro Markt gelten für dieses Theme.
- **Pläne:** Märkte für Regionen sind in allen Plänen kostenlos. Währungen, Domains, Sprachen und Steuern pro Markt gibt es in allen Plänen, Theme-Anpassungen pro Markt laut Hilfe erst ab „Advanced“.

Meine Empfehlung: Prüfen Sie diese Liste, bevor Sie ein Land hinzufügen. Sonst merken Sie erst nach dem Start, dass Ihr Zahlungsanbieter keine zweite Währung kann, und bauen zweimal.

## Preise und Währungen

Shopify rechnet Ihre Preise standardmäßig zum aktuellen Marktkurs um. Sie können den Kurs auch von Hand festlegen. Pro Land oder Region lassen sich in Katalogen Preisaufschläge oder feste Preise hinterlegen.

- Preise lassen sich pro Markt **runden**, damit sie nach der Umrechnung nicht auf krumme Beträge enden. Die Rundung gibt es laut Hilfe nur mit Shopify Payments.
- Damit Kunden die lokale Währung sehen, braucht der Shop einen **Länderwähler**. Die volle Funktion setzt laut Hilfe Shopify Payments mit der einseitigen Kasse voraus.

## Sprache und Adresse: Welche URL-Struktur?

Diese Entscheidung ist später am schwersten zu ändern. Shopify nennt vier Wege:

- **Nur die Hauptdomain.** Einfach, aber keine Länder-Adressen und kein Vorteil für die Suche.
- **Länder-Domains** (etwa `.at` oder `.ch`). Das stärkste lokale Signal, aber jede Domain muss separat registriert und verwaltet werden.
- **Subdomains** (etwa `at.ihr-shop.de`). Brauchen eigene DNS-Einträge und bauen Autorität laut Hilfe eventuell langsamer auf.
- **Unterordner** (etwa `ihr-shop.de/de-at`). Shopify empfiehlt sie für die meisten Shops: Sie teilen die Autorität der Hauptdomain bei geringem Aufwand.

Dazu gilt:

- Reine Sprach-Ordner wie `/en` sind nur für den Hauptmarkt möglich. Weitere Märkte brauchen Sprache und Land nach dem Muster `/fr-ca`, für Österreich etwa `/de-at`.
- Eine eigene Domain statt `myshopify.com` ist Voraussetzung.
- Wechselt die Hauptdomain, ändern sich die Adressen der Unterordner.

## Google: hreflang, kanonische Adressen, Sitemap

Für Märkte mit eigener Domain, Subdomain oder eigenem Unterordner erzeugt Shopify laut Hilfe automatisch:

- **hreflang-Angaben**, die Google sagen, welche Sprachversion für welches Land gedacht ist, mit einem `x-default` für die Hauptdomain,
- **kanonische Adressen**,
- eine **Sitemap** mit allen marktspezifischen Adressen.

Ihre Aufgaben: Märkte einrichten, Inhalte mit der App **Translate & Adapt** übersetzen (Shopify unterscheidet Übersetzen und Anpassen) und die Sitemap in der Search Console einreichen. Schalten Sie die automatischen hreflang-Angaben nicht ab, außer Sie pflegen eigene. Shopify warnt, dass das der Sichtbarkeit in der Suche schaden kann.

Löschen Sie einen Markt, führen seine Unterordner-Adressen ohne Weiterleitung zu 404-Fehlern. Die Weiterleitungen lassen sich per CSV importieren, siehe [Weiterleitungen bei der Shopify-Migration](/de/blog/shopify-migration-weiterleitungen). Ist Ihr Shop schon jetzt in Google schwer zu finden, lösen Sie das vor der Erweiterung: [Shopify-Shop bei Google nicht gefunden](/de/blog/shopify-shop-bei-google-nicht-gefunden).

## Weiterleitung nach Land

Shopify leitet Kunden laut Hilfe automatisch auf die Adresse weiter, die zu Sprache und Standort passt. Suchmaschinen-Crawler sind davon ausgenommen. Innerhalb der EU leitet Shopify laut Hilfe nicht automatisch um. Die frühere App „Geolocation“ kann seit 1. Februar 2025 nicht mehr installiert werden. Einen Markt verlinken Sie direkt nach dem Muster `ihr-shop.de?country=DE`.

## Zölle und Einfuhrabgaben

Außerhalb der EU, etwa in der Schweiz, können bei Lieferung Zölle und Einfuhrabgaben anfallen. Shopify kann sie schon an der Kasse als Schätzung erheben. Die Beträge bestimmt der Zoll anhand von Einreihung, Herkunft und Zielland. Für die Berechnung braucht Shopify laut Hilfe HS-Codes zu Ihren Produkten. Welche Länder, Kassen-Anpassungen und Bestellarten unterstützt werden, steht in der Shopify-Hilfe zu Zöllen.

Steuerliche Fragen, etwa zur Umsatzsteuer im EU-Ausland, klären Sie bitte mit Ihrer Steuerberatung.

## Meine Empfehlung zur Reihenfolge

Das ist eine Einschätzung aus der Praxis, keine Vorgabe von Shopify:

1. **Ein Land zusätzlich**, nicht fünf auf einmal. So sehen Sie, wo es hakt.
2. **Zahlung und Versand zuerst klären**, dann Preise.
3. **Unterordner als URL-Struktur**, solange nichts für eine Länder-Domain spricht.
4. **Inhalte anpassen**, nicht nur übersetzen: Lieferzeiten, Rückgabe, Kontakt und Hinweise im Warenkorb.
5. **Nach dem Start** in der Search Console prüfen, ob die neuen Adressen indexiert werden.

Zum Versand je Land: [Shopify Versand einrichten](/de/blog/shopify-versand-einrichten).

## Häufige Fragen

**Brauche ich für Österreich oder die Schweiz einen eigenen Shop?** Nein, in der Regel reicht ein Shop mit mehreren Märkten.

**Muss ich alles übersetzen?** Für Käufer aus Österreich genügt Deutsch. Weitere Sprachen übersetzen Sie mit Translate & Adapt oder einer Übersetzungs-App. Auch Cookie-Banner und Datenschutzerklärung gehören in jede Shop-Sprache: [Shopify Cookie-Banner und Datenschutzerklärung](/de/blog/shopify-cookie-banner-datenschutz).

**Kann ich pro Land andere Preise setzen?** Ja, über Kataloge mit Aufschlag oder festen Preisen.

**Was kostet das?** Regionale Märkte sind laut Shopify in allen Plänen kostenlos. Die Kosten für Zahlung, Apps und Übersetzung hängen von Ihren Entscheidungen ab.

## Mehr Länder geplant?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich sichtbare Daten, ohne Zugang zu Ihrem Konto, etwa wie Ihre Adressen aufgebaut sind und was Google bereits kennt.

Mehr dazu: [Leistungen](/de/services) · [Shopify-Shop erstellen lassen: Was Sie vorher wissen sollten](/de/blog/shopify-shop-erstellen-lassen-kosten) · [Shopify-Freelancer oder Agentur](/de/blog/shopify-freelancer-oder-agentur)

**Weiterlesen:** [Shopify B2B: Händlerpreise und Quick Order](/de/blog/shopify-b2b-wholesale) · [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland) · [Gratisartikel ab Bestellwert in Shopify](/de/blog/shopify-gratisartikel-warenkorb) · [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Shopify Rechnung erstellen: Bestelldokumente](/de/blog/shopify-rechnung-bestelldokumente) · [Shopify Rabattcode oder automatischer Rabatt](/de/blog/shopify-rabattcodes-automatische-rabatte) · [Shopify Geschenkkarten einrichten](/de/blog/shopify-geschenkkarten-gutscheine) · [Shopify Steuern und MwSt. einrichten](/de/blog/shopify-steuern-mwst-einrichten) · [Shopify mehrsprachig: Shop übersetzen](/de/blog/shopify-mehrsprachig-uebersetzen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
