---
publishedAt: 2026-11-23
title: "Shopify Produktbewertungen einrichten: Sterne im Shop, bei Google und rechtlich sauber"
seoTitle: "Shopify Produktbewertungen einrichten"
date: 23. November 2026
readingTime: 7 Min
excerpt: "Produktbewertungen in Shopify: was die Shop-App zeigt, worauf Sie bei einer Bewertungs-App achten, warum Sterne im Theme fehlen, wann Google Sterne zeigt und was § 5b UWG verlangt."
image: /og/projects/minbie.jpg
topic: build
tags:
  - Shopify
  - Bewertungen
  - SEO
---

Sterne unter dem Produkt und echte Stimmen von Käufern helfen Kunden bei der Entscheidung. In Shopify sind Bewertungen aber auf drei Ebenen verteilt: die Shop-App, eine Bewertungs-App im Onlineshop und das Theme, das die Sterne anzeigt. Dazu kommen Google und in Deutschland das Wettbewerbsrecht. Dieser Artikel ordnet das. Quellen sind die Shopify-Hilfe, die Shopify-Entwicklerdoku, die Google-Suchdoku und das UWG, Stand November 2026. Das ist keine Rechtsberatung.

Vorab, damit Sie meine Sicht einordnen können: Ich veröffentliche selbst eine Bewertungs-App im Shopify App Store, [Reviews Core](https://apps.shopify.com/reviews-core). Ich bin bei diesem Thema also nicht neutral. Deshalb gibt es hier kein App-Ranking, sondern Kriterien, mit denen Sie jede App prüfen können.

## Bewertungen in der Shop-App

Die Seite „Product reviews“ in der Shopify-Hilfe beschreibt die Bewertungen in der **Shop-App**, nicht ein Bewertungsmodul für Ihren Onlineshop. Dort können Kunden Ihr Produkt mit **1 bis 5 Sternen** bewerten. Bewertungen und Durchschnitt sind öffentlich und erscheinen auf der Produktseite in der Shop-App.

Nutzen Sie eine der Partner-Apps, die die Hilfe nennt (**Judge.me, Loox, Okendo, Stamped.io, Yotpo**), werden die dort gesammelten Bewertungen laut Hilfe automatisch auch in Shop angezeigt. Für die Sterne in Ihrem eigenen Onlineshop brauchen Sie in der Regel eine Bewertungs-App.

## Eine Bewertungs-App auswählen: sechs Kriterien

Das sind meine Prüffragen aus der Theme-Arbeit, keine offiziellen Shopify-Regeln:

1. **Schreibt die App die Standard-Metafelder?** Dazu gleich mehr. Davon hängt ab, ob Ihr Theme die Sterne ohne Zusatzcode findet.
2. **Wie wird nach Bewertungen gefragt?** Eine Anfrage per E-Mail nach der Zustellung bringt mehr Stimmen als ein Formular, das niemand findet. Prüfen Sie Zeitpunkt, Sprache und Absender der E-Mail.
3. **Kann die App vorhandene Bewertungen importieren?** Wichtig beim Wechsel der App oder der Plattform. Von Wix etwa lassen sich Bewertungen nicht exportieren, mehr in [Von Wix zu Shopify](/de/blog/wix-zu-shopify-umzug).
4. **Kennzeichnet die App geprüfte Käufer?** Das brauchen Sie für die Pflichtangabe nach § 5b UWG, siehe unten.
5. **Erscheinen die Texte auf Deutsch?** App-Inhalte werden nur übersetzt, wenn die App Shopifys Übersetzungsschnittstelle nutzt. Mehr in [Shopify mehrsprachig](/de/blog/shopify-mehrsprachig-uebersetzen).
6. **Was kostet das Widget an Ladezeit?** Jede App, die etwas im Shop anzeigt, lädt eigenen Code. Testen Sie die Produktseite vorher und nachher, wie in [Shopify-Shop langsam](/de/blog/slow-shopify-store) beschrieben.

## Warum die Sterne im Theme fehlen: Standard-Metafelder

Shopify hat zwei Standard-Metafelder für Bewertungen, für Produkte und Varianten:

- **Product rating**, `reviews.rating`, Typ `rating`: die Durchschnittsbewertung.
- **Product rating count**, `reviews.rating_count`, Typ `number_integer`: die Anzahl der Bewertungen.

Laut Shopify-Entwicklerdoku **sollen** Bewertungs-Apps in diese Felder schreiben und sie bei jeder Änderung aktualisieren, und Themes, die Sterne zeigen, **sollen** genau dieses Feld lesen. „Sollen“ heißt: Nicht jede App und nicht jedes Theme hält sich daran.

Typisches Bild: Auf der Produktseite steht das Widget der App, auf den Produktkarten in Kollektionen fehlen die Sterne. Dann schreibt die App ihre Daten in eigene Felder, oder das Theme liest das Standardfeld nicht. Lösung ist entweder eine Einstellung in der App oder eine kleine Anpassung im Theme. Was Metafelder sind, steht in [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects).

## Sterne in den Google-Ergebnissen

Google kann Bewertungssterne in den Suchergebnissen zeigen, wenn die Seite passende strukturierte Daten hat. **Product** gehört laut Google-Doku zu den geeigneten Typen. Die wichtigsten Regeln aus der Doku:

- Wer **AggregateRating** auszeichnet, muss die Durchschnittsbewertung auch **sichtbar auf der Seite** zeigen.
- Bewertungen von **anderen Websites** dürfen nicht zusammengefasst werden.
- **Gefälschte** oder nicht offengelegte, durch Anreize erkaufte Bewertungen sind verboten, auf der Seite wie im Markup.
- Bewertungen über das **eigene Unternehmen** (LocalBusiness oder Organization), die das Unternehmen selbst kontrolliert, bekommen keine Sterne. Ein „4,9 Sterne für unseren Shop“-Widget auf der Startseite bringt also keine Sterne bei Google.

Auch mit sauberem Markup entscheidet Google, ob Sterne erscheinen. Welche Teile der strukturierten Daten das Theme liefert und welche die App, prüfen Sie mit dem Rich-Results-Test von Google. Mehr zu SEO in Shopify in [Shopify SEO optimieren lassen](/de/blog/shopify-seo-optimieren-lassen).

## Deutschland: Was § 5b UWG verlangt

Wer Verbraucherbewertungen zugänglich macht, muss laut **§ 5b Abs. 3 UWG** informieren, ob und wie er sicherstellt, dass die Bewertungen von Verbrauchern stammen, die das Produkt tatsächlich genutzt oder gekauft haben. Dazu kommen zwei Verbote aus dem Anhang des UWG:

- **Nr. 23b:** behaupten, Bewertungen stammen von echten Käufern, ohne angemessene und verhältnismäßige Maßnahmen zur Überprüfung.
- **Nr. 23c:** gefälschte Bewertungen übermitteln oder in Auftrag geben.

In der Praxis heißt das: Ein kurzer, gut sichtbarer Hinweis beim Bewertungsbereich, zum Beispiel ob nur Käufer mit Bestellung bewerten können und wie das geprüft wird. Prüfen Sie nicht, steht genau das im Hinweis. Den Wortlaut klären Sie mit Ihrem Anwalt oder Rechtstext-Anbieter. Mehr zu Pflichtseiten in [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Checkliste

1. Bewertungs-App gewählt, die Ihre Anforderungen an Anfrage-E-Mail, Import und Sprache erfüllt?
2. Schreibt die App `reviews.rating` und `reviews.rating_count`?
3. Sterne auf Produktseite **und** Produktkarten sichtbar, auch auf dem Handy?
4. Anfrage-E-Mail auf Deutsch, nach der Zustellung, mit Ihrem Absender?
5. Hinweis nach § 5b UWG beim Bewertungsbereich, mit Anwalt abgestimmt?
6. Keine gekauften oder selbst geschriebenen Bewertungen, Anreize offengelegt?
7. Rich-Results-Test für eine Produktseite ohne Fehler?
8. Ladezeit der Produktseite vor und nach der App verglichen?

## Wie ich es handhabe

Bei [Minbie](/de/projects/minbie), einer australischen Marke für Baby-Fütterprodukte, habe ich Okendo-Sternebewertungen auf Produktkarten und Produktseiten ins Blum-Theme gebracht. Die Sterne werden dort aus Okendos eigenen Metafeldern gelesen. Außerdem habe ich die Bewertungsanzahl auf der Startseite aktualisiert und ein Template für die Bewertungsseite angelegt. Das ist mein Teil bei diesem Thema: die Anzeige im Theme, mit dem Ziel, dass Sterne überall stimmen, wo Kunden sie erwarten, und die Seite dabei schnell bleibt. Zahlen zu mehr Umsatz durch Bewertungen habe ich aus diesem Projekt nicht. Im Admin arbeite ich über ein Collaborator-Konto mit begrenzten Rechten.

## Häufige Fragen

**Hat Shopify eine eigene Bewertungsfunktion für den Onlineshop?** Die Shopify-Hilfe beschreibt Bewertungen in der Shop-App. Für Sterne im eigenen Onlineshop nutzen die meisten Shops eine Bewertungs-App.

**Erscheinen Bewertungen aus meiner App auch in der Shop-App?** Laut Hilfe automatisch, wenn Sie eine der Partner-Apps nutzen: Judge.me, Loox, Okendo, Stamped.io oder Yotpo.

**Darf ich einen Rabatt für eine Bewertung geben?** Google verbietet nicht offengelegte Anreize. Wenn überhaupt, legen Sie den Anreiz offen und klären die rechtliche Seite mit Ihrem Anwalt.

**Warum zeigt Google trotz Bewertungen keine Sterne?** Häufige Gründe: fehlerhaftes oder doppeltes Markup von Theme und App, Bewertung nicht sichtbar auf der Seite, oder Google entscheidet sich schlicht dagegen. Der Rich-Results-Test zeigt die ersten beiden.

## Sterne fehlen auf Ihren Produktkarten?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact): Ich sehe mir an, wo Sterne fehlen, ob das Markup stimmt und was die App an Ladezeit kostet. Einrichtung und laufende Pflege passen zur [Shopify Betreuung](/de/services/shopify-betreuung).

**Weiterlesen:** [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects) · [Shopify SEO optimieren lassen](/de/blog/shopify-seo-optimieren-lassen) · [Shopify mit Google Shopping verbinden](/de/blog/shopify-google-shopping-merchant-center)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
