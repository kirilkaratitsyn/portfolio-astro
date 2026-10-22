---
publishedAt: 2026-10-22
title: "Von Shopware oder Magento zu Shopify: Was Sie vor dem Umzug klären sollten"
date: 22. Oktober 2026
readingTime: 8 Min
excerpt: Welche Daten sich aus Shopware oder Magento nach Shopify übernehmen lassen, was neu aufgebaut wird, wie Sie mit Kundenkonten und alten Adressen umgehen und in welcher Reihenfolge der Umzug am wenigsten riskant ist.
image: /og/projects/jula-bloom.jpg
topic: migration
tags:
  - Shopify
  - Shopware
  - Magento
  - Migration
---

Ein Shop in Shopware oder Magento lässt sich nicht als Ganzes nach Shopify verschieben. Übernommen werden Daten, vor allem Produkte, Kunden und Bestellungen. Design, Erweiterungen und besondere Funktionen entstehen in Shopify neu. Dieser Artikel zeigt, was sich übernehmen lässt, wo ein solcher Umzug erfahrungsgemäß hakt und in welcher Reihenfolge Sie vorgehen sollten.

Vorab eine Einordnung: Ein Shopware- oder Magento-Shop gehört nicht zu den Projekten, die ich veröffentlicht habe. Mein dokumentierter Plattformwechsel ist [Jula Bloom](/de/projects/jula-bloom), ein Umzug von WooCommerce zu Shopify. Die Aussagen zu Shopware, Magento und Shopify unten stützen sich auf die Hilfe- und Dokumentationsseiten der Anbieter, Stand Oktober 2026. Prüfen Sie die Details in Ihrem eigenen System, denn Versionen und Oberflächen unterscheiden sich.

## Lohnt sich der Umzug überhaupt?

Ein Umzug kostet Zeit und birgt SEO-Risiken. Diese Fragen helfen bei der Entscheidung:

- **Was fehlt Ihnen im heutigen System?** Nennen Sie drei Dinge, die Sie nicht oder nur umständlich lösen können. Bleibt die Liste leer, spricht wenig für einen Wechsel.
- **Wer betreibt und pflegt Ihren Shop heute?** Wenn Updates, Hosting und Erweiterungen bei Ihnen oder einer Agentur liegen, gehört das in die Rechnung.
- **Wie viel Umsatz hängt an Ihren Google-Platzierungen?** Je mehr, desto sorgfältiger muss der Umzug geplant werden.

Bei Shopware 5 kommt ein weiterer Punkt dazu. Laut Shopware auf der Migrationsseite wurde Shopware 5 bis Ende Juli 2024 unterstützt, in der letzten Phase nur noch mit Sicherheitsupdates. Derselbe Anbieter schreibt, der Wechsel von Shopware 5 auf Shopware 6 sei keine einfache Aktualisierung mit wenigen Klicks. Ein Neuaufbau steht also in beiden Fällen an, und die Frage lautet: Shopware 6 oder ein anderes System. Das ist eine echte Entscheidung, die Sie mit Zahlen und Anforderungen treffen sollten, nicht aus Gewohnheit.

## Was lässt sich übernehmen, was nicht?

Laut Shopify-Hilfe zur Migration lassen sich diese Daten nach Shopify übernehmen:

- **Produkte**
- **Kunden**
- **Bisherige Bestellungen** (bereits ausgelieferte)
- **Geschenkgutscheine und Guthaben**
- **Blogbeiträge und Seiten**

Die empfohlene Reihenfolge laut Shopify: zuerst Produkte, dann Kunden, dann Bestellungen. Bestellungen und Geschenkgutscheine brauchen unter Umständen eine App oder die API. Bei einem größeren Katalog nennt Shopify als Richtwert, dass sich ab etwa 250 Produkten eine CSV-Datei oder eine App empfiehlt.

Nicht mit umziehen: das Design (Sie wählen in Shopify ein Theme und passen es an) und die Erweiterungen aus dem alten System. Die Funktionen, die Sie davon wirklich brauchen, bilden Sie in Shopify über Einstellungen oder Apps aus dem Shopify App Store nach.

## Schritt 1: Bestandsaufnahme, solange der alte Shop läuft

Legen Sie eine Liste an, bevor Sie etwas ändern:

- Alle Produkte, Kategorien, Seiten und Blogbeiträge mit ihrer **Adresse**. Am schnellsten geht das mit der Sitemap des alten Shops.
- Welche Seiten **Besucher von Google** bringen (Search Console, Bericht „Leistung“) und auf welche Seiten andere Websites verlinken.
- Welche **Produktattribute und Zusatzfelder** Sie nutzen. Im Magento-Leitfaden von Shopify heißt es, Magento-Attribute müssten zu Shopify-Metafeldern werden und die Zuordnung solle vor der Migration feststehen.
- Welche **Erweiterungen und Sonderfunktionen** Sie tatsächlich brauchen. Der Leitfaden rät, die Komplexität von Magento nicht nachzubauen, wenn sie keinen Umsatz bringt.
- Was nicht mitkommen soll. Veraltete Inhalte zu migrieren kostet nach dem Magento-Leitfaden nur Zeit und füllt den neuen Shop mit Ballast.

Bewahren Sie diese Liste auf. Sie ist später die Grundlage für die Weiterleitungen.

## Schritt 2: Daten aus dem alten System exportieren

**Shopware 6.** Der Export liegt im Bereich Import/Export der Einstellungen. Nach der offiziellen Dokumentation arbeitet das Modul mit CSV-Dateien in UTF-8, Semikolon als Trennzeichen und Anführungszeichen als Texttrenner. Ein **Profil** legt fest, welche Spalte in welchem Datenfeld landet. Standardprofile gibt es unter anderem für Produkte, Kunden, Kategorien und Medien. Drei Stolperstellen nennt die Dokumentation selbst:

- Preise brauchen einen Punkt als Dezimaltrennzeichen, ein Komma führt zu fehlerhaftem Import.
- Programme wie Excel erzeugen unter Umständen keine UTF-8-konforme Datei.
- **Bestellungen** lassen sich nur mit einem Profil exportieren, das Sie selbst anlegen. Pflichtfelder sind id, salesChannelId, orderDateTime und stateId.

**Shopware 5.** Der Export läuft anders als in Shopware 6. Schauen Sie in die Dokumentation Ihrer Version, oder fragen Sie, ob eine Migrations-App aus dem Shopify App Store Ihr System unterstützt. Machen Sie in jedem Fall zuerst einen Probeexport.

**Magento.** Hier hängt der Weg von Version und Setup ab. Wichtig ist, dass Sie die Attribute vorher zuordnen (siehe Schritt 1) und nur exportieren, was Sie wirklich brauchen.

Danach folgt die Arbeit, die meist unterschätzt wird: Die Spalten des alten Systems passen nicht zur Shopify-Vorlage, also müssen die Daten zugeordnet werden. Aus der Shopify-Hilfe zum CSV-Import:

- **Handle** (der Teil der Adresse nach `/products/`): nur Buchstaben, Zahlen und Bindestriche.
- **Bilder:** Eine CSV-Datei enthält nur Text. Shopify liest Bilder von öffentlich erreichbaren Adressen (URLs). Prüfen Sie, ob Ihr Export Bildadressen enthält.
- **Veröffentlichung:** Beim Import rät Shopify, „auf allen Vertriebskanälen veröffentlichen“ auszuschalten, damit nichts Halbfertiges sichtbar wird.

Importieren Sie zuerst **drei bis fünf Testprodukte** und prüfen Sie Preis, Gewicht, Bestand, Beschreibung und Bilder, bevor der Rest folgt.

## Schritt 3: Kunden und Bestellungen

- **Kundenkonten:** Der Magento-Leitfaden von Shopify sagt, Passwörter ließen sich nicht in einem nutzbaren Format übernehmen. Planen Sie deshalb Aktivierungs- oder Passwort-Zurücksetzen-Mails nach dem Start ein. Das Gleiche sollten Sie für Shopware einplanen: Rechnen Sie damit, dass Kunden ihr Konto neu aktivieren müssen, und kündigen Sie es an.
- **Bestellungen:** Laut Shopify kommen nur bereits ausgelieferte Bestellungen mit, und dafür kann eine App oder die API nötig sein. Fragen Sie sich, ob Sie die alte Bestellhistorie im neuen System wirklich brauchen. Oft reicht ein separat archivierter Export für Buchhaltung und Rückfragen.

Ein rechtlicher Hinweis: Kundendaten dürfen Sie nur zu dem Zweck weiterverwenden, zu dem sie erhoben wurden. Das betrifft zum Beispiel Newsletter-Einwilligungen. Klären Sie das mit Ihrer Datenschutzberatung, bevor Sie Adressen in ein neues System laden. Das ist keine Rechtsberatung.

## Schritt 4: Seiten, Inhaltsblöcke, Blog

Seiten und Blogbeiträge zählt Shopify zu den übernehmbaren Daten. Inhaltsblöcke und Widgets aus dem alten System haben dagegen kein direktes Gegenstück. Der Magento-Leitfaden sagt, CMS-Blöcke und Widgets sollten nativ in Shopify neu gebaut werden.

Zwei Dinge sparen später Ärger:

- **Lassen Sie die Texte Ihrer stärksten Seiten möglichst unverändert.** Rankings hängen am Inhalt, nicht nur an der Adresse.
- **Prüfen Sie die Rechtstexte** (Impressum, Datenschutz, AGB, Widerrufsbelehrung), weil sich Angaben zu Zahlarten, Versand und eingesetzten Diensten mit dem neuen System ändern.

## Schritt 5: Alte Adressen und Weiterleitungen

Hier verliert ein Umzug am häufigsten etwas. Der Magento-Leitfaden von Shopify sagt es deutlich: Jede indexierte Adresse, die sich ändert, braucht eine 301-Weiterleitung auf das passende Gegenstück in Shopify. Eine Weiterleitung auf eine 404-Seite sei schlimmer als gar keine. Die Weiterleitungen sollten bereitstehen, bevor die Domain auf Shopify zeigt.

Die Shopify-Hilfe stützt das: Weiterleitungen lassen sich vorab einrichten, auch per CSV-Import (*Inhalte → Menüs → URL-Weiterleitungen*), und sie sollten für alle wichtigen Seiten stehen. Verlassen Sie sich nicht auf vermutete Adressmuster Ihres alten Systems, sondern lesen Sie die echten Adressen aus der Sitemap und der Search Console. Wie die Zuordnung gebaut wird und welche Grenzen Shopify setzt, steht ausführlich in [Shopify-Umzug und SEO: Weiterleitungen einrichten, Rankings schützen](/de/blog/shopify-migration-weiterleitungen).

## Schritt 6: Testen, dann umschalten

Bevor die Domain umgestellt wird, sollte der Shopify-Shop komplett sein:

- **Zahlung, Versand, Steuern:** Testbestellungen mit erfolgreicher und fehlgeschlagener Zahlung, Erstattung, Stornierung und Versand. Prüfen Sie die automatischen E-Mails.
- **Produkte und Seiten:** Stichproben gegen den alten Shop (Preis, Variante, Bild, Beschreibung).
- **Weiterleitungen:** Importiert, und eine Auswahl der wichtigsten alten Adressen im Browser geprüft.
- **Passwortschutz:** Solange der Shop im privaten Modus läuft, können Suchmaschinen nicht darauf zugreifen. Schalten Sie ihn zum Start ab.

Der Magento-Leitfaden rät außerdem, die TTL des DNS-Eintrags 24 bis 48 Stunden vor dem Umschalten zu senken, und nennt die ersten 14 Tage nach dem Start als kritisch. Reichen Sie nach dem Start die neue Sitemap (`/sitemap.xml`) in der Search Console ein, öffnen Sie die wichtigsten alten Adressen und schauen Sie in den ersten Wochen regelmäßig in den Bericht „Seiten“. Jede Adresse unter „Nicht gefunden (404)“ ist eine fehlende Weiterleitung. Taucht der Shop nach dem Start nicht bei Google auf, hilft [Shopify-Shop wird bei Google nicht gefunden: 7 Ursachen und was Sie prüfen können](/de/blog/shopify-shop-bei-google-nicht-gefunden).

## Häufige Fragen

**Kann ich meinen Shopware- oder Magento-Shop automatisch umziehen?** Nein, nicht als Ganzes. Produkte, Kunden und ausgelieferte Bestellungen lassen sich übernehmen, Design und Erweiterungen werden in Shopify neu aufgebaut.

**Kommen die Passwörter meiner Kunden mit?** Für Magento sagt der Leitfaden von Shopify: nicht in nutzbarer Form. Planen Sie bei beiden Systemen eine Aktivierung oder ein Zurücksetzen nach dem Start ein.

**Verliere ich meine Google-Platzierungen?** Nicht zwingend. Nach Angaben von Google kosten dauerhafte Weiterleitungen keinen PageRank. Verluste entstehen durch fehlende oder falsche Weiterleitungen, veränderte Inhalte und technische Fehler beim Start. Garantieren kann niemand, dass alles unverändert bleibt.

**Soll ich bei Shopware 5 lieber auf Shopware 6 wechseln?** Das hängt von Ihren Anforderungen ab. Shopware selbst beschreibt den Wechsel als keine einfache Aktualisierung. Wägen Sie also Aufwand und Nutzen beider Wege gegeneinander ab.

**Wie lange dauert ein Umzug?** Eine pauschale Dauer lässt sich nicht nennen. Sie hängt von Produkten, Varianten, Seiten, Sonderfunktionen und der Datenqualität ab.

**Soll ich gleichzeitig das Design ändern?** Besser nacheinander. Je mehr Sie auf einmal ändern, desto schwerer lässt sich später sagen, was einen Rückgang verursacht hat.

## Umzug von Shopware oder Magento geplant?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa wie Ihre Adressen aufgebaut sind und welche Seiten im Google-Index stehen. Dabei arbeite ich nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Für Umzüge zu Shopify gibt es die Seite [WooCommerce zu Shopify](/de/services/woocommerce-to-shopify) mit Weiterleitungsplan und Launch-Begleitung zum Festpreis nach dem Briefing. Für Shopware und Magento klären wir im Erstgespräch, was machbar ist und was der Umzug in Ihrem Fall umfasst. Wie ich einen Plattformwechsel angehe, zeigt auch [Von WooCommerce zu Shopify umziehen, ohne Rankings zu verlieren](/de/blog/woocommerce-to-shopify). Kommen Sie von Wix? Dann lesen Sie [Von Wix zu Shopify wechseln](/de/blog/wix-zu-shopify-umzug).

**Weiterlesen:** [WooCommerce Sicherheit und Plugin-Updates: pflegen oder wechseln](/de/blog/woocommerce-sicherheit-plugin-updates)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
