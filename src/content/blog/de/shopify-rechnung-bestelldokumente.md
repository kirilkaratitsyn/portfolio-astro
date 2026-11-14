---
publishedAt: 2026-10-23
title: "Shopify Rechnung erstellen: Bestelldokumente, Order Printer und Vorlagen"
date: 23. Oktober 2026
readingTime: 5 Min
excerpt: "Shopify Rechnung erstellen: was Bestellseite, Lieferschein, Dokumentvorlagen und Order Printer können und was Sie mit dem Steuerberater klären."
image: /og/projects/orska-rituals.jpg
topic: build
tags:
  - Shopify
  - Rechnung
  - Lieferschein
  - Bestellungen
---

Eine Shopify Rechnung erstellen Sie nicht über einen einzelnen Menüpunkt. Shopify bietet mehrere Wege, Bestelldokumente zu drucken. Sie unterscheiden sich darin, wie weit Sie sie anpassen können.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs und Funktionen ändern sich, prüfen Sie deshalb Ihren Admin. Dieser Text ist **keine Steuer- oder Rechtsberatung**. Welche Angaben eine Rechnung enthalten muss, wie Rechnungsnummern vergeben werden und wie lange Sie Belege aufbewahren, klären Sie mit Ihrem Steuerberater.

## Vier Wege, ein Dokument zu drucken

Die Hilfe beschreibt Bestelldokumente wie Rechnungen, Lieferscheine, Belege und Pick-Listen. Es gibt vier Wege: die Bestellseite, Lieferscheine, Dokumentvorlagen im Admin und die App „Shopify Order Printer“.

## Weg 1: Die Bestellseite drucken

Laut Hilfe drucken Sie eine Bestellung direkt aus dem Admin: **Orders**, Bestellung öffnen, **Print**, dann **Print order page**. Entwurfsbestellungen lassen sich nicht drucken.

Die Hilfe beschreibt das als Ausdruck für Ihre eigenen Unterlagen, samt Kommentaren aus dem Verlauf (Timeline). Für eigene Rechnungen und Lieferscheine verweist sie auf die Dokumentvorlagen.

## Weg 2: Lieferscheine

Ein Lieferschein listet die Artikel eines Pakets mit Liefer- und Rechnungsadresse, SKU, Menge und weiteren Produktdaten. Laut Hilfe drucken Sie ihn über **Print** > **Print packing slips**, einzeln auf der Bestellseite oder gesammelt auf der Seite Bestellungen. Jede Lieferung einer Bestellung bekommt einen eigenen Lieferschein. Bei mehreren Standorten wählen Sie den Standort, von dem versendet wird.

Den Lieferschein passen Sie mit Liquid an, der Vorlagensprache von Shopify. Mit etwas HTML und CSS fügen Sie Ihr Logo hinzu oder blenden Produktbilder aus. **Revert to default** stellt die Standardvorlage wieder her.

## Weg 3: Dokumentvorlagen im Admin (Early Access)

Dokumentvorlagen gibt es laut Hilfe auch direkt im Admin, ohne App. Der Bereich ist im **Early Access** und wird schrittweise ausgerollt. Ob er in Ihrem Shop verfügbar ist, sehen Sie nur im Admin.

- **Dokumenttypen:** Rechnung (Invoice), Lieferschein, Pick-Liste und eine leere Vorlage (Blank template) für eigene Dokumente.
- **Ort:** **Settings** > **Shipping and delivery**, Abschnitt **Documents**.
- **Anpassung:** Rechnung, Lieferschein und leere Vorlage gestalten Sie mit HTML, CSS und Liquid. Jede Vorlage darf bis zu 135.000 Zeichen lang sein. Die Pick-Liste stellen Sie über Optionen ein, nicht über Code.
- **Mehrere Vorlagen je Typ:** zum Beispiel ein Lieferschein für Großhandelsbestellungen und einer für Endkunden.
- **Vorschau:** **Preview** testet die Vorlage an einer echten Bestellung.
- **Drucken:** einzeln oder gesammelt, Rechnungen als Letter oder A4. Pro Seitengröße sind bis zu 1.500 Dokumente möglich.
- **Rechte:** Mitarbeiter brauchen zum Drucken die Berechtigung **Manage order information**.

## Weg 4: Die App Shopify Order Printer

Mit der App **Shopify Order Printer** aus dem Shopify App Store drucken Sie laut Hilfe Rechnungen, Lieferscheine und Pick-Listen aus dem Admin und aus Shopify POS. Die Vorlagen passen Sie mit HTML, CSS und Liquid an, zum Beispiel mit Logo und eigenen Bestelldetails.

- Die App druckt bis zu **50 Bestellungen auf einmal**. Für mehr empfiehlt die Hilfe einen CSV-Export der Bestellungen.
- Ein PDF erzeugen Sie im Druckdialog des Browsers mit „Als PDF speichern“.
- Die ältere App **Order Printer** (legacy) ist laut Hilfe veraltet und wird nicht mehr gepflegt. Wer sie nutzt, soll die Vorlagen übernehmen und zur neuen App wechseln.
- Bei kleineren Anpassungen hilft laut Hilfe der Shopify-Support im Rahmen der Design-Richtlinie. Aufwendigere Änderungen soll ein externer Designer oder Entwickler umsetzen.

## Was Shopify hier nicht erklärt

Die Hilfeseiten zum Drucken sagen **nichts** dazu,

- ob ein so erzeugtes Dokument den steuerlichen Anforderungen an eine Rechnung in Deutschland genügt,
- ob es eine automatische, fortlaufende Rechnungsnummer gibt,
- ob die Rechnung automatisch per E-Mail versendet wird.

Die Hilfe erwähnt nur die Bestellbestätigung, die Kunden nach der Bestellung per E-Mail erhalten. Das ist keine Rechnung. Klären Sie diese Punkte vorher mit Ihrem Steuerberater. Reichen die Standardwege nicht aus, kommen ein spezialisiertes Rechnungsprogramm oder eine App in Frage.

## Vor dem Einsatz: eine Checkliste

1. Wer stellt die Rechnung aus: Shopify-Vorlage, App oder externes Programm? Mit dem Steuerberater abgestimmt?
2. Sind Firmenname, Anschrift, E-Mail und Steuerangaben im Shop hinterlegt? (Siehe [Shopify-Richtlinien und Rechtstexte](/de/blog/shopify-rechtstexte-richtlinien).)
3. Vorschau an einer echten Bestellung geprüft, auch mit Rabatt, Versandkosten und mehreren Artikeln?
4. Mehrsprachiger Shop: Sind die Dokumente in der Sprache Ihrer Kunden lesbar?
5. Wer druckt? Berechtigungen der Mitarbeiter geprüft?
6. Lieferschein im Paket und Versandprozess abgestimmt? (Siehe [Versand einrichten](/de/blog/shopify-versand-einrichten).)
7. Alte Vorlagen vor einer Änderung kopiert?

## Wann ein Entwickler hilft

Für den ersten Ausdruck und kleine Textänderungen brauchen Sie keinen. Hilfe lohnt sich bei komplexeren Vorlagen:

- eigene Felder aus der Bestellung,
- Varianten für Großhandel und Endkunden (siehe [Shopify B2B](/de/blog/shopify-b2b-wholesale)),
- Layout für mehrseitige Rechnungen.

Wie Anpassungen wartbar bleiben, steht in [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization). Vorlagen und Apps gehören danach in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kann Shopify automatisch eine Rechnung an den Kunden schicken?** Die Hilfeseiten zum Drucken sagen dazu nichts. Das hängt von der gewählten Lösung ab.

**Kann ich Rechnungen als PDF speichern?** Ja, über die Druckfunktion des Browsers („Als PDF speichern“), laut Hilfe bei den Order-Printer-Apps.

**Reicht die gedruckte Bestellseite als Rechnung?** Laut Hilfe ist sie ein Ausdruck für Ihre eigenen Unterlagen. Für Kundenrechnungen verweist die Hilfe auf Dokumentvorlagen.

**Wie viele Rechnungen kann ich auf einmal drucken?** Mit Dokumentvorlagen bis zu 1.500 je Seitengröße, mit der App Shopify Order Printer bis zu 50 Bestellungen.

**Was kostet eine individuelle Rechnungsvorlage?** Das hängt von den Anforderungen ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich sichtbare Daten, ohne Zugang zu Ihrem Konto, und sage Ihnen, was auffällt. Steuerlich prüft das nichts. Was ich für Shops mache, finden Sie unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Steuern und MwSt. einrichten](/de/blog/shopify-steuern-mwst-einrichten) · [Shopify E-Mail-Benachrichtigungen anpassen](/de/blog/shopify-email-benachrichtigungen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
