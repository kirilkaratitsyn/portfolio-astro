---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Shopify Bundles erstellen: Bundle-Arten, Grenzen der kostenlosen App und worauf Sie achten sollten"
date: 23. Oktober 2026
readingTime: 6 Min
excerpt: "Shopify Bundles erstellen: Bundle-Arten, Grenzen der kostenlosen App, Lagerbestand, Rabatte, Retouren und wann ein Entwickler hilft."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Bundles
  - Produktseiten
  - Rabatte
---

Shopify Bundles erstellen klingt einfach: zwei Produkte als Set, mit kleinem Preisvorteil. Es gibt aber drei Arten von Bundles, eine kostenlose App mit klaren Grenzen und Stolpersteine bei Lagerbestand, Versand und Abos.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Prüfen Sie Ihren Admin, denn Menüs und Funktionen ändern sich. Preise für Apps oder Entwicklung nenne ich nicht. Wie ein Bundle-Preis oder ein durchgestrichener Vergleichspreis rechtlich korrekt angegeben wird, klären Sie mit Ihrem Rechtsberater.

## Was ein Bundle ist

Laut Hilfe ist ein Bundle ein Set aus zwei oder mehr zusammengehörigen Produkten, oft mit Preisvorteil. Verkaufen lässt es sich im Online-Shop, im Shop-Kanal und in Shopify POS, über den Kanal Google & YouTube nur als festes Bundle.

Voraussetzung ist eine installierte Bundles-App.

## Drei Arten von Bundles

Die Hilfe unterscheidet:

- **Fest (Fixed):** eine vorgegebene Auswahl an Produkten und Varianten. Haben Produkte mehrere Varianten, wählen Kunden daraus.
- **Multipack:** mehrere Stück desselben Produkts.
- **Mix-and-match:** austauschbare Produkte. Kunden stellen das Bundle selbst zusammen.

Feste Bundles und Multipacks gehen laut Hilfe mit der kostenlosen App **Shopify Bundles**, in allen Tarifen. Mix-and-match unterstützt diese App ausdrücklich nicht. Dafür nennt die Hilfe Bundle-Apps von Drittanbietern oder, nur im Tarif Plus, ein eigenes Bundle-Angebot über die Bundles-APIs.

## Die kostenlose App Shopify Bundles: Grenzen

Laut Hilfe:

- **Komponenten:** feste Bundles bis zu 30, dynamische Bundles bis zu 150 Komponenten, bis zu 2000 Stück je Komponente.
- **Optionen und Varianten:** höchstens 3 Optionen und 100 Varianten je Bundle. Produkte ohne oder mit nur einer Variante zeigen keine Variantenauswahl.
- **Bestellungen:** Es erscheinen die SKUs der Einzelartikel, nicht die SKU des Bundles. Das Gewicht ergibt sich aus den Einzelartikeln.
- **Filter:** Bundles tauchen nicht unter den Options-Filtern von Search & Discovery auf.
- **Lagerbestand:** Der Bestand wird insgesamt geführt, nicht je Standort.
- **Preise:** Ändert sich der Preis eines Einzelprodukts, auch per Preisimport, bleibt der Bundle-Preis gleich. Sie passen ihn im Admin selbst an.

## Anlegen in vier Schritten

Zuerst müssen die Einzelprodukte existieren. Danach, laut Hilfe:

1. Im Admin **Apps** > **Bundles** öffnen und **Create bundle** wählen.
2. Titel eingeben und Produkte auswählen. Menge und Varianten lassen sich anpassen. Für ein Multipack duplizieren Sie das Produkt.
3. Optionen mit gleichem Namen zusammenfassen, damit Kunden etwa die Größe nur einmal wählen. Die zusammengefasste Option zählt als eine der drei möglichen.
4. **Save and continue**, Produktdetails ergänzen, Verkaufskanäle prüfen und den Status von **Draft** auf **Active** setzen. Erst dann ist das Bundle veröffentlicht.

## Voraussetzungen und Unverträglichkeiten

Laut Hilfe gilt:

- Ihr Shop muss einen **aktualisierten Checkout** nutzen. Shops mit Anpassungen oder Funktionen aus `checkout.liquid` sind **nicht** kompatibel (siehe [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen)).
- Bundles sind **nicht kompatibel mit Kaufoptionen** wie Abos, Vorbestellungen und „Try before you buy“, und nicht mit der App Shopify Subscriptions.
- Bundles haben eine **eigene SKU**. Ändert sich die SKU einer Komponente, müssen Sie das Bundle löschen und neu anlegen. Für genaue Komponenten-Nachverfolgung nennt die Hilfe Metafelder oder Apps von Drittanbietern (siehe [Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects)).
- Bundles haben **kein eigenes Versandprofil**. Die Versandkosten richten sich nach den Profilen der enthaltenen Produkte (siehe [Versand einrichten](/de/blog/shopify-versand-einrichten)).
- Bundles können **keine anderen Bundles** enthalten und unterstützen **weder Import, Export noch Massenbearbeitung**.
- Bundles lassen sich **nicht in Umtauschvorgängen** verwenden, auch nicht beim Tausch gegen dasselbe Bundle.
- Entwurfsbestellungen (Draft Orders) nutzen womöglich einen älteren Checkout, der Bundles nicht unterstützt.

Wird ein Shop später unzulässig, zum Beispiel durch `checkout.liquid`-Anpassungen, werden feste Bundles laut Hilfe auf Entwurf gesetzt und nicht mehr veröffentlicht.

## Lagerbestand, Rabatte, Retouren

**Lagerbestand:** Für jedes Produkt teilt Shopify den verfügbaren Bestand durch die im Bundle benötigte Menge. Die kleinste Zahl (abgerundet) ist die Zahl verkaufbarer Bundles. Das Beispiel der Hilfe: 15 Stühle bei 2 je Bundle ergeben 7, 8 Tische bei 1 je Bundle ergeben 8, also sind 7 Bundles verfügbar. Produkte ohne Bestandsführung oder mit „Weiter verkaufen, wenn ausverkauft“ zählen nicht mit.

**Rabatte:** Bundles unterstützen Rabattcodes und automatische Rabatte. Bei produkt- oder kollektionsbezogenen Rabatten muss das übergeordnete Bundle-Produkt ausgewählt sein, die Komponenten allein reichen nicht. Der Rabatt wird auf dem Bundle berechnet und nach gewichtetem Preis auf die Komponenten verteilt, die Steuer auf den einzelnen Komponenten. Wie Rabatte zusammenspielen, regeln die Kombinationsregeln im Admin. Zur Warenkorb-Logik siehe [Gratisartikel im Warenkorb](/de/blog/shopify-gratisartikel-warenkorb).

**Retouren:** Ein Bundle lässt sich in den Rückgaberegeln nicht als Final Sale festlegen. Ob es zurückgegeben werden kann, hängt davon ab, ob die einzelnen Produkte als Final Sale gelten. Rechtliche Fragen zu Widerruf und Rückgabe klären Sie mit Ihrem Rechtsberater, Hintergrund steht in [Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Auswertung

Die App zeigt laut Hilfe Gesamtumsatz mit Bundles, Zahl der Bundle-Bestellungen, umsatzstärkste und meistbestellte Bundles. Weitere Berichte gibt es im Admin unter **Analytics**.

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nicht, **welche Produkte sich als Bundle gut verkaufen**, wie hoch der Preisvorteil sein sollte oder ob Bundles Ihren Warenkorbwert steigern. Auch Ladezeit und Darstellung im Theme fehlen.

## Beispiele aus der Praxis

Einen veröffentlichten Projektfall mit einem Bundle gibt es von mir nicht. Am nächsten liegt die Kaufauswahl, die ich bei [Reserve Kava](/de/projects/reserve-kava), einer Marke für Instant-Kava, gebaut habe: Einmalkauf und monatliches Abo in einem Block. Shopify-Bundles lassen sich laut Hilfe nicht mit Abos kombinieren. Deshalb muss vor dem Aufbau klar sein, welche Kaufoptionen auf der Produktseite zusammenkommen.

## Vor dem Start: eine Checkliste

1. Welche **Art** von Bundle: fest, Multipack oder Mix-and-match?
2. Reicht die App **Shopify Bundles**, oder brauchen Sie eine Drittanbieter-App?
3. Nutzt Ihr Shop noch **`checkout.liquid`**?
4. Sollen Bundles mit **Abos oder Vorbestellungen** kombiniert werden?
5. Wer pflegt den **Bundle-Preis**, wenn sich ein Einzelpreis ändert?
6. Sind die **SKUs** der Komponenten stabil und ist die Bestandsführung überall aktiv?
7. Ist beim Rabatt das **Bundle-Produkt** ausgewählt und per Testbestellung geprüft?

## Wann ein Entwickler hilft

Ein festes Set oder ein Multipack legen Sie selbst in der App an. Hilfe lohnt sich, wenn:

- Kunden Bundles frei zusammenstellen sollen,
- die Kaufspalte Bundle, Mehrfachpackungen und Abo übersichtlich zeigen muss,
- der Checkout vorher von `checkout.liquid` umgestellt werden muss,
- Bundle-Logik und Rabatte zusammenpassen sollen.

Wie Anpassungen wartbar bleiben, steht in [Shopify Theme anpassen](/de/blog/shopify-theme-customization). Danach gehört das Setup in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Brauche ich eine App für Bundles?** Ja. Für feste Bundles und Multipacks gibt es die kostenlose App Shopify Bundles.

**Gibt es Bundles auch im Basic-Tarif?** Ja, die App Shopify Bundles ist laut Hilfe in allen Tarifen verfügbar. Eigene Bundle-Angebote über die APIs sind dem Tarif Plus vorbehalten.

**Kann der Kunde sein Bundle selbst zusammenstellen?** Das ist Mix-and-match. Die App Shopify Bundles kann es nicht, Drittanbieter-Apps schon.

**Kann ich Bundles mit einem Abo verkaufen?** Laut Hilfe nicht: Bundles sind mit Kaufoptionen wie Abos nicht kompatibel.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugriff auf Ihr Konto. Was ich sonst für Shops mache, steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Gratisartikel im Warenkorb](/de/blog/shopify-gratisartikel-warenkorb) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Rabattcode oder automatischer Rabatt](/de/blog/shopify-rabattcodes-automatische-rabatte) · [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten) · [Shopify Produktvarianten anlegen](/de/blog/shopify-produktvarianten-optionen) · [Shopify Try before you buy](/de/blog/shopify-try-before-you-buy)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
