---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Shopify Metafelder und Metaobjekte: Produktdaten strukturiert pflegen und anzeigen"
date: 23. Oktober 2026
readingTime: 5 Min
excerpt: "Was Metafelder und Metaobjekte in Shopify sind, wie Definition, Werte und Theme zusammenspielen, was sich filtern lässt und wann ein Entwickler hilft."
image: /og/projects/pedchem.jpg
topic: build
tags:
  - Shopify
  - Metafelder
  - Metaobjekte
  - Produktdaten
---

Inhaltsstoffe, Maße, Anwendung, technische Daten: Manche Produkte brauchen mehr Angaben, als Titel, Beschreibung und Preis hergeben. Eine lange Beschreibung wird unübersichtlich und lässt sich schlecht pflegen. Shopify bietet dafür Metafelder und Metaobjekte.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs und Funktionen ändern sich, prüfen Sie deshalb Ihren Admin. Welche Produktangaben rechtlich Pflicht sind, klären Sie mit Ihrem Rechtsberater.

## Zwei Begriffe: Metafelder und Metaobjekte

Die Hilfe fasst beides unter **Custom data** (eigene Daten) zusammen:

- **Metafelder** hängen zusätzliche Angaben an ein Produkt, eine Variante, eine Kollektion oder einen Kunden. Beispiel: das Feld „Inhaltsstoffe“.
- **Metaobjekte** sind eigene, wiederverwendbare Einträge mit mehreren Feldern, die zu keinem Produkt gehören müssen. Die Hilfe nennt als Beispiele Product highlight, FAQ, Event appearance und Influencer profile.

Meine Faustregel, nicht aus der Hilfe: Eine Angabe zu genau einem Produkt ist meist ein Metafeld. Ein Block für mehrere Stellen, etwa ein FAQ-Eintrag, ist eher ein Metaobjekt.

## Ohne Definition kein sauberes Feld

Metafelder werden über eine **Definition** angelegt. Sie legt laut Hilfe Namen und Typ des Feldes fest und kann Validierungsregeln enthalten. Die Hilfe rät, nach Möglichkeit die **Standard-Definitionen** von Shopify zu nutzen, und nennt pro Objekttyp eine Obergrenze von 256 Definitionen.

Drei Schritte:

1. **Definition anlegen:** Name, Typ, ggf. Regeln.
2. **Werte eintragen:** je Produkt oder Variante.
3. **Mit dem Theme verbinden:** Ein Wert im Admin erscheint im Shop nicht von allein.

## Anzeige im Shop: dynamische Quellen oder Liquid

Laut Hilfe gibt es zwei Wege:

- **Dynamische Quellen:** In vielen Themes verbinden Sie im Theme-Editor ein Feld einer Section mit einem Metafeld. Jedes Produkt zeigt dann seinen eigenen Wert, ohne Code.
- **Liquid:** Eine Tabelle aus mehreren Feldern braucht Liquid, die Vorlagensprache von Shopify. Laut Hilfe ist dafür Programmiererfahrung nötig, sie verweist auf einen Shopify Partner.

Außerdem muss der Zugriff für den Online-Shop (**Storefronts access**) aktiv sein. Metaobjekte lassen sich über Liquid oder die Storefront API einbinden. Ihre Einträge können als Webseiten veröffentlicht werden, zwischen Entwurf und aktiv wechseln und übersetzt werden.

## Pflegen im Alltag: filtern und Bulk-Bearbeitung

Zwei Funktionen aus der Hilfe:

- **Produkte im Admin filtern:** Das geht, wenn bei der Definition die Option „Filter on the product list and in the Admin API“ aktiv ist und der Feldtyp unterstützt wird.
- **Massenbearbeitung:** Unter **Products**, **Edit products**, **Columns**, **Metafields** blenden Sie Metafelder als Spalten ein und bearbeiten viele Produkte gleichzeitig.

Der CSV-Import unterstützt keine Varianten-Metafelder, siehe [Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv).

## Bestehende Metafelder übernehmen

Stammen Metafelder aus einem früheren Shop oder von einer App, müssen ungültige Werte laut Hilfe zuerst korrigiert werden, sonst erscheinen Validierungsfehler. Beim Wechsel von Magento werden Attribute laut Shopifys Leitfaden zu Metafeldern, und die Zuordnung soll vor der Migration feststehen, siehe [Von Shopware oder Magento zu Shopify](/de/blog/shopware-magento-zu-shopify).

## Was die Hilfe hier nicht beantwortet

Die Hilfe sagt nicht, **wie Sie Ihre Produktdaten fachlich gliedern** oder welche Felder für Ihre Branche sinnvoll sind. Auch zu Suchmaschinen und Ladezeit sagt sie nichts.

## Beispiele aus der Praxis

Bei [Pedchem](/de/projects/pedchem), einem Shop für Schädlingsbekämpfung, habe ich den Spezifikationsdaten von 323 Produkten passende Metafeld-Typen gegeben. Auf jeder Produktseite entsteht daraus eine Datentabelle. Bei [Orska Rituals](/de/projects/orska-rituals) lesen die Akkordeons Key Ingredients, How To Use und Curated For ihre Daten pro Produkt aus Metafeldern. Das Team pflegt sie in Shopify, ohne Code.

## Vor dem Start: eine Checkliste

1. Welche Angaben sollen Kunden sehen?
2. Passt eine **Standard-Definition** von Shopify?
3. Feldtyp und **Validierung** festgelegt (Text, Zahl, Auswahl, Verweis)?
4. Wer pflegt die Werte, und reicht die Bulk-Bearbeitung?
5. Soll das Feld im Admin **filterbar** sein?
6. Ist der **Zugriff für den Online-Shop** aktiv und das Feld mit dem Theme verbunden?
7. Mehrsprachiger Shop: Sind die Werte übersetzt? (Siehe [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).)
8. Bestehende Metafelder auf **ungültige Werte** geprüft?

## Wann ein Entwickler hilft

Für ein paar Felder mit dynamischen Quellen brauchen Sie keinen. Hilfe lohnt sich, wenn:

- Daten als Tabelle erscheinen sollen,
- viele Produkte aus einem alten System kommen,
- Metaobjekte eigene Seiten werden sollen.

Mehr dazu: [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization), Produktdaten im Großhandel unter [Shopify B2B](/de/blog/shopify-b2b-wholesale), laufende Pflege unter [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Brauche ich eine App für Metafelder?** Nein. Beide sind laut Hilfe Teil von Shopify und werden im Admin unter Custom data verwaltet.

**Wo lege ich Metaobjekte an?** Die Definition unter **Settings** > **Custom data**, die Einträge unter **Content** > **Metaobjects**, laut Hilfe.

**Kann ich Metafelder ohne Code anzeigen?** Teilweise, über dynamische Quellen im Theme-Editor. Komplexere Darstellungen brauchen Liquid.

**Kann ich Varianten-Metafelder per CSV importieren?** Laut Hilfe nicht. Dafür gibt es den Massen-Editor für Varianten.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich sichtbare Daten, ohne Zugang zu Ihrem Konto, und sage Ihnen, was auffällt. Mehr unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen) · [Shopify Produktvarianten anlegen](/de/blog/shopify-produktvarianten-optionen) · [Shopify Kollektionen und Filter](/de/blog/shopify-kollektionen-filter)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
