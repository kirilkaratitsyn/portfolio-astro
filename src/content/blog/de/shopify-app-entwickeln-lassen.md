---
publishedAt: 2026-11-08
title: "Shopify-App entwickeln lassen: Wann eine Custom App sinnvoll ist und wann eine fertige App reicht"
seoTitle: "Shopify-App entwickeln lassen: Custom App oder fertige App?"
date: 8. November 2026
readingTime: 7 Min
excerpt: "Fehlt Ihrem Shop eine Funktion, gibt es drei Wege: fertige App, Theme-Anpassung oder eine eigene Custom App. Was jede Variante leistet, was bei Zugriff und Zugangsdaten zu beachten ist und woran Sie ein gutes Angebot erkennen."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Apps
  - Custom App
---

Ihr Shop braucht eine Funktion, die Shopify nicht mitbringt: eine Verbindung zu Ihrer Warenwirtschaft, eine eigene Rabattlogik, ein Zusatzfeld an der Kasse. Dann steht schnell die Frage im Raum, ob dafür eine App entwickelt werden muss. Oft nicht. Dieser Artikel sortiert die drei Wege, zeigt, was Shopify über eigene Apps sagt, und gibt Ihnen Fragen für das Gespräch mit einem Entwickler.

## Drei Wege, eine Funktion zu bekommen

1. **Fertige App aus dem Shopify App Store.** Die meisten Apps stammen laut Shopify-Hilfe nicht von Shopify selbst, sondern von Drittentwicklern. Bei Problemen wenden Sie sich an deren Entwickler.
2. **Anpassung am Theme.** Vieles, was nach „App“ klingt, ist Theme-Arbeit: ein Abschnitt, ein Hinweis, ein Layout. Siehe [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization).
3. **Custom App.** Laut Shopify ist das eine App, die Sie oder ein Entwickler ausschließlich für Ihren Shop bauen, im Gegensatz zu einer öffentlichen App für viele Shops.

Eine Faustregel aus der Praxis, keine Aussage von Shopify: Prüfen Sie die Reihenfolge von oben nach unten. Je weiter unten Sie landen, desto mehr müssen Sie später pflegen.

## Was eine Custom App laut Shopify kann

Nach der Shopify-Hilfe können Custom Apps Funktionen im Shopify-Admin ergänzen, direkt über die Shopify-APIs auf Ihre Shop-Daten zugreifen oder Ihren Shop über die Storefront API auf andere Plattformen erweitern. Verwaltet werden sie im **Dev Dashboard**, das Logs, Gesundheitswerte und Tests mit Entwicklungsshops bietet. Shopify schreibt außerdem, dass das Erstellen einer Custom App Entwicklungswissen erfordert und herausfordernd sein kann, und empfiehlt, dafür einen Shopify-Partner zu beauftragen.

Dazu gehören zwei Bausteine, die Sie kennen sollten:

- **Extensions** erweitern Bereiche wie Online-Shop, Kasse, Kundenkonto oder POS, zum Beispiel ein zusätzliches Feld an der Kasse.
- **Functions** passen die Logik im Hintergrund an, etwa einen eigenen Rabatttyp, Lieferoptionen oder Zahlungsregeln. Ein Hinweis aus der Hilfe: Shopify Scripts und der Script Editor wurden am 30. Juni 2026 eingestellt, Scripts laufen in keinem Shop mehr. Rabatte, Versand und Zahlungsarten lassen sich seitdem über Apps mit Functions anpassen. Wer noch eine Script-Lösung im Kopf hat, sollte das mit dem Entwickler klären.

Mehr zur Kasse: [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen).

## Fertige App oder Custom App: die Entscheidung

**Eine fertige App passt eher, wenn** die Funktion häufig gebraucht wird (Bewertungen, Abos, Bundles), Sie keine Besonderheiten brauchen und laufende Kosten akzeptabel sind. Ein Blick auf das Siegel **Built for Shopify**: Laut Shopify erfüllen solche Apps Mindestanforderungen bei Leistung, Design und Integration, darunter dürfen sie die Geschwindigkeit des Shops nicht um mehr als 10 Performance-Punkte senken. Das Siegel ersetzt keine eigene Prüfung, ist aber ein Hinweis.

**Eine Custom App passt eher, wenn** Ihr Ablauf wirklich einzigartig ist, Sie Daten zwischen Shop und einem eigenen System bewegen müssen oder eine fertige App mehrere Dinge halb löst. Dann zahlen Sie einmal für den Bau, tragen aber auch die Pflege.

Kosten einer fertigen App: Die meisten Apps werden über die Shopify-Rechnung abgerechnet, manche Drittanbieter berechnen direkt außerhalb von Shopify. Diese Beträge stehen dann nicht auf Ihrer Shopify-Rechnung, Sie verwalten sie getrennt. Prüfen Sie das vor der Installation.

## Zugang und Datenschutz bei Custom Apps

- **Zugriffsrechte:** Beim Erstellen legt der Entwickler über API-Scopes fest, auf welche Daten und Funktionen die App zugreifen darf. Fragen Sie nach, warum jeder Scope nötig ist.
- **Installationslink:** Für eine von einem Entwickler gebaute Custom App bekommen Sie einen Installationslink, der nur für Ihren Shop gilt und laut Shopify nach sieben Tagen abläuft. Auf dem Installationsbildschirm sehen Sie, auf welche Daten die App zugreift. Lesen Sie ihn, bevor Sie bestätigen.
- **Kein Passwort weitergeben:** Hat der Entwickler ein Collaborator-Konto, kann er Custom Apps für Sie installieren, wenn Sie die Berechtigung „Apps und Kanäle verwalten und installieren“ geben und „App-Gebühren genehmigen“ aktivieren. Collaborator haben laut Hilfe keinen Zugang zum Dev Dashboard, weil sie keine Rechte auf Organisationsebene haben. Wie der Zugang sicher läuft, steht in [Shopify-Entwickler wechseln](/de/blog/shopify-entwickler-wechseln).
- **Personenbezogene Daten:** Für Custom Apps mit Zugriff auf bestimmte personenbezogene Daten (Level 2 PII) muss Ihr Shop laut Hilfe mindestens im Tarif Grow sein. Ob und wie Sie Kundendaten verarbeiten dürfen, ist eine Rechtsfrage für Ihre Rechtsberatung.
- **Zugriffstoken:** Bei im Dev Dashboard erstellten Apps erzeugt der Entwickler das Zugriffstoken selbst, Sie können es nicht aus dem Admin kopieren und verschicken. Das ist normal.

## Pflege nicht vergessen

Eine Custom App ist kein einmaliges Projekt. Shopify weist darauf hin, dass Apps, die nicht mehr unterstützt werden, Warnungen auslösen. Die Warnungen gehen an den Entwickler, dessen Konto mit der App verknüpft ist. Klären Sie deshalb vorab: Wer pflegt die App, wer bekommt Warnungen, was passiert, wenn der Entwickler wegfällt? Eine gelöschte Custom App lässt sich laut Hilfe nicht wiederherstellen. Zum Deaktivieren reicht das Deinstallieren. Allgemein zu laufender Pflege: [Shopify Wartung und Betreuung](/de/blog/shopify-wartung-betreuung).

## Woran Sie ein gutes Angebot erkennen

- **Zuerst die Frage, ob es eine App braucht.** Ein ehrlicher Entwickler prüft vorher, ob eine fertige App oder eine Theme-Anpassung reicht.
- **Klar beschriebener Umfang:** was die App tut, was nicht, und wie Sie das abnehmen.
- **Begründete Zugriffsrechte** statt „alles freigeben“.
- **Kleine, einzeln prüfbare Schritte**, getestet außerhalb des Live-Shops.
- **Übergabe und Dokumentation:** Wo liegt der Code, wem gehört das Entwickler-Konto, wie sieht der Wechsel aus?
- **Festpreis nach dem Briefing** statt einer Zahl ohne Blick in den Shop.

## Ein Beispiel aus der Praxis

Bei [Elanora Skin](/de/projects/elanora-skin) habe ich eine Geschenk-Engine im Warenkorb gebaut, die Gratisprodukte als echte Positionen hinzufügt, Checkout-Blöcke ergänzt (darunter eine entfernbare Versicherungs-Extension und einen Bewertungsblock) und über die Klaviyo API einen eigenen Back-in-Stock-Flow gebaut. Das ist laufende Entwicklung am Storefront und am Checkout, die Beschreibung im Projektbericht sagt nichts über eine Custom App im Shopify-Sinne, deshalb stelle ich es nicht als solche dar. Außerdem veröffentliche ich eine eigene App im Shopify App Store, [Reviews Core](https://apps.shopify.com/reviews-core).

## Häufige Fragen

**Brauche ich für jede Zusatzfunktion eine App?** Nein. Prüfen Sie zuerst Shopify-Bordmittel, Theme-Anpassung und fertige Apps.

**Kann ich eine Custom App später in den App Store stellen oder für andere Shops nutzen?** Laut Shopify lassen sich Custom Apps nur in Shops derselben Organisation installieren, nicht für andere Händler. Für eine Veröffentlichung wäre ein anderer Weg nötig, das ist ein eigenes Projekt.

**Was passiert, wenn der Entwickler nicht mehr verfügbar ist?** Genau deshalb gehören Code-Zugang und Dokumentation in die Vereinbarung. Rechte am Code regelt der Vertrag, dazu berät eine Rechtsberatung.

**Was kostet das?** Das hängt vom Umfang ab. Bei mir gibt es nach dem Briefing ein Angebot zum Festpreis.

## Brauchen Sie wirklich eine App?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, und sage Ihnen ehrlich, ob eine fertige App, eine Theme-Anpassung oder etwas Eigenes sinnvoll ist. Wenn Sie laufende Unterstützung suchen: [Shopify-Betreuung](/de/services/shopify-betreuung) mit klarem Umfang.

**Weiterlesen:** [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Shopify-Entwickler wechseln](/de/blog/shopify-entwickler-wechseln) · [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) · [Shopify-Shop optimieren lassen](/de/blog/shopify-shop-optimieren-lassen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
