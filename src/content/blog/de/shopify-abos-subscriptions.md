---
publishedAt: 2026-10-23
title: "Shopify Abos einrichten: Voraussetzungen, Zahlarten, Kundenportal und typische Stolpersteine"
date: 23. Oktober 2026
readingTime: 8 Min
excerpt: "Wie Abos in Shopify funktionieren, was die kostenlose Shopify-Subscriptions-App kann, welche Zahlungsanbieter und Themes nötig sind, wie Versand und Checkout-Hinweise laufen und wann ein Entwickler hilft."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Abos
  - Subscriptions
  - Zahlungsarten
---

„Kunden sollen unser Produkt regelmäßig geliefert bekommen, ohne jedes Mal neu zu bestellen.“ Das ist ein Abo, und Shopify bietet dafür eine kostenlose App. Ganz ohne Vorbedingungen geht es aber nicht: Zahlungsanbieter, Theme, Checkout-Hinweise und Versand spielen zusammen. Dieser Text zeigt, was die Shopify-Hilfe dazu sagt, ohne technischen Hintergrund vorauszusetzen.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs und Funktionen ändern sich, prüfen Sie deshalb Ihren Admin. Preise für Apps, Gebühren oder Entwicklung nenne ich nicht. Welche Angaben zu Laufzeit, Preis, Kündigung und Widerruf bei einem Abo rechtlich nötig sind, ist keine Frage dieses Textes. Das klären Sie mit Ihrem Rechtsberater. Hier geht es nur um die Technik.

## Was ein Abo in Shopify ist

Die Hilfe führt Abos als eine von drei „Kaufoptionen“: Abos, Vorbestellungen und „Erst testen, dann zahlen“. Bei einem Abo kaufen Kunden ein Produkt zu einem vereinbarten Preis in einem festen Rhythmus, etwa täglich, wöchentlich oder monatlich. Als mögliche Vorteile nennt die Hilfe planbare Einnahmen, höhere Kundenbindung und Chancen für Cross- und Upselling.

Voraussetzung: Sie brauchen eine Abo-App. Ohne App gibt es kein Abo. Die Hilfe nennt zwei Wege:

- **Eine App aus dem Shopify App Store**, die in den Checkout integriert ist, darunter die kostenlose App **Shopify Subscriptions** von Shopify selbst.
- **Eine eigene Lösung über die Subscription-API.** Dafür ist laut Hilfe Erfahrung im Umgang mit APIs nötig.

Für den Abrechnungsrhythmus unterscheidet die Hilfe „Pay-as-you-go“ (Kunden zahlen laufend, etwa monatlich) und „Prepaid“ (eine Vorauszahlung für eine feste Zahl von Monaten).

## Was die App Shopify Subscriptions kann

Laut Hilfe können Sie damit:

- automatisch abgerechnete Abos anlegen, die wöchentlich, monatlich oder jährlich erneuert werden
- Pläne und Verträge ändern, überspringen, pausieren und kündigen
- Rabatte auf Abo-Produkte legen (Prozent, Betrag, „X kaufen, Y bekommen“ oder Festpreis)
- ein Abo-Widget im Shop anzeigen
- Abo-Details auf Produkt-, Warenkorb- und Danke-Seite zeigen
- E-Mail-Benachrichtigungen an Kunden schicken
- aktive, pausierte und gekündigte Abos auswerten

Einen **Abo-Plan** legen Sie unter **Apps** > **Subscriptions** > **Plans** > **Create plan** an. Dabei bestimmen Sie laut Hilfe Titel und interne Beschreibung, die Produkte, einen optionalen Rabatt, Lieferrhythmus (Woche, Monat oder Jahr), einen festen Abrechnungstag und eine maximale Zahl an Bestellungen, nach der das Abo automatisch endet. Pläne lassen sich auch direkt auf der Produktseite im Admin verwalten.

## Voraussetzungen

Hier liegen die meisten Stolpersteine. Laut Hilfe gilt:

- **Zahlungsanbieter:** Ihr Shop muss einen unterstützten Anbieter nutzen. Genannt werden Shopify Payments, PayPal Express, Authorize.net, Adyen und Stripe. Die Verfügbarkeit hängt von Region und Anbieterbedingungen ab. Stripe ist laut Hilfe nur für ausgewählte Händler verfügbar.
- **Zahlart des Kunden:** Kunden brauchen in der Regel eine Zahlart, die sich wiederkehrend belasten lässt. Lokale, manuelle oder Nicht-Kreditkarten-Zahlarten stehen für Abos möglicherweise nicht zur Verfügung. Ob eine bestimmte Zahlart bei Ihnen geht, sagt die Hilfe nicht. Hintergrund zu Zahlungsarten in Deutschland finden Sie in [Zahlungsarten in Shopify für Deutschland](/de/blog/shopify-zahlungsarten-deutschland).
- **Theme:** Das Theme muss mit Sections und Blocks kompatibel sein. Die Hilfe nennt Online-Store-2.0-Themes von Shopify, die Horizon-Themes, Debut ab Version 15.0 und Brooklyn ab Version 17.0. Bei anderen Themes fragen Sie den Theme-Entwickler.
- **Verkaufskanäle:** Abos werden laut Hilfe nur im Online Store, in Shopify POS, im Kanal Shop und in eigenen Storefronts unterstützt. Abo-Produkte ohne Einmalkauf-Option lassen sich nur im Online Store verkaufen.
- **Entwurfsbestellungen:** Abos funktionieren nicht mit Draft Orders.
- **Bundles:** Bundles sind mit der App Shopify Subscriptions nicht kompatibel. Mehr dazu in [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen).
- **Order-Edits-API:** Sie unterstützt keine Abos.
- **Rechte:** Mitarbeiter brauchen eine Rolle mit der Berechtigung für Apps und Vertriebskanäle.

## Abo-Widget und Produktseite

Damit Kunden das Abo auswählen können, fügen Sie laut Hilfe im Theme-Editor unter **Product information** den Block **Subscription widget** hinzu. Bei Online-Store-2.0-Themen sollte das Widget unter **App embeds** ausgeschaltet sein, damit es richtig angezeigt wird. Pro Produkt entscheiden Sie, ob es **nur als Abo** verkauft wird oder zusätzlich als Einmalkauf. Wie das in der Praxis sauber in den Kaufbereich einer Produktseite passt, hängt vom Theme ab, siehe [Shopify-Theme anpassen](/de/blog/shopify-theme-customization).

## Checkout, Versand und Hinweise

**Erster und wiederkehrende Lieferungen:** Beim Checkout wählen Kunden die Versandart für die erste Lieferung. Für die folgenden Lieferungen gilt laut Hilfe die günstigste verfügbare Versandart. Wiederkehrende Lieferungen werden getrennt abgerechnet und versendet. Wie Versandprofile angelegt werden, steht in [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten).

**Abrechnung:** Laut Hilfe wird der Kunde am Tag nach Fälligkeit um 10:00 Uhr Ihrer Shop-Ortszeit belastet.

**Hinweis im Checkout:** Enthält der Warenkorb ein Abo, zeigt der Checkout einen Pflichthinweis zur automatisch erneuernden Zahlung. Laut Hilfe lässt er sich **auf keinem Tarif entfernen**. Die Bausteine „Abo-Vereinbarung“ und „Einwilligungstext“ können nur Shopify-Plus-Händler ändern; den Kündigungstext, die Kündigungsanleitung und die Kündigungsbedingungen (unter **Settings** > **Policies**) können Händler aller Tarife anpassen. Die Hilfe rät, eigene Formulierungen vorher mit Ihrer Rechtsabteilung zu prüfen. Wenn Sie den Checkout ohnehin anfassen, lesen Sie [Shopify-Checkout anpassen](/de/blog/shopify-checkout-anpassen).

**Kündigungsrichtlinie:** Sobald ein Abo eingerichtet ist, legt Shopify eine Richtlinie zur Kündigung an. Ist sie leer, sehen Kunden eine Vorlage. Kunden müssen ihr beim Kauf zustimmen. Zu Richtlinien allgemein: [Rechtstexte und Richtlinien in Shopify](/de/blog/shopify-rechtstexte-richtlinien).

**Rabatte und Geschenkkarten:** Automatische Rabatte können auf Abo-Bestellungen angewendet werden. Shopify Scripts mit Rabatten auf Abo-Kosten oder Versand gelten laut Hilfe nur für die erste Zahlung, ebenso Geschenkkarten.

## Das Kundenportal

Kunden verwalten ihr Abo im Kundenkonto. Laut Hilfe können sie Zahlungsdaten ändern, die Lieferadresse anpassen, Abos pausieren, fortsetzen oder kündigen, kommende Bestellungen überspringen und frühere Bestellungen ansehen. Die Anmeldung läuft über die E-Mail-Adresse und einen sechsstelligen Code, ein Passwort ist nicht nötig. Eine Kündigung kann laut Hilfe nicht rückgängig gemacht werden; wer nur pausieren will, soll das Abo pausieren.

Damit Kunden die Verwaltung finden, fügen Sie im Editor für Checkout und Konten Blöcke hinzu: eine eigene Seite **Subscription management**, Aktionsknöpfe auf den Seiten **Order** und **Order status** und einen Link auf der Danke-Seite.

Außerdem schickt Shopify Subscriptions laut Hilfe drei Tage vor jeder wiederkehrenden Belastung eine Erinnerungs-E-Mail, damit Kunden überspringen, Zahlungsdaten ändern, pausieren oder kündigen können. Bei Abos über eine Drittanbieter-App gilt deren eigener Benachrichtigungsplan.

## Wenn Karten ablaufen

Mit Shopify Payments werden gespeicherte Kartendaten laut Hilfe über die Kartennetzwerke automatisch aktualisiert, was Zahlungsausfälle senkt. Die Hilfe schreibt dazu, dass die Unterstützung in den USA weit verbreitet ist und international variiert. Bei anderen Anbietern müssen Kunden ihre Daten eventuell selbst aktualisieren; ob Sie die Daten automatisch erhalten, klären Sie mit dem Anbieter. Für die Übernahme bestehender Abos nennt die Hilfe eigene Seiten zur Migration von Zahlungsdaten und zum Import und Export von Abo-Verträgen; deren Inhalt habe ich hier nicht ausgewertet.

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nichts dazu, **welche Produkte sich für ein Abo eignen**, wie hoch ein Abo-Rabatt sein sollte oder wie viele Kunden ein Abo wirklich behalten. Sie sagen auch nichts zu den rechtlichen Pflichtangaben bei Abos in Deutschland, und sie klären nicht, ob Ihre konkrete Zahlart mit wiederkehrenden Zahlungen funktioniert. Zu möglichen Gebühren sagt die Hilfe nur, dass die App je nach Einrichtung zusätzliche Gebühren verursachen kann. Das prüfen Sie bei der App selbst.

## Beispiele aus der Praxis

Für [Reserve Kava](/de/projects/reserve-kava), eine Instant-Kava-Marke, habe ich beim Neuaufbau der Produktseiten Einzel- und Mehrfachdosen mit Abo ergänzt, neben einem Bundle, das beide Dosen in den Warenkorb legt. Das zeigt, warum die Grenzen oben vor dem Start wichtig sind: Laut Hilfe lassen sich Shopify-Bundles nicht mit Abos kombinieren, also muss vorher klar sein, welche Kaufoptionen auf der Produktseite zusammenkommen sollen. Welche Lösung zu Ihrem Shop passt, hängt von Tarif, Sortiment und gewünschten Kaufoptionen ab.

## Vor dem Start: Checkliste

1. **Welches Modell** passt: Pay-as-you-go oder Prepaid, und welche Produkte sollen ins Abo?
2. Reicht die kostenlose **Shopify Subscriptions**, oder brauchen Sie eine Drittanbieter-App oder eine eigene Lösung?
3. Nutzt Ihr Shop einen **unterstützten Zahlungsanbieter**?
4. Funktionieren die **Zahlarten**, die Ihre Kunden nutzen sollen, mit wiederkehrender Belastung?
5. Ist Ihr **Theme** kompatibel, und sitzt das Abo-Widget am richtigen Platz?
6. Sollen **Bundles, Draft Orders oder Order Edits** mit Abos zusammenspielen? Dann prüfen Sie die Grenzen.
7. Sind **Kündigungstext und Richtlinie** gepflegt und rechtlich geprüft?
8. Mit einer **echten Testbestellung** geprüft: Checkout-Hinweis, Bestätigungs-E-Mail, Kundenportal, erste Folgelieferung?

## Wann ein Entwickler hilft

Einen einfachen Abo-Plan legen Sie selbst in der App an. Hilfe lohnt sich, wenn das Abo sauber in die Produktseite eingebaut werden soll, etwa mit Einzel-, Mehrfach- und Abo-Auswahl, wenn Theme und Widget nicht zusammenpassen, wenn ein bestehendes Abo-System migriert werden soll oder wenn Checkout und Kundenkonto angepasst werden müssen. Danach gehört die Einrichtung in die laufende Pflege, siehe [Shopify Wartung und Betreuung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Brauche ich eine App für Abos?** Ja. Laut Hilfe muss eine Abo-App installiert sein oder eine eigene Lösung über die API gebaut werden. Es gibt die kostenlose App Shopify Subscriptions.

**Kann ich Abos mit Bundles kombinieren?** Laut Hilfe nicht: Bundles sind mit der App Shopify Subscriptions nicht kompatibel.

**Welche Zahlungsanbieter brauche ich?** Genannt werden Shopify Payments, PayPal Express, Authorize.net, Adyen und Stripe. Stripe nur für ausgewählte Händler.

**Können Kunden ihr Abo selbst kündigen?** Ja, im Kundenkonto. Eine Kündigung lässt sich laut Hilfe nicht rückgängig machen, Pausieren und späteres Fortsetzen ist möglich.

**Kann ich den Abo-Hinweis im Checkout entfernen?** Nein, auf keinem Tarif. Einzelne Bausteine lassen sich ändern, manche nur mit Shopify Plus.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Was ich sonst für Shops mache, steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen) · [Zahlungsarten in Shopify für Deutschland](/de/blog/shopify-zahlungsarten-deutschland) · [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Geschenkkarten einrichten](/de/blog/shopify-geschenkkarten-gutscheine)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
