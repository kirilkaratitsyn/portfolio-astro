---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Shopify Checkout anpassen: was ohne Plus geht, was Apps leisten und wo Code nötig ist"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Shopify Checkout anpassen: was der Checkout-Editor kann, was vom Tarif abhängt, was Apps leisten und was aus checkout.liquid wurde."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Checkout
  - Checkout-Editor
  - Apps
---

Den Shopify Checkout anpassen können Sie, aber nicht alles und nicht in jedem Tarif. Die Kasse verantwortet Shopify am stärksten selbst, deshalb gelten dort eigene Regeln.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe und aus der Dokumentation für Entwickler (shopify.dev), Stand Oktober 2026. Menüs, Tarife und Fristen ändern sich, prüfen Sie deshalb Ihren Admin.

## Der Checkout-Editor: Ihre Schaltzentrale

Den Checkout passen Sie nicht im Theme-Editor an, sondern unter **Settings** > **Checkout**: im Bereich **Configurations** auf **Edit** bei der gewünschten Konfiguration. Der „Checkout and accounts editor“ deckt laut Hilfe diese Seiten ab:

- **Checkout** (beim Ein-Seiten-Checkout) bzw. **Information**, **Shipping** und **Payment** (beim Drei-Seiten-Checkout)
- **Review**, die optionale Bestätigungsseite, nur wenn die entsprechende Einstellung aktiv ist
- **Thank you** und **Order status**
- Seiten der Kundenkonten: **Orders**, **Profile**, **Sign-in**

Der Editor arbeitet laut Hilfe in einer **simulierten Umgebung**. Bestellungen lassen sich dort nicht aufgeben, Aktionen wie „Pay Now“ sind deaktiviert. Ob ein Ablauf mit einer echten Bestellung funktioniert, sehen Sie erst im Shop selbst.

## Was ohne Plus geht

Standard-Anpassungen gibt es laut Hilfe ab dem Basic-Tarif, erweiterte Funktionen nur mit Shopify Plus. Zum Stil des Checkouts nennt die Hilfe unter anderem:

- **Logo** hinzufügen, mit Breite und Ausrichtung links, mittig oder rechts
- **Farben** für Header, Hauptbereich, Bestellübersicht, Akzente und Buttons, dazu eine eigene **Farbpalette**
- **Schriftart** aus einer Auswahlliste
- **Bestellübersicht** mit Hintergrundfarbe oder -bild

Die Hilfe rät zu einem schlichten Design mit kontrastreichen Farben, weil Kunden an der Kasse Versand- und Zahlungsdaten eintragen.

**Eine Änderung seit Februar 2026:** Laut Hilfe lässt sich seit dem 5. Februar 2026 kein Hintergrundbild mehr im Header und im Hauptbereich des Checkouts einstellen. Ein bereits gesetztes Bild lässt sich nur noch entfernen und danach nicht wieder hinzufügen.

## Was nur mit Plus geht

Laut Hilfe gilt:

- **Checkout-Editor:** ab dem Basic-Tarif.
- **Apps für die Seiten Thank you und Order status:** ab Basic, soweit sie als geeignet gelistet sind.
- **Apps für die Seiten Information, Shipping und Payment:** **nur mit Shopify Plus**.
- **Checkout Branding API** für erweiterte Gestaltung per Code: **nur mit Plus**.
- **Eigene Apps mit Shopify Functions** (Custom Apps): **nur mit Plus**. Öffentliche Apps mit Functions gibt es auch ab Basic.
- **Checkout Blocks**, eine kostenlose App von Shopify für Anpassungen per UI-Extensions und Functions: ab Basic mit eingeschränktem Funktionsumfang, mit Plus ohne diese Einschränkungen.
- **Anpassungen für einzelne Märkte** (zum Beispiel ein Hinweis nur für einen Markt): nur ab dem Tarif Advanced oder Plus.

Eingriffe in Adresse, Versand und Zahlung bleiben also Plus vorbehalten, abgesehen vom eingeschränkten Umfang von Checkout Blocks.

## Ein oder drei Seiten

Standard ist laut Hilfe der **Ein-Seiten-Checkout**: Kontaktdaten, Versand und Zahlung erscheinen auf einer Seite. Den Drei-Seiten-Checkout wählen Sie in den Einstellungen des Editors. Beide erfassen laut Hilfe dieselben Informationen, und Ihre Anpassungen funktionieren nach einem Wechsel weiter. Zwei mögliche Folgen nennt die Hilfe:

- Der Header sieht anders aus. Ein Hintergrundbild kann falsch dargestellt werden und müsste durch eine Farbe ersetzt werden.
- Es kommen neue anpassbare Texte hinzu. Prüfen Sie sie, wenn Sie Texte oder Übersetzungen geändert haben.

Adressvorschläge im Checkout kommen laut Hilfe von einem Dienst wie Google Autocomplete und stehen auch Kunden in Deutschland, Österreich und der Schweiz zur Verfügung.

## Apps und Blöcke im Checkout

Funktionen wie ein Upsell in der Bestellübersicht kommen laut Hilfe über Apps in den Checkout. Sie installieren die App aus dem Shopify App Store und fügen sie im Editor als **Block** ein, über die Seitenleiste **Sections** oder **Apps**. Einige Blöcke lassen sich nur in bestimmten Bereichen platzieren. Pro hervorgehobenem Bereich nennt die Hilfe eine Obergrenze von **drei Apps**.

Im App Store können Sie nach Apps filtern, die den Checkout anpassen.

## checkout.liquid: das alte Verfahren ist abgelöst

Für `checkout.liquid` und „Additional scripts“ gilt laut shopify.dev:

- Für die Schritte Information, Shipping und Payment ist `checkout.liquid` nicht mehr unterstützt.
- Für die Seiten Thank you und Order status wurden `checkout.liquid` und Additional scripts am 28. August 2025 eingestellt.
- Script-Tags wurden dort am 28. August 2025 für Plus-Shops eingestellt, für Shops ohne Plus laut Seite am 26. August 2026. Dieses Datum liegt inzwischen zurück.

Shops, die dort noch `checkout.liquid` nutzen, müssen laut Dokumentation auf Shopify Extensions in Checkout umsteigen. shopify.dev empfiehlt dafür eine öffentliche App mit Extensions, eine eigene App oder einen Service-Partner. Planen Sie die Umstiege für Checkout, Danke-Seite und Bestellstatus-Seite möglichst zusammen, damit Sie nicht zwei Technik-Stände pflegen.

## Entwürfe und Tests, bevor es live geht

Der Checkout lässt sich in mehreren **Konfigurationen** speichern. Laut Hilfe können Shops auf Plus bis zu 99 Entwürfe anlegen, Shops auf Basic, Grow und Advanced bis zu 20. Aktiv ist immer nur eine Konfiguration. Ein veröffentlichter Entwurf ersetzt sie, und die bisherige wird zum Entwurf. Die Hilfe rät, die Konfiguration vor größeren Stiländerungen zu **duplizieren** und Entwürfe vor Aktionszeiten wie Black Friday zu testen.

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nicht, **welche Anpassung die Abschlussrate erhöht**, welche Checkout-App für Ihren Shop die richtige ist oder wie sich eine Änderung auf Ladezeit und Zahlungsabbrüche auswirkt. Welche Hinweise und Pflichtangaben an der Kasse rechtlich erforderlich sind, klären Sie mit Ihrem Rechtsberater (siehe auch [Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien)).

## Beispiele aus der Praxis

Für [Elanora Skin](/de/projects/elanora-skin), eine Skincare-Marke, die ich laufend betreue, baue ich eigene Checkout-Erweiterungen, die zum Design des Shops und zu seinen Märkten passen.

## Vor dem Start: eine Checkliste

1. Welchen **Tarif** haben Sie, und was ist darin möglich?
2. Nur das **Aussehen** (Logo, Farben, Schrift) oder auch die **Funktion** (Upsell, Zusatzfelder, Hinweise)?
3. **Ein-Seiten- oder Drei-Seiten-Checkout**? Folgen für Header und Texte geprüft?
4. **Öffentliche App** oder eigene Lösung?
5. Noch **checkout.liquid, Additional scripts oder Script-Tags** im Einsatz, vor allem auf Danke- und Bestellstatus-Seite? Dann steht der Umstieg an.
6. Änderung in einem **Entwurf** gebaut, mit einer Kopie der aktiven Konfiguration?
7. Mit einer **echten Testbestellung** geprüft, auf Desktop und Handy?
8. Mehrere Länder: Texte und Labels in jeder Sprache kontrolliert? (Siehe [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).)

## Wann ein Entwickler hilft

Logo, Farben und Schrift ändern Sie selbst im Editor. Hilfe lohnt sich, wenn:

- eine Funktion fehlt, die keine fertige App liefert
- Sie von `checkout.liquid` umsteigen müssen
- eigene Logik für Rabatte oder Versand nötig ist
- Kasse, Warenkorb und Angebote zusammenpassen sollen, wie bei [Gratisartikeln im Warenkorb](/de/blog/shopify-gratisartikel-warenkorb)

Mehr dazu: [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) und [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kann ich den Checkout ohne Plus anpassen?** Ja, in Grenzen. Logo, Farben, Schrift und Apps für Danke- und Bestellstatus-Seite gehen laut Hilfe ab Basic. Apps für Information, Shipping und Payment gibt es nur mit Plus.

**Kann ich ein Hintergrundbild im Checkout setzen?** Laut Hilfe nicht mehr: Seit dem 5. Februar 2026 lässt sich im Header und im Hauptbereich kein neues Hintergrundbild hinzufügen. Für die Bestellübersicht nennt die Hilfe weiterhin Hintergrundbild oder -farbe.

**Funktioniert mein altes checkout.liquid noch?** Für Information, Shipping und Payment ist es laut shopify.dev nicht mehr unterstützt. Für Danke- und Bestellstatus-Seite wurde es am 28. August 2025 eingestellt.

**Kann ich Änderungen testen, ohne den Live-Checkout zu verändern?** Ja, über Entwurfs-Konfigurationen. Eine echte Bestellung ersetzt der Editor nicht, weil er nur simuliert.

**Was kostet die Anpassung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich sichtbare Daten wie Ladezeit, Apps im Quelltext und Seitenstruktur, ohne Zugang zu Ihrem Konto. Was ich für Shops mache, finden Sie unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland) · [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten) · [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Rabattcode oder automatischer Rabatt](/de/blog/shopify-rabattcodes-automatische-rabatte) · [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Try before you buy](/de/blog/shopify-try-before-you-buy) · [Shopify-App entwickeln lassen](/de/blog/shopify-app-entwickeln-lassen) · [Shopify Plus: Was der Tarif freischaltet](/de/blog/shopify-plus-wann-lohnt)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
