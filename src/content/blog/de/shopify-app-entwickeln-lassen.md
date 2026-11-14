---
publishedAt: 2026-11-08
updatedAt: 2026-11-11
title: "Shopify-App entwickeln lassen: Wann eine Custom App sinnvoll ist und wann eine fertige App reicht"
seoTitle: "Shopify-App entwickeln lassen: Custom App oder fertige App?"
date: 8. November 2026
readingTime: 5 Min
excerpt: "Shopify-App entwickeln lassen oder fertige App nutzen? Drei Wege zur fehlenden Funktion, Zugriff und Pflege bei Custom Apps, Merkmale eines guten Angebots."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Apps
  - Custom App
---

Ihr Shop braucht eine Funktion, die Shopify nicht mitbringt: eine Verbindung zur Warenwirtschaft, eine eigene Rabattlogik, ein Zusatzfeld an der Kasse. Müssen Sie dafür eine Shopify-App entwickeln lassen? Oft nicht.

## Drei Wege, eine Funktion zu bekommen

1. **Fertige App aus dem Shopify App Store.** Die meisten Apps stammen laut Shopify-Hilfe von Drittentwicklern, die auch den Support leisten.
2. **Anpassung am Theme.** Vieles, was nach „App“ klingt, ist Theme-Arbeit: ein Abschnitt, ein Hinweis, ein Layout. Siehe [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization).
3. **Custom App.** Laut Shopify eine App, die Sie oder ein Entwickler ausschließlich für Ihren Shop bauen, anders als eine öffentliche App für viele Shops.

Meine Faustregel, keine Aussage von Shopify: Prüfen Sie von oben nach unten. Je weiter unten Sie landen, desto mehr Pflege fällt später an.

## Was eine Custom App laut Shopify kann

Laut Shopify-Hilfe können Custom Apps:

- Funktionen im Shopify-Admin ergänzen,
- über die Shopify-APIs direkt auf Ihre Shop-Daten zugreifen,
- Ihren Shop über die Storefront API auf andere Plattformen erweitern.

Verwaltet werden sie im **Dev Dashboard**. Für den Bau empfiehlt Shopify einen Shopify-Partner.

Zwei Bausteine:

- **Extensions** erweitern Bereiche wie Online-Shop, Kasse, Kundenkonto oder POS, zum Beispiel um ein zusätzliches Feld an der Kasse.
- **Functions** ändern die Logik im Hintergrund: einen eigenen Rabatttyp, Lieferoptionen, Zahlungsregeln.

Laut Hilfe wurden Shopify Scripts und der Script Editor am 30. Juni 2026 eingestellt, Scripts laufen in keinem Shop mehr. Rabatte, Versand und Zahlungsarten lassen sich seitdem über Apps mit Functions anpassen. Mehr zur Kasse: [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen).

## Fertige App oder Custom App: die Entscheidung

**Eine fertige App passt eher, wenn** die Funktion häufig gebraucht wird (Bewertungen, Abos, Bundles), Sie keine Besonderheiten brauchen und laufende Kosten akzeptabel sind. Achten Sie auf das Siegel **Built for Shopify**: Laut Shopify erfüllen solche Apps Mindestanforderungen bei Leistung, Design und Integration und dürfen die Geschwindigkeit des Shops nicht um mehr als 10 Performance-Punkte senken.

**Eine Custom App passt eher, wenn** Ihr Ablauf einzigartig ist, Sie Daten zwischen Shop und einem eigenen System bewegen müssen oder eine fertige App mehrere Dinge nur halb löst. Sie zahlen einmal für den Bau und tragen danach die Pflege.

Kosten einer fertigen App: Die meisten laufen über die Shopify-Rechnung, manche Drittanbieter berechnen direkt und getrennt davon. Prüfen Sie das vor der Installation.

## Zugang und Datenschutz bei Custom Apps

- **Zugriffsrechte:** Der Entwickler legt über API-Scopes fest, auf welche Daten und Funktionen die App zugreift. Fragen Sie, warum jeder Scope nötig ist.
- **Installationslink:** Der Link gilt nur für Ihren Shop und läuft laut Shopify nach sieben Tagen ab. Der Installationsbildschirm zeigt, auf welche Daten die App zugreift.
- **Kein Passwort weitergeben:** Ein Entwickler mit Collaborator-Konto kann Custom Apps für Sie installieren, wenn Sie die Berechtigung „Apps und Kanäle verwalten und installieren“ geben und „App-Gebühren genehmigen“ aktivieren. Mehr dazu: [Shopify-Entwickler wechseln](/de/blog/shopify-entwickler-wechseln).
- **Personenbezogene Daten:** Für Custom Apps mit Zugriff auf bestimmte personenbezogene Daten (Level 2 PII) muss Ihr Shop laut Hilfe mindestens im Tarif Grow sein. Ob und wie Sie Kundendaten verarbeiten dürfen, klärt Ihre Rechtsberatung.
- **Zugriffstoken:** Bei Apps aus dem Dev Dashboard erzeugt der Entwickler das Token selbst. Aus dem Admin kopieren lässt es sich nicht.

## Pflege nicht vergessen

Laut Shopify lösen Apps, die nicht mehr unterstützt werden, Warnungen aus. Sie gehen an den Entwickler, dessen Konto mit der App verknüpft ist. Klären Sie vorab, wer die App pflegt und wer die Warnungen bekommt.

Eine gelöschte Custom App lässt sich laut Hilfe nicht wiederherstellen. Zum Deaktivieren reicht das Deinstallieren. Zur laufenden Pflege: [Shopify Wartung und Betreuung](/de/blog/shopify-wartung-betreuung).

## Woran Sie ein gutes Angebot erkennen

- **Zuerst die Frage, ob es eine App braucht** oder ob eine fertige App oder eine Theme-Anpassung reicht.
- **Klarer Umfang:** was die App tut, was nicht, wie Sie abnehmen.
- **Begründete Zugriffsrechte** statt „alles freigeben“.
- **Kleine, einzeln prüfbare Schritte**, getestet außerhalb des Live-Shops.
- **Übergabe und Dokumentation:** Wo liegt der Code, wem gehört das Entwickler-Konto?
- **Festpreis nach dem Briefing** statt einer Zahl ohne Blick in den Shop.

## Ein Beispiel aus der Praxis

Bei [Elanora Skin](/de/projects/elanora-skin) habe ich drei Dinge gebaut:

- eine Geschenk-Engine im Warenkorb, die Gratisprodukte als echte Positionen hinzufügt,
- eine Checkout-App mit sieben Erweiterungen: zwei Warenkorb-Validierungs-Functions und fünf Checkout-Blöcke, darunter eine entfernbare Versandschutz-Zeile und ein Bewertungsblock,
- einen eigenen Back-in-Stock-Flow über die Klaviyo API.

Die App ist nur für diesen Shop gebaut und steht nicht im App Store. Außerdem veröffentliche ich eine eigene App im Shopify App Store, [Reviews Core](https://apps.shopify.com/reviews-core).

## Häufige Fragen

**Brauche ich für jede Zusatzfunktion eine App?** Nein. Prüfen Sie zuerst Shopify-Bordmittel, Theme-Anpassung und fertige Apps.

**Kann ich eine Custom App später in den App Store stellen oder für andere Shops nutzen?** Laut Shopify lassen sich Custom Apps nur in Shops derselben Organisation installieren, nicht für andere Händler. Eine Veröffentlichung ist ein eigenes Projekt.

**Was passiert, wenn der Entwickler nicht mehr verfügbar ist?** Code-Zugang und Dokumentation gehören deshalb in die Vereinbarung. Rechte am Code regelt der Vertrag.

**Was kostet das?** Das hängt vom Umfang ab. Bei mir gibt es nach dem Briefing ein Angebot zum Festpreis.

## Brauchen Sie wirklich eine App?

Schicken Sie mir Ihre Shop-Adresse für den [kostenlosen Shop-Check](#contact). Ich sage Ihnen, ob eine fertige App, eine Theme-Anpassung oder etwas Eigenes sinnvoll ist. Für laufende Unterstützung: [Shopify-Betreuung](/de/services/shopify-betreuung) mit klarem Umfang.

**Weiterlesen:** [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Shopify-Entwickler wechseln](/de/blog/shopify-entwickler-wechseln) · [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) · [Shopify-Shop optimieren lassen](/de/blog/shopify-shop-optimieren-lassen) · [Shopify Plus: Was der Tarif freischaltet](/de/blog/shopify-plus-wann-lohnt)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
