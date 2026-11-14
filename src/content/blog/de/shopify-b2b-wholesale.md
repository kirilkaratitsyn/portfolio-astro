---
publishedAt: 2026-10-17
updatedAt: 2026-11-14
title: "Shopify B2B: Händlerpreise, Quick Order und Regeln, die halten"
date: 17. Oktober 2026
readingTime: 3 Min
excerpt: "Shopify B2B: Endkunden und Händler kaufen im selben Shop, mit eigenen Preisen, Quick Order und Kaufregeln, die der Server durchsetzt."
image: /og/projects/orska-rituals.jpg
topic: build
tags:
  - Shopify
  - B2B
  - Großhandel
---

Viele Marken verkaufen an Endkunden und an Händler, Salons oder Wiederverkäufer. Die Händlerpreise laufen dann oft nebenher, per E-Mail, PDF und Excel. Mit Shopify B2B geht beides in einem Shop. Das Beispiel hier ist [Orska Rituals](/de/projects/orska-rituals), eine professionelle Hautpflegemarke für Kosmetikstudios und Spas.

## Ein Shop für beide Gruppen

Ein zweiter Shop nur für Händler heißt: Produkte, Inhalte und Bestände doppelt pflegen. Bei Orska kaufen alle im selben Shop, sehen aber nicht dasselbe:

- **Nicht angemeldete Besucher** sehen Retail-Preise und eine Aufforderung, sich als Partner anzumelden.
- **Freigegebene Profis** sehen ihre Großhandelspreise, Quick Order und den Pro Vault, einen Bereich nur für Mitglieder.
- **Inhalte nur für Profis**, etwa die Preise der chemischen Peelings, bleiben für alle anderen verborgen.

## Händlerpreise je Region

Großhandelspreise müssen nicht überall gleich sein. Bei Orska waren B2B-Katalog und Märkte in Shopify schon eingerichtet, bevor ich dazukam. Den Preis bestimmt Shopify anhand des Firmenkontos, mit dem ein Profi angemeldet ist, nicht ein Skript im Theme. Ich habe den Worker unten ergänzt. Er hängt den Standort eines neuen Unternehmens daran an.

## Händlerkonten ohne Handarbeit

In vielen B2B-Shops muss jemand jedes Händlerkonto von Hand anlegen. Bei Orska legt ein kleiner Cloudflare Worker das Unternehmen in Shopify an, sobald ein Profi freigegeben ist. Der Profi hat direkt sein Großhandelskonto.

## Quick Order für Profis

Wer regelmäßig nachbestellt, will nicht durch Produktseiten klicken. Bei Orska sehen nur angemeldete Profis Quick Order. Endkunden sehen den normalen Shop.

## Regeln, die auch halten, wenn jemand das Interface umgeht

Eine Mindestmenge oder ein Limit, das nur im Theme steckt, lässt sich umgehen, zum Beispiel über einen direkten Warenkorb-Link. Deshalb prüfe ich Kaufregeln auf dem Server, mit Shopify Functions.

Bei Orska ist das Discovery Kit für die Erstbestellung auf drei Ebenen begrenzt:

1. im Theme,
2. durch eine Prüfung auf dem Server,
3. durch eine Zugriffsregel in den eigenen Apps des Kunden, so dass niemand außerhalb des Programms es kaufen kann.

Fällt eine Ebene aus, halten die anderen.

## Produktdaten, die das Team selbst pflegt

Profis brauchen mehr Informationen als Endkunden. Bei Orska kommen Inhaltsstoffe, Anwendung und Zielgruppe eines Produkts aus Metafeldern. Das Team pflegt sie in Shopify, ohne Entwickler und ohne Code.

## Brauche ich Shopify Plus?

Nicht unbedingt. Laut Shopify-Hilfe ist Shopify B2B in den Tarifen Basic, Grow, Advanced und Plus verfügbar. Plus ergänzt unter anderem unbegrenzt viele Kataloge, Anzahlungen und Teilzahlungen. Was Sie davon brauchen, kläre ich mit Ihnen im Erstgespräch, bevor Sie den Tarif wechseln. Mehr dazu: [Shopify Plus: Was der Tarif freischaltet](/de/blog/shopify-plus-wann-lohnt).

## Checkliste vor dem Start

- Wer gilt als Händler, und wie wird er freigegeben?
- Welche Preise gelten für welche Gruppe oder Region?
- Welche Mindestmengen und Limits müssen auf dem Server halten?
- Welche Produkte und Inhalte sind nur für Händler?
- Wer pflegt Produktdaten, und wo?
- Sind Händler- und Endkundensicht vor dem Go-live getrennt getestet?
- Welche Bestelldokumente brauchen Händler, etwa Rechnung oder Lieferschein? Siehe [Shopify Rechnung erstellen](/de/blog/shopify-rechnung-bestelldokumente).

## B2B geplant?

Ich richte [B2B und Großhandel in Shopify](/de/services/shopify-b2b) ein, zum Festpreis nach dem Briefing. Fragen Sie den kostenlosen Shop-Check an oder buchen Sie ein Erstgespräch.

**Weiterlesen:** [Shopify Markets](/de/blog/shopify-markets-mehrere-laender) · [Shopify-Shop erstellen lassen: Kosten](/de/blog/shopify-shop-erstellen-lassen-kosten) · [Shopify Zahlungsarten](/de/blog/shopify-zahlungsarten-deutschland) · [Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv) · [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects) · [Shopify Steuern und MwSt.](/de/blog/shopify-steuern-mwst-einrichten)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
