---
publishedAt: 2026-10-22
title: "Von Wix zu Shopify wechseln: Ablauf, Stolperstellen und was nicht mitkommt"
date: 22. Oktober 2026
readingTime: 7 Min
excerpt: "Von Wix zu Shopify wechseln: was sich übernehmen lässt, was neu entsteht und wie Sie Domain, E-Mail und alte Adressen behandeln."
image: /og/projects/lumppings.jpg
topic: migration
tags:
  - Shopify
  - Wix
  - Migration
---

Wer von Wix zu Shopify wechseln will, kann den Shop nicht als Ganzes verschieben. Laut Wix muss die Website auf den Servern von Wix gehostet und betrieben werden, einen Export des fertigen Shops gibt es nicht. Übernehmen lassen sich Daten: Produkte und Kunden über CSV-Dateien, Bestellungen über Zusatz-Apps. Design, Seiten und Funktionen entstehen in Shopify neu.

Einen Wix-Shop habe ich bisher nicht als Projekt veröffentlicht. Mein dokumentierter Plattformwechsel ist [Jula Bloom](/de/projects/jula-bloom), ein Umzug von WooCommerce zu Shopify. Die Angaben unten stammen aus den Hilfe-Seiten von Wix und Shopify, Stand Oktober 2026. Beide Oberflächen ändern sich, prüfen Sie also Ihr Konto dagegen.

## Lohnt sich der Wechsel überhaupt?

Ein Umzug kostet Zeit und birgt SEO-Risiko. Klären Sie vorher drei Fragen:

- **Was fehlt Ihnen heute konkret?** Nennen Sie drei Dinge, die in Wix nicht oder nur umständlich gehen. Bleibt die Liste leer, spricht wenig für einen Umzug.
- **Was läuft in Wix zusätzlich zum Shop?** Buchungen, Mitgliederbereiche, Formulare oder Veranstaltungen brauchen in Shopify eine App oder eine andere Lösung.
- **Wie viel hängt an Ihren Google-Rankings?** Je mehr Umsatz über die Suche kommt, desto sorgfältiger muss die Planung sein.

## Was lässt sich übernehmen, was nicht?

Nach der Shopify-Anleitung „Migrate from Wix“:

- **Produkte**: Ja, per CSV-Export, angepasst an Shopifys Vorlage, oder über die App „Store Migration“ (laut Shopify im frühen Zugang)
- **Kunden**: Ja, per CSV, nach Bearbeitung der Wix-Datei
- **Bestellhistorie**: Nur über Apps von Drittanbietern
- **Bewertungen**: Nicht exportierbar
- **Seiten und Blogbeiträge**: In der Shopify-Anleitung nicht behandelt, also manuell neu anlegen
- **Design, Funktionen, Apps**: Nicht übertragbar

## Schritt 1: Bestandsaufnahme, solange Wix läuft

Legen Sie vor jeder Änderung eine Liste an. Sie ist später die Grundlage für die Weiterleitungen.

- Alle Produkte, Kategorien, Seiten und Blogbeiträge mit **Adresse**. Die schnellste Quelle ist die Wix-Sitemap.
- Seiten, die **Besucher aus Google** bringen (Search Console, Bericht „Leistung“), und Seiten, auf die andere verlinken (Bericht „Links“).
- Apps und Funktionen aus Wix, die Sie in Shopify brauchen.
- Registrar der **Domain** und die E-Mail-Adressen, die daran hängen.

## Schritt 2: Produkte exportieren und anpassen

Der Export liegt in Wix unter „Produkte“ (More Actions → Export). Laut Wix-Hilfe enthält eine CSV-Datei bis zu 5.000 Zeilen, und digitale Produkte lassen sich nicht exportieren.

Die Wix-Datei hat andere Spalten als Shopifys Vorlage. Aus der Shopify-Anleitung und der Shopify-Hilfe zum CSV-Import:

- **Handle** (Adressteil nach `/products/`): nur Buchstaben, Zahlen und Bindestriche.
- **Gewicht:** Wix liefert Kilogramm, Shopify erwartet Gramm.
- **Varianten:** Fehlt bei einer Variante eine Option, wird das Produkt nicht korrekt importiert.
- **Bilder:** Shopify liest sie über öffentlich erreichbare URLs, eine Zeile je Bild, bis zu 250 pro Produkt. Ob der Wix-Export Bild-Adressen enthält, sagt die Wix-Hilfe nicht. Prüfen Sie es mit einem Probe-Export.
- **Bestand:** Die Mengenspalte passt nur zu einem Lagerort. Für mehrere brauchen Sie die separate Bestands-CSV.
- **Veröffentlichung:** Shopify empfiehlt, beim Import „für alle Verkaufskanäle veröffentlichen“ auszuschalten.

Die App „Store Migration“ nimmt die Wix-Datei laut Shopify unverändert an. Preise nach Standort unterstützt sie nicht (es gilt der höchste Preis), und Produkte mit mehr als drei Optionen werden an diesen Optionen nicht übernommen.

Importieren Sie zuerst **drei bis fünf Testprodukte** und prüfen Sie Preis, Gewicht, Bestand, Beschreibung und Bilder. Sicherung, Überschreiben und Kodierung beschreibt [Shopify Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv).

## Schritt 3: Kunden, Bestellungen, Bewertungen

- **Kunden** exportieren Sie in Wix aus den Kontakten. Laut Shopify lässt sich die Datei nicht unverändert importieren, und eine Zuordnungshilfe gibt es nicht. Sie passen die Spalten selbst an Shopifys Kundenvorlage an, inklusive Länderkürzel (ISO-Code).
- **Bestellungen** kommen nur über Apps von Drittanbietern nach Shopify. Oft reicht ein Wix-Export als Archiv für Buchhaltung und Rückfragen.
- **Bewertungen** lassen sich nicht exportieren. Planen Sie früh eine Bewertungs-App und tragen Sie die wichtigsten Stimmen manuell ein.

Kundendaten dürfen Sie nur für den Zweck übernehmen, für den sie erhoben wurden, etwa bei Newsletter-Einwilligungen. Klären Sie das vorab mit Ihrer Datenschutz-Beratung.

## Schritt 4: Seiten und Blog

Wix bietet keinen Komplett-Export der Website, und die Shopify-Anleitung behandelt Seiten und Blogbeiträge nicht. Sie kopieren Texte, laden Bilder neu hoch und übernehmen Überschriften und Meta-Beschreibungen von Hand.

- **Texte der stärksten Seiten möglichst unverändert lassen.** Rankings hängen am Inhalt, nicht nur an der Adresse.
- **Rechtstexte** (Impressum, Datenschutz, AGB, Widerruf) anpassen. Zahlarten, Versand und eingesetzte Dienste ändern sich mit dem neuen System.

## Schritt 5: Alte Adressen und Weiterleitungen

Hier geht beim Wix-Umzug am häufigsten etwas verloren. Shopify baut Adressen nach festem Schema: `/products/…`, `/collections/…`, `/pages/…`, `/blogs/…`. Wix nutzt laut Wix-Hilfe standardmäßig andere Muster:

- Produkte: `/product-page/{produkt}`
- Blogbeiträge: `/post/{beitrag}`

Die Präfixe lassen sich in den SEO-Einstellungen von Wix ändern. Lesen Sie deshalb die echten Adressen aus Ihrer Sitemap. Jede alte Adresse, die Google kennt oder auf die verlinkt wird, braucht eine Weiterleitung auf die passende neue Seite.

Zeigt die Domain auf Shopify, antwortet Shopify auf diese Adressen. Die Weiterleitungen liegen deshalb in Shopify (*Inhalte → Menüs → URL-Weiterleitungen*, auch per CSV-Import) und sollten laut Shopify **vor** dem Domain-Wechsel stehen.

Zwei Grenzen:

- Adressen, die mit `/shop` beginnen, kann Shopify nicht weiterleiten. Wix nennt `/shop` in seiner Hilfe als Beispiel für eine Shopseite. Prüfen Sie, ob Ihre Produktübersicht darunter liegt.
- Adressen mit Parametern wie `?page=2` verhalten sich laut Shopify womöglich nicht wie erwartet.

Mehr dazu: [Shopify-Umzug und SEO: Weiterleitungen einrichten, Rankings schützen](/de/blog/shopify-migration-weiterleitungen).

## Schritt 6: Domain und E-Mail

Der Weg hängt davon ab, wo die Domain registriert ist.

- **Domain verbinden.** Die Domain bleibt beim Registrar, Sie ändern nur, wohin sie zeigt.
- **Domain von Wix zu Shopify übertragen.** Laut Wix-Hilfe muss die Domain entsperrt sein. Ein Transfer ist nicht möglich, wenn sie jünger als 60 Tage ist, die Registrantendaten gerade geändert wurden oder sie kürzlich übertragen wurde (ICANN-Regel). Wix schickt einen Autorisierungscode per E-Mail, der Transfer dauert in der Regel bis zu 7 Tage, und die Wix-Seite wird von der Domain getrennt. Shopify empfiehlt, die Domain vorher von der alten Plattform zu trennen, sonst drohen SSL-Zertifikatsfehler.
- **Domain bleibt bei Wix, DNS liegt woanders.** Laut Wix führt der Weg über eigene Nameserver.

**E-Mail:** Nach der Übertragung funktioniert die geschäftliche E-Mail laut Wix erst wieder, wenn Sie die MX-Einträge beim neuen Anbieter neu anlegen. Notieren Sie die Einträge vorher und testen Sie danach Senden und Empfangen.

Wechseln Sie Domain und System **nicht am selben Tag**. Google rät, Änderungen nach Möglichkeit nacheinander vorzunehmen.

## Schritt 7: Testen, dann umschalten

Vor dem Umschalten der Domain prüfen Sie:

- **Zahlungen, Versand, Steuern:** Testbestellungen mit erfolgreicher und fehlgeschlagener Zahlung, Erstattung, Stornierung und Versand, dazu die automatischen E-Mails.
- **Produkte und Seiten:** Stichprobe gegen die alte Seite (Preis, Variante, Bild, Beschreibung).
- **Weiterleitungen:** importiert und für die wichtigsten alten Adressen im Browser geprüft.
- **Passwortschutz:** zum Start ausschalten, sonst erreichen Suchmaschinen die Sitemap nicht.

Nach dem Start:

- Sitemap in der Search Console einreichen (`/sitemap.xml`, Shopify erzeugt sie automatisch).
- Die 20 bis 50 wichtigsten alten Adressen öffnen.
- In den ersten Wochen wöchentlich den Bericht „Seiten“ prüfen. Jede Adresse unter „Nicht gefunden (404)“ ist eine fehlende Weiterleitung.

Taucht der Shop nicht auf, hilft [Shopify-Shop wird bei Google nicht gefunden: 7 Ursachen](/de/blog/shopify-shop-bei-google-nicht-gefunden).

## Häufige Fragen

**Kann ich meinen ganzen Wix-Shop automatisch umziehen?** Nein. Produkte und Kunden kommen per CSV mit, Bestellungen nur über Apps, Bewertungen gar nicht. Design und Funktionen entstehen neu.

**Verliere ich meine Google-Rankings?** Nicht zwangsläufig. Laut Google kosten dauerhafte Weiterleitungen keinen PageRank. Verluste entstehen durch fehlende oder falsche Weiterleitungen, geänderte Inhalte und technische Fehler beim Start. Eine Garantie kann niemand geben.

**Kann ich die Domain behalten?** Ja. Shopify erlaubt, eine vorhandene Domain zu verbinden oder zu übertragen. Bei einer Übertragung beachten Sie die Sperrfrist von 60 Tagen und die E-Mail-Einträge.

**Wie lange dauert ein Umzug?** Das hängt von der Zahl der Produkte, Varianten, Seiten und Sonderfunktionen ab. Die Domain-Übertragung allein kann bis zu 7 Tage dauern.

**Soll ich den Shop gleichzeitig neu gestalten?** Besser nacheinander. Sonst lässt sich später schwer erkennen, was einen Rückgang verursacht hat.

## Umzug von Wix geplant?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich sichtbare Daten, etwa den Aufbau Ihrer Adressen und die Seiten im Google-Index. Was bei Wix machbar ist, klären wir im Erstgespräch.

Zum Weiterlesen:

- [Von WooCommerce zu Shopify](/de/services/woocommerce-to-shopify): Redirect-Map und Launch-Begleitung zum Festpreis nach dem Briefing
- [WooCommerce zu Shopify ohne Ranking-Verlust](/de/blog/woocommerce-to-shopify)
- [Von Shopware oder Magento zu Shopify](/de/blog/shopware-magento-zu-shopify)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
