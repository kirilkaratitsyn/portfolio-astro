---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Shopify Produktvarianten anlegen: Optionen, Grenzen, Preise, Bilder und was Sie vorher wissen sollten"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Shopify Produktvarianten anlegen: Optionen und Werte, Grenzen, Preis, Bestand und Bild je Variante, und Varianten ausblenden, statt sie zu löschen."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Varianten
  - Produkte
  - Optionen
---

„Mein T-Shirt gibt es in drei Größen und zwei Farben, soll ich dafür sechs Produkte anlegen?" Nein, dafür gibt es in Shopify Produktvarianten. Hier steht, was das Shopify Help Center dazu sagt.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs und Grenzwerte ändern sich, prüfen Sie also Ihren Admin. Die Menünamen sind englisch. Preise für Apps oder Entwicklung nenne ich nicht.

## Optionen, Werte, Varianten

Ein Produkt hat **Optionen** (zum Beispiel Größe und Farbe). Jede Option hat **Werte** (S, M, L und Blau, Grün). Jede Kombination der Werte kann eine **Variante** sein, etwa das kleine blaue T-Shirt.

Ohne Varianten stellen Sie Preis, Bestand und Versand laut Hilfe auf der Produktseite ein, mit Varianten **für jede Variante** auf deren Detailseite. Den Bestand pflegen Sie auch auf der Inventory-Seite, siehe [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten).

## Die Grenzen

- Bis zu **2.048 Varianten** pro Produkt.
- Bis zu **drei Optionen** pro Produkt.
- Für mehr nennt die Hilfe eine App aus dem App Store oder Theme-Code, der Eingaben der Kunden als Zeilenartikel-Eigenschaften (line item properties) mitgibt.
- Ab 500.000 Varianten im Shop gilt ein Tageslimit für den Upload per App oder CSV: bis zu 10.000 neue Varianten pro Tag. Shopify Plus ist davon ausgenommen.

Mit der App **Combined Listings** bündeln Shopify-Plus-Händler mehrere Produkte zu einem Angebot. Es kann bis zu drei Optionen zusätzlich zu denen der enthaltenen Produkte haben.

### Wenn es mehr als 100 Varianten werden

Dann gilt laut Hilfe:

- Bis zu **250 Medien** (zum Beispiel Bilder) pro Produkt. Jede Variante bekommt **ein** Medium aus der Medienliste des Produkts.
- Für Varianten als eigene Kachel in Kollektionen und Suchergebnissen nennt die Hilfe Combined Listings.
- Manche Themes von Drittanbietern, Theme-App-Extensions, öffentliche Apps und Vertriebskanäle unterstützen nicht mehr als 100 Varianten. Für Themes verweist die Hilfe auf eine Anleitung für Entwickler, bei Apps fragen Sie den App-Entwickler.
- Die Apps Stocky und der alte Order Printer unterstützen nicht mehr als 100 Varianten. Eigene Apps mit der REST Admin API müssen auf die GraphQL Admin API umziehen.

## Varianten anlegen

Im Admin öffnen Sie **Products**, wählen das Produkt und klicken im Bereich **Variants** auf **+ Add options like size or color**. Sie tragen den Namen der Option und die Werte ein, beides sehen die Kunden. **+ Add another option** ergänzt eine weitere Option, bis zu drei. Nach **Done** und **Save** vergeben Sie die Preise.

Später ergänzen Sie Varianten auf drei Wegen:

- **Wert zu einer bestehenden Option hinzufügen:** Das erzeugt alle neuen Kombinationen. Beispiel der Hilfe: Bei drei Größen und zwei Farben legt die neue Farbe Gelb drei neue Varianten an.
- **Einzelne Variante anlegen** (**Add variant**): Das erzeugt nur diese eine Variante. Ein exaktes Duplikat lässt sich nicht speichern.
- **Variante duplizieren** (**Duplicate**): Sie übernimmt alle Details, mindestens ein Optionswert muss geändert werden. Das geht nur im Admin am Desktop oder auf dem Handy.

Je Variante können Sie Bild, Preis, Menge, SKU, Barcode, HS-Code, Herkunftsland und Standorte angeben oder die Standardwerte des Produkts übernehmen.

### Optionen als Kategorie-Metafelder

Optionen lassen sich mit **Kategorie-Metafeldern** verbinden. Benennen Sie dann eine Farbe von Schwarz in Graphit um, ändert sich der Name überall, wo das Metafeld verbunden ist. Farben können Sie laut Hilfe als Farbfelder (swatches) auf der Produktseite zeigen, wenn das Produkt eine Kategorie hat. Verbinden Sie eine bestehende Option mit einem Metafeld, werden die bisherigen Werte laut Hilfe gelöscht, ein Dialog warnt vorher. Mehr dazu: [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects).

## Varianten bearbeiten

- **Einzeln:** Auf der Variantenseite ändern Sie Optionen, Preis, Bestand und Versand.
- **Von der Produktseite aus:** Variantenbild, Preis und verfügbarer Bestand je Standort (erst nach Standort filtern). Gruppiert die Liste nach einer Option, ist die oberste Zeile keine eigene Variante. Preis oder Bild dort ändern alle Varianten der Gruppe.
- **Mehrere auf einmal:** im Bulk-Editor.
- **Neue Option:** Der eingetragene Standardwert gilt für alle bestehenden Varianten.
- **Reihenfolge:** per Drag and drop. So sehen Kunden Optionen und Werte.

Löschen Sie den einzigen Wert einer Option, muss die ganze Option entfernt werden.

## Varianten ausblenden statt löschen

Wollen Sie eine Variante nicht mehr verkaufen, aber für Verlauf oder späteren Verkauf behalten, empfiehlt die Hilfe das **Entveröffentlichen**. Das geht je Vertriebskanal und je Katalog:

- Eine Variante erscheint nur, wenn **Produkt und Variante** dort veröffentlicht sind.
- Sind alle Varianten entveröffentlicht, ist das ganze Produkt dort verborgen.
- Neue Varianten sind standardmäßig veröffentlicht, außer das Produkt ist es nicht oder Sie ändern es vor dem ersten Speichern.
- Für einzelne Varianten gibt es **kein** Veröffentlichungsdatum.
- Bei Katalogen mit eigener Preisanpassung erhalten nicht veröffentlichte Varianten diese Anpassung nicht. Zu Katalogen und Märkten: [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).

Für ein Produkt ganz ohne Varianten löschen Sie laut Hilfe alle Optionen und Werte, auch den Standardwert. Sonst bleibt das Auswahlmenü für Kunden sichtbar.

## Metafelder für Varianten

Auf der Variantenseite ergänzen Sie über Metafelder eigene Felder. Die Hilfe sagt dazu zweierlei. Laut Übersichtsseite können Variantenmetafelder derzeit Kunden nicht angezeigt werden. Laut den Anleitungen fügen Sie mit einem kompatiblen Theme im Theme-Editor Verweise darauf hinzu. Prüfen Sie das in Ihrem Theme. Das ganze Sortiment per Datei pflegen: [Shopify Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv).

## Was die Hilfe hier nicht beantwortet

Die gelesenen Seiten sagen nichts dazu, **wie viele Varianten** für Kunden übersichtlich sind, wie Sie Optionen benennen oder SKUs aufbauen, ob Menü, Schaltflächen oder Farbfelder besser wirken und wie Varianten auf Suchmaschinen wirken. Die Darstellung hängt vom Theme ab, die Kosten vom Umfang.

## Beispiele aus der Praxis

Bei [Reserve Kava](/de/projects/reserve-kava), einer Marke für Instant-Kava, habe ich eine Kaufauswahl für Einmalkauf und monatliches Abo gebaut. Preis pro Dose und Ersparnis werden aus dem Live-Preis berechnet. Bei [Petaljet](/de/projects/petaljet) habe ich in einem Konfigurator für Nelkenboxen die Variantenliste übersichtlicher gemacht. Nachbarthemen: [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) und [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen).

## Vor dem Start: eine Checkliste

1. Welche **Optionen** braucht das Produkt, und reichen drei?
2. Entstehen **mehr als 100** Kombinationen?
3. Hat jede Variante **Preis, Bestand, Versandgewicht, SKU und Bild**?
4. Sollen Farben als **Farbfelder** erscheinen, und ist eine Kategorie gesetzt?
5. Welche Varianten sollen in welchem **Kanal oder Katalog** sichtbar sein?
6. Kommen **Theme und Apps** mit Ihrer Variantenzahl zurecht?

## Wann ein Entwickler hilft

Die Grundlagen legen Sie selbst an. Hilfe lohnt sich in diesen Fällen:

- mehr als drei Optionen oder mehr als 100 Varianten,
- eigene Darstellung im Theme (Farbfelder, Schaltflächen, Konfigurator),
- Varianten mit Bundles oder Abos,
- Übernahme aus einem anderen System,
- Apps und Theme müssen zusammenpassen.

Verwandt: [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) und [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten). Für die laufende Pflege: [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Wie viele Varianten kann ein Produkt haben?** Laut Hilfe bis zu 2.048, mit bis zu drei Optionen.

**Kann ich mehr als drei Optionen nutzen?** Laut Hilfe per App aus dem App Store oder Theme-Code, mit Shopify Plus auch per Combined Listings.

**Soll ich eine Variante löschen oder ausblenden?** Wollen Sie die Daten behalten, empfiehlt die Hilfe das Entveröffentlichen.

**Kann jede Variante ein eigenes Bild haben?** Ja, ein Medium je Variante aus der Medienliste des Produkts.

**Was passiert, wenn ich einer Option einen Wert hinzufüge?** Es entstehen alle neuen Kombinationen mit den anderen Optionen.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich sichtbare Daten, etwa Ladezeit, Apps im Quelltext und Seitenaufbau, ohne Zugriff auf Ihr Konto. Weitere [Leistungen](/de/services).

**Weiterlesen:** [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten) · [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects) · [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen) · [Shopify Try before you buy](/de/blog/shopify-try-before-you-buy) · [Shopify Kollektionen und Filter](/de/blog/shopify-kollektionen-filter)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
