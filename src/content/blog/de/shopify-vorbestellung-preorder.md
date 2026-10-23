---
publishedAt: 2026-10-23
title: "Shopify Vorbestellung einrichten: Pre-Order-App, Grenzen an der Kasse und was Sie vorab klären sollten"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Vorbestellungen in Shopify: was die Hilfe zu Pre-Order-Apps, Anzahlung, Zahlungsarten, Lagerbestand und Stornierung sagt und welche Grenzen es an der Kasse gibt."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Vorbestellung
  - Kaufoptionen
  - Kasse
---

„Das Produkt ist noch nicht da, aber ich möchte schon verkaufen.“ Das ist der Moment, in dem Händler nach einer Vorbestellung fragen. Shopify nennt das Pre-Order und zählt es zu den Kaufoptionen. Ganz ohne Zusatz geht es nicht, und an der Kasse gelten Grenzen, die man vor dem Start kennen sollte. Dieser Text zeigt, was die Shopify-Hilfe dazu sagt, ohne technischen Hintergrund vorauszusetzen.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs, Bedingungen und Zahlungsarten ändern sich, prüfen Sie deshalb Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Welche Angaben zu Lieferzeit, Widerruf und Anzahlung rechtlich nötig sind, klären Sie mit Ihrem Rechtsanwalt. Hier geht es nur um die Technik und um das, was die Hilfe als Plattformregel nennt.

## Was Vorbestellungen sind

Laut Hilfe können Sie Produkte verkaufen, die nicht vorrätig oder noch nicht verfügbar sind, indem Sie sie als Vorbestellung einrichten. Als Nutzen nennt die Hilfe, den Bedarf für eine Neuheit abzuschätzen und Vorfreude auf eine Veröffentlichung zu erzeugen.

Je nach den angebotenen Optionen kann bei der Bestellung der volle Betrag, ein Teilbetrag oder gar nichts eingezogen werden. Die Zahlungsmethode des Kunden wird gespeichert, den Rest ziehen Sie später ein.

Vorbestellungen sind eine von drei Kaufoptionen. Die anderen beiden sind Abos und „Erst testen, dann zahlen“ (Try before you buy). Mehr zu Abos steht in [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions).

## Ohne App geht es nicht

Die Hilfe sagt klar: Für Vorbestellungen brauchen Sie eine **Pre-Order-App** aus dem Shopify App Store. Das Produkt als Vorbestellung einzurichten, geschieht in dieser App. Im Admin sehen Sie die Informationen danach auf der Produktseite und in der Bestellliste.

Wenn Sie die App deinstallieren, werden die dort angelegten Vorbestellungsdaten (ohne die Zahlungsdaten der Kunden) nach 48 Stunden gelöscht. Gibt es in der App eine Sicherung, können Sie die Daten später wiederherstellen.

Die Hilfe sagt außerdem, dass Vorbestellungen derzeit nur für Händler mit **Shopify Payments oder PayPal Express** verfügbar sind. Prüfen Sie diesen Punkt vor einer Entscheidung im Admin, denn solche Bedingungen ändern sich.

## Voraussetzungen und Grenzen

Aus der Hilfe zu Anforderungen und Einschränkungen:

- **Lieferversprechen:** Sie brauchen eine nachvollziehbare Grundlage für die Aussage, dass sich das Produkt in einem bestimmten Zeitraum versenden lässt. Ist kein Datum genannt, müssen Sie begründet davon ausgehen, dass es innerhalb von **30 Tagen** nach dem Kauf versendet wird.
- **Verzögerung:** Können Sie nicht in der zugesagten Zeit liefern, müssen Sie ein neues Versanddatum nennen und das Recht des Kunden erklären, zu stornieren oder eine Erstattung zu erhalten.
- **Individuelle Kasse:** Vorbestellungen werden in Shops mit angepasster Kasse nicht unterstützt (siehe [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen)).
- **Beschleunigte Kasse:** Vorbestellungen lassen sich nicht mit Shop Pay, Apple Pay oder Google Pay kaufen.
- **Lokale Zahlungsarten:** Zahlarten wie Klarna und mollie iDEAL | Wero sind für Vorbestellungen nicht nutzbar. Was das für den deutschen Markt heißt, steht in [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland).
- **Vertriebskanäle:** Nur Online-Shop und Custom Storefront.
- **Keine Mischung:** Auf demselben Produkt lassen sich mehrere Kaufoptionen einrichten, aber Kunden können sie nicht in einer Kasse mischen. Ein Abo-Produkt lässt sich also nicht vorbestellen.
- **Rabatte:** „Kaufe X, erhalte Y“ wird bei Vorbestellungen nicht unterstützt (zu Rabattaktionen allgemein: [Shopify Rabattcode oder automatischer Rabatt](/de/blog/shopify-rabattcodes-automatische-rabatte)).
- **Shop Promise** wird nicht unterstützt.

Dazu kommt, was ich im Bundles-Text beschrieben habe: Bundles sind mit Kaufoptionen wie Vorbestellungen laut Hilfe nicht kompatibel, siehe [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen).

## An der Kasse: Anzahlung und Fälligkeit

Während der Kasse zeigen Pre-Order-Apps Informationen an. Wird eine Anzahlung verlangt, steht der fällige Betrag in der Bestellübersicht, der Rest ist später fällig. Im Schritt **Zahlung** muss der Kunde bestätigen, dass er ein Produkt mit einer Kaufoption kauft. Ohne diese Zustimmung lässt sich der Kauf nicht abschließen.

Liegen mehrere Vorbestellungen im Warenkorb, gelten laut Hilfe feste Regeln:

- **Feste Fälligkeitsdaten:** Das früheste Datum gilt für alle Produkte. Ist ein Hemd am 3. Juni und ein Buch am 7. Juni fällig, werden beide am 3. Juni fällig.
- **Fällig bei Lieferung:** Diese Bedingung hat Vorrang vor festen Daten.
- **Anzahlungen:** Sie werden zusammengerechnet und an der Kasse eingezogen.

## Bestellungen verwalten

Aus der Hilfe zur Verwaltung:

- **Zahlungsmethode ändern:** Schlägt eine spätere Abbuchung fehl, können Sie im Kundenprofil einen Link zum Aktualisieren der Karte senden oder die Karte ersetzen.
- **Bank-Bestätigung:** Die Bank des Kunden kann spätere Abbuchungen anfordern, der Kunde muss dann manuell bestätigen. Shopify schickt dafür eine E-Mail mit Link.
- **Lieferung zurückstellen:** Eine unerfüllte Bestellung lässt sich auf **Hold** setzen, wenn sie noch nicht bereit ist. Informieren Sie dann die Kunden über den Stand.
- **Filtern:** In der Bestellliste zeigen die Tabs „Nicht erfüllt“ und „Unbezahlt“ offene Vorbestellungen.
- **Bearbeiten:** Menge erhöhen oder senken, Rabatte ändern, ein Produkt entfernen und einen Einmalkauf hinzufügen ist möglich. Ein neues Vorbestellungsprodukt lässt sich beim Bearbeiten nicht hinzufügen.
- **Früher einziehen:** Ist die Ware früher fertig, können Sie den Restbetrag früher einziehen, per Rechnung oder über die gespeicherte Karte. Die Hilfe warnt: Kündigen Sie das klar an, sonst droht eine Rückbuchung.
- **Lagerbestand:** Er wird je nach App beim Verkauf oder bei der Lieferung reserviert. Gibt die App die Wahl nicht her, fragen Sie den App-Entwickler.
- **Stornieren und erstatten:** Eine teilweise bezahlte, noch nicht erfüllte Bestellung lässt sich stornieren. Ist sie erfüllt, geht nur noch eine volle oder teilweise Erstattung. Nach einer Erstattung müssen Sie die Bestellung unter Umständen auch in der Pre-Order-App stornieren.

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nichts dazu, **welche Pre-Order-App** zu Ihrem Shop passt, wie hoch eine Anzahlung sein sollte oder ob Vorbestellungen bei Ihren Kunden die Nachfrage tatsächlich steigern. Sie sagen auch nichts dazu, wie Lieferzeit, Widerruf und Anzahlung rechtlich korrekt anzugeben sind. Das klären Sie mit Ihrem Rechtsanwalt, Hintergrund zu Rechtstexten steht in [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien). Und was die Umsetzung kostet, hängt vom Umfang ab.

## Beispiele aus der Praxis

Einen veröffentlichten Projektfall mit Vorbestellungen gibt es von mir nicht. Nah verwandt ist die Frage, welche Kaufoptionen auf einer Produktseite zusammenpassen. Für [Reserve Kava](/de/projects/reserve-kava), eine Instant-Kava-Marke, habe ich beim Umbau der Produktseiten ein Bundle ergänzt, das beide Dosen in den Warenkorb legt, daneben einzelne und mehrere Dosen mit Abo. Das zeigt, warum die Grenzen oben vor dem Start zählen: Welche Kaufoptionen zusammenkommen sollen, muss klar sein, bevor gebaut wird.

## Vor dem Start: eine Checkliste

1. Nutzen Sie **Shopify Payments oder PayPal Express**? Laut Hilfe ist das die Voraussetzung.
2. Hat Ihr Shop eine **angepasste Kasse**? Dann sind Vorbestellungen laut Hilfe nicht möglich.
3. Soll der Kunde mit **Klarna, Shop Pay, Apple Pay oder Google Pay** zahlen? Für Vorbestellungen geht das laut Hilfe nicht.
4. Haben Sie ein **belastbares Lieferdatum**, und was passiert, wenn es sich verschiebt?
5. Voller Betrag, **Anzahlung** oder Zahlung später?
6. Wann wird der **Lagerbestand** reserviert, beim Verkauf oder bei der Lieferung?
7. Sollen auf demselben Produkt **Abo oder Bundle** zusätzlich angeboten werden? Das geht laut Hilfe nicht gemischt.
8. Mit **Testbestellung** geprüft, inklusive späterer Zahlung und Stornierung?

## Wann ein Entwickler hilft

Die Pre-Order-App installieren und konfigurieren können Sie selbst. Hilfe lohnt sich, wenn die Kasse zuerst von `checkout.liquid` weg muss, damit Vorbestellungen überhaupt möglich werden, wenn Produktseite, Kaufoptionen und Hinweise zur Lieferzeit sauber zusammenspielen sollen oder wenn Zahlungsarten und Märkte neu gedacht werden müssen (siehe [Shopify Markets](/de/blog/shopify-markets-mehrere-laender)). Wie Anpassungen sauber und wartbar bleiben, steht in [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization). Danach gehört die Einrichtung zur laufenden Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Brauche ich eine App für Vorbestellungen?** Ja. Laut Hilfe müssen Sie eine Pre-Order-App aus dem App Store installieren und das Produkt dort einrichten.

**Kann der Kunde mit Klarna oder Shop Pay vorbestellen?** Laut Hilfe nicht: Shop Pay, Apple Pay, Google Pay und lokale Zahlungsarten wie Klarna sind für Vorbestellungen nicht nutzbar.

**Muss der volle Betrag sofort gezahlt werden?** Nicht zwingend. Je nach Option kann der volle Betrag, ein Teilbetrag oder nichts eingezogen werden. Der Rest wird später fällig.

**Was gilt, wenn ich nicht rechtzeitig liefern kann?** Die Hilfe verlangt ein neues Versanddatum und einen Hinweis auf das Recht, zu stornieren oder eine Erstattung zu erhalten. Rechtliche Details klärt Ihr Rechtsanwalt.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quellcode und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Was ich sonst für Shops mache, finden Sie unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen) · [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland) · [Shopify E-Mail-Benachrichtigungen anpassen](/de/blog/shopify-email-benachrichtigungen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
