---
publishedAt: 2026-10-23
title: "Shopify Produkte per CSV importieren: was vorher zu beachten ist und wo es schiefgeht"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Wie der CSV-Import von Produkten bei Shopify funktioniert, was das Überschreiben bestehender Produkte bedeutet, welche Fehler häufig auftreten und warum vor dem Import eine Sicherung nötig ist."
image: /og/projects/reserve-kava.jpg
topic: migration
tags:
  - Shopify
  - Produktimport
  - CSV
  - Migration
---

Ein neuer Shop ist schnell angelegt, aber die Produkte sind es nicht. Wer von einem anderen System kommt oder hunderte Preise auf einmal ändern will, landet früher oder später beim CSV-Import. Das ist eine Tabelle, in der jede Zeile ein Produkt oder eine Variante beschreibt. Der Import selbst dauert wenige Klicks. Die Arbeit steckt in der Vorbereitung, und ein paar Stolperfallen lassen sich danach nicht mehr rückgängig machen. Dieser Text führt Händler ohne technischen Hintergrund durch den Ablauf.

Zur Einordnung: Ich stütze mich auf die Hilfeseiten von Shopify zu Import und Export von Produkten (Stand Oktober 2026). Ob Ihre konkrete Datei sofort durchläuft, kann ich daraus nicht zusagen. Das hängt davon ab, wie sie aufgebaut ist.

## Wofür der CSV-Import gedacht ist

Laut Shopify-Hilfe eignet sich der Import, wenn Sie von einer anderen Plattform zu Shopify wechseln oder viele Änderungen an Produkten oder Beständen auf einmal vornehmen wollen. Beim Import werden die Daten aus der Datei in Produkte umgewandelt. Dabei entscheiden Sie, ob neue Produkte in allen Vertriebskanälen oder nur im Online-Shop veröffentlicht werden.

Für kleinere Änderungen ist der Import nicht nötig: Die Hilfe nennt den Massen-Editor im Admin als einfachsten Weg, mehrere Produkte oder Varianten gleichzeitig zu bearbeiten.

## Die wichtigste Regel: erst sichern

Zwei Hinweise der Shopify-Hilfe, die ich an den Anfang stellen würde:

- Ein Import per CSV lässt sich nach dem Start **nicht abbrechen**, und es gibt keinen Verlauf früherer Importe. Was ein Import geändert hat, sehen Sie im Aktivitätsprotokoll des Shops.
- Shopify rät ausdrücklich, vor dem Import eine **Sicherung der Produktdaten** anzulegen.

Die Sicherung ist einfach: Sie exportieren Ihre Produkte vorher als CSV (unter Produkte, Schaltfläche Export). Die Datei ist zugleich Ihre Vorlage, denn so sehen Sie, wie Shopify die Spalten benennt. Beim Export können Sie zwischen einer CSV für Excel, Numbers oder andere Tabellenprogramme und einer einfachen CSV für einen Texteditor wählen. Je nach Umfang kommt die Datei per E-Mail statt als Download.

## Was in die Datei gehört

Wenn Sie neue Produkte anlegen, ist laut Hilfe nur die Spalte **Title** zwingend. Sobald ein Produkt Varianten hat, brauchen Sie zusätzlich die Spalte **URL handle**, also die Kennung, die auch in der Produktadresse steht. Beim Aktualisieren bestehender Produkte sind URL handle und Title die einzigen Pflichtspalten.

Aber: Die Spalten hängen voneinander ab. Wer eine Variantenspalte wie SKU oder Gewicht ändert, muss auch **Option1 name** und **Option1 value** mitliefern. Fehlen diese beiden, wird laut Hilfe eine neue Standardvariante angelegt und bestehende Varianten werden gelöscht. Ein Produkt kann bis zu drei Optionen haben, etwa Größe und Farbe.

Zwei Dinge unterstützt der CSV-Import nicht: Varianten-Metafelder (dafür gibt es den Massen-Editor für Varianten) und das massenhafte Löschen von Produkten. Auch die Verfügbarkeit in anderen Vertriebskanälen lässt sich per CSV nicht in großer Zahl ändern.

## Neu anlegen oder überschreiben?

Beim Import gibt es das Häkchen **Overwrite products with matching handles** (Produkte mit übereinstimmendem Handle überschreiben). Die Wirkung:

- **Ohne Häkchen** werden Produkte, deren Handle schon existiert, beim Import ignoriert.
- **Mit Häkchen** ersetzen die Werte der Datei die Werte der vorhandenen Produkte, und zwar für alle Spalten, die in der Datei enthalten sind.

Daraus folgen drei Regeln, die Shopify in der Hilfe nennt und die in der Praxis oft übersehen werden:

1. Ist eine **nicht erforderliche Spalte in der Datei leer**, wird der vorhandene Wert im Shop ebenfalls leer. Steht im Shop im Feld Anbieter (Vendor) ein Name, in der Datei aber nichts, ist der Name danach weg.
2. Fehlt eine Spalte **ganz in der Datei**, bleibt der vorhandene Wert im Shop unverändert.
3. Wer **Optionswerte ändert** (Option1 value bis Option3 value), löscht bestehende Varianten-IDs, und es entstehen neue. Das kann Dinge brechen, die sich auf diese IDs verlassen, etwa Apps von Drittanbietern.

Wenn Sie nur Preise ändern wollen, nehmen Sie deshalb nur die Spalten mit, die Sie wirklich ändern, plus die nötigen Pflicht- und Optionsspalten.

## Wo es häufig schiefgeht

Die Shopify-Hilfe führt selbst eine Liste typischer Probleme. Die wichtigsten aus der Sicht von Händlern:

**Sortieren in Excel oder Numbers.** Wird eine CSV in einem Tabellenprogramm sortiert, können Produkte von ihren Bildlinks getrennt werden, und die Bilder gehen beim Import verloren. Nach der Hilfe kann eine sortierte Datei Ihre bestehenden Produkte mit fehlerhaften Daten überschreiben, die sich nicht wiederherstellen lassen. Sortieren Sie die Tabelle deshalb nicht, bevor Sie sie importieren.

**Seltsame Zeichen in Texten.** Erscheinen Sonderzeichen falsch, wurde die Datei nicht mit UTF-8 gespeichert. Google Sheets speichert laut Hilfe automatisch in UTF-8; bei anderen Programmen kann ein zusätzlicher Schritt nötig sein. Gerade bei deutschen Umlauten lohnt sich der Blick darauf.

**Spaltenüberschriften stimmen nicht.** Die Überschriften müssen exakt zur Vorlage passen, auch in Groß- und Kleinschreibung („Title“, nicht „title“). Weichen sie ab oder fehlen Überschriften, schlägt der Import laut Hilfe fehl. Dann kann eine Meldung wie „Network error: Unexpected token“ erscheinen.

**Geschwungene Anführungszeichen.** Ein „Illegal quoting“-Fehler entsteht laut Hilfe, wenn die Datei Kommas oder Anführungszeichen enthält, die nicht UTF-8-kodiert sind. Typisch sind geschwungene statt gerade Anführungszeichen.

**Dateigröße.** Die Produkt-CSV darf nicht größer als 15 MB sein. Bei einem Fehler oder Zeitüberschreitung teilen Sie die Datei in mehrere kleinere und laden sie nacheinander hoch.

**Optionen verschieben.** Wer eine Option von Position 1 auf Position 2 verschiebt (zum Beispiel Größe von Option 1 auf Option 2 und eine neue Option an die erste Stelle setzt), kann einen Fehler wie „Line is invalid“ bekommen. Die Hilfe beschreibt dafür einen Umweg mit einem vorübergehenden Optionsnamen und einem zweiten Import.

Außerdem empfiehlt die Hilfe, für den Upload den Browser Google Chrome zu verwenden.

## So läuft der Import ab

1. Im Shopify-Admin zu **Produkte** gehen und **Import** wählen.
2. Die CSV-Datei hinzufügen.
3. Entscheiden, ob neue Produkte in allen Vertriebskanälen oder nur im Online-Shop erscheinen sollen.
4. Entscheiden, ob bestehende Produkte mit gleichem Handle überschrieben werden sollen.
5. **Hochladen und fortfahren**, die Zusammenfassung prüfen und den Import bestätigen.

Nach dem Upload bekommt die E-Mail-Adresse Ihres Kontos eine Bestätigung von Shopify. Eine Besonderheit beim Status: Fehlt die Spalte **Status** in der Datei, werden die Produkte laut Hilfe als aktiv hochgeladen. Wenn Sie neue Produkte erst prüfen wollen, bevor Kunden sie sehen, tragen Sie den Status also bewusst ein.

## Großer Import: erst im Kleinen testen

Shopify empfiehlt Partnern, bei großen Importen für Händler zuerst eine kleine Auswahl in einem Entwicklungs-Shop zu testen. Das Prinzip gilt auch ohne Partnerstatus: Importieren Sie zuerst zwei, drei Produkte, schauen Sie sich Varianten, Bilder, Preise und Sonderzeichen im Shop an, und lassen Sie erst dann die ganze Datei laufen.

## Checkliste vor dem Import

1. Export aller Produkte als Sicherung gespeichert?
2. Datei in UTF-8 gespeichert, Überschriften unverändert?
3. Tabelle nicht sortiert?
4. Bei Varianten: URL handle, Option1 name und Option1 value in jeder betroffenen Zeile?
5. Nur Spalten in der Datei, die sich wirklich ändern sollen?
6. Überschreiben-Häkchen bewusst gesetzt oder bewusst nicht gesetzt?
7. Status-Spalte gesetzt, damit nichts versehentlich live geht?
8. Zuerst ein kleiner Testimport gemacht?

## Beim Umzug von einem anderen System

Kommen die Produkte aus WooCommerce, Wix, Shopware oder einem anderen Shop, ist der CSV-Import nur ein Teil des Umzugs. Die Datei muss zum Shopify-Format passen. Bei fehlenden oder abweichenden Überschriften schlägt der Import fehl. Hinzu kommen Weiterleitungen alter Adressen, Kundendaten, Bestellungen und Texte. Wie Sie die Adressen planen, steht in [Shopify-Umzug und SEO: Weiterleitungen einrichten, Rankings schützen](/de/blog/shopify-migration-weiterleitungen). Die Checkliste für einen kompletten Umzug aus WooCommerce finden Sie in [Von WooCommerce zu Shopify umziehen, ohne Rankings zu verlieren](/de/blog/woocommerce-to-shopify).

## Wann ein Entwickler hilft

Für wenige Dutzend Produkte kommen viele Händler mit Export, Tabelle und Import allein zurecht. Hilfe lohnt sich, wenn die Datei aus einem fremden System kommt und umgebaut werden muss, wenn viele Varianten mit mehreren Optionen im Spiel sind, wenn bestehende Produkte überschrieben werden sollen, ohne dass Apps oder Bestellungen Schaden nehmen, oder wenn der Import Teil eines Umzugs mit festem Starttermin ist. Wer dabei wofür zuständig ist, erklärt [Shopify Hilfe: Wann das Help Center reicht](/de/blog/shopify-help).

## Häufige Fragen

**Kann ich einen Import rückgängig machen?** Laut Shopify-Hilfe lässt sich ein laufender CSV-Import nicht abbrechen, und es gibt keinen Verlauf früherer Importe. Deshalb die Sicherung vorher. Änderungen sehen Sie im Aktivitätsprotokoll des Shops.

**Reicht Excel?** Excel geht, wenn die Datei als CSV mit Kommas zwischen den Werten und in UTF-8 gespeichert wird. Laut Hilfe speichert Google Sheets automatisch in UTF-8, bei anderen Programmen kann ein zusätzlicher Schritt nötig sein.

**Kann ich Produkte per CSV löschen?** Nein. Laut Hilfe lassen sich Produkte nicht per CSV in großer Zahl löschen. Dafür gibt es Massenaktionen unter Produkte im Admin.

**Was kostet ein Produktimport durch einen Entwickler?** Das hängt von Umfang und Zustand der Daten ab. Konkrete Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und die Struktur der Seiten, und sage Ihnen, was auffällt. Dabei arbeite ich nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Kommen Sie von WooCommerce, übernehme ich den [Umzug zu Shopify](/de/services/woocommerce-to-shopify). Was ich sonst für Shops mache, finden Sie unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Metafelder und Metaobjekte: Produktdaten strukturiert pflegen](/de/blog/shopify-metafelder-metaobjects) · [Von Wix zu Shopify wechseln](/de/blog/wix-zu-shopify-umzug)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
