---
publishedAt: 2026-10-17
title: "Shopify B2B: Händlerpreise, Quick Order und Regeln, die halten"
date: 17. Oktober 2026
readingTime: 4 Min
excerpt: Wie Endkunden und Händler im selben Shopify-Shop kaufen, mit eigenen Preisen, Quick Order und Kaufregeln, die der Server durchsetzt. Aus einem echten Projekt.
image: /og/projects/orska-rituals.jpg
topic: build
tags:
  - Shopify
  - B2B
  - Großhandel
---

Viele Marken verkaufen an zwei Gruppen: an Endkunden und an Händler, Salons oder Wiederverkäufer. Die Händlerpreise laufen dann oft nebenher, per E-Mail, PDF und Excel. Das geht auch in einem Shop. Dieser Artikel zeigt, wie ich B2B in Shopify aufbaue, am Beispiel von [Orska Rituals](/de/projects/orska-rituals), einer professionellen Hautpflegemarke für Kosmetikstudios und Spas.

## Ein Shop für beide Gruppen

Ein zweiter Shop nur für Händler heißt: Produkte, Inhalte und Bestände doppelt pflegen. Bei Orska kaufen deshalb alle im selben Shop, sehen aber nicht dasselbe:

- **Nicht angemeldete Besucher** sehen Retail-Preise und eine Aufforderung, sich als Partner anzumelden.
- **Freigegebene Profis** sehen ihre Großhandelspreise, Quick Order und den Pro Vault, einen Bereich nur für Mitglieder.
- **Inhalte nur für Profis**, etwa die Preise der chemischen Peelings, bleiben für alle anderen verborgen.

## Händlerpreise je Region

Großhandelspreise müssen nicht überall gleich sein. Bei Orska gelten sie je Region. Wer welchen Preis sieht, entscheidet Shopify anhand des Firmenkontos, mit dem ein Profi angemeldet ist, nicht ein Skript im Theme.

## Händlerkonten ohne Handarbeit

Der Engpass in vielen B2B-Shops ist die Freigabe: Jemand muss jedes Händlerkonto von Hand anlegen. Bei Orska legt ein kleiner Cloudflare Worker das Unternehmen in Shopify an, sobald ein Profi freigegeben ist. Der Profi hat damit direkt sein Großhandelskonto, ohne dass jemand nachhelfen muss.

## Quick Order für Profis

Wer regelmäßig nachbestellt, will nicht durch Produktseiten klicken. Quick Order erscheint bei Orska nur für angemeldete Profis. Endkunden sehen den normalen Shop.

## Regeln, die auch halten, wenn jemand das Interface umgeht

Hier passieren die meisten Fehler. Eine Mindestmenge oder ein Limit, das nur im Theme steckt, lässt sich umgehen, zum Beispiel über einen direkten Warenkorb-Link. Deshalb prüfe ich Kaufregeln auf dem Server, mit Shopify Functions.

Bei Orska ist das Discovery Kit für die Erstbestellung begrenzt, und zwar in drei Ebenen:

1. im Theme, also in der Oberfläche,
2. durch eine Prüfung auf dem Server,
3. durch eine Zugriffsregel, so dass niemand außerhalb des Programms es kaufen kann.

Fällt eine Ebene aus, halten die anderen.

## Produktdaten, die das Team selbst pflegt

Profis brauchen mehr Informationen als Endkunden. Bei Orska kommen Inhaltsstoffe, Anwendung und die Angabe, für wen ein Produkt gedacht ist, aus Metafeldern. Das Team pflegt sie in Shopify, ohne Entwickler und ohne Code.

## Brauche ich Shopify Plus?

Das hängt davon ab, welche B2B-Funktionen Sie brauchen und was Ihr Tarif enthält. Das kläre ich im Erstgespräch mit Ihnen, bevor Sie etwas umstellen oder einen Tarif wechseln.

## Checkliste vor dem Start

- Wer gilt als Händler, und wie wird er freigegeben?
- Welche Preise gelten für welche Gruppe oder Region?
- Welche Mindestmengen und Limits müssen auf dem Server halten?
- Welche Produkte und Inhalte sind nur für Händler?
- Wer pflegt Produktdaten, und wo?
- Händler- und Endkundensicht vor dem Go-live getrennt testen.
- Welche Bestelldokumente brauchen Händler, etwa Rechnung oder Lieferschein? (Siehe [Shopify Rechnung erstellen](/de/blog/shopify-rechnung-bestelldokumente).)

## B2B geplant?

Ich richte [B2B und Großhandel in Shopify](/de/services/shopify-b2b) ein, zum Festpreis nach dem Briefing. Fragen Sie den kostenlosen Shop-Check an oder buchen Sie ein Erstgespräch.

**Weiterlesen:** [Shopify Markets: In mehrere Länder verkaufen](/de/blog/shopify-markets-mehrere-laender) · [Shopify-Shop erstellen lassen: Wovon die Kosten abhängen](/de/blog/shopify-shop-erstellen-lassen-kosten) · [Shopify Zahlungsarten in Deutschland](/de/blog/shopify-zahlungsarten-deutschland) · [Shopify Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv) · [Shopify Metafelder und Metaobjekte: Produktdaten strukturiert pflegen](/de/blog/shopify-metafelder-metaobjects)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
