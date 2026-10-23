---
publishedAt: 2026-10-22
title: "Shopify Markets: In mehrere Länder verkaufen, ohne mehrere Shops zu betreiben"
date: 22. Oktober 2026
readingTime: 8 Min
excerpt: "Wie Shopify Markets einen Shop für mehrere Länder aufstellt: Währungen, Sprachen, Adressen mit Länderkürzel, Google und hreflang, Zölle. Und welche Voraussetzungen Sie vorher klären sollten."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Markets
  - International
  - SEO
---

Ihr Shop verkauft in Deutschland gut, und plötzlich kommen Bestellungen aus Österreich oder der Schweiz. Oder Sie wollen gezielt in weitere Länder verkaufen. Dann stellt sich die Frage, ob Sie dafür einen zweiten Shop brauchen. Meist nicht. Shopify hat dafür die Funktion **Markets**: ein Shop, mehrere Märkte, jeder mit eigener Währung, Sprache und Adresse.

Dieser Text erklärt für Händler ohne technischen Hintergrund, was ein Market ist, welche Voraussetzungen Sie vorher klären sollten und worauf es bei Google ankommt.

## Vorab eine Einordnung

Alle Angaben zu Funktionen und Bedingungen stammen aus der Shopify-Hilfe, Stand Oktober 2026. Shopify ändert Pläne und Funktionen immer wieder, prüfen Sie wichtige Punkte deshalb vor einer Entscheidung noch einmal in Ihrem Konto. Preise für Pläne nenne ich hier bewusst nicht.

Was ich aus eigener Arbeit beisteuere, ist begrenzt: Ich arbeite seit Ende 2025 mit einer Marke zusammen, die in fünfzehn Märkten und zwei Sprachen verkauft ([Elanora Skin](/de/projects/elanora-skin)). Dort ging es um Angebote, Geschenk-Logik im Warenkorb und Rabatt-Hinweise, die zu Markt und Sprache passen. Den Aufbau der Märkte selbst, also Domains, Währungen und Steuern, stelle ich nicht als eigenen Fall dar. Wo ich im Text eine Empfehlung gebe, steht es dabei.

## Was ein Market ist

Ein Market legt fest, wie Kundinnen und Kunden Ihren Shop erleben, abhängig davon, wo sie sich befinden. Pro Market können Sie laut Shopify-Hilfe unter anderem einstellen:

- die **Währung**,
- welche **Produkte** verfügbar sind,
- Inhalte im Theme,
- **Domain** und **Sprache**,
- **Steuern** und Versandoptionen, wo verfügbar.

Es gibt Märkte für einzelne Länder oder Regionen, außerdem für Ladengeschäfte, für B2B-Kunden und für Verkaufskanäle. Mischen sich mehrere Typen, gewinnt der speziellere. Die Zahl der Länder-Märkte ist nicht begrenzt. Rabatte und Geschenkkarten funktionieren über Märkte hinweg.

Für Kunden, die zu keinem aktiven Markt passen, gibt es eine „Rückfall-Region“. Bestellen können laut Hilfe aber nur Kunden aus Ländern eines aktiven Marktes, und Märkte lassen sich nur für Länder aktivieren, für die Sie Versandraten angelegt haben.

## Was Sie vorher klären sollten

Hier entstehen die meisten Überraschungen. Laut Shopify-Hilfe gilt:

- **Zahlung in mehreren Währungen** braucht Shopify Payments oder Adyen. Ohne eines von beiden zahlen alle Märkte in der Hauptwährung des Shops.
- **Rabatte mit festem Betrag** lassen sich nur in der Hauptwährung anlegen und werden an der Kasse umgerechnet.
- **Apps für Angebote nach dem Kauf** funktionieren nur in der Hauptwährung. Wer in einem Markt mit anderer Währung bestellt, bekommt solche Angebote nicht.
- **Mitarbeiterrechte** lassen sich nicht pro Markt vergeben.
- **Ein Theme:** Es ist immer nur ein Theme veröffentlicht. Anpassungen pro Markt gelten für dieses eine Theme.
- **Pläne:** Märkte für Regionen anzulegen ist in allen Plänen kostenlos. Theme-Anpassungen pro Markt gibt es laut Hilfe erst ab „Advanced“. Währungen, Domains, Sprachen und Steuern pro Markt stehen in allen Plänen zur Verfügung.

Meine Empfehlung: Prüfen Sie diese Liste, bevor Sie ein Land hinzufügen. Wer erst nach dem Start merkt, dass sein Zahlungsanbieter keine zweite Währung kann, baut zweimal.

## Preise und Währungen

Standardmäßig rechnet Shopify Ihre Preise automatisch zum aktuellen Marktkurs um. Sie können den Kurs auch von Hand festlegen, und pro Land oder Region lassen sich Preisaufschläge oder feste Preise in Katalogen hinterlegen. Das ist nützlich, wenn der Preis in einem Land nicht einfach „umgerechnet“, sondern bewusst anders gesetzt werden soll.

Zwei Details aus der Hilfe:

- Preise lassen sich pro Markt **runden**, damit sie nach der Umrechnung nicht auf krumme Beträge enden. Die Rundung gibt es laut Hilfe nur mit Shopify Payments.
- Damit Kunden die lokale Währung überhaupt sehen, braucht der Shop einen **Länderwähler**. Die volle Funktion setzt laut Hilfe Shopify Payments mit der einseitigen Kasse voraus.

## Sprache und Adresse: Welche URL-Struktur?

Das ist die Entscheidung, die später am schwersten zu ändern ist. Shopify nennt vier Wege:

- **Nur die Hauptdomain.** Einfach, aber keine Länder-Adressen und kein Vorteil für die Suche.
- **Länder-Domains** (etwa `.at` oder `.ch`). Das stärkste lokale Signal, aber jede Domain muss separat registriert und verwaltet werden. Sinnvoll nur mit klarer Strategie.
- **Subdomains** (etwa `at.ihr-shop.de`). Brauchen eigene DNS-Einträge und bauen Autorität laut Hilfe eventuell langsamer auf.
- **Unterordner** (etwa `ihr-shop.de/de-at`). Shopify empfiehlt sie für die meisten Shops: Sie teilen die Autorität der Hauptdomain, und der Aufwand ist gering.

Gut zu wissen: Reine Sprach-Ordner wie `/en` sind nur für den Hauptmarkt möglich. Für weitere Märkte braucht der Ordner Sprache und Land, nach dem Muster `/fr-ca`. Für Österreich wäre das entsprechend etwa `/de-at`. Eigene Domain statt `myshopify.com` ist Voraussetzung. Und: Wechselt die Hauptdomain, ändern sich die Adressen der Unterordner.

## Google: hreflang, kanonische Adressen, Sitemap

Hier nimmt Shopify Ihnen laut Hilfe viel Arbeit ab. Für Märkte mit eigener Domain, Subdomain oder eigenem Unterordner erzeugt Shopify automatisch:

- **hreflang-Angaben**, die Google sagen, welche Sprachversion für welches Land gedacht ist, mit einem `x-default` für die Hauptdomain,
- **kanonische Adressen**,
- eine **Sitemap** mit allen marktspezifischen Adressen.

Ihre Aufgaben bleiben: Märkte richtig einrichten, Inhalte mit der App **Translate & Adapt** übersetzen (Shopify unterscheidet Übersetzen und Anpassen), die Sitemap in der Search Console einreichen. Schalten Sie die automatischen hreflang-Angaben nicht ab, außer Sie pflegen eigene. Shopify warnt, dass das der Sichtbarkeit in der Suche schaden kann.

Wenn Sie einen Markt später löschen, führen seine Unterordner-Adressen ohne Weiterleitung zu 404-Fehlern. Die Weiterleitungen lassen sich per CSV importieren. Wie so ein Plan aussieht, beschreibe ich in [Weiterleitungen bei der Shopify-Migration](/de/blog/shopify-migration-weiterleitungen). Und wenn Ihr Shop schon jetzt in Google schwer zu finden ist, lösen Sie das vor der Erweiterung: [Shopify-Shop bei Google nicht gefunden](/de/blog/shopify-shop-bei-google-nicht-gefunden).

## Weiterleitung nach Land

Shopify leitet Kundinnen und Kunden laut Hilfe automatisch auf die Adresse weiter, die zu Sprache und Standort passt. Suchmaschinen-Crawler sind davon ausgenommen. Innerhalb der EU leitet Shopify laut Hilfe nicht automatisch um. Die frühere App „Geolocation“ kann seit 1. Februar 2025 nicht mehr installiert werden. Wollen Sie einen Markt direkt verlinken, funktioniert eine Adresse nach dem Muster `ihr-shop.de?country=DE`.

## Zölle und Einfuhrabgaben

Verkaufen Sie in Länder außerhalb der EU, etwa in die Schweiz, können bei Lieferung Zölle und Einfuhrabgaben anfallen. Shopify bietet Einstellungen, diese schon an der Kasse als Schätzung zu erheben, damit niemand an der Haustür überrascht wird. Welche Beträge anfallen, bestimmt der Zoll anhand von Einreihung, Herkunft und Zielland. Für die Berechnung braucht Shopify laut Hilfe HS-Codes zu Ihren Produkten. Welche Länder, Kassen-Anpassungen und Bestellarten unterstützt werden, steht in der Shopify-Hilfe zu Zöllen. Steuerliche Fragen, etwa zu Umsatzsteuer im EU-Ausland, klären Sie bitte mit Ihrer Steuerberatung. Dazu gebe ich hier keine Auskunft.

## Meine Empfehlung zur Reihenfolge

Das ist eine Einschätzung aus der Praxis, keine Vorgabe von Shopify:

1. **Ein Land zusätzlich**, nicht fünf auf einmal. So sehen Sie, wo es hakt.
2. **Zahlung und Versand zuerst klären**, dann Preise.
3. **Unterordner als URL-Struktur**, solange nichts Konkretes für eine Länder-Domain spricht.
4. **Inhalte wirklich anpassen**, nicht nur übersetzen: Lieferzeiten, Rückgabe, Kontakt und Hinweise im Warenkorb.
5. **Nach dem Start** in der Search Console prüfen, ob die neuen Adressen indexiert werden.

Versand je Land ist ein eigenes Thema: [Shopify Versand einrichten](/de/blog/shopify-versand-einrichten).

## Häufige Fragen

**Brauche ich für Österreich oder die Schweiz einen eigenen Shop?** Nein, in der Regel reicht ein Shop mit mehreren Märkten.

**Muss ich alles übersetzen?** Für Käufer aus Österreich genügt Deutsch, die Texte können Sie aber an lokale Gepflogenheiten anpassen. Für weitere Sprachen übersetzen Sie mit Translate & Adapt oder einer Übersetzungs-App. Auch Cookie-Banner und Datenschutzerklärung gehören in jede Shop-Sprache, wie das geht, beschreibt [Shopify Cookie-Banner und Datenschutzerklärung](/de/blog/shopify-cookie-banner-datenschutz).

**Kann ich pro Land andere Preise setzen?** Ja, über Kataloge mit Aufschlag oder festen Preisen. Welche Funktionen Ihr Plan enthält, prüfen Sie in der Shopify-Hilfe.

**Was kostet das?** Regionale Märkte sind laut Shopify in allen Plänen kostenlos. Was Zahlung, Apps und Übersetzung kosten, hängt von Ihren Entscheidungen ab. Konkrete Beträge nenne ich hier nicht.

## Mehr Länder geplant?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa wie Ihre Adressen aufgebaut sind und was Google bereits kennt. Dabei arbeite ich nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Was ich für Shops mache, finden Sie unter [Leistungen](/de/services). Wie ich ein Projekt grundsätzlich angehe, steht in [Shopify-Shop erstellen lassen: Was Sie vorher wissen sollten](/de/blog/shopify-shop-erstellen-lassen-kosten). Wenn Sie zwischen Freelancer und Agentur abwägen, hilft [Shopify-Freelancer oder Agentur](/de/blog/shopify-freelancer-oder-agentur).

**Weiterlesen:** [Shopify B2B: Händlerpreise und Quick Order](/de/blog/shopify-b2b-wholesale) · [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland) · [Gratisartikel ab Bestellwert in Shopify](/de/blog/shopify-gratisartikel-warenkorb) · [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
