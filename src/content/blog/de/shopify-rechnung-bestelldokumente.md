---
publishedAt: 2026-10-23
title: "Shopify Rechnung erstellen: Bestelldokumente, Order Printer und Vorlagen"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Wie Sie in Shopify Rechnungen und Lieferscheine drucken, was die Bestellseite, Dokumentvorlagen und die App Order Printer können, wo die Grenzen liegen und was vor dem Einsatz mit Steuerberater zu klären ist."
image: /og/projects/orska-rituals.jpg
topic: build
tags:
  - Shopify
  - Rechnung
  - Lieferschein
  - Bestellungen
---

„Wie bekomme ich bei Shopify eine Rechnung für meine Bestellungen?“ Die Frage kommt häufig, sobald die ersten Aufträge eingehen, und die Antwort ist nicht ein einzelner Menüpunkt. Shopify bietet mehrere Wege an, Bestelldokumente zu drucken, und sie unterscheiden sich darin, wie weit Sie sie anpassen können. Dieser Text zeigt die Wege, die Shopify selbst dokumentiert, ohne technischen Hintergrund vorauszusetzen.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs und Funktionen ändern sich, prüfen Sie deshalb Ihren Admin. Dieser Text ist **keine Steuer- oder Rechtsberatung**. Welche Angaben eine Rechnung in Ihrem Fall enthalten muss, wie Rechnungsnummern vergeben werden und wie lange Sie Belege aufbewahren, klären Sie mit Ihrem Steuerberater. Hier geht es allein darum, was Shopify technisch anbietet. Preise für Apps oder Entwicklung nenne ich nicht.

## Vier Wege, ein Dokument zu drucken

Die Hilfe beschreibt Bestelldokumente wie Rechnungen, Lieferscheine, Belege und Pick-Listen. Daraus ergeben sich vier Wege:

1. **Bestellseite drucken:** der einfachste Weg, ohne App.
2. **Lieferscheine drucken:** einzeln oder gesammelt aus der Bestellliste.
3. **Dokumentvorlagen im Admin:** eigene Vorlagen für Rechnung, Lieferschein und Pick-Liste.
4. **App „Shopify Order Printer“:** Rechnungen und Lieferscheine mit eigenen Vorlagen.

## Weg 1: Die Bestellseite drucken

Laut Hilfe können Sie eine Bestellung direkt aus dem Admin ausdrucken: **Orders**, Bestellung öffnen, **Print** und dann **Print order page**. Die gedruckte Seite enthält auch die Kommentare aus dem Verlauf (Timeline) der Bestellung. Entwurfsbestellungen lassen sich nicht drucken.

Die Hilfe beschreibt diesen Weg als Ausdruck für Ihre eigenen Unterlagen. Für eigene Rechnungen, Lieferscheine oder andere Dokumente verweist sie ausdrücklich auf die Dokumentvorlagen. Als Rechnung für Kunden ist die Bestellseite also nicht gedacht, schon weil auf ihr auch die Verlaufskommentare stehen.

## Weg 2: Lieferscheine

Ein Lieferschein listet die Artikel in einem Paket zusammen mit Liefer- und Rechnungsadresse, SKU, Menge und weiteren Produktdaten. Laut Hilfe drucken Sie ihn über **Print** > **Print packing slips**, einzeln auf der Bestellseite oder gesammelt auf der Seite Bestellungen. Bei mehreren Lieferungen zu einer Bestellung gibt es je Lieferung einen eigenen Lieferschein. Haben Sie mehrere Standorte, wählen Sie den Standort, von dem versendet wird.

Der Lieferschein lässt sich über Liquid anpassen, die Vorlagensprache von Shopify. Mit etwas HTML und CSS fügen Sie zum Beispiel Ihr Logo hinzu oder blenden Produktbilder aus. Über **Revert to default** kehren Sie zur Standardvorlage zurück.

## Weg 3: Dokumentvorlagen im Admin (Early Access)

Die Hilfe beschreibt außerdem Dokumentvorlagen direkt im Admin, ohne App. Wichtig: Dieser Bereich ist laut Hilfe im **Early Access** und wird schrittweise ausgerollt. Ob er in Ihrem Shop schon verfügbar ist, sehen Sie nur im Admin.

Was die Hilfe nennt:

- **Dokumenttypen:** Rechnung (Invoice), Lieferschein, Pick-Liste und eine leere Vorlage (Blank template) für eigene Dokumente.
- **Ort:** **Settings** > **Shipping and delivery**, Abschnitt **Documents**.
- **Anpassung:** Rechnung, Lieferschein und leere Vorlage lassen sich mit HTML, CSS und Liquid gestalten. Jede Vorlage darf bis zu 135.000 Zeichen lang sein. Die Pick-Liste wird über Optionen eingestellt, nicht über Code.
- **Mehrere Vorlagen je Typ:** Sie können zum Beispiel einen Lieferschein für Großhandelsbestellungen und einen für Endkunden anlegen.
- **Vorschau:** Mit **Preview** testen Sie die Vorlage an einer echten Bestellung, bevor Sie speichern.
- **Drucken:** einzeln oder gesammelt. Rechnungen gibt es als Letter oder A4. Pro Seitengröße sind bis zu 1.500 Dokumente möglich.
- **Rechte:** Mitarbeiter brauchen die Berechtigung **Manage order information**, um Dokumente zu drucken.

Die Standardrechnung ist laut Hilfe ein Ausgangspunkt, in den Sie etwa Ihr Logo einbauen oder Formulierungen ändern.

## Weg 4: Die App Shopify Order Printer

Die Hilfe nennt zusätzlich die App **Shopify Order Printer** aus dem Shopify App Store. Damit drucken Sie Rechnungen, Lieferscheine und Pick-Listen aus dem Admin und aus Shopify POS. Die Vorlagen lassen sich mit HTML, CSS und Liquid anpassen, zum Beispiel mit Logo und eigenen Bestelldetails.

Einzelheiten aus der Hilfe:

- Mit der App drucken Sie bis zu **50 Bestellungen auf einmal**. Für mehr empfiehlt die Hilfe einen CSV-Export der Bestellungen.
- Dokumente werden über die Druckfunktion des Browsers erzeugt. Als PDF speichern Sie sie, indem Sie im Druckdialog „Als PDF speichern“ wählen.
- Die ältere App **Order Printer** (legacy) ist laut Hilfe veraltet und wird nicht mehr gepflegt. Wer sie nutzt, soll die Vorlagen übernehmen und zur neuen App wechseln.
- Für kleinere Anpassungen hilft laut Hilfe der Shopify-Support im Rahmen der Design-Richtlinie. Aufwendigere Änderungen sollen von einem externen Designer oder Entwickler umgesetzt werden.

## Was Shopify hier nicht erklärt

Die Hilfeseiten zum Drucken sagen **nichts** darüber, ob ein so erzeugtes Dokument den steuerlichen Anforderungen an eine Rechnung in Deutschland genügt. Sie sagen auch nichts über eine automatische, fortlaufende Rechnungsnummer oder über den automatischen Versand der Rechnung per E-Mail. Die Hilfe erwähnt lediglich, dass Kunden nach der Bestellung eine Bestellbestätigung per E-Mail erhalten. Das ist ein eigenes Dokument, das nicht mit einer Rechnung gleichzusetzen ist. Diese Punkte klären Sie vorher mit Ihrem Steuerberater. Reichen die Standardwege nicht aus, kommen ein spezialisiertes Rechnungsprogramm oder eine App in Frage. Was davon zu Ihrem Ablauf passt, hängt von Ihren Anforderungen ab, und die Hilfe trifft dazu keine Aussage.

## Vor dem Einsatz: eine Checkliste

1. Wer stellt die Rechnung aus: Shopify-Vorlage, App oder ein externes Programm? Mit dem Steuerberater abgestimmt?
2. Sind Firmenname, Anschrift, E-Mail und Steuerangaben im Shop hinterlegt, damit die Vorlage sie ausgeben kann? (Siehe auch [Shopify-Richtlinien und Rechtstexte](/de/blog/shopify-rechtstexte-richtlinien).)
3. Vorschau an einer echten Bestellung geprüft, auch mit Rabatt, Versandkosten und mehreren Artikeln?
4. Mehrsprachiger Shop: sind die Dokumente in der Sprache Ihrer Kunden lesbar?
5. Wer druckt und darf das? Berechtigungen der Mitarbeiter geprüft?
6. Lieferschein im Paket und Versandprozess aufeinander abgestimmt? (Siehe [Versand einrichten](/de/blog/shopify-versand-einrichten).)
7. Alte Vorlagen vor einer Änderung kopiert?

## Wann ein Entwickler hilft

Für den ersten Ausdruck und kleine Textänderungen brauchen Sie keinen. Hilfe lohnt sich, wenn die Vorlage komplexer sein soll, etwa mit eigenen Feldern aus der Bestellung, mit Varianten für Großhandel und Endkunden (siehe [Shopify B2B](/de/blog/shopify-b2b-wholesale)) oder mit sauberem Layout für mehrseitige Rechnungen. Wie Anpassungen sauber und wartbar bleiben, steht in [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization). Vorlagen und Apps gehören danach in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kann Shopify automatisch eine Rechnung an den Kunden schicken?** Die Hilfeseiten zum Drucken sagen dazu nichts. Kunden erhalten laut Hilfe eine Bestellbestätigung per E-Mail; ob und wie eine Rechnung automatisch versendet wird, hängt von der gewählten Lösung ab.

**Kann ich Rechnungen als PDF speichern?** Ja, über die Druckfunktion des Browsers („Als PDF speichern“), laut Hilfe bei den Order-Printer-Apps.

**Reicht die gedruckte Bestellseite als Rechnung?** Laut Hilfe ist sie ein Ausdruck für Ihre eigenen Unterlagen und enthält die Verlaufskommentare. Für Kundenrechnungen verweist die Hilfe auf Dokumentvorlagen.

**Wie viele Rechnungen kann ich auf einmal drucken?** Mit Dokumentvorlagen bis zu 1.500 je Seitengröße, mit der App Shopify Order Printer bis zu 50 Bestellungen.

**Was kostet eine individuelle Rechnungsvorlage?** Das hängt von den Anforderungen ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und die Struktur der Seiten, und sage Ihnen, was auffällt. Dabei arbeite ich nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Steuerlich prüft das nichts. Was ich für Shops mache, finden Sie unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Steuern und MwSt. einrichten](/de/blog/shopify-steuern-mwst-einrichten) · [Shopify E-Mail-Benachrichtigungen anpassen](/de/blog/shopify-email-benachrichtigungen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
