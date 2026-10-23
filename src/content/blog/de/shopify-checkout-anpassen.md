---
publishedAt: 2026-10-23
title: "Shopify Checkout anpassen: was ohne Plus geht, was Apps leisten und wo Code nötig ist"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Was sich im Shopify-Checkout im Checkout-Editor einstellen lässt, welche Funktionen vom Tarif abhängen, was Apps und Checkout-Blöcke leisten, was mit checkout.liquid ist und wann ein Entwickler hilft."
image: /og/projects/elanora-skin.jpg
topic: build
tags:
  - Shopify
  - Checkout
  - Checkout-Editor
  - Apps
---

„Kann ich meinen Checkout ändern?“ Die ehrliche Antwort lautet: ja, aber nicht alles und nicht in jedem Tarif. Die Kasse ist der Teil des Shops, den Shopify am stärksten selbst verantwortet, deshalb gelten dort eigene Regeln. Dieser Text zeigt, was die Hilfe von Shopify dazu sagt, wo die Tarifgrenzen liegen und was sich nur mit Code lösen lässt, ohne technischen Hintergrund vorauszusetzen.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe und aus der Dokumentation für Entwickler (shopify.dev), Stand Oktober 2026. Menüs, Tarife und Fristen ändern sich, prüfen Sie deshalb Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Welche Angaben und Hinweise an der Kasse rechtlich vorgeschrieben sind, etwa zur Bestellschaltfläche oder zu Pflichtangaben, ist keine Frage dieses Textes. Das klären Sie mit Ihrem Rechtsberater. Hier geht es nur um die Technik.

## Der Checkout-Editor: Ihre Schaltzentrale

Den Checkout passen Sie nicht im Theme-Editor an, sondern an einer eigenen Stelle: **Settings** > **Checkout**, dort im Bereich **Configurations** auf **Edit** bei der gewünschten Konfiguration. Die Hilfe nennt das den „Checkout and accounts editor“. Er deckt laut Hilfe diese Seiten ab:

- **Checkout** (beim Ein-Seiten-Checkout) bzw. **Information**, **Shipping** und **Payment** (beim Drei-Seiten-Checkout)
- **Review**, die optionale Bestätigungsseite, nur wenn die entsprechende Einstellung aktiv ist
- **Thank you** und **Order status**
- Seiten der Kundenkonten: **Orders**, **Profile**, **Sign-in**

Wichtig zu wissen: Der Editor arbeitet laut Hilfe in einer **simulierten Umgebung**. Bestellungen lassen sich dort nicht aufgeben, und Aktionen wie „Pay Now“ sind deaktiviert. Ob ein Ablauf mit einer echten Bestellung funktioniert, sehen Sie also erst im Shop selbst.

## Was ohne Plus geht

Die Hilfe unterscheidet zwischen Standard-Anpassungen, die ab dem Basic-Tarif verfügbar sind, und erweiterten Funktionen, die nur im Tarif Shopify Plus stecken. Zum Stil des Checkouts nennt die Hilfe unter anderem:

- **Logo** hinzufügen, mit Breite und Ausrichtung links, mittig oder rechts
- **Farben** für Header, Hauptbereich, Bestellübersicht, Akzente und Buttons, dazu eine eigene **Farbpalette**
- **Schriftart** aus einer Auswahlliste
- **Bestellübersicht** mit Hintergrundfarbe oder -bild

Die Hilfe rät außerdem selbst zur Zurückhaltung: Die Kasse sei der Ort, an dem Kunden Versand- und Zahlungsdaten eintragen, deshalb solle das Design schlicht bleiben, mit kontrastreichen Farben, damit nichts ablenkt oder schwer lesbar wird.

**Eine Änderung seit Februar 2026:** Laut Hilfe lässt sich seit dem 5. Februar 2026 kein Hintergrundbild mehr im Header und im Hauptbereich des Checkouts einstellen. Ein bereits gesetztes Bild lässt sich nicht mehr ändern, nur entfernen, und danach nicht wieder hinzufügen. Eine ältere Anleitung mit Hintergrundbild im Checkout lässt sich deshalb nicht mehr eins zu eins befolgen.

## Was nur mit Plus geht

Für die Tarifgrenzen lohnt der genaue Blick, weil hier die meisten Missverständnisse entstehen. Laut Hilfe gilt:

- **Der Checkout-Editor selbst** steht ab dem Basic-Tarif zur Verfügung.
- **Apps für die Seiten Thank you und Order status** gibt es ab Basic, soweit sie als geeignet gelistet sind.
- **Apps für die Seiten Information, Shipping und Payment** gibt es **nur mit Shopify Plus**.
- **Die Checkout Branding API** für erweiterte Gestaltung per Code ist **nur mit Plus** nutzbar.
- **Eigene Apps mit Shopify Functions** (Custom Apps) sind **nur mit Plus** möglich. Öffentliche Apps mit Functions stehen auch ab Basic zur Verfügung.
- **Checkout Blocks**, eine kostenlose App von Shopify für Anpassungen per UI-Extensions und Functions, gibt es ab Basic mit eingeschränktem Funktionsumfang, mit Plus ohne diese Einschränkungen.
- **Anpassungen des Checkouts für einzelne Märkte** (zum Beispiel ein Hinweis nur für einen Markt) gibt es laut Hilfe nur ab dem Tarif Advanced oder Plus.

Das heißt in der Praxis: Wer nicht auf Plus ist, kann die Kasse sichtbar an die Marke anpassen und die Danke-Seite sowie die Kundenkonten mit Apps erweitern. Eingriffe in die eigentlichen Kassenschritte, also Adresse, Versand und Zahlung, bleiben Plus vorbehalten, abgesehen vom eingeschränkten Umfang von Checkout Blocks.

## Ein oder drei Seiten

Standardmäßig ist laut Hilfe der **Ein-Seiten-Checkout** eingestellt: Kontaktdaten, Versand und Zahlung erscheinen auf einer Seite. Der Drei-Seiten-Checkout lässt sich in den Einstellungen des Editors wieder wählen. Beide erfassen laut Hilfe dieselben Informationen, und Ihre Anpassungen funktionieren bei einem Wechsel weiter. Zwei Dinge nennt die Hilfe als mögliche Folgen: Der Header sieht anders aus, ein Hintergrundbild kann dadurch falsch dargestellt werden und müsste durch eine Farbe ersetzt werden. Und es kommen neue anpassbare Texte hinzu, die Sie nach einem Wechsel prüfen sollten, wenn Sie Texte oder Übersetzungen geändert haben.

Die Hilfe erwähnt außerdem die Adressvorschläge im Checkout: Sie kommen von einem Dienst wie Google Autocomplete und stehen laut Hilfe auch für Kunden in Deutschland, Österreich und der Schweiz zur Verfügung. Wo sie nicht greifen, können Kunden die Adresse immer von Hand eingeben.

## Apps und Blöcke im Checkout

Funktionen wie ein Upsell in der Bestellübersicht kommen laut Hilfe über Apps in den Checkout. Der Ablauf besteht aus zwei Schritten: Sie installieren die App aus dem Shopify App Store und fügen sie dann im Editor als **Block** an der gewünschten Stelle ein, über die Seitenleiste **Sections** oder **Apps**. Einige Blöcke lassen sich nur in bestimmten Bereichen platzieren, und pro hervorgehobenem Bereich nennt die Hilfe eine Obergrenze von **drei Apps**.

Wer eine App sucht, kann im App Store nach Apps filtern, die den Checkout anpassen. Welche App zu Ihrem Fall passt und was sie leistet, sagt die Hilfe nicht, das hängt vom Anbieter ab.

## checkout.liquid: das alte Verfahren ist abgelöst

Wer von früher noch von `checkout.liquid` oder „Additional scripts“ weiß: Laut shopify.dev ist `checkout.liquid` für die Schritte Information, Shipping und Payment nicht mehr unterstützt. Für die Seiten Thank you und Order status wurden `checkout.liquid` und Additional scripts am 28. August 2025 eingestellt. Script-Tags wurden dort am 28. August 2025 für Plus-Shops und werden laut Seite am 26. August 2026 für Shops ohne Plus eingestellt, dieses Datum liegt inzwischen zurück. Shops, die dort noch `checkout.liquid` nutzen, müssen laut Dokumentation auf Shopify Extensions in Checkout umsteigen.

Für den Umstieg empfiehlt shopify.dev: eine öffentliche App mit Extensions nutzen oder eine eigene App bauen lassen bzw. einen Service-Partner beauftragen. Wenn möglich, sollten Umstiege für den Checkout, die Danke-Seite und die Bestellstatus-Seite zusammen geplant werden, damit nicht zwei Technik-Stände nebeneinander gepflegt werden müssen.

## Entwürfe und Tests, bevor es live geht

Hilfreich für alle, die Änderungen ausprobieren wollen: Der Checkout lässt sich in mehreren **Konfigurationen** speichern. Laut Hilfe können Shops auf Plus bis zu 99 Entwürfe anlegen, Shops auf Basic, Grow und Advanced bis zu 20. Es gibt immer nur eine aktive Konfiguration mit echtem Kundenverkehr. Wenn Sie einen Entwurf veröffentlichen, ersetzt er die aktive Konfiguration, und die bisherige wird zum Entwurf. Vor größeren Stiländerungen rät die Hilfe, die Konfiguration zu **duplizieren** und so eine Sicherungskopie zu behalten. Ausdrücklich empfiehlt sie auch, Entwürfe vor Aktionszeiten wie Black Friday zu testen.

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nichts dazu, **welche Anpassung die Abschlussrate erhöht**, welche Checkout-App für Ihren Shop die richtige ist oder wie sich eine Änderung auf Ladezeit und Zahlungsabbrüche auswirkt. Sie sagen auch nichts dazu, welche Hinweise und Pflichtangaben an der Kasse rechtlich erforderlich sind. Das klären Sie mit Ihrem Rechtsberater (siehe auch [Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien)). Und was die Umsetzung kostet, hängt vom Umfang ab.

## Beispiele aus der Praxis

Für [Elanora Skin](/de/projects/elanora-skin), eine Skincare-Marke mit 15 Märkten in zwei Sprachen, habe ich im Rahmen der laufenden Betreuung Checkout-Blöcke ergänzt, darunter eine entfernbare Versicherungs-Extension und einen Bewertungsblock. Dazu gehört, dass die Rabatt-Labels in beiden Sprachen korrekt angezeigt werden. Ob so etwas zu Ihrem Shop passt, hängt von Tarif, Sortiment und Märkten ab.

## Vor dem Start: eine Checkliste

1. Welchen **Tarif** haben Sie, und welche der gewünschten Änderungen sind in diesem Tarif überhaupt möglich?
2. Was soll sich ändern: nur das **Aussehen** (Logo, Farben, Schrift) oder auch die **Funktion** (Upsell, Zusatzfelder, Hinweise)?
3. Soll es der **Ein-Seiten- oder der Drei-Seiten-Checkout** sein, und haben Sie die Folgen für Header und Texte geprüft?
4. Gibt es eine **öffentliche App**, die den Zweck erfüllt, oder braucht es eine eigene Lösung?
5. Nutzen Sie noch **checkout.liquid, Additional scripts oder Script-Tags**, vor allem auf Danke- und Bestellstatus-Seite? Dann steht der Umstieg an.
6. Änderung zuerst in einem **Entwurf** gebaut, mit einer Kopie der aktiven Konfiguration als Sicherung?
7. Mit einer **echten Testbestellung** geprüft, weil der Editor nur simuliert? Auf Desktop und Handy?
8. Verkaufen Sie in mehreren Ländern: Texte und Labels in jeder Sprache kontrolliert? (Siehe [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).)

## Wann ein Entwickler hilft

Logo, Farben und Schrift ändern Sie selbst im Editor. Hilfe lohnt sich, wenn eine Funktion fehlt, die keine fertige App liefert, wenn Sie von `checkout.liquid` umsteigen müssen, wenn eigene Logik für Rabatte oder Versand nötig ist oder wenn Kasse, Warenkorb und Angebote zusammenpassen sollen, wie bei [Gratisartikeln im Warenkorb](/de/blog/shopify-gratisartikel-warenkorb). Wie Anpassungen sauber und wartbar bleiben, steht in [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization). Danach gehört der Checkout in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Kann ich den Checkout ohne Plus anpassen?** Ja, in Grenzen. Logo, Farben, Schrift und Apps für Danke- und Bestellstatus-Seite sind laut Hilfe ab Basic möglich. Apps für die Kassenschritte Information, Shipping und Payment gibt es nur mit Plus.

**Kann ich ein Hintergrundbild im Checkout setzen?** Laut Hilfe nicht mehr: Seit dem 5. Februar 2026 lässt sich im Header und im Hauptbereich kein neues Hintergrundbild hinzufügen. Für die Bestellübersicht nennt die Hilfe weiterhin Hintergrundbild oder -farbe.

**Funktioniert mein altes checkout.liquid noch?** Für Information, Shipping und Payment ist es laut shopify.dev nicht mehr unterstützt. Für Danke- und Bestellstatus-Seite wurde es am 28. August 2025 eingestellt.

**Kann ich Änderungen testen, ohne den Live-Checkout zu verändern?** Ja, über Entwurfs-Konfigurationen. Eine echte Bestellung kann der Editor aber nicht ersetzen, weil er nur simuliert.

**Was kostet die Anpassung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quelltext und die Struktur der Seiten, und sage Ihnen, was auffällt. Dabei arbeite ich nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Was ich für Shops mache, finden Sie unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland) · [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten) · [Shopify Bundles erstellen](/de/blog/shopify-bundles-erstellen) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Rabattcode oder automatischer Rabatt](/de/blog/shopify-rabattcodes-automatische-rabatte) · [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
