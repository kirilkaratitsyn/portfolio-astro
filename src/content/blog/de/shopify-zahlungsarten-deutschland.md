---
publishedAt: 2026-10-23
title: "Shopify Zahlungsarten in Deutschland: Shopify Payments, PayPal, Klarna und was vorher zu klären ist"
date: 23. Oktober 2026
readingTime: 6 Min
excerpt: "Shopify Zahlungsarten in Deutschland: was Shopify Payments mitbringt, wie PayPal, Klarna und Vorkasse dazukommen und was Sie vor dem Start klären sollten."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Zahlungsarten
  - Checkout
  - Klarna
---

Shopify Zahlungsarten aktivieren Sie in Deutschland in den Einstellungen, meist ohne Code. Es gibt dafür drei Wege, und sie lassen sich nicht beliebig mischen.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Shopify ändert Anbieter, Länderlisten und Bedingungen. Prüfen Sie Wichtiges deshalb vor einer Entscheidung in Ihrem Admin.

Gebühren nenne ich nicht: Laut Shopify hängen sie bei Shopify Payments vom Tarif ab, bei anderen Anbietern von deren Konditionen. Rechts- und Steuerfragen klärt ein Rechtsanwalt oder Steuerberater.

## Die drei Wege im Überblick

1. **Shopify Payments:** die Zahlungsabwicklung von Shopify selbst.
2. **Drittanbieter und PayPal:** ein anderer Zahlungsanbieter für Kreditkarten, und PayPal als eigene Zahlungsart.
3. **Manuelle Zahlungsarten:** Vorkasse per Überweisung oder Nachnahme. Das Geld ordnen Sie selbst zu.

Für viele Shops reicht der erste Weg plus PayPal.

## Shopify Payments in Deutschland

Laut Shopify-Hilfe sind in Deutschland automatisch aktiv, sobald Sie Shopify Payments einschalten:

- **Kredit- und Debitkarten:** American Express, Maestro, Mastercard, UnionPay und Visa.
- **Beschleunigte Kassen („Accelerated Checkouts“):** Apple Pay, Google Pay und Shop Pay.

**Lokale Zahlungsarten** aktivieren Sie selbst unter Einstellungen > Zahlungen. Die Kasse zeigt sie nach dem Standort des Kunden, nicht des Shops. Die Hilfe nennt für Deutschland unter anderem Klarna, Bancontact (Belgien), BLIK und Przelewy24 (Polen), EPS (Österreich), iDEAL | Wero (Niederlande), TWINT (Schweiz) und weitere.

### Klarna

Laut Shopify können Kunden mit Klarna sofort bezahlen, per Rechnung oder in Raten per Lastschrift oder Kreditkarte. Das Geld kommt mit Ihrer nächsten Auszahlung von Shopify Payments, den Rest regelt der Kunde mit Klarna.

Welche Optionen erscheinen, hängt laut Hilfe vom Land Ihres Shopify-Payments-Kontos, vom Standort des Kunden und von der Währung ab. Ob „Kauf auf Rechnung“ angeboten wird, sehen Sie erst in Ihrem Shop.

### iDEAL | Wero: eine Hürde, die man leicht übersieht

Laut Hilfe müssen Sie mit Shopify Payments in Deutschland mindestens 100 Bestellungen abgewickelt haben, bevor Sie iDEAL | Wero für Kunden aus den Niederlanden aktivieren können. Planen Sie es für einen neuen Shop nicht zum Start ein.

### Was nicht in der Liste steht

Die Hilfeseite „Customer payment methods with Shopify Payments in Germany“ nennt weder PayPal noch SEPA-Lastschrift. PayPal läuft über einen eigenen Weg (unten). Zu SEPA-Lastschrift steht auf den von mir geprüften Hilfeseiten nichts. Fragen Sie bei Bedarf den Shopify-Support.

## Voraussetzungen, die sich vor dem Start lohnen

Für Shopify Payments in Deutschland verlangt Shopify laut Hilfe unter anderem:

- eine **geeignete Geschäftsart**: Die Nutzungsbedingungen von Shopify Payments schließen bestimmte Branchen aus.
- ein **Bankkonto** in Euro, das für SEPA-Überweisungen geeignet ist und eine IBAN eines unterstützten Landes hat. Nicht unterstützt werden unter anderem Sparkonten, Konten, die nur Überweisungen annehmen, Konten mit mehreren Währungen gleichzeitig und Fintech-Dienste, die ein Bankkonto nur nachbilden.
- **Angaben zu Person und Unternehmen** für die Prüfung gegen Finanzkriminalität. Shopify und seine Bankpartner können später weitere Angaben anfragen.
- die **Zwei-Schritt-Bestätigung** für Ihr Shopify-Konto (mehr zu Zugängen: [Shopify Wartung](/de/blog/shopify-wartung-betreuung)).

Reichen Sie die Prüfung früh ein. Wann Ihr Konto freigegeben wird, lässt sich nicht vorhersagen.

## PayPal

Laut Shopify-Hilfe bekommt jeder neue Shop automatisch ein PayPal-Express-Checkout-Konto. Shopify fragt dafür nach Ihrer E-Mail-Adresse und gibt sie an PayPal weiter. Schließen Sie die Einrichtung ab oder deaktivieren Sie PayPal in den Zahlungseinstellungen. Nur der Shop-Inhaber kann die PayPal-Daten bearbeiten.

Zu den Kosten schreibt die Hilfe: Für Transaktionen über Drittanbieter und alternative Zahlungsanbieter fallen Transaktionsgebühren von Drittanbietern an, auch wenn Shopify Payments aktiv ist. Ist Shopify Payments Ihr Hauptanbieter, sind PayPal-Transaktionen davon ausgenommen. Die Gebühren für Ihren Standort nennt die Preisseite von Shopify oder der Support.

## Drittanbieter statt Shopify Payments

Kommt Shopify Payments wegen der Geschäftsart oder eines vorhandenen Zahlungsanbieters nicht infrage, bietet Shopify laut Hilfe über 100 Kreditkartenanbieter an:

- Bei **direkten Anbietern** bezahlen Ihre Kunden direkt in Ihrem Shop.
- Bei **externen Anbietern** bezahlen sie auf einer Kassenseite außerhalb Ihres Shops.

Ein Drittanbieter läuft allein oder zusammen mit Shopify Payments. Dann übernimmt er die Karten, Shopify Payments übernimmt Shop Pay und lokale Zahlungsarten. Dafür gelten Einschränkungen:

- Es lässt sich nur ein direkter Drittanbieter parallel verwenden.
- Die Wiederholung fehlgeschlagener Zahlungen gilt nur für Karten.
- Abo-Zahlungen laufen standardmäßig über den Drittanbieter.

## Manuelle Zahlungsarten: Vorkasse, Nachnahme

Für Kunden, die nicht online zahlen wollen, gibt es Vorkasse per Überweisung oder Nachnahme. Die Bestellung steht im Admin als **unbezahlt**. Sie senden bei Bedarf eine Rechnung, markieren die Bestellung nach Zahlungseingang **von Hand als bezahlt** und versenden.

Laut Hilfe fallen dafür keine Transaktionsgebühren von Drittanbietern an. Zahlungseingänge gleichen Sie aber selbst ab. Für Firmenkunden kann das passen, siehe [Shopify B2B und Großhandel](/de/blog/shopify-b2b-wholesale).

## Verkaufen Sie auch ins Ausland?

Manche Zahlungsarten sind an Land und Währung gebunden. EPS gilt zum Beispiel für österreichische Kunden, die in Euro zahlen, TWINT für Kunden in der Schweiz, die in CHF zahlen. Mehr zu Währungen und Märkten: [Shopify Markets: In mehrere Länder verkaufen](/de/blog/shopify-markets-mehrere-laender).

## Eine einfache Prüfliste vor dem Start

1. Geschäftsart in den Nutzungsbedingungen von Shopify Payments geprüft?
2. Bankkonto: Euro, SEPA, richtiger Kontotyp?
3. Unterlagen für die Prüfung früh eingereicht?
4. Zwei-Schritt-Bestätigung eingeschaltet?
5. PayPal eingerichtet, oder bewusst deaktiviert?
6. Jede Zahlungsart auf dem Smartphone bis zur Zahlungsauswahl angeschaut?
7. Manuelle Zahlungsarten: Wer gleicht Zahlungseingänge ab, und wann?

## Wann ein Entwickler hilft

Zum Aktivieren der Zahlungsarten brauchen Sie in der Regel keinen. Hilfe lohnt sich in drei Fällen:

- Eine Zahlungsart erscheint nicht, und Sie finden die Ursache nicht.
- Ein bestehender Shop soll den Zahlungsanbieter wechseln, etwa beim Umzug von einem anderen System (siehe [WooCommerce zu Shopify](/de/blog/woocommerce-to-shopify)).
- Mehrere Märkte und Währungen kommen zusammen.

Wer dabei zuständig ist, erklärt [Shopify Hilfe: Wann das Help Center reicht](/de/blog/shopify-help).

## Häufige Fragen

**Muss ich Shopify Payments nutzen?** Nein. Laut Shopify-Hilfe können Sie auch Drittanbieter verwenden. Dann fallen Transaktionsgebühren von Drittanbietern an.

**Kann ich PayPal und Shopify Payments gleichzeitig anbieten?** Ja. Ist Shopify Payments Ihr Hauptanbieter, sind PayPal-Transaktionen laut Hilfe von den Transaktionsgebühren für Drittanbieter ausgenommen.

**Gibt es Kauf auf Rechnung?** Klarna nennt laut Hilfe Rechnung als eine Option. Ob sie angezeigt wird, hängt von Land, Kundenstandort und Währung ab.

**Was kosten die Zahlungsarten?** Das hängt vom Tarif und vom Anbieter ab.

Passend dazu: [Shopify Versand einrichten](/de/blog/shopify-versand-einrichten).

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich sichtbare Daten, etwa Ladezeit, Apps im Quelltext und Seitenstruktur, ohne Zugang zu Ihrem Konto. Mehr unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Rechnung erstellen: Bestelldokumente](/de/blog/shopify-rechnung-bestelldokumente) · [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Try before you buy](/de/blog/shopify-try-before-you-buy)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
