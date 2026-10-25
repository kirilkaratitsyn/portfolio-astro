---
publishedAt: 2026-10-25
title: "Shopify Flow: Abläufe im Shop automatisieren, ohne Code"
date: 25. Oktober 2026
readingTime: 7 Min
excerpt: "Shopify Flow für Händler ohne Technik: Trigger, Bedingungen und Aktionen, Vorlagen, Warten, Testen und Fehler. Was die kostenlose App kann, wo ihre Grenzen liegen und wann ein Entwickler hilft."
image: /og/projects/orska-rituals.jpg
topic: support
tags:
  - Shopify
  - Shopify Flow
  - Automatisierung
  - Shop-Verwaltung
---

„Jeden Morgen gehe ich dieselben Bestellungen durch, tagge Kunden von Hand und schaue, was ausverkauft ist." Solche Routinen kann Shopify Flow übernehmen. Die App beobachtet Ereignisse im Shop und führt dann festgelegte Schritte aus. Dieser Artikel zeigt, was das Shopify Help Center dazu sagt, für Händler ohne technischen Hintergrund.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs ändern sich, prüfen Sie also Ihren Admin. Menünamen sind der englischen Oberfläche entnommen. Preise für Tarife, Apps oder Entwicklung nenne ich nicht. Welche Abläufe sich in Ihrem Shop lohnen, hängt von Ihren Prozessen ab, nicht von der Hilfe.

## Was Shopify Flow ist

Shopify Flow ist laut Hilfe eine Plattform zur Automatisierung von Aufgaben im Shop und über Apps hinweg. Flow ist eine **kostenlose App**, verfügbar in den Tarifen Basic, Grow, Advanced und Plus. Sie installieren sie aus dem Shopify App Store und öffnen sie dann im Admin unter **Apps > Flow**.

Die meisten Funktionen gibt es in allen diesen Tarifen. Ausnahmen laut Hilfe: Die Aktion **Send HTTP request** gibt es ab Grow, und Aufgaben aus eigenen Partner-Apps nur in Plus. Außerdem hängen die Nutzungsgrenzen in Flow vom Tarif ab, weil sie an die API-Grenzen des Tarifs gebunden sind.

## Die drei Bausteine eines Workflows

Ein Ablauf heißt in Flow **Workflow** und besteht aus drei Teilen:

- **Trigger:** das Ereignis, das den Workflow startet. Beispiele aus der Liste der Hilfe: **Order created**, **Customer created**, **Product created**, **Product variant inventory quantity changed** und **Scheduled time** für Abläufe nach Zeitplan. Jeder Workflow beginnt mit einem Trigger aus Flow oder aus einer App.
- **Bedingung:** prüft, ob der Workflow weiterlaufen soll, wie ein „wenn, dann". Ohne Bedingung laufen die Aktionen sofort.
- **Aktion:** ändert etwas im Shop, verarbeitet Daten im Workflow oder macht etwas in einer anderen App. Beispiele: **Add order tags**, **Add customer tags**, **Hold fulfillment order**, **Cancel order**, **Send internal email** und **Wait**.

Laut Hilfe laufen Workflows so schnell wie möglich, sobald der Trigger eintritt.

## Was Händler damit typischerweise machen

Die Hilfe listet Beispiel-Workflows. Ein paar davon, sinngemäß übersetzt:

- **Risiko:** Bestellungen mit hohem Risiko stornieren und Ware zurück ins Lager buchen, oder die Zahlung nur erfassen, wenn die Bestellung nicht riskant ist.
- **Lager:** eine Benachrichtigung bei niedrigem Bestand, ausverkaufte Produkte ausblenden. Mehr dazu: [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten).
- **Kunden:** Kunden nach Gesamtumsatz in Stufen einteilen oder anhand der E-Mail-Adresse taggen, etwa für einen Bildungsrabatt.
- **Bestellungen:** Bestellungen taggen, die mit Geschenkkarte bezahlt wurden, oder das Logistik-Team per E-Mail informieren, wenn es schnell gehen muss. Zu Geschenkkarten: [Shopify Geschenkkarten und Gutscheine](/de/blog/shopify-geschenkkarten-gutscheine).
- **Versand:** Fulfillments nach Kriterien anfordern oder zurückhalten, auf ungewöhnlich große Mengen hinweisen, Bestellungen nach Versandart taggen. Dazu: [Shopify Versand einrichten](/de/blog/shopify-versand-einrichten).
- **Zahlung:** eine Zahlungserinnerung nach dem Fälligkeitsdatum.

## Vorlage oder eigener Workflow

Sie legen einen Workflow unter **Create workflow** an, entweder über **Browse templates** aus einer Vorlage oder selbst: Trigger wählen, mit **+** eine Bedingung hinzufügen und im Zweig **True** die Aktion festlegen. Aktiv wird er erst mit **Turn on workflow**.

Zwei Hinweise aus der Hilfe zu Vorlagen: Sie enthalten Platzhalter, die Sie vor dem Einschalten durch Ihre eigenen Werte ersetzen. Und viele Vorlagen nutzen Trigger oder Aktionen anderer Apps, dafür muss der passende Connector installiert sein. Lässt man sich einen Workflow von Sidekick erzeugen, ist er zunächst inaktiv und sollte laut Hilfe gründlich geprüft und getestet werden.

## Bedingungen: was oft überrascht

- **AND und OR:** Bei AND ist das Ergebnis nur wahr, wenn alle Kriterien stimmen, bei OR reicht eines.
- **Fehlende Daten:** Gibt es keine Daten, gilt eine AND-Bedingung laut Hilfe als **wahr**, eine OR-Bedingung als **falsch**. Das ist eine typische Ursache für Workflows, die zu oft oder nie auslösen.
- **Listen:** Für Listen, etwa die Positionen einer Bestellung, gibt es „at least one of", „all of" und „none of". Ist die Liste leer, werden die Bedingungen gar nicht ausgewertet.
- **Verneinung:** Die Hilfe nennt es einen häufigen Fehler, eine Bedingung über „is not equal to" umdrehen zu wollen.
- **Groß- und Kleinschreibung** spielt bei Textvergleichen keine Rolle.
- **Tags:** Bedingungen auf Tags funktionieren eventuell nicht, wenn eine Bestellung, ein Produkt oder ein Kunde mehr als 250 Tags hat.
- **Bestellungen und Entwürfe** sind getrennt: Trigger und Aktionen für Bestellungen betreffen keine Bestellentwürfe und umgekehrt.

Die Hilfe rät außerdem, wenn möglich einen genaueren Trigger als **Order created** zu wählen, für Risiko-Abläufe etwa **Order risk analyzed**.

## Warten statt sofort handeln

Mit der Aktion **Wait** hält ein Workflow an, bevor er weitermacht, etwa um eine Bestellung erst nach einiger Zeit zu prüfen. Laut Hilfe:

- Höchstens **90 Tage** Wartezeit pro Workflow. Mit mehr lässt sich der Workflow nicht einschalten. Für längere Abstände empfiehlt die Hilfe einen Workflow nach Zeitplan.
- Nach dem Warten werden die Daten **neu geladen**. Was sich in der Zeit geändert hat, zählt.
- Ändern Sie einen aktiven Workflow, gilt die Änderung auch für Durchläufe, die gerade warten. Schalten Sie ihn ab oder löschen ihn, werden wartende Durchläufe gestoppt.

## Testen, bevor es ernst wird

Flow kann einen Workflow vor dem Einschalten testen, über **Test your workflow** am Trigger. Ein Test nutzt echte Shop-Daten, ändert laut Hilfe aber nichts im Shop. Er stoppt an der ersten Aktion, die etwas ändern würde. Aktionen zu externen Diensten wie Send HTTP request lassen sich nicht simulieren, und Tests erscheinen nicht in der Liste der Durchläufe.

## Wenn etwas schiefgeht

- Alle Durchläufe sehen Sie unter **Apps > Flow > Recent runs**, mit Status **In progress**, **Waiting** oder **Completed** und Filtern etwa nach Fehlern.
- Durchläufe werden **14 Tage** nach dem Abschluss gespeichert.
- Vorübergehende Fehler wiederholt Flow mit wachsenden Abständen. Pro Abschnitt eines Workflows gilt eine Obergrenze von 36 Stunden. Dauerhafte Fehler werden nicht wiederholt, der Durchlauf gilt als fehlgeschlagen.
- Fehlgeschlagene Durchläufe lassen sich von Hand erneut starten.
- Über den Trigger **Workflow error occurred** können Sie sich bei Fehlern benachrichtigen lassen, per Shopify-Hinweis, E-Mail oder Slack.

## Die Aktion „Send internal email"

Sie ist laut Hilfe für E-Mails an das **eigene Team** gedacht. Für E-Mails an Kunden verweist die Hilfe auf Marketing-Automatisierungen. Die Empfängeradresse ist fest eingetragen und lässt sich nicht über Variablen setzen. Mehrere Empfänger trennen Sie mit Komma. Welche E-Mails Shopify selbst an Kunden schickt: [Shopify E-Mail-Benachrichtigungen](/de/blog/shopify-email-benachrichtigungen).

## Was die Hilfe hier nicht beantwortet

Die Seiten, die ich gelesen habe, sagen nicht, welche Abläufe sich in Ihrem Shop lohnen, wie viel Zeit sie sparen oder ob sie den Umsatz verändern. Für Trigger und Aktionen anderer Apps gelten die Regeln des jeweiligen Anbieters. Und was die Einrichtung kostet, hängt vom Umfang ab.

## Beispiele aus der Praxis

Einen Shopify-Flow-Workflow für einen Kunden beschreibt keines meiner veröffentlichten Projekte, und ich erfinde dazu nichts. Verwandte Automatisierungen gibt es: Bei [Orska Rituals](/de/projects/orska-rituals) wird nach der Freigabe eines Profis automatisch ein B2B-Unternehmen angelegt. Bei [Elanora Skin](/de/projects/elanora-skin) habe ich eine Benachrichtigung bei wieder verfügbaren Produkten über die Klaviyo-API erweitert.

## Vor dem Start: eine Checkliste

1. Welche Aufgabe erledigen Sie **jede Woche von Hand** auf dieselbe Weise?
2. Welches **Ereignis** startet sie, und gibt es dafür einen genaueren Trigger als Order created?
3. Unter welchen **Bedingungen** soll der Ablauf laufen, und was passiert, wenn Daten fehlen?
4. Gibt es eine **Vorlage**, und welche Platzhalter müssen ersetzt werden?
5. Braucht der Ablauf **andere Apps**, und ist der Connector installiert?
6. Haben Sie den Workflow **getestet**, bevor Sie ihn einschalten?
7. Wer bekommt eine **Nachricht**, wenn ein Durchlauf fehlschlägt?

## Wann ein Entwickler hilft

Einfache Workflows aus Vorlagen richten Sie selbst ein. Hilfe lohnt sich, wenn ein Ablauf Daten aus Metafeldern braucht ([Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects)), wenn Flow mit externen Systemen über HTTP oder die Admin-API sprechen soll, wenn Abläufe mehrere Apps verbinden oder wenn Großhandelskunden automatisch freigeschaltet werden sollen, wie bei [Shopify B2B und Großhandel](/de/services/shopify-b2b). Bestehende Workflows gehören danach in die laufende Pflege, siehe [Shopify Wartung und Betreuung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kostet Shopify Flow etwas?** Laut Hilfe ist Flow eine kostenlose App in den Tarifen Basic, Grow, Advanced und Plus.

**Kann Flow E-Mails an Kunden schicken?** Die Aktion Send internal email ist für das eigene Team gedacht. Für Kunden verweist die Hilfe auf Marketing-Automatisierungen.

**Ändert ein Test meinen Shop?** Nein, laut Hilfe stoppt der Test vor der ersten Aktion, die etwas ändern würde.

**Wie lange kann ein Workflow warten?** Höchstens 90 Tage.

**Wo sehe ich, ob ein Workflow gelaufen ist?** Unter Apps > Flow > Recent runs, für 14 Tage nach dem Abschluss.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugriff auf Ihr Konto. Was ich bei Großhandels-Shops mache, steht unter [Shopify B2B und Großhandel](/de/services/shopify-b2b).

**Weiterlesen:** [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten) · [Shopify Kollektionen und Filter](/de/blog/shopify-kollektionen-filter) · [Shopify Hilfe](/de/blog/shopify-help)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
