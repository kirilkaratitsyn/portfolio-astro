---
publishedAt: 2026-10-23
title: "Shopify Versand einrichten: Versandzonen, Versandraten und Fehler, die Kunden an der Kasse stoppen"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Wie Versandzonen, Versandraten und Versandprofile bei Shopify zusammenspielen, welche Ratentypen es gibt und welche Lücken dazu führen, dass Kunden an der Kasse einen Versandfehler sehen."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Versand
  - Checkout
  - Versandprofile
---

„Warum sieht mein Kunde an der Kasse keine Versandart?“ Das ist eine der häufigeren Fragen nach dem Start, und die Ursache liegt fast immer in den Versandeinstellungen, nicht im Theme. Dieser Text erklärt, wie die Teile zusammenhängen: Zonen, Raten, Profile und Märkte. Er ist für Händler ohne technischen Hintergrund geschrieben.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Shopify stellt Versandprofile und Versandraten schrittweise auf „Versandoptionen je Markt“ um. Laut Hilfe behalten die meisten Shops ihre bisherige Einrichtung, bis sie umgestellt werden, und vorhandene Raten werden automatisch übernommen. Die Menüs in Ihrem Admin können deshalb von dem abweichen, was hier steht. Versandkosten nenne ich nicht, und Fragen zu Zoll, Steuern oder Pflichtangaben gehören zum Rechtsanwalt oder Steuerberater.

## Die Bausteine

- **Versandzone:** eine Gruppe von Ländern oder Regionen. Laut Hilfe kann ein Land innerhalb eines Versandprofils nur zu einer Zone gehören.
- **Versandrate:** was der Kunde an der Kasse in dieser Zone zahlt.
- **Versandprofil:** ein Regelsatz für bestimmte Produkte und Standorte. Das „Allgemeine Profil“ ist die Vorgabe und lässt sich nicht löschen; eigene Profile brauchen Sie, wenn einzelne Produkte anders versendet werden als der Rest.
- **Markt:** Kunden können laut Hilfe nur aus aktiven Märkten bestellen. Liegt ein Land in einer Zone, der Markt ist aber nicht aktiv, kann dort niemand bestellen. Mehr dazu in [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).

Die Einstellungen finden Sie im Admin unter Einstellungen > Versand und Lieferung.

## Die Ratentypen

1. **Pauschal:** ein fester Preis für jede Bestellung. Pauschalen gelten standardmäßig einmal pro Bestellung. Pro Produkt zu berechnen geht laut Hilfe nur über getrennte Raten oder eine App.
2. **Nach Bestellwert:** unterschiedliche Preise für Wertbereiche.
3. **Nach Gewicht:** unterschiedliche Preise für Gewichtsbereiche. Shopify addiert zum Produktgewicht das Standard-Verpackungsgewicht Ihres Shops.
4. **Vom Versanddienstleister oder von einer App berechnet:** der Preis kommt live vom Dienstleister. Sie können einen Aufschlag (Prozent oder Festbetrag) oder, mit negativem Wert, einen Rabatt eintragen.
5. **Kostenloser Versand:** lässt sich laut Hilfe bei jedem Ratentyp einstellen, etwa über einen Mindestbestellwert oder einen Preis von 0.

Welche Versanddienstleister Sie anbinden können, hängt von Land, Standort und Tarif ab; das prüfen Sie am besten in der Hilfe oder beim Support, bevor Sie darauf planen.

## Die häufigsten Stolperstellen

**1. Lücken zwischen den Bereichen.** Fällt eine Bestellung in keinen Bereich, gibt es laut Hilfe keine Rate, und der Kunde sieht einen Versandfehler. Die Empfehlung der Hilfe: Der niedrigste Bereich beginnt bei 0, beim höchsten bleibt das Maximum leer.

**2. Fehlende Produktgewichte.** Bei Gewichts- und berechneten Raten braucht jedes Produkt ein korrektes Gewicht, sonst stimmt der Preis an der Kasse nicht.

**3. Land in der Zone, Markt nicht aktiv.** Siehe oben: Ohne aktiven Markt keine Bestellung.

**4. Mehrere Profile in einem Warenkorb.** Enthält ein Warenkorb Produkte aus verschiedenen Profilen oder Standorten, werden die Raten laut Hilfe zu einer Rate zusammengefasst, was die Kosten für den Kunden erhöhen kann. Prüfen Sie das mit einem gemischten Warenkorb.

**5. Ein Produkt in zwei Profilen.** Ein Produkt oder eine Variante kann nur in einem Profil sein; wird sie einem zweiten zugewiesen, fällt sie aus dem ersten heraus.

**6. Feste Preise in Fremdwährung.** Pauschalraten werden bei aktiver lokaler Währung umgerechnet (laut Hilfe nur mit Shopify Payments). Wollen Sie für eine Region einen exakten Betrag, legen Sie dafür eine eigene Zone an.

**7. Kostenloser Versand nur für einzelne Produkte oder Kunden.** Für einzelne Produkte legen Sie ein eigenes Profil mit kostenloser Pauschale an, für bestimmte Kunden einen Rabattcode für kostenlosen Versand.

## So testen Sie

Die Kasse zeigt erst Versandoptionen, wenn eine Lieferadresse eingegeben ist, und nur die passenden, die günstigste ist vorausgewählt. Legen Sie deshalb Testbestellungen an, mit denen Sie jede Konstellation durchspielen:

- ein Produkt aus dem Allgemeinen Profil, Lieferadresse in Deutschland;
- ein Produkt mit eigenem Profil;
- ein gemischter Warenkorb;
- eine Adresse in einem Land, das Sie bewusst nicht beliefern, das sollte eine klare Meldung zeigen;
- ein Warenkorb knapp unter und knapp über der Grenze für kostenlosen Versand.

Prüfen Sie das auch auf dem Smartphone. Wie Sie danach die Zahlung klären, steht in [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland). Was in das Paket gehört, etwa der Lieferschein, beschreibt [Shopify Rechnung erstellen: Bestelldokumente, Order Printer und Vorlagen](/de/blog/shopify-rechnung-bestelldokumente).

## Wann ein Entwickler hilft

Für Zonen und Raten brauchen Sie in der Regel keinen. Hilfe lohnt sich bei vielen Profilen, bei Lieferzeiten- und Versandart-Logik, die die Standardeinstellungen nicht abbilden, oder wenn ein Umzug von einem anderen System ansteht ([WooCommerce zu Shopify](/de/blog/woocommerce-to-shopify)). Wer wofür zuständig ist, erklärt [Shopify Hilfe: Wann das Help Center reicht](/de/blog/shopify-help). Der Text der Versandrichtlinie entsteht aus denselben Einstellungen, siehe [Shopify Rechtstexte und Richtlinien: wo Sie Rückgabe, AGB, Versand und Kontaktangaben pflegen](/de/blog/shopify-rechtstexte-richtlinien).

## Häufige Fragen

**Kann ich kostenlosen Versand ab einem Bestellwert anbieten?** Ja, laut Shopify-Hilfe bei jedem Ratentyp. Soll es stattdessen ein Geschenk ab Bestellwert sein, lesen Sie [Gratisartikel ab Bestellwert in Shopify](/de/blog/shopify-gratisartikel-warenkorb).

**Warum sieht ein Kunde keine Versandart?** Häufige Gründe sind ein nicht aktiver Markt, eine Lücke in den Bereichen oder fehlende Gewichte. Mit einer Testbestellung finden Sie es schnell.

**Was kostet der Versand?** Das hängt von Ihren Vereinbarungen mit dem Dienstleister ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und die Struktur der Seiten, und sage Ihnen, was auffällt. Dabei arbeite ich nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Was ich für Shops mache, finden Sie unter [Leistungen](/de/services) und bei [Shop-Umbau und Redesign](/de/services/shopify-redesign).

**Weiterlesen:** [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
