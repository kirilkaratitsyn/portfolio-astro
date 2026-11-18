---
publishedAt: 2026-10-25
title: "Shopify Flow: Abläufe im Shop automatisieren, ohne Code"
date: 25. Oktober 2026
readingTime: 6 Min
excerpt: "Shopify Flow für Händler ohne Technik: Trigger, Bedingungen, Aktionen, Vorlagen, Testen und Fehler. Was die kostenlose App kann und wo ihre Grenzen liegen."
image: /og/projects/orska-rituals.jpg
topic: support
tags:
  - Shopify
  - Shopify Flow
  - Automatisierung
  - Shop-Verwaltung
---

„Jeden Morgen gehe ich dieselben Bestellungen durch, tagge Kunden von Hand und schaue, was ausverkauft ist." Solche Routinen kann Shopify Flow übernehmen. Die App beobachtet Ereignisse im Shop und führt dann festgelegte Schritte aus, ohne Code.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs ändern sich, prüfen Sie also Ihren Admin. Die Menünamen stammen aus der englischen Oberfläche. Preise nenne ich nicht.

Die Hilfe sagt nicht, welche Abläufe sich in Ihrem Shop lohnen, wie viel Zeit sie sparen oder ob sie den Umsatz verändern. Für Trigger und Aktionen anderer Apps gelten die Regeln des Anbieters.

## Was Shopify Flow ist

Shopify Flow automatisiert laut Hilfe Aufgaben im Shop und über Apps hinweg. Die **kostenlose App** gibt es in den Tarifen Basic, Grow, Advanced und Plus. Sie installieren sie aus dem Shopify App Store und öffnen sie unter **Apps > Flow**.

Fast alle Funktionen gibt es in allen diesen Tarifen. Ausnahmen laut Hilfe: **Send HTTP request** gibt es ab Grow, Aufgaben aus eigenen Partner-Apps nur in Plus. Die Nutzungsgrenzen hängen an den API-Grenzen des Tarifs.

## Die drei Bausteine eines Workflows

Ein Ablauf heißt in Flow **Workflow** und hat drei Teile:

- **Trigger:** das Ereignis, das den Workflow startet, aus Flow oder aus einer App. Beispiele: **Order created**, **Customer created**, **Product created**, **Product variant inventory quantity changed** und **Scheduled time** für Abläufe nach Zeitplan.
- **Bedingung:** prüft, ob der Workflow weiterläuft, wie ein „wenn, dann". Ohne Bedingung laufen die Aktionen sofort.
- **Aktion:** ändert etwas im Shop, verarbeitet Daten oder macht etwas in einer anderen App. Beispiele: **Add order tags**, **Add customer tags**, **Hold fulfillment order**, **Cancel order**, **Send internal email** und **Wait**.

Workflows laufen laut Hilfe so schnell wie möglich nach dem Trigger.

## Was Händler damit typischerweise machen

Beispiele aus der Hilfe:

- **Risiko:** riskante Bestellungen stornieren und die Ware zurückbuchen, oder die Zahlung nur bei unkritischen Bestellungen erfassen.
- **Lager:** bei niedrigem Bestand benachrichtigen, Ausverkauftes ausblenden. Siehe [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten).
- **Kunden:** nach Gesamtumsatz in Stufen einteilen oder nach E-Mail-Adresse taggen, etwa für einen Bildungsrabatt.
- **Bestellungen:** Zahlungen mit Geschenkkarte taggen oder das Logistik-Team bei eiligen Bestellungen per E-Mail informieren. Siehe [Shopify Geschenkkarten und Gutscheine](/de/blog/shopify-geschenkkarten-gutscheine).
- **Versand:** Fulfillments nach Kriterien anfordern oder zurückhalten, ungewöhnlich große Mengen melden, nach Versandart taggen. Siehe [Shopify Versand einrichten](/de/blog/shopify-versand-einrichten).
- **Zahlung:** nach dem Fälligkeitsdatum an die Zahlung erinnern.

## Vorlage oder eigener Workflow

Unter **Create workflow** wählen Sie über **Browse templates** eine Vorlage oder bauen den Workflow selbst: Trigger wählen, mit **+** eine Bedingung hinzufügen, im Zweig **True** die Aktion festlegen. Aktiv wird er erst mit **Turn on workflow**.

Hinweise aus der Hilfe:

- Vorlagen enthalten Platzhalter. Ersetzen Sie diese vor dem Einschalten.
- Viele Vorlagen nutzen Trigger oder Aktionen anderer Apps. Dafür muss der passende Connector installiert sein.
- Ein von Sidekick erzeugter Workflow ist zunächst inaktiv. Prüfen und testen Sie ihn gründlich.

## Bedingungen: was oft überrascht

- **AND und OR:** Bei AND müssen alle Kriterien stimmen, bei OR reicht eines.
- **Fehlende Daten:** Ohne Daten gilt AND laut Hilfe als **wahr**, OR als **falsch**. Deshalb lösen manche Workflows zu oft oder nie aus.
- **Listen:** Für Listen, etwa Bestellpositionen, gibt es „at least one of", „all of" und „none of". Bei einer leeren Liste wird nichts ausgewertet.
- **Verneinung:** Eine Bedingung über „is not equal to" umzudrehen, nennt die Hilfe einen häufigen Fehler.
- **Groß- und Kleinschreibung** spielt bei Textvergleichen keine Rolle.
- **Tags:** Bei mehr als 250 Tags an Bestellung, Produkt oder Kunde funktionieren Tag-Bedingungen eventuell nicht.
- **Bestellungen und Entwürfe** sind getrennt. Trigger und Aktionen für das eine betreffen das andere nicht.

Die Hilfe rät zu einem genaueren Trigger als **Order created**, für Risiko-Abläufe etwa **Order risk analyzed**.

## Warten statt sofort handeln

Mit **Wait** hält ein Workflow an, etwa um eine Bestellung erst später zu prüfen. Laut Hilfe:

- Höchstens **90 Tage** pro Workflow, sonst lässt er sich nicht einschalten. Für längere Abstände empfiehlt die Hilfe einen Workflow nach Zeitplan.
- Nach dem Warten werden die Daten **neu geladen**. Es zählt der aktuelle Stand.
- Ändern Sie einen aktiven Workflow, gilt das auch für wartende Durchläufe. Abschalten oder Löschen stoppt sie.

## Testen, bevor es ernst wird

Über **Test your workflow** am Trigger testen Sie vor dem Einschalten. Laut Hilfe gilt:

- Der Test nutzt echte Shop-Daten, ändert aber nichts im Shop.
- Er stoppt an der ersten Aktion, die etwas ändern würde.
- Aktionen zu externen Diensten wie Send HTTP request lassen sich nicht simulieren.
- Tests erscheinen nicht in der Liste der Durchläufe.

## Wenn etwas schiefgeht

- Alle Durchläufe stehen unter **Apps > Flow > Recent runs**, mit Status **In progress**, **Waiting** oder **Completed** und Filtern etwa nach Fehlern.
- Durchläufe bleiben **14 Tage** nach dem Abschluss gespeichert.
- Vorübergehende Fehler wiederholt Flow mit wachsenden Abständen, pro Abschnitt eines Workflows höchstens 36 Stunden. Dauerhafte Fehler wiederholt Flow nicht, der Durchlauf gilt als fehlgeschlagen.
- Fehlgeschlagene Durchläufe starten Sie von Hand neu.
- Der Trigger **Workflow error occurred** meldet Fehler per Shopify-Hinweis, E-Mail oder Slack.

## Die Aktion „Send internal email"

Sie ist laut Hilfe für E-Mails an das **eigene Team** gedacht. Für Kunden verweist die Hilfe auf Marketing-Automatisierungen. Die Empfängeradresse ist fest eingetragen, Variablen gehen nicht. Mehrere Empfänger trennen Sie mit Komma. Was Shopify selbst an Kunden schickt: [Shopify E-Mail-Benachrichtigungen](/de/blog/shopify-email-benachrichtigungen).

## Beispiele aus der Praxis

Keines meiner veröffentlichten Projekte beschreibt einen Shopify-Flow-Workflow. Am nächsten kommt eine verwandte Automatisierung bei [Orska Rituals](/de/projects/orska-rituals): Nach der Freigabe eines Profis wird automatisch ein B2B-Unternehmen angelegt.

## Wann ein Entwickler hilft

Einfache Workflows aus Vorlagen richten Sie selbst ein. Hilfe lohnt sich, wenn:

- ein Ablauf Daten aus Metafeldern braucht, siehe [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects),
- Flow mit externen Systemen über HTTP oder die Admin-API sprechen soll,
- ein Ablauf mehrere Apps verbindet,
- Großhandelskunden automatisch freigeschaltet werden sollen, wie bei [Shopify B2B und Großhandel](/de/services/shopify-b2b).

Danach gehören die Workflows in die laufende Pflege, siehe [Shopify Wartung und Betreuung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kostet Shopify Flow etwas?** Laut Hilfe ist Flow eine kostenlose App in den Tarifen Basic, Grow, Advanced und Plus.

**Kann Flow E-Mails an Kunden schicken?** Send internal email ist für das eigene Team gedacht. Für Kunden verweist die Hilfe auf Marketing-Automatisierungen.

**Ändert ein Test meinen Shop?** Nein, laut Hilfe stoppt er vor der ersten Aktion, die etwas ändern würde.

**Wie lange kann ein Workflow warten?** Höchstens 90 Tage.

**Wo sehe ich, ob ein Workflow gelaufen ist?** Unter Apps > Flow > Recent runs, für 14 Tage nach dem Abschluss.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich sichtbare Daten, ohne Zugriff auf Ihr Konto, und sage Ihnen, was auffällt. Großhandels-Shops: [Shopify B2B und Großhandel](/de/services/shopify-b2b).

**Weiterlesen:** [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten) · [Shopify Kollektionen und Filter](/de/blog/shopify-kollektionen-filter) · [Shopify Hilfe](/de/blog/shopify-help)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
