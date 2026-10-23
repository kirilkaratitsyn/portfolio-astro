---
publishedAt: 2026-10-23
title: "Shopify Rabattcode oder automatischer Rabatt: Was passt, und warum ein Code nicht greift"
date: 23. Oktober 2026
readingTime: 8 Min
excerpt: "Rabattcode oder automatischer Rabatt in Shopify: Unterschiede, Grenzen, Mindestbestellwert, typische Fehlermeldungen an der Kasse und wann ein Entwickler hilft."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Rabatte
  - Rabattcodes
  - Kasse
---

„Der Kunde sagt, der Code geht nicht.“ Das ist eine der häufigsten Meldungen im Shop-Alltag, und die Ursache liegt selten dort, wo man zuerst sucht. Meist steckt eine Einstellung dahinter: eine Kombination, die nicht erlaubt ist, ein Mindestbestellwert, der anders zählt als gedacht, oder ein Rabatt, der gar nicht für diese Produkte gilt. Dieser Text zeigt, was die Shopify-Hilfe zu Rabattcodes und automatischen Rabatten sagt, und er ist für Händler ohne technischen Hintergrund geschrieben.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs, Tarife und Grenzen ändern sich, prüfen Sie deshalb Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Wie Sie Rabatte und durchgestrichene Preise rechtlich korrekt bewerben, etwa nach den Regeln zur Preisangabe, ist eine Frage für Ihren Rechtsanwalt. Hier geht es nur um die Technik.

## Zwei Methoden, drei Typen

Die Hilfe trennt zwei Dinge, die oft vermischt werden:

- **Methode:** Wie der Kunde den Rabatt bekommt. Entweder gibt er an der Kasse einen **Rabattcode** ein, oder ein **automatischer Rabatt** greift im Warenkorb und an der Kasse, sobald die Bedingungen erfüllt sind.
- **Typ:** Was der Rabatt tut. Die Hilfe nennt Rabatte auf einen Betrag oder Prozentsatz (auf Produkte oder auf die Bestellung), „Kaufe X, erhalte Y“ und kostenlosen Versand.

Die Methode gilt für alle Typen. Einen Prozent-Rabatt gibt es also als Code und als automatischen Rabatt, ebenso Gratisversand.

## Code oder automatisch: Was die Hilfe dazu sagt

Zu automatischen Rabatten nennt die Hilfe als typische Einsatzfelder Aktionen für den ganzen Shop, für bestimmte Kollektionen und für größere Mengen. Sie können den Bestellvorgang vereinfachen und Conversion und Bestellwert erhöhen. Der Haken laut Hilfe: Kunden merken womöglich nicht, dass sie einen Rabatt bekommen, und sie erhalten unter Umständen einen zu hohen Rabatt.

Rabattcodes sind laut Hilfe die häufigste Methode, etwa für E-Mail-Kampagnen oder Partnerschaften. Sie können Interesse, ein Gefühl der Exklusivität und Dringlichkeit erzeugen. Der Haken: Vergessene Codes können zu Warenkorbabbrüchen führen.

Als Faustregel aus der Hilfe heißt das: Eine Aktion für alle, etwa Gratisversand an einem Feiertag, passt zum automatischen Rabatt. Eine Aktion für eine bestimmte Gruppe, etwa einen E-Mail-Verteiler, passt zum Code. Was bei Ihren Kunden besser funktioniert, sagt die Hilfe nicht, das zeigen nur Ihre eigenen Zahlen.

## Was sich bei einem Code einstellen lässt

Beim Anlegen eines Rabattcodes können Sie laut Hilfe unter anderem festlegen:

- den **Zeitraum**, in dem der Code gilt
- wie oft er **insgesamt** genutzt werden darf, und ob er je Kunde nur **einmal** gilt (die Hilfe sagt, dass dafür die E-Mail-Adresse oder Telefonnummer des Kunden verfolgt wird)
- einen **Mindestbestellwert** oder eine **Mindestmenge**
- für welche **Produkte, Kollektionen oder Varianten** er gilt
- welche **Kunden, Kundensegmente oder Märkte** ihn nutzen dürfen
- ob er sich mit **anderen Rabattklassen** kombinieren lässt

Zeitangaben richten sich nach der Zeitzone, die Sie im Admin eingestellt haben. Wenn Sie ein Enddatum setzen, endet der Rabatt zur eingestellten Uhrzeit in dieser Zeitzone.

## Grenzen, die man kennen sollte

Aus der Hilfe zu Codes und automatischen Rabatten:

- Ein Code kann für **bis zu 100** bestimmte Kunden, Produkte und Varianten gelten. Darüber erscheint eine Fehlermeldung.
- Pro Shop gibt es eine Obergrenze von **20 Millionen** eindeutigen Codes.
- Es sind höchstens **25 aktive automatische Rabatte** möglich, App-Rabatte eingerechnet.
- Der **Rabatttyp** lässt sich nach dem Anlegen nicht mehr ändern. Alles andere können Sie bearbeiten. Soll der Typ ein anderer sein, legen Sie den Rabatt neu an.
- Der Name eines Codes sollte **keine Sonderzeichen** enthalten, damit er korrekt in die Kassen-URL übernommen wird.
- **Sonderfall Versand:** Betrags- und Prozentrabatte gelten laut Hilfe nicht für Versandkosten. Dafür gibt es den separaten Typ Gratisversand, auf Wunsch mit Ausnahme sehr teurer Versandarten.
- **Nach dem Kauf:** In der Verwaltung erstellte Rabatte gelten nicht für die Post-Purchase-Seite an der Kasse.
- **Durchgestrichene Preise:** Rabatte wirken erst im Warenkorb und an der Kasse. Für durchgestrichene Preise auf Produkt- und Kollektionsseiten nennt die Hilfe Vergleichspreise, eine Rabatt-App oder eine eigene Lösung.

## Wie der Mindestbestellwert zählt

Hier entstehen viele Missverständnisse. Die Hilfe sagt zum Mindestbestellwert:

- Er zählt **Produktpreise**. Versandkosten und Steuern gehören nie dazu.
- Bei einem Rabatt auf bestimmte Produkte oder Kollektionen zählen **nur diese Produkte**.
- Gekaufte Geschenkgutscheine zählen bei Betragsrabatten auf Produkte nicht mit, außer Sie wählen den Gutschein ausdrücklich aus. Bei Gratisversand zählen sie mit.
- Bei einem Bestellrabatt müssen zwei Summen den Mindestwert erreichen: die Summe vor Produktrabatten (ohne gekaufte Geschenkgutscheine) und die Zwischensumme nach Produktrabatten.
- Bei Gratisversand und „Kaufe X, erhalte Y“ gilt: Hat ein kombinierbarer Rabatt den Preis eines Produkts schon gesenkt, zählt für den Mindestwert der Gratisversand-Regel der gesenkte Preis, bei „Kaufe X, erhalte Y“ dagegen zählt ein bereits rabattiertes Produkt gar nicht mit.
- Geschenkgutscheine und Guthaben, die als **Zahlung** dienen, ändern den Mindestwert nicht, weil sie erst nach den Rabatten auf die Summe angerechnet werden.

Wenn ein Kunde meldet, sein Warenkorb liege über dem Mindestwert und der Code gehe trotzdem nicht, lohnt der Blick auf diese Punkte.

## Kombinieren: die kurze Fassung

Wie Rabatte zusammenspielen, beschreibt die Hilfe ausführlich, und ich fasse hier nur die Kernpunkte zusammen. Die Details zur Reihenfolge und zu Gratisartikeln stehen auch in [Gratisartikel ab Bestellwert in Shopify](/de/blog/shopify-gratisartikel-warenkorb).

- Jeder Rabatt gehört zu einer Klasse: **Produkt**, **Bestellung** oder **Versand**. Kombiniert wird nur, wenn die Einstellung **jedes** beteiligten Rabatts es erlaubt.
- Alle Händler können Bestellrabatte mit Gratisversand, Produktrabatte mit Gratisversand und Produktrabatte auf verschiedene Artikel kombinieren.
- Produktrabatte mit Bestellrabatten sowie Bestellrabatte untereinander gibt es laut Hilfe nur für berechtigte Händler. Voraussetzung ist unter anderem, dass der Shop keine Anpassungen oder Funktionen aus `checkout.liquid` nutzt (mehr dazu in [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen)).
- Mehrere Produktrabatte auf **derselben** Position brauchen Shopify Plus.
- Die Reihenfolge: zuerst Produktrabatte, dann Bestellrabatte auf die neue Zwischensumme, zuletzt Versandrabatte.
- Zwei Prozent-Bestellrabatte werden jeweils auf die ursprüngliche Zwischensumme gerechnet. Die Hilfe nennt als Beispiel 10 % und 20 %, zusammen also 30 % und nicht 28 %.
- Pro Bestellung sind bis zu fünf Produkt- oder Bestellcodes und ein Versandcode möglich.
- Lassen sich Rabatte nicht kombinieren, wird der für den Kunden **beste** angewendet.
- Kombinieren funktioniert nur im Online-Shop, über die Storefront API und in Shopify POS, nicht bei externen Kassen wie Facebook, Instagram oder Google.

## Warum greift der Code nicht? Die Meldungen im Überblick

Die Hilfe nennt diese Meldungen an der Kasse und ihre Ursachen:

- **„Enter a valid discount code“:** Der Code existiert nicht oder ist nicht aktiv. Auch ein deaktivierter Code führt zur Meldung, dass kein gültiger Rabatt zum eingegebenen Code gefunden wurde.
- **Der Code gilt nicht für die Artikel im Warenkorb:** Der Code existiert, passt aber nicht zu den Produkten im Warenkorb.
- **Mehrere Codes, die sich nicht kombinieren lassen:** Die Kasse wendet die beste Kombination an und weist darauf hin.
- **„Der Code wurde bereits verwendet“, obwohl keine Bestellung existiert:** Laut Hilfe wird ein Code beim Absenden der Bestellung gegen sein Nutzungslimit gehalten, bis die Zahlung abgeschlossen ist oder fehlschlägt. Eine abgelehnte Zahlung gibt den Code wieder frei. Bleibt ein Checkout unvollendet, kann der Code hängen bleiben. Das Löschen und Neuaktivieren oder Umbenennen setzt die Nutzungshistorie nicht zurück. Als Lösung nennt die Hilfe, in den Bestellungen nachzusehen und bei Bedarf einen neuen Code mit denselben Bedingungen zu erstellen.
- **Das Feld für den Rabattcode fehlt:** Es muss mindestens ein aktiver Code vorhanden sein. Bei einem Checkout aus einer Entwurfsbestellung ist das Feld standardmäßig nicht verfügbar. Bei Shop Pay muss sich der Kunde zuerst anmelden. Und eine App, die Preise oder das Kassenverhalten verändert, kann das Feld ebenfalls ausblenden.

Außerdem gilt: Ein Rabatt, der nur für bestimmte Kundensegmente angelegt wurde, gilt laut Hilfe nur für bestehende Kunden. Wer zum ersten Mal bestellt, hat noch kein Kundenprofil und ist erst nach der ersten Bestellung im Segment.

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nichts dazu, **wie hoch ein Rabatt sein sollte**, ob Codes oder automatische Rabatte bei Ihren Kunden mehr Bestellungen bringen oder welche Aktion zu Ihrem Sortiment passt. Sie sagen auch nichts dazu, wie Rabatte und durchgestrichene Preise rechtlich korrekt angegeben werden müssen. Das klären Sie mit Ihrem Rechtsanwalt, Hintergrund zu Rechtstexten finden Sie in [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien). Und was die Umsetzung kostet, hängt vom Umfang ab.

## Beispiele aus der Praxis

Für [Elanora Skin](/de/projects/elanora-skin), eine Hautpflegemarke, die in 15 Märkten in zwei Sprachen verkauft, habe ich im Rahmen der laufenden Betreuung eine Angebotslogik gebaut, die sich nach Markt und Sprache richtet, darunter Gratisgeschenke im Warenkorb mit durchgestrichenem Preis. Zur Kasse gehörte, dass die Rabatt-Labels in beiden Sprachen korrekt angezeigt werden. Ob so etwas zu Ihrem Shop passt, hängt von Tarif, Sortiment und Märkten ab.

## Vor dem Start: eine Checkliste

1. Soll die Aktion für **alle** gelten (automatisch) oder für eine **Gruppe** (Code)?
2. Welcher **Typ** passt: Betrag oder Prozent, „Kaufe X, erhalte Y“ oder Gratisversand? Der Typ lässt sich später nicht mehr ändern.
3. Für welche **Produkte, Kollektionen oder Varianten** soll der Rabatt gelten, und wie zählt dabei der **Mindestbestellwert**?
4. Soll sich der Rabatt mit **anderen** kombinieren lassen, und erfüllt der Shop die Voraussetzungen dafür (etwa kein `checkout.liquid`)?
5. Gilt der Rabatt **zeitlich** richtig, mit Blick auf die Zeitzone im Admin?
6. Sind **Nutzungslimits** gesetzt (insgesamt und je Kunde)?
7. Mit **Testbestellung** geprüft, auch mit zwei Codes zugleich und im Handy-Browser?
8. Verkaufen Sie in mehreren Ländern: Sind Labels und Texte in jeder Sprache geprüft? (Siehe [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).)

## Wann ein Entwickler hilft

Einen einfachen Code oder automatischen Rabatt legen Sie selbst im Admin an. Hilfe lohnt sich, wenn gestaffelte Rabatte, eigene Berechtigungsregeln oder ein Geschenk, das automatisch im Warenkorb landet, gebraucht werden, wenn durchgestrichene Preise auf Produktseiten erscheinen sollen, wenn Codes mit bestimmter Meldung abgelehnt werden sollen (die Hilfe verweist dafür auf eine Discount Function) oder wenn der Shop zuerst von `checkout.liquid` wegmuss. Wie Anpassungen sauber und wartbar bleiben, steht in [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization). Danach gehört die Einrichtung zur laufenden Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Was ist besser, Rabattcode oder automatischer Rabatt?** Das hängt vom Ziel ab. Laut Hilfe passt der automatische Rabatt zu Aktionen für alle, der Code zu gezielten Aktionen wie E-Mail-Kampagnen. Welche Variante bei Ihren Kunden besser funktioniert, nennt die Hilfe nicht.

**Kann ein Kunde mehrere Rabattcodes nutzen?** Ja, wenn die Einstellungen aller beteiligten Rabatte es erlauben. Bis zu fünf Produkt- oder Bestellcodes und ein Versandcode sind möglich. Sonst wendet die Kasse die beste Kombination an.

**Warum wird mein Code als „bereits verwendet“ angezeigt?** Laut Hilfe kann ein unvollendeter Checkout den Code festhalten. Prüfen Sie die Bestellungen und erstellen Sie bei Bedarf einen neuen Code mit denselben Bedingungen.

**Kann ich den Rabatt auf der Produktseite durchgestrichen anzeigen?** Nicht mit den Standardrabatten. Dafür nennt die Hilfe Vergleichspreise, eine Rabatt-App oder eine eigene Lösung.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quellcode und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Was ich sonst für Shops mache, finden Sie unter [Leistungen](/de/services).

**Weiterlesen:** [Gratisartikel ab Bestellwert in Shopify](/de/blog/shopify-gratisartikel-warenkorb) · [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Geschenkkarten einrichten](/de/blog/shopify-geschenkkarten-gutscheine)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
