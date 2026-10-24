---
publishedAt: 2026-10-24
title: "Shopify Kollektionen und Filter einrichten: Bedingungen, Sortierung und Search & Discovery"
date: 24. Oktober 2026
readingTime: 8 Min
excerpt: "Shopify Kollektionen und Filter für Händler ohne Technik: manuelle und automatische Kollektionen, Bedingungen, Sortierung, SEO-Angaben und Filter mit der App Search & Discovery, mit ihren Grenzen."
image: /og/projects/lineargent.jpg
topic: build
tags:
  - Shopify
  - Kollektionen
  - Filter
  - Navigation
---

„Kunden finden in meinem Shop nichts, obwohl alles da ist." Oft liegt das nicht an den Produkten, sondern an zwei Dingen: wie die Kollektionen aufgebaut sind und ob es Filter gibt, die zum Sortiment passen. Beides lässt sich in Shopify ohne Code einrichten, hat aber Regeln, die man kennen sollte. Dieser Artikel zeigt, was das Shopify Help Center dazu sagt, für Händler ohne technischen Hintergrund.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs ändern sich, prüfen Sie also Ihren Admin. Menünamen sind der englischen Oberfläche entnommen. Preise für Tarife, Apps oder Entwicklung nenne ich nicht. Wie viele Kollektionen Ihr Sortiment braucht und welche Filter Ihren Kunden helfen, ist eine Frage Ihres Sortiments, nicht der Hilfe.

## Was eine Kollektion ist

Eine Kollektion fasst Produkte zu einer Gruppe zusammen, zum Beispiel nach Kategorie, Saison, Größe, Farbe oder „im Angebot". Im Shop wird daraus eine Seite mit einer Galerie der Produkte. Laut Hilfe gibt es Kollektionen ab dem Basic-Tarif, der Starter-Tarif unterstützt sie nicht.

Wichtig für die Orientierung: Shopify ersetzt gerade das alte Modell mit **manuellen** und **automatischen (smart) Kollektionen** durch ein **neues Kollektionsmodell**. Ist das neue Modell in Ihrem Admin schon da, wurden alle bisherigen Kollektionen automatisch umgestellt. Ist es noch nicht da, arbeiten Sie weiter mit manuellen und automatischen Kollektionen. Welche Variante Sie haben, sehen Sie unter **Products > Collections**.

## Das alte Modell: manuell oder automatisch

- **Manuelle Kollektion:** enthält genau die Produkte, die Sie auswählen, und ändert sich nur, wenn Sie Produkte hinzufügen oder entfernen. Sie können nur ganze Produkte aufnehmen, keine einzelnen Varianten.
- **Automatische (smart) Kollektion:** nimmt Produkte auf, die Ihre Bedingungen erfüllen, bis zu 60 Bedingungen. Sie legen fest, ob alle oder nur eine davon erfüllt sein müssen.
- Eine automatische Kollektion lässt sich **nicht in eine manuelle umwandeln**. Sie legen dafür eine neue manuelle an.

## Das neue Modell: Quellen statt Typ

Im neuen Modell wählen Sie keinen Typ mehr, sondern fügen einer Kollektion eine oder mehrere **Quellen** hinzu:

- **Products:** Produkte automatisch per Bedingung oder von Hand.
- **Variants:** nur bestimmte Varianten statt des ganzen Produkts, etwa nur rote Artikel für eine Valentinstag-Kollektion. Die Filter dieser Kollektion zeigen dann auch nur Preisspanne, Farbmuster und Optionen dieser Varianten.
- **Collection:** die Produkte einer anderen Kollektion, zum Beispiel eine Kollektion „Teezubehör" aus den bestehenden Kollektionen Teekannen, Siebe und Filter.
- **App:** Produkte aus einer App-Quelle.

Kommt ein Produkt über mehrere Quellen, erscheint es nur einmal. Produkte lassen sich außerdem **ausschließen**, einzeln, per Bedingung oder als ganze andere Kollektion. Ausschlüsse haben immer Vorrang vor Aufnahmen.

Die Hilfe nennt Grenzen pro Shop: höchstens 5.000 Kollektionen mit Bedingungen, 50 Kollektionen, die eine andere Kollektion enthalten, 5 Kollektionen, die eine andere ausschließen, und 100 Kollektionen mit Varianten.

## Bedingungen: worauf es ankommt

Bedingungen können sich auf Titel, Typ, Hersteller, Produktkategorie, Tags, Status, Preis, Vergleichspreis, Gewicht, Bestand und Metafelder beziehen. Eine Kollektion hat höchstens 60 Bedingungen. Ein paar Regeln aus der Hilfe, die in der Praxis oft überraschen:

- **„is equal to" ist exakt, „contains" ist teilweise.** Bei „contains" muss der Wert mindestens 3 Zeichen haben.
- **Kein „größer gleich" und „kleiner gleich".** Für einen Preisbereich setzen Sie zwei Bedingungen mit **Match all conditions** und legen die Grenze jeweils knapp unter beziehungsweise knapp über den gewünschten Wert.
- **Bei Produkten mit Varianten reicht eine Variante.** Steht in einer Products-Quelle „Bestand größer als 0", ist ein Produkt drin, sobald eine Variante Bestand hat, auch wenn andere ausverkauft sind.
- **Sonderzeichen in Tags** werden ignoriert oder gleich behandelt. Eine Bedingung auf den Tag `red-new` erfasst auch `red_new` und `red+new`.
- **Archivierte Produkte** bleiben in Kollektionen, sind im Shop aber nicht sichtbar.
- **Von Hand hinzugefügte Produkte** entfernt keine Bedingung. Die nehmen Sie von Hand wieder heraus.
- **Ausschluss mit „is not equal to"** bei mehreren Herstellern oder Typen funktioniert laut Hilfe oft nicht wie erwartet. Zuverlässiger sind Tags mit „is equal to".
- **Vergleichspreis:** Ein leerer Vergleichspreis ist nicht dasselbe wie 0. Wer ein Produkt aus einer Sale-Kollektion mit „Vergleichspreis is set" heraushalten will, setzt laut Hilfe den Vergleichspreis auf 0.

Kollektionen nach Metafeldern brauchen eine Metafeld-Definition mit aktivierter Kollektions-Einstellung. Was Metafelder sind: [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects). Zu Varianten und Optionen: [Shopify Produktvarianten anlegen](/de/blog/shopify-produktvarianten-optionen).

Enthält eine Kollektion doch einmal falsche Produkte, empfiehlt die Hilfe, sie zu aktualisieren: eine bestehende Bedingung duplizieren, speichern, das Duplikat löschen und erneut speichern.

## Kollektionen, die niemand sieht

Nicht jede Kollektion muss im Shop erscheinen. Die Hilfe nennt Kollektionen, die nur intern dienen und in keinem Vertriebskanal veröffentlicht sind, etwa für eine **Steuer-Ausnahme** oder als Ziel eines **Rabatts**. Dazu: [Shopify Steuern und MwSt. einrichten](/de/blog/shopify-steuern-mwst-einrichten) und [Shopify Rabattcodes und automatische Rabatte](/de/blog/shopify-rabattcodes-automatische-rabatte).

## Reihenfolge, Darstellung, Menü

- **Sortierung:** Neue Kollektionen sind nach **Most relevant** sortiert. Zur Wahl stehen außerdem Bestseller, Titel, Preis, Datum und **Manually**, dann ziehen Sie Produkte selbst an ihre Stelle. Achtung: Die Sortierung nach Preis nutzt die Grundpreise, nicht die Preise aus Markets oder B2B-Katalogen. Mehr dazu: [Shopify Markets](/de/blog/shopify-markets-mehrere-laender) und [Shopify B2B](/de/blog/shopify-b2b-wholesale).
- **Template:** Haben Sie im Theme-Editor eigene Kollektions-Templates angelegt, wählen Sie pro Kollektion, welches gilt.
- **Veröffentlichung:** Kanäle und ein Datum für die Veröffentlichung im Online Store lassen sich pro Kollektion setzen. Die Sichtbarkeit der Kollektion ändert nichts an der Sichtbarkeit der einzelnen Produkte.
- **Menü:** Eine veröffentlichte Kollektion erscheint nicht automatisch im Menü. Unter **Content > Menus** fügen Sie sie als Menüpunkt hinzu. Wird eine Kollektion gelöscht, verschwinden ihre Links automatisch aus den Menüs.

## Kollektionen und Google

Jede Kollektion hat einen eigenen Eintrag für Suchmaschinen: Seitentitel, Meta-Beschreibung und URL-Handle. Laut Hilfe werden Titel über 70 und Beschreibungen über 320 Zeichen in Suchergebnissen eventuell abgeschnitten. Den Handle sollten Sie nicht oft ändern. Tun Sie es doch, setzen Sie das Häkchen für eine Weiterleitung von der alten Adresse, sonst landen Besucher auf einer 404-Seite. Mehr zu Weiterleitungen: [Shopify-Umzug und SEO: Weiterleitungen](/de/blog/shopify-migration-weiterleitungen). Warum ein Shop bei Google trotzdem fehlt: [Shopify-Shop wird bei Google nicht gefunden](/de/blog/shopify-shop-bei-google-nicht-gefunden).

## Filter mit Search & Discovery

Filter auf Kollektionsseiten und in der Suche richten Sie mit der kostenlosen App **Shopify Search & Discovery** ein, unter **Apps > Search & Discovery > Filters**.

- **Das Theme muss Filter unterstützen.** Sonst können Sie Filter zwar anlegen, Kunden sehen sie aber nicht. Ob Ihr Theme sie unterstützt, sehen Sie unter **Content > Menus** im Bereich **Collection and search filters**.
- **Standardfilter** gibt es für Verfügbarkeit, Kategorie, Preis, Produkttyp, Tags und Hersteller. **Eigene Filter** basieren auf Produktoptionen, Metafeldern oder Metaobjekten. Insgesamt sind bis zu 25 Filter möglich.
- **Werte gruppieren:** Mehrere Werte lassen sich zu einem zusammenfassen, zum Beispiel Onyx, Ebenholz und Mitternacht zu Schwarz.
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

Die Seiten, die ich gelesen habe, sagen nicht, wie viele Kollektionen ein Sortiment braucht, wie tief eine Navigation sein sollte oder welche Filter Ihren Kunden wirklich helfen. Auch zur Wirkung auf Umsatz oder Rankings sagen sie nichts. Für eigene Suchlösungen außerhalb von Search & Discovery gelten die Regeln des jeweiligen Anbieters. Und was die Umsetzung kostet, hängt vom Umfang ab.

## Beispiele aus der Praxis

Bei [Lineargent](/de/projects/lineargent) habe ich Breadcrumbs für Kollektionsseiten gebaut, die zeigen, wo eine Kollektion im Katalog liegt. Suche und Merchandising laufen dort über Searchspring, nicht über Search & Discovery. Bei [Minbie](/de/projects/minbie) hat jede Kollektion ihr eigenes Template bekommen, dazu kam eine Kollektion für Trinklernbecher mit Farbwähler. Bei [Jula Bloom](/de/projects/jula-bloom) habe ich unter anderem die Filterleiste auf den Kollektionsseiten ruhiger gestaltet. Filter in Search & Discovery für einen Kunden einzurichten, ist in meinen veröffentlichten Projekten nicht beschrieben, und ich erfinde dazu nichts.

## Vor dem Start: eine Checkliste

1. Haben Sie schon das **neue Kollektionsmodell** oder noch manuelle und automatische Kollektionen?
2. Welche Kollektionen braucht das **Menü**, und welche sind nur intern (Steuern, Rabatte)?
3. Sind **Tags, Typen und Hersteller** einheitlich geschrieben, damit Bedingungen greifen?
4. Gibt es Kollektionen mit **mehr als 5.000 Produkten**, die geteilt werden sollten?
5. Welche **Sortierung** passt zu jeder Kollektion?
6. Haben alle wichtigen Kollektionen einen **Seitentitel und eine Beschreibung** für Google?
7. Unterstützt Ihr **Theme** Filter, und welche Filter helfen Ihren Kunden wirklich?
8. Sollen Filter in **mehreren Sprachen oder Währungen** funktionieren? Dann prüfen Sie die Grenzen oben.

## Wann ein Entwickler hilft

Kollektionen und Standardfilter richten Sie selbst ein. Hilfe lohnt sich, wenn das Theme keine Filter oder Farbmuster unterstützt, wenn Kollektionsseiten eigene Templates, Breadcrumbs oder Navigation brauchen, wenn Metafelder für Filter erst sauber angelegt und befüllt werden müssen oder wenn ein großer Katalog neu gegliedert werden soll. Das gehört oft zu einem [Shopify-Redesign](/de/services/shopify-redesign). Verwandt ist auch [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization).

## Häufige Fragen

**Kann ich eine automatische Kollektion in eine manuelle umwandeln?** Im alten Modell nicht. Sie legen eine neue manuelle an.

**Warum ist ein ausverkauftes Produkt noch in meiner Kollektion „auf Lager"?** Bei Produkten mit Varianten reicht es laut Hilfe, wenn eine Variante die Bedingung erfüllt.

**Warum sehe ich keine Filter im Shop?** Häufige Gründe laut Hilfe: Das Theme unterstützt keine Filter, die Kollektion hat mehr als 5.000 Produkte, oder neue Werte sind noch nicht indexiert.

**Brauche ich eine App für Filter?** Ja, die kostenlose App Shopify Search & Discovery.

**Erscheint eine neue Kollektion automatisch im Menü?** Nein, Sie fügen sie unter Content > Menus hinzu.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugriff auf Ihr Konto. Was ich bei einem Redesign mache, steht unter [Shopify-Redesign](/de/services/shopify-redesign).

**Weiterlesen:** [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects) · [Shopify Produktvarianten anlegen](/de/blog/shopify-produktvarianten-optionen) · [Shopify-Shop wird bei Google nicht gefunden](/de/blog/shopify-shop-bei-google-nicht-gefunden)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
