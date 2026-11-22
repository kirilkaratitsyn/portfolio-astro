---
publishedAt: 2026-10-23
updatedAt: 2026-11-11
title: "Shopify Try before you buy: erst ausprobieren, später zahlen – Voraussetzungen, Grenzen und Verwaltung"
date: 23. Oktober 2026
readingTime: 6 Min
excerpt: "Try before you buy in Shopify: Zahlungsanbieter, Checkout-Grenzen und wie Sie Zahlungstermine, Karten, Erstattungen und Stornos verwalten."
image: /og/projects/jula-bloom.jpg
topic: build
tags:
  - Shopify
  - Try before you buy
  - Kaufoptionen
  - Zahlung
---

„Kunden zögern bei einem teuren Stück, weil sie es nicht anprobieren können. Kann ich es zuschicken und erst später abbuchen?“ Shopify nennt das Try before you buy, kurz TBYB. Die Kaufoption hat eine Liste an Voraussetzungen, und einige treffen deutsche Shops direkt, etwa bei den Zahlungsarten.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs und Einschränkungen ändern sich, prüfen Sie also Ihren Admin. Menünamen sind der englischen Oberfläche entnommen. Es geht nur um die Technik. Verbraucherrecht klären Sie mit einem Anwalt.

## Was TBYB ist

Shopify kennt drei Kaufoptionen jenseits von „kaufen, zahlen, sofort versenden“: Abos, Vorbestellungen und Try before you buy. Bei TBYB bestellen Kunden, ohne sofort zu zahlen. Sie versenden wie gewohnt. Die Kunden zahlen zu einem festgelegten späteren Termin, nach dem Ausprobieren. Laut Hilfe können Sie vor dem Versand eine volle Autorisierung auf der Zahlungsmethode anlegen, damit der Kunde später sicher zahlen kann.

## Ohne App geht es nicht

Laut Hilfe brauchen Sie eine **TBYB-App** aus dem Shopify App Store. Nach der Einrichtung dort erscheinen die Angaben zur Kaufoption im Admin, auf der Produktseite und in der Bestellliste.

Wird die App deinstalliert, werden die dort angelegten Daten (ohne Zahlungsdaten der Kunden) nach 48 Stunden gelöscht. Hat die App eine Sicherung, lassen sie sich später wiederherstellen. Welche App passt, sagt die Hilfe nicht. Die Kosten hängen von der App ab.

## Voraussetzungen und Einschränkungen

Laut Hilfe gilt:

- Sie brauchen **Shopify Payments**, **Adyen on Shopify** oder Stripe (nur für einige Händler verfügbar).
- **Keine beschleunigten Checkouts** wie Shop Pay, Apple Pay oder Google Pay.
- **Keine lokalen Zahlungsarten** wie Klarna oder iDEAL | Wero. Mehr dazu: [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland).
- Kein TBYB bei **angepasstem Checkout**. Dazu: [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen).
- Keine **lokale Lieferung** und keine **Abholung im Geschäft**.
- Verkauf nur im **Online Store** und in **Custom Storefronts**.
- **Buy X get Y**-Rabatte werden nicht unterstützt.
- Kaufoptionen lassen sich an einem Produkt **nicht kombinieren**: Ein Abo zum Ausprobieren gibt es nicht.
- **Shop Promise** nur, wenn das Produkt sofort versendet wird.
- Sie müssen Kunden beim Kauf die wichtigsten Angaben nennen, auch **wann abgebucht wird**, wenn der Artikel nicht zurückkommt.

## Einrichtung im Admin

Nach der Einrichtung in der App:

- **Produkt:** Hat ein Produkt oder eine Variante die TBYB-Option, zeigt die App Details in der Produktbeschreibung. Unter **Products** am Produkt: Mit **Only show this product with these purchase options** verkaufen Sie es nur mit der Kaufoption. Ohne Häkchen ist es auch als Einmalkauf erhältlich. Zu Varianten: [Shopify Produktvarianten anlegen](/de/blog/shopify-produktvarianten-optionen).
- **Checkout:** Die App zeigt die Angaben zur Kaufoption, zum Beispiel die Dauer der Testphase. Im Schritt **Payment** müssen Kunden bestätigen, dass sie ein Produkt mit Kaufoption kaufen. Sonst ist kein Abschluss möglich.
- **Mehrere Fälligkeiten:** Haben Produkte einer Bestellung verschiedene Zahlungstermine, werden alle aufgeschobenen Zahlungen zum frühesten Termin fällig. Das Beispiel der Hilfe: T-Shirt am 3. Juni, Buch am 7. Juni, beides wird am 3. Juni fällig.

## Bestellungen und Zahlungen verwalten

- **Unbezahlte Bestellungen:** Unter **Orders** filtern Sie mit **Unpaid**.
- **Zahlungstermin ändern:** Laut Hilfe über die Zahlungsbedingungen für aufgeschobene Zahlungen (Due on receipt, Due on fulfillment, Net 7 bis Net 90, festes Datum). Ist eine Bestellung bis zum Termin nicht bezahlt, wird der Status **Overdue**.
- **Früher einziehen:** Sie können eine Rechnung schicken oder die Karte eingeben (**Collect payment**). Laut Hilfe droht ein **Chargeback**, wenn der Kunde die Abbuchung nicht erwartet. Kündigen Sie sie klar an.
- **Karte aktualisieren:** Unter **Customers** beim Kunden im Bereich **Payment methods** auf **More actions**. Dort gibt es **Send link to update card**, **Replace card** (nicht bei allen Zahlungsmethoden) und **Delete card**.
- **Bankbestätigung:** Die Bank des Kunden kann spätere Abbuchungen anfechten. Dann bestätigt der Kunde die Zahlung über einen Link, den Shopify per E-Mail schickt.
- **Stornieren und erstatten:** Eine nicht versendete TBYB-Bestellung können Sie stornieren. Eine versendete nicht, aber Sie können versendete Artikel voll oder teilweise erstatten. Storniert der Kunde selbst, müssen Sie unter Umständen manuell erstatten, ein Hinweis erscheint an der Bestellung. Bei einer Erstattung müssen Sie die Bestellung eventuell auch in der TBYB-App stornieren.

Zu Rechnungen und Dokumenten: [Shopify Rechnungen und Bestelldokumente](/de/blog/shopify-rechnung-bestelldokumente).

## Was die Hilfe hier nicht beantwortet

Die gelesenen Seiten sagen nichts dazu, **welche App** Sie wählen sollten, wie lang die Testphase sein darf, wie Rücksendungen ablaufen und was bei Kunden gilt, die nicht zahlen. Auch die Wirkung auf Abschlussquote und Retouren fehlt. Die rechtliche Seite (Widerruf, Zahlungsfristen, Pflichtangaben) klären Sie mit einem Anwalt, mehr zu Pflichttexten: [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Beispiele aus der Praxis

Unter meinen veröffentlichten Projekten gibt es keines mit Try before you buy. Am nächsten liegt die Kaufoption Abo, die ich bei [Reserve Kava](/de/projects/reserve-kava) umgesetzt habe. Abos haben aber andere Regeln als TBYB.

## Vor dem Start: eine Checkliste

1. Erfüllt Ihr Shop die Voraussetzungen bei **Zahlungsanbieter, Checkout und Lieferung**?
2. Welche **TBYB-App** passt, und ist sie fertig eingerichtet?
3. Stehen **Testphase** und **Abbuchungstermin** beim Kauf klar sichtbar?
4. Wer **kontrolliert unbezahlte Bestellungen** und wann?
5. Wie laufen **Rücksendung, Erstattung und Storno**, auch in der App?
6. Sind **rechtliche Fragen** mit einem Anwalt geklärt?

## Wann ein Entwickler hilft

Die Kaufoption richten Sie selbst per App ein. Hilfe lohnt sich hier:

- Der Checkout ist angepasst und soll trotzdem zu TBYB passen.
- Texte zur Testphase sollen im Theme, auf der Produktseite oder in den E-Mails erscheinen.
- Bestellungen werden mit Lager oder Buchhaltung abgeglichen.
- Mehrere Kaufoptionen laufen nebeneinander.

Verwandt: [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization), [Shopify E-Mail-Benachrichtigungen anpassen](/de/blog/shopify-email-benachrichtigungen) und [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Brauche ich eine App?** Ja, laut Hilfe eine TBYB-App aus dem App Store.

**Kann ich PayPal oder Klarna anbieten?** Lokale Zahlungsarten wie Klarna sind ausgeschlossen. PayPal nennen die gelesenen Seiten nicht.

**Funktioniert TBYB mit Shop Pay oder Apple Pay?** Nein, laut Hilfe nicht.

**Kann ich früher abbuchen?** Ja, per Rechnung oder gespeicherter Karte. Ohne Ankündigung droht laut Hilfe ein Chargeback.

**Kann ich eine versendete Bestellung stornieren?** Nein, aber Sie können voll oder teilweise erstatten.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich sichtbare Daten wie Ladezeit, Apps im Quelltext und Seitenaufbau, ohne Zugriff auf Ihr Konto. Mehr unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland) · [Shopify Retouren einrichten](/de/blog/shopify-retouren-ruecksendungen)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
