---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Shopify Abos einrichten: Voraussetzungen, Zahlarten, Kundenportal und typische Stolpersteine"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Shopify Abos einrichten: was die kostenlose App Shopify Subscriptions kann, welche Zahlungsanbieter und Themes nötig sind, wann ein Entwickler hilft."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Abos
  - Subscriptions
  - Zahlungsarten
---

„Kunden sollen unser Produkt regelmäßig geliefert bekommen, ohne jedes Mal neu zu bestellen.“ Das ist ein Abo. Shopify Abos einrichten Sie mit einer kostenlosen App von Shopify. Dabei spielen Zahlungsanbieter, Theme, Checkout-Hinweise und Versand zusammen.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs und Funktionen ändern sich, prüfen Sie Ihren Admin. Preise nenne ich nicht. Es geht nur um die Technik. Welche Angaben zu Laufzeit, Preis, Kündigung und Widerruf rechtlich nötig sind, klären Sie mit Ihrem Rechtsberater.

## Was ein Abo in Shopify ist

Die Hilfe führt Abos als eine von drei „Kaufoptionen“, neben Vorbestellungen und „Erst testen, dann zahlen“. Kunden kaufen ein Produkt zu einem vereinbarten Preis in einem festen Rhythmus, etwa täglich, wöchentlich oder monatlich.

Ohne Abo-App gibt es kein Abo. Die Hilfe nennt zwei Wege:

- **Eine App aus dem Shopify App Store**, die in den Checkout integriert ist, darunter die kostenlose App **Shopify Subscriptions** von Shopify selbst.
- **Eine eigene Lösung über die Subscription-API.** Dafür ist laut Hilfe Erfahrung im Umgang mit APIs nötig.

Bei der Abrechnung unterscheidet die Hilfe „Pay-as-you-go“ (Kunden zahlen laufend, etwa monatlich) und „Prepaid“ (eine Vorauszahlung für eine feste Zahl von Monaten).

## Was die App Shopify Subscriptions kann

Laut Hilfe können Sie damit:

- automatisch abgerechnete Abos anlegen, die wöchentlich, monatlich oder jährlich erneuert werden
- Pläne und Verträge ändern, überspringen, pausieren und kündigen
- Rabatte auf Abo-Produkte legen (Prozent, Betrag, „X kaufen, Y bekommen“ oder Festpreis)
- ein Abo-Widget im Shop und Abo-Details auf Produkt-, Warenkorb- und Danke-Seite zeigen
- E-Mail-Benachrichtigungen an Kunden schicken
- aktive, pausierte und gekündigte Abos auswerten

Einen **Abo-Plan** legen Sie unter **Apps** > **Subscriptions** > **Plans** > **Create plan** an. Laut Hilfe bestimmen Sie dabei:

- Titel und interne Beschreibung
- die Produkte und einen optionalen Rabatt
- den Lieferrhythmus (Woche, Monat oder Jahr)
- einen festen Abrechnungstag
- eine maximale Zahl an Bestellungen, nach der das Abo automatisch endet

Pläne lassen sich auch auf der Produktseite im Admin verwalten.

## Voraussetzungen

Hier liegen die meisten Stolpersteine. Laut Hilfe gilt:

- **Zahlungsanbieter:** Ihr Shop braucht einen unterstützten Anbieter. Genannt werden Shopify Payments, PayPal Express, Authorize.net, Adyen und Stripe. Die Verfügbarkeit hängt von Region und Anbieterbedingungen ab. Stripe ist nur für ausgewählte Händler verfügbar.
- **Zahlart des Kunden:** Kunden brauchen in der Regel eine Zahlart, die sich wiederkehrend belasten lässt. Lokale, manuelle oder Nicht-Kreditkarten-Zahlarten stehen für Abos möglicherweise nicht zur Verfügung. Ob Ihre Zahlart geht, sagt die Hilfe nicht. Mehr in [Zahlungsarten in Shopify für Deutschland](/de/blog/shopify-zahlungsarten-deutschland).
- **Theme:** Das Theme muss mit Sections und Blocks kompatibel sein. Die Hilfe nennt Online-Store-2.0-Themes von Shopify, die Horizon-Themes, Debut ab Version 15.0 und Brooklyn ab Version 17.0. Bei anderen Themes fragen Sie den Theme-Entwickler.
- **Verkaufskanäle:** Abos werden nur im Online Store, in Shopify POS, im Kanal Shop und in eigenen Storefronts unterstützt. Abo-Produkte ohne Einmalkauf-Option lassen sich nur im Online Store verkaufen.
- **Entwurfsbestellungen:** Abos funktionieren nicht mit Draft Orders.
- **Bundles:** Sie sind mit der App Shopify Subscriptions nicht kompatibel. Mehr in [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen).
- **Order-Edits-API:** Sie unterstützt keine Abos.
- **Rechte:** Mitarbeiter brauchen eine Rolle mit der Berechtigung für Apps und Vertriebskanäle.

## Abo-Widget und Produktseite

Laut Hilfe fügen Sie im Theme-Editor unter **Product information** den Block **Subscription widget** hinzu. Bei Online-Store-2.0-Themes sollte das Widget unter **App embeds** ausgeschaltet sein, damit es richtig angezeigt wird. Pro Produkt entscheiden Sie, ob es **nur als Abo** verkauft wird oder zusätzlich als Einmalkauf. Der Einbau in den Kaufbereich hängt vom Theme ab, siehe [Shopify-Theme anpassen](/de/blog/shopify-theme-customization).

## Checkout, Versand und Hinweise

**Erste und wiederkehrende Lieferungen:** Im Checkout wählen Kunden die Versandart für die erste Lieferung. Für die folgenden gilt laut Hilfe die günstigste verfügbare Versandart. Wiederkehrende Lieferungen werden getrennt abgerechnet und versendet. Zu Versandprofilen: [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten).

**Abrechnung:** Laut Hilfe wird der Kunde am Tag nach Fälligkeit um 10:00 Uhr Ihrer Shop-Ortszeit belastet.

**Hinweis im Checkout:** Enthält der Warenkorb ein Abo, zeigt der Checkout einen Pflichthinweis zur automatisch erneuernden Zahlung. Laut Hilfe lässt er sich **auf keinem Tarif entfernen**. Was Sie ändern können:

- „Abo-Vereinbarung“ und „Einwilligungstext“: nur Shopify-Plus-Händler
- Kündigungstext, Kündigungsanleitung und Kündigungsbedingungen (unter **Settings** > **Policies**): Händler aller Tarife

Die Hilfe rät, eigene Formulierungen vorher rechtlich prüfen zu lassen. Mehr zum Checkout: [Shopify-Checkout anpassen](/de/blog/shopify-checkout-anpassen).

**Kündigungsrichtlinie:** Mit dem ersten Abo legt Shopify eine Richtlinie zur Kündigung an. Ist sie leer, sehen Kunden eine Vorlage. Kunden müssen ihr beim Kauf zustimmen. Mehr dazu: [Rechtstexte und Richtlinien in Shopify](/de/blog/shopify-rechtstexte-richtlinien).

**Rabatte und Geschenkkarten:** Automatische Rabatte können auf Abo-Bestellungen angewendet werden. Shopify Scripts mit Rabatten auf Abo-Kosten oder Versand gelten laut Hilfe nur für die erste Zahlung, ebenso Geschenkkarten.

## Das Kundenportal

Kunden verwalten ihr Abo im Kundenkonto. Laut Hilfe können sie:

- Zahlungsdaten und Lieferadresse ändern
- Abos pausieren, fortsetzen oder kündigen
- kommende Bestellungen überspringen und frühere ansehen

Die Anmeldung läuft über die E-Mail-Adresse und einen sechsstelligen Code, ohne Passwort. Eine Kündigung kann laut Hilfe nicht rückgängig gemacht werden. Wer nur eine Pause will, pausiert das Abo.

Damit Kunden die Verwaltung finden, fügen Sie im Editor für Checkout und Konten Blöcke hinzu: eine eigene Seite **Subscription management**, Aktionsknöpfe auf den Seiten **Order** und **Order status** und einen Link auf der Danke-Seite.

Shopify Subscriptions schickt laut Hilfe drei Tage vor jeder wiederkehrenden Belastung eine Erinnerungs-E-Mail. Bei Abos über eine Drittanbieter-App gilt deren eigener Benachrichtigungsplan.

## Wenn Karten ablaufen

Mit Shopify Payments werden gespeicherte Kartendaten laut Hilfe über die Kartennetzwerke automatisch aktualisiert. Das senkt Zahlungsausfälle. Die Unterstützung ist in den USA weit verbreitet und variiert international. Bei anderen Anbietern müssen Kunden ihre Daten eventuell selbst aktualisieren. Klären Sie das mit dem Anbieter.

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nicht, **welche Produkte sich für ein Abo eignen**, wie hoch ein Abo-Rabatt sein sollte oder wie viele Kunden ein Abo behalten. Zu Gebühren heißt es nur, dass die App je nach Einrichtung zusätzliche Gebühren verursachen kann. Das prüfen Sie bei der App selbst.

## Beispiele aus der Praxis

Für [Reserve Kava](/de/projects/reserve-kava), eine Instant-Kava-Marke, habe ich auf der Produktseite eine Kaufauswahl mit Einmalkauf und monatlichem Abo gebaut. Laut Hilfe lassen sich Shopify-Bundles nicht mit Abos kombinieren. Deshalb muss vor dem Start klar sein, welche Kaufoptionen auf der Produktseite zusammenkommen.

## Vor dem Start: Checkliste

1. **Modell:** Pay-as-you-go oder Prepaid, und welche Produkte?
2. **App:** Shopify Subscriptions, Drittanbieter-App oder eigene Lösung?
3. **Zahlung:** Anbieter unterstützt, Zahlarten wiederkehrend belastbar?
4. **Theme:** Kompatibel, Abo-Widget am richtigen Platz?
5. **Bundles, Draft Orders, Order Edits:** Grenzen geprüft?
6. **Kündigungstext und Richtlinie:** Gepflegt und rechtlich geprüft?
7. **Echte Testbestellung:** Checkout-Hinweis, Bestätigungs-E-Mail, Kundenportal, erste Folgelieferung.

## Wann ein Entwickler hilft

Einen einfachen Abo-Plan legen Sie selbst in der App an. Hilfe lohnt sich, wenn:

- das Abo in die Produktseite eingebaut werden soll, etwa mit Einzel-, Mehrfach- und Abo-Auswahl
- Theme und Widget nicht zusammenpassen
- ein bestehendes Abo-System migriert werden soll
- Checkout und Kundenkonto angepasst werden müssen

Danach gehört die Einrichtung in die laufende Pflege, siehe [Shopify Wartung und Betreuung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Brauche ich eine App für Abos?** Ja, oder eine eigene Lösung über die API. Shopify Subscriptions ist kostenlos.

**Kann ich Abos mit Bundles kombinieren?** Laut Hilfe nicht mit der App Shopify Subscriptions.

**Welche Zahlungsanbieter brauche ich?** Shopify Payments, PayPal Express, Authorize.net, Adyen oder Stripe. Stripe nur für ausgewählte Händler.

**Können Kunden ihr Abo selbst kündigen?** Ja, im Kundenkonto. Eine Kündigung lässt sich laut Hilfe nicht rückgängig machen. Pausieren ist möglich.

**Kann ich den Abo-Hinweis im Checkout entfernen?** Nein, auf keinem Tarif. Einzelne Bausteine lassen sich ändern, manche nur mit Shopify Plus.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich sichtbare Daten, ohne Zugang zu Ihrem Konto. Was ich sonst für Shops mache, steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen) · [Zahlungsarten in Shopify für Deutschland](/de/blog/shopify-zahlungsarten-deutschland) · [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Geschenkkarten einrichten](/de/blog/shopify-geschenkkarten-gutscheine) · [Shopify E-Mail-Benachrichtigungen anpassen](/de/blog/shopify-email-benachrichtigungen) · [Shopify Produktvarianten anlegen](/de/blog/shopify-produktvarianten-optionen) · [Shopify Try before you buy](/de/blog/shopify-try-before-you-buy)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
