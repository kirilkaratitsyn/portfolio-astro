---
order: 2
title: Elanora Skin
seoTitle: "Elanora Skin: Shopify-Checkout-App und A/B-Tests"
summary: "Eine laufende Shopify-Partnerschaft seit Ende 2025: eine Checkout-App mit zwei Warenkorb-Validierungs-Functions und fünf Checkout-Blöcken, eine Geschenk-Engine im Warenkorb, ein A/B-Test eines Checkout-Countdowns pro Bestellung gezählt und Storefront-Logik für Märkte in neun Währungen."
brandSummary: élanora ist eine Skincare-Marke aus Breda, inspiriert von koreanischen Hautpflegetraditionen und westlicher Schlichtheit, die reine Inhaltsstoffe mit modernen Formeln für täglichen Self-Care verbindet.
brandDescription: élanora inszeniert Hautpflege als Verbindung aus wirksamer Pflege und einem täglichen Ritual der Ruhe. Die Marke kombiniert koreanische Skincare-Inspiration mit einer klareren westlichen Ästhetik und positioniert ihre Produkte rund um Glow, Routinen und zugänglichen Self-Care statt rein klinischer Beauty-Kommunikation.
image: /source/desktop/elanora-skin-desktop.webp
mobileImage: /source/mobile/elanora-skin-mobile.webp
liveUrl: https://elanoraskin.com/
tags:
  - "Laufende Betreuung"
  - "Checkout & Functions"
  - "A/B-Tests"
  - "Multi-Market"
challenge: "Der Shop verkauft in vielen Märkten und zwei Sprachen und fährt laufend neue Angebote. Geschenke, Preise und Labels mussten in Warenkorb und Checkout stimmig bleiben, jedes Angebot musste gegen eine Kontrollgruppe testbar sein, und der Checkout selbst musste einen Teil der Regeln tragen."
scope:
  - "Als laufender technischer Partner am Shopify-Storefront arbeiten, mit regelmäßigen Releases."
  - "Checkout-Erweiterungen und Warenkorb-Validierungs-Functions bauen."
  - "Angebotslogik mit Gratisgeschenken und Stufen bauen, mit A/B-Tests, die pro Bestellung gezählt werden."
  - "Neue Märkte mit eigener Währung und Preisliste einrichten."
  - "Die Kundenbindung mit einem Back-in-Stock-Flow über die Klaviyo-API und einem Hautpflege-Quiz ausbauen."
solution:
  - "Eine Checkout-App auf API 2026-07 mit sieben Erweiterungen gebaut: zwei Warenkorb-Validierungs-Functions und fünf Checkout-Blöcke. Eine Function lehnt einen Warenkorb ab, der nur Gratisgeschenke enthält. Sie erkennt die 15 Geschenkprodukte an der ID statt am Preis 0, sodass Entwurfs- und Ersatzbestellungen durchgehen. Die andere macht die Telefonnummer nur bei Lieferung nach Hongkong zur Pflicht und meldet den Fehler, bevor sich der PayPal-Button öffnet."
  - "Die Checkout-Blöcke gebaut: eine Versandschutz-Zeile, die der Käufer entfernen kann, der durchgestrichene Wert eines Gratisgeschenks in der Währung des Käufer-Marktes, ein Countdown, ein Trustpilot-Slider und ein Garantie-Panel."
  - "Die Geschenk-Engine für gestufte Angebote gebaut: Alle Geschenke eines Durchgangs gehen in einem /cart/add.js-Aufruf in den Warenkorb, Mengenänderungen in einem /cart/update.js über den Zeilenschlüssel, und die .js-Endpunkte ersetzten Weiterleitungen, die 500 KB HTML pro Hinzufügen lieferten. Lesezugriffe auf /cart.js pro Aktion sanken von 5 auf 2–3."
  - "Die A/B-Engine auf einer URL gebaut: Die Hälfte wird im Head vor dem Rendern entschieden, ohne Weiterleitung, und Bestellungen werden markiert. Beim Checkout-Countdown geht jeder Checkout über einen Hash seines Tokens in eine Hälfte. Als rund ein Viertel der iDEAL- und Bancontact-Bestellungen ihr Test-Tag verlor, wurde die Hälfte jeder Bestellung aus dem Token wiederhergestellt und stimmte bei 341 von 341 Bestellungen mit der erfassten überein. Der Bericht zählt jede Bestellung."
  - "Sieben neue Märkte vorbereitet (IS, AE, SA, QA, SG, HK, JP), jeweils mit eigener Preisliste, per Skript geschrieben, dazu Markt-Metafelder für die Schwellen für kostenlosen Versand und Geschenk. Für AED-Käufer setzt ein Skript das offizielle Dirham-Zeichen in rund 150 Geldausgaben ein und fällt bei einem Fehler auf „Dhs.“ zurück."
  - "Ein Back-in-Stock-Popup über die Klaviyo-Client-API gebaut, ein Hautpflege-Quiz mit vier Fragen, und einen Drift-Check, der vor einem Theme-Push jedes Feld auflistet, das sich ändern würde, bevor er eine Kundenänderung löscht."
outcome:
  - "Der Test des Checkout-Countdowns zeigte keinen Unterschied zwischen den Hälften: Bestellungen B zu A ×1,011, p 0,77."
  - "Ein Warenkorb nur mit Gratisgeschenken kommt nicht zur Zahlung, und eine Telefonnummer ist nur dort Pflicht, wo es nötig ist."
  - "Gratisgeschenke zeigen ihren Wert in der Währung des jeweiligen Marktes, und der Warenkorb macht pro Änderung weniger Aufrufe."
stack:
  - "Shopify"
  - "Shopify Functions"
  - "Checkout-UI-Erweiterungen"
  - "Liquid"
  - "JavaScript"
  - "A/B-Tests"
  - "Klaviyo-API"
screenshotCaptions:
  - "Laufende Shopify-Arbeit mit Fokus auf Angebote und Conversion."
  - "Geschenk- und Stufenlogik, die sich nach Markt und Sprache richtet."
  - "Back-in-Stock-Flow über die Klaviyo-API."
---
