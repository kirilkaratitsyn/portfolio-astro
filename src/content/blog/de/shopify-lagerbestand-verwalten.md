---
publishedAt: 2026-10-23
title: "Shopify Lagerbestand verwalten: Bestand verfolgen, Bestandsstatus, Verkauf bei Ausverkauf und mehrere Standorte"
date: 23. Oktober 2026
readingTime: 8 Min
excerpt: "Shopify Lagerbestand verwalten: Bestand verfolgen, Status wie Available und On hand, Verkauf bei Ausverkauf, Korrekturen, Zählung und mehrere Standorte."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Lagerbestand
  - Inventar
  - Standorte
---

„Im Shop steht noch ‚3 auf Lager', aber im Regal liegt nichts mehr." Oder ein ausverkauftes Produkt soll bestellbar bleiben. Beides hängt an den Einstellungen, mit denen Sie in Shopify den Lagerbestand verwalten. Sie liegen im Admin an mehreren Stellen.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs ändern sich, prüfen Sie also Ihren Admin. Die Menünamen stammen aus der englischen Oberfläche, Preise nenne ich nicht.

## Welche Produkte Sie erfassen sollten

Laut Hilfe entscheiden Sie zuerst, was Sie zählen. Typisch sind physische Produkte, Artikel in begrenzter Menge, Artikel, die Sie nachbestellen, und Produkte, die Sie im Laden mit Shopify POS verkaufen.

Nicht unbedingt erfassen müssen Sie digitale Produkte, Dienstleistungen, Produkte auf Bestellung und Geschenkkarten, siehe [Shopify Geschenkkarten einrichten](/de/blog/shopify-geschenkkarten-gutscheine). Beim Dropshipping führen Sie den Bestand in Shopify oder in einer Dropshipping-App.

## Bestandsverfolgung einschalten

Die Verfolgung stellen Sie pro Produkt ein, bei Varianten pro Variante:

1. Im Admin **Products** öffnen und das Produkt oder die Variante wählen.
2. Im Bereich **Inventory** die Option **Track quantity** aktivieren.
3. Bei **Available** die Stückzahl eintragen und speichern.

Mengen tragen Sie einzeln, im Bulk-Editor oder per CSV-Import ein. Kennen Sie die Zahl noch nicht, rät die Hilfe zu einer Schätzung, die Sie nach der ersten Zählung korrigieren. Die Mengen sehen Sie unter **Products > Inventory**. Zur Kontrolle schlägt die Hilfe eine Testbestellung vor, die Sie danach stornieren. Der Bestand muss zurückkommen.

Zum Produktkatalog: [Shopify Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv).

## Die Bestandsstatus: On hand, Available, Committed und mehr

Laut Hilfe gibt es fünf Status, sichtbar auf der Inventory-Seite und auf der Produkt- und Variantenseite. Die Verfolgung muss eingeschaltet sein.

- **Available:** verkaufbar.
- **Committed:** reserviert für noch nicht erfüllte Bestellungen, Entwurfsbestellungen (Draft orders) oder Transfers mit dem Status „bereit zum Versand".
- **Unavailable:** von Apps oder Ihnen beiseitegelegt, etwa wegen Beschädigung, Qualitätskontrolle oder als Sicherheitsbestand. Per Korrektur verschieben Sie Stück aus Available dorthin.
- **On hand:** die Summe aus Committed, Unavailable und Available.
- **Incoming:** unterwegs durch Transfers, Bestellungen beim Lieferanten (Purchase orders) oder Apps. Erst nach dem Wareneingang wird daraus Available.

Das Beispiel der Hilfe: 10 Stück committed, 6 unavailable und 4 available ergeben 20 on hand. Ändern Sie On hand, ändert sich Available um dieselbe Menge, und umgekehrt. Apps können weitere Status nutzen, etwa für einen Sicherheitsbestand.

## Was bei „ausverkauft" passiert

Ausverkauft heißt laut Hilfe: Das Produkt wird verfolgt und der Bestand liegt bei null oder darunter. Standardmäßig lässt es sich dann nicht in den Warenkorb legen (**Stop selling when out of stock**).

Mit **Continue selling when out of stock** im Bereich Inventory des Produkts ändern Sie das. Gründe laut Hilfe: Vorbestellungen, bald eintreffende Ware, erst verkaufen und dann nachbestellen, oder ein Shop, der die tatsächliche Menge nicht führt. Wählbar ist die Option nur mit eingeschaltetem **Inventory tracked**. Mehr dazu: [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder).

Drei Hinweise aus der Hilfe:

- Die Einstellung gilt **nicht** für Shopify POS. Dort können Mitarbeitende bis null und darunter verkaufen, POS warnt vorher.
- Bei mehreren Standorten kann ein Produkt online als ausverkauft erscheinen, obwohl es Bestand gibt. Dann liegt der Standort, der Online-Bestellungen erfüllt, bei null oder darunter, und nur ein Standort ohne Online-Versand hat Ware. Laut Hilfe buchen Sie Ware am erfüllenden Standort ein.
- Artikel einer Dropshipping-App können als ausverkauft erscheinen, wenn am Standort der App keine Versandtarife hinterlegt sind.

## Ausverkaufte Produkte ausblenden

Standardmäßig bleibt ein ausverkauftes Produkt sichtbar. Die Hilfe beschreibt vier Wege, es auszublenden:

- **Kollektionen:** Bedingung **Inventory stock** „is greater than" 0 zusammen mit **Match all conditions**. Mit „any condition" funktioniert das nicht. Die Verfolgung muss eingeschaltet sein.
- **Standard-Kollektion „Catalog"** (`/collections/all`): erst durch eine eigene Kollektion überschreiben, dann dieselbe Bedingung setzen.
- **Apps** für Bestandsverwaltung aus dem App Store, manche blenden Produkte automatisch aus.
- **[Shopify Flow](/de/blog/shopify-flow-automatisierung):** Vorlage **Publish and unpublish products based on inventory level** oder ein eigener Workflow mit dem Trigger **Product variant inventory quantity changed**.

Kommt Ware wieder an, erscheinen die Produkte erneut in den Kollektionen. Ob das Ausblenden für Suchmaschinen sinnvoll ist, sagt die Hilfeseite nicht.

## Bestand korrigieren und nachvollziehen

Bestände ändern Sie auf der Inventory-Seite (Available und On hand) oder auf der Produkt- und Variantenseite (Available und Total). Es gibt zwei Methoden:

- **Set to:** Sie tragen eine exakte Zahl ein, zum Beispiel nach einer Zählung.
- **Adjust by:** Sie addieren oder subtrahieren, etwa für Wareneingang, beschädigte, verlorene oder abgelaufene Ware oder zum Verschieben nach Unavailable.

Änderungen sind zunächst nur als offen markiert und gelten erst nach dem Speichern. Verlassen Sie die Seite vorher, gehen sie verloren. Optional tragen Sie einen Grund ein (**Add reason**).

Der Verlauf (adjustment history) zeigt laut Hilfe, wer die Mengen wann und wie verändert hat: Sie, ein Mitarbeiter, eine App oder ein Vertriebskanal. Sie sehen nur die letzten **180 Tage** und bei Varianten jeweils eine Variante. Für ältere Daten verweist die Hilfe auf den Bericht **Inventory adjustment changes**.

## Inventur mit Stock counts

Unter **Inventory > Stock counts** legen Sie eine Zählung für einen Standort an und wählen die Produkte. Das Team zählt mit einem Barcode-Scanner oder von Hand. Shopify vergleicht die gezählte Menge mit On hand, ein Manager kann prüfen und freigeben. Die Unterseiten zum Anlegen und Durchführen habe ich nicht im Detail gelesen.

## Große Mengen per CSV

Viele Änderungen auf einmal erledigen Sie per CSV-Export und -Import, für einen Standort oder für alle. Die Hilfe unterscheidet zwei Formate:

- **All states** (von der Hilfe empfohlen): eine Zeile pro Standort mit Spalten für alle Status. Das Format schützt laut Hilfe vor versehentlichem Überschreiben, Spalten wie Committed sind nicht editierbar.
- **Available:** nur die verfügbaren Mengen, ohne diesen Schutz.

## Mehrere Standorte und Apps

Mit mehr als einem Standort (Lager, Laden, Partner) gilt laut Hilfe:

- Der Bestand wird **pro Standort** geführt. Neue Produkte werden automatisch allen Standorten mit Menge 0 zugeordnet.
- Ein Produkt muss an mindestens einem Standort **aktiv** sein, um verkäuflich zu sein. Aktivieren oder Deaktivieren ändert die Mengen nicht.
- Hat ein Standort offene Bestellungen oder aktive Transfers für ein Produkt, können Sie es dort nicht aus dem Bestand nehmen.
- Standorte ohne Online-Bestellungen zählen im Gesamtbestand, aber nicht in der Menge, die Kunden online sehen.
- Ein neuer Standort startet ohne Bestand. Ist Menge erfasst, das Produkt dort aber nicht aktiv, zeigt Available einen Strich.
- Welcher Standort eine Bestellung bekommt, regelt das Order Routing. Für dringende Bestellungen oder bei Sync-Problemen lässt sich der Standort ändern.
- Fulfillment-Apps (Dropshipping, Logistikpartner, Print-on-Demand) können den Bestand desselben Produkts neben Ihren Standorten verwalten.

Für den Bulk-Editor nennt die Hilfe bis zu 50 Produkte auf einmal, für Kataloge über 100 Produkte den CSV-Weg. Zum Versand: [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten).

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nicht, **wie viel Sicherheitsbestand** zu Ihrem Sortiment passt, wann Sie nachbestellen und wie Sie die Nachfrage einschätzen. Das sind unternehmerische Fragen. Offen bleiben auch die Anbindung an Warenwirtschaft oder Lagersoftware (ERP) und die Kosten dafür.

Zur Rechtslage bei Lieferzeiten und Verfügbarkeitsangaben fragen Sie einen Anwalt. Zu den Pflichttexten: [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Beispiele aus der Praxis

Unter meinen veröffentlichten Projekten gibt es keinen Fall, in dem ich die Lagerverwaltung eines Shops eingerichtet habe.

## Wann ein Entwickler hilft

Die Grundeinstellungen setzen Sie selbst. Hilfe lohnt sich, wenn:

- Bestände aus einem anderen System übernommen werden,
- Kollektionen und Theme ausverkaufte Produkte sauber behandeln sollen,
- Back-in-stock-Mails oder eine eigene Anzeige „nur noch X Stück" gebaut werden,
- ein Lager- oder ERP-System per API angebunden wird,
- mehrere Standorte und Fulfillment-Apps zusammenspielen müssen.

Verwandt sind [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) und [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen). Danach gehört das Setup in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Muss ich den Bestand für jedes Produkt führen?** Nein. Digitale Produkte, Dienstleistungen, Produkte auf Bestellung und Geschenkkarten laufen laut Hilfe oft ohne Verfolgung.

**Was ist der Unterschied zwischen Available und On hand?** On hand ist die Summe aus Committed, Unavailable und Available. Available ist der Teil, den Kunden kaufen können.

**Kann ich bei null weiter verkaufen?** Ja, mit **Continue selling when out of stock**, sofern die Verfolgung eingeschaltet ist. In Shopify POS gilt die Einstellung nicht.

**Wie lange sehe ich den Verlauf der Änderungen?** Im Admin die letzten 180 Tage je Produkt oder Variante. Für ältere Daten gibt es den Bericht Inventory adjustment changes.

**Kann ich ausverkaufte Produkte ausblenden?** Ja, über Kollektionsbedingungen, Apps oder Shopify Flow. Die Verfolgung muss eingeschaltet sein.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Mehr unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv) · [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten) · [Shopify Produktvarianten anlegen](/de/blog/shopify-produktvarianten-optionen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
