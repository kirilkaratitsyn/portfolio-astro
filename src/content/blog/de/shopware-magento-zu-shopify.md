---
publishedAt: 2026-10-22
title: "Von Shopware oder Magento zu Shopify: Was Sie vor dem Umzug klären sollten"
date: 22. Oktober 2026
readingTime: 7 Min
excerpt: "Von Shopware oder Magento zu Shopify: welche Daten mitkommen, was neu entsteht und in welcher Reihenfolge der Umzug am wenigsten riskant ist."
image: /og/projects/jula-bloom.jpg
topic: migration
tags:
  - Shopify
  - Shopware
  - Magento
  - Migration
---

Ein Shop in Shopware oder Magento lässt sich nicht als Ganzes nach Shopify verschieben. Übernommen werden Daten, vor allem Produkte, Kunden und Bestellungen. Design, Erweiterungen und besondere Funktionen entstehen in Shopify neu.

Ein Shopware- oder Magento-Shop gehört nicht zu meinen veröffentlichten Projekten. Mein dokumentierter Plattformwechsel ist [Jula Bloom](/de/projects/jula-bloom), von WooCommerce zu Shopify. Die Aussagen unten stützen sich auf die Hilfe- und Dokumentationsseiten der Anbieter, Stand Oktober 2026. Prüfen Sie die Details in Ihrem System, denn Versionen unterscheiden sich.

## Lohnt sich der Umzug überhaupt?

Ein Umzug kostet Zeit und birgt SEO-Risiken. Drei Fragen vorab:

- **Was fehlt Ihnen im heutigen System?** Nennen Sie drei Dinge, die Sie nicht oder nur umständlich lösen können. Bleibt die Liste leer, spricht wenig für einen Wechsel.
- **Wer betreibt und pflegt Ihren Shop heute?** Updates, Hosting und Erweiterungen gehören in die Rechnung.
- **Wie viel Umsatz hängt an Ihren Google-Platzierungen?** Je mehr, desto sorgfältiger die Planung.

Laut Shopware auf der Migrationsseite wurde Shopware 5 bis Ende Juli 2024 unterstützt, zuletzt nur noch mit Sicherheitsupdates. Der Wechsel auf Shopware 6 sei keine einfache Aktualisierung mit wenigen Klicks. Ein Neuaufbau steht also in beiden Fällen an. Entscheiden Sie zwischen Shopware 6 und einem anderen System nach Zahlen und Anforderungen, nicht aus Gewohnheit.

## Was lässt sich übernehmen, was nicht?

Laut Shopify-Hilfe zur Migration lassen sich diese Daten nach Shopify übernehmen:

- **Produkte**
- **Kunden**
- **Bisherige Bestellungen** (bereits ausgelieferte)
- **Geschenkgutscheine und Guthaben**
- **Blogbeiträge und Seiten**

Shopify empfiehlt die Reihenfolge Produkte, Kunden, Bestellungen. Bestellungen und Geschenkgutscheine brauchen unter Umständen eine App oder die API. Ab etwa 250 Produkten empfiehlt Shopify eine CSV-Datei oder eine App.

Design und Erweiterungen ziehen nicht mit um. In Shopify wählen Sie ein Theme und passen es an. Nötige Funktionen bilden Sie über Einstellungen oder Apps aus dem Shopify App Store nach.

## Schritt 1: Bestandsaufnahme, solange der alte Shop läuft

Legen Sie eine Liste an, bevor Sie etwas ändern:

- Alle Produkte, Kategorien, Seiten und Blogbeiträge mit ihrer **Adresse**. Die Sitemap ist die schnellste Quelle.
- Welche Seiten **Besucher von Google** bringen (Search Console, Bericht „Leistung“) und auf welche Seiten andere Websites verlinken.
- Welche **Produktattribute und Zusatzfelder** Sie nutzen. Laut Magento-Leitfaden von Shopify werden Magento-Attribute zu Shopify-Metafeldern, und die Zuordnung soll vor der Migration feststehen.
- Welche **Erweiterungen und Sonderfunktionen** Sie tatsächlich brauchen. Der Leitfaden rät, die Komplexität von Magento nicht nachzubauen, wenn sie keinen Umsatz bringt.
- Was nicht mitkommen soll. Veraltete Inhalte kosten laut Leitfaden nur Zeit.

Die Liste ist später die Grundlage für die Weiterleitungen.

## Schritt 2: Daten aus dem alten System exportieren

**Shopware 6.** Der Export liegt in den Einstellungen unter Import/Export. Laut offizieller Dokumentation arbeitet das Modul mit CSV-Dateien in UTF-8, Semikolon als Trennzeichen und Anführungszeichen als Texttrenner. Ein **Profil** legt fest, welche Spalte in welchem Datenfeld landet. Standardprofile gibt es unter anderem für Produkte, Kunden, Kategorien und Medien. Die Dokumentation nennt drei Stolperstellen:

- Preise brauchen einen Punkt als Dezimaltrennzeichen, ein Komma führt zu fehlerhaftem Import.
- Programme wie Excel erzeugen unter Umständen keine UTF-8-konforme Datei.
- **Bestellungen** lassen sich nur mit einem selbst angelegten Profil exportieren. Pflichtfelder sind id, salesChannelId, orderDateTime und stateId.

**Shopware 5.** Der Export läuft anders als in Shopware 6. Schauen Sie in die Dokumentation Ihrer Version oder prüfen Sie, ob eine Migrations-App aus dem Shopify App Store Ihr System unterstützt. Machen Sie zuerst einen Probeexport.

**Magento.** Der Weg hängt von Version und Setup ab. Ordnen Sie die Attribute vorher zu (siehe Schritt 1) und exportieren Sie nur, was Sie brauchen.

Die Spalten des alten Systems passen nicht zur Shopify-Vorlage. Sie müssen zugeordnet werden. Aus der Shopify-Hilfe zum CSV-Import:

- **Handle** (der Teil der Adresse nach `/products/`): nur Buchstaben, Zahlen und Bindestriche.
- **Bilder:** Shopify liest Bilder von öffentlich erreichbaren Adressen (URLs). Prüfen Sie, ob Ihr Export sie enthält.
- **Veröffentlichung:** Shopify rät, beim Import „auf allen Vertriebskanälen veröffentlichen“ auszuschalten, damit nichts Halbfertiges sichtbar wird.

Importieren Sie zuerst **drei bis fünf Testprodukte** und prüfen Sie Preis, Gewicht, Bestand, Beschreibung und Bilder. Sicherung, Überschreiben und Kodierung beschreibt [Shopify Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv).

## Schritt 3: Kunden und Bestellungen

- **Kundenkonten:** Laut Magento-Leitfaden von Shopify lassen sich Passwörter nicht in einem nutzbaren Format übernehmen. Planen Sie Aktivierungs- oder Passwort-Zurücksetzen-Mails nach dem Start ein, auch bei Shopware, und kündigen Sie das an.
- **Bestellungen:** Laut Shopify kommen nur bereits ausgelieferte Bestellungen mit, und dafür kann eine App oder die API nötig sein. Oft reicht ein separat archivierter Export für Buchhaltung und Rückfragen.

Kundendaten dürfen Sie nur zu dem Zweck weiterverwenden, zu dem sie erhoben wurden, zum Beispiel bei Newsletter-Einwilligungen. Klären Sie das mit Ihrer Datenschutzberatung, bevor Sie Adressen in ein neues System laden. Das ist keine Rechtsberatung.

## Schritt 4: Seiten, Inhaltsblöcke, Blog

Seiten und Blogbeiträge zählt Shopify zu den übernehmbaren Daten. Inhaltsblöcke und Widgets haben kein direktes Gegenstück. Laut Magento-Leitfaden sollten sie nativ in Shopify neu gebaut werden.

- **Lassen Sie die Texte Ihrer stärksten Seiten möglichst unverändert.** Rankings hängen am Inhalt, nicht nur an der Adresse.
- **Prüfen Sie die Rechtstexte** (Impressum, Datenschutz, AGB, Widerrufsbelehrung). Angaben zu Zahlarten, Versand und eingesetzten Diensten ändern sich mit dem neuen System.

## Schritt 5: Alte Adressen und Weiterleitungen

Hier verliert ein Umzug am häufigsten. Laut Magento-Leitfaden von Shopify braucht jede indexierte Adresse, die sich ändert, eine 301-Weiterleitung auf das passende Gegenstück in Shopify. Eine Weiterleitung auf eine 404-Seite sei schlimmer als gar keine. Die Weiterleitungen sollten bereitstehen, bevor die Domain auf Shopify zeigt.

Laut Shopify-Hilfe lassen sie sich vorab einrichten, auch per CSV-Import (*Inhalte → Menüs → URL-Weiterleitungen*). Lesen Sie die echten Adressen aus der Sitemap und der Search Console, statt Adressmuster zu vermuten. Zuordnung und Grenzen beschreibt [Shopify-Umzug und SEO: Weiterleitungen einrichten](/de/blog/shopify-migration-weiterleitungen).

## Schritt 6: Testen, dann umschalten

Vor dem Umstellen der Domain sollte der Shopify-Shop komplett sein:

- **Zahlung, Versand, Steuern:** Testbestellungen mit erfolgreicher und fehlgeschlagener Zahlung, Erstattung, Stornierung und Versand. Prüfen Sie auch die automatischen E-Mails.
- **Produkte und Seiten:** Stichproben gegen den alten Shop (Preis, Variante, Bild, Beschreibung).
- **Weiterleitungen:** Importiert, und die wichtigsten alten Adressen im Browser geprüft.
- **Passwortschutz:** Im privaten Modus können Suchmaschinen nicht auf den Shop zugreifen. Schalten Sie ihn zum Start ab.

Der Magento-Leitfaden rät, die TTL des DNS-Eintrags 24 bis 48 Stunden vor dem Umschalten zu senken, und nennt die ersten 14 Tage nach dem Start als kritisch. Reichen Sie nach dem Start die neue Sitemap (`/sitemap.xml`) in der Search Console ein und schauen Sie in den ersten Wochen regelmäßig in den Bericht „Seiten“. Jede Adresse unter „Nicht gefunden (404)“ ist eine fehlende Weiterleitung. Taucht der Shop nicht bei Google auf, hilft [Shopify-Shop wird bei Google nicht gefunden](/de/blog/shopify-shop-bei-google-nicht-gefunden).

## Häufige Fragen

**Kann ich meinen Shopware- oder Magento-Shop automatisch umziehen?** Nein, nicht als Ganzes. Daten lassen sich übernehmen, Design und Erweiterungen entstehen in Shopify neu.

**Kommen die Passwörter meiner Kunden mit?** Bei Magento laut Shopify-Leitfaden nicht in nutzbarer Form. Planen Sie bei beiden Systemen eine Aktivierung oder ein Zurücksetzen nach dem Start ein.

**Verliere ich meine Google-Platzierungen?** Nicht zwingend. Laut Google kosten dauerhafte Weiterleitungen keinen PageRank. Verluste entstehen durch fehlende oder falsche Weiterleitungen, veränderte Inhalte und technische Fehler beim Start. Garantieren kann das niemand.

**Soll ich bei Shopware 5 lieber auf Shopware 6 wechseln?** Das hängt von Ihren Anforderungen ab. Auch dieser Wechsel ist laut Shopware keine einfache Aktualisierung.

**Wie lange dauert ein Umzug?** Das hängt von Produkten, Varianten, Seiten, Sonderfunktionen und der Datenqualität ab.

**Soll ich gleichzeitig das Design ändern?** Besser nacheinander. Sonst lässt sich später schwer sagen, was einen Rückgang verursacht hat.

## Umzug von Shopware oder Magento geplant?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Was bei Shopware und Magento machbar ist, klären wir im Erstgespräch.

Für Umzüge zu Shopify gibt es die Seite [WooCommerce zu Shopify](/de/services/woocommerce-to-shopify) mit Weiterleitungsplan und Launch-Begleitung zum Festpreis nach dem Briefing. Mein Vorgehen zeigt [Von WooCommerce zu Shopify umziehen](/de/blog/woocommerce-to-shopify). Von Wix kommend: [Von Wix zu Shopify wechseln](/de/blog/wix-zu-shopify-umzug).

**Weiterlesen:** [WooCommerce Sicherheit und Plugin-Updates](/de/blog/woocommerce-sicherheit-plugin-updates) · [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
