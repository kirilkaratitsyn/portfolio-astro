---
publishedAt: 2026-10-23
title: "Shopify Bundles erstellen: Bundle-Arten, Grenzen der kostenlosen App und worauf Sie achten sollten"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Welche Bundle-Arten es in Shopify gibt, was die kostenlose Bundles-App kann und nicht kann, wie Lagerbestand, Rabatte und Retouren bei Bundles funktionieren und wann ein Entwickler hilft."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Bundles
  - Produktseiten
  - Rabatte
---

„Ich möchte zwei Produkte als Set verkaufen, mit einem kleinen Preisvorteil.“ Das klingt einfach, und oft ist es das auch. Es gibt aber drei verschiedene Arten von Bundles, eine kostenlose App von Shopify mit klaren Grenzen und ein paar Stolpersteine bei Lagerbestand, Versand und Abos. Dieser Text zeigt, was die Shopify-Hilfe dazu sagt, ohne technischen Hintergrund vorauszusetzen.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe, Stand Oktober 2026. Menüs und Funktionen ändern sich, prüfen Sie deshalb Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Wie ein Bundle-Preis oder ein durchgestrichener Vergleichspreis rechtlich korrekt angegeben wird, etwa nach den Regeln zur Preisangabe, ist keine Frage dieses Textes. Das klären Sie mit Ihrem Rechtsberater. Hier geht es nur um die Technik.

## Was ein Bundle ist

Laut Hilfe ist ein Bundle ein Set aus zwei oder mehr zusammengehörigen Produkten, oft mit Preisvorteil. Verkaufen lässt es sich im Online-Shop, im Shop-Kanal und in Shopify POS, über den Kanal Google & YouTube nur als festes Bundle. Als mögliche Vorteile nennt die Hilfe unter anderem einen höheren durchschnittlichen Bestellwert, kuratierte Zusammenstellungen, weitergegebene Rabatte und den Abverkauf von Altbeständen.

Voraussetzung: Sie brauchen eine installierte Bundles-App. Ohne App entsteht kein Bundle.

## Drei Arten von Bundles

Die Hilfe unterscheidet:

- **Fest (Fixed):** eine vorgegebene Auswahl an Produkten und Varianten. Haben Produkte mehrere Varianten, wählen Kunden daraus.
- **Multipack:** mehrere Stück desselben Produkts.
- **Mix-and-match:** austauschbare Produkte. Kunden stellen das Bundle selbst aus einer Auswahl zusammen.

Feste Bundles und Multipacks gehen laut Hilfe mit der kostenlosen App **Shopify Bundles**, in allen Tarifen. Für Mix-and-match nennt die Hilfe zwei Wege: Bundle-Apps von Drittanbietern aus dem App Store oder, nur im Tarif Plus, ein eigenes Bundle-Angebot über die Bundles-APIs. Die App Shopify Bundles unterstützt Mix-and-match laut Hilfe ausdrücklich nicht.

## Die kostenlose App Shopify Bundles: Grenzen

Nach der Hilfe gelten diese Grenzen:

- **Komponenten:** feste Bundles bis zu 30, dynamische Bundles bis zu 150 Komponenten, bis zu 2000 Stück je Komponente.
- **Optionen und Varianten:** höchstens 3 Optionen und 100 Varianten je Bundle. Produkte ohne oder mit nur einer Variante zeigen keine Variantenauswahl.
- **Bestellungen:** In Bestellungen erscheinen die SKUs der Einzelartikel, nicht die SKU des Bundles. Das Gewicht ergibt sich aus den Einzelartikeln.
- **Filter:** Bundles tauchen laut Hilfe nicht unter den Options-Filtern von Search & Discovery auf.
- **Lagerbestand:** Der Bestand wird nicht je Standort geführt, sondern insgesamt.
- **Preise:** Ändert sich der Preis eines Einzelprodukts, auch per Preisimport, ändert sich der Bundle-Preis nicht. Den müssen Sie im Admin selbst anpassen.

## Anlegen in vier Schritten

Zuerst müssen die Einzelprodukte existieren. Danach, laut Hilfe:

1. Im Admin **Apps** > **Bundles** öffnen und **Create bundle** wählen.
2. Titel eingeben und die Produkte auswählen. Menge und Varianten lassen sich anpassen. Für ein Multipack duplizieren Sie das Produkt.
3. Optionen mit gleichem Namen können zusammengefasst werden, damit Kunden zum Beispiel die Größe nur einmal wählen. Die zusammengefasste Option zählt als eine der drei möglichen.
4. **Save and continue**, Produktdetails ergänzen, Verkaufskanäle prüfen und den Status auf **Active** setzen.

Ein neues Bundle hat zunächst den Status **Draft**. Veröffentlicht ist es erst, wenn Sie es auf **Active** stellen.

## Voraussetzungen und Unverträglichkeiten

Das ist der Teil, der in der Praxis am häufigsten überrascht. Laut Hilfe gilt:

- Ihr Shop muss einen **aktualisierten Checkout** nutzen. Shops mit Anpassungen oder Funktionen aus `checkout.liquid` sind mit Bundles **nicht** kompatibel. Wie das zusammenhängt, steht in [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen).
- Bundles sind **nicht kompatibel mit Kaufoptionen** wie Abos, Vorbestellungen und „Try before you buy“, und nicht mit der App Shopify Subscriptions.
- Bundles haben eine **eigene SKU**. Ändert sich die SKU einer Komponente, müssen Sie das Bundle löschen und neu anlegen. Für genaue Komponenten-Nachverfolgung nennt die Hilfe Metafelder oder Apps von Drittanbietern (mehr zu Metafeldern in [Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects)).
- Bundles haben **kein eigenes Versandprofil**. Die Versandkosten richten sich nach den Profilen der enthaltenen Produkte (siehe [Versand einrichten](/de/blog/shopify-versand-einrichten)).
- Bundles können **keine anderen Bundles** enthalten und unterstützen **weder Import, Export noch Massenbearbeitung**.
- Bundles lassen sich auch dann **nicht in Umtauschvorgängen** verwenden, wenn gegen dasselbe Bundle getauscht wird.
- Entwurfsbestellungen (Draft Orders) nutzen womöglich einen älteren Checkout, der Bundles nicht unterstützt.

Wird ein Shop später unzulässig, zum Beispiel durch `checkout.liquid`-Anpassungen, werden feste Bundles laut Hilfe auf Entwurf gesetzt und nicht mehr veröffentlicht.

## Lagerbestand, Rabatte, Retouren

**Lagerbestand:** Er ergibt sich aus den Einzelprodukten. Für jedes Produkt teilt Shopify den verfügbaren Bestand durch die im Bundle benötigte Menge, die kleinste Zahl (abgerundet) ist die Zahl verkaufbarer Bundles. Das Beispiel der Hilfe: 15 Stühle bei 2 je Bundle ergeben 7, 8 Tische bei 1 je Bundle ergeben 8, also sind 7 Bundles verfügbar. Produkte ohne Bestandsführung oder mit „Weiter verkaufen, wenn ausverkauft“ bleiben bei der Berechnung außen vor.

**Rabatte:** Bundles unterstützen Rabattcodes und automatische Rabatte. Bei produkt- oder kollektionsbezogenen Rabatten muss das übergeordnete Bundle-Produkt ausgewählt sein, die Komponenten allein reichen nicht. Der Rabatt wird auf dem Bundle berechnet und nach gewichtetem Preis auf die Komponenten verteilt, die Steuer wird auf den einzelnen Komponenten berechnet. Wie Rabatte zusammenspielen, regeln die Kombinationsregeln im Admin. Wo Bundle und Warenkorb-Logik ineinandergreifen, hilft auch [Gratisartikel im Warenkorb](/de/blog/shopify-gratisartikel-warenkorb).

**Retouren:** Ein Bundle lässt sich in den Rückgaberegeln nicht als Final Sale festlegen. Ob es zurückgegeben werden kann, hängt davon ab, ob die einzelnen Produkte als Final Sale gelten. Rechtliche Fragen zu Widerruf und Rückgabe gehören zu Ihrem Rechtsberater, Hintergrund zu Richtlinien-Seiten steht in [Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Auswertung

Die App zeigt laut Hilfe Kennzahlen wie Gesamtumsatz mit Bundles, Zahl der Bundle-Bestellungen, umsatzstärkste und meistbestellte Bundles. Weitere Berichte gibt es im Admin unter **Analytics**.

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nichts dazu, **welche Produkte sich als Bundle gut verkaufen**, wie hoch der Preisvorteil sein sollte oder ob Bundles Ihren Warenkorbwert tatsächlich steigern. Auch zu Ladezeit und Darstellung im Theme sagen sie nichts. Das hängt von Ihrem Sortiment und Ihrer Zielgruppe ab.

## Beispiele aus der Praxis

Für [Reserve Kava](/de/projects/reserve-kava), eine Marke für Instant-Kava, habe ich im Zuge des Neuaufbaus der Produktseiten ein Bundle ergänzt, das beide Dosen in den Warenkorb legt. Daneben gibt es Einzel- und Mehrfachdosen mit Abo. Hier zeigt sich, warum die Einschränkungen oben vor dem Aufbau zählen: Laut Hilfe lassen sich Shopify-Bundles nicht mit Abos kombinieren, also muss vorher klar sein, welche Kaufoptionen auf der Produktseite zusammenkommen sollen. Welche Lösung zu Ihrem Shop passt, hängt von Tarif, Sortiment und gewünschten Kaufoptionen ab.

## Vor dem Start: eine Checkliste

1. Welche **Art** von Bundle brauchen Sie: fest, Multipack oder Mix-and-match?
2. Reicht die kostenlose App **Shopify Bundles**, oder brauchen Sie Mix-and-match mit einer Drittanbieter-App?
3. Nutzt Ihr Shop noch **`checkout.liquid`**? Dann sind Bundles nicht möglich.
4. Sollen Bundles mit **Abos oder Vorbestellungen** kombiniert werden? Das geht laut Hilfe nicht.
5. Wie wird der **Bundle-Preis** gepflegt, wenn sich ein Einzelpreis ändert?
6. Sind **SKUs** der Komponenten stabil? Eine Änderung verlangt ein neues Bundle.
7. Bestandsführung bei allen Komponenten aktiv, sodass die Verfügbarkeit stimmt?
8. Rabatt-Setup geprüft, das **Bundle-Produkt** ausgewählt und mit einer Testbestellung kontrolliert?

## Wann ein Entwickler hilft

Ein festes Set oder ein Multipack legen Sie selbst in der App an. Hilfe lohnt sich, wenn Kunden Bundles frei zusammenstellen sollen, wenn die Kaufspalte Bundle, Mehrfachpackungen und Abo übersichtlich zeigen muss, wenn der Checkout vorher von `checkout.liquid` umgestellt werden muss oder wenn Bundle-Logik und Rabatte zusammenpassen sollen. Wie Anpassungen sauber und wartbar bleiben, steht in [Shopify Theme anpassen](/de/blog/shopify-theme-customization). Danach gehört das Setup in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Brauche ich eine App für Bundles?** Ja. Laut Hilfe müssen Sie eine Bundles-App installiert haben. Für feste Bundles und Multipacks gibt es die kostenlose App Shopify Bundles.

**Gibt es Bundles auch im Basic-Tarif?** Ja, die App Shopify Bundles ist laut Hilfe in allen Tarifen verfügbar. Eigene Bundle-Angebote über die APIs sind laut Hilfe dem Tarif Plus vorbehalten.

**Kann der Kunde sein Bundle selbst zusammenstellen?** Das ist Mix-and-match. Die App Shopify Bundles kann es nicht, dafür gibt es Drittanbieter-Apps.

**Kann ich Bundles mit einem Abo verkaufen?** Laut Hilfe nicht: Bundles sind mit Kaufoptionen wie Abos nicht kompatibel.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quellcode und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugriff auf Ihr Konto. Was ich sonst für Shops mache, steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Gratisartikel im Warenkorb](/de/blog/shopify-gratisartikel-warenkorb) · [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions) · [Shopify Rabattcode oder automatischer Rabatt](/de/blog/shopify-rabattcodes-automatische-rabatte) · [Shopify Vorbestellung einrichten](/de/blog/shopify-vorbestellung-preorder) · [Shopify Lagerbestand verwalten](/de/blog/shopify-lagerbestand-verwalten) · [Shopify Produktvarianten anlegen](/de/blog/shopify-produktvarianten-optionen) · [Shopify Try before you buy](/de/blog/shopify-try-before-you-buy)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
