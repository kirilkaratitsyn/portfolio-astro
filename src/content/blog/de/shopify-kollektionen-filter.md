---
publishedAt: 2026-10-24
updatedAt: 2026-11-11
title: "Shopify Kollektionen und Filter einrichten: Bedingungen, Sortierung und Search & Discovery"
date: 24. Oktober 2026
readingTime: 8 Min
excerpt: "Shopify Kollektionen und Filter einrichten: manuelle und automatische Kollektionen, Bedingungen, Sortierung, SEO und Search & Discovery mit Grenzen."
image: /og/projects/lineargent.jpg
topic: build
tags:
  - Shopify
  - Kollektionen
  - Filter
  - Navigation
---

„Kunden finden in meinem Shop nichts, obwohl alles da ist." Oft liegt das am Aufbau der Kollektionen oder an Filtern, die nicht zum Sortiment passen. Shopify Kollektionen und Filter richten Sie ohne Code ein, es gibt aber Regeln.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs ändern sich, prüfen Sie also Ihren Admin. Menünamen stammen aus der englischen Oberfläche. Preise nenne ich nicht.

## Was eine Kollektion ist

Eine Kollektion fasst Produkte zu einer Gruppe zusammen, zum Beispiel nach Kategorie, Saison, Größe, Farbe oder „im Angebot". Im Shop wird daraus eine Seite mit den Produkten. Laut Hilfe gibt es Kollektionen ab dem Basic-Tarif, der Starter-Tarif unterstützt sie nicht.

Shopify ersetzt gerade das alte Modell mit **manuellen** und **automatischen (smart) Kollektionen** durch ein **neues Kollektionsmodell**. Ist es in Ihrem Admin schon da, wurden alle bisherigen Kollektionen automatisch umgestellt. Welche Variante Sie haben, sehen Sie unter **Products > Collections**.

## Das alte Modell: manuell oder automatisch

- **Manuelle Kollektion:** enthält die Produkte, die Sie auswählen. Nur ganze Produkte, keine einzelnen Varianten.
- **Automatische (smart) Kollektion:** nimmt Produkte auf, die Ihre Bedingungen erfüllen, bis zu 60 Bedingungen. Sie legen fest, ob alle oder nur eine erfüllt sein muss.
- Eine automatische Kollektion lässt sich **nicht in eine manuelle umwandeln**. Sie legen eine neue manuelle an.

## Das neue Modell: Quellen statt Typ

Im neuen Modell fügen Sie einer Kollektion eine oder mehrere **Quellen** hinzu:

- **Products:** Produkte automatisch per Bedingung oder von Hand.
- **Variants:** nur bestimmte Varianten, etwa nur rote Artikel für eine Valentinstag-Kollektion. Die Filter zeigen dann nur Preisspanne, Farbmuster und Optionen dieser Varianten.
- **Collection:** die Produkte einer anderen Kollektion, zum Beispiel „Teezubehör" aus den Kollektionen Teekannen, Siebe und Filter.
- **App:** Produkte aus einer App-Quelle.

Ein Produkt aus mehreren Quellen erscheint nur einmal. Produkte lassen sich auch **ausschließen**: einzeln, per Bedingung oder als ganze Kollektion. Ausschlüsse haben immer Vorrang.

Grenzen pro Shop laut Hilfe: höchstens 5.000 Kollektionen mit Bedingungen, 50 Kollektionen, die eine andere Kollektion enthalten, 5 Kollektionen, die eine andere ausschließen, und 100 Kollektionen mit Varianten.

## Bedingungen: worauf es ankommt

Bedingungen beziehen sich auf Titel, Typ, Hersteller, Produktkategorie, Tags, Status, Preis, Vergleichspreis, Gewicht, Bestand und Metafelder, höchstens 60 pro Kollektion. Regeln aus der Hilfe, die oft überraschen:

- **„is equal to" ist exakt, „contains" ist teilweise.** Bei „contains" muss der Wert mindestens 3 Zeichen haben.
- **Kein „größer gleich" und „kleiner gleich".** Für einen Preisbereich setzen Sie zwei Bedingungen mit **Match all conditions**, die Grenzen knapp unter und knapp über dem gewünschten Wert.
- **Bei Produkten mit Varianten reicht eine Variante.** Bei „Bestand größer als 0" in einer Products-Quelle ist ein Produkt drin, sobald eine Variante Bestand hat.
- **Sonderzeichen in Tags** werden ignoriert oder gleich behandelt. Eine Bedingung auf den Tag `red-new` erfasst auch `red_new` und `red+new`.
- **Archivierte Produkte** bleiben in Kollektionen, sind im Shop aber nicht sichtbar.
- **Von Hand hinzugefügte Produkte** entfernt keine Bedingung, nur Sie selbst.
- **Ausschluss mit „is not equal to"** bei mehreren Herstellern oder Typen funktioniert laut Hilfe oft nicht wie erwartet. Zuverlässiger sind Tags mit „is equal to".
- **Vergleichspreis:** Ein leerer Vergleichspreis ist nicht dasselbe wie 0. Wer ein Produkt aus einer Sale-Kollektion mit „Vergleichspreis is set" heraushalten will, setzt laut Hilfe den Vergleichspreis auf 0.

Kollektionen nach Metafeldern brauchen eine Metafeld-Definition mit aktivierter Kollektions-Einstellung. Mehr dazu: [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects) und [Shopify Produktvarianten anlegen](/de/blog/shopify-produktvarianten-optionen).

Enthält eine Kollektion falsche Produkte, empfiehlt die Hilfe: eine Bedingung duplizieren, speichern, das Duplikat löschen, erneut speichern.

## Kollektionen, die niemand sieht

Manche Kollektionen dienen laut Hilfe nur intern und sind in keinem Vertriebskanal veröffentlicht, etwa für eine **Steuer-Ausnahme** oder als Ziel eines **Rabatts**. Dazu: [Shopify Steuern und MwSt. einrichten](/de/blog/shopify-steuern-mwst-einrichten) und [Shopify Rabattcodes und automatische Rabatte](/de/blog/shopify-rabattcodes-automatische-rabatte).

## Reihenfolge, Darstellung, Menü

- **Sortierung:** Neue Kollektionen sind nach **Most relevant** sortiert. Zur Wahl stehen außerdem Bestseller, Titel, Preis, Datum und **Manually**, dann ordnen Sie Produkte selbst. Die Sortierung nach Preis nutzt die Grundpreise, nicht die Preise aus Markets oder B2B-Katalogen. Mehr dazu: [Shopify Markets](/de/blog/shopify-markets-mehrere-laender) und [Shopify B2B](/de/blog/shopify-b2b-wholesale).
- **Template:** Eigene Kollektions-Templates aus dem Theme-Editor wählen Sie pro Kollektion.
- **Veröffentlichung:** Kanäle und ein Datum für den Online Store setzen Sie pro Kollektion. Die Sichtbarkeit der einzelnen Produkte ändert das nicht.
- **Menü:** Eine veröffentlichte Kollektion erscheint nicht automatisch im Menü. Sie fügen sie unter **Content > Menus** hinzu. Wird eine Kollektion gelöscht, verschwinden ihre Links aus den Menüs.

## Kollektionen und Google

Jede Kollektion hat einen eigenen Eintrag für Suchmaschinen: Seitentitel, Meta-Beschreibung und URL-Handle. Laut Hilfe werden Titel über 70 und Beschreibungen über 320 Zeichen in Suchergebnissen eventuell abgeschnitten. Ändern Sie den Handle, setzen Sie das Häkchen für eine Weiterleitung von der alten Adresse, sonst landen Besucher auf einer 404-Seite. Mehr dazu: [Shopify-Umzug und SEO: Weiterleitungen](/de/blog/shopify-migration-weiterleitungen) und [Shopify-Shop wird bei Google nicht gefunden](/de/blog/shopify-shop-bei-google-nicht-gefunden).

## Filter mit Search & Discovery

Filter auf Kollektionsseiten und in der Suche richten Sie mit der kostenlosen App **Shopify Search & Discovery** ein, unter **Apps > Search & Discovery > Filters**.

- **Das Theme muss Filter unterstützen.** Sonst sehen Kunden sie nicht. Sie prüfen das unter **Content > Menus** im Bereich **Collection and search filters**.
- **Standardfilter** gibt es für Verfügbarkeit, Kategorie, Preis, Produkttyp, Tags und Hersteller. **Eigene Filter** basieren auf Produktoptionen, Metafeldern oder Metaobjekten. Insgesamt sind bis zu 25 Filter möglich.
- **Werte gruppieren:** zum Beispiel Onyx, Ebenholz und Mitternacht zu Schwarz.
- **Farbmuster:** Filter mit Farbfeldern oder Bildern gehen über Metafelder mit Metaobjekt-Verweis, und das Theme muss das unterstützen.
- **Leere Werte** lassen sich ausblenden oder ans Ende der Liste setzen.
- **Logik:** Werte aus verschiedenen Filtern verbinden sich mit „und", Werte im selben Filter standardmäßig mit „oder". Bei Tags und Listen-Metafeldern können Sie „und" wählen.

## Grenzen der Filter

- Kollektionen mit **mehr als 5.000 Produkten** zeigen keine Filter. Die Hilfe rät, große Kollektionen zu teilen, etwa „Damenmode" in Oberteile, Jeans und Stiefel.
- Ein Filter zeigt im Shop **höchstens 100 Werte**.
- In der Suche beruhen Filter und Zähler auf den ersten 1.000 Ergebnissen.
- Der **Preisfilter** erscheint nur in der Standardwährung des Shops.
- Der **Tag-Filter** erscheint nur in der Standardsprache, Hersteller-Werte bleiben immer in der Standardsprache.
- Neue Metafeld-Werte tauchen eventuell erst nach der Neuindexierung auf, laut Hilfe nach 24 bis 48 Stunden.
- Gleiche Optionen müssen überall gleich heißen, also nicht einmal „Color" und einmal „Color:".

## Was die Hilfe hier nicht beantwortet

Die Hilfe sagt nicht, wie viele Kollektionen ein Sortiment braucht, wie tief eine Navigation sein sollte, welche Filter Ihren Kunden helfen oder wie sich das auf Umsatz und Rankings auswirkt. Für andere Suchlösungen als Search & Discovery gelten die Regeln des Anbieters.

## Beispiele aus der Praxis

- Bei [Lineargent](/de/projects/lineargent) habe ich Breadcrumbs für Kollektionsseiten gebaut, die zeigen, wo eine Kollektion im Katalog liegt. Suche und Merchandising laufen dort über Searchspring.
- Bei [Minbie](/de/projects/minbie) sind vier Trinklernbecher-Farben, jede ein eigenes Produkt, über einen Farbwähler auf der Produktseite verknüpft.
- Bei [Jula Bloom](/de/projects/jula-bloom) habe ich unter anderem die Filterleiste auf den Kollektionsseiten ruhiger gestaltet.

Filter in Search & Discovery für einen Kunden einzurichten, ist in meinen veröffentlichten Projekten nicht beschrieben.

## Vor dem Start: eine Checkliste

1. Altes oder **neues Kollektionsmodell**?
2. Welche Kollektionen braucht das **Menü**, welche sind nur intern?
3. Sind **Tags, Typen und Hersteller** einheitlich geschrieben?
4. Gibt es Kollektionen mit **mehr als 5.000 Produkten**?
5. Haben wichtige Kollektionen **Seitentitel und Beschreibung** für Google?
6. Unterstützt Ihr **Theme** Filter, auch in **mehreren Sprachen oder Währungen**?

## Wann ein Entwickler hilft

Kollektionen und Standardfilter richten Sie selbst ein. Hilfe lohnt sich, wenn:

- das Theme keine Filter oder Farbmuster unterstützt,
- Kollektionsseiten eigene Templates, Breadcrumbs oder Navigation brauchen,
- Metafelder für Filter erst angelegt und befüllt werden müssen,
- ein großer Katalog neu gegliedert werden soll.

Das gehört oft zu einem [Shopify-Redesign](/de/services/shopify-redesign). Verwandt: [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization).

## Häufige Fragen

**Kann ich eine automatische Kollektion in eine manuelle umwandeln?** Im alten Modell nicht.

**Warum ist ein ausverkauftes Produkt noch in meiner Kollektion „auf Lager"?** Laut Hilfe reicht es, wenn eine Variante die Bedingung erfüllt.

**Warum sehe ich keine Filter im Shop?** Laut Hilfe meist, weil das Theme keine Filter unterstützt, die Kollektion mehr als 5.000 Produkte hat oder neue Werte noch nicht indexiert sind.

**Brauche ich eine App für Filter?** Ja, die kostenlose App Shopify Search & Discovery.

**Erscheint eine neue Kollektion automatisch im Menü?** Nein, Sie fügen sie unter Content > Menus hinzu.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugriff auf Ihr Konto. Mehr zum [Shopify-Redesign](/de/services/shopify-redesign).

**Weiterlesen:** [Shopify SEO optimieren lassen](/de/blog/shopify-seo-optimieren-lassen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
