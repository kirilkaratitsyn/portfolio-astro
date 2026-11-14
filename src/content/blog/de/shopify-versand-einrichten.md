---
publishedAt: 2026-10-23
title: "Shopify Versand einrichten: Versandzonen, Versandraten und Fehler, die Kunden an der Kasse stoppen"
date: 23. Oktober 2026
readingTime: 4 Min
excerpt: "Shopify Versand einrichten: wie Versandzonen, Versandraten und Versandprofile zusammenspielen und welche Lücken an der Kasse einen Versandfehler auslösen."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Versand
  - Checkout
  - Versandprofile
---

„Warum sieht mein Kunde an der Kasse keine Versandart?“ Die Ursache liegt fast immer in den Versandeinstellungen, nicht im Theme. Wenn Sie den Shopify Versand einrichten, greifen vier Teile ineinander: Zonen, Raten, Profile und Märkte.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Shopify stellt Versandprofile und Versandraten schrittweise auf „Versandoptionen je Markt“ um. Laut Hilfe behalten die meisten Shops ihre Einrichtung bis zur Umstellung, vorhandene Raten werden automatisch übernommen. Die Menüs in Ihrem Admin können deshalb abweichen. Fragen zu Zoll, Steuern oder Pflichtangaben gehören zum Rechtsanwalt oder Steuerberater.

## Die Bausteine

- **Versandzone:** eine Gruppe von Ländern oder Regionen. Laut Hilfe kann ein Land innerhalb eines Versandprofils nur zu einer Zone gehören.
- **Versandrate:** was der Kunde an der Kasse in dieser Zone zahlt.
- **Versandprofil:** ein Regelsatz für bestimmte Produkte und Standorte. Das „Allgemeine Profil“ ist die Vorgabe und lässt sich nicht löschen. Eigene Profile brauchen Sie, wenn einzelne Produkte anders versendet werden.
- **Markt:** Kunden können laut Hilfe nur aus aktiven Märkten bestellen. Liegt ein Land in einer Zone, der Markt ist aber nicht aktiv, kann dort niemand bestellen. Mehr dazu in [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).

Im Admin: Einstellungen > Versand und Lieferung.

## Die Ratentypen

1. **Pauschal:** ein fester Preis, standardmäßig einmal pro Bestellung. Pro Produkt zu berechnen geht laut Hilfe nur über getrennte Raten oder eine App.
2. **Nach Bestellwert:** unterschiedliche Preise für Wertbereiche.
3. **Nach Gewicht:** unterschiedliche Preise für Gewichtsbereiche. Shopify addiert zum Produktgewicht das Standard-Verpackungsgewicht Ihres Shops.
4. **Vom Versanddienstleister oder von einer App berechnet:** der Preis kommt live vom Dienstleister. Sie können einen Aufschlag (Prozent oder Festbetrag) oder, mit negativem Wert, einen Rabatt eintragen.
5. **Kostenloser Versand:** lässt sich laut Hilfe bei jedem Ratentyp einstellen, etwa über einen Mindestbestellwert oder einen Preis von 0.

Welche Versanddienstleister Sie anbinden können, hängt von Land, Standort und Tarif ab. Prüfen Sie das vorab in der Hilfe oder beim Support.

## Die häufigsten Stolperstellen

**1. Lücken zwischen den Bereichen.** Fällt eine Bestellung in keinen Bereich, gibt es laut Hilfe keine Rate, und der Kunde sieht einen Versandfehler. Die Hilfe empfiehlt: Der niedrigste Bereich beginnt bei 0, beim höchsten bleibt das Maximum leer.

**2. Fehlende Produktgewichte.** Gewichts- und berechnete Raten brauchen bei jedem Produkt ein korrektes Gewicht, sonst stimmt der Preis an der Kasse nicht.

**3. Mehrere Profile in einem Warenkorb.** Bei Produkten aus verschiedenen Profilen oder Standorten werden die Raten laut Hilfe zu einer Rate zusammengefasst. Das kann die Kosten für den Kunden erhöhen.

**4. Ein Produkt in zwei Profilen.** Ein Produkt oder eine Variante kann nur in einem Profil sein. Weisen Sie sie einem zweiten zu, fällt sie aus dem ersten heraus.

**5. Feste Preise in Fremdwährung.** Pauschalraten werden bei aktiver lokaler Währung umgerechnet (laut Hilfe nur mit Shopify Payments). Für einen exakten Betrag in einer Region legen Sie eine eigene Zone an.

**6. Kostenloser Versand nur für einzelne Produkte oder Kunden.** Für einzelne Produkte legen Sie ein eigenes Profil mit kostenloser Pauschale an, für bestimmte Kunden einen Rabattcode für kostenlosen Versand.

## So testen Sie

Die Kasse zeigt Versandoptionen erst nach Eingabe einer Lieferadresse, und nur die passenden. Die günstigste ist vorausgewählt. Legen Sie Testbestellungen an:

- Produkt aus dem Allgemeinen Profil, Lieferadresse in Deutschland;
- Produkt mit eigenem Profil;
- gemischter Warenkorb;
- Adresse in einem Land, das Sie bewusst nicht beliefern: Es sollte eine klare Meldung erscheinen;
- Warenkorb knapp unter und knapp über der Grenze für kostenlosen Versand.

Prüfen Sie das auch auf dem Smartphone. Weiter geht es mit [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland) und dem Lieferschein in [Shopify Rechnung erstellen](/de/blog/shopify-rechnung-bestelldokumente).

## Wann ein Entwickler hilft

Für Zonen und Raten brauchen Sie in der Regel keinen. Hilfe lohnt sich bei vielen Profilen, bei Lieferzeiten- und Versandart-Logik, die die Standardeinstellungen nicht abbilden, oder bei einem Umzug von einem anderen System ([WooCommerce zu Shopify](/de/blog/woocommerce-to-shopify)).

Wer wofür zuständig ist, erklärt [Shopify Hilfe](/de/blog/shopify-help). Der Text der Versandrichtlinie entsteht aus denselben Einstellungen, siehe [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Häufige Fragen

**Kann ich kostenlosen Versand ab einem Bestellwert anbieten?** Ja, laut Shopify-Hilfe bei jedem Ratentyp. Für ein Geschenk ab Bestellwert lesen Sie [Gratisartikel ab Bestellwert in Shopify](/de/blog/shopify-gratisartikel-warenkorb).

**Warum sieht ein Kunde keine Versandart?** Häufige Gründe sind ein nicht aktiver Markt, eine Lücke in den Bereichen oder fehlende Gewichte. Eine Testbestellung zeigt es.

**Was kostet der Versand?** Das hängt von Ihren Vereinbarungen mit dem Dienstleister ab. Beträge nenne ich nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich Sichtbares, etwa Ladezeit, Apps im Quelltext und Seitenstruktur, und sage Ihnen, was auffällt. Was ich für Shops mache, steht unter [Leistungen](/de/services) und [Shop-Umbau und Redesign](/de/services/shopify-redesign).

**Weiterlesen:** [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Shopify Steuern und MwSt. einrichten](/de/blog/shopify-steuern-mwst-einrichten) · [Shopify E-Mail-Benachrichtigungen anpassen](/de/blog/shopify-email-benachrichtigungen) · [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
