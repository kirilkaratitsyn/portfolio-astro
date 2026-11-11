---
order: 15
title: "White Canvas Earth"
seoTitle: "White Canvas Earth: Shopify-B2B-Großhandel und Versand"
summary: "Shopify-Arbeit für eine Marke für handgemachte Kleidung: ein natives B2B-Großhandelsbereich, in dem aus einem Antrag ein Unternehmen zur Freigabe wird, ein reiner B2B-Katalog mit funktionierenden Filtern, ein Mindestbestellwert-Panel und Großhandelsversand pro Stück im Basic-Tarif."
brandSummary: "White Canvas Earth ist eine Marke für handgemachte Damenkleidung aus Indore, Indien, und verkauft über einen eigenen Shopify-Shop."
brandDescription: "White Canvas Earth ist eine Marke für Damenkleidung. Der Shop läuft auf dem Atelier-Theme, mit einer Storefront für Endkunden und seit 2026 einem Großhandelsbereich für Boutiquen, Multibrand-Shops und Distributoren."
image: "/source/desktop/white-canvas-earth-desktop.webp"
mobileImage: "/source/mobile/white-canvas-earth-mobile.webp"
liveUrl: "https://whitecanvasearth.com/"
tags:
  - "B2B"
  - "Großhandel"
  - "Versand"
  - "Redesign-Seiten"
challenge: "Die Marke wollte aus demselben Shop im Großhandel verkaufen, ohne Großhandels-App: Käufer beantragen den Zugang, das Team gibt sie von Hand frei, und freigegebene Käufer sehen Großhandelspreise, eine Mindestbestellung und Versandkosten pro Stück. Der Shop hat einen Basic-Tarif, in dem die üblichen Werkzeuge für eigene Versandlogik gesperrt sind."
scope:
  - "Die Seiten About, Craft, Contact und Wholesale im Atelier-Theme neu gestalten."
  - "Die technische SEO des Shops korrigieren."
  - "Einen nativen B2B-Großhandelsbereich bauen: Antrag, Freigabe, Katalog und Warenkorbregeln."
  - "Großhandelsversand einrichten, der im Basic-Tarif pro Stück gezählt wird."
solution:
  - "Den Großhandelsantrag als gestaltetes Formular im Theme gebaut, das ein verborgenes Shopify-Forms-Embed steuert, sodass jeder Antrag unter Customers → Companies zur Freigabe oder Ablehnung landet, statt als E-Mail anzukommen. Ein freigegebener Käufer sieht statt des Formulars eine kompakte Firmenplakette."
  - "Die Fehler behoben, die Anträge still verloren: Das Länderfeld von Forms war ein eigenes Steuerelement und wurde nie gesetzt, deshalb wurde jeder Antrag mit dem Standardland gespeichert, und Postleitzahlen aus UK, AU und CA wurden mit 422 abgelehnt. Verborgene Pflichtfelder der Rechnungsadresse machten den Absende-Button wirkungslos, und das Absenden hing in einem Hintergrund-Tab auf „Submitting“, weil requestAnimationFrame dort nicht läuft. Liefer- und Rechnungsadresse haben getrennte Feldsätze, Land, Telefon, Name und Bundesland werden jetzt in beide übernommen."
  - "Den Großhandelskatalog auf ein Kollektions-Template gelegt, sichtbar nur für B2B-Kunden. Storefront-Filter funktionieren nur auf Kollektions- und Suchtemplates, eine in einer Seiteneinstellung gewählte Kollektion ließe sich nicht filtern."
  - "Das Mindestbestellwert-Panel in Liquid gebaut: Fortschritt bis zur Schwelle aus den Theme-Einstellungen, im Warenkorb und in einem Banner, der Checkout-Button bleibt aus, bis die Warenkorbsumme sie erreicht. Die Warenkorb-Section wird bei jeder Mengenänderung vom Server neu gerendert, und B2B-Käufer bekommen immer eine Warenkorbseite statt einer Schublade."
  - "Großhandelspreise aus dem Theme genommen: Die Preisberechnung wurde aus dem Preis-Snippet entfernt, sodass die Preise aus dem B2B-Katalog kommen, Produktempfehlungen laufen im B2B-Kontext und Großhandelskäufer bekommen eine eigene Ankündigungsleiste. Der Großhandel bleibt in USD, deshalb ist die Weiterleitung türkischer Besucher in den lokalen Shop für B2B-Kunden abgeschaltet."
  - "Großhandelsversand pro Stück im Basic-Tarif umgesetzt. Shopify Functions für den Versand brauchen Plus, und Tarif-Apps pro Stück hängen an der Versandberechnung durch den Carrier, die Basic nicht hat. Deshalb habe ich über die Admin-API für alle 250 Varianten der Großhandelskollektion (25 Produkte, vorher alle mit 0 kg) ein echtes Gewicht gesetzt und auf einem eigenen Lieferprofil Wholesale drei Gewichtsstufen gebaut (bis 10 kg, 10,01–15 kg, ab 15,01 kg)."
  - "Die Redesign-Seiten und den Katalog überarbeitet: About und Craft, Contact, Wholesale, ein Karussell mit ähnlichen Produkten, Größensortierung im Picker und im Quick Add, die Zuordnung der Filter und den Upsell-Block, der Produkte nach Name und Kollektion auswählt."
  - "Technische SEO korrigiert: Canonical-URLs nach Request-Pfad mit Erhalt der Sprache, noindex auf paginierten Kollektionsseiten, Meta-Tags für Variantenseiten und eine Regel in der robots.txt gegen .atom-Feeds. Für die Geschwindigkeit die Styles aus dem Shopify-Header verzögert geladen und Slideshow und Hintergrundvideo korrigiert; gemessen wurde nicht."
outcome:
  - "Ein Großhandelsantrag wird jetzt in Shopify zu einem Unternehmen, das auf Freigabe wartet, mit dem richtigen Land und der richtigen Adresse."
  - "Anträge aus Großbritannien, Australien und Kanada werden nicht mehr abgelehnt."
  - "Der Checkout bleibt unter der Mindestbestellung gesperrt, und der Warenkorb zeigt, wie weit der Käufer ist."
  - "Der Großhandelsversand wird im Basic-Tarif über Gewichtsstufen gezählt, ohne zusätzliche Versand-App."
stack:
  - "Shopify"
  - "Atelier-Theme"
  - "Liquid"
  - "JavaScript"
  - "Shopify B2B"
  - "Shopify Forms"
  - "Admin-API"
---
