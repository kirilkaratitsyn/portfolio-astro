---
publishedAt: 2026-10-23
title: "Shopify E-Mail-Benachrichtigungen anpassen: Kunden-Mails, Mitarbeiter-Alerts, SMS und was Sie vorher wissen sollten"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Shopify E-Mail-Benachrichtigungen anpassen: welche Mails automatisch laufen, welche sich abschalten lassen, Vorlagen, Mitarbeiter-Mails, SMS und Webhooks."
image: /og/projects/peter-bijoux.jpg
topic: build
tags:
  - Shopify
  - E-Mail
  - Benachrichtigungen
  - Bestellung
---

„Die Bestellbestätigung sieht aus wie bei jedem anderen Shop, und die Versandmail kommt, obwohl ich sie gar nicht wollte.“ Shopify verschickt viele Mails von selbst. Wer Shopify E-Mail-Benachrichtigungen anpassen, abschalten oder um SMS und Mitarbeiter-Alerts ergänzen will, findet die Einstellungen an mehreren Stellen.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs und Länderlisten ändern sich, prüfen Sie also Ihren Admin. Pflichtangaben in Rechnungen und Mails klären Sie mit Steuerberatung oder Anwalt. Die Menünamen stammen aus der englischen Oberfläche.

## Wo die Benachrichtigungen liegen

Im Admin unter **Settings > Notifications**. Die Hilfe unterscheidet fünf Gruppen:

- **Kunden-Mails** zu Bestellungen, Versand und Konto-Ereignissen
- **SMS-Benachrichtigungen** als Bestellbestätigung per Textnachricht
- **Mitarbeiter-Benachrichtigungen** für Sie und Ihr Team
- **Mails für Umtausch und Rückgabe**
- **Webhooks** für Verbindungen zu anderen Diensten

Die meisten gehen automatisch raus. Auf eine Bestellung folgt die **Order confirmation**, auf die Erfüllung die **Shipping confirmation**, auf eine Erstattung die **Order refund**.

## Was sich abschalten lässt und was nicht

Die meisten Kunden-Benachrichtigungen können Sie laut Hilfe nicht deaktivieren. Sechs schon, jeweils dort, wo Sie die Aktion ausführen:

- **Order canceled:** beim Stornieren „Send a notification to the customer“ abwählen.
- **Order refund:** beim Erstatten dasselbe Häkchen entfernen.
- **Shipping confirmation:** beim Erfüllen „Send shipment details to your customer now“ abwählen.
- **Shipping update:** beim Bearbeiten der Sendungsnummer „Send notification email to customer“ abwählen.
- **Out for delivery** und **Delivered:** unter **Settings > Notifications > Customer notifications** im Bereich „Shipping updated“ ausschalten. Bei lokaler Lieferung gibt es stattdessen eine eigene Zustellmail, sobald Sie die Bestellung als geliefert markieren.

Auf Shopify Plus kann der Shop-Inhaber den Support bitten, bestimmte Mails und SMS abzuschalten. Benachrichtigungen der **Shop-App** zu Sendungsverfolgung und Bestellstatus können nur Kunden in der App abschalten, Händler nicht. Mehr dazu: [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten).

## Logo und Farben für alle Vorlagen

Unter **Settings > Notifications > Customer notifications > Customize email template** laden Sie ein Logo hoch und stellen die Akzentfarbe per Farbcode oder Farbwähler ein. Beides gilt für alle Kunden-Vorlagen. Im Bereich „Branding“ lässt sich „Powered by Shopify“ im Footer abschalten. Die Hilfe nennt das Early Access, nur für bestimmte Shops. Auf Shopify Plus erscheint der Hinweis nicht.

## Einzelne Vorlagen bearbeiten

Öffnen Sie die Benachrichtigung und klicken Sie **Edit code**. Dort bearbeiten Sie **Email subject** und **Email body (HTML)**. Laut Hilfe gilt:

- Zuerst müssen Sie Ihre **Absenderadresse bestätigen**. Sonst lassen sich Text und Betreff nicht bearbeiten.
- **Preview** zeigt ungespeicherte Änderungen. **Send test email** schickt die Mail an Ihr Admin-Konto.
- **Revert to** und **Default** setzen eine Vorlage auf den Auslieferungszustand zurück.
- Für HTML-Änderungen nennt die Hilfe selbst die Möglichkeit, einen Shopify Partner zu beauftragen.

Die Vorlagen nutzen Liquid-Variablen für Bestell- und Kundendaten.

### Sprache der Vorlagen

Die Sprache folgt laut Hilfe der Sprache Ihres Themes, solange Sie nichts geändert haben:

- Betreff und Text geändert: Ein Sprachwechsel des Themes ändert nichts mehr.
- Nur den Text geändert: Der Betreff wechselt mit, der Text nicht.

Verkaufen Sie in mehreren Sprachen, bekommen Kunden die Mails in ihrer Sprache. Die Übersetzungen beschreibt die Hilfe unter „Checkout and email notifications“. Mehr dazu: [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).

### Registrierungsnummer in Mails

In manchen Ländern gehört eine Steuer- oder USt-IdNr. auf Rechnungen oder Mitteilungen. Die Hilfe beschreibt, wie Sie die Nummer im HTML der Vorlage ergänzen. Fragen Sie vorher Steuerberatung oder Behörde, ob das nötig ist. Mehr dazu: [Rechnungen und Bestelldokumente in Shopify](/de/blog/shopify-rechnung-bestelldokumente).

## Mitarbeiter-Benachrichtigungen

Diese Mails informieren Sie oder Ihr Team über Ereignisse im Admin:

- **Store order summary:** Bestellungen, Umsatz und Top-Produkte. Standard ist wöchentlich montags um 9 Uhr Ortszeit. Tag und Uhrzeit lassen sich ändern, auch auf täglich.
- **New order:** ein Kunde bestellt.
- **New return request:** ein Kunde fragt eine Rückgabe an.
- **Sales attribution ended:** die zugeordnete Person einer Bestellung wird geändert.
- **New draft order:** ein Kunde reicht einen Entwurf ein. Geht nur an den Shop-Inhaber.
- **Order dispute updates:** Rückbuchungen und Anfragen. Geht nur an Teammitglieder mit der passenden Berechtigung. Die Vorlage lässt sich nicht anpassen.

Der Kontoinhaber erhält standardmäßig alle neuen Bestellungen. Das schalten Sie unter **Staff notifications** ab. Weitere Empfänger fügen Sie per E-Mail-Adresse oder als Teammitglied hinzu, bei Shopify POS optional pro Standort. Empfänger lassen sich vorübergehend ausschalten. **Send test notification** schickt eine Mail mit Testdaten. Für Änderungen brauchen Sie die Berechtigungen **Orders** und **Manage settings**.

## SMS-Benachrichtigungen

Kunden können beim Checkout statt einer E-Mail-Adresse eine Telefonnummer angeben. Das stellen Sie unter **Settings > Checkout** im Bereich „Customer contact method“ ein. Die Hilfe nennt diese Grenzen:

- Es gibt nur **eine** SMS, die Bestellbestätigung. Versandmeldungen gehen nur über eine Transactional-SMS-App.
- SMS gehen nur an Kunden **ohne** E-Mail-Adresse. Wer eine Adresse angibt, bekommt die Mail.
- Die SMS lässt sich **nicht bearbeiten**. Eigene Texte gehen nur über eine App.
- Für Sie fallen laut Hilfe keine Kosten an. Kunden zahlen gegebenenfalls Standardgebühren ihres Anbieters.
- Ihre **Geschäftsadresse** muss in einem unterstützten Land liegen: Deutschland, Frankreich, Irland, Italien, Spanien, Vereinigtes Königreich, USA, Kanada, Australien, Neuseeland, Brasilien oder Japan.
- Shops mit CBD-Produkten sind ausgeschlossen. Ein abgebrochener Checkout mit Telefonnummer lässt sich nicht zurückholen.
- Ohne internationale Vorwahl kann eine SMS ins Ausland ausbleiben. Die Hilfe nennt das Format E.164, zum Beispiel `+18005550123`.
- Der Absendername ist der Shopname, gekürzt auf 11 Zeichen, ohne Leer- und Sonderzeichen. In manchen Ländern erscheint stattdessen eine Telefonnummer.

Nutzen Sie eine Drittanbieter-App für SMS, schalten Sie die Shopify-SMS ab. Sonst bekommen Kunden doppelte Nachrichten.

## Umtausch und Rückgabe

Haben Sie Vorlagen angepasst und fügen Sie einer Rückgabe Umtauschartikel hinzu, müssen Sie unter Umständen vier Vorlagen von Hand aktualisieren: **Order invoice**, **Order refund**, **Return created** und **Return request approved**. Laut Hilfe verlangt das Vertrautheit mit dem Code. Wer unsicher ist, fragt den Entwickler der Änderungen oder setzt die Vorlage auf den Standard zurück.

## Webhooks

Ein Webhook meldet ein Ereignis an eine `https://`-Adresse, im Format JSON oder XML. Typische Zwecke laut Hilfe: Buchhaltungssoftware, Data Warehouse, Benachrichtigungen an einen Messenger. Schlägt ein Webhook fehl, bekommt der Shop-Inhaber eine Mail, aber nur bei Webhooks, die eine App oder eine eigene App angelegt hat. Antwortet das Ziel wiederholt nicht mit Status 200, löscht Shopify das Abonnement.

## Was die Hilfe hier nicht beantwortet

Die Hilfe sagt nicht, **welche Mails Ihr Shop wirklich braucht**, wie Sie Texte formulieren oder wie die Mail in jedem Mailprogramm aussieht. Sie nennt nur unterstützte Programme, darunter Apple Mail, Outlook, Gmail, Yahoo und Thunderbird. Welche Hinweise rechtlich in Bestell- und Versandmails gehören, klärt Ihr Anwalt. Zu Pflichttexten: [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Beispiele aus der Praxis

Unter meinen veröffentlichten Projekten gibt es keinen Fall, in dem ich Benachrichtigungen eines Shops angepasst habe, und ich erfinde keinen. Machen Sie vor dem Start eine Testbestellung und lesen Sie alle Mails als Kunde, auch auf dem Smartphone.

## Wann ein Entwickler hilft

Logo, Farbe und Absender stellen Sie selbst ein. Hilfe lohnt sich, wenn:

- Vorlagen in HTML und Liquid umgebaut werden sollen,
- Mails für mehrere Sprachen und Märkte zusammenpassen müssen,
- eigene Vorlagen nach einer Änderung bei Umtausch oder Rückgabe nachgezogen werden,
- ein Webhook Bestellungen an Buchhaltung oder Lager übergeben soll.

Passende Themen: [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization), [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) und für die laufende Pflege [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kann ich die Bestellbestätigung abschalten?** Laut Hilfe nicht. Abschalten lassen sich sechs Benachrichtigungen zu Storno, Erstattung und Versand.

**Kann ich die Absenderadresse ändern?** Ja, in den Einstellungen zur Absenderadresse.

**Warum kommen Mails nicht an?** Die Hilfe rät, zuerst den Spam- oder Junk-Ordner zu prüfen und sonst eine Adresse bei einem anderen Anbieter zu testen.

**Kann ich die SMS umformulieren?** Nein. Eigene Texte gehen nur über eine Transactional-SMS-App.

**Was passiert nach einem Theme-Wechsel mit den Mails?** Das hängt davon ab, was Sie an den Vorlagen geändert haben, siehe Abschnitt zur Sprache.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir nur öffentlich sichtbare Daten an, ohne Zugriff auf Ihr Konto, und sage Ihnen, was auffällt. Mehr unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Rechnungen und Bestelldokumente](/de/blog/shopify-rechnung-bestelldokumente) · [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten) · [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Try before you buy](/de/blog/shopify-try-before-you-buy) · [Shopify Domain verbinden](/de/blog/shopify-domain-verbinden) · [Shopify mehrsprachig: Shop übersetzen](/de/blog/shopify-mehrsprachig-uebersetzen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
