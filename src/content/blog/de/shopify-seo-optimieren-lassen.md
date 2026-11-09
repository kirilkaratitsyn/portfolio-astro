---
publishedAt: 2026-11-09
title: "Shopify SEO optimieren lassen: Was Shopify selbst erledigt und woran Sie ein seriöses Angebot erkennen"
seoTitle: "Shopify SEO optimieren lassen: Umfang und seriöses Angebot"
date: 9. November 2026
readingTime: 7 Min
excerpt: "Vieles an technischem SEO erledigt Shopify von selbst. Was wirklich bei Ihnen liegen bleibt, was Sie selbst schaffen, wofür ein Entwickler sinnvoll ist und welche Versprechen in einem SEO-Angebot nichts zu suchen haben."
image: /og/projects/jula-bloom.jpg
topic: speed
tags:
  - Shopify
  - SEO
  - Google
---

Wer sich ein Angebot für „Shopify SEO“ holt, bekommt oft eine lange Liste: Sitemap, Canonical-Tags, SSL, strukturierte Daten. Einen großen Teil davon bringt Shopify schon mit. Dieser Artikel trennt, was die Plattform von selbst erledigt, was bei Ihnen liegen bleibt und wie Sie ein SEO-Angebot prüfen. Taucht Ihr Shop gar nicht bei Google auf, beginnen Sie besser bei [Shopify-Shop wird bei Google nicht gefunden](/de/blog/shopify-shop-bei-google-nicht-gefunden). Dort geht es um die Indexierung, hier um die Frage, was Sie beauftragen sollten.

## Was Shopify von selbst erledigt

Laut Shopify-Hilfe sind diese Punkte eingebaut:

- **`sitemap.xml`** wird automatisch erzeugt und aktualisiert, wenn Sie Produkte, Kollektionen, Seiten, Bilder oder Beiträge hinzufügen.
- **`robots.txt`** ist vorhanden und schließt zum Beispiel Warenkorb, Kasse und Kundenkonto aus.
- **Canonical-Tags** werden automatisch gesetzt, damit doppelte Inhalte nicht in den Suchergebnissen erscheinen.
- **SSL-Zertifikate** sind standardmäßig aktiv.
- **Title-Tags** erzeugt das Theme. Lassen Sie den Seitentitel leer, nutzt es den Shopnamen zusammen mit dem Titel des Inhalts.
- **Strukturierte Daten für Produkte** liefert laut Shopify das Theme.

Wenn ein Angebot genau diese Punkte als Leistung aufführt, fragen Sie nach, was daran noch zu tun ist. Prüfen lohnt sich trotzdem: Angepasste Themes und Apps können eingebaute Funktionen stören. Laut Hilfe liegen fehlende Titel oder H1-Überschriften meist an eigenem Code oder einer App. Die strukturierten Daten einer Seite testen Sie mit dem [Rich Results Test](https://search.google.com/test/rich-results) von Google, dafür müssen Sie Ihren Shop nicht bestätigen.

Eines sollten Sie dabei wissen: Gültige strukturierte Daten machen eine Seite für besondere Darstellungen nur **geeignet**. Ob Google Preis, Verfügbarkeit oder Bewertungen wirklich anzeigt, entscheidet Google.

## Was bei Ihnen liegen bleibt

**Titel und Beschreibung pro Seite.** Bei Produkten, Kollektionen, Seiten und Beiträgen gibt es den Bereich *Search engine listing preview* (sinngemäß „Vorschau der Suchmaschinenliste“) mit *Edit website SEO*. Die Startseite bearbeiten Sie unter *Online Store → Preferences*. Google empfiehlt: Jeder Titel soll zur Seite passen, klar und knapp sein. Gleiche oder ähnliche Beschreibungen auf allen Seiten helfen laut Google nicht. Bei großen Katalogen hält Google programmatisch erzeugte Beschreibungen ausdrücklich für zulässig.

**Eigene Texte.** Shopify rät davon ab, die Beschreibung des Herstellers zu übernehmen, weil sie schon auf anderen Websites stehen kann. Das ist laut Google kein Verstoß und führt nicht zu einer manuellen Maßnahme, ist aber ineffizient. Für Sie heißt das: Bei den Produkten und Kollektionen, die zählen, lohnen eigene Texte, die Fragen Ihrer Kundschaft beantworten.

**Alt-Texte.** Beim Produkt klicken Sie auf das Bild und wählen *Edit alt text*. Google beschreibt Alt-Text als kurzen, aussagekräftigen Text, der den Zusammenhang zwischen Bild und Inhalt erklärt.

**Struktur und interne Links.** Laut Shopify sollte jede Seite im Menü verlinkt sein und möglichst nicht mehr als drei Klicks von der Startseite entfernt liegen. Linktexte sollten beschreiben, wohin der Link führt, statt „hier klicken“ zu sagen. Wie Kollektionen dabei helfen, steht in [Shopify Kollektionen und Filter](/de/blog/shopify-kollektionen-filter).

**Weiterleitungen.** Ändert sich eine Adresse, legen Sie unter *Content → Menus → URL redirects* eine Weiterleitung an. Sie greift laut Hilfe sofort, aber nur bei Adressen, die bereits einen 404-Fehler liefern. Mehr dazu in [Shopify-Umzug und SEO: Weiterleitungen einrichten](/de/blog/shopify-migration-weiterleitungen).

**Seiten bewusst ausblenden.** Testseiten oder Dubletten sollen nicht in die Suche. Für Produkte gibt es den Status *Unlisted*, außerdem das Metafeld `seo.hidden`. Beide nehmen die Seite laut Hilfe aus Sitemap und Suchmaschinen. Eine Sperre in der `robots.txt` ist dafür nicht gedacht: Sie kann laut Google das Crawlen stoppen, verhindert aber nicht immer die Indexierung.

## Zahlen, die kursieren

Zeichen- und Wortzahlen werden gern als Regeln verkauft. Die Quellen sind da weniger eindeutig:

- **Titel:** Die Shopify-Hilfe nennt je nach Seite unter 60 oder bis zu 70 Zeichen. Google sagt, es gebe keine Grenze, der Titel werde aber je nach Gerätebreite gekürzt.
- **Beschreibung:** Shopify empfiehlt 160 Zeichen. Auf der Hilfeseite zu Kollektionen ist von gekürzten Beschreibungen ab 320 Zeichen die Rede. Google sagt auch hier: keine Grenze, gekürzt wird nach Gerätebreite.
- **Textlänge:** Shopify empfiehlt mindestens 250 Wörter für Produkte, Kollektionen und Seiten und 500 für Informationsseiten und Blogbeiträge. Google schreibt, die Länge allein spiele für das Ranking keine Rolle, eine magische Wortzahl gebe es nicht.
- **Meta-Keywords:** Google nutzt das Keywords-Meta-Tag nicht. Wer dessen Pflege abrechnet, arbeitet an etwas Wirkungslosem.

Praktisch heißt das: Halten Sie Titel kurz genug, dass das Wichtige vorne steht, und schreiben Sie so viel Text, wie die Seite für Ihre Kundschaft braucht.

## Was Sie besser nicht selbst anfassen

Die Datei `robots.txt` lässt sich über die Vorlage `robots.txt.liquid` verändern. Shopify bezeichnet das als nicht unterstützte Anpassung, der Support hilft dabei nicht, und falsche Nutzung kann laut Hilfe den gesamten Traffic kosten. Die Standarddatei nennt Shopify optimal für SEO. Ändern sollte sie nur, wer einen konkreten Grund benennen kann.

Das Gleiche gilt für Änderungen an `theme.liquid` oder an Produktvorlagen, wenn dabei Titel oder Überschriften verschwinden könnten. Solche Arbeiten gehören in eine Kopie des Themes.

## Was ein SEO-Auftrag sinnvoll umfassen kann

Google zählt zu den Leistungen von SEO-Fachleuten unter anderem eine Überprüfung des Inhalts und der Struktur Ihrer Website, technische Ratschläge etwa zu Weiterleitungen, Fehlerseiten und JavaScript, Hilfe bei Inhalten, Keyword-Recherche und Schulung. Für einen Shopify-Shop lässt sich das grob so aufteilen:

- **Das schaffen Sie meist selbst:** Titel, Beschreibungen, Alt-Texte, eigene Texte, Menüs. Google schreibt, dass kleine lokale Unternehmen vieles wahrscheinlich selbst erledigen können.
- **Dafür ist ein Entwickler sinnvoll:** kaputte oder fehlende Titel und Überschriften im Theme, Fehler aus der Search Console, Weiterleitungen in größerer Zahl, Ladezeit, strukturierte Daten nach Theme-Anpassungen. Zur Ladezeit: [Shopify-Shop langsam? 7 Ursachen](/de/blog/slow-shopify-store).
- **Dafür brauchen Sie jemand anderen als einen Entwickler:** laufende Keyword-Recherche, Redaktionsplan und Texte. Das ist Marketingarbeit. Ich mache vor allem den technischen Teil und sage das auch so.

## Woran Sie ein seriöses Angebot erkennen

Google empfiehlt, vor der Beauftragung unter anderem diese Fragen zu stellen:

1. Können Sie Beispiele früherer Arbeit zeigen?
2. Halten Sie sich an die Google Search Essentials?
3. Welche Ergebnisse erwarten Sie, in welchem Zeitraum, und wie messen Sie den Erfolg?
4. Welche Erfahrung haben Sie in meiner Branche und meinem Land?
5. Wie informieren Sie mich über Änderungen an meinem Shop?

Dazu rät Google, Empfehlungen mit der offiziellen Dokumentation abzugleichen. Für einen Shopify-Shop würde ich ergänzen: Ein gutes Angebot nennt die Seiten, die bearbeitet werden, hält Ausgangswerte aus der Search Console fest und beschreibt, wie das Ergebnis geprüft wird. Wie das bei einem Optimierungsauftrag insgesamt aussieht, steht in [Shopify-Shop optimieren lassen](/de/blog/shopify-shop-optimieren-lassen).

## Warnsignale

- **Garantie auf Platz 1.** Niemand kann das garantieren, schreibt Google. Wer es verspricht, ist laut Google nicht die richtige Wahl.
- **„Besondere Beziehung“ zu Google** oder eine „Priority Submission“. Davor warnt Google ausdrücklich. Google nimmt auch kein Geld für die Aufnahme oder Platzierung in den Suchergebnissen, und Werbung bei Google wirkt sich nicht auf die organischen Ergebnisse aus.
- **Eintragung in tausende Suchmaschinen** und Linktausch-Programme.
- **Unaufgeforderte E-Mails** mit SEO-Angeboten.
- **Keyword-Stuffing.** Das verstößt gegen die Spam-Richtlinien von Google.
- **Änderungen, die niemand erklären will.** Wer an Ihrem Shop arbeitet, sollte jede Änderung erklären können.

## Zugang geben, ohne Risiko

Für eine SEO-Prüfung reicht laut Google ein Lesezugriff auf die Search Console, Schreibrechte sind dafür nicht nötig. Im Shopify-Admin arbeitet ein Entwickler über ein Collaborator-Konto mit begrenzten Rechten, Ihr Inhaber-Login bleibt bei Ihnen. Die Details stehen in [Shopify-Entwickler wechseln](/de/blog/shopify-entwickler-wechseln).

## Wie lange es dauert

Eine feste Zeit gibt es nicht. Google schreibt, manche Änderungen wirkten nach wenigen Stunden, andere erst nach Monaten, im Allgemeinen solle man einige Wochen abwarten. Geänderte Titel erscheinen erst, wenn Google die Seite erneut gecrawlt hat, was einige Tage bis wenige Wochen dauern kann. Ändern Sie deshalb nicht jede Woche alles neu, sonst wissen Sie nicht, was gewirkt hat.

## Ein Beispiel aus der Praxis

Einen Fall mit belegten Rankings kann ich Ihnen nicht zeigen, darum nenne ich auch keine Zahlen. Beim Umzug von [Jula Bloom](/de/projects/jula-bloom) von WooCommerce zu Shopify habe ich die Redirect-Map der alten Adressen geschrieben, solange die alte Seite noch erreichbar war, und Meta-Descriptions für den Launch vorbereitet. Alte Links führen auf ihre neuen Seiten. Das ist die Art SEO-Arbeit, die in Entwicklerhand gehört.

## Häufige Fragen

**Brauche ich eine SEO-App?** Nicht automatisch. Google bewertet und empfiehlt keine SEO-Tools von Drittanbietern, und jede App ist ein weiterer Baustein im Shop. Shopify testet mit Grow SEO KI-Vorschläge für Titel und Beschreibungen, laut Hilfe bisher im Early Access für einen Teil der Händler und nur auf Englisch.

**Reicht es, die Sitemap bei Google einzureichen?** Sie hilft Google beim Finden, sagt aber nichts über die Platzierung. Laut Google ist sie nicht einmal zwingend nötig, die meisten Seiten werden automatisch gefunden.

**Können Sie mir eine Platzierung garantieren?** Nein. Ich kann technische Hürden beseitigen und zeigen, was geändert wurde. Wo Ihr Shop danach steht, hängt auch von Inhalt und Wettbewerb ab.

**Was kostet das?** Das hängt davon ab, wie viele Seiten betroffen sind und was im Theme zu tun ist. Bei mir gibt es nach dem Briefing ein Angebot zum Festpreis.

## Wollen Sie wissen, wo Ihr Shop steht?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist (Titel, Überschriften, strukturierte Daten, Sitemap, Ladezeit), und sage Ihnen ehrlich, was davon technisch ist und was Sie selbst erledigen können. Passt die Arbeit zu mir, läuft sie meist über [Shopify schneller machen](/de/services/shopify-speed), dort gehören Search-Console-Fehler und Weiterleitungen zum Umfang.

**Weiterlesen:** [Shopify-Shop wird bei Google nicht gefunden](/de/blog/shopify-shop-bei-google-nicht-gefunden) · [Shopify-Shop optimieren lassen](/de/blog/shopify-shop-optimieren-lassen) · [Shopify-Freelancer oder Agentur](/de/blog/shopify-freelancer-oder-agentur)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
