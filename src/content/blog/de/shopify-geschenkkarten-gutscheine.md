---
publishedAt: 2026-10-23
title: "Shopify Geschenkkarten einrichten: verkaufen, selbst erstellen und die Grenzen, die Sie vorher kennen sollten"
date: 23. Oktober 2026
readingTime: 9 Min
excerpt: "Shopify Geschenkkarten einrichten: Produkt oder selbst erstellte Karte, Höchstwerte, Währungen, Einlösung an der Kasse, Erstattung und Stolpersteine."
image: /og/projects/jula-bloom.jpg
topic: build
tags:
  - Shopify
  - Geschenkkarten
  - Gutscheine
  - Kasse
---

Wer Shopify Geschenkkarten einrichten will, sollte vorher wissen: Wird die Karte verkauft oder selbst erstellt, welche Höchstwerte gelten, wie laufen Währungen und Erstattungen? Hier steht, was das Shopify Help Center dazu sagt.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs, Gebühren und Grenzen ändern sich, prüfen Sie deshalb Ihren Admin. Steuern und Gültigkeitsdauer klären Sie mit Ihrer Steuerberatung oder Ihrem Anwalt, laut Hilfe sind die Regeln je nach Region verschieden. Hier geht es nur um die Technik.

## Zwei Wege: verkaufen oder selbst erstellen

Die Hilfe unterscheidet zwei Wege:

- **Geschenkkarten-Produkt:** Kunden kaufen es im Shop. Die Karte entsteht, wenn Sie die Bestellung abwickeln (standardmäßig automatisch, sobald die Bestellung bezahlt ist).
- **Karte im Admin erstellen:** Sie erzeugen eine Karte, ohne dass jemand zahlt. Das passt für Aktionen, Belohnungen, Erstattungen als Guthaben oder einen per Entwurfsbestellung bezahlten Sonderbetrag.

Der Empfänger bekommt eine digitale Karte mit einem eindeutigen Code. Für Shopify POS können Sie in unterstützten Ländern gedruckte Karten bestellen. Laut Hilfe lässt sich eine im Laden gekaufte Karte auch im Online-Shop einlösen.

## Höchstwerte und feste Beträge

- Der Wert ist immer ein Geldbetrag und größer als null.
- Ein **Geschenkkarten-Produkt** hat feste Beträge (Stufen). Kunden können im Shop **keinen freien Betrag** eingeben. Das Maximum pro Stufe liegt bei 10.000 USD oder dem Gegenwert in der Kartenwährung und lässt sich nicht erhöhen.
- Eine im **Admin erstellte** Karte darf bis zu 2.000 USD oder den Gegenwert betragen. Der Shopify Support kann dieses Limit nach Prüfung anheben oder absenken.
- Für einen Betrag ohne Stufe nennt die Hilfe einen Weg: **Entwurfsbestellung** über diesen Betrag anlegen, nach Zahlung die Karte im Admin erstellen und dem Kunden schicken.

Beim ersten Anlegen erzeugt Shopify mehrere Standardstufen in Ihrer Shop-Währung. Sie können sie ersetzen, ergänzen oder löschen, mindestens eine muss bleiben. Jede Stufe ist eine Variante des Produkts.

## Ein Geschenkkarten-Produkt anlegen

Im Admin unter **Produkte > Geschenkkarten** legen Sie das Produkt an. Diese Punkte aus der Hilfe übersieht man leicht:

- **Währung:** Karten in der Shop-Währung lassen sich in jeder Währung einlösen. Karten in einer **lokalen Währung** nur, wenn die Währung an der Kasse übereinstimmt oder die **währungsübergreifende Einlösung** aktiviert ist. Diese Einstellung lässt sich nach dem Anlegen nicht mehr ändern.
- **Märkte und Kataloge:** Für lokale Währungen brauchen Sie Märkte und Kataloge mit passender Preisliste. Solche Karten müssen Sie selbst in Katalogen veröffentlichen. Mehr dazu: [Shopify Markets: In mehrere Länder verkaufen](/de/blog/shopify-markets-mehrere-laender).
- **Kein Vergleichspreis für Rabatte:** Nutzen Sie stattdessen Rabattcodes und automatische Rabatte.
- **Kollektionsrabatte greifen nicht:** Rabatte müssen sich gezielt auf das Geschenkkarten-Produkt oder die Variante beziehen.

Wird ein Produkt später bearbeitet, archiviert oder gelöscht, bleiben ausgegebene Karten einlösbar.

## Rabatte auf Geschenkkarten

Laut Hilfe gelten Rabattcodes und automatische Rabatte auch für Geschenkkarten-Produkte, als Betrag, Prozent oder "Kaufe X, erhalte Y". Maßgeblich ist der Wert der Karte, nicht der gezahlte Preis: Bei "100 USD Karte für 80 USD" zahlt der Kunde 80, die Karte hat 100 Wert. Grundlagen: [Shopify Rabattcode oder automatischer Rabatt](/de/blog/shopify-rabattcodes-automatische-rabatte).

## Empfänger und Versanddatum

Im Online-Shop können Käufer einen Empfänger nur angeben, wenn das **Theme Empfängerfelder für Geschenkkarten unterstützt**. Die Hilfe beschreibt, wie man sie ergänzt. Mit Empfänger bekommt der Käufer laut Hilfe einen **Geschenkkarten-Beleg** mit einer Kopie der Karte und dem Empfänger oder dem geplanten Versanddatum. Der Empfänger erhält die Benachrichtigung "Neue Geschenkkarte". Fehlen die Felder, ist das eine kleine Theme-Anpassung, siehe [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization).

## Einlösen an der Kasse

- Der Kunde gibt den Code an der Kasse ein, Groß- und Kleinschreibung sind egal. Das Feld erscheint nur, wenn es aktive Karten im Shop gibt.
- Reicht das Guthaben nicht, wählt der Kunde eine weitere Zahlungsart oder eine zweite Karte. Restguthaben bleibt für weitere Bestellungen.
- Das Guthaben gilt für die gesamte Summe inklusive Steuern und Versand. Bei Drittanbieter- oder geschätzten Steuern kann sich die Summe nach dem Abzug noch ändern.
- Karten sind mit **Rabattcodes** kombinierbar.
- Bei einem **Abo-Produkt** gilt die Karte für die erste Zahlung, nicht für wiederkehrende Zahlungen. Mehr dazu: [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions).
- Mit einer Geschenkkarte lässt sich **keine weitere Geschenkkarte** kaufen.
- Einlösbar sind Karten in allen Kanälen mit Shopify-Checkout, etwa Online-Shop, Shop-App und Shopify POS.

Die Einlösung unter Bedingungen auszublenden, erfordert laut Hilfe eine App für Zahlungsanpassungen. Den Wortlaut "Geschenkkarte anwenden" ändern Sie unter den Checkout-Sprachen, ohne Code. Mehr dazu: [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen).

## Karten verwalten

Unter **Produkte > Geschenkkarten** sehen Sie alle Karten.

- **Code:** Im Admin sehen Sie nur die **letzten vier Zeichen**, den vollen Code nur der Kunde. Der 16-stellige Code ist zufällig und nicht anpassbar.
- **Guthaben:** Es lässt sich im Admin **nicht direkt ändern**. Es sinkt durch Einlösung, steigt durch Erstattung oder wird per API durch eine eigene Integration angepasst.
- **Ablauf:** Standardmäßig laufen Karten nicht ab, weil das in manchen Ländern unzulässig ist. Ein Ablaufdatum beträgt standardmäßig fünf Jahre, einstellbar in Jahren, Monaten oder Tagen unter **Einstellungen > Zahlungen > Ablauf von Geschenkkarten**. Die Hilfe warnt: vorher die Vorschriften Ihres Landes prüfen.
- **Erneut senden:** Verliert ein Kunde den Code, schicken Sie die Karte erneut, bei teilweise genutzten Karten mit dem Restguthaben.
- **Deaktivieren:** Eine Karte lässt sich nicht löschen. Deaktivieren ist endgültig: Die Karte kann nicht wieder aktiviert, aufgeladen oder erstattet werden.
- **Export:** Als CSV mit den letzten vier Zeichen. Einen vollständigen Code-Export gibt es laut Hilfe nicht, beim Umzug in ein anderes System müssen gegebenenfalls neue Codes ausgestellt werden. Mehr: [WooCommerce zu Shopify](/de/blog/woocommerce-to-shopify).
- **Zwischen Shops:** Eine Karte gilt nur im ausgebenden Shop.

## Erstattungen

Wurde mit einer Karte bezahlt, kann die Erstattung auf die Karte gehen, das Guthaben wird automatisch aktualisiert. Bei Teilerstattungen mit gemischter Zahlung geht der Betrag zuerst auf die Karte. Sonderfälle laut Hilfe:

- Aufladen bei Rückgaben und Umtausch funktioniert nur, wenn die ursprüngliche Zahlung über Shopify Payments lief. Sonst erstellen Sie eine neue Karte über den Erstattungsbetrag.
- Eine **abgelaufene** Karte erhält keine Erstattung, bis Sie das Ablaufdatum in die Zukunft setzen. Danach können Sie es zurücksetzen.
- Eine **deaktivierte** Karte erhält keine Erstattung. Stellen Sie eine neue Karte aus oder erstatten Sie als Guthaben.
- Eine **gekaufte** Karte erstatten Sie wie jedes Produkt, sie wird dabei automatisch deaktiviert. Im Admin erstellte Karten lassen sich nicht erstatten, da nichts gezahlt wurde.

## Währungen und Wechselkurs

Mit währungsübergreifender Einlösung kann eine Karte in lokaler Währung an der Kasse in anderen Währungen genutzt werden. Verschiebt sich der Wechselkurs zwischen Verkauf und Einlösung, kann Sie das laut Hilfe Geld kosten. Die Hilfe nennt es Wechselkursdrift (FX drift) und rechnet ein Beispiel mit einer Karte über 100 CAD vor. Betroffen ist, wer die Auszahlung in einer anderen Währung als der Kartenwährung erhält. Zur Vermeidung schalten Sie die währungsübergreifende Einlösung beim Anlegen aus.

## Apple Wallet und Benachrichtigungen

Unter **Einstellungen > Zahlungen** aktivieren Sie Apple-Wallet-Pässe. Kunden bekommen dann in der E-Mail die Schaltfläche "Zu Apple Wallet hinzufügen", prüfen das Guthaben und lösen die Karte im Laden per QR-Code ein. Die E-Mails "Neue Geschenkkarte" und "Geschenkkarten-Beleg" passen Sie unter Kundenbenachrichtigungen an. Dafür braucht es laut Hilfe HTML-, CSS- und Liquid-Kenntnisse. Für ein eigenes Kartenbild empfiehlt die Hilfe 950 × 550 Pixel. Wert und Code lassen sich im Theme nicht verändern.

## Typische Stolpersteine

- **Nach der Auslieferung entsteht keine Karte.** Sie entsteht nur bei einem echten Geschenkkarten-Produkt, nicht bei einem normalen Produkt namens "Gutschein". Lösung der Hilfe: Karte im Admin über den Bestellbetrag erstellen und dem Kunden schicken, künftig ein Geschenkkarten-Produkt anlegen.
- **Karte wird nicht automatisch erfüllt.** Bei mittlerem oder hohem Betrugsrisiko oder abgeschalteter automatischer Erfüllung erfüllen Sie manuell auf der Bestellseite.
- **Apple-Wallet-Schaltfläche fehlt.** Mögliche Gründe: Dem Theme fehlt der Code, die Benachrichtigung wurde angepasst und der Code ging verloren, oder die Test-E-Mail wurde direkt aus dem Admin verschickt. Eine Testbestellung enthält die Schaltfläche.
- **Gebühren:** Für Shops, die am oder nach dem 12. Mai 2025 erstellt wurden, fallen laut Hilfe auf den mit Karte bezahlten Betrag Transaktionsgebühren für Drittanbieter an. Details stehen auf der Gebührenseite von Shopify.

## Was die Hilfe hier nicht beantwortet

Die Hilfe sagt nicht, **ob sich Geschenkkarten für Ihr Sortiment lohnen**, welche Stufen passen oder wie viel Umsatz sie bringen. Offen bleibt auch die rechtliche Seite: Steuer beim Verkauf oder bei der Einlösung, Mindestlaufzeit, Hinweise im Shop. Hintergrund: [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Beispiele aus der Praxis

Ein veröffentlichtes Projekt, bei dem ich ausschließlich Geschenkkarten eingerichtet habe, gibt es nicht. Verwandt ist [Jula Bloom](/de/projects/jula-bloom), eine Seattler Marke für Seidenblumen mit Sträußen, Vasen, Geschenkgutscheinen und einer Mini-Linie. Beim Umzug von WooCommerce zu Shopify gehörte die Vorbereitung der Geschenkgutscheine zu den Aufgaben, neben Redirect-Map, E-Mail-Anmeldung und Pop-ups. Wie die Karten dort technisch gelöst sind, behaupte ich nicht. Der Fall zeigt: Bei einem Plattformwechsel müssen Geschenkkarten eigens eingeplant werden.

## Vor dem Start: eine Checkliste

1. Karten **verkaufen** (Produkt) oder nur **verteilen** (Admin)?
2. Passende **Stufen** festgelegt?
3. **Empfängerfelder** im Theme vorhanden?
4. **Lokale Währung**, **währungsübergreifende Einlösung** und Katalog entschieden?
5. **Ablauf** mit Steuerberatung oder Anwalt geklärt?
6. **Erstattungen** geregelt, vor allem mit Shopify Payments?
7. **Benachrichtigungs-E-Mail** per **Testbestellung** geprüft, inklusive Apple Wallet?
8. **Rabatte** nicht über den Vergleichspreis gesetzt?

## Wann ein Entwickler hilft

Ein Geschenkkarten-Produkt legen Sie selbst an. Hilfe lohnt sich in diesen Fällen:

- Dem Theme fehlen die **Empfängerfelder**.
- **E-Mail-Vorlagen** oder Karten-Seite sollen zur Marke passen.
- Karten müssen in **mehreren Märkten und Währungen** laufen.
- Die Einlösung soll unter Bedingungen eingeschränkt werden.

Für das automatische Ausstellen nach einer Bestellung empfiehlt die Hilfe [Shopify Flow](/de/blog/shopify-flow-automatisierung). Danach gehört das Setup in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kann der Kunde einen beliebigen Betrag wählen?** Nicht im Shop, dort gibt es feste Stufen. Sonderbeträge laufen über Entwurfsbestellung und eine im Admin erstellte Karte.

**Kann ich eine Karte löschen?** Nein. Sie lässt sich nur deaktivieren, und das ist endgültig.

**Kann ich den Betrag einer Karte ändern?** Nicht direkt im Admin. Das Guthaben ändert sich nur durch Einlösung, Erstattung oder eine API-Integration.

**Verfallen Geschenkkarten?** Standardmäßig nicht. Ein Ablaufdatum können Sie setzen. Prüfen Sie vorher die Vorschriften Ihres Landes.

**Kann man mit einer Geschenkkarte ein Abo bezahlen?** Die erste Zahlung ja, wiederkehrende Zahlungen nein.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe, was von außen sichtbar ist, ohne Zugang zu Ihrem Konto, und sage Ihnen, was auffällt. Was ich sonst für Shops mache, steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Rabattcode oder automatischer Rabatt](/de/blog/shopify-rabattcodes-automatische-rabatte) · [Shopify Markets: In mehrere Länder verkaufen](/de/blog/shopify-markets-mehrere-laender) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
