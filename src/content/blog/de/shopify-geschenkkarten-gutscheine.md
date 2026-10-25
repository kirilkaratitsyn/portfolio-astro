---
publishedAt: 2026-10-23
title: "Shopify Geschenkkarten einrichten: verkaufen, selbst erstellen und die Grenzen, die Sie vorher kennen sollten"
date: 23. Oktober 2026
readingTime: 8 Min
excerpt: "Geschenkkarten in Shopify: Unterschied zwischen Produkt und selbst erstellter Karte, Höchstwerte, Währungen, Einlösung an der Kasse, Erstattung und typische Stolpersteine."
image: /og/projects/jula-bloom.jpg
topic: build
tags:
  - Shopify
  - Geschenkkarten
  - Gutscheine
  - Kasse
---

"Kunden fragen nach einem Gutschein zum Verschenken." Das ist oft der Anlass, sich mit Geschenkkarten zu beschäftigen. Shopify bringt sie mit. Trotzdem gibt es Unterschiede, die man vorher kennen sollte: ob die Karte verkauft oder selbst erstellt wird, welche Höchstwerte gelten, wie Währungen und Erstattungen laufen. Dieser Artikel zeigt, was das Shopify Help Center dazu sagt, für Händler ohne technischen Hintergrund.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs, Gebühren und Grenzen ändern sich, prüfen Sie deshalb Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Ob und wie Geschenkkarten steuerlich zu behandeln sind und wie lange sie gültig sein müssen, ist eine Frage für Ihre Steuerberatung oder Ihren Anwalt. Die Hilfe sagt dazu selbst, dass die Regeln je nach Region verschieden sind. Hier geht es nur um die Technik.

## Zwei Wege: verkaufen oder selbst erstellen

Die Hilfe unterscheidet zwei Wege, eine Karte zu erzeugen:

- **Geschenkkarten-Produkt:** Sie legen ein Produkt an, das Kunden im Shop kaufen. Die Karte entsteht, wenn Sie die Bestellung mit diesem Produkt abwickeln (standardmäßig automatisch, sobald die Bestellung bezahlt ist).
- **Karte im Admin erstellen:** Sie erzeugen eine Karte mit beliebigem Wert, ohne dass jemand zahlt. Das passt für Aktionen, Belohnungen, Erstattungen als Guthaben oder einen individuellen Betrag, den ein Kunde zuvor per Entwurfsbestellung bezahlt hat.

Der Empfänger bekommt jeweils eine digitale Karte mit einem eindeutigen Code, den er an der Kasse einlöst. Wer Karten im Laden verkauft, kann bei Shopify POS gedruckte Karten bestellen, in unterstützten Ländern. Karten aus dem Admin und aus POS sind laut Hilfe austauschbar: Wer im Laden eine Karte kauft, kann sie im Online-Shop einlösen.

## Höchstwerte und feste Beträge

Aus der Hilfe zu den Werten:

- Der Wert ist immer ein Geldbetrag und größer als null.
- Ein **Geschenkkarten-Produkt** hat feste Beträge (Stufen). Kunden können im Shop **keinen freien Betrag** eingeben. Das Maximum pro Stufe liegt bei 10.000 USD oder dem Gegenwert in der Kartenwährung und lässt sich nicht erhöhen.
- Eine im **Admin erstellte** Karte darf bis zu 2.000 USD oder den Gegenwert betragen. Der Shopify Support kann dieses Limit nach Prüfung anheben oder absenken.
- Will ein Kunde online einen Betrag, den es nicht als Stufe gibt, nennt die Hilfe einen Weg: eine **Entwurfsbestellung** über diesen Betrag anlegen, nach Zahlung der Rechnung die Karte im Admin erstellen und dem Kunden schicken.

Beim ersten Anlegen eines Produkts erzeugt Shopify mehrere Standardstufen in Ihrer Shop-Währung. Sie können sie ersetzen, ergänzen oder löschen, mindestens eine Stufe muss bleiben. Jede Stufe ist eine Variante des Produkts.

## Ein Geschenkkarten-Produkt anlegen

Im Admin unter **Produkte > Geschenkkarten** legen Sie ein Produkt an: Titel, Beschreibung, Bild, Währung, Veröffentlichung und optional Kollektionen und Tags. Die Hilfe nennt dazu ein paar Punkte, die man leicht übersieht:

- **Währung:** Karten in der Shop-Währung lassen sich in jeder Währung einlösen. Karten in einer **lokalen Währung** nur, wenn die Währung an der Kasse übereinstimmt, es sei denn, die **währungsübergreifende Einlösung** ist aktiviert. Diese Einstellung lässt sich nach dem Anlegen nicht mehr ändern.
- **Märkte und Kataloge:** Für lokale Währungen müssen Märkte und Kataloge mit passender Preisliste eingerichtet sein. Solche Karten sind nicht automatisch in Katalogen veröffentlicht, das müssen Sie selbst tun. Mehr zu Märkten in [Shopify Markets: In mehrere Länder verkaufen](/de/blog/shopify-markets-mehrere-laender).
- **Kein Vergleichspreis für Rabatte:** Das Feld "Vergleichspreis" soll bei Geschenkkarten nicht für Rabatte genutzt werden. Dafür gibt es Rabattcodes und automatische Rabatte.
- **Kollektionsrabatte greifen nicht:** Ein Rabatt auf eine Kollektion gilt nicht für Geschenkkarten-Produkte in dieser Kollektion. Rabatte müssen sich gezielt auf das Produkt oder die Variante beziehen.

Wird ein Produkt später bearbeitet, archiviert oder gelöscht, ändert das nichts an bereits ausgegebenen Karten. Kunden können sie weiter einlösen.

## Rabatte auf Geschenkkarten

Die Hilfe beschreibt, dass sich Rabattcodes und automatische Rabatte auf Geschenkkarten-Produkte anwenden lassen, etwa als Betrag oder Prozent oder als "Kaufe X, erhalte Y". Maßgeblich ist der Wert der Karte, nicht der gezahlte Preis: Bei "100 USD Karte für 80 USD" zahlt der Kunde 80, die Karte hat 100 Wert. Wie Rabatte grundsätzlich funktionieren, steht in [Shopify Rabattcode oder automatischer Rabatt](/de/blog/shopify-rabattcodes-automatische-rabatte).

## Empfänger und Versanddatum

Wer eine Karte verschenkt, will sie meist direkt an eine andere Person schicken. Im Online-Shop können Käufer einen Empfänger nur angeben, wenn das **Theme Empfängerfelder für Geschenkkarten unterstützt**. Die Hilfe beschreibt, wie man sie ergänzt. Ist ein Empfänger hinterlegt, bekommt der Käufer laut Hilfe einen **Geschenkkarten-Beleg** mit einer Kopie der Karte, der bestätigt, an wen sie ging oder wann der Versand geplant ist. Den Empfänger erreicht die Benachrichtigung "Neue Geschenkkarte". Fehlen die Felder im Theme, ist das ein typischer Fall für eine kleine Theme-Anpassung, siehe [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization).

## Einlösen an der Kasse

Aus der Hilfe zur Einlösung:

- Der Kunde gibt den Code an der Kasse ein. Groß- und Kleinschreibung spielen keine Rolle. Das Feld erscheint nur, wenn es aktive Karten im Shop gibt.
- Deckt das Guthaben die Bestellung nicht, wählt der Kunde eine weitere Zahlungsart, auch eine zweite Karte ist möglich. Das Restguthaben bleibt erhalten und kann für weitere Bestellungen genutzt werden.
- Das Guthaben gilt für die gesamte Summe inklusive Steuern und Versand. Bei Drittanbieter- oder geschätzten Steuern kann sich die Summe nach dem Abzug noch ändern.
- Karten sind mit **Rabattcodes** kombinierbar, und mehrere Karten pro Bestellung sind möglich.
- Bei Bestellungen mit einem **Abo-Produkt** kann die Karte für die erste Zahlung genutzt werden, nicht für wiederkehrende Zahlungen. Mehr dazu in [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions).
- Mit einer Geschenkkarte lässt sich **keine weitere Geschenkkarte** kaufen.
- Einlösbar sind Karten in allen Kanälen, die den Shopify-Checkout nutzen, etwa Online-Shop, Shop-App und Shopify POS.

Soll die Einlösung unter bestimmten Bedingungen ausgeblendet werden, braucht man laut Hilfe eine App für Zahlungsanpassungen. Den Wortlaut "Geschenkkarte anwenden" an der Kasse ändern Sie unter den Checkout-Sprachen, ohne Code. Mehr zu Checkout-Grenzen in [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen).

## Karten verwalten

Unter **Produkte > Geschenkkarten** sehen Sie alle Karten. Wichtig aus der Hilfe:

- **Code:** Karten gelten wie Geld. Im Admin sehen Sie nur die **letzten vier Zeichen**, den vollen Code nur der Kunde. Sie müssen keine eigene Kopie führen, die Karte funktioniert trotzdem. Der 16-stellige Code ist zufällig und nicht anpassbar.
- **Guthaben:** Es lässt sich im Admin **nicht direkt ändern**. Es sinkt durch Einlösung, steigt durch Erstattung oder wird per API durch eine eigene Integration angepasst.
- **Ablauf:** Standardmäßig laufen Karten nicht ab, weil das in manchen Ländern unzulässig ist. Wer ein Ablaufdatum einstellt, bekommt standardmäßig fünf Jahre, einstellbar in Jahren, Monaten oder Tagen unter **Einstellungen > Zahlungen > Ablauf von Geschenkkarten**. Die Hilfe warnt ausdrücklich, vorher die Vorschriften Ihres Landes zu prüfen.
- **Erneut senden:** Verliert ein Kunde den Code, schicken Sie die Karte erneut. Bei teilweise genutzten Karten wird nur das Restguthaben mitgeschickt.
- **Deaktivieren:** Eine Karte lässt sich nicht löschen. Deaktivieren ist endgültig, die Karte kann nicht wieder aktiviert, aufgeladen oder erstattet werden. Dann stellen Sie eine neue aus.
- **Export:** Als CSV mit den letzten vier Zeichen, zum Beispiel für offene Guthaben. Beim Umzug in ein anderes System gibt es laut Hilfe keinen vollständigen Code-Export, neue Codes müssen dann gegebenenfalls ausgestellt werden. Mehr zum Umzug: [WooCommerce zu Shopify](/de/blog/woocommerce-to-shopify).
- **Zwischen Shops:** Eine Karte gilt nur im ausgebenden Shop, es gibt keinen nativen Weg, Karten zwischen Shops zu übertragen.

## Erstattungen

Wurde mit einer Karte bezahlt, kann die Erstattung auf die Karte gehen, und das Guthaben wird automatisch aktualisiert. Bei Teilerstattungen mit gemischter Zahlung geht der Betrag zuerst auf die Karte. Die Hilfe nennt Sonderfälle:

- Aufladen bei Rückgaben und Umtausch funktioniert nur, wenn die ursprüngliche Zahlung über Shopify Payments lief. Sonst erstellen Sie eine neue Karte über den Erstattungsbetrag.
- Eine **abgelaufene** Karte erhält keine Erstattung, bis Sie das Ablaufdatum in die Zukunft setzen. Danach können Sie es zurücksetzen.
- Eine **deaktivierte** Karte erhält keine Erstattung. Stellen Sie eine neue Karte aus oder erstatten Sie als Guthaben.
- Eine **gekaufte** Karte erstatten Sie wie jedes Produkt, sie wird dabei automatisch deaktiviert. Im Admin erstellte Karten lassen sich nicht erstatten, da nichts gezahlt wurde.

## Währungen und Wechselkurs

Das Thema wird gern unterschätzt. Aktivieren Sie bei einer Karte in lokaler Währung die währungsübergreifende Einlösung, kann sie an der Kasse in anderen Währungen genutzt werden. Verschiebt sich der Wechselkurs zwischen Verkauf und Einlösung, kann Ihnen das laut Hilfe Geld kosten. Die Hilfe nennt es Wechselkursdrift (FX drift) und rechnet ein Beispiel mit einer Karte über 100 CAD vor. Wer die Auszahlung in einer anderen Währung als der Kartenwährung erhält, ist direkt betroffen. Wer den Effekt vermeiden will, schaltet die währungsübergreifende Einlösung beim Anlegen aus.

## Apple Wallet und Benachrichtigungen

Unter **Einstellungen > Zahlungen** lassen sich Apple-Wallet-Pässe aktivieren. Kunden bekommen dann in der E-Mail eine Schaltfläche "Zu Apple Wallet hinzufügen", prüfen darin das Guthaben und lösen die Karte im Laden per QR-Code ein. Die E-Mails "Neue Geschenkkarte" und "Geschenkkarten-Beleg" passen Sie unter Kundenbenachrichtigungen an. Dafür braucht es laut Hilfe HTML-, CSS- und Liquid-Kenntnisse. Ein eigenes Kartenbild empfiehlt die Hilfe mit 950 × 550 Pixeln. Wert und Code der Karte lassen sich im Theme nicht verändern.

## Typische Stolpersteine

Die Hilfe beschreibt diese Fälle:

- **Nach der Auslieferung entsteht keine Karte.** Eine Karte entsteht nur bei einem echten Geschenkkarten-Produkt. Ein normales Produkt, das nur "Gutschein" heißt, erzeugt keine. Lösung der Hilfe: Karte im Admin über den Bestellbetrag erstellen und dem Kunden schicken, künftig ein Geschenkkarten-Produkt anlegen.
- **Karte wird nicht automatisch erfüllt.** Standardmäßig wird sie bei bezahlter Bestellung erfüllt. Bei mittlerem oder hohem Betrugsrisiko nicht, dann erfüllen Sie manuell auf der Bestellseite. Wer die automatische Erfüllung für alle Positionen abgeschaltet hat, erfüllt ebenfalls manuell.
- **Apple-Wallet-Schaltfläche fehlt.** Mögliche Gründe: dem Theme fehlt der Code, die Benachrichtigung wurde angepasst und der Code ging verloren, oder die Test-E-Mail wurde direkt aus dem Admin verschickt. Ein Testbestellung enthält die Schaltfläche.
- **Gebühren:** Für Shops, die am oder nach dem 12. Mai 2025 erstellt wurden, fallen laut Hilfe auf den mit Karte bezahlten Betrag Transaktionsgebühren für Drittanbieter an. Höhe und Details stehen auf der Gebührenseite von Shopify.

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nichts dazu, **ob sich Geschenkkarten für Ihr Sortiment lohnen**, welche Stufen zu Ihren Kunden passen oder wie viel Umsatz Sie damit erreichen. Auch die rechtliche Seite (Steuer beim Verkauf oder bei der Einlösung, Mindestlaufzeit, Hinweise im Shop) bleibt offen, das gehört zu Ihrer Steuerberatung oder Ihrem Anwalt. Hintergrund zu Rechtstexten: [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien). Und was die Umsetzung kostet, hängt vom Umfang ab.

## Beispiele aus der Praxis

Einen Shop, bei dem ich ausschließlich Geschenkkarten eingerichtet habe, gibt es unter meinen veröffentlichten Projekten nicht. Verwandt ist [Jula Bloom](/de/projects/jula-bloom), eine Seattler Marke für Seidenblumen mit Sträußen, Vasen, Geschenkgutscheinen und einer Mini-Linie. Beim Umzug von WooCommerce zu Shopify gehörte die Vorbereitung der Geschenkgutscheine ausdrücklich zu den Aufgaben, neben Redirect-Map, E-Mail-Anmeldung und Pop-ups. Wie die Karten dort technisch gelöst sind, behaupte ich hier nicht. Der Fall zeigt nur, dass Geschenkkarten bei einem Plattformwechsel eigens eingeplant werden müssen.

## Vor dem Start: eine Checkliste

1. Sollen Karten **verkauft** werden (Produkt) oder nur **verteilt** (Admin)? Die Höchstwerte unterscheiden sich.
2. Welche **Stufen** passen? Freie Beträge gibt es im Shop nicht.
3. Unterstützt Ihr **Theme die Empfängerfelder**, wenn Kunden verschenken sollen?
4. Verkaufen Sie in mehreren Währungen: **lokale Währung** und **währungsübergreifende Einlösung** bewusst entscheiden, Katalog veröffentlichen?
5. **Ablauf** festgelegt, und mit Steuerberatung oder Anwalt geklärt?
6. Wie werden **Erstattungen** gehandhabt, vor allem mit Shopify Payments?
7. Ist die **Benachrichtigungs-E-Mail** in Ihrem Stil und mit einer **Testbestellung** geprüft, inklusive Apple Wallet?
8. Ist klar, wie **Rabatte** auf Karten gesetzt werden (nicht über den Vergleichspreis)?

## Wann ein Entwickler hilft

Ein Geschenkkarten-Produkt legen Sie selbst an. Hilfe lohnt sich, wenn das Theme die **Empfängerfelder** nicht unterstützt, wenn die **E-Mail-Vorlagen** oder die Karten-Seite zur Marke passen sollen, wenn Karten in **mehreren Märkten und Währungen** sauber laufen müssen oder wenn die Einlösung an der Kasse unter Bedingungen eingeschränkt werden soll (die Hilfe verweist dafür auf eine Zahlungsanpassung per App). Karten automatisch nach einer Bestellung auszustellen, empfiehlt die Hilfe mit [Shopify Flow](/de/blog/shopify-flow-automatisierung). Danach gehört das Setup in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kann der Kunde einen beliebigen Betrag wählen?** Nicht im Shop. Es gibt feste Stufen. Für einen Sonderbetrag nennt die Hilfe den Weg über Entwurfsbestellung und eine im Admin erstellte Karte.

**Kann ich eine Karte löschen?** Nein. Sie lässt sich nur deaktivieren, und das ist endgültig.

**Kann ich den Betrag einer Karte ändern?** Nicht direkt im Admin. Das Guthaben ändert sich durch Einlösung, Erstattung oder eine eigene Integration über die API.

**Verfallen Geschenkkarten?** Standardmäßig nicht. Ein Ablaufdatum können Sie setzen, standardmäßig fünf Jahre. Prüfen Sie vorher die Vorschriften Ihres Landes.

**Kann man mit einer Geschenkkarte ein Abo bezahlen?** Für die erste Zahlung ja, für wiederkehrende Zahlungen nein.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich sehe mir an, was von außen sichtbar ist, zum Beispiel Ladezeit, Apps im Quelltext und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Was ich sonst für Shops mache, steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Rabattcode oder automatischer Rabatt](/de/blog/shopify-rabattcodes-automatische-rabatte) · [Shopify Markets: In mehrere Länder verkaufen](/de/blog/shopify-markets-mehrere-laender) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
