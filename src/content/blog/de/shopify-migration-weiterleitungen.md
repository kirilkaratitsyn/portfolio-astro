---
publishedAt: 2026-10-22
title: "Shopify-Umzug und SEO: Weiterleitungen einrichten, Rankings schützen"
date: 22. Oktober 2026
readingTime: 7 Min
excerpt: "Shopify-Umzug: alte Adressen sammeln, Weiterleitungen einrichten, Grenzen von Shopify kennen und nach dem Start prüfen. Auch wenn der Umzug schon passiert ist."
image: /og/projects/lumppings.jpg
topic: migration
tags:
  - Shopify
  - SEO
  - Migration
---

Bei einem Shopify-Umzug ändern sich fast immer die Adressen Ihrer Seiten. Laut Google kosten dauerhafte Weiterleitungen keinen PageRank. Rankings gehen verloren, wenn Weiterleitungen fehlen oder an die falsche Stelle führen: Alte Links und Google-Treffer laufen dann ins Leere. Die Checkliste zu einem konkreten Umzug steht in [Von WooCommerce zu Shopify umziehen, ohne Rankings zu verlieren](/de/blog/woocommerce-to-shopify). Hier geht es um die Weiterleitungen im Detail.

## Warum sich die Adressen überhaupt ändern

Shopify gibt die Struktur vor: Produkte liegen unter `/products/…`, Kollektionen unter `/collections/…`, Seiten unter `/pages/…` und Blogartikel unter `/blogs/…`. Andere Systeme nutzen etwa `/product/…` (WooCommerce), Endungen wie `.html` oder Parameter wie `?id=123`. Auch bei gleicher Domain ändern sich also die Pfade. Jede alte Adresse, die Google kennt oder auf die andere Seiten verlinken, braucht eine Weiterleitung auf die passende neue Seite.

## Schritt 1: Alle alten Adressen sammeln, solange die alte Seite läuft

Gute Quellen für die Liste:

- **Die Sitemap der alten Seite.**
- **Die Search Console, Bericht „Leistung“.** Exportieren Sie die Seiten mit Klicks und Impressionen.
- **Die Search Console, Bericht „Links“.** Er zeigt, welche Seiten von anderen Websites verlinkt werden. Google nennt diese Liste ausdrücklich als Teil der Vorbereitung.
- **Ein Crawl der Seite.** Er findet Adressen, die in keiner Sitemap stehen.
- **Die Einstiegsseiten aus Ihrer Analyse.**

Ist die alte Seite schon abgeschaltet, helfen die Search Console, ein Backup oder das Internet Archive. Lückenlos wird die Liste dann selten.

## Schritt 2: Jede alte Adresse einer neuen Seite zuordnen

Aus der Liste wird eine Tabelle mit zwei Spalten:

- `/product/rosen-strauss/` → `/products/rosen-strauss` (Produkt, eins zu eins)
- `/product-category/straeusse/` → `/collections/straeusse` (aus der Kategorie wird eine Kollektion)
- `/blog/pflege-tipps/` → `/blogs/news/pflege-tipps` (Blogartikel)
- `/ueber-uns/` → `/pages/ueber-uns` (Seite)

Dabei gelten vier Regeln:

1. **Jede Adresse auf die inhaltlich passende Seite.** Google rät ausdrücklich davon ab, viele alte Adressen auf eine unpassende Zielseite zu leiten, etwa die Startseite. Das kann als sogenannter Soft-404 behandelt werden.
2. **Entfällt ein Produkt, nehmen Sie die nächstpassende Seite.** Also ein ähnliches Produkt oder die Kollektion, nicht die Startseite.
3. **Zusammengelegte Seiten dürfen auf die eine neue Seite zeigen.** Google nennt das als Ausnahme von Regel 1.
4. **Keine Ketten.** Leiten Sie direkt auf das endgültige Ziel. Google nennt als Obergrenze ideal höchstens drei, aber weniger als fünf Weiterleitungen hintereinander. Hatte die alte Seite schon Weiterleitungen, etwa von `http` auf `https`, zeigen auch die ältesten Adressen gleich auf das Ziel.

## Schritt 3: In Shopify einrichten

Einzelne Weiterleitungen legen Sie im Shopify-Admin unter *Content → Menus → URL redirects* an (auf Deutsch sinngemäß „Inhalte → Menüs → URL-Weiterleitungen“). Die alte Adresse kommt in „Redirect from“, die neue in „Redirect to“. Innerhalb Ihrer Domain genügt ein relativer Pfad wie `/products/rosen-strauss`. Eine Weiterleitung wirkt laut Shopify sofort.

Viele Adressen importieren Sie dort als CSV-Datei. Die Vorlage hat zwei Spalten, `Redirect from` und `Redirect to`, mit Zeilen wie `/example_product.php,/products/example-product`. Prüfen Sie nach dem Import eine Stichprobe, bevor der Shop umgestellt wird.

Die Obergrenze liegt bei 100.000 Weiterleitungen, im Plus-Tarif bei 20.000.000. Für sehr große Mengen verweist die Shopify-Hilfe auf Apps von Drittanbietern.

## Schritt 4: Wo Shopify Grenzen setzt

Die Shopify-Hilfe nennt diese Einschränkungen:

- **Weiterleitungen funktionieren nur von „kaputten“ Adressen.** Lädt die alte Adresse in Shopify bereits eine gültige Seite, greift die Weiterleitung nicht.
- **Manche Pfade lassen sich nicht umleiten.** Laut Shopify-Hilfe gilt das für Adressen, die mit `/apps`, `/application`, `/cart`, `/carts`, `/orders`, `/services` oder `/shop` beginnen. Auch `/products`, `/collections` und `/collections/all` selbst sind fest vergeben. Bei WooCommerce betrifft das die klassische Shopseite unter `/shop/`. Sie braucht eine andere Lösung als eine URL-Weiterleitung.
- **Adressen mit Parametern.** Query-Strings wie `?id=123` können laut Shopify nicht wie erwartet funktionieren. Testen Sie das früh.
- **Endung `.html`.** Eine Adresse auf `.html` lässt sich nicht auf dieselbe Adresse ohne `.html` weiterleiten. Shopify behandelt beide als dieselbe Adresse.
- **Märkte und Sprachordner.** Weiterleitungen gelten nicht automatisch für die Unterordner Ihrer Märkte. Für `/en-ca/…` oder `/fr/…` brauchen Sie eigene.
- **Zwischenspeicher.** Browser und Suchmaschinen speichern 301-Weiterleitungen zwischen. Eine gelöschte Weiterleitung kann noch eine Weile weiterwirken. Testen Sie die Zuordnung deshalb vorab, nicht im laufenden Shop.

## Schritt 5: Mehr als Weiterleitungen

- **Titel und Meta-Beschreibungen mitnehmen.** Die wichtigsten Seiten sollten dieselben Suchbegriffe tragen wie im alten Shop.
- **Interne Links umstellen.** Menüs, Texte und E-Mail-Vorlagen sollten direkt auf die neuen Seiten zeigen. Das empfiehlt auch Google.
- **Indexierung prüfen.** Passwortschutz aus, kein „noindex“ auf Seiten, die auffindbar sein sollen, `robots.txt` in Ordnung. Mehr dazu in [Shopify-Shop wird bei Google nicht gefunden](/de/blog/shopify-shop-bei-google-nicht-gefunden).
- **Neue Sitemap einreichen.** Shopify legt `/sitemap.xml` automatisch an. Sie gehört in die Search Console.
- **Adressänderung nur bei neuer Domain.** Das Werkzeug „Adressänderung“ in der Search Console brauchen Sie laut Google nur, wenn die Domain oder Subdomain wechselt, nicht bei neuen Pfaden.

Google rät außerdem, nur eine Sache auf einmal zu ändern, also nicht gleichzeitig Domain, System und Layout. Sonst lässt sich später schwer sagen, woran ein Einbruch lag. Behalten Sie die Domain und halten Sie die stärksten Seiten möglichst stabil.

## Nach dem Start kontrollieren

- **Am Starttag:** Rufen Sie die 20 bis 50 wichtigsten alten Adressen auf. Jede sollte auf die richtige neue Seite führen, und diese sollte normal laden. Im Terminal zeigt `curl -I https://alte-adresse.de/product/rosen-strauss/` den Statuscode (erwartet: 301) und das Ziel in der Zeile `location`. Für einzelne Adressen hilft auch die URL-Prüfung in der Search Console.
- **In den ersten Wochen:** Schauen Sie wöchentlich in den Bericht „Seiten“ der Search Console. Jede Adresse unter „Nicht gefunden (404)“ ist eine fehlende Weiterleitung. Der Status „Seite mit Weiterleitung“ ist kein Fehler.
- **Schwankungen einplanen:** Laut Google können bei mittelgroßen Websites einige Wochen oder länger vergehen, bis die neuen Adressen statt der alten angezeigt werden.
- **Weiterleitungen stehen lassen:** Google empfiehlt, sie so lange wie möglich zu behalten, in der Regel mindestens ein Jahr.

## Der Umzug ist schon passiert, ohne Weiterleitungen?

Dann ist es noch nicht zu spät:

1. **Alte Adressen rekonstruieren.** Quellen: Search Console (Leistungsdaten und Links), Backup, Internet Archive, Ihre Analyse.
2. **Zuordnung und Import nachholen.** Google muss die alten Adressen erneut aufrufen, bevor es die Weiterleitung sieht. Je länger die Lücke, desto mehr kann bereits aus dem Index gefallen sein.
3. **Indexierung prüfen.** Ein vergessener Passwortschutz oder ein „noindex“ aus der Testphase sieht aus wie ein Rankingverlust.

Wie viel zurückkommt, kann niemand vorher sagen oder garantieren.

## Häufige Fragen

**Verliere ich durch Weiterleitungen Linkkraft?** Laut Google verursachen 301- und andere dauerhafte Weiterleitungen keinen Verlust an PageRank.

**Wie lange muss ich Weiterleitungen behalten?** So lange wie möglich, in der Regel mindestens ein Jahr.

**Muss ich in der Search Console etwas umstellen?** Bleibt die Domain gleich, brauchen Sie keine Adressänderung. Reichen Sie nur die neue Sitemap ein.

**Wie viele Weiterleitungen erlaubt Shopify?** Bis zu 100.000, im Plus-Tarif bis zu 20.000.000.

**Gilt das auch, wenn ich nicht von WooCommerce komme?** Ja. Das Vorgehen ist gleich, nur die alten Adressmuster unterscheiden sich. Für Wix: [Von Wix zu Shopify wechseln](/de/blog/wix-zu-shopify-umzug). Für Shopware und Magento: [Von Shopware oder Magento zu Shopify: Was Sie vor dem Umzug klären sollten](/de/blog/shopware-magento-zu-shopify).

## Umzug geplant oder schon passiert?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe nur öffentlich sichtbare Daten, etwa wie alte Adressen antworten und welche Seiten im Google-Index fehlen. Kommen Sie von WooCommerce, übernehme ich den [Umzug zu Shopify](/de/services/woocommerce-to-shopify) mit Redirect-Map und Launch-Begleitung zum Festpreis nach dem Briefing. Bei anderen Systemen klären wir im Erstgespräch, was machbar ist. Gründe für einen Wechsel: [WooCommerce Sicherheit und Plugin-Updates: pflegen oder wechseln?](/de/blog/woocommerce-sicherheit-plugin-updates).

**Weiterlesen:** [Shopify Domain verbinden](/de/blog/shopify-domain-verbinden)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
