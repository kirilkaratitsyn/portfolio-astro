---
publishedAt: 2026-10-15
title: Von WooCommerce zu Shopify umziehen, ohne Rankings zu verlieren
date: 15. Oktober 2026
readingTime: 6 Min
excerpt: Daten, Redirect-Map, Theme und Launch-Checkliste aus einem echten Umzug, damit alte Links und Google-Rankings erhalten bleiben.
image: /og/projects/jula-bloom.jpg
topic: migration
tags:
  - Shopify
  - WooCommerce
  - Migration
---

Ein Umzug von WooCommerce zu Shopify ist technisch kein Hexenwerk. Schiefgehen kann er an anderer Stelle: bei alten Links, die plötzlich ins Leere führen, bei Kundenkonten und bei einem Design, das im neuen Shop anders aussieht als gedacht. Diese Checkliste stammt aus einem echten Umzug, dem Shop von [Jula Bloom](/de/projects/jula-bloom) aus Seattle, der im September 2026 auf Shopify live ging.

## Wann sich der Umzug lohnt und wann nicht

Er lohnt sich, wenn Sie mehr Zeit mit Updates, Plugin-Konflikten und Hosting verbringen als mit Ihrem Sortiment, und wenn Sie Funktionen wollen, die in Shopify eingebaut sind: Checkout, Zahlungen, Märkte und Sprachen. Weniger lohnt er sich, wenn Ihr Shop auf sehr speziellen WordPress-Erweiterungen aufbaut, für die es in Shopify keinen Ersatz gibt. Das klären Sie am besten vor dem Umzug, Plugin für Plugin.

## Was umzieht und in welcher Reihenfolge

Shopify kann Produkte, Kunden, Bestellhistorie, Geschenkgutscheine, Blogartikel und Seiten übernehmen. Produkte und Kunden gehen per CSV direkt im Shopify-Admin; für die Bestellhistorie und die Inhalte braucht es eine Migrations-App oder die API. Die Reihenfolge ist wichtig: erst Produkte, dann Kunden, dann Bestellungen, damit jede Bestellung mit dem richtigen Produkt und Kunden verknüpft wird. Bei Jula Bloom haben wir Produkte und Kunden per CSV übertragen.

Zwei Dinge ziehen nicht einfach mit:

- **Passwörter.** Sie sind außerhalb von Shopify verschlüsselt und lassen sich nicht übertragen. Kundinnen und Kunden bekommen nach dem Import eine Einladung und legen ihr Konto neu an.
- **Plugin-Funktionen.** Wunschlisten, Bewertungen und Filter laufen in Shopify über das Theme oder über Apps. Bei Jula Bloom haben wir dabei aufgeräumt: eine Wunschlisten-App statt zwei.

## Die Redirect-Map: alte URLs sammeln, solange die alte Seite noch läuft

An diesem Schritt hängen die Rankings. WooCommerce und Shopify bauen URLs unterschiedlich auf: Aus `/product/rosen-strauss/` wird in Shopify `/products/rosen-strauss`, aus Kategorien werden `/collections/...`. Jede alte Adresse, die Google kennt und auf die andere Seiten verlinken, braucht eine Weiterleitung auf die passende neue Seite.

So gehe ich vor:

1. Alle alten URLs sammeln, **solange die alte Seite noch erreichbar ist**: aus der Sitemap, aus der Search Console (Seiten mit Klicks und Impressionen) und aus einem Crawl der Seite.
2. Jeder alten URL die neue Seite zuordnen, in einer Tabelle: Produkte, Kategorien, Blogartikel, Seiten.
3. Die Tabelle als CSV in Shopify importieren: *Inhalte → Menüs → URL-Weiterleitungen → Importieren*.
4. Nach dem Go-live jede wichtige alte URL einmal aufrufen und prüfen, ob sie richtig ankommt.

Bei Jula Bloom haben wir die Redirect-Map geschrieben, solange die WooCommerce-Seite noch lief. Alte Links führen heute auf ihre neuen Seiten. Wie man Weiterleitungen aus den Daten der Search Console ableitet, zeigt auch der Umbau von [Pedchem](/de/projects/pedchem). Die Weiterleitungen im Detail, mit den Grenzen von Shopify und der Kontrolle nach dem Start, beschreibt [Shopify-Umzug und SEO: Weiterleitungen einrichten, Rankings schützen](/de/blog/shopify-migration-weiterleitungen).

## Theme: neu aufbauen statt 1:1 kopieren

Ein Umzug ist die Gelegenheit, das Design aufzuräumen. Bei Jula Bloom haben wir ein Typografie-System mit acht Rollen aufgebaut (Überschriften, Fließtext, Lead, Tagline und mehr) und Seite für Seite angewendet, dazu Button-Farben, die sich nach dem Hintergrund richten. So bleiben neue Seiten markentreu, ohne dass jemand nacharbeiten muss.

Bauen Sie das neue Theme im Hintergrund auf, als unveröffentlichtes Theme. Der alte Shop verkauft weiter, bis alles geprüft ist.

## Launch-Checkliste

- Domain auf Shopify umstellen und SSL prüfen.
- Weiterleitungen stichprobenartig testen, mindestens die 20 wichtigsten alten URLs.
- Neue Sitemap in der Google Search Console einreichen.
- Geschenkgutscheine übernommen und einlösbar?
- E-Mail-Anmeldung und Pop-ups mit sinnvollen Verzögerungen.
- Rechtstexte, Impressum, Kontaktseite.
- Meta-Descriptions für die wichtigsten Seiten.
- Kundinnen und Kunden zum neuen Konto einladen.

## Nach dem Go-live: 404-Fehler beobachten

In den ersten Wochen zeigt die Search Console Seiten, die Google nicht mehr findet („Nicht gefunden (404)“). Jede davon ist eine fehlende Weiterleitung: nachtragen, und der Fehler verschwindet beim nächsten Crawl. Planen Sie dafür in den ersten vier Wochen jede Woche ein paar Minuten ein.

## Häufige Fragen

**Wie lange dauert der Umzug?** Je nach Umfang 2 bis 4 Wochen.

**Verliere ich meine Rankings?** Nicht, wenn jede alte URL sauber weiterleitet. Ein paar Wochen Schwankung sind normal, während Google die neuen Seiten verarbeitet.

**Können Kunden ihr altes Passwort behalten?** Nein, sie legen ihr Konto nach einer Einladung neu an.

**Bleibt mein Design?** Ja, auf einem Shopify-Theme nachgebaut und dabei aufgeräumt.

## Umzug geplant?

Ich übernehme den [Umzug von WooCommerce zu Shopify](/de/services/woocommerce-to-shopify) mit Redirect-Map und Launch-Begleitung, zum Festpreis nach dem Briefing. Fragen Sie den kostenlosen Shop-Check an oder buchen Sie ein Erstgespräch.

Noch unsicher, ob sich ein Umzug für Sie lohnt oder saubere Pflege reicht? Dabei hilft [WooCommerce Sicherheit und Plugin-Updates: pflegen oder wechseln?](/de/blog/woocommerce-sicherheit-plugin-updates).

Kommen Sie nicht von WooCommerce, sondern von Wix? Dazu gibt es [Von Wix zu Shopify wechseln: Ablauf, Stolperstellen und was nicht mitkommt](/de/blog/wix-zu-shopify-umzug). Kommen Sie von Shopware oder Magento? Dazu gibt es [Von Shopware oder Magento zu Shopify: Was Sie vor dem Umzug klären sollten](/de/blog/shopware-magento-zu-shopify).

Wollen Sie wissen, welche Zahlungsarten Shopify in Deutschland mitbringt? Dazu gibt es [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland).

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
