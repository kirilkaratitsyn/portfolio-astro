---
publishedAt: 2026-11-16
title: "Shopify mit Google Shopping verbinden: Merchant Center einrichten, ohne dass Produkte abgelehnt werden"
seoTitle: "Shopify Google Shopping: Merchant Center verbinden"
date: 16. November 2026
readingTime: 7 Min
excerpt: "Shopify mit Google Shopping verbinden: Voraussetzungen, die App Google & YouTube, Produktdaten und GTIN, abgelehnte Produkte und kostenlose Einträge in Deutschland."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Google Shopping
  - Marketing
---

Damit Ihre Produkte im Shopping-Tab von Google erscheinen, braucht Ihr Shopify-Shop eine Verbindung zum Google Merchant Center. Das übernimmt die App **Google & YouTube** von Google: Sie überträgt Produkte, Preise und Versand automatisch. Die meiste Arbeit steckt nicht im Verbinden, sondern in den Voraussetzungen und in sauberen Produktdaten. Quellen sind die Shopify-Hilfe und die Merchant-Center-Hilfe von Google, Stand November 2026.

Wenn Ihr Shop in der normalen Google-Suche gar nicht auftaucht, ist das ein anderes Thema, siehe [Shopify-Shop wird bei Google nicht gefunden](/de/blog/shopify-shop-bei-google-nicht-gefunden). Hier geht es um den Produkt-Feed.

## Was vor dem Verbinden stimmen muss

Laut Shopify-Hilfe prüft Google den Shop selbst, nicht nur die Produkte. Diese Punkte sollten erfüllt sein, bevor Sie verbinden:

- **Der Shop ist öffentlich.** Ein Shop mit Passwortseite kann nicht verbunden werden.
- **Eine Zahlungsart ist eingerichtet.** Dazu passt [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland).
- **Rückerstattungsrichtlinie und AGB** sind unter **Settings > Policies** angelegt und stehen im Footer-Menü. Die Hilfe verlangt dafür den Linktyp **Policies**, keine eigenen Links auf Seiten. Mehr dazu in [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).
- **Kontaktdaten sind sichtbar:** Telefon, E-Mail, Postanschrift oder Kontaktformular, mindestens eins davon. Die App kann das nicht prüfen, Sie bestätigen es per Häkchen. Die Hilfe warnt: Wer etwas bestätigt, das nicht stimmt, riskiert die Sperrung des Merchant-Center-Kontos.
- **Versand ist eingerichtet**, mit einer Versandzone für das Zielland. Übertragen werden nur die Tarife aus dem Profil **General shipping**. Eigene Versandprofile führen zu Synchronisationsfehlern. Wie Profile funktionieren, steht in [Shopify Versand einrichten](/de/blog/shopify-versand-einrichten).

Für Deutschland kommt eine Regel von Google dazu: Versandkosten sind für Shopping-Anzeigen und kostenlose Einträge Pflicht. Ein Angebot ohne Versandinformation wird laut Shopify-Hilfe abgelehnt.

## Die Verbindung in drei Schritten

1. Im Admin **Sales channels > Google & YouTube** öffnen (vorher die App aus dem Shopify App Store installieren).
2. **Connect Google Account** klicken, ein Google-Konto wählen oder anlegen und Shopify den Zugriff erlauben.
3. Ein Merchant-Center-Konto wählen oder mit **Create new** anlegen. Die Telefonnummer wird per SMS-Code bestätigt.

Was Sie dabei wissen sollten:

- In der Liste erscheinen nur Merchant-Center-Konten, in denen Ihr Google-Konto **Admin** ist. Nach einer Änderung der Rechte rät die Hilfe, etwa zehn Minuten zu warten.
- Ein Merchant-Center-Konto lässt sich nur mit einem einzigen Shopify-Shop verbinden.
- Verbinden Sie ein bestehendes Merchant-Center-Konto, wird ein vorhandener Produkt-Feed **überschrieben**.
- Shopify beansprucht Ihre Domain im Merchant Center automatisch. Ist sie schon von einem anderen Google-Konto beansprucht, lässt sich der Anspruch übertragen. Das ist laut Hilfe nicht rückgängig zu machen. Hat eine frühere Agentur das Konto angelegt, klären Sie vorher, wem es gehört.

Google Ads und Google Analytics 4 lassen sich in derselben App verbinden, auch ohne Merchant Center. Ob die App dabei ein Tracking-Tag setzt, beschreibt die Hilfe nicht genau. Prüfen Sie das nach dem Verbinden, bevor Sie Zahlen vertrauen, und denken Sie an das [Cookie-Banner](/de/blog/shopify-cookie-banner-datenschutz).

## Welche Produktdaten Google braucht

Beim ersten Einrichten werden alle Produkte übertragen, die im Onlineshop verfügbar sind. Ein Produkt geht an Google, wenn unter **Sales channels** am Produkt sowohl **Online Store** als auch **Google & YouTube** aktiv sind. Die Daten kommen aus dem Produkt selbst:

- **Titel und Beschreibung.** Titel in Großbuchstaben erzeugen laut Hilfe den Fehler „Excessive capitalization“.
- **Bilder.** Mindestens ein Bild. Text, Logos oder Wasserzeichen auf dem Bild führen zum Fehler „Promotional overlay on image“. Ab dem 31. Januar 2027 muss das Hauptbild in allen Kategorien mindestens 500 × 500 Pixel groß sein, sonst wird das Produkt nicht freigegeben.
- **Barcode (GTIN).** Er steht am Produkt im Bereich **Inventory**. In Europa ist das meist die EAN mit 13 Ziffern. Jede Variante braucht ihre eigene GTIN.
- **Marke, Herstellernummer (MPN), Google-Produktkategorie.** Diese Felder pflegen Sie in der App. Ohne Kategorie ordnet Google selbst zu, laut Hilfe mit möglichen Fehlern.

### Keine GTIN? Das ist erlaubt

Hier widersprechen sich die Quellen scheinbar. Shopify nennt „Missing GTIN or MPN“ einen Fehler. Google schreibt, dass Produkte ohne zugewiesene GTIN keine angeben müssen, etwa Eigenmarken oder Produkte, die nur Sie verkaufen. Zusammen heißt das: Hat das Produkt einen Barcode, tragen Sie ihn ein. Hat es keinen, tragen Sie Marke und MPN ein. Eine GTIN zu erfinden oder zu raten, verbietet Google ausdrücklich.

### Variantennamen: Englisch oder Deutsch?

Die Shopify-Hilfe schreibt wörtlich, dass Produktoptionen einschließlich Varianten auf Englisch sein müssen, um mit Google zu synchronisieren. Google selbst verlangt dagegen, dass Titel, Beschreibung und Variantenangaben zur Sprache der Datenquelle passen, sonst drohen schwächere Leistung oder Ablehnungen. Für einen deutschen Shop mit Optionen wie „Farbe“ und „Größe“ heißt das: Benennen Sie nicht vorsorglich alles um. Verbinden Sie, und schauen Sie, welche Fehler die App tatsächlich meldet. Wie Optionen aufgebaut sind, steht in [Shopify Produktvarianten und Optionen](/de/blog/shopify-produktvarianten-optionen).

### Grundpreis bei Ware nach Gewicht oder Volumen

Google verlangt in der EU für bestimmte Produkte einen Grundpreis, etwa bei Ware, die nach Gewicht, Volumen, Länge oder Fläche verkauft wird. Die Angabe dafür tragen Sie in der App Google & YouTube am Produkt ein.

## Wie lange es dauert

Die Quellen nennen drei verschiedene Schritte:

- **Erste Synchronisation:** bis zu 24 Stunden. Spätere Änderungen kommen meist innerhalb weniger Stunden an.
- **Prüfung neuer Produkte durch Google:** 3 bis 5 Werktage nach der ersten Synchronisation.
- **Prüfung des ganzen Kontos**, wenn Google etwas beanstandet: laut Google in der Regel 7 Werktage.

Wer am ersten Tag nichts im Shopping-Tab sieht, hat also meist keinen Fehler gemacht.

## Abgelehnte Produkte und Kontosperre

Probleme sehen Sie an zwei Stellen: Synchronisationsfehler zeigt die App in Shopify, Beanstandungen von Google stehen im Merchant Center unter **Products > Needs attention**. Dort führt **View fix** zur Lösung. Ändern Sie die Produktdaten, prüft Google die betroffenen Produkte automatisch neu. Sind Sie mit einer Beanstandung nicht einverstanden, können Sie eine Überprüfung beantragen. Entfernen Sie vorher Produkte, die wirklich gegen Regeln verstoßen, sonst können Sammelanträge laut Hilfe scheitern.

Ernster sind Beanstandungen am ganzen Konto. Für die meisten Verstöße schickt Google eine Warnung und gibt 7 oder 28 Kalendertage zur Behebung. Bei groben Verstößen sperrt Google ohne Vorwarnung. Unter „Falsche Darstellung“ nennt Google unter anderem:

- den Gesamtpreis mit allen Steuern und Gebühren nicht offenzulegen,
- Versandkosten nicht vollständig anzugeben,
- Rückgaben zu verweigern, obwohl eine Rückgaberichtlinie etwas anderes verspricht.

Für deutsche Shops bedeutet das: Preise inklusive MwSt., Versandkosten und Widerrufsrecht müssen im Shop und im Feed übereinstimmen. Siehe auch [Shopify Steuern und MwSt. einrichten](/de/blog/shopify-steuern-mwst-einrichten).

Wichtig für den Support: Google betreibt die App. Bei Installation und Produktdaten hilft der Shopify-Support, bei Kontosperren, Google Ads und Anzeigenfreigaben nur Google.

## Kostenlos oder Anzeige?

Es gibt zwei Wege in den Shopping-Bereich.

**Kostenlose Einträge.** Freigegebene Produkte können ohne Werbebudget im Shopping-Tab, in der Google-Suche, in Google Bilder, Maps und Lens erscheinen. Die Shopify-Seiten nennen dafür ausdrücklich Shops, die in die USA verkaufen. Googles eigene Hilfe führt Deutschland aber in der Liste der Länder für kostenlose Einträge und schreibt, dass mit der Shopify-App synchronisierte Produkte dort kostenlos erscheinen können. Für einen Shop in Deutschland gilt also Googles Liste.

**Performance Max.** Das ist die bezahlte Kampagne, sie hat Smart Shopping ersetzt und läuft über YouTube, Google-Suche, Gmail und Maps. Das Budget legen Sie in Google Ads fest, nicht in Shopify. Ich nenne hier keine Beträge. Mein Rat: erst die kostenlosen Einträge sauber zum Laufen bringen, dann über Anzeigen nachdenken.

## Checkliste

1. Shop ohne Passwort, Zahlungsart aktiv?
2. Rückerstattung und AGB unter Policies angelegt und im Footer verlinkt?
3. Kontaktdaten im Shop sichtbar?
4. Versandtarife für Deutschland im Profil General shipping?
5. Preise mit MwSt., Versandkosten und Widerruf im Shop klar sichtbar?
6. Barcode oder Marke und MPN an jedem Produkt, Kategorie gesetzt?
7. Hauptbilder ohne Text und Logo, mindestens 500 × 500 Pixel?
8. Wem gehört das Merchant-Center-Konto, und ist die Domain frei?

## Wie ich es handhabe

Einen Google-Shopping-Fall mit dokumentierten Ergebnissen habe ich nicht in meinem Portfolio, und Anzeigenkampagnen betreue ich nicht. Mein Teil ist der Shop selbst: Richtlinien und Footer, Versandprofile, Produktdaten mit Barcodes und Metafeldern, Bilder, und die Theme-Stellen, an denen Preis, Versand und Grundpreis angezeigt werden. Im Admin arbeite ich über ein Collaborator-Konto mit begrenzten Rechten, das Google- und das Merchant-Center-Konto bleiben bei Ihnen.

## Häufige Fragen

**Was kostet Google Shopping?** Kostenlose Einträge brauchen kein Werbebudget. Geld kosten Anzeigen, deren Budget Sie in Google Ads festlegen.

**Brauche ich ein eigenes Merchant-Center-Konto?** Die App kann eines für Sie anlegen. Ein bestehendes lässt sich verbinden, sein bisheriger Feed wird dann überschrieben.

**Warum sind meine Produkte nicht sichtbar?** Häufig läuft die Prüfung noch (3 bis 5 Werktage) oder es fehlen Versandkosten, GTIN oder Marke. Den Grund zeigt das Merchant Center unter Needs attention.

**Müssen alle Produkte zu Google?** Nein. Sie steuern das pro Produkt über Sales channels, auch für mehrere Produkte auf einmal.

**Was ist mit anderen Ländern?** Die App überträgt Länder und Sprachen automatisch, lässt sich aber auf manuell umstellen. Für mehrere Länder lohnt ein Blick auf [Shopify Markets](/de/blog/shopify-markets-mehrere-laender).

## Feed eingerichtet, aber Produkte werden abgelehnt?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact): Ich sage Ihnen, welche Voraussetzungen von außen fehlen, etwa Richtlinien im Footer, Kontaktdaten oder Versandkosten. Die laufende Arbeit an Produktdaten und Theme passt zur [Shopify Betreuung](/de/services/shopify-betreuung).

**Weiterlesen:** [Shopify SEO optimieren lassen](/de/blog/shopify-seo-optimieren-lassen) · [Shopify Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv) · [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
