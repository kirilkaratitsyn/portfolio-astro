---
publishedAt: 2026-11-22
title: "Shopify abgebrochene Checkouts: Warenkorbabbrecher per E-Mail zurückholen"
seoTitle: "Shopify abgebrochene Checkouts zurückholen"
date: 22. November 2026
readingTime: 6 Min
excerpt: "Abgebrochene Checkouts in Shopify: wo Sie sie finden, wie die automatische Erinnerungs-E-Mail eingerichtet wird, Wartezeit, Rabattcode, Einwilligung in Deutschland und Auswertung."
image: /og/blog/de/shopify-abgebrochene-checkouts.jpg
topic: build
tags:
  - Shopify
  - Checkout
  - E-Mail-Marketing
---

Ein Teil der Kunden gibt im Checkout seine E-Mail-Adresse ein und geht dann, ohne zu bestellen. Shopify speichert diese abgebrochenen Checkouts und kann automatisch eine Erinnerung schicken. In vielen Shops ist das nie bewusst eingerichtet worden: Die E-Mail läuft auf alten Einstellungen, auf Englisch, oder gar nicht. Dieser Artikel zeigt, was Shopify ohne App kann und worauf Shops in Deutschland achten sollten. Quelle ist die Shopify-Hilfe, Stand November 2026. Das ist keine Rechtsberatung.

## Was als abgebrochener Checkout zählt

Laut Hilfe gilt ein Checkout als abgebrochen, wenn er **mehr als zehn Minuten** unvollständig bleibt, nachdem der Kunde seine E-Mail-Adresse eingegeben hat. Ohne E-Mail gibt es keinen abgebrochenen Checkout, den man per E-Mail zurückholen kann. Hat der Kunde statt der E-Mail eine Telefonnummer eingegeben, geht keine Erinnerungs-E-Mail raus.

Weitere Grenzen aus der Hilfe:

- Erfasst werden nur Checkouts aus dem **Online Store** und dem **Buy Button**. Shopify POS, der Shop-App-Checkout und Drittanbieter-Kanäle bekommen keine Erinnerung.
- Bei **Shopify B2B** sind abgebrochene Checkouts standardmäßig ausgeschaltet und lassen sich nur über den Shopify Support einschalten. Mehr zu B2B in [Shopify B2B und Großhandel](/de/blog/shopify-b2b-wholesale).
- Ein Teil der Bot- und Kartentest-Versuche wird herausgefiltert, aber nicht alles. Einige Einträge in der Liste stammen also trotzdem von Bots.

## Wo Sie abgebrochene Checkouts finden

Unter **Orders > Abandoned checkouts**. Die Liste zeigt pro Eintrag den **Email status** (ging eine Erinnerung raus?) und den **Recovery status** (wurde danach bestellt?). Ein Klick öffnet den Checkout mit Timeline, dort stehen auch Zahlungsfehler. Eine eigene Ansicht **Blocked** zeigt Checkouts, die Shopify Payments als hohes Risiko blockiert hat.

Wichtig: Abgebrochene Checkouts, die **älter als drei Monate** sind, löscht Shopify automatisch. Von Hand löschen lässt sich ein einzelner Eintrag nicht. Wer einen Fall behalten will, legt laut Hilfe einen Entwurf (Draft order) mit denselben Daten an.

## Die automatische Erinnerungs-E-Mail einrichten

Es gibt zwei Generationen dieser E-Mail, und viele Shops laufen noch auf der alten.

**Neue Automatisierung:** unter **Apps > Messaging > Automations** die Vorlage **Abandoned checkout** wählen, **Turn on automation** klicken, prüfen, **Continue**. Ihre bisherigen Einstellungen werden übernommen. Der Wechsel ist laut Hilfe **endgültig**: Zurück zur alten E-Mail geht danach nicht mehr.

In der neuen Automatisierung bearbeiten Sie Empfänger (To), Betreff, Vorschautext, Absender und den Inhalt der E-Mail. Die Wartezeit bis zum Versand ändern Sie über [Shopify Flow](/de/blog/shopify-flow-automatisierung): in der Automatisierung **Edit**, dann den Workflow in Flow anpassen. Legen Sie eine zweite Automatisierung dieser Art an, startet sie mit **zehn Stunden** Wartezeit.

**Alte E-Mail (Legacy):** Sie kann laut Hilfe weiter genutzt werden, bis Shopify sie entfernt. Eingestellt werden dort „Send to“ (welche Besucher) und „Send after“ (wie lange warten), der Text liegt in der Benachrichtigungsvorlage **Abandoned checkout**. Wie Sie Vorlagen auf Deutsch bringen, steht in [Shopify E-Mail-Benachrichtigungen](/de/blog/shopify-email-benachrichtigungen).

Keine Erinnerung geht raus, wenn der Kunde inzwischen bestellt hat, die Zahlung fehlschlug, an seine Adresse nicht geliefert wird, keine Produkte mehr verfügbar sind, oder wenn er danach einen neueren Checkout abgebrochen hat und dessen Wartezeit noch läuft.

## Einwilligung: wer die E-Mail bekommen darf

Die neue Automatisierung schickt die E-Mail **standardmäßig nur an Kunden, die E-Mail-Marketing abonniert haben**. Im Feld To lässt sich das auf **All customers** umstellen.

In Deutschland wird eine Warenkorb-Erinnerung verbreitet als Werbung eingeordnet, für die es eine Einwilligung braucht. Die vorsichtige Einstellung ist deshalb die Standardeinstellung: nur an Abonnenten. Ob Sie auf „alle Kunden“ umstellen, klären Sie mit Ihrem Anwalt oder Rechtstext-Anbieter, nicht mit der Shopify-Hilfe. Dazu passt eine saubere Einwilligung im Checkout und im Cookie-Banner, mehr in [Shopify Cookie-Banner und Datenschutz](/de/blog/shopify-cookie-banner-datenschutz).

## Rabattcode in der Erinnerung: ja oder nein

Sie können der E-Mail einen Rabattcode mitgeben, der beim Klick auf den Link im Checkout landet. Drei Punkte aus der Hilfe:

- Den Code legen Sie vorher als normalen Rabatt an. Keine Sonderzeichen im Namen.
- Ein Hinweis „Sie haben einen Rabatt bekommen“ erscheint **nicht automatisch**. Den Satz schreiben Sie selbst in die E-Mail.
- Hatte der Kunde schon einen anderen Code eingegeben, **ersetzt** der Erinnerungs-Code diesen.

Mein Rat: Starten Sie ohne Rabatt. Wer jede Erinnerung mit Rabatt verschickt, bringt Stammkunden bei, den Checkout absichtlich abzubrechen. Wie Rabatte in Shopify funktionieren, steht in [Shopify Rabattcodes und automatische Rabatte](/de/blog/shopify-rabattcodes-automatische-rabatte).

## Einzelne Kunden von Hand anschreiben

In **Orders > Abandoned checkouts** den Checkout öffnen und auf die E-Mail-Adresse des Kunden klicken. Ihr Mailprogramm öffnet sich mit dem Link zum Checkout. Achtung: **Jeder, der den Link hat, kann diesen Checkout fortsetzen**, und der Link lässt sich nach dem Versand nicht deaktivieren. Schicken Sie ihn also nur an genau diesen Kunden. Das lohnt sich bei großen Warenkörben oder wenn die Timeline einen Zahlungsfehler zeigt.

## Wirkt die Erinnerung? So messen Sie es

Unter **Apps > Messaging > Automations** zeigt Shopify für die neue Automatisierung Reichweite, Sitzungen, Bestellungen, Conversion Rate und Umsatz. Ein detaillierter Bericht öffnet sich über das Menü der Automatisierung mit **View report**. Als zurückgeholt zählt ein Checkout, sobald der Kunde bestellt, egal ob über den Link in der E-Mail oder von selbst.

Viele abgebrochene Checkouts sind oft ein Hinweis auf ein Problem im Checkout selbst: unerwartete Versandkosten, fehlende Zahlungsart, Fehler bei der Adresse. Schauen Sie deshalb auch in die Timeline einzelner Fälle. Was sich am Checkout anpassen lässt, steht in [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen), welche Zahlungsarten in Deutschland erwartet werden, in [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland).

## Checkliste

1. Läuft die Erinnerung überhaupt? Email status in Orders > Abandoned checkouts prüfen.
2. Neue Automatisierung oder noch Legacy? Wechsel bewusst entscheiden, er ist endgültig.
3. Empfänger: nur Abonnenten, oder rechtlich geprüft alle Kunden?
4. Betreff, Text und Absender auf Deutsch und in Ihrem Ton?
5. Wartezeit passend zu Ihren Produkten eingestellt?
6. Rabatt: bewusst ja oder nein, mit erklärendem Satz?
7. Auswertung einmal im Monat angesehen?
8. Auffällige Fälle in der Timeline auf Zahlungs- oder Versandfehler geprüft?

## Wie ich es handhabe

Einen Fall mit dokumentierten Zahlen zu zurückgeholten Checkouts habe ich nicht in meinem Portfolio. Mein Teil ist die Einrichtung: Automatisierung prüfen oder umstellen, deutsche Texte im Design des Shops, Wartezeit in Flow, Rabattlogik, und vor allem die Ursachen im Checkout finden, wegen derer Kunden abbrechen. Die Frage der Einwilligung entscheiden Sie mit Ihrem Anwalt. Im Admin arbeite ich über ein Collaborator-Konto mit begrenzten Rechten.

## Häufige Fragen

**Warum haben manche abgebrochenen Checkouts keinen E-Mail-Status?** Meist ist die Erinnerung nicht eingeschaltet, der Kunde ist kein Abonnent, oder einer der Ausschlussgründe greift. Die Hinweise in der Liste zeigen den Grund.

**Kann ich auch eine SMS schicken?** Die Shopify-Hilfe zur Checkout-Erinnerung beschreibt nur E-Mail. Für SMS braucht es in der Regel eine App, und auch dafür eine Einwilligung.

**Wie lange bleiben abgebrochene Checkouts gespeichert?** Drei Monate, danach löscht Shopify sie automatisch.

**Gilt das auch für den Warenkorb, nicht nur den Checkout?** Shopify erfasst Kunden, die den Checkout begonnen und ihre E-Mail eingegeben haben. Wer nur etwas in den Warenkorb legt, ohne den Checkout zu starten, landet nicht in dieser Liste.

## Wissen Sie, warum Kunden im Checkout abbrechen?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact): Ich gehe den Weg bis zum Checkout wie ein Kunde durch und sage Ihnen, wo es hakt. Einrichtung und laufende Pflege passen zur [Shopify Betreuung](/de/services/shopify-betreuung).

**Weiterlesen:** [Shopify Shop optimieren lassen](/de/blog/shopify-shop-optimieren-lassen) · [Shopify Versand einrichten](/de/blog/shopify-versand-einrichten) · [Shopify Retouren einrichten](/de/blog/shopify-retouren-ruecksendungen) · [Shopify Newsletter und Double-Opt-in](/de/blog/shopify-newsletter-double-opt-in) · [Shopify Kundenkonten einrichten](/de/blog/shopify-kundenkonten-einrichten)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
