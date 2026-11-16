---
order: 9
title: Petaljet
seoTitle: "Petaljet: Shopify-Box-Builder und Suche für den Großhandel"
summary: "Laufende Shopify-Arbeit für Petaljet, einen Blumen-Großhändler: Die Shop-Suche findet jetzt, was Floristen eintippen, Boxen mit Lieferdatum gehen in einem Schritt in den Warenkorb, und Preise sehen nur Kunden mit Konto."
brandSummary: Petaljet ist ein Großhandelsanbieter für Blumen für Floristen und professionelle Designer und liefert farm-direct Blüten in den gesamten USA für Hochzeiten, Events und laufende Floral-Programme.
brandDescription: Petaljet ist auf den B2B-Einkauf von Blumen ausgerichtet und bedient Floristen, Event-Designer und andere professionelle Käufer. Die Marke betont verlässliche Versorgung, Sortimentstiefe und einen Workflow, der wiederkehrende Bestellungen, große Events und tägliche Floral-Operations mit weniger Reibung unterstützt.
image: /source/desktop/petaljet-desktop.webp
mobileImage: /source/mobile/petaljet-mobile.webp
liveUrl: https://petaljet.com/
tags:
  - "Produkt-Builder"
  - "Shop-Suche"
  - "Großhandel"
challenge: "Petaljet verkauft Blumen im Großhandel an Floristen und Eventdesigner. Der Shop brauchte dafür gemachte Bestellwerkzeuge: Boxen, die aus dem Katalog mit einem Lieferdatum zusammengestellt werden, eine Suche, die findet, was Käufer wirklich eintippen, und Preise, die nur Käufer mit Konto sehen."
scope:
  - "Box-Builder für Großhandelskäufer bauen."
  - "Die Shop-Suche so reparieren, dass Wortteile und Synonyme Produkte finden."
  - "Preise überall vor nicht angemeldeten Besuchern verbergen, auch in der Suche."
  - "Technische SEO nach einer Checkliste korrigieren und wichtige Seiten beschleunigen."
  - "Als laufender Support-Partner dabeibleiben."
solution:
  - "Die Build Your Own Blooms Box gebaut: acht Positionen, je Position eine Sorte und Farbe aus einer Liste, eine Foto-Collage, die der Auswahl folgt, und ein Boxpreis, der sich neu berechnet. Die ganze Box geht in einem /cart/add.js-Aufruf in den Warenkorb, jede Zeile mit privaten Bundle-Eigenschaften, und Warenkorb und Mini-Warenkorb fassen die Zeilen wieder zu einer Box zusammen."
  - "Das Lieferdatum in den Builder gelegt: Der Kalender der Lieferdatum-App ist eingebettet, die Box lässt sich ohne Datum nicht hinzufügen, und Datum und Zeit landen in den Eigenschaften jeder Zeile. Der Kalender bleibt auch auf dem Handy auf dem Bildschirm."
  - "Einen Nelkenboxen-Builder für ein Produkt gebaut: verborgene Varianten in der Liste und eine Foto-Collage mit nummerierten Positionen."
  - "Die Shop-Suche repariert. Shopifys Suche ignoriert * in title: und tag:, deshalb fand die Dropdown-Suche „f269 carna“, während die Ergebnisseite 0 zeigte. Die Ergebnis-Anfrage wird jetzt aus der Suggest-Antwort gebaut, mit Stoppwörtern, Singularformen, Synonymen, Produkttyp und einer Tippfehler-Korrektur, die kurze Wörter in Ruhe lässt. Eine Playwright-Suite läuft gegen das Live-Theme."
  - "Ein Preisleck geschlossen: Die Vorschlagssuche und die JSON-Ansicht der Suche zeigten nicht angemeldeten Besuchern Preise, beide verbergen sie jetzt."
  - "Technische SEO nach einer Checkliste korrigiert: noindex für URLs mit Parametern, eigene JSON-LD-Snippets für Startseite, Kollektion, Artikel und Produkt, robots.txt-Regeln sowie Meta- und H1-Vorlagen für Kollektionen. Für die Geschwindigkeit an den Bildern des Bewertungs-Widgets gearbeitet, dazu ein Hero-Preload und Critical CSS inline."
outcome:
  - "Wer „christmas“ sucht, findet jetzt 157 Produkte statt 0, bei „premium roses“ 269 statt 5 und bei „carna“ 63 statt 0 (geprüft am 30. und 31. Oktober 2026)."
  - "Großhandelspreise sehen nur angemeldete Kunden, auch über die Suche."
  - "Eine Box geht in einem Schritt in den Warenkorb und erscheint dort als eine Position."
stack:
  - "Shopify"
  - "Turbo-Theme"
  - "Liquid"
  - "JavaScript"
  - "Produkt-Builder"
  - "Playwright"
screenshotCaptions:
  - "Der Storefront auf dem Turbo-Theme."
  - "Ein Box-Builder, mit dem Floristen eine Bestellung aus dem Katalog zusammenstellen."
  - "Die Shop-Suche im Live-Shop."
industry: "Blumen-Großhandel"
period: "Laufende Betreuung"
highlights:
  - value: "157"
    label: "Treffer für „christmas“, vorher 0"
  - value: "269"
    label: "Treffer für „premium roses“, vorher 5"
  - value: "1"
    label: "Schritt, bis die Box im Warenkorb liegt"
needs:
  - need: "Boxen, die Floristen aus dem Katalog mit Lieferdatum zusammenstellen."
    answer: "Box-Builder mit Lieferdatum: Die Box geht in einem Schritt in den Warenkorb und erscheint dort als eine Position."
  - need: "Eine Suche, die findet, was Käufer wirklich eintippen."
    answer: "Die Suche findet Wortteile und Synonyme: „carna“ 63 Treffer statt 0, „christmas“ 157 statt 0."
  - need: "Preise nur für Käufer mit Konto."
    answer: "Nicht angemeldete Besucher sehen keine Preise, auch nicht über die Suche."
---
