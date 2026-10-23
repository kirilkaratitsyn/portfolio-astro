---
publishedAt: 2026-10-23
title: "Shopify Try before you buy: erst ausprobieren, später zahlen – Voraussetzungen, Grenzen und Verwaltung"
date: 23. Oktober 2026
readingTime: 8 Min
excerpt: "Try before you buy in Shopify: was die Kaufoption bedeutet, welche Zahlungsanbieter und Checkout-Grenzen gelten, wie Sie Zahlungstermine, Karten, Erstattungen und Stornos verwalten."
image: /og/projects/jula-bloom.jpg
topic: build
tags:
  - Shopify
  - Try before you buy
  - Kaufoptionen
  - Zahlung
---

„Kunden zögern bei einem teuren Stück, weil sie es nicht anprobieren können. Kann ich es ihnen zuschicken und erst später abbuchen?" Shopify nennt das Try before you buy, kurz TBYB. Es klingt nach einer einfachen Kaufoption, hat aber eine ganze Liste an Voraussetzungen, und einige davon treffen deutsche Shops direkt, etwa bei den Zahlungsarten. Dieser Artikel zeigt, was das Shopify Help Center dazu sagt, für Händler ohne technischen Hintergrund.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs und Einschränkungen ändern sich, prüfen Sie also Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Ob TBYB für Ihr Sortiment wirtschaftlich sinnvoll ist, wie Sie mit Rücksendungen umgehen und wie das mit Widerruf und Verbraucherrecht zusammenpasst, sind Fragen für Ihre Planung und für einen Anwalt, nicht für die Hilfe. Der Artikel behandelt nur die Technik. Menünamen sind der englischen Oberfläche entnommen.

## Was TBYB ist

Shopify kennt drei Kaufoptionen jenseits von „kaufen, zahlen, sofort versenden": Abos, Vorbestellungen und Try before you buy. Bei TBYB bestellen Kunden, ohne sofort zu zahlen. Sie versenden die Bestellung wie eine normale, und die Kunden zahlen zu einem festgelegten späteren Zeitpunkt, nachdem sie das Produkt ausprobiert haben. Laut Hilfe können Sie vor dem Versand außerdem eine volle Autorisierung auf der Zahlungsmethode anlegen, damit sichergestellt ist, dass der Kunde später zahlen kann.

Zu den Nachbarn: [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) und [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions).

## Ohne App geht es nicht

Die Hilfe sagt klar: Um TBYB einzurichten, brauchen Sie eine **TBYB-App** aus dem Shopify App Store. Die Einrichtung läuft zuerst in der App. Danach erscheinen die Angaben zur Kaufoption im Admin, auf der Produktseite und in der Bestellliste. Wird die App deinstalliert, werden die dort angelegten Daten (ohne Zahlungsdaten der Kunden) nach 48 Stunden gelöscht. Hat die App eine Sicherung, lassen sie sich später wiederherstellen. Welche App passt, sagt die Hilfe nicht, und was sie kostet, hängt von der App ab.

## Voraussetzungen und Einschränkungen

Das ist der Teil, der vor einer Entscheidung wichtig ist. Laut Hilfe gilt:

- Sie brauchen einen dieser Zahlungsanbieter: **Shopify Payments**, **Adyen on Shopify** oder Stripe (nur für einige Händler verfügbar). PayPal ist auf den Seiten, die ich gelesen habe, nicht genannt.
- Kunden können **keine beschleunigten Checkouts** wie Shop Pay, Apple Pay oder Google Pay nutzen.
- Kunden können **keine lokalen Zahlungsarten** wie Klarna oder iDEAL | Wero nutzen. Welche Zahlungsarten in Deutschland üblich sind: [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland).
- TBYB wird bei Shops mit **angepasstem Checkout** nicht unterstützt. Dazu: [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen).
- **Lokale Lieferung** und **Abholung im Geschäft** sind für TBYB-Bestellungen nicht möglich.
- TBYB-Produkte gibt es nur im **Online Store** und in **Custom Storefronts**.
- **Buy X get Y**-Rabatte werden nicht unterstützt.
- Verschiedene Kaufoptionen lassen sich an einem Produkt **nicht kombinieren**: ein Kunde kann also kein Abo zum Ausprobieren bestellen.
- Zu **Shop Promise** ist TBYB nur kompatibel, wenn das Produkt sofort versendet wird.
- Sie müssen Kunden beim Kauf die wichtigsten Angaben nennen, auch **wann abgebucht wird**, wenn der Artikel nicht zurückgeschickt wird.

## Einrichtung im Admin

Bevor Sie im Admin etwas einstellen, schließen Sie die Einrichtung in der App ab. Danach gilt:

- **Produkt:** Hat ein Produkt oder eine seiner Varianten die TBYB-Option, zeigt die App Details in der Produktbeschreibung. Unter **Products** wählen Sie das Produkt. Mit **Only show this product with these purchase options** verkaufen Sie es nur mit der Kaufoption. Ist das Häkchen entfernt, ist es auch als Einmalkauf erhältlich. Zu Varianten: [Shopify Produktvarianten anlegen](/de/blog/shopify-produktvarianten-optionen).
- **Checkout:** Die App zeigt den Kunden die Angaben zur Kaufoption, zum Beispiel wie lange die Testphase läuft. Im Schritt **Payment** müssen Kunden bestätigen, dass sie ein Produkt mit Kaufoption kaufen. Ohne diese Zustimmung ist kein Abschluss möglich.
- **Mehrere Fälligkeiten:** Hat eine Bestellung Produkte mit verschiedenen Zahlungsterminen, werden alle aufgeschobenen Zahlungen zum frühesten Termin fällig. Das Beispiel der Hilfe: T-Shirt am 3. Juni, Buch am 7. Juni, beides wird am 3. Juni fällig.

## Bestellungen und Zahlungen verwalten

- **Unbezahlte Bestellungen:** Unter **Orders** filtern Sie mit **Unpaid** nach Bestellungen ohne Zahlung.
- **Zahlungstermin ändern:** Die Hilfe verweist auf die Seite zu aufgeschobenen Zahlungen. Dort gibt es Zahlungsbedingungen (Due on receipt, Due on fulfillment, Net 7 bis Net 90, festes Datum). Ist eine Bestellung bis zum Termin nicht bezahlt, wird der Status **Overdue**.
- **Früher einziehen:** Sie können dem Kunden eine Rechnung schicken oder die Karte eingeben (**Collect payment**). Die Hilfe warnt: Wenn der Kunde die Abbuchung nicht erwartet, kann das zu einem **Chargeback** führen. Kündigen Sie es also klar an.
- **Karte aktualisieren:** Unter **Customers** öffnen Sie den Kunden, dann im Bereich **Payment methods** **More actions**. Dort gibt es **Send link to update card**, **Replace card** (nicht bei allen Zahlungsmethoden) und **Delete card**.
- **Bankbestätigung:** Die Bank des Kunden kann spätere Abbuchungen anfechten. Dann muss der Kunde die Zahlung bestätigen, und Shopify schickt ihm dafür eine E-Mail mit einem Link zum Shop.
- **Stornieren und erstatten:** Eine nicht versendete TBYB-Bestellung können Sie stornieren. Eine versendete nicht, aber Sie können volle und teilweise Erstattungen für versendete Artikel ausstellen. Storniert der Kunde selbst, müssen Sie unter Umständen manuell erstatten, ein Hinweis erscheint dann an der Bestellung. Bei einer Erstattung müssen Sie die Bestellung eventuell auch in der TBYB-App stornieren.

Zu Rechnungen und Dokumenten: [Shopify Rechnungen und Bestelldokumente](/de/blog/shopify-rechnung-bestelldokumente).

## Was die Hilfe hier nicht beantwortet

Die Seiten, die ich gelesen habe, sagen nichts dazu, **welche App** Sie wählen sollten, wie lang die Testphase sein darf, wie Rücksendungen abgewickelt werden und wie Sie mit Kunden umgehen, die nicht zahlen. Zur rechtlichen Seite (Widerruf, Zahlungsfristen, Pflichtangaben) sagen sie ebenfalls nichts. Das klären Sie mit einem Anwalt, mehr zu Pflichttexten: [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien). Auch zur Wirkung auf Abschlussquote und Retouren sagen die Seiten nichts. Und was die Umsetzung kostet, hängt vom Umfang ab.

## Beispiele aus der Praxis

Unter meinen veröffentlichten Projekten gibt es keinen, in dem ich Try before you buy eingerichtet habe, und ich erfinde keinen. Am nächsten liegen die Kaufoptionen Abo und Bundle, die ich bei [Reserve Kava](/de/projects/reserve-kava) umgesetzt habe. Sie haben aber andere Regeln als TBYB.

## Vor dem Start: eine Checkliste

1. Nutzen Sie **Shopify Payments, Adyen oder Stripe**, oder brauchen Ihre Kunden PayPal, Klarna oder Apple Pay?
2. Ist Ihr **Checkout angepasst**? Dann ist TBYB laut Hilfe nicht möglich.
3. Welche **TBYB-App** passt, und ist die Einrichtung dort abgeschlossen?
4. Wie lang ist die **Testphase** und wann genau wird **abgebucht**? Steht das beim Kauf klar sichtbar?
5. Brauchen Sie **Abholung oder lokale Lieferung**? Beides ist für TBYB nicht möglich.
6. Wer **kontrolliert unbezahlte Bestellungen** und wann?
7. Wie ist der Prozess bei **Rücksendung, Erstattung, Storno**, auch in der App?
8. Sind **rechtliche Fragen** (Widerruf, Pflichtangaben) mit einem Anwalt geklärt?

## Wann ein Entwickler hilft

Die Kaufoption selbst richten Sie mit einer App ein. Hilfe lohnt sich, wenn der Checkout eigentlich angepasst ist und trotzdem zu TBYB passen soll, wenn Texte zur Testphase im Theme, auf der Produktseite oder in den E-Mails sauber auftauchen sollen, wenn Bestellungen mit Ihrem Lager oder Ihrer Buchhaltung abgeglichen werden oder wenn mehrere Kaufoptionen im Shop nebeneinander laufen. Verwandt sind [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) und [Shopify E-Mail-Benachrichtigungen anpassen](/de/blog/shopify-email-benachrichtigungen). Danach gehört das Setup in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Brauche ich eine App?** Ja. Laut Hilfe läuft die Einrichtung über eine TBYB-App aus dem App Store.

**Kann ich PayPal oder Klarna anbieten?** Auf den Seiten, die ich gelesen habe, sind Shopify Payments, Adyen on Shopify und Stripe genannt. Lokale Zahlungsarten wie Klarna sind für TBYB ausgeschlossen. PayPal wird dort nicht erwähnt.

**Funktioniert TBYB mit Shop Pay oder Apple Pay?** Nein, beschleunigte Checkouts sind laut Hilfe nicht möglich.

**Kann ich früher abbuchen?** Ja, per Rechnung oder gespeicherter Karte. Die Hilfe rät, das vorher klar anzukündigen, sonst droht ein Chargeback.

**Kann ich eine versendete Bestellung stornieren?** Nein, aber Sie können volle oder teilweise Erstattungen ausstellen.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugriff auf Ihr Konto. Was ich sonst für Shops mache, steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
