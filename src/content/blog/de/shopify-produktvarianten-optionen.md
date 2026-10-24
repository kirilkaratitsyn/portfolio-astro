---
publishedAt: 2026-10-23
title: "Shopify Produktvarianten anlegen: Optionen, Grenzen, Preise, Bilder und was Sie vorher wissen sollten"
date: 23. Oktober 2026
readingTime: 9 Min
excerpt: "Varianten in Shopify: wie Optionen und Werte zusammenspielen, welche Grenzen gelten, wie Sie Preise, Bestand und Bilder je Variante pflegen und Varianten ausblenden, statt sie zu löschen."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Varianten
  - Produkte
  - Optionen
---

„Mein T-Shirt gibt es in drei Größen und zwei Farben, soll ich dafür sechs Produkte anlegen?" Nein, dafür gibt es Varianten. Sobald ein Produkt Varianten hat, wandern aber Preis, Bestand und Versand von der Produktseite auf die Variante, und einige Grenzen überraschen erst bei größeren Sortimenten. Dieser Artikel zeigt, was das Shopify Help Center dazu sagt, für Händler ohne technischen Hintergrund.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs und Grenzwerte ändern sich, prüfen Sie also Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Wie viele Varianten für Ihre Kunden übersichtlich sind, ist eine Frage des Sortiments und nicht der Hilfe. Der Artikel behandelt nur die Technik. Menünamen sind der englischen Oberfläche entnommen.

## Optionen, Werte, Varianten

Die Hilfe erklärt es so: Ein Produkt hat **Optionen** (zum Beispiel Größe und Farbe), jede Option hat **Werte** (S, M, L und Blau, Grün), und jede Kombination der Werte kann eine **Variante** sein. Eine kleine blaue Variante des T-Shirts ist also eine Variante. Die Liste der Varianten sehen Kunden auf der Produktseite, den Bestand je Variante pflegen Sie auch auf der Inventory-Seite, mehr dazu in [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten).

Wichtig laut Hilfe: Preis, Bestand und Versand stellen Sie bei einem Produkt ohne Varianten auf der Produktseite ein. Sobald es Varianten gibt, stellen Sie sie **für jede Variante** auf deren Detailseite ein.

## Die Grenzen

- Bis zu **2.048 Varianten** pro Produkt.
- Bis zu **drei Optionen** pro Produkt. Die Optionen dürfen von Produkt zu Produkt verschieden sein: ein Produkt mit Größe, Farbe und Stil, ein anderes mit Gewicht, Ausführung und Material.
- Wer mehr braucht, kann laut Hilfe eine App aus dem App Store nutzen oder den Theme-Code so anpassen, dass Eingaben der Kunden als Zeilenartikel-Eigenschaften (line item properties) mitgehen.
- Ab 500.000 Varianten im Shop gilt ein Tageslimit für den Upload per App oder CSV: bis zu 10.000 neue Varianten pro Tag. Shopify Plus ist davon ausgenommen.

Mit der App **Combined Listings** können Shopify-Plus-Händler mehrere einzelne Produkte zu einem Angebot bündeln. Ein solches Angebot kann bis zu drei Optionen zusätzlich zu den Optionen der enthaltenen Produkte haben.

### Wenn es mehr als 100 Varianten werden

Die Hilfe nennt eigene Hinweise für Produkte mit mehr als 100 Varianten:

- Pro Produkt sind bis zu **250 Medien** (zum Beispiel Bilder) möglich. Jede Variante kann **ein** Medium bekommen, und es muss aus der Medienliste des Produkts stammen.
- Sollen einzelne Varianten in Kollektionen und Suchergebnissen als eigene Kachel erscheinen, statt nur das Hauptprodukt zu zeigen, nennt die Hilfe Combined Listings.
- Manche Themes von Drittanbietern unterstützen nicht mehr als 100 Varianten. Für Themes verweist die Hilfe auf eine Anleitung für Entwickler.
- Manche Theme-App-Extensions, öffentliche Apps und Vertriebskanäle unterstützen ebenfalls nicht mehr als 100. Das klären Sie direkt mit dem App-Entwickler.
- Die Apps Stocky und der alte Order Printer unterstützen nicht mehr als 100 Varianten. Eigene Apps, die die REST Admin API nutzen, müssen auf die GraphQL Admin API umziehen.

## Varianten anlegen

Der Weg im Admin: **Products** öffnen, das Produkt wählen, im Bereich **Variants** auf **+ Add options like size or color** klicken. Sie tragen den Namen der Option ein (er wird den Kunden angezeigt) und die Werte (ebenfalls für Kunden sichtbar). Mit **+ Add another option** kommt eine weitere Option dazu, bis zu drei. Nach **Done** und **Save** vergeben Sie die Preise.

Drei Wege, später weitere Varianten zu ergänzen:

- **Einen Wert zu einer bestehenden Option hinzufügen:** Das erzeugt gleich alle neuen Kombinationen. Das Beispiel der Hilfe: Bei drei Größen und zwei Farben legt eine neue Farbe Gelb auf einmal drei neue Varianten an.
- **Eine einzelne Variante von Hand anlegen** (**Add variant**): Das erzeugt nur diese eine Variante, nicht alle Kombinationen. Ein exaktes Duplikat einer bestehenden Variante lässt sich nicht speichern.
- **Eine Variante duplizieren** (**Duplicate**): Sie übernimmt alle Details der Vorlage, mindestens ein Optionswert muss geändert werden. Das geht nur im Admin am Desktop oder auf dem Handy.

Für jede neue Variante können Sie ein eigenes Bild, Preis, Menge, SKU, Barcode, HS-Code, Herkunftsland und Standorte angeben oder die Standardwerte des Produkts übernehmen.

### Optionen als Kategorie-Metafelder

Optionen lassen sich mit **Kategorie-Metafeldern** verbinden. Die Daten sind dann wiederverwendbar: Benennen Sie eine Farbe von Schwarz in Graphit um, ändert sich der Name überall, wo das Metafeld verbunden ist. Bei Farben können Sie die Optionen laut Hilfe als Farbfelder (swatches) auf der Produktseite zeigen. Dafür muss das Produkt eine Kategorie haben. Wenn Sie eine bestehende Option mit einem Metafeld verbinden, werden die bisherigen Werte laut Hilfe gelöscht (ein Dialog warnt vorher). Allgemein zu Metafeldern: [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects).

## Varianten bearbeiten

- **Einzeln:** Auf der Variantenseite ändern Sie Optionen, Preis, Bestand und Versand.
- **Von der Produktseite aus:** Variantenbild, Preis und verfügbarer Bestand je Standort (dafür erst nach Standort filtern). Gruppiert die Liste nach einer Option, ist die oberste Zeile keine eigene Variante. Ändern Sie dort Preis oder Bild, ändern sich alle Varianten der Gruppe.
- **Mehrere auf einmal:** im Bulk-Editor, der alle Details für mehrere Varianten ändert.
- **Neue Option:** Der Standardwert, den Sie dabei eintragen, wird auf alle bestehenden Varianten angewendet.
- **Reihenfolge:** Optionen und Werte lassen sich per Drag and drop umsortieren. Das bestimmt, wie Kunden sie sehen.

Wird ein Optionswert gelöscht und ist es der einzige, muss die ganze Option entfernt werden.

## Varianten ausblenden statt löschen

Wollen Sie eine Variante nicht mehr verkaufen, aber für Verlauf oder späteren Wiederverkauf behalten, empfiehlt die Hilfe, sie zu **entveröffentlichen**, statt sie zu löschen. Das geht je Vertriebskanal und je Katalog:

- Eine Variante erscheint nur, wenn **Produkt und Variante** in diesem Kanal oder Katalog veröffentlicht sind.
- Ist das Produkt nicht veröffentlicht, sind alle Varianten dort verborgen, egal wie die Variante eingestellt ist.
- Sind alle Varianten eines Produkts entveröffentlicht, ist das ganze Produkt dort verborgen, bis Sie mindestens eine wieder veröffentlichen.
- Neue Varianten sind standardmäßig veröffentlicht, außer das Produkt ist es nicht oder Sie ändern es vor dem ersten Speichern.
- Für einzelne Varianten gibt es **kein** Veröffentlichungsdatum.
- Bei Katalogen mit eigener Preisanpassung erhalten nicht veröffentlichte Varianten diese Anpassung nicht. Zu Katalogen und Märkten: [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).

Will man ein Produkt mit Varianten gar nicht mehr verkaufen, muss man laut Hilfe alle Optionen und Werte löschen, auch den Standardwert. Sonst bleibt das Auswahlmenü für Kunden sichtbar.

## Metafelder für Varianten

Auf der Variantenseite können Sie über Metafelder eigene Felder ergänzen. Die Hilfe formuliert an zwei Stellen unterschiedlich: Auf der Übersichtsseite steht, dass Variantenmetafelder derzeit Kunden nicht angezeigt werden können. Bei den Anleitungen steht, dass Sie mit einem kompatiblen Theme im Theme-Editor Verweise auf Variantenmetafelder hinzufügen können. Prüfen Sie das in Ihrem Theme, bevor Sie darauf bauen. Wie Sie das ganze Sortiment per Datei pflegen, steht in [Shopify Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv).

## Was die Hilfe hier nicht beantwortet

Die Seiten, die ich gelesen habe, sagen nichts dazu, **wie viele Varianten** für Ihre Kunden noch übersichtlich sind, wie Sie Optionen benennen oder SKUs aufbauen sollten und ob Größen als Menü, Schaltflächen oder Farbfelder besser wirken. Wie Ihr Theme die Auswahl zeigt, hängt vom Theme ab. Auch zur Wirkung von Varianten auf die Suchmaschinen sagen die Seiten nichts. Und was die Umsetzung kostet, hängt vom Umfang ab.

## Beispiele aus der Praxis

Bei [Reserve Kava](/de/projects/reserve-kava), einer Marke für Instant-Kava, habe ich beim Neuaufbau der Produktseiten Optionen für Einzel- und Mehrfachdosen mit Abo ergänzt, dazu ein Bundle, das beide Dosen in den Warenkorb legt. Die Auswahl für drei und fünf Dosen habe ich an einem nicht gelisteten Testprodukt gebaut. Bei [Petaljet](/de/projects/petaljet) habe ich in einem Konfigurator für Nelkenboxen die Variantenliste übersichtlicher gemacht. Ob so etwas zu Ihrem Shop passt, hängt von Theme, Sortiment und Bedarf ab. Mehr zu den Nachbarthemen: [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) und [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen).

## Vor dem Start: eine Checkliste

1. Welche **Optionen** braucht das Produkt wirklich, und reichen drei?
2. Wie viele Kombinationen entstehen, und sind es **mehr als 100**?
3. Hat jede Variante **Preis, Bestand, Versandgewicht und SKU**?
4. Hat jede Variante ihr **Bild**, aus der Medienliste des Produkts?
5. Sollen Farben als **Farbfelder** erscheinen, und ist dafür eine Kategorie gesetzt?
6. Welche Varianten sollen in welchem **Kanal oder Katalog** sichtbar sein?
7. Kommt Ihr **Theme** mit der Zahl der Varianten und der Darstellung zurecht?
8. Funktionieren die **Apps**, die Sie nutzen, mit Ihrer Variantenzahl?

## Wann ein Entwickler hilft

Die Grundlagen legen Sie selbst an. Hilfe lohnt sich bei mehr als drei Optionen oder mehr als 100 Varianten, wenn das Theme die Auswahl anders darstellen soll (Farbfelder, Schaltflächen, ein eigener Konfigurator), wenn Varianten Bundles oder Abos tragen, wenn Varianten aus einem anderen System übernommen werden oder wenn Apps und Theme zusammenpassen müssen. Verwandt sind [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) und [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten). Danach gehört das Setup in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Wie viele Varianten kann ein Produkt haben?** Laut Hilfe bis zu 2.048, mit bis zu drei Optionen.

**Kann ich mehr als drei Optionen nutzen?** Die Hilfe nennt eine App aus dem App Store oder Anpassungen im Theme-Code. Mit Shopify Plus gibt es außerdem Combined Listings.

**Soll ich eine Variante löschen oder ausblenden?** Wenn Sie die Daten behalten oder später wieder verkaufen wollen, empfiehlt die Hilfe das Entveröffentlichen.

**Kann jede Variante ein eigenes Bild haben?** Ja, ein Medium je Variante, aus der Medienliste des Produkts. Pro Produkt sind bis zu 250 Medien möglich.

**Was passiert, wenn ich einer Option einen Wert hinzufüge?** Es werden alle neuen Kombinationen mit den anderen Optionen angelegt.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugriff auf Ihr Konto. Was ich sonst für Shops mache, steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten) · [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects) · [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen) · [Shopify Try before you buy](/de/blog/shopify-try-before-you-buy) · [Shopify Kollektionen und Filter](/de/blog/shopify-kollektionen-filter)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
