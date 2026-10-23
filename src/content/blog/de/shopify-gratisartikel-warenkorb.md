---
publishedAt: 2026-10-23
title: "Gratisartikel ab Bestellwert in Shopify: Rabatt, automatischer Rabatt oder eigene Logik"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Wie Sie in Shopify ein Geschenk ab einem Bestellwert anbieten, was „Kaufe X, erhalte Y“ kann, warum der Gratisartikel nicht automatisch im Warenkorb landet und wann eigene Logik nötig wird."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Rabatte
  - Gratisartikel
  - Warenkorb
---

„Ab 50 Euro bekommen Sie eine Probe gratis dazu“: Solche Aktionen sind schnell beschlossen und in Shopify auf den ersten Blick auch schnell eingerichtet. Der Haken zeigt sich erst im Warenkorb. Dieser Text erklärt, was Shopify von Haus aus kann, an welcher Stelle die Standardfunktion endet und wann sich eigene Logik lohnt. Er ist für Händler ohne technischen Hintergrund geschrieben.

## Vorab eine Einordnung

Alle Angaben zu Rabatten stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs und Funktionen ändern sich, prüfen Sie deshalb Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Ob und wie Sie Aktionen rechtlich korrekt bewerben, etwa mit Preisangaben, ist eine Frage für Ihren Rechtsanwalt.

## Drei Wege zum Gratisartikel

1. **Rabattcode:** Der Kunde gibt den Code an der Kasse ein.
2. **Automatischer Rabatt:** Der Rabatt greift, sobald die passenden Produkte im Warenkorb liegen.
3. **Eigene Logik im Theme oder über eine App:** Das Geschenk wird per Programmcode oder per App in den Warenkorb gelegt.

Die ersten beiden Wege gehören zur Standardfunktion „Kaufe X, erhalte Y“ (Buy X get Y). Den dritten brauchen Sie, wenn die Standardfunktion nicht das tut, was Sie sich vorstellen.

## Was „Kaufe X, erhalte Y“ kann

Laut Shopify-Hilfe legen Sie zwei Dinge fest: was der Kunde kauft („Customer buys“) und was er bekommt („Customer gets“). Dazu gilt:

- **Wert des Geschenks:** Die Artikel, die der Kunde bekommt, können gratis sein oder mit einem Prozentsatz bzw. einem Betrag je Artikel reduziert werden.
- **Pro Bestellung oder pro Artikel:** Der Rabatt kann einmal je Bestellung oder einmal je qualifizierendem Artikel gelten. Die Hilfe nennt als Beispiel einen Hut pro Bestellung oder einen pro T-Shirt.
- **Mindestanforderung:** Sie können eine Mindestmenge oder einen Mindestbestellwert verlangen. Der Betrag zählt nur Produktpreise, Versand und Steuern nicht.
- **Zielgruppe:** Alle Kunden, bestimmte Kunden, Kundensegmente oder bestimmte Märkte.
- **Zeitraum:** Start und Ende richten sich nach der Zeitzone Ihres Shops. Ohne Enddatum läuft der Rabatt nicht ab.
- **Nutzungsgrenzen:** Eine Höchstzahl je Bestellung; bei Rabattcodes zusätzlich eine Gesamtgrenze und eine Grenze pro Kunde.

## Der Haken: Das Geschenk legt sich nicht selbst in den Warenkorb

Der wichtigste Satz der Hilfe für diese Aktion lautet sinngemäß: Kunden müssen alle Artikel selbst in den Warenkorb legen. Der kostenlose oder rabattierte Artikel wird nie automatisch hinzugefügt.

Das heißt für Ihre Aktion: Wer „Ab 50 Euro gibt es ein Geschenk“ liest, muss das Geschenk selbst finden und einlegen. Erst dann greift der Rabatt. Das kann funktionieren, wenn das Geschenk ein normales Produkt in Ihrem Shop ist und die Aktion gut erklärt wird. Es funktioniert schlecht, wenn Kunden von einem Geschenk nichts wissen, weil sie den Hinweis nicht gesehen haben, oder wenn das Geschenk nicht einzeln zu sehen sein soll.

Weitere Punkte aus der Hilfe, die man leicht übersieht:

- **Zählung:** Nur Produkte im Teil „Customer buys“ zählen für die Mindestanforderung, und zwar zum vollen Preis vor anderen Rabatten. Artikel, die bereits durch einen kombinierbaren Rabatt reduziert sind, zählen gar nicht.
- **Guthaben und Geschenkkarten:** Geschenkkarten zählen mit, wenn sie in den gewählten Produkten oder Kollektionen liegen. Als Zahlungsmittel eingesetzte Geschenkkarten und Guthaben zählen nicht.
- **Lagerbestand:** Fällt der Bestand eines Gratisprodukts auf null, wird es als ausverkauft angezeigt.
- **Gleiches Produkt in beiden Bereichen:** Bei automatischen Rabatten wird der günstigere Artikel rabattiert, wenn dasselbe Produkt oder dieselbe Kollektion in beiden Bereichen steht.
- **Nach dem Kauf:** In der Verwaltung erstellte Rabatte gelten laut Hilfe nicht für Post-Purchase-Angebote an der Kasse.

## Kombinieren und Grenzen

Shopify kennt drei Rabattklassen: Produktrabatte, Bestellrabatte und Versandrabatte. Die Hilfe nennt unter anderem:

- Produkt- und Bestellrabatte werden in dieser Reihenfolge berechnet, danach folgen Versandrabatte.
- Bestellrabatte lassen sich mit kostenlosem Versand kombinieren, ebenso Produktrabatte mit kostenlosem Versand. Produktrabatte auf verschiedenen Artikeln lassen sich ebenfalls kombinieren.
- Mehrere Produktrabatte auf derselben Position brauchen Shopify Plus.
- Es sind höchstens 25 aktive automatische Rabatte möglich (inklusive App-Rabatte). Pro Bestellung können Kunden bis zu 5 Produkt- oder Bestellcodes und 1 Versandcode nutzen.
- Für Shops ohne Plus gilt laut Hilfe: Produkte in einem „Kaufe X, erhalte Y“-Rabatt sind für weitere Produktrabatte nicht zulässig.

Ob „Kaufe X, erhalte Y“ in Ihrer Konstellation mit anderen Aktionen zusammenspielt, sehen Sie deshalb erst im Test mit einem echten Warenkorb.

## Wenn die Standardfunktion nicht reicht

Wenn das Geschenk automatisch erscheinen soll, brauchen Sie etwas außerhalb dieser Standardfunktion: eine App oder eigene Entwicklung. Shopify nennt für kompliziertere Rabattlogik Rabatt-Apps aus dem Shopify App Store, etwa für gestaffelte Rabatte oder eigene Berechtigungsregeln. Für Entwickler gibt es Shopify Functions: Damit lassen sich neue Rabattarten anlegen, die Shopify berechnet, wenn ein Kunde ein Produkt in den Warenkorb legt. Laut der Entwicklerdokumentation können Stores auf jedem Tarif öffentliche Apps mit Functions nutzen, eigene (Custom) Apps mit Function-APIs dagegen nur mit Shopify Plus. Ob sich ein Geschenk damit automatisch in den Warenkorb legen lässt, sagen diese Seiten nicht; das hängt von der konkreten Lösung ab.

Wie ein Geschenk dann konkret in den Warenkorb kommt, hängt von der Lösung ab. Die Fragen, die vorher zu klären sind (aus meiner Praxis, nicht aus der Hilfe):

- Ist das Geschenk eine **echte Position** im Warenkorb, damit es in Bestellung, Lager und Versand auftaucht?
- Was passiert, wenn der Kunde **unter die Schwelle fällt** oder das Hauptprodukt entfernt? Verschwindet das Geschenk wieder?
- Wird der Preis **als Gratis erkennbar** angezeigt, etwa mit durchgestrichenem Preis, in jeder Sprache und jedem Markt?
- Was gilt bei **ausverkauftem Geschenk**?
- Läuft das **schnell**, ohne dass der Warenkorb bei jeder Änderung hängt?

## Ein Beispiel aus der Praxis

Für Elanora Skin habe ich eine Geschenk-Engine für den Warenkorb gebaut. Sie fügt Gratisprodukte als echte Positionen mit eigenem Titel, Bild und durchgestrichenem Preis hinzu und sendet sie in einem einzigen Warenkorb-Update, damit der Warenkorb schnell bleibt. Der Shop verkauft in 15 Märkten und zwei Sprachen, die Angebotslogik richtet sich nach Markt und Sprache. Mehr dazu im [Projekt](/de/projects/elanora-skin). Für Ihren Shop kann eine Standardfunktion völlig ausreichen; eigene Logik lohnt sich erst, wenn der Ablauf für Kunden sonst zu umständlich ist.

## So testen Sie die Aktion

- Warenkorb **knapp unter** und **knapp über** der Schwelle.
- Geschenk **vor** und **nach** dem Hauptprodukt eingelegt.
- Hauptprodukt wieder **entfernen**: Was passiert mit dem Geschenk?
- Kombination mit **Rabattcode** und kostenlosem Versand (siehe [Versand einrichten](/de/blog/shopify-versand-einrichten)).
- Jeden **Markt und jede Sprache**, die Sie bedienen ([Shopify Markets](/de/blog/shopify-markets-mehrere-laender)).
- **Smartphone** und Kasse bis zur Bestellübersicht.
- Geschenk **ausverkauft**.

## Wann ein Entwickler hilft

Für ein Geschenk, das der Kunde selbst einlegt, brauchen Sie keinen. Hilfe lohnt sich, wenn das Geschenk automatisch erscheinen soll, wenn Aktionen nach Markt oder Sprache variieren oder wenn mehrere Aktionen zusammenspielen. Wie ein Theme sauber angepasst wird, steht in [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization). Apps und Code gehören später in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kann Shopify das Geschenk automatisch in den Warenkorb legen?** Laut Hilfe nicht mit „Kaufe X, erhalte Y“: Kunden müssen alle Artikel selbst einlegen. Dafür braucht es eine App oder eigene Entwicklung.

**Kann ich ein Geschenk ab Bestellwert anbieten, ohne Code?** Ja, als automatischer Rabatt mit Mindestbestellwert, wenn der Kunde das Geschenk selbst einlegt.

**Zählen Versand und Steuern zum Mindestbestellwert?** Nein, laut Hilfe zählen nur Produktpreise.

**Was kostet eine eigene Lösung?** Das hängt von den Anforderungen ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und die Struktur der Seiten, und sage Ihnen, was auffällt. Dabei arbeite ich nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Was ich für Shops mache, finden Sie unter [Leistungen](/de/services) und bei [Shop-Umbau und Redesign](/de/services/shopify-redesign).

**Weiterlesen:** [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
