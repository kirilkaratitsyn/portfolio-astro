---
publishedAt: 2026-10-23
title: "Shopify Rabattcode oder automatischer Rabatt: Was passt, und warum ein Code nicht greift"
date: 23. Oktober 2026
readingTime: 8 Min
excerpt: "Rabattcode oder automatischer Rabatt in Shopify: Unterschiede, Grenzen, Mindestbestellwert, typische Fehlermeldungen an der Kasse und wann ein Entwickler hilft."
image: /og/projects/silk-tallow.jpg
topic: build
tags:
  - Shopify
  - Rabatte
  - Rabattcodes
  - Kasse
---

„Der Kunde sagt, der Code geht nicht.“ Meist steckt eine Einstellung dahinter: eine nicht erlaubte Kombination, ein Mindestbestellwert, der anders zählt als gedacht, oder ein Rabatt, der für diese Produkte nicht gilt. Hier steht, was die Shopify-Hilfe zu Rabattcodes und automatischen Rabatten sagt.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs, Tarife und Grenzen ändern sich, prüfen Sie deshalb Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht.

## Zwei Methoden, drei Typen

- **Methode:** Wie der Kunde den Rabatt bekommt. Er gibt an der Kasse einen **Rabattcode** ein, oder ein **automatischer Rabatt** greift im Warenkorb und an der Kasse, sobald die Bedingungen erfüllt sind.
- **Typ:** Was der Rabatt tut. Die Hilfe nennt Betrag oder Prozentsatz (auf Produkte oder auf die Bestellung), „Kaufe X, erhalte Y“ und kostenlosen Versand.

Jeden Typ gibt es als Code und als automatischen Rabatt.

## Code oder automatisch: Was die Hilfe dazu sagt

**Automatische Rabatte** passen laut Hilfe zu Aktionen für den ganzen Shop, für bestimmte Kollektionen und für größere Mengen. Sie können den Bestellvorgang vereinfachen und Conversion und Bestellwert erhöhen. Der Haken: Kunden bemerken den Rabatt womöglich nicht oder erhalten einen zu hohen Rabatt.

**Rabattcodes** sind laut Hilfe die häufigste Methode, etwa für E-Mail-Kampagnen oder Partnerschaften. Sie können Interesse, ein Gefühl der Exklusivität und Dringlichkeit erzeugen. Der Haken: Vergessene Codes können zu Warenkorbabbrüchen führen.

Als Faustregel: Eine Aktion für alle, etwa Gratisversand an einem Feiertag, passt zum automatischen Rabatt. Eine Aktion für eine Gruppe, etwa einen E-Mail-Verteiler, passt zum Code. Was bei Ihren Kunden besser funktioniert, zeigen nur Ihre eigenen Zahlen.

## Was sich bei einem Code einstellen lässt

Laut Hilfe legen Sie unter anderem fest:

- den **Zeitraum**, in dem der Code gilt
- wie oft er **insgesamt** und ob er je Kunde nur **einmal** gilt (dafür wird die E-Mail-Adresse oder Telefonnummer des Kunden verfolgt)
- einen **Mindestbestellwert** oder eine **Mindestmenge**
- für welche **Produkte, Kollektionen oder Varianten** er gilt
- welche **Kunden, Kundensegmente oder Märkte** ihn nutzen dürfen
- ob er sich mit **anderen Rabattklassen** kombinieren lässt

Zeitangaben und Enddatum richten sich nach der Zeitzone im Admin.

## Grenzen, die man kennen sollte

Aus der Hilfe zu Codes und automatischen Rabatten:

- Ein Code kann für **bis zu 100** bestimmte Kunden, Produkte und Varianten gelten. Darüber erscheint eine Fehlermeldung.
- Pro Shop sind höchstens **20 Millionen** eindeutige Codes möglich.
- Höchstens **25 automatische Rabatte** können aktiv sein, App-Rabatte eingerechnet.
- Der **Rabatttyp** lässt sich nach dem Anlegen nicht ändern. Für einen anderen Typ legen Sie den Rabatt neu an.
- Der Codename sollte **keine Sonderzeichen** enthalten, damit er korrekt in die Kassen-URL übernommen wird.
- **Versand:** Betrags- und Prozentrabatte gelten nicht für Versandkosten. Dafür gibt es den Typ Gratisversand, auf Wunsch ohne sehr teure Versandarten.
- **Nach dem Kauf:** In der Verwaltung erstellte Rabatte gelten nicht für die Post-Purchase-Seite an der Kasse.
- **Durchgestrichene Preise:** Rabatte wirken erst im Warenkorb und an der Kasse. Für Produkt- und Kollektionsseiten nennt die Hilfe Vergleichspreise, eine Rabatt-App oder eine eigene Lösung.

## Wie der Mindestbestellwert zählt

Laut Hilfe gilt:

- Es zählen **Produktpreise**, nie Versandkosten und Steuern.
- Bei einem Rabatt auf bestimmte Produkte oder Kollektionen zählen **nur diese Produkte**.
- Gekaufte Geschenkgutscheine zählen bei Betragsrabatten auf Produkte nicht mit, außer Sie wählen den Gutschein ausdrücklich aus. Bei Gratisversand zählen sie mit.
- Bei einem Bestellrabatt müssen zwei Summen den Mindestwert erreichen: die Summe vor Produktrabatten (ohne gekaufte Geschenkgutscheine) und die Zwischensumme nach Produktrabatten.
- Hat ein kombinierbarer Rabatt einen Produktpreis schon gesenkt, zählt bei Gratisversand der gesenkte Preis. Bei „Kaufe X, erhalte Y“ zählt ein bereits rabattiertes Produkt gar nicht mit.
- Geschenkgutscheine und Guthaben als **Zahlung** ändern den Mindestwert nicht. Sie werden erst nach den Rabatten angerechnet.

## Kombinieren: die kurze Fassung

Die Details zur Reihenfolge und zu Gratisartikeln stehen in [Gratisartikel ab Bestellwert in Shopify](/de/blog/shopify-gratisartikel-warenkorb). Die Kernpunkte aus der Hilfe:

- Jeder Rabatt gehört zu einer Klasse: **Produkt**, **Bestellung** oder **Versand**. Kombiniert wird nur, wenn **jeder** beteiligte Rabatt es erlaubt.
- Alle Händler können Bestellrabatte mit Gratisversand, Produktrabatte mit Gratisversand und Produktrabatte auf verschiedene Artikel kombinieren.
- Produktrabatte mit Bestellrabatten sowie Bestellrabatte untereinander gibt es nur für berechtigte Händler. Der Shop darf unter anderem keine Anpassungen oder Funktionen aus `checkout.liquid` nutzen (siehe [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen)).
- Mehrere Produktrabatte auf **derselben** Position brauchen Shopify Plus.
- Reihenfolge: zuerst Produktrabatte, dann Bestellrabatte auf die neue Zwischensumme, zuletzt Versandrabatte.
- Zwei Prozent-Bestellrabatte werden jeweils auf die ursprüngliche Zwischensumme gerechnet. Beispiel der Hilfe: 10 % und 20 % ergeben 30 % und nicht 28 %.
- Pro Bestellung sind bis zu fünf Produkt- oder Bestellcodes und ein Versandcode möglich.
- Lassen sich Rabatte nicht kombinieren, gilt der für den Kunden **beste**.
- Kombinieren funktioniert nur im Online-Shop, über die Storefront API und in Shopify POS, nicht bei externen Kassen wie Facebook, Instagram oder Google.

## Warum greift der Code nicht? Die Meldungen im Überblick

Die Hilfe nennt diese Meldungen an der Kasse und ihre Ursachen:

- **„Enter a valid discount code“:** Der Code existiert nicht, ist nicht aktiv oder wurde deaktiviert.
- **Der Code gilt nicht für die Artikel im Warenkorb:** Der Code existiert, passt aber nicht zu diesen Produkten.
- **Mehrere Codes, die sich nicht kombinieren lassen:** Die Kasse wendet die beste Kombination an und weist darauf hin.
- **„Der Code wurde bereits verwendet“, obwohl keine Bestellung existiert:** Beim Absenden der Bestellung wird der Code gegen sein Nutzungslimit gehalten, bis die Zahlung abgeschlossen ist oder fehlschlägt. Eine abgelehnte Zahlung gibt ihn wieder frei. Bleibt ein Checkout unvollendet, kann der Code hängen bleiben. Löschen und Neuaktivieren oder Umbenennen setzt die Nutzungshistorie nicht zurück. Die Hilfe rät, die Bestellungen zu prüfen und bei Bedarf einen neuen Code mit denselben Bedingungen zu erstellen.
- **Das Feld für den Rabattcode fehlt:** Es muss mindestens ein aktiver Code vorhanden sein. Bei einem Checkout aus einer Entwurfsbestellung ist das Feld standardmäßig nicht verfügbar. Bei Shop Pay muss sich der Kunde zuerst anmelden. Auch eine App, die Preise oder das Kassenverhalten verändert, kann das Feld ausblenden.

Ein Rabatt nur für bestimmte Kundensegmente gilt laut Hilfe nur für bestehende Kunden. Erstbesteller haben noch kein Kundenprofil und sind erst nach der ersten Bestellung im Segment.

## Was die Hilfe hier nicht beantwortet

Die Hilfe sagt nicht, **wie hoch ein Rabatt sein sollte**, ob Codes oder automatische Rabatte bei Ihren Kunden mehr Bestellungen bringen oder welche Aktion zu Ihrem Sortiment passt. Die rechtlich korrekte Angabe von Rabatten und durchgestrichenen Preisen, etwa nach den Regeln zur Preisangabe, klären Sie mit Ihrem Rechtsanwalt, Hintergrund steht in [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien). Was die Umsetzung kostet, hängt vom Umfang ab.

## Beispiele aus der Praxis

Für [Silk Tallow](/de/projects/silk-tallow), eine natürliche Hautpflegemarke, habe ich eine Mystery-Gift- und Free-Gift-Logik für die Storefront gebaut. Die Geschenke aktualisieren sich im Warenkorb ohne Neuladen der Seite, und die Logik deckt die Warenkorb-Regeln und Sonderfälle der Aktion ab.

## Vor dem Start: eine Checkliste

1. Aktion für **alle** (automatisch) oder für eine **Gruppe** (Code)?
2. Welcher **Typ**: Betrag oder Prozent, „Kaufe X, erhalte Y“ oder Gratisversand? Er lässt sich später nicht ändern.
3. Welche **Produkte, Kollektionen oder Varianten**, und wie zählt der **Mindestbestellwert**?
4. Mit **anderen** Rabatten kombinierbar, und erfüllt der Shop die Voraussetzungen (etwa kein `checkout.liquid`)?
5. Stimmt der **Zeitraum** in der Zeitzone des Admins?
6. Sind **Nutzungslimits** gesetzt (insgesamt und je Kunde)?
7. Mit **Testbestellung** geprüft, auch mit zwei Codes zugleich und im Handy-Browser?
8. Bei mehreren Ländern: Labels und Texte in jeder Sprache geprüft? (Siehe [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).)

## Wann ein Entwickler hilft

Einen einfachen Code oder automatischen Rabatt legen Sie selbst im Admin an. Hilfe lohnt sich in diesen Fällen:

- gestaffelte Rabatte, eigene Berechtigungsregeln oder ein Geschenk, das automatisch im Warenkorb landet
- durchgestrichene Preise auf Produktseiten
- Codes, die mit bestimmter Meldung abgelehnt werden sollen (die Hilfe verweist auf eine Discount Function)
- ein Shop, der zuerst von `checkout.liquid` wegmuss

Wie Anpassungen wartbar bleiben, steht in [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization). Danach gehört die Einrichtung zur laufenden Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Was ist besser, Rabattcode oder automatischer Rabatt?** Laut Hilfe passt der automatische Rabatt zu Aktionen für alle, der Code zu gezielten Aktionen wie E-Mail-Kampagnen.

**Kann ein Kunde mehrere Rabattcodes nutzen?** Ja, wenn alle beteiligten Rabatte es erlauben: bis zu fünf Produkt- oder Bestellcodes und ein Versandcode. Sonst wendet die Kasse die beste Kombination an.

**Warum wird mein Code als „bereits verwendet“ angezeigt?** Laut Hilfe kann ein unvollendeter Checkout den Code festhalten. Prüfen Sie die Bestellungen und erstellen Sie bei Bedarf einen neuen Code mit denselben Bedingungen.

**Kann ich den Rabatt auf der Produktseite durchgestrichen anzeigen?** Nicht mit den Standardrabatten. Die Hilfe nennt Vergleichspreise, eine Rabatt-App oder eine eigene Lösung.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich Sichtbares, etwa Ladezeit, Apps im Quellcode und Seitenaufbau, und sage Ihnen, was auffällt. Weitere Arbeiten für Shops stehen unter [Leistungen](/de/services).

**Weiterlesen:** [Gratisartikel ab Bestellwert in Shopify](/de/blog/shopify-gratisartikel-warenkorb) · [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Geschenkkarten einrichten](/de/blog/shopify-geschenkkarten-gutscheine)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
