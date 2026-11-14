---
publishedAt: 2026-10-23
title: "Shopify Steuern und MwSt. einrichten: Preisanzeige, EU-Regeln, OSS und was Sie vorher klären sollten"
date: 23. Oktober 2026
readingTime: 8 Min
excerpt: "Shopify Steuern und MwSt. einrichten: Preise brutto oder netto, Steuerdienst, EU-Verkauf mit OSS, Ausnahmen, Versandsteuer, USt-IdNr. und Rechnungen."
image: /og/projects/lineargent.jpg
topic: build
tags:
  - Shopify
  - Steuern
  - MwSt.
  - OSS
---

„Zeigt mein Shop die Preise mit oder ohne Mehrwertsteuer an, und was passiert, wenn ich nach Frankreich verkaufe?“ Das ist oft die erste Frage, wenn Händler in Shopify Steuern und MwSt. einrichten.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs und Schwellenwerte ändern sich, prüfen Sie also Ihren Admin. Welcher Steuersatz gilt und wo Sie sich registrieren, klären Sie mit Steuerberatung oder Finanzamt. Shopify leistet laut Hilfe keine Steuerberatung. Menünamen stammen aus der englischen Oberfläche.

## Wer für die Steuer verantwortlich ist

Laut Hilfe sind Sie das. Shopify rechnet die Steuer aus und zieht sie im Checkout ein. Abgeführt und gemeldet wird sie nur mit Shopify Tax und automatischer Abgabe, und das gilt nicht überall. Standardsätze im Admin bestätigen Sie selbst.

Die Reihenfolge laut Hilfe: klären, wo Sie Steuer erheben müssen, sich dort registrieren, die Erhebung unter **Settings > Taxes and duties** einrichten, Meldungen im vorgegebenen Rhythmus abgeben.

## Preise mit oder ohne Steuer anzeigen

Standardmäßig zeigt Shopify Preise **ohne** Steuer und MwSt. an, die Steuer kommt im Checkout dazu. Zwei Optionen ändern das:

- **Steuerinklusive Preise:** Die Steuer steckt in Produktpreis und Versandrate, der angezeigte Preis ist der Endpreis. Im Checkout steht sie als eigene Zeile, Zwischensumme und Gesamtsumme bleiben gleich.
- **Dynamisch nach Land des Kunden:** Preise erscheinen je nach Standort mit oder ohne Steuer, zum Beispiel inklusive MwSt. in der EU und ohne Steuer in den USA. Einstellbar pro Markt, siehe [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).

Laut Hilfe ändert beides nur die **Anzeige**, nicht die Berechnung:

- Bei inklusiven Preisen wird der Steueranteil aus Ihrem Preis herausgerechnet.
- **Charge tax on this product** sollte bei den Produkten aktiviert bleiben.
- Ein steuerbefreiter Kunde zahlt bei inklusiven Preisen trotzdem den vollen Listenpreis.
- Managed Markets sowie Zölle und Einfuhrabgaben im Checkout können die Steuereinstellungen übersteuern.

## Welchen Steuerdienst Sie nutzen

Für die EU nennt die Hilfe mehrere Wege:

- **Shopify Tax:** berechnet die Sätze aus Ihren Registrierungen und den Produktkategorien. Pro Kalenderjahr ist der Dienst bis zu einer Umsatzgrenze pro Shop kostenlos. Die Beträge stehen auf der Hilfeseite „Choose a tax service“.
- **Basic Tax:** in der EU laut Hilfe nur für Shops, die dort **vor dem 13. Mai 2026** für die Steuererhebung eingerichtet waren. Neue Shops nutzen Shopify Tax oder manuelle Steuereinstellungen.
- **Manuelle Steuer (Manual Tax):** Sie tragen die Sätze selbst ein. Aktualisiert werden sie nur, wenn Sie erneut auf **Reset to default tax rates** klicken. Es fehlen unter anderem Berechnung nach Produktkategorie, Steuerbefreiungen für Kunden und B2B, Steuerverbindlichkeits-Hinweise und VAT-Rechnungen.
- **Steuer-Apps** von Drittanbietern für Spezialfälle.

Mischen Sie die Dienste nicht. Manuelle Steuer neben Basic Tax oder Shopify Tax kann laut Hilfe in EU und UK zu falsch erhobenen Zöllen führen.

## EU-Verkauf: Registrierung, Schwellenwert, OSS

Für Händler in der EU gilt laut Hilfe:

- Kunden im **eigenen Land** zahlen Ihren lokalen MwSt.-Satz.
- Für **andere EU-Länder** zählt eine gemeinsame Grenze von **10.000 €** Jahresumsatz in alle anderen EU-Länder zusammen. Darunter können Sie den Satz Ihres Heimatlandes berechnen (die Befreiung für Kleinstunternehmen, die Sie gegebenenfalls bei Ihrer Steuerbehörde beantragen müssen) oder OSS wählen. Ab 10.000 € gilt der Satz des Kundenlandes, über OSS oder eine Registrierung dort.
- Wer in andere EU-Länder verkauft, braucht typischerweise **eine Registrierung im eigenen Land**.
- Mit **OSS (One-Stop Shop)** führen Sie die MwSt. für alle EU-Länder gesammelt ab. In Shopify gibt es OSS nur mit Shopify Tax oder Basic Tax.
- Eine **bedeutende Präsenz** (etwa Lager oder Laden) kann eine eigene Registrierung im Land nötig machen.

Unter **Settings > Taxes and duties > Regional settings > European Union** wählen Sie eine von drei Registrierungsarten: lokale MwSt.-Registrierung, OSS oder die Befreiung für Kleinstunternehmen („Home country registration“). Wer die Befreiung nutzt und später in weiteren Ländern registriert sein muss, wechselt zuerst auf OSS oder eine länderspezifische Registrierung.

## Produktkategorien und Steuerausnahmen

Für Produkte ohne Normalsatz gibt es zwei Wege:

- **Produktkategorien** (nur mit Shopify Tax): Sie ordnen Produkte einer Kategorie aus Shopifys Standardtaxonomie zu. Der Dienst leitet daraus ermäßigte Sätze oder Befreiungen ab.
- **Steuerausnahmen (Overrides):** Sie weisen einer **manuellen Kollektion** einen Satz zu. Der Prozentwert ist der erhobene Satz, nicht der befreite Anteil. Mit automatischen Kollektionen geht das nicht. Für einzelne Produkte genügt es, **Charge tax on this product** zu deaktivieren.

Die Rangfolge:

- Eine Ausnahme hat Vorrang vor der Produktkategorie.
- Eine Befreiung beim Kunden hat Vorrang vor allen Ausnahmen.
- Für eine EU-Ausnahme brauchen Sie mindestens eine Registrierung in der EU.

„0 %“ lässt sich einstellen, muss aber nicht richtig sein. Prüfen Sie den Satz laut Hilfe immer bei der Steuerbehörde.

## Steuer auf den Versand

In der EU wird Versand laut Hilfe besteuert, unabhängig von der Einstellung **Charge tax on shipping rates**. Diese Option betrifft nur Länder, in denen Steuer nicht automatisch berechnet wird. Für gemischte Warenkörbe gilt die „proportionale Versandsteuer“, je nach Land. Kostenlose Artikel sind nicht automatisch steuerfrei, das stellen Sie am Produkt ein. Zu den Versandraten: [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten).

## B2B: USt-IdNr. im Checkout und Rechnungen

Zwei Funktionen für Geschäftskunden, beide nur mit Shopify Tax:

- **Prüfung der USt-IdNr. im Checkout:** Kunden tragen eine Umsatzsteuer-ID ein und nutzen bei grenzüberschreitenden Lieferungen in der EU oder nach UK das Reverse-Charge-Verfahren. Es wird keine MwSt. berechnet, der Kunde führt sie selbst ab, die Rechnung trägt einen Hinweis darauf. Laut Hilfe gilt das nur, wenn das Zielland vom Land des Lagers abweicht, und nur für Gast- oder Shop-Pay-Checkout, nicht für B2B-spezifische Checkouts. Das Feld **Company VAT number** schalten Sie in den Checkout-Optionen ein. Mehr: [Shopify B2B und Großhandel](/de/blog/shopify-b2b-wholesale).
- **VAT-Rechnungen für EU und UK:** Sie aktivieren sie in den Steuereinstellungen, Kunden finden sie auf der Bestellstatusseite. Bedingungen laut Hilfe: Zielland in EU oder UK, MwSt. wurde berechnet (auch bei 0), Bestellung über den Shopify-Checkout, keine Zölle erhoben. Nach Bestelländerungen passen Sie das PDF manuell an. Für Portugal gibt es keine automatischen VAT-Rechnungen. Siehe auch [Rechnungen und Bestelldokumente in Shopify](/de/blog/shopify-rechnung-bestelldokumente).

## Berichte und Steuerverbindlichkeiten

Mit Shopify Tax überwacht der Shop Ihre Umsätze und Standorte. Laut Hilfe bekommen Sie monatliche Hinweise, und im Admin steht neben jeder Registrierung, ob Sie unter, nahe an oder über einem Schwellenwert liegen. Eine Registrierungsempfehlung ist das nicht. Für die Abgabe liefern Berichte wie **Steuern** und **Gesamtumsatz nach Bestellung** (als CSV) Zahlen für Ihre Steuerberatung.

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nichts dazu:

- **welcher Satz für Ihre Produkte in Deutschland gilt**
- ob Sie die Kleinunternehmerregelung nutzen oder zu OSS wechseln sollten
- wie Sie Meldungen und Zahlungen ans Finanzamt abwickeln und mit der Buchhaltung abgleichen
- ob Brutto- oder Nettopreise zu Ihrer Zielgruppe passen und welche Pflichtangaben im Shop stehen müssen

Das gehört zu Steuerberatung und Anwalt. Zu den rechtlichen Texten: [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Beispiele aus der Praxis

Unter meinen veröffentlichten Projekten gibt es keinen Fall, in dem ich die Steuer eines Shops eingerichtet hätte, und ich erfinde keinen.

## Vor dem Start: eine Checkliste

1. **Zielländer:** nur Deutschland oder auch andere EU-Länder, dort unter oder über **10.000 €**?
2. **Registrierung:** welche liegt vor, abgestimmt mit der Steuerberatung?
3. **Steuerdienst:** Shopify Tax, Basic Tax (nur falls schon vor dem 13. Mai 2026 genutzt) oder manuelle Sätze?
4. **Preisanzeige:** brutto, nur im eigenen Land oder dynamisch pro Markt?
5. **Ermäßigte Sätze oder Befreiungen:** per Kategorie oder Ausnahme-Kollektion?
6. **Versand:** richtig besteuert, auch in gemischten Warenkörben?
7. **Geschäftskunden:** USt-IdNr. im Checkout?
8. **VAT-Rechnungen** aktiviert, **Testbestellung** in jedes Zielland geprüft?

## Wann ein Entwickler hilft

Die Grundeinstellungen setzen Sie selbst. Hilfe lohnt sich hier:

- Preisanzeige, Markets und Steuerdienst müssen zusammenpassen.
- Ausnahmen-Kollektionen sollen sauber aufgebaut werden.
- USt-IdNr. im Checkout und Rechnungen müssen zum Ablauf mit Geschäftskunden passen.
- Beim Umzug von einem anderen System werden Sätze und Kundenbefreiungen übernommen.

Siehe auch [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) und [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Zeigt Shopify Preise standardmäßig mit MwSt.?** Nein, die Steuer kommt im Checkout dazu. Steuerinklusive Preise ändern nur die Anzeige.

**Führt Shopify die MwSt. ans Finanzamt ab?** Laut Hilfe nur mit Shopify Tax und automatischer Abgabe, und nicht überall.

**Brauche ich OSS?** Das entscheidet Ihre Steuerberatung. Die Hilfe nennt 10.000 € als Grenze.

**Kann ich einzelne Produkte befreien?** Ja, am Produkt oder über eine manuelle Kollektion mit Ausnahme.

**Gibt es automatische Rechnungen mit MwSt.?** Für EU und UK ja, als VAT-Rechnungen mit Shopify Tax.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, ohne Zugriff auf Ihr Konto. Weitere [Leistungen](/de/services).

**Weiterlesen:** [Shopify Markets](/de/blog/shopify-markets-mehrere-laender) · [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien) · [Shopify Rechnungen und Bestelldokumente](/de/blog/shopify-rechnung-bestelldokumente)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
