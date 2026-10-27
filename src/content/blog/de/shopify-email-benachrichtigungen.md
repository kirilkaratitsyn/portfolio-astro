---
publishedAt: 2026-10-23
title: "Shopify E-Mail-Benachrichtigungen anpassen: Kunden-Mails, Mitarbeiter-Alerts, SMS und was Sie vorher wissen sollten"
date: 23. Oktober 2026
readingTime: 8 Min
excerpt: "Benachrichtigungen in Shopify: welche Kunden-Mails automatisch laufen, welche sich abschalten lassen, Logo und Farben, Vorlagen bearbeiten, Mitarbeiter-Benachrichtigungen, SMS, Webhooks."
image: /og/projects/peter-bijoux.jpg
topic: build
tags:
  - Shopify
  - E-Mail
  - Benachrichtigungen
  - Bestellung
---

„Die Bestellbestätigung sieht aus wie bei jedem anderen Shop, und die Versandmail kommt, obwohl ich sie gar nicht wollte.“ Das hören Händler oft, sobald die ersten Bestellungen eingehen. Shopify verschickt viele Mails von selbst. Wer sie gestalten, abschalten oder um SMS und Mitarbeiter-Alerts ergänzen will, findet die Einstellungen an mehreren Stellen. Dieser Text zeigt, was die Shopify-Hilfe dazu sagt, für Händler ohne technischen Hintergrund.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs, Verfügbarkeiten und Länderlisten ändern sich, prüfen Sie also Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Welche Pflichtangaben in Rechnungen und Mails stehen müssen, ist eine Frage für Ihre Steuerberatung oder Ihren Anwalt. Hier geht es nur um die Technik. Menünamen sind aus der englischen Oberfläche übernommen, im deutschen Admin heißen sie etwas anders.

## Wo die Benachrichtigungen liegen

Im Admin unter **Settings > Notifications**. Die Hilfe unterscheidet fünf Gruppen:

- **Kunden-Mails** zu Bestellungen, Versand und Konto-Ereignissen
- **SMS-Benachrichtigungen** als Bestellbestätigung per Textnachricht
- **Mitarbeiter-Benachrichtigungen** für Sie und Ihr Team
- **Mails für Umtausch und Rückgabe**
- **Webhooks** für Verbindungen zu anderen Diensten

Die meisten Benachrichtigungen werden laut Hilfe automatisch versandt, ausgelöst durch Ereignisse im Shop: Eine Bestellung geht ein, dann geht die **Order confirmation** raus. Sie erfüllen die Bestellung, dann folgt die **Shipping confirmation**. Sie erstatten eine Bestellung, dann kommt die **Order refund**.

## Was sich abschalten lässt und was nicht

Die meisten Kunden-Benachrichtigungen können Sie laut Hilfe nicht deaktivieren. Sechs davon schon, jeweils an der Stelle, an der Sie die Aktion ausführen:

- **Order canceled:** beim Stornieren der Bestellung das Häkchen bei „Send a notification to the customer“ entfernen.
- **Order refund:** beim Erstatten dasselbe Häkchen entfernen.
- **Shipping confirmation:** beim Erfüllen „Send shipment details to your customer now“ abwählen.
- **Shipping update:** beim Bearbeiten der Sendungsnummer „Send notification email to customer“ abwählen.
- **Out for delivery** und **Delivered:** unter **Settings > Notifications > Customer notifications** im Bereich „Shipping updated“ ausschalten. Diese beiden gibt es nicht für Bestellungen mit lokaler Lieferung. Dafür gibt es eine eigene Zustellmail, die rausgeht, wenn Sie die Bestellung als geliefert markieren.

Auf Shopify Plus kann der Shop-Inhaber beim Support darum bitten, bestimmte Mails und SMS abzuschalten. Benachrichtigungen aus der **Shop-App** zu Sendungsverfolgung und Bestellstatus können Sie als Händler weder abschalten noch bearbeiten. Kunden schalten sie nur in den Einstellungen der Shop-App aus. Mehr zum Versand selbst: [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten).

## Logo und Farben für alle Vorlagen

Unter **Settings > Notifications > Customer notifications > Customize email template** laden Sie ein Logo hoch und stellen die Akzentfarbe per Farbcode oder Farbwähler ein. Beides gilt laut Hilfe für alle Kunden-Vorlagen gleichzeitig. Es gibt außerdem einen Bereich „Branding“, in dem sich der Hinweis „Powered by Shopify“ im Footer abschalten lässt. Die Hilfe nennt das Early Access, nur für bestimmte Shops. Auf Shopify Plus erscheint der Hinweis ohnehin nicht.

## Einzelne Vorlagen bearbeiten

Wer Betreff und Text einer einzelnen Mail ändern will, öffnet die Benachrichtigung und klickt **Edit code**. Dort bearbeiten Sie **Email subject** und **Email body (HTML)**. Wichtig laut Hilfe:

- Vorher müssen Sie Ihre **Absenderadresse bestätigen**. Ohne das lassen sich Text und Betreff nicht bearbeiten.
- Über **Preview** sehen Sie ungespeicherte Änderungen. Mit **Send test email** schicken Sie die Mail an das Konto, mit dem Sie im Admin angemeldet sind.
- Mit **Revert to** und **Default** setzen Sie eine Vorlage auf den Auslieferungszustand zurück.
- Die Hilfe nennt für HTML-Änderungen selbst die Möglichkeit, einen Shopify Partner zu beauftragen.

Die Vorlagen nutzen Liquid-Variablen für Bestell- und Kundendaten. Die Hilfe verweist dafür auf eine eigene Referenzseite.

### Sprache der Vorlagen

Die Sprache hängt laut Hilfe von der Sprache Ihres Themes und davon ab, was Sie bereits geändert haben. Haben Sie Betreff und Text geändert, ändert ein Sprachwechsel des Themes nichts mehr. Haben Sie nur den Text geändert, wechselt der Betreff mit, der Text nicht. Wenn Sie in mehreren Sprachen verkaufen, bekommen Kunden die Mails in der jeweiligen Sprache. Die Übersetzungen pflegen Sie an einer eigenen Stelle, die die Hilfe unter „Checkout and email notifications“ beschreibt. Mehr zu Mehrsprachigkeit: [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).

### Registrierungsnummer in Mails

In manchen Ländern müssen Sie auf Rechnungen oder Mitteilungen eine Steuer- oder USt-IdNr. angeben. Die Hilfe beschreibt, wie Sie die Nummer im HTML der Vorlage ergänzen, und rät, vorher bei der Steuerberatung oder Behörde nachzufragen, ob das nötig ist. Zu Rechnungen und Dokumenten allgemein: [Rechnungen und Bestelldokumente in Shopify](/de/blog/shopify-rechnung-bestelldokumente).

## Mitarbeiter-Benachrichtigungen

Diese Mails informieren Sie oder Ihr Team über Ereignisse im Admin. Laut Hilfe gibt es:

- **Store order summary:** Zusammenfassung zu Bestellungen, Umsatz und Top-Produkten. Standard ist wöchentlich montags um 9 Uhr in Ihrer Ortszeit. Sie können Tag und Uhrzeit ändern oder auf täglich stellen.
- **New order:** wenn ein Kunde bestellt.
- **New return request:** wenn ein Kunde eine Rückgabe anfragt.
- **Sales attribution ended:** wenn die zugeordnete Person einer Bestellung geändert wird.
- **New draft order:** wenn ein Kunde einen Entwurf einreicht, nur an den Shop-Inhaber.
- **Order dispute updates:** zu Rückbuchungen und Anfragen. Diese Mail erhalten nur Teammitglieder mit der passenden Berechtigung, und die Vorlage lässt sich nicht anpassen.

Der Kontoinhaber erhält standardmäßig alle neuen Bestellungen, das lässt sich unter **Staff notifications** abschalten. Weitere Empfänger fügen Sie per E-Mail-Adresse oder als Teammitglied hinzu, bei Shopify POS optional pro Standort. Zum Prüfen gibt es **Send test notification** mit Testdaten. Für Änderungen brauchen Sie die Berechtigungen **Orders** und **Manage settings**. Empfänger lassen sich vorübergehend ausschalten, ohne sie zu löschen.

## SMS-Benachrichtigungen

Kunden können beim Checkout statt einer E-Mail-Adresse eine Telefonnummer angeben. Das stellen Sie unter **Settings > Checkout** im Bereich „Customer contact method“ ein. Die Hilfe nennt einige Grenzen, die Händler oft überraschen:

- Es gibt nur **eine** SMS, die Bestellbestätigung. Versandmeldungen und andere Typen gehen nicht per SMS, außer Sie nutzen eine Transactional-SMS-App.
- SMS gehen nur an Kunden **ohne** E-Mail-Adresse. Wer eine Adresse hinterlegt hat, bekommt die Mail, und er kann nicht stattdessen SMS wählen.
- Die SMS lässt sich **nicht bearbeiten**. Individuelle Texte gehen nur über eine App.
- Für Sie fallen laut Hilfe keine Kosten an. Kunden zahlen gegebenenfalls Standardgebühren ihres Anbieters.
- SMS gibt es nur, wenn Ihre **Geschäftsadresse** in einem unterstützten Land liegt. Die Liste nennt Deutschland, Frankreich, Irland, Italien, Spanien, das Vereinigte Königreich, die USA, Kanada, Australien, Neuseeland, Brasilien und Japan.
- Nicht unterstützt für Shops, die CBD-Produkte verkaufen. Ein abgebrochener Checkout mit Telefonnummer lässt sich nicht zurückholen.
- Ohne vollständige internationale Vorwahl kann eine SMS bei Kunden aus dem Ausland ausbleiben. Die Hilfe nennt das Format E.164, zum Beispiel `+18005550123`.
- Der Absendername basiert auf dem Shopnamen, ist auf 11 Zeichen gekürzt und enthält keine Leer- oder Sonderzeichen. In manchen Ländern erscheint stattdessen eine Telefonnummer.

Wenn Sie eine Drittanbieter-App für SMS einsetzen, schalten Sie laut Hilfe die Shopify-SMS ab, damit Kunden keine doppelten Nachrichten bekommen.

## Umtausch und Rückgabe

Haben Sie eigene Vorlagen angepasst und fügen Sie einer Rückgabe Umtauschartikel hinzu, müssen Sie unter Umständen vier Vorlagen von Hand aktualisieren: **Order invoice**, **Order refund**, **Return created** und **Return request approved**. Die Hilfe sagt dazu, dass das Vertrautheit mit dem Code der Vorlagen verlangt. Wer sich unsicher ist, soll den Entwickler fragen, der die Änderungen gemacht hat, oder die Vorlage auf den Standard zurücksetzen.

## Webhooks

Ein Webhook meldet ein Ereignis an eine von Ihnen angegebene `https://`-Adresse, im Format JSON oder XML. Typische Zwecke laut Hilfe sind Buchhaltungssoftware, Daten für ein Data Warehouse oder Benachrichtigungen an einen Messenger. Schlägt ein Webhook fehl, geht eine Mail an den Shop-Inhaber, aber nur bei Webhooks, die eine App oder eine eigene App angelegt hat. Antwortet das Ziel wiederholt nicht mit Status 200, löscht Shopify das Abonnement automatisch.

## Was die Hilfe hier nicht beantwortet

In den hier gelesenen Seiten steht nichts dazu, **welche Mails Ihr Shop wirklich braucht**, wie Sie Texte formulieren, dass Kunden sie lesen, oder wie die Mail in jedem einzelnen Mailprogramm aussieht. Die Hilfe nennt nur eine Liste unterstützter Programme, darunter Apple Mail, Outlook, Gmail, Yahoo und Thunderbird. Auch die rechtliche Seite (welche Hinweise gehören in Bestell- und Versandmails) bleibt offen, das gehört zu Ihrem Anwalt. Zu Pflichttexten im Shop: [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien). Und was die Umsetzung kostet, hängt vom Umfang ab.

## Beispiele aus der Praxis

Unter meinen veröffentlichten Projekten gibt es keinen Fall, in dem ich Benachrichtigungen eines Shops angepasst habe, und ich erfinde keinen. Das Thema gehört zu jedem Shop mit Bestellungen. Es lohnt sich, die Mails einmal selbst als Kunde zu lesen, bevor der Shop live geht.

## Vor dem Start: eine Checkliste

1. Ist die **Absenderadresse** bestätigt?
2. Sind **Logo und Akzentfarbe** gesetzt, und passt die Vorschau zum Shop?
3. Welche der sechs abschaltbaren Mails wollen Sie **nicht** versenden, und wer im Team weiß davon?
4. Haben Sie eine **Testbestellung** gemacht und alle Mails gelesen, auch auf dem Smartphone?
5. Sind **Betreff und Text** in der richtigen Sprache, auch für andere Märkte?
6. Wer bekommt die **Mitarbeiter-Mails**, und ist die Wochenübersicht auf den richtigen Tag gestellt?
7. Wollen Sie **SMS** nutzen, und liegt Ihre Geschäftsadresse in einem unterstützten Land?
8. Gibt es eigene Vorlagen, die bei **Umtausch** angepasst werden müssen?

## Wann ein Entwickler hilft

Logo, Farbe und Absender stellen Sie selbst ein. Hilfe lohnt sich, wenn Vorlagen im HTML und Liquid umgebaut werden sollen, wenn Mails für mehrere Sprachen und Märkte zusammenpassen müssen, wenn eigene Vorlagen nach einer Änderung bei Umtausch oder Rückgabe nachgezogen werden, oder wenn ein Webhook Bestellungen an Buchhaltung oder Lager übergeben soll. Passende Themenfelder: [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) und [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen). Danach gehört die Einrichtung in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kann ich die Bestellbestätigung abschalten?** Laut Hilfe nicht. Abschalten lassen sich sechs Benachrichtigungen zu Storno, Erstattung und Versand.

**Kann ich die Absenderadresse ändern?** Ja, die Hilfe verweist auf die Einstellungen zur Absenderadresse. Ohne bestätigte Adresse lassen sich Text und Betreff nicht bearbeiten.

**Warum kommen Mails nicht an?** Die Hilfe rät, zuerst den Spam- oder Junk-Ordner zu prüfen und es sonst mit einer Adresse bei einem anderen Anbieter zu versuchen.

**Kann ich die SMS umformulieren?** Nein, die Shopify-SMS lässt sich nicht bearbeiten. Individuelle Texte gehen nur über eine Transactional-SMS-App.

**Was passiert nach einem Theme-Wechsel mit den Mails?** Das hängt davon ab, was Sie an den Vorlagen geändert haben. Die Regeln stehen oben im Abschnitt zur Sprache.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugriff auf Ihr Konto. Was ich sonst für Shops mache, steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Rechnungen und Bestelldokumente](/de/blog/shopify-rechnung-bestelldokumente) · [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten) · [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Try before you buy](/de/blog/shopify-try-before-you-buy)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
