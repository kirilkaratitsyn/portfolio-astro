---
publishedAt: 2026-10-22
title: "Von Wix zu Shopify wechseln: Ablauf, Stolperstellen und was nicht mitkommt"
date: 22. Oktober 2026
readingTime: 9 Min
excerpt: Was sich aus einem Wix-Shop nach Shopify übernehmen lässt, was Sie neu anlegen müssen, wie Domain, E-Mail und alte Adressen zu behandeln sind und in welcher Reihenfolge der Umzug am wenigsten riskant ist.
image: /og/projects/lumppings.jpg
topic: migration
tags:
  - Shopify
  - Wix
  - Migration
---

Ein Wix-Shop lässt sich nicht als Ganzes nach Shopify verschieben. Wix gibt an, dass die Website auf den Servern von Wix gehostet und betrieben werden muss; es gibt also keinen Export des fertigen Shops. Übernehmen lassen sich Daten: Produkte und Kunden über CSV-Dateien, Bestellungen über Zusatz-Apps. Alles andere, vom Design bis zu Seiten und Funktionen, entsteht in Shopify neu. Dieser Artikel führt durch den Ablauf, nennt die Stellen, an denen Umzüge typischerweise hängen bleiben, und zeigt, was Sie zu Domain, E-Mail und alten Adressen wissen sollten.

Eine Einordnung vorab: Ein Wix-Shop gehört bisher nicht zu den Projekten, die ich veröffentlicht habe. Mein dokumentierter Plattformwechsel ist [Jula Bloom](/de/projects/jula-bloom), ein Umzug von WooCommerce zu Shopify. Die Angaben zu Wix und Shopify unten stützen sich auf die Hilfe-Seiten beider Anbieter, Stand Oktober 2026. Prüfen Sie die Bildschirme in Ihrem Konto trotzdem gegen, denn beide Oberflächen ändern sich.

## Lohnt sich der Wechsel überhaupt?

Ein Umzug kostet Zeit und ist mit SEO-Risiko verbunden. Diese Fragen helfen bei der Entscheidung:

- **Was fehlt Ihnen heute konkret?** Nennen Sie die drei Dinge, die Sie in Wix nicht oder nur umständlich lösen. Wenn die Liste leer bleibt, spricht wenig für einen Umzug.
- **Was läuft in Wix zusätzlich zum Shop?** Buchungen, Mitgliederbereiche, Formulare oder Veranstaltungen haben in Shopify kein automatisches Gegenstück. Sie brauchen dort eine App oder eine andere Lösung.
- **Wie viel hängt an Ihren Google-Rankings?** Je mehr Umsatz über Suchtreffer kommt, desto sorgfältiger muss der Umzug geplant werden.

Wer die Antworten hat, plant den Umzug in der Reihenfolge unten.

## Was lässt sich übernehmen, was nicht?

Nach der Shopify-Anleitung „Migrate from Wix“:

- **Produkte**: Ja, über CSV-Export aus Wix, angepasst an Shopifys Vorlage, oder über die App „Store Migration“ (laut Shopify im frühen Zugang)
- **Kunden**: Ja, über CSV, aber die Wix-Datei muss vor dem Import bearbeitet werden
- **Bestellhistorie**: Kein eingebauter Import, nur über Apps von Drittanbietern
- **Bewertungen**: Nicht exportierbar. Neu eintragen oder über eine Bewertungs-App erfassen
- **Seiten und Blogbeiträge**: In der Shopify-Anleitung nicht behandelt, also im Zweifel manuell neu anlegen
- **Design, Funktionen, Apps**: Nicht übertragbar, entsteht in Shopify neu

## Schritt 1: Bestandsaufnahme, solange Wix läuft

Legen Sie eine Liste an, bevor Sie irgendetwas ändern:

- Alle Produkte, Kategorien, Seiten und Blogbeiträge mit ihrer **Adresse**. Die Sitemap Ihrer Wix-Seite ist dafür die schnellste Quelle.
- Welche Seiten **Besucher aus Google** bringen (Search Console, Bericht „Leistung“) und auf welche andere Seiten verlinken (Bericht „Links“).
- Welche Apps und Funktionen Sie in Wix nutzen und welche davon Sie in Shopify wirklich brauchen.
- Wo Ihre **Domain** registriert ist und welche E-Mail-Adressen daran hängen.

Machen Sie von dieser Liste eine Kopie. Sie ist später die Grundlage für die Weiterleitungen.

## Schritt 2: Produkte exportieren und anpassen

In Wix liegt der Export unter dem Reiter „Produkte“ (More Actions → Export). Zwei Grenzen nennt die Wix-Hilfe ausdrücklich: Eine CSV-Datei enthält bis zu 5.000 Zeilen, und digitale Produkte lassen sich nicht exportieren.

Danach folgt die Arbeit, die meist unterschätzt wird: Die Wix-Datei hat andere Spalten als Shopifys Vorlage, deshalb müssen die Daten zugeordnet werden. Aus der Shopify-Anleitung und der Shopify-Hilfe zum CSV-Import:

- **Handle** (der Teil der Adresse nach `/products/`): nur Buchstaben, Zahlen und Bindestriche.
- **Gewicht:** Wix liefert Kilogramm, Shopify erwartet Gramm.
- **Varianten:** Hat ein Produkt eine Variante mit fehlender Option, wird es nicht korrekt importiert und muss gegebenenfalls von Hand ergänzt werden.
- **Bilder:** Eine CSV-Datei enthält nur Text. Shopify liest Bilder über öffentlich erreichbare Adressen (URLs), und jedes Bild braucht eine eigene Zeile, bis zu 250 pro Produkt. Ob Ihr Wix-Export Bild-Adressen enthält, sagt die Wix-Hilfe nicht. Machen Sie einen Probe-Export und sehen Sie nach.
- **Bestand:** Die Spalte für die Menge in der Vorlage passt nur zu einem einzigen Lagerort. Mit mehreren Lagerorten brauchen Sie die separate Bestands-CSV.
- **Veröffentlichung:** Shopify empfiehlt beim Import, die Option „für alle Verkaufskanäle veröffentlichen“ auszuschalten, damit nichts halbfertig sichtbar wird.

Die App „Store Migration“ nimmt die Wix-Datei laut Shopify ohne Änderungen entgegen, hat aber Einschränkungen: Preise nach Standort werden nicht unterstützt (es gilt dann der höchste Preis), und Produkte mit mehr als drei Optionen werden an diesen Optionen nicht übernommen. Importieren Sie zuerst **drei bis fünf Testprodukte**, kontrollieren Sie Preis, Gewicht, Bestand, Beschreibung und Bilder, und erst dann den Rest. Die allgemeinen Regeln und Fehlerquellen des CSV-Imports (Sicherung, Überschreiben, Kodierung) beschreibt [Shopify Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv).

## Schritt 3: Kunden, Bestellungen, Bewertungen

- **Kunden** exportieren Sie in Wix aus den Kontakten. Die Datei lässt sich laut Shopify nicht unverändert importieren, und für den CSV-Import gibt es keine Zuordnungshilfe. Die Spalten müssen Sie selbst an Shopifys Kundenvorlage anpassen, inklusive des Länderkürzels (ISO-Code).
- **Bestellungen** gelangen nur über Apps von Drittanbietern nach Shopify. Fragen Sie sich, ob Sie die alte Bestellhistorie wirklich im neuen System brauchen. Oft reicht ein Export aus Wix als Archiv für Buchhaltung und Rückfragen, den Sie getrennt aufbewahren.
- **Bewertungen** lassen sich nicht exportieren. Wenn sie für Ihren Shop wichtig sind, planen Sie früh eine Bewertungs-App und die manuelle Übernahme der wichtigsten Stimmen ein.

Rechtlich gilt: Kundendaten dürfen Sie nur für den Zweck übernehmen, für den sie erhoben wurden. Das betrifft etwa Newsletter-Einwilligungen. Klären Sie das mit Ihrer Datenschutz-Beratung, bevor Sie Adressen in ein neues Mailing-Tool laden.

## Schritt 4: Seiten und Blog

Die Shopify-Anleitung behandelt Seiten und Blogbeiträge nicht, und Wix bietet keinen Komplett-Export der Website. Rechnen Sie daher mit manueller Arbeit: Texte kopieren, Bilder neu hochladen, Überschriften und Meta-Beschreibungen übernehmen.

Zwei Dinge sparen später Ärger:

- **Texte der stärksten Seiten möglichst unverändert lassen.** Rankings hängen am Inhalt, nicht nur an der Adresse.
- **Rechtstexte** (Impressum, Datenschutz, AGB, Widerruf) prüfen und anpassen, denn die Angaben zu Zahlarten, Versand und eingesetzten Diensten ändern sich mit dem neuen System.

## Schritt 5: Alte Adressen und Weiterleitungen

Hier geht beim Wix-Umzug am häufigsten etwas verloren. Shopify baut Adressen nach festem Schema: `/products/…`, `/collections/…`, `/pages/…`, `/blogs/…`. Wix verwendet nach der Wix-Hilfe standardmäßig andere Muster:

- Produkte: `/product-page/{produkt}`
- Blogbeiträge: `/post/{beitrag}`

Wix erlaubt, solche Präfixe in den SEO-Einstellungen zu ändern. Verlassen Sie sich deshalb nicht auf die Standardmuster, sondern lesen Sie die echten Adressen aus Ihrer Sitemap. Alle alten Adressen, die Google kennt oder auf die verlinkt wird, brauchen eine Weiterleitung auf die passende neue Seite. Sobald Ihre Domain auf Shopify zeigt, antwortet Shopify auf diese Adressen, nicht mehr Wix. Die Weiterleitungen müssen deshalb in Shopify liegen (*Inhalte → Menüs → URL-Weiterleitungen*, auch per CSV-Import) und sollten laut Shopify **vor** dem Domain-Wechsel stehen.

Zwei Grenzen, die für Wix-Shops relevant sein können:

- Shopify kann Adressen, die mit `/shop` beginnen, nicht weiterleiten. Wix nennt in seiner Hilfe `/shop` als Beispiel für eine Shopseite. Prüfen Sie, ob Ihre Produktübersicht darunter liegt.
- Adressen mit Parametern wie `?page=2` verhalten sich laut Shopify womöglich nicht wie erwartet.

Wie die Zuordnung aufgebaut wird, welche Regeln Google dazu nennt und wo Shopify noch Grenzen setzt, steht ausführlich in [Shopify-Umzug und SEO: Weiterleitungen einrichten, Rankings schützen](/de/blog/shopify-migration-weiterleitungen).

## Schritt 6: Domain und E-Mail

Bei der Domain gibt es mehrere Wege, und der richtige hängt davon ab, wo sie registriert ist.

- **Domain bleibt beim Registrar, Shopify wird verbunden.** Shopify bietet an, eine vorhandene Domain zu verbinden oder zu übertragen. Beim Verbinden ändern Sie, wohin die Domain zeigt, und der Registrar bleibt.
- **Domain wird von Wix zu Shopify übertragen.** Nach der Wix-Hilfe muss die Domain entsperrt sein. Ein Transfer ist nicht möglich, wenn die Domain jünger als 60 Tage ist, wenn die Registrantendaten gerade geändert wurden oder wenn sie erst kürzlich übertragen wurde (ICANN-Regel). Wix schickt einen Autorisierungscode per E-Mail, der Transfer dauert in der Regel bis zu 7 Tage, und die Wix-Seite wird dabei von der Domain getrennt. Shopify empfiehlt, die Domain vor der Übertragung von der alten Plattform zu trennen, sonst drohen SSL-Zertifikatsfehler.
- **Eigene DNS-Verwaltung bei Wix-Domain.** Soll die Domain bei Wix registriert bleiben und DNS an anderer Stelle verwaltet werden, führt laut Wix der Weg über eigene Nameserver.

Achten Sie zusätzlich auf **E-Mail**: Nach der Übertragung funktioniert die geschäftliche E-Mail der Domain laut Wix erst wieder, wenn Sie die MX-Einträge beim neuen Anbieter neu anlegen. Notieren Sie die aktuellen Einträge vorher, und testen Sie nach dem Wechsel Senden und Empfangen.

Faustregel: Domain und System **nicht am selben Tag** und nicht ohne Test wechseln. Google rät ohnehin, Änderungen nach Möglichkeit nacheinander vorzunehmen.

## Schritt 7: Testen, dann umschalten

Vor dem Umschalten der Domain sollte der Shopify-Shop vollständig sein:

- **Zahlungen, Versand, Steuern:** Testbestellungen mit erfolgreicher und fehlgeschlagener Zahlung, Erstattung, Stornierung und Versand. Prüfen Sie die automatischen E-Mails.
- **Produkte und Seiten:** Stichprobe gegen die alte Seite (Preis, Variante, Bild, Beschreibung).
- **Weiterleitungen:** Importiert, und eine Auswahl der wichtigsten alten Adressen im Browser geprüft.
- **Passwortschutz:** Läuft der Shop noch im privaten Modus, erreichen Suchmaschinen die Sitemap nicht. Schalten Sie ihn zum Start aus.

Nach dem Start reichen Sie die neue Sitemap (`/sitemap.xml`, Shopify erzeugt sie automatisch) in der Search Console ein, öffnen die 20 bis 50 wichtigsten alten Adressen und schauen in den ersten Wochen wöchentlich in den Bericht „Seiten“. Jede Adresse unter „Nicht gefunden (404)“ ist eine fehlende Weiterleitung. Die Details der Kontrolle stehen im Weiterleitungs-Artikel. Wenn der Shop nach dem Start nicht auftaucht, hilft [Shopify-Shop wird bei Google nicht gefunden: 7 Ursachen](/de/blog/shopify-shop-bei-google-nicht-gefunden).

## Häufige Fragen

**Kann ich meinen ganzen Wix-Shop automatisch umziehen?** Nein. Produkte und Kunden lassen sich per CSV übernehmen, Bestellungen nur über Apps, Bewertungen gar nicht. Design und Funktionen entstehen in Shopify neu.

**Verliere ich meine Google-Rankings?** Nicht zwangsläufig. Laut Google kosten dauerhafte Weiterleitungen keinen PageRank. Der Verlust entsteht durch fehlende oder falsche Weiterleitungen, durch geänderte Inhalte und durch technische Fehler beim Start. Eine Garantie, dass alles unverändert bleibt, kann niemand geben.

**Kann ich die Domain behalten?** Ja. Shopify erlaubt, eine vorhandene Domain zu verbinden oder zu übertragen. Bei einer Übertragung beachten Sie die Sperrfrist von 60 Tagen und die E-Mail-Einträge.

**Wie lange dauert ein Umzug?** Das hängt von Zahl der Produkte, Varianten, Seiten und Sonderfunktionen ab. Die Domain-Übertragung allein kann bis zu 7 Tage dauern.

**Soll ich den Shop gleichzeitig neu gestalten?** Besser nacheinander. Je mehr Sie auf einmal ändern, desto schwerer lässt sich später erkennen, was einen Rückgang verursacht hat.

## Umzug von Wix geplant?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich sehe mir an, was von außen sichtbar ist, zum Beispiel wie Ihre Adressen aufgebaut sind und welche Seiten im Google-Index stehen. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Für Umzüge zu Shopify gibt es die Seite [Von WooCommerce zu Shopify](/de/services/woocommerce-to-shopify) mit Redirect-Map und Launch-Begleitung zum Festpreis nach dem Briefing. Bei Wix klären wir im Erstgespräch, was machbar ist und was der Umzug im Einzelfall umfasst. Wie ich bei einem Plattformwechsel vorgehe, zeigt außerdem der Artikel [Von WooCommerce zu Shopify umziehen, ohne Rankings zu verlieren](/de/blog/woocommerce-to-shopify). Kommen Sie von Shopware oder Magento? Dazu gibt es [Von Shopware oder Magento zu Shopify: Was Sie vor dem Umzug klären sollten](/de/blog/shopware-magento-zu-shopify).

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
