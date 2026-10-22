---
publishedAt: 2026-10-22
title: "Shopify-Umzug und SEO: Weiterleitungen einrichten, Rankings schützen"
date: 22. Oktober 2026
readingTime: 8 Min
excerpt: Welche alten Adressen Sie vor dem Umzug sammeln, wie Sie sie in Shopify weiterleiten, wo Shopify Grenzen setzt und was nach dem Start zu prüfen ist. Auch für den Fall, dass der Umzug schon ohne Weiterleitungen passiert ist.
image: /og/projects/jula-bloom.jpg
tags:
  - Shopify
  - SEO
  - Migration
---

Wer seinen Shop zu Shopify umzieht, ändert fast immer die Adressen seiner Seiten. Für Google und für alle, die auf Ihre Seiten verlinken, ist das wie ein Umzug ohne Nachsendeauftrag: Wer die alte Adresse aufruft, steht vor einer leeren Tür. Die gute Nachricht: Laut Google kosten dauerhafte Weiterleitungen keinen PageRank. Der Verlust entsteht nicht durch den Umzug, sondern durch Weiterleitungen, die fehlen oder an die falsche Stelle führen. Dieser Artikel zeigt, wie Sie sie planen, in Shopify einrichten und danach kontrollieren, egal von welchem System Sie kommen. Die Checkliste zu einem konkreten Umzug steht in [Von WooCommerce zu Shopify umziehen, ohne Rankings zu verlieren](/de/blog/woocommerce-to-shopify). Hier geht es um die Weiterleitungen im Detail.

## Warum sich die Adressen überhaupt ändern

Shopify gibt die Struktur vor: Produkte liegen unter `/products/…`, Kollektionen unter `/collections/…`, Seiten unter `/pages/…` und Blogartikel unter `/blogs/…`. Andere Systeme bauen ihre Adressen anders auf, etwa mit `/product/…` bei WooCommerce, mit Endungen wie `.html` oder mit Parametern wie `?id=123`. Selbst wenn Ihre Domain gleich bleibt, ändern sich also die Pfade dahinter. Jede alte Adresse, die Google kennt oder auf die andere Seiten verlinken, braucht dann eine Weiterleitung auf die passende neue Seite.

## Schritt 1: Alle alten Adressen sammeln, solange die alte Seite läuft

Die Liste ist die Grundlage für alles Weitere. Gute Quellen:

- **Die Sitemap der alten Seite.** Sie enthält die Adressen, die Ihre alte Seite selbst für wichtig hielt.
- **Die Search Console, Bericht „Leistung“.** Exportieren Sie die Seiten mit Klicks und Impressionen. Das sind die Adressen, an denen Ihr Verkehr hängt.
- **Die Search Console, Bericht „Links“.** Er zeigt, welche Ihrer Seiten von anderen Websites verlinkt werden. Google nennt eine Liste der verlinkenden Seiten ausdrücklich als Teil der Vorbereitung.
- **Ein Crawl der Seite.** Ein Crawler findet Adressen, die in keiner Sitemap stehen.
- **Die Einstiegsseiten aus Ihrer Analyse.** Sie zeigen, wo Besucher tatsächlich landen.

Ist die alte Seite schon abgeschaltet, helfen die Daten der Search Console, ein Backup oder das Internet Archive. Lückenlos wird die Liste dann selten.

## Schritt 2: Jede alte Adresse einer neuen Seite zuordnen

Aus der Liste wird eine Tabelle mit zwei Spalten: alte Adresse, neue Adresse. Ein Beispiel für den Aufbau:

- `/product/rosen-strauss/` → `/products/rosen-strauss` (Produkt, eins zu eins)
- `/product-category/straeusse/` → `/collections/straeusse` (aus der Kategorie wird eine Kollektion)
- `/blog/pflege-tipps/` → `/blogs/news/pflege-tipps` (Blogartikel)
- `/ueber-uns/` → `/pages/ueber-uns` (Seite)

Dabei gelten ein paar Regeln:

1. **Jede Adresse auf die inhaltlich passende Seite.** Google rät ausdrücklich davon ab, viele alte Adressen auf eine einzige, unpassende Zielseite zu leiten, etwa die Startseite. Das kann Besucher verwirren und als sogenannter Soft-404 behandelt werden.
2. **Entfällt ein Produkt, nehmen Sie die nächstpassende Seite.** Das ist ein ähnliches Produkt oder die passende Kollektion, nicht die Startseite.
3. **Wurden mehrere Seiten zusammengelegt, dürfen alle alten Adressen auf die eine neue Seite zeigen.** Google nennt das als Ausnahme von Regel 1.
4. **Keine Ketten.** Leiten Sie direkt auf das endgültige Ziel. Google empfiehlt, möglichst keine Ketten zu bauen, und nennt als Obergrenze ideal höchstens drei, aber weniger als fünf Weiterleitungen hintereinander. Hatte die alte Seite schon Weiterleitungen (etwa von `http` auf `https` oder von einer noch älteren Struktur), zeigen Sie die ältesten Adressen gleich auf das Ziel.

## Schritt 3: In Shopify einrichten

Einzelne Weiterleitungen legen Sie im Shopify-Admin unter *Content → Menus → URL redirects* an (in der deutschen Oberfläche sinngemäß „Inhalte → Menüs → URL-Weiterleitungen“): die alte Adresse unter „Redirect from“, die neue unter „Redirect to“. Innerhalb Ihrer Domain genügt ein relativer Pfad wie `/products/rosen-strauss`. Eine Weiterleitung wirkt laut Shopify sofort.

Für viele Adressen importieren Sie eine CSV-Datei über denselben Bereich. Die Vorlage von Shopify hat zwei Spalten, `Redirect from` und `Redirect to`, mit Zeilen wie `/example_product.php,/products/example-product`. Nach dem Import prüfen Sie eine Stichprobe, bevor der Shop auf die neue Domain oder das neue System umgestellt wird.

Die Obergrenze liegt bei 100.000 Weiterleitungen, im Plus-Tarif bei 20.000.000. Für sehr große Mengen verweist die Shopify-Hilfe auf Apps von Drittanbietern.

## Schritt 4: Wo Shopify Grenzen setzt

Die Shopify-Hilfe nennt Einschränkungen, die man vor dem Start kennen sollte, weil sie sonst erst im 404-Bericht auffallen:

- **Weiterleitungen funktionieren nur von „kaputten“ Adressen.** Lädt die alte Adresse in Shopify bereits eine gültige Seite, greift die Weiterleitung nicht. Prüfen Sie, ob eine alte Adresse zufällig mit einer neuen Seite übereinstimmt.
- **Manche Pfade lassen sich nicht umleiten.** Laut Shopify-Hilfe gilt das für Adressen, die mit `/apps`, `/application`, `/cart`, `/carts`, `/orders`, `/services` oder `/shop` beginnen. Auch die Pfade `/products`, `/collections` und `/collections/all` selbst sind fest vergeben. Für WooCommerce ist das relevant: Die klassische Shopseite unter `/shop/` fällt unter diese Einschränkung. Hier braucht es eine andere Lösung als eine URL-Weiterleitung, und wichtig ist, es vorher zu wissen.
- **Adressen mit Parametern.** Adressen mit Query-Strings wie `?id=123` können laut Shopify nicht wie erwartet funktionieren. Wenn Ihre alte Seite viele solcher Adressen hatte, testen Sie das früh.
- **Endung `.html`.** Eine Adresse auf `.html` lässt sich nicht auf dieselbe Adresse ohne `.html` weiterleiten, weil Shopify beide als dieselbe Adresse behandelt.
- **Märkte und Sprachordner.** Weiterleitungen gelten nicht automatisch für alle Unterordner Ihrer Märkte. Für `/en-ca/…` oder `/fr/…` brauchen Sie eigene Weiterleitungen. Das betrifft vor allem Shops mit mehreren Sprachen.
- **Zwischenspeicher.** Browser und Suchmaschinen speichern 301-Weiterleitungen zwischen. Löschen Sie eine Weiterleitung später wieder, kann sie bei Besuchern noch eine Weile weiterwirken. Probieren Sie deshalb nicht im laufenden Shop herum, sondern testen Sie die Zuordnung vorab.

## Schritt 5: Mehr als Weiterleitungen

Weiterleitungen sind der wichtigste Teil, aber nicht der einzige:

- **Titel und Meta-Beschreibungen mitnehmen.** Die wichtigsten Seiten sollten im neuen Shop dieselben Suchbegriffe tragen wie im alten. Rankings hängen am Inhalt, nicht nur an der Adresse.
- **Interne Links auf die neuen Adressen umstellen.** Menüs, Texte und E-Mail-Vorlagen sollten direkt auf die neuen Seiten zeigen, nicht über die Weiterleitung. Google empfiehlt, die eigenen Links auf die neuen Adressen zu aktualisieren.
- **Indexierung prüfen.** Passwortschutz aus, kein „noindex“ auf Seiten, die auffindbar sein sollen, `robots.txt` in Ordnung. Wie das geht, steht in [Shopify-Shop wird bei Google nicht gefunden](/de/blog/shopify-shop-bei-google-nicht-gefunden).
- **Neue Sitemap einreichen.** Shopify legt `/sitemap.xml` automatisch an. Reichen Sie sie in der Search Console ein.
- **Adressänderung nur bei neuer Domain.** Das Werkzeug „Adressänderung“ in der Search Console brauchen Sie laut Google nur, wenn die Domain oder Subdomain wechselt, nicht bei Änderungen der Pfade innerhalb derselben Domain.

Google rät außerdem, nur eine Sache auf einmal zu ändern: also nicht gleichzeitig Domain, System und Layout. Je mehr Sie auf einmal ändern, desto schwerer lässt sich später sagen, woran ein Einbruch lag. Für die meisten Shops heißt das: Domain behalten, und Adressen und Texte der stärksten Seiten möglichst stabil halten.

## Nach dem Start kontrollieren

- **Am Starttag:** Rufen Sie die 20 bis 50 wichtigsten alten Adressen auf. Jede sollte auf die richtige neue Seite führen, und die neue Seite sollte ganz normal laden. Im Terminal zeigt `curl -I https://alte-adresse.de/product/rosen-strauss/` den Statuscode (erwartet: 301) und das Ziel in der Zeile `location`. Für einzelne Adressen hilft auch die URL-Prüfung in der Search Console.
- **In den ersten Wochen:** Schauen Sie wöchentlich in den Bericht „Seiten“ der Search Console. Jede Adresse unter „Nicht gefunden (404)“ ist eine fehlende Weiterleitung: nachtragen. Der Status „Seite mit Weiterleitung“ dagegen ist kein Fehler, sondern genau das, was Sie wollen.
- **Schwankungen einplanen:** Google schreibt, dass bei mittelgroßen Websites einige Wochen oder länger vergehen können, bis die neuen Adressen statt der alten angezeigt werden. Das ist kein Zeichen, dass etwas schiefgeht.
- **Weiterleitungen stehen lassen:** Google empfiehlt, sie so lange wie möglich zu behalten, in der Regel mindestens ein Jahr, damit alle Signale übertragen werden.

## Der Umzug ist schon passiert, ohne Weiterleitungen?

Dann ist es noch nicht zu spät, aber die Lage ist unangenehmer, und Sie sollten sich keine Versprechen machen lassen. So gehen Sie vor:

1. **Alte Adressen rekonstruieren.** Aus der Search Console (Leistungsdaten und Links), aus einem Backup der alten Seite, aus dem Internet Archive und aus Ihrer Analyse.
2. **Zuordnung und Import nachholen.** Weiterleitungen helfen auch verspätet: Google muss die alten Adressen erneut aufrufen, bevor es die Weiterleitung sieht. Je länger die Lücke, desto mehr kann bereits aus dem Index gefallen sein.
3. **Indexierung prüfen.** Ein vergessener Passwortschutz oder ein „noindex“ aus der Testphase sieht aus wie ein Rankingverlust, ist aber ein anderes Problem.

Wie viel zurückkommt, lässt sich vorher nicht sagen, und niemand kann es garantieren.

## Häufige Fragen

**Verliere ich durch Weiterleitungen Linkkraft?** Laut Google verursachen 301- und andere dauerhafte Weiterleitungen keinen Verlust an PageRank.

**Wie lange muss ich Weiterleitungen behalten?** So lange wie möglich, in der Regel mindestens ein Jahr. Aus Sicht der Nutzer können Sie sie auch dauerhaft stehen lassen.

**Muss ich in der Search Console etwas umstellen?** Bleibt die Domain gleich, brauchen Sie keine Adressänderung, aber Sie sollten die neue Sitemap einreichen und die Berichte beobachten.

**Wie viele Weiterleitungen erlaubt Shopify?** Bis zu 100.000, im Plus-Tarif bis zu 20.000.000.

**Gilt das auch, wenn ich nicht von WooCommerce komme?** Das Vorgehen ist gleich: sammeln, zuordnen, weiterleiten, kontrollieren. Die alten Adressmuster unterscheiden sich je nach System, und Adressen mit Parametern sollten Sie früh testen.

## Umzug geplant oder schon passiert?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich sehe mir an, was von außen sichtbar ist, zum Beispiel wie alte Adressen antworten und welche Seiten im Google-Index fehlen. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Backend und ohne Sicherheitsscan. Kommen Sie von WooCommerce, übernehme ich den [Umzug zu Shopify](/de/services/woocommerce-to-shopify) mit Redirect-Map und Launch-Begleitung zum Festpreis nach dem Briefing. Bei anderen Systemen klären wir im Erstgespräch, was machbar ist. Welche Gründe es für einen Wechsel gibt, steht in [WooCommerce Sicherheit und Plugin-Updates: pflegen oder wechseln?](/de/blog/woocommerce-sicherheit-plugin-updates).

*Kiril Karatitsyn, Shopify-Entwickler in Deutschland*
