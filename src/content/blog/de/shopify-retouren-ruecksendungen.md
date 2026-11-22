---
publishedAt: 2026-11-21
title: "Shopify Retouren einrichten: Rückgaberegeln, Rücksendungen und Erstattungen ohne Chaos"
seoTitle: "Shopify Retouren einrichten: Regeln und Erstattung"
date: 21. November 2026
readingTime: 7 Min
excerpt: "Shopify Retouren einrichten: Rückgaberegeln mit 14-Tage-Frist, Rücksendungen durch Kunden, Retourenlabel in Deutschland, Erstattung und Gutschrift, Umtausch."
image: /og/projects/orska-rituals.jpg
topic: build
tags:
  - Shopify
  - Retouren
  - Shop-Verwaltung
---

Retouren gehören in Deutschland zum Onlinehandel, schon wegen des Widerrufsrechts. Shopify bringt dafür eigene Werkzeuge mit: Rückgaberegeln, Rücksendeanfragen durch Kunden, Rücksendungen im Admin und Erstattungen. Viele Shops nutzen davon nur den Button „Refund“ und regeln den Rest per E-Mail. Dieser Artikel zeigt, was Shopify ohne App kann und wo die Grenzen für Shops in Deutschland liegen. Quelle ist die Shopify-Hilfe, Stand November 2026. Das ist keine Rechtsberatung.

## Rückgaberegeln: der Rahmen für alle Retouren

Die Regeln stehen unter **Settings > Policies** im Bereich **Return and cancellation rules**. Dort schalten Sie **Return rules** ein und legen fest:

- **Rückgabefrist:** keine Rückgabe, 14, 30 oder 90 Tage, unbegrenzt oder eigene Anzahl Tage. Die Frist beginnt mit der Lieferung des Artikels oder mit der Lieferung des letzten Artikels der Bestellung. Ein Häkchen verlängert sie über Wochenenden und Feiertage.
- **Rücksendekosten:** kostenlose Rücksendung, eine feste Gebühr pro Retoure, oder der Kunde kauft sein Rücksendelabel selbst.
- **Wiedereinlagerungsgebühr:** ein Prozentsatz der Retoure. Wichtig: Shopify zieht diese Gebühr laut Hilfe **nicht automatisch** von der Erstattung ab. Das muss jemand im Team von Hand tun.
- **Final Sale:** Kollektionen oder Produkte, die nicht zurückgegeben werden können. Bundles lassen sich nicht als Final Sale markieren.
- **Abweichende Fristen** für einzelne Kollektionen, Produkte oder Varianten. Liegt ein Artikel in mehreren, gilt die kürzeste.

Änderungen gelten nur für künftige Bestellungen. Die Regeln greifen auch dann, wenn Sie Retouren von Hand anlegen. Für mehrere Länder lassen sich eigene Regeln pro Markt anlegen, mehr dazu in [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).

### Was die Hilfe für die EU empfiehlt

Die Shopify-Hilfe nennt für Händler in der EU konkrete Einstellungen: mindestens 14 Tage Frist, Beginn mit der Lieferung des letzten Artikels, Verlängerung über Wochenenden und Feiertage eingeschaltet, Stornierung möglich bis zum Versand. Sie erwähnt außerdem die EU-Richtlinie 2023/2673: Seit dem 19. Juni 2026 müssen Kunden ihren Widerruf auf elektronischem Weg erklären können. Shopify schreibt aber selbst, dass die Werkzeuge einen Shop **nicht automatisch rechtskonform** machen.

Mein Rat: Die Rückgaberegeln in Shopify, Ihre Widerrufsbelehrung und Ihre Rückerstattungsrichtlinie müssen dasselbe sagen. Frist, Rücksendekosten und Ausnahmen wie versiegelte Hygieneartikel klären Sie mit Ihrem Rechtstext-Anbieter. Wo die Texte im Shop stehen, zeigt [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Rücksendung durch den Kunden anfragen lassen

Statt per E-Mail können Kunden die Rücksendung selbst im Kundenkonto anfragen. Eingeschaltet wird das unter **Settings > Customer accounts**, je nach Shop unter **Order actions** oder über den Schalter **Self-serve returns and cancellations**.

Was Sie wissen sollten:

- Das funktioniert nur mit den **neuen Kundenkonten**. Die alten (Legacy) Kundenkonten zeigen keine Rückgabe-Option.
- Ein Passwort braucht der Kunde nicht: Er gibt seine E-Mail ein und bekommt einen sechsstelligen Code.
- Angefragt werden können nur versandte Artikel, höchstens 250 Positionen pro Anfrage. **Umtausch** kann der Kunde so nicht anfragen.
- Sie bekommen eine Benachrichtigung, prüfen die Anfrage im Admin und nehmen sie an oder lehnen sie ab. Beim Annehmen können Sie Rücksendehinweise oder ein Label mitschicken, bei der Ablehnung den Text vorher anpassen.
- Der Kunde bekommt drei E-Mails: Anfrage erhalten, angenommen, abgelehnt. Die Texte stehen unter **Settings > Notifications > Returns**. Prüfen Sie, ob sie Ihren tatsächlichen Ablauf beschreiben. Wie Sie die Vorlagen anpassen, steht in [Shopify E-Mail-Benachrichtigungen](/de/blog/shopify-email-benachrichtigungen).

## Rücksendung im Admin anlegen

Kommt die Retoure per E-Mail oder Telefon, legen Sie sie selbst an: **Orders**, Bestellung öffnen, **Return**. Dann Menge und **Return reason** wählen, bei Bedarf Gebühr und Rücksendekosten anpassen, Rücksendeart wählen und **Create return** klicken.

Die Rückgabegründe hängen von der Produktkategorie ab, bei Kleidung etwa „zu groß“ oder „zu klein“. Sie landen in den Auswertungen, zum Beispiel im Bericht über die meistretournierten Produkte mit Gründen. Eine Erstattung ohne angelegte Retoure speichert keinen Grund. Wer Retouren auswerten will, sollte sie also immer als Retoure anlegen, nicht nur erstatten.

Ist das Paket da, klicken Sie **Process return**. Pro Artikel wählen Sie, ob und an welchem Standort er wieder auf Lager geht. Wie Bestände und Standorte zusammenhängen, steht in [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten).

## Retourenlabel: die Grenze für Shops in Deutschland

Rücksendelabel direkt in Shopify kaufen geht laut Hilfe nur, wenn Shop-Standort und Kunde **im selben Land** sind **und dieses Land die USA oder Kanada** ist. Für einen Shop in Deutschland bleibt also:

- **Label hochladen:** Sie erstellen das Label beim Versanddienstleister oder in einer Versand-App und laden es als PDF, PNG, JPEG oder Link in der Retoure hoch, mit Sendungsnummer.
- **Ohne Label:** Option **No shipping required**, der Kunde schickt selbst zurück.

Wer viele Retouren hat, landet hier meist bei einer Versand- oder Retouren-App. Welche passt, hängt vom Versanddienstleister ab. Grundlagen zu Profilen und Tarifen in [Shopify Versand einrichten](/de/blog/shopify-versand-einrichten).

## Erstattung, Gutschrift und Umtausch

Erstattet wird über **Refund** in der Bestellung oder beim Verarbeiten der Retoure. Möglich sind:

- **Original payment:** zurück auf die ursprüngliche Zahlungsart.
- **Store credit:** Guthaben im Shop, optional mit Ablaufdatum. Die Hilfe weist darauf hin, dass Länder unterschiedliche Regeln für den Ablauf von Guthaben haben. Beim gesetzlichen Widerruf erwarten Kunden ihr Geld zurück, nicht Guthaben. Guthaben eignet sich eher für freiwillige Rückgaben.
- Eine Kombination aus beidem, auch Teilerstattungen. Versandkosten lassen sich höchstens bis zum gezahlten Betrag erstatten.

Zwei Punkte, die oft überraschen: Eine Erstattung lässt sich nach dem Auslösen **nicht stornieren**. Und bei Shopify Payments bekommen Sie die Kartengebühren der ursprünglichen Zahlung laut Hilfe nicht zurück. Welche Zahlungsarten in Deutschland üblich sind, steht in [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland).

**Umtausch** legen Sie im Admin direkt in der Retoure an: Im Bereich **Exchange items** fügen Sie das neue Produkt hinzu. Eigene, nicht angelegte Artikel gehen dort nicht, und der Bestand für den Umtauschartikel wird erst beim Verarbeiten der Retoure reserviert. Kostet der neue Artikel mehr, kann Shopify dem Kunden eine Rechnung schicken.

## Checkliste

1. Rückgaberegeln eingeschaltet, Frist passend zur Widerrufsbelehrung?
2. Rücksendekosten in Shopify, Widerrufsbelehrung und Rückerstattungsrichtlinie gleich?
3. Ausnahmen (Final Sale) angelegt und in den Rechtstexten begründet?
4. Neue Kundenkonten aktiv, Rücksendeanfragen eingeschaltet?
5. E-Mails unter Notifications > Returns auf Deutsch und mit Ihrem Ablauf?
6. Weg zum Retourenlabel geklärt: hochladen, App oder ohne Label?
7. Wer zieht Gebühren von Hand ab, wer prüft die Ware, wer erstattet?
8. Retouren immer als Retoure anlegen, damit Gründe in den Berichten stehen?

## Wie ich es handhabe

Einen Retouren-Fall mit dokumentierten Zahlen habe ich nicht in meinem Portfolio. Mein Teil ist die Einrichtung im Shop: Rückgaberegeln und Richtlinien, neue Kundenkonten, deutsche Texte für die Retouren-E-Mails, Final-Sale-Kollektionen, und wenn nötig die Auswahl und Anbindung einer Retouren-App. Rechtstexte schreibe ich nicht, die kommen von Ihrem Anbieter oder Anwalt. Im Admin arbeite ich über ein Collaborator-Konto mit begrenzten Rechten.

## Häufige Fragen

**Brauche ich eine Retouren-App?** Für einfache Fälle nicht: Regeln, Anfragen, Rücksendungen und Erstattungen kann Shopify selbst. Eine App lohnt sich vor allem für Retourenlabel in Deutschland und bei vielen Retouren.

**Warum sehen Kunden keinen Rückgabe-Button?** Meist laufen noch die alten Kundenkonten, oder die Option ist unter Customer accounts nicht eingeschaltet.

**Wird die Wiedereinlagerungsgebühr automatisch abgezogen?** Nein. Shopify zeigt sie in der Retoure, abziehen müssen Sie sie bei der Erstattung selbst.

**Kann ich statt Geld Guthaben geben?** Technisch ja, über Store credit. Ob das im Einzelfall erlaubt ist, hängt vom Grund der Rückgabe ab, beim gesetzlichen Widerruf in der Regel nicht.

**Kommen Retouren ins Lager zurück?** Nur, wenn Sie beim Verarbeiten den Standort zum Wiedereinlagern wählen.

## Retouren laufen noch per E-Mail?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact): Ich sage Ihnen, ob Rückerstattungsrichtlinie, Footer und Kundenkonto von außen stimmig sind. Die Einrichtung von Regeln, Kundenkonten und E-Mails passt zur [Shopify Betreuung](/de/services/shopify-betreuung).

**Weiterlesen:** [Shopify Try before you buy](/de/blog/shopify-try-before-you-buy) · [Shopify Geschenkkarten und Gutscheine](/de/blog/shopify-geschenkkarten-gutscheine) · [Shopify Rechnung und Bestelldokumente](/de/blog/shopify-rechnung-bestelldokumente)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
