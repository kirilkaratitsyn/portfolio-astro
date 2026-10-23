---
publishedAt: 2026-10-23
title: "Shopify Steuern und MwSt. einrichten: Preisanzeige, EU-Regeln, OSS und was Sie vorher klären sollten"
date: 23. Oktober 2026
readingTime: 9 Min
excerpt: "Steuern in Shopify: Preise brutto oder netto anzeigen, Steuerdienst wählen, EU-Verkauf mit OSS und Schwellenwert, Steuerausnahmen, Versandsteuer, USt-IdNr. im Checkout und Rechnungen."
image: /og/projects/lineargent.jpg
topic: build
tags:
  - Shopify
  - Steuern
  - MwSt.
  - OSS
---

„Zeigt mein Shop die Preise mit oder ohne Mehrwertsteuer an, und was passiert, wenn ich nach Frankreich verkaufe?“ Das ist oft die erste Steuerfrage im Shopify-Admin. Die Einstellungen dafür gibt es, aber sie hängen zusammen: Preisanzeige, Steuerdienst, Registrierungen, Ausnahmen. Dieser Text zeigt, was die Shopify-Hilfe dazu sagt, für Händler ohne technischen Hintergrund.

## Vorab eine Einordnung

Alles hier stammt aus dem Shopify Help Center, Stand Oktober 2026. Menüs, Verfügbarkeiten und Schwellenwerte ändern sich, prüfen Sie also Ihren Admin. Preise für Apps oder Entwicklung nenne ich nicht. Welcher Steuersatz für Ihre Produkte gilt, wo Sie sich registrieren müssen und wie Sie Meldungen abgeben, ist eine Frage für Ihre Steuerberatung oder das Finanzamt. Die Hilfe sagt selbst, dass Shopify keine Steuerberatung leistet. Hier geht es nur um die Technik. Menünamen sind aus der englischen Oberfläche übernommen, im deutschen Admin heißen sie etwas anders.

## Wer für die Steuer verantwortlich ist

Die Hilfe ist an dieser Stelle klar: Die Steuer liegt in Ihrer Verantwortung. Shopify führt Steuern nicht ab und meldet sie nicht, es sei denn, Sie nutzen Shopify Tax mit automatischer Abgabe, und das gilt nicht überall. Standardsätze im Admin müssen Sie selbst bestätigen. Shopify rechnet die Steuer aus und zieht sie im Checkout ein, mehr nicht.

Die allgemeinen Schritte in der Hilfe: herausfinden, wo Sie Steuer erheben müssen, sich dort registrieren, die Erhebung unter **Settings > Taxes and duties** einrichten, bei ermäßigten Sätzen oder Befreiungen Produktkategorien oder Steuerausnahmen nutzen, Meldungen im vorgegebenen Rhythmus abgeben und die Umsätze im Blick behalten.

## Preise mit oder ohne Steuer anzeigen

Standardmäßig zeigt Shopify Preise **ohne** Steuer und MwSt. an, die Steuer kommt im Checkout dazu. Das ist in vielen Märkten ungewohnt. Die Hilfe nennt zwei Änderungen:

- **Steuerinklusive Preise:** In den Steuereinstellungen aktivieren Sie die Option, die Steuer in Produktpreis und Versandrate einzurechnen. Dann ist der angezeigte Preis der Endpreis. Die Steuer erscheint im Checkout als eigene Zeile, Zwischensumme und Gesamtsumme bleiben gleich.
- **Dynamisch nach Land des Kunden:** Preise werden je nach Standort mit oder ohne Steuer angezeigt, zum Beispiel inklusive MwSt. in der EU und ohne Steuer in den USA. Das stellen Sie pro Markt ein, mehr dazu in [Shopify Markets: in mehrere Länder verkaufen](/de/blog/shopify-markets-mehrere-laender).

Wichtig laut Hilfe: Beides ändert nur die **Anzeige**, nicht die Berechnung. Bei inklusiven Preisen wird der Steueranteil aus dem Preis herausgerechnet, den Sie festgelegt haben. Außerdem sollte bei den Produkten **Charge tax on this product** aktiviert bleiben, damit die Steuer im Preis steckt. Und: Ist ein Kunde als steuerbefreit markiert, aber Sie nutzen inklusive Preise, zahlt er laut Hilfe trotzdem den vollen Listenpreis. Managed Markets sowie Zölle und Einfuhrabgaben im Checkout können die Steuereinstellungen übersteuern.

## Welchen Steuerdienst Sie nutzen

Die Hilfe unterscheidet für die EU mehrere Wege:

- **Shopify Tax:** berechnet die Sätze anhand Ihrer Registrierungen und der Produktkategorien. Pro Kalenderjahr ist der Dienst bis zu einer Umsatzgrenze pro Shop kostenlos, darüber gelten Standardsätze. Die Beträge stehen auf der Hilfeseite „Choose a tax service“, ich nenne sie nicht.
- **Basic Tax:** in der EU laut Hilfe nur verfügbar, wenn Ihr Shop **vor dem 13. Mai 2026** für die Steuererhebung dort eingerichtet war. Wer Basic Tax schon nutzt, kann es weiter nutzen. Neue Shops nutzen Shopify Tax oder manuelle Steuereinstellungen.
- **Manuelle Steuer (Manual Tax):** Sie tragen die Sätze selbst ein. Standardsätze werden danach nicht automatisch aktualisiert, es sei denn, Sie klicken erneut auf **Reset to default tax rates**. Dafür fehlen unter anderem automatische Berechnung nach Produktkategorie, Steuerbefreiungen für Kunden und B2B, Steuerverbindlichkeits-Hinweise und VAT-Rechnungen.
- **Steuer-Apps** von Drittanbietern für Spezialfälle.

Die Hilfe rät, die Dienste nicht zu mischen: Manuelle Steuer zusammen mit Basic Tax oder Shopify Tax kann in EU und UK dazu führen, dass Zölle nicht richtig erhoben werden.

## EU-Verkauf: Registrierung, Schwellenwert, OSS

Für Händler in der EU beschreibt die Hilfe diese Logik:

- Kunden im **eigenen Land** zahlen Ihren lokalen MwSt.-Satz.
- Für Kunden in **anderen EU-Ländern** zählt eine gemeinsame Grenze von **10.000 €** Jahresumsatz in alle anderen EU-Länder zusammen. Darunter können Sie weiter den Satz Ihres Heimatlandes berechnen (die Befreiung für Kleinstunternehmen, die Sie gegebenenfalls bei Ihrer Steuerbehörde beantragen müssen) oder sich für OSS entscheiden. Ab 10.000 € gilt der Satz des Kundenlandes, über OSS oder eine Registrierung dort.
- **Eine Registrierung im eigenen Land** brauchen Sie laut Hilfe typischerweise, wenn Sie in andere EU-Länder verkaufen wollen.
- **OSS (One-Stop Shop)** erlaubt, die MwSt. für alle EU-Länder gesammelt zu erheben und abzuführen, statt sich in jedem Land einzeln zu registrieren. In Shopify steht OSS nur zur Verfügung, wenn Sie Shopify Tax oder Basic Tax nutzen. Bei manueller Steuer tragen Sie die Sätze selbst ein.
- Eine **bedeutende Präsenz** in einem Land (etwa ein Lager oder Laden) kann eine eigene Registrierung dort nötig machen. Das klären Sie mit Behörde oder Steuerberatung.

Im Admin: **Settings > Taxes and duties > Regional settings > European Union**. Dort wählen Sie eine von drei Registrierungsarten: lokale MwSt.-Registrierung, OSS oder die Befreiung für Kleinstunternehmen („Home country registration“). Wer die Befreiung nutzt und später in weiteren Ländern registriert sein muss, verliert sie. Dann wechseln Sie zuerst auf OSS oder eine länderspezifische Registrierung.

## Produktkategorien und Steuerausnahmen

Nicht jedes Produkt hat den Normalsatz. In Shopify gibt es zwei Wege:

- **Produktkategorien** (nur mit Shopify Tax): Sie ordnen Produkte einer Kategorie aus Shopifys Standardtaxonomie zu, und der Dienst berücksichtigt daraus ermäßigte Sätze oder Befreiungen. Das reduziert laut Hilfe den Bedarf an Ausnahmen.
- **Steuerausnahmen (Overrides):** Sie legen eine **manuelle Kollektion** mit den betroffenen Produkten an und weisen ihr einen Satz zu. Wichtig: Der eingetragene Prozentwert ist der Satz, der erhoben wird, nicht der befreite Anteil. Ausnahmen gehen nur mit manuell befüllten Kollektionen, nicht mit automatischen. Für einzelne Produkte genügt es, **Charge tax on this product** zu deaktivieren.

Beachten Sie: Eine Ausnahme hat Vorrang vor der Produktkategorie. Eine Befreiung beim Kunden hat Vorrang vor allen Ausnahmen. Für eine EU-Ausnahme brauchen Sie mindestens eine Registrierung in der EU. Dass „0 %“ eine mögliche Einstellung ist, heißt nicht, dass sie richtig ist: Die Hilfe rät, den Satz immer bei der Steuerbehörde zu prüfen.

## Steuer auf den Versand

In der EU wird Versand laut Hilfe besteuert, unabhängig von der Einstellung **Charge tax on shipping rates**. Diese Option betrifft nur Länder, in denen Steuer nicht automatisch berechnet wird. Gemischte Warenkörbe mit steuerfreien und steuerpflichtigen Artikeln behandelt die Hilfe unter „proportionaler Versandsteuer“, und die Regel hängt vom Land ab. Kostenlose Artikel sind nicht automatisch steuerfrei, sie müssen am Produkt eingestellt werden. Mehr zu den Versandraten selbst: [Versand in Shopify einrichten](/de/blog/shopify-versand-einrichten).

## B2B: USt-IdNr. im Checkout und Rechnungen

Zwei Funktionen betreffen vor allem Geschäftskunden, beide nur mit Shopify Tax:

- **Prüfung der USt-IdNr. im Checkout:** Kunden tragen eine Umsatzsteuer-ID ein und können bei grenzüberschreitenden Lieferungen in der EU oder nach UK das Reverse-Charge-Verfahren nutzen. Dann wird keine MwSt. berechnet, der Kunde führt sie selbst ab, und auf der Rechnung steht ein Hinweis zum Reverse Charge. Laut Hilfe gilt das nur, wenn das Zielland vom Land des Lagers abweicht, und nur für Gast- oder Shop-Pay-Checkout, nicht für B2B-spezifische Checkouts. Das Feld **Company VAT number** schalten Sie in den Checkout-Optionen ein. Mehr zu B2B: [Shopify B2B und Großhandel](/de/blog/shopify-b2b-wholesale).
- **VAT-Rechnungen für EU und UK:** Sie aktivieren sie in den Steuereinstellungen. Sie werden auf der Bestellstatusseite angezeigt, wo Kunden sie speichern oder drucken können. Laut Hilfe gelten Bedingungen: Zielland in EU oder UK, MwSt. wurde berechnet (auch bei 0), Bestellung lief über den Shopify-Checkout und es wurden keine Zölle erhoben. Nach Bestelländerungen werden sie nicht neu erzeugt, dann passen Sie das PDF manuell an. Für Lieferungen nach Portugal gibt es keine automatischen VAT-Rechnungen. Wie Rechnungen und Bestelldokumente allgemein aussehen: [Rechnungen und Bestelldokumente in Shopify](/de/blog/shopify-rechnung-bestelldokumente).

## Berichte und Steuerverbindlichkeiten

Mit Shopify Tax überwacht der Shop Ihre Umsätze und Standorte, damit Sie sehen, in welchen EU-Ländern Verpflichtungen entstehen könnten. Sie bekommen laut Hilfe monatliche Hinweise, und im Admin steht neben jeder Registrierung, ob Sie unter, nahe an oder über einem Schwellenwert liegen. Daraus folgt keine Registrierungsempfehlung, die Hilfe verweist auf Steuerexperten. Für die Abgabe selbst liefern Berichte wie **Steuern** und **Gesamtumsatz nach Bestellung** (als CSV) Zahlen für Ihre Steuerberatung.

## Was die Hilfe hier nicht beantwortet

Die Hilfeseiten sagen nichts dazu, **welcher Satz für Ihre Produkte in Deutschland gilt**, ob Sie die Kleinunternehmerregelung nutzen sollten, ob Sie bei Ihrem Umsatz zu OSS wechseln, wie Sie Meldungen und Zahlungen ans Finanzamt abwickeln oder wie Buchhaltung und Shopify-Berichte zusammenpassen. Auch wie Preise für Ihre Zielgruppe wirken (brutto oder netto) und welche Pflichtangaben im Shop stehen müssen, bleibt offen. Das gehört zu Steuerberatung und Anwalt. Zu den rechtlichen Texten im Shop: [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien). Und was die Umsetzung kostet, hängt vom Umfang ab.

## Beispiele aus der Praxis

Unter meinen veröffentlichten Projekten gibt es keinen Fall, in dem ich die Steuer eines Shops eingerichtet hätte, und ich erfinde keinen. Diese Einstellungen hängen an der Registrierung des Händlers und gehören mit der Steuerberatung abgestimmt, bevor sie im Admin abgebildet werden. Genau diese Reihenfolge beschreibt auch die Hilfe: erst klären, wo Steuer anfällt, dann einrichten.

## Vor dem Start: eine Checkliste

1. Wo verkaufen Sie hin? **Nur Deutschland** oder auch **andere EU-Länder**, und liegt der Umsatz dort unter oder über **10.000 €**?
2. Welche **Registrierung** liegt vor, und mit welcher Steuerberatung wurde sie abgestimmt?
3. Welcher **Steuerdienst** passt: Shopify Tax, Basic Tax (nur falls schon vor dem 13. Mai 2026 genutzt) oder manuelle Sätze?
4. Sollen Preise **brutto** angezeigt werden, nur im eigenen Land oder **dynamisch** pro Markt?
5. Haben Produkte **ermäßigte Sätze oder Befreiungen**, per Kategorie oder per Ausnahme-Kollektion?
6. Wird der **Versand** richtig besteuert, auch in gemischten Warenkörben?
7. Verkaufen Sie an **Geschäftskunden**, sollen sie die USt-IdNr. im Checkout eintragen?
8. Sind **VAT-Rechnungen** aktiviert, und prüfen Sie eine **Testbestellung** in jedes Zielland?

## Wann ein Entwickler hilft

Die Grundeinstellungen setzen Sie selbst. Hilfe lohnt sich, wenn Preisanzeige, Markets und Steuerdienst zusammenpassen müssen, wenn die Ausnahmen-Kollektionen sauber aufgebaut werden sollen, wenn die USt-IdNr. im Checkout und Rechnungen zum Ablauf mit Geschäftskunden passen müssen oder wenn beim Umzug von einem anderen System die Sätze und Kundenbefreiungen übernommen werden. Das Thema Checkout-Grenzen steht in [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen). Danach gehört die Einrichtung in die laufende Pflege, siehe [Shopify Wartung](/de/blog/shopify-wartung-betreuung).

## Häufige Fragen

**Zeigt Shopify Preise standardmäßig mit MwSt.?** Nein. Standardmäßig ohne Steuer, die Steuer kommt im Checkout dazu. Mit steuerinklusiven Preisen ändern Sie das, die Berechnung bleibt gleich.

**Führt Shopify die MwSt. ans Finanzamt ab?** Laut Hilfe nicht, nur mit Shopify Tax und automatischer Abgabe, und nicht überall. Meldung und Zahlung liegen bei Ihnen.

**Brauche ich OSS?** Das entscheidet Ihre Steuerberatung. Die Hilfe beschreibt OSS als Vereinfachung für Verkäufe in andere EU-Länder und nennt 10.000 € als Grenze.

**Kann ich einzelne Produkte befreien?** Ja, am Produkt oder über eine manuelle Kollektion mit Ausnahme. Welcher Satz gilt, klären Sie mit der Steuerbehörde.

**Gibt es automatische Rechnungen mit MwSt.?** Für EU und UK ja, als VAT-Rechnungen mit Shopify Tax, unter den genannten Bedingungen.

**Was kostet die Einrichtung?** Das hängt vom Umfang ab. Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps im Quellcode und den Aufbau der Seiten, und sage Ihnen, was auffällt. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugriff auf Ihr Konto. Was ich sonst für Shops mache, steht unter [Leistungen](/de/services).

**Weiterlesen:** [Shopify Markets](/de/blog/shopify-markets-mehrere-laender) · [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien) · [Shopify Rechnungen und Bestelldokumente](/de/blog/shopify-rechnung-bestelldokumente)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
