---
publishedAt: 2026-10-23
title: "Gratisartikel ab Bestellwert in Shopify: Rabatt, automatischer Rabatt oder eigene Logik"
date: 23. Oktober 2026
readingTime: 6 Min
excerpt: "Gratisartikel ab Bestellwert in Shopify: was „Kaufe X, erhalte Y“ kann, warum das Geschenk nicht selbst im Warenkorb landet und wann eigene Logik nötig ist."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Rabatte
  - Gratisartikel
  - Warenkorb
---

Einen Gratisartikel ab Bestellwert richten Sie in Shopify schnell ein, etwa „Ab 50 Euro bekommen Sie eine Probe gratis dazu“. Der Haken zeigt sich im Warenkorb: Das Geschenk landet dort nicht von selbst.

## Vorab eine Einordnung

Alle Angaben zu Rabatten stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs und Funktionen ändern sich, prüfen Sie deshalb Ihren Admin. Wie Sie Aktionen rechtlich korrekt bewerben, klärt Ihr Rechtsanwalt.

## Drei Wege zum Gratisartikel

1. **Rabattcode:** Der Kunde gibt den Code an der Kasse ein.
2. **Automatischer Rabatt:** Der Rabatt greift, sobald die passenden Produkte im Warenkorb liegen.
3. **Eigene Logik im Theme oder über eine App:** Programmcode oder eine App legt das Geschenk in den Warenkorb.

Die ersten beiden Wege gehören zur Standardfunktion „Kaufe X, erhalte Y“ (Buy X get Y). Den dritten brauchen Sie, wenn die Standardfunktion nicht reicht.

## Was „Kaufe X, erhalte Y“ kann

Laut Shopify-Hilfe legen Sie fest, was der Kunde kauft („Customer buys“) und was er bekommt („Customer gets“). Dazu gilt:

- **Wert des Geschenks:** Die Artikel sind gratis oder um einen Prozentsatz bzw. einen Betrag je Artikel reduziert.
- **Pro Bestellung oder pro Artikel:** Der Rabatt gilt einmal je Bestellung oder einmal je qualifizierendem Artikel. Beispiel der Hilfe: ein Hut pro Bestellung oder einer pro T-Shirt.
- **Mindestanforderung:** Mindestmenge oder Mindestbestellwert. Der Betrag zählt nur Produktpreise, Versand und Steuern nicht.
- **Zielgruppe:** Alle Kunden, bestimmte Kunden, Kundensegmente oder bestimmte Märkte.
- **Zeitraum:** Start und Ende richten sich nach der Zeitzone Ihres Shops. Ohne Enddatum läuft der Rabatt nicht ab.
- **Nutzungsgrenzen:** Eine Höchstzahl je Bestellung; bei Rabattcodes zusätzlich eine Gesamtgrenze und eine Grenze pro Kunde.

## Der Haken: Das Geschenk legt sich nicht selbst in den Warenkorb

Laut Hilfe müssen Kunden alle Artikel selbst in den Warenkorb legen. Der kostenlose oder rabattierte Artikel wird nie automatisch hinzugefügt.

Wer „Ab 50 Euro gibt es ein Geschenk“ liest, muss das Geschenk also selbst finden und einlegen. Das kann funktionieren, wenn das Geschenk ein normales Produkt in Ihrem Shop ist und die Aktion gut erklärt wird. Es funktioniert schlecht, wenn Kunden den Hinweis übersehen oder wenn das Geschenk nicht einzeln zu sehen sein soll.

Weitere Regeln aus der Hilfe:

- **Zählung:** Für die Mindestanforderung zählen nur Produkte aus „Customer buys“, zum vollen Preis vor anderen Rabatten. Artikel, die ein kombinierbarer Rabatt bereits reduziert, zählen nicht.
- **Guthaben und Geschenkkarten:** Geschenkkarten zählen mit, wenn sie in den gewählten Produkten oder Kollektionen liegen. Als Zahlungsmittel eingesetzte Geschenkkarten und Guthaben zählen nicht.
- **Lagerbestand:** Fällt der Bestand eines Gratisprodukts auf null, wird es als ausverkauft angezeigt.
- **Gleiches Produkt in beiden Bereichen:** Bei automatischen Rabatten wird dann der günstigere Artikel rabattiert.
- **Nach dem Kauf:** In der Verwaltung erstellte Rabatte gelten laut Hilfe nicht für Post-Purchase-Angebote an der Kasse.

## Kombinieren und Grenzen

Shopify kennt drei Rabattklassen: Produktrabatte, Bestellrabatte und Versandrabatte. Laut Hilfe gilt unter anderem:

- Produkt- und Bestellrabatte werden in dieser Reihenfolge berechnet, danach folgen Versandrabatte.
- Bestellrabatte und Produktrabatte lassen sich jeweils mit kostenlosem Versand kombinieren. Produktrabatte auf verschiedenen Artikeln lassen sich ebenfalls kombinieren.
- Mehrere Produktrabatte auf derselben Position brauchen Shopify Plus.
- Höchstens 25 automatische Rabatte können aktiv sein (inklusive App-Rabatte). Pro Bestellung können Kunden bis zu 5 Produkt- oder Bestellcodes und 1 Versandcode nutzen.
- Ohne Plus gilt laut Hilfe: Produkte in einem „Kaufe X, erhalte Y“-Rabatt sind für weitere Produktrabatte nicht zulässig.

Ob die Aktion mit Ihren anderen Rabatten zusammenspielt, sehen Sie erst im Test mit einem echten Warenkorb.

## Wenn die Standardfunktion nicht reicht

Soll das Geschenk automatisch erscheinen, brauchen Sie eine App oder eigene Entwicklung.

- **Rabatt-Apps:** Shopify nennt für kompliziertere Rabattlogik Apps aus dem Shopify App Store, etwa für gestaffelte Rabatte oder eigene Berechtigungsregeln.
- **Shopify Functions:** Entwickler legen damit neue Rabattarten an, die Shopify berechnet, wenn ein Kunde ein Produkt in den Warenkorb legt. Laut Entwicklerdokumentation können Stores auf jedem Tarif öffentliche Apps mit Functions nutzen, eigene (Custom) Apps mit Function-APIs nur mit Shopify Plus.

Ob sich ein Geschenk damit automatisch einlegen lässt, sagen diese Seiten nicht. Das hängt von der Lösung ab. Diese Fragen klären Sie vorher (aus meiner Praxis, nicht aus der Hilfe):

- Ist das Geschenk eine **echte Position** im Warenkorb, damit es in Bestellung, Lager und Versand auftaucht?
- Was passiert, wenn der Kunde **unter die Schwelle fällt** oder das Hauptprodukt entfernt?
- Wird der Preis **als Gratis erkennbar** angezeigt, etwa durchgestrichen, in jeder Sprache und jedem Markt?
- Was gilt bei **ausverkauftem Geschenk**?
- Läuft das **schnell**, ohne dass der Warenkorb bei jeder Änderung hängt?

## Ein Beispiel aus der Praxis

Für Silk Tallow, eine natürliche Hautpflegemarke, habe ich eine Mystery-Gift- und Free-Gift-Logik für den Warenkorb gebaut. Die Geschenke aktualisieren sich ohne Neuladen der Seite, die Logik sitzt im bestehenden Design der Storefront und deckt die Warenkorb-Regeln und Sonderfälle jeder Aktion ab. Mehr dazu im [Projekt](/de/projects/silk-tallow).

## So testen Sie die Aktion

- Warenkorb **knapp unter** und **knapp über** der Schwelle.
- Geschenk **vor** und **nach** dem Hauptprodukt eingelegt.
- Hauptprodukt wieder **entfernen**: Was passiert mit dem Geschenk?
- Kombination mit **Rabattcode** und kostenlosem Versand (siehe [Versand einrichten](/de/blog/shopify-versand-einrichten)).
- Jeden **Markt und jede Sprache**, die Sie bedienen ([Shopify Markets](/de/blog/shopify-markets-mehrere-laender)).
- **Smartphone** und Kasse bis zur Bestellübersicht.
- Geschenk **ausverkauft**.

## Wann ein Entwickler hilft

Für ein Geschenk, das der Kunde selbst einlegt, brauchen Sie keinen. Eigene Logik lohnt sich erst, wenn der Ablauf für Kunden sonst zu umständlich ist: Das Geschenk soll automatisch erscheinen, Aktionen variieren nach Markt oder Sprache oder mehrere Aktionen spielen zusammen. Siehe [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) und für die laufende Pflege [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kann Shopify das Geschenk automatisch in den Warenkorb legen?** Mit „Kaufe X, erhalte Y“ laut Hilfe nicht. Dafür braucht es eine App oder eigene Entwicklung.

**Kann ich ein Geschenk ab Bestellwert anbieten, ohne Code?** Ja, als automatischer Rabatt mit Mindestbestellwert, wenn der Kunde das Geschenk selbst einlegt.

**Zählen Versand und Steuern zum Mindestbestellwert?** Nein, laut Hilfe zählen nur Produktpreise.

**Was kostet eine eigene Lösung?** Das hängt von den Anforderungen ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Mehr unter [Leistungen](/de/services) und [Shop-Umbau und Redesign](/de/services/shopify-redesign).

**Weiterlesen:** [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Rabattcode oder automatischer Rabatt](/de/blog/shopify-rabattcodes-automatische-rabatte) · [Shopify-App entwickeln lassen](/de/blog/shopify-app-entwickeln-lassen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
