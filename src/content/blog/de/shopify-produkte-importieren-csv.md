---
publishedAt: 2026-10-23
title: "Shopify Produkte per CSV importieren: was vorher zu beachten ist und wo es schiefgeht"
date: 23. Oktober 2026
readingTime: 6 Min
excerpt: "Shopify Produkte per CSV importieren: wie der Import abläuft, was Überschreiben bedeutet, welche Fehler häufig sind und warum Sie vorher sichern."
image: /og/projects/reserve-kava.jpg
topic: migration
tags:
  - Shopify
  - Produktimport
  - CSV
  - Migration
---

Wer bei Shopify Produkte per CSV importieren will, braucht eine Tabelle, in der jede Zeile ein Produkt oder eine Variante beschreibt. Das brauchen Sie etwa beim Wechsel von einem anderen System oder wenn Sie hunderte Preise auf einmal ändern. Der Import dauert wenige Klicks, die Arbeit steckt in der Vorbereitung. Manche Fehler lassen sich danach nicht rückgängig machen.

Grundlage sind die Hilfeseiten von Shopify zu Import und Export von Produkten (Stand Oktober 2026).

## Wofür der CSV-Import gedacht ist

Laut Shopify-Hilfe eignet sich der Import, wenn Sie von einer anderen Plattform zu Shopify wechseln oder viele Änderungen an Produkten oder Beständen auf einmal vornehmen wollen. Für kleinere Änderungen nennt die Hilfe den Massen-Editor im Admin als einfachsten Weg, mehrere Produkte oder Varianten gleichzeitig zu bearbeiten.

## Die wichtigste Regel: erst sichern

- Ein Import per CSV lässt sich laut Shopify-Hilfe nach dem Start **nicht abbrechen**, und es gibt keinen Verlauf früherer Importe. Was ein Import geändert hat, sehen Sie im Aktivitätsprotokoll des Shops.
- Shopify rät, vor dem Import eine **Sicherung der Produktdaten** anzulegen.

Dafür exportieren Sie Ihre Produkte als CSV (unter Produkte, Schaltfläche Export). Die Datei ist zugleich Ihre Vorlage, denn sie zeigt, wie Shopify die Spalten benennt. Je nach Umfang kommt sie per E-Mail statt als Download.

## Was in die Datei gehört

Laut Hilfe gilt:

- Neue Produkte: Nur die Spalte **Title** ist zwingend.
- Produkte mit Varianten: zusätzlich die Spalte **URL handle**, also die Kennung, die auch in der Produktadresse steht.
- Bestehende Produkte aktualisieren: URL handle und Title sind die einzigen Pflichtspalten.

Die Spalten hängen voneinander ab. Wer eine Variantenspalte wie SKU oder Gewicht ändert, muss auch **Option1 name** und **Option1 value** mitliefern. Fehlen diese beiden, wird laut Hilfe eine neue Standardvariante angelegt und bestehende Varianten werden gelöscht. Ein Produkt kann bis zu drei Optionen haben, etwa Größe und Farbe.

Der CSV-Import unterstützt keine Varianten-Metafelder (dafür gibt es den Massen-Editor für Varianten) und kein massenhaftes Löschen von Produkten. Auch die Verfügbarkeit in anderen Vertriebskanälen lässt sich per CSV nicht in großer Zahl ändern.

## Neu anlegen oder überschreiben?

Beim Import gibt es das Häkchen **Overwrite products with matching handles** (Produkte mit übereinstimmendem Handle überschreiben):

- **Ohne Häkchen** werden Produkte, deren Handle schon existiert, ignoriert.
- **Mit Häkchen** ersetzen die Werte der Datei die Werte der vorhandenen Produkte, für alle Spalten, die in der Datei enthalten sind.

Daraus folgen drei Regeln aus der Shopify-Hilfe:

1. Ist eine **nicht erforderliche Spalte in der Datei leer**, wird der vorhandene Wert im Shop ebenfalls leer. Steht im Shop ein Anbieter (Vendor), in der Datei aber nichts, ist der Name danach weg.
2. Fehlt eine Spalte **ganz in der Datei**, bleibt der vorhandene Wert im Shop unverändert.
3. Wer **Optionswerte ändert** (Option1 value bis Option3 value), löscht bestehende Varianten-IDs, und es entstehen neue. Das kann Dinge brechen, die sich auf diese IDs verlassen, etwa Apps von Drittanbietern.

Wenn Sie nur Preise ändern wollen, nehmen Sie nur die Spalten mit, die Sie ändern, plus die nötigen Pflicht- und Optionsspalten.

## Wo es häufig schiefgeht

Die Shopify-Hilfe nennt diese typischen Probleme:

**Sortieren in Excel oder Numbers.** Beim Sortieren können Produkte von ihren Bildlinks getrennt werden, und die Bilder gehen beim Import verloren. Laut Hilfe kann eine sortierte Datei bestehende Produkte mit fehlerhaften Daten überschreiben, die sich nicht wiederherstellen lassen. Sortieren Sie die Tabelle vor dem Import nicht.

**Seltsame Zeichen in Texten.** Erscheinen Sonderzeichen wie deutsche Umlaute falsch, wurde die Datei nicht mit UTF-8 gespeichert. Google Sheets speichert laut Hilfe automatisch in UTF-8, bei anderen Programmen kann ein zusätzlicher Schritt nötig sein.

**Spaltenüberschriften stimmen nicht.** Die Überschriften müssen exakt zur Vorlage passen, auch in Groß- und Kleinschreibung („Title“, nicht „title“). Weichen sie ab oder fehlen sie, schlägt der Import laut Hilfe fehl, etwa mit der Meldung „Network error: Unexpected token“.

**Geschwungene Anführungszeichen.** Ein „Illegal quoting“-Fehler entsteht laut Hilfe, wenn die Datei Kommas oder Anführungszeichen enthält, die nicht UTF-8-kodiert sind. Typisch sind geschwungene statt gerade Zeichen.

**Dateigröße.** Die Produkt-CSV darf nicht größer als 15 MB sein. Bei einem Fehler oder einer Zeitüberschreitung teilen Sie die Datei in mehrere kleinere und laden sie nacheinander hoch.

**Optionen verschieben.** Wer eine Option von Position 1 auf Position 2 verschiebt, kann einen Fehler wie „Line is invalid“ bekommen. Die Hilfe beschreibt dafür einen Umweg mit einem vorübergehenden Optionsnamen und einem zweiten Import.

Für den Upload empfiehlt die Hilfe den Browser Google Chrome.

## So läuft der Import ab

1. Im Shopify-Admin zu **Produkte** gehen und **Import** wählen.
2. Die CSV-Datei hinzufügen.
3. Entscheiden, ob neue Produkte in allen Vertriebskanälen oder nur im Online-Shop erscheinen sollen.
4. Entscheiden, ob bestehende Produkte mit gleichem Handle überschrieben werden sollen.
5. **Hochladen und fortfahren**, die Zusammenfassung prüfen und den Import bestätigen.

Fehlt die Spalte **Status** in der Datei, werden die Produkte laut Hilfe als aktiv hochgeladen. Wenn Sie neue Produkte erst prüfen wollen, tragen Sie den Status ein.

## Großer Import: erst im Kleinen testen

Shopify empfiehlt Partnern, bei großen Importen für Händler zuerst eine kleine Auswahl in einem Entwicklungs-Shop zu testen. Das gilt auch ohne Partnerstatus: Importieren Sie zuerst zwei, drei Produkte und prüfen Sie Varianten, Bilder, Preise und Sonderzeichen. Erst dann folgt die ganze Datei.

## Checkliste vor dem Import

1. Export aller Produkte als Sicherung gespeichert?
2. Datei in UTF-8, Überschriften unverändert?
3. Tabelle nicht sortiert?
4. Bei Varianten: URL handle, Option1 name und Option1 value in jeder betroffenen Zeile?
5. Nur Spalten, die sich ändern sollen?
6. Überschreiben-Häkchen bewusst gewählt?
7. Status-Spalte gesetzt?
8. Kleiner Testimport gemacht?

## Beim Umzug von einem anderen System

Kommen die Produkte aus WooCommerce, Wix, Shopware oder einem anderen Shop, ist der CSV-Import nur ein Teil des Umzugs. Hinzu kommen Weiterleitungen alter Adressen, Kundendaten, Bestellungen und Texte.

- Adressen planen: [Shopify-Umzug und SEO: Weiterleitungen einrichten](/de/blog/shopify-migration-weiterleitungen)
- Checkliste für den kompletten Umzug: [Von WooCommerce zu Shopify umziehen](/de/blog/woocommerce-to-shopify)

## Wann ein Entwickler hilft

Für wenige Dutzend Produkte kommen viele Händler mit Export, Tabelle und Import allein zurecht. Hilfe lohnt sich, wenn:

- die Datei aus einem fremden System kommt und umgebaut werden muss,
- viele Varianten mit mehreren Optionen im Spiel sind,
- bestehende Produkte überschrieben werden sollen, ohne dass Apps oder Bestellungen Schaden nehmen,
- der Import Teil eines Umzugs mit festem Starttermin ist.

Wer wofür zuständig ist, erklärt [Shopify Hilfe: Wann das Help Center reicht](/de/blog/shopify-help).

## Häufige Fragen

**Kann ich einen Import rückgängig machen?** Nein. Laut Shopify-Hilfe lässt sich ein laufender CSV-Import nicht abbrechen. Legen Sie deshalb vorher eine Sicherung an.

**Reicht Excel?** Ja, wenn die Datei als CSV mit Kommas zwischen den Werten und in UTF-8 gespeichert wird.

**Kann ich Produkte per CSV löschen?** Nein, laut Hilfe nicht in großer Zahl. Dafür gibt es Massenaktionen unter Produkte im Admin.

**Was kostet ein Produktimport durch einen Entwickler?** Das hängt von Umfang und Zustand der Daten ab. Konkrete Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich arbeite dabei nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Den [Umzug von WooCommerce zu Shopify](/de/services/woocommerce-to-shopify) übernehme ich ebenfalls, alles Weitere steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects) · [Von Wix zu Shopify wechseln](/de/blog/wix-zu-shopify-umzug) · [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten) · [Shopify Produktvarianten anlegen](/de/blog/shopify-produktvarianten-optionen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
