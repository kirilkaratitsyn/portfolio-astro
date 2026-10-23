---
publishedAt: 2026-10-23
title: "Shopify Metafelder und Metaobjekte: Produktdaten strukturiert pflegen und anzeigen"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Was Metafelder und Metaobjekte in Shopify sind, wie Definitionen, Werte und Theme-Anbindung zusammenspielen, was sich filtern und im Bulk pflegen lässt und wann ein Entwickler hilft."
image: /og/projects/pedchem.jpg
topic: build
tags:
  - Shopify
  - Metafelder
  - Metaobjekte
  - Produktdaten
---

Inhaltsstoffe, Maße, Anwendung, technische Daten: Sobald Produkte mehr Angaben brauchen, als Titel, Beschreibung und Preis hergeben, stellt sich die Frage, wohin damit. Eine lange Beschreibung wird schnell unübersichtlich und lässt sich schlecht pflegen. Shopify bietet dafür eigene Datenfelder an. Dieser Text erklärt die Begriffe, den Ablauf und die Grenzen, ohne technischen Hintergrund vorauszusetzen.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs und Funktionen ändern sich, prüfen Sie deshalb Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Welche Produktangaben Sie rechtlich machen müssen, ist keine Frage dieses Textes, das klären Sie mit Ihrem Rechtsberater. Hier geht es nur um die Technik.

## Zwei Begriffe: Metafelder und Metaobjekte

Die Hilfe fasst beides unter **Custom data** (eigene Daten) zusammen:

- **Metafelder** hängen zusätzliche Angaben an etwas, das es schon gibt, etwa an ein Produkt, eine Variante, eine Kollektion oder einen Kunden. Beispiel: das Feld „Inhaltsstoffe“ an einem Produkt.
- **Metaobjekte** sind eigene, wiederverwendbare Einträge mit mehreren Feldern, die zu keinem Produkt gehören müssen. Die Hilfe nennt als Beispiele Product highlight, FAQ, Event appearance und Influencer profile. Ein Eintrag kann von mehreren Stellen aus eingebunden werden.

Als Faustregel: Eine Angabe, die zu genau einem Produkt gehört, ist meist ein Metafeld. Ein Block, den Sie an mehreren Stellen brauchen, etwa ein FAQ-Eintrag oder ein Mitarbeiterprofil, ist eher ein Metaobjekt. Das ist meine Einordnung, nicht ein Satz aus der Hilfe.

## Ohne Definition kein sauberes Feld

Metafelder werden über eine **Definition** angelegt. Die Hilfe beschreibt sie als Vorlage: Sie legt Namen und Typ des Feldes fest und kann Regeln zur Validierung enthalten, damit nur passende Werte gespeichert werden. Laut Hilfe sollten Sie nach Möglichkeit die **Standard-Definitionen** von Shopify bevorzugen. Pro Objekttyp nennt die Hilfe eine Obergrenze von 256 Definitionen.

Der Ablauf besteht aus drei Schritten:

1. **Definition anlegen:** Name, Typ, ggf. Regeln.
2. **Werte eintragen:** je Produkt, Variante oder anderem Objekt.
3. **Mit dem Theme verbinden:** damit der Wert im Shop sichtbar wird.

Der dritte Schritt wird oft vergessen. Ein Wert, der im Admin steht, erscheint im Shop nicht von allein.

## Anzeige im Shop: dynamische Quellen oder Liquid

Zeigen lassen sich Metafelder laut Hilfe auf zwei Wegen:

- **Dynamische Quellen:** In vielen Themes verbinden Sie ein Feld einer Section im Theme-Editor mit einem Metafeld. Jedes Produkt zeigt dann seinen eigenen Wert. Ohne Code.
- **Liquid:** Für alles, was die Section nicht von sich aus kann, etwa eine Tabelle aus mehreren Feldern, braucht es Liquid, die Vorlagensprache von Shopify. Die Hilfe sagt dazu ausdrücklich, dass dafür Programmiererfahrung nötig ist, und verweist auf einen Shopify Partner.

Damit ein Metafeld im Shop genutzt werden kann, muss laut Hilfe außerdem der Zugriff für den Online-Shop (**Storefronts access**) aktiv sein. Bei Metaobjekten gibt es weitere Optionen: Einträge können als Webseiten veröffentlicht werden, zwischen Entwurf und aktiv wechseln und übersetzt werden. Metaobjekte lassen sich über Liquid oder die Storefront API einbinden.

## Pflegen im Alltag: filtern und Bulk-Bearbeitung

Das eigentliche Argument für Metafelder ist die Pflege. Zwei Funktionen aus der Hilfe:

- **Produkte im Admin filtern:** Das geht nach Metafeldern, wenn bei der Definition die Option „Filter on the product list and in the Admin API“ aktiv ist und der Feldtyp unterstützt wird.
- **Massenbearbeitung:** Im Admin unter **Products**, **Edit products**, **Columns**, **Metafields** lassen sich Metafelder als Spalten einblenden und für viele Produkte gleichzeitig bearbeiten.

Wer Produkte per CSV importiert, sollte wissen, dass Varianten-Metafelder dabei nicht unterstützt werden, siehe [Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv).

## Bestehende Metafelder übernehmen

Haben Sie schon Metafelder, etwa aus einem früheren Shop oder von einer App, verlangt die Hilfe vor der Nutzung der Definition eine Bereinigung: Ungültige Werte müssen laut Hilfe zuerst korrigiert werden, sonst erscheinen Validierungsfehler. Das lohnt sich vor einem Umzug zu planen. Beim Wechsel von Magento sagt Shopifys Leitfaden, dass Attribute zu Metafeldern werden und die Zuordnung vor der Migration feststehen soll, siehe [Von Shopware oder Magento zu Shopify](/de/blog/shopware-magento-zu-shopify).

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nichts dazu, **wie Sie Ihre Produktdaten fachlich gliedern** sollen, welche Felder für Ihre Branche sinnvoll sind oder wie viele Felder Ihre Kunden tatsächlich lesen. Sie sagen auch nichts zur Wirkung auf Suchmaschinen oder Ladezeit. Diese Fragen hängen von Ihrem Sortiment ab.

## Beispiele aus der Praxis

Bei [Pedchem](/de/projects/pedchem), einem Shop für Schädlingsbekämpfung, habe ich die Produktdaten von 323 Produkten in Metafelder überführt. Auf jeder Produktseite entsteht daraus eine Datentabelle. Bei [Orska Rituals](/de/projects/orska-rituals) lesen die Akkordeons Key Ingredients, How To Use und Curated For ihre Daten pro Produkt aus Metafeldern. Das Team pflegt sie in Shopify, ohne Code. Ob diese Aufteilung für Ihren Shop passt, hängt von Ihren Produkten ab.

## Vor dem Start: eine Checkliste

1. Welche Angaben haben Ihre Produkte wirklich, und welche davon sollen Kunden sehen?
2. Gibt es eine **Standard-Definition** von Shopify, die passt?
3. Feldtyp und **Validierung** festgelegt (Text, Zahl, Auswahl, Verweis)?
4. Wer pflegt die Werte, und reicht dafür die Bulk-Bearbeitung?
5. Soll das Feld im Admin **filterbar** sein? Option bei der Definition gesetzt?
6. Ist der **Zugriff für den Online-Shop** aktiv und das Feld mit dem Theme verbunden?
7. Mehrsprachiger Shop: Sind die Werte übersetzt? (Siehe auch [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).)
8. Bestehende Metafelder auf **ungültige Werte** geprüft?

## Wann ein Entwickler hilft

Für ein paar Felder mit dynamischen Quellen brauchen Sie keinen. Hilfe lohnt sich, wenn Daten strukturiert wie eine Tabelle erscheinen sollen, wenn viele Produkte aus einem alten System übernommen werden oder wenn Metaobjekte als eigene Seiten dienen sollen. Wie Anpassungen sauber und wartbar bleiben, steht in [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization). Bei Großhandelsshops spielen Produktdaten zusätzlich in das Sortiment hinein, siehe [Shopify B2B](/de/blog/shopify-b2b-wholesale). Felder und Vorlagen gehören danach in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Brauche ich eine App für Metafelder?** Nein. Metafelder und Metaobjekte sind laut Hilfe Teil von Shopify und werden im Admin unter Custom data verwaltet.

**Wo lege ich Metaobjekte an?** Die Definition unter **Settings** > **Custom data**, die Einträge unter **Content** > **Metaobjects**, laut Hilfe.

**Kann ich Metafelder ohne Code anzeigen?** Teilweise, über dynamische Quellen im Theme-Editor. Für komplexere Darstellungen ist Liquid nötig.

**Kann ich Varianten-Metafelder per CSV importieren?** Laut Hilfe nicht. Dafür gibt es den Massen-Editor für Varianten.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und die Struktur der Seiten, und sage Ihnen, was auffällt. Dabei arbeite ich nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Was ich für Shops mache, finden Sie unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
