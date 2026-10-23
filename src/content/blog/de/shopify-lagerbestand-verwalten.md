---
publishedAt: 2026-10-23
title: "Shopify Lagerbestand verwalten: Bestand verfolgen, Bestandsstatus, Verkauf bei Ausverkauf und mehrere Standorte"
date: 23. Oktober 2026
readingTime: 9 Min
excerpt: "Lagerbestand in Shopify: welche Produkte Sie erfassen, was Available, Committed und On hand bedeuten, was bei Ausverkauf passiert, wie Sie Mengen korrigieren, zählen und auf mehrere Standorte verteilen."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Lagerbestand
  - Inventar
  - Standorte
---

„Im Shop steht noch ‚3 auf Lager', aber im Regal liegt nichts mehr." Oder umgekehrt: Ein Produkt ist ausverkauft, soll aber weiter bestellbar bleiben. Beides hängt an denselben Einstellungen im Shopify-Admin, und sie liegen an mehreren Stellen. Dieser Artikel zeigt, was das Shopify Help Center dazu sagt, für Händler ohne technischen Hintergrund.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs und Funktionen ändern sich, prüfen Sie also Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Wie viel Sicherheitsbestand zu Ihrem Sortiment passt und wann Sie nachbestellen, ist eine unternehmerische Frage und kein Thema der Hilfe. Der Artikel behandelt nur die Technik. Menünamen sind der englischen Oberfläche entnommen.

## Welche Produkte Sie erfassen sollten

Die Hilfe empfiehlt, zuerst zu entscheiden, was Sie überhaupt zählen. Typisch sind physische Produkte, Artikel in begrenzter Menge, Artikel, die Sie nachbestellen, und Produkte, die Sie im Laden mit Shopify POS verkaufen. Nicht unbedingt erfassen müssen Sie laut Hilfe digitale Produkte, Dienstleistungen, Produkte auf Bestellung und Geschenkkarten, mehr dazu in [Shopify Geschenkkarten einrichten](/de/blog/shopify-geschenkkarten-gutscheine). Beim Dropshipping können Sie den Bestand in Shopify führen oder eine Dropshipping-App nutzen.

## Bestandsverfolgung einschalten

Die Verfolgung ist pro Produkt (bei Varianten pro Variante) einstellbar:

1. Im Admin **Products** öffnen und das Produkt wählen, bei Varianten die Variante.
2. Im Bereich **Inventory** die Option **Track quantity** aktivieren.
3. Bei **Available** die Stückzahl eintragen und speichern.

Mengen lassen sich einzeln eintragen, im Bulk-Editor oder per CSV-Import. Wenn Sie die genaue Zahl noch nicht kennen, rät die Hilfe, eine Schätzung einzutragen und nach der ersten Zählung zu korrigieren. Zur Kontrolle sehen Sie unter **Products > Inventory** die Mengen. Die Hilfe schlägt außerdem vor, eine Testbestellung aufzugeben und sie danach zu stornieren, um zu prüfen, ob der Bestand zurückkommt.

Zum Thema CSV allgemein, für den Produktkatalog selbst: [Shopify Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv).

## Die Bestandsstatus: On hand, Available, Committed und mehr

Shopify zählt nicht nur „eine Zahl". Laut Hilfe gibt es fünf Status, sichtbar auf der Inventory-Seite und auf der Produkt- und Variantenseite. Voraussetzung ist, dass die Verfolgung eingeschaltet ist.

- **Available:** verkaufbar.
- **Committed:** Stück, die für noch nicht erfüllte Bestellungen, für Entwurfsbestellungen (Draft orders) oder für Transfers mit dem Status „bereit zum Versand" reserviert sind.
- **Unavailable:** Stück, die Apps oder Sie beiseitegelegt haben, etwa wegen Beschädigung, Qualitätskontrolle oder als Sicherheitsbestand. Sie können Stück per Korrektur aus Available dorthin verschieben.
- **On hand:** die Summe aus Committed, Unavailable und Available.
- **Incoming:** unterwegs durch Transfers, Bestellungen beim Lieferanten (Purchase orders) oder Apps. Nicht verkaufbar, bis die Ware eingegangen ist. Danach wird sie zu Available.

Das Beispiel der Hilfe: 10 Stück committed, 6 unavailable und 4 available ergeben 20 on hand. Ändern Sie On hand, ändert sich Available um dieselbe Menge, und umgekehrt. Apps können weitere Status nutzen, etwa für einen Sicherheitsbestand.

## Was bei „ausverkauft" passiert

Ausverkauft heißt laut Hilfe: Das Produkt wird verfolgt und der Bestand liegt bei null oder darunter. Standardmäßig können Kunden dann nicht kaufen, das Produkt lässt sich nicht in den Warenkorb legen (**Stop selling when out of stock**).

Sie können das ändern, mit **Continue selling when out of stock** im Bereich Inventory des Produkts. Die Hilfe nennt Gründe dafür: Vorbestellungen, Ware, die bald eintrifft, erst verkaufen und dann nachbestellen, oder einen Shop, der die tatsächliche Menge nicht führt. Die Option ist nur wählbar, wenn **Inventory tracked** eingeschaltet ist. Wie das für Vorbestellungen aussieht, steht in [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder).

Drei Hinweise aus der Hilfe, die oft überraschen:

- Die Einstellung gilt **nicht** für Shopify POS. Dort können Mitarbeitende bis null und darunter verkaufen, POS warnt vorher.
- Bei mehreren Standorten kann ein Produkt online als ausverkauft erscheinen, obwohl es Bestand gibt: wenn der Standort, der Online-Bestellungen erfüllt, bei null oder darunter liegt, ein anderer Standort ohne Online-Versand aber Ware hat. Die Lösung laut Hilfe: Ware am erfüllenden Standort einbuchen.
- Artikel einer Dropshipping-App können als ausverkauft erscheinen, wenn am Standort der App keine Versandtarife hinterlegt sind.

## Ausverkaufte Produkte ausblenden

Standardmäßig bleibt ein ausverkauftes Produkt sichtbar. Die Hilfe beschreibt vier Wege, es auszublenden:

- **Kollektionen:** Bedingung **Inventory stock** „is greater than" 0 hinzufügen, zusammen mit **Match all conditions**. Mit „any condition" funktioniert das nicht. Die Verfolgung muss eingeschaltet sein.
- **Standard-Kollektion „Catalog"** (`/collections/all`): erst durch eine eigene Kollektion überschreiben, dann dieselbe Bedingung setzen.
- **Apps** für Bestandsverwaltung aus dem App Store, manche blenden Produkte automatisch aus.
- **Shopify Flow:** Vorlage **Publish and unpublish products based on inventory level** oder ein eigener Workflow mit dem Trigger **Product variant inventory quantity changed**.

Kommt Ware wieder an, erscheinen die Produkte in den Kollektionen erneut. Die Seite, die ich gelesen habe, sagt nichts dazu, ob das Ausblenden für Suchmaschinen sinnvoll ist. Das ist eine eigene Frage.

## Bestand korrigieren und nachvollziehen

Bestände ändern Sie auf der Inventory-Seite (Available und On hand) oder auf der Produkt- und Variantenseite (Available und Total). Es gibt zwei Methoden:

- **Set to:** Sie tragen eine exakte Zahl ein, zum Beispiel nach einer Zählung.
- **Adjust by:** Sie addieren oder subtrahieren, etwa für Wareneingang vom Lieferanten, beschädigte, verlorene oder abgelaufene Ware oder zum Verschieben nach Unavailable.

Änderungen werden erst gespeichert, wenn Sie sie bestätigen: Erst markieren Sie sie als offen, dann speichern Sie. Verlassen Sie die Seite vorher, gehen sie verloren. Optional tragen Sie einen Grund ein (**Add reason**).

Jede Änderung landet im Verlauf (adjustment history). Er zeigt laut Hilfe, wer sie wann vorgenommen hat und wie sie die Mengen verändert hat, ob von Ihnen, einem Mitarbeiter, einer App oder einem Vertriebskanal. Zwei Grenzen: Sie sehen nur die letzten **180 Tage**, und bei Produkten mit Varianten jeweils eine Variante. Für ältere Daten verweist die Hilfe auf den Bericht **Inventory adjustment changes**.

## Inventur mit Stock counts

Unter **Inventory > Stock counts** legen Sie eine Zählung für einen Standort an und wählen die Produkte. Das Team zählt mit einem Barcode-Scanner oder von Hand, die gezählte Menge wird mit der Menge On hand in Shopify verglichen, und ein Manager kann prüfen und freigeben. Die Unterseiten zum Anlegen und Durchführen habe ich nicht im Detail gelesen, dort lohnt ein Blick in die Hilfe.

## Große Mengen per CSV

Für viele Änderungen auf einmal bietet Shopify einen Export und Import der Bestände als CSV an. Der Export kann einen Standort oder alle umfassen. Die Hilfe unterscheidet zwei Formate:

- **All states** (von der Hilfe empfohlen): eine Zeile pro Standort mit Spalten für alle Status. Das Format schützt laut Hilfe vor versehentlichem Überschreiben, Spalten wie Committed sind nicht editierbar.
- **Available:** einfacher, nur die verfügbaren Mengen, ohne diesen Schutz.

## Mehrere Standorte und Apps

Mit mehr als einem Standort (Lager, Laden, Partner) gilt laut Hilfe:

- Der Bestand wird **pro Standort** geführt. Neue Produkte werden automatisch allen Standorten mit Menge 0 zugeordnet.
- Ein Produkt muss an mindestens einem Standort **aktiv** sein, um verkäuflich zu sein. Das Aktivieren oder Deaktivieren an einem Standort ändert die Mengen nicht.
- Einen Standort mit offenen Bestellungen oder aktiven Transfers für ein Produkt können Sie für dieses Produkt nicht aus dem Bestand nehmen.
- Standorte, die keine Online-Bestellungen erfüllen, zählen im Gesamtbestand, aber nicht in der Menge, die Kunden online sehen.
- Ein neuer Standort startet ohne Bestand. Ist an einem Standort Menge erfasst, das Produkt dort aber nicht aktiv, zeigt Available einen Strich.
- Welcher Standort eine Bestellung bekommt, regelt das Order Routing. Für dringende Bestellungen oder bei Sync-Problemen lässt sich der Standort ändern.
- Fulfillment-Apps (Dropshipping, Logistikpartner, Print-on-Demand) können den Bestand desselben Produkts neben Ihren eigenen Standorten verwalten.

Für den Bulk-Editor nennt die Hilfe bis zu 50 Produkte auf einmal und für Kataloge über 100 Produkte den CSV-Weg. Zum Versand selbst: [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten).

## Was die Hilfe hier nicht beantwortet

Die Seiten, die ich gelesen habe, sagen nichts dazu, **wie viel Sicherheitsbestand** zu Ihrem Sortiment passt, wann Sie nachbestellen sollten und wie Sie die Nachfrage einschätzen. Auch welche Verfolgung zu Ihrem Shop passt, hängt von Sortiment und Ablauf ab. Die Anbindung an Warenwirtschaft oder Lagersoftware (ERP) bleibt offen, ebenso die Kosten dafür. Zur Rechtslage bei Lieferzeiten und Verfügbarkeitsangaben fragen Sie einen Anwalt, mehr zu den Pflichttexten: [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Beispiele aus der Praxis

Einen Fall, in dem ich die Lagerverwaltung eines Shops eingerichtet habe, gibt es unter meinen veröffentlichten Projekten nicht, und ich erfinde keinen. Am nächsten kommt [Elanora Skin](/de/projects/elanora-skin): Dort habe ich im Rahmen der laufenden Betreuung eine eigene Back-in-stock-Logik über die Klaviyo-API ergänzt. Das betrifft die Kundenbindung, nicht die Bestandsführung im Admin. Die Zahlen im Admin selbst pflegt in der Regel der Händler.

## Vor dem Start: eine Checkliste

1. Welche Produkte werden **verfolgt**, welche nicht (digital, Dienstleistung, Geschenkkarte)?
2. Ist **Track quantity** an allen verfolgten Produkten und Varianten eingeschaltet?
3. Stimmen die **Startmengen**, oder gibt es eine Zählung als Ausgangspunkt?
4. Was soll bei null passieren: **Stop selling** oder **Continue selling**, und gilt das für Vorbestellungen bewusst?
5. Sollen ausverkaufte Produkte sichtbar bleiben oder ausgeblendet werden?
6. Wer darf Mengen ändern, und wird bei Korrekturen ein **Grund** eingetragen?
7. Bei mehreren Standorten: Welcher Standort **erfüllt Online-Bestellungen**, und hat er Bestand?
8. Haben Sie mit einer **Testbestellung** geprüft, dass der Bestand sinkt und nach der Stornierung zurückkommt?

## Wann ein Entwickler hilft

Die Grundeinstellungen setzen Sie selbst. Hilfe lohnt sich, wenn Bestände aus einem anderen System übernommen werden sollen, wenn Kollektionen und Theme ausverkaufte Produkte sauber behandeln sollen, wenn Back-in-stock-Mails oder eine eigene Anzeige „nur noch X Stück" gebaut werden, wenn ein Lager- oder ERP-System per API angebunden wird oder wenn mehrere Standorte und Fulfillment-Apps zusammenspielen müssen. Verwandt sind [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) und [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen). Danach gehört das Setup in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Muss ich den Bestand für jedes Produkt führen?** Nein. Laut Hilfe können digitale Produkte, Dienstleistungen, Produkte auf Bestellung und Geschenkkarten oft ohne Verfolgung laufen.

**Was ist der Unterschied zwischen Available und On hand?** On hand ist die Summe aus Committed, Unavailable und Available. Available ist der Teil, den Kunden kaufen können.

**Kann ich bei null weiter verkaufen?** Ja, mit **Continue selling when out of stock**, sofern die Verfolgung eingeschaltet ist. In Shopify POS gilt die Einstellung nicht.

**Wie lange sehe ich den Verlauf der Änderungen?** Im Admin die letzten 180 Tage je Produkt oder Variante. Für ältere Daten gibt es den Bericht Inventory adjustment changes.

**Kann ich ausverkaufte Produkte ausblenden?** Ja, über Kollektionsbedingungen, Apps oder Shopify Flow. Die Verfolgung muss eingeschaltet sein.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quellcode und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Was ich sonst für Shops tue, steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv) · [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
