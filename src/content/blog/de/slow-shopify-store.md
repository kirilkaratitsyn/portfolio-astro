---
publishedAt: 2026-10-22
title: "Shopify-Shop langsam? 7 Ursachen und was Sie selbst prüfen können"
date: 22. Oktober 2026
readingTime: 6 Min
excerpt: Warum ein Shopify-Shop langsam lädt, wie Sie es in zehn Minuten selbst messen und welche Ursachen Sie ohne Entwickler beheben können. Mit einem echten Beispiel.
image: /og/projects/pedchem.jpg
topic: speed
tags:
  - Shopify
  - Ladezeit
  - Performance
---

Ihr Shop fühlt sich zäh an, vor allem auf dem Smartphone? Damit sind Sie nicht allein. Die gute Nachricht: Am Server liegt es bei Shopify fast nie. Hosting und Checkout übernimmt Shopify selbst. Langsam wird ein Shop durch das, was im Theme steckt: Apps, Bilder, Skripte und Sections. Und vieles davon können Sie selbst finden.

## Zuerst messen: so prüfen Sie Ihren Shop in zehn Minuten

1. Öffnen Sie [PageSpeed Insights](https://pagespeed.web.dev/) und geben Sie die Adresse Ihrer **Startseite** ein. Wiederholen Sie das mit einer **Kollektion** und einer **Produktseite**, denn dort kaufen Ihre Kunden.
2. Schauen Sie auf den Reiter **Mobilgeräte**. Die meisten Besucher kommen vom Smartphone, und dort ist der Unterschied am größten.
3. Ganz oben steht, wenn genug Besucher da sind, die Bewertung aus echten Nutzerdaten („Core Web Vitals“). Sie zählt für Google mehr als die Punktzahl darunter, die nur aus einem Labortest stammt.
4. In der Google Search Console finden Sie unter **Core Web Vitals** dieselben Werte für den ganzen Shop.

Notieren Sie die Werte. So sehen Sie später, ob eine Änderung wirklich etwas gebracht hat.

## Die 7 häufigsten Ursachen

### 1. Zu viele Apps

Jede App, die etwas im Shop anzeigt, lädt eigenen Code: Bewertungen, Pop-ups, Chat, Wunschliste, Upsells, Zähler. Einzeln ist das wenig, zusammen bremst es jede Seite. Gehen Sie Ihre Apps durch und fragen Sie bei jeder: Brauche ich sie noch, und kann mein Theme das inzwischen selbst?

### 2. Reste deinstallierter Apps

Eine App zu löschen heißt nicht immer, dass ihr Code verschwindet. Ältere Apps haben Code direkt in die Theme-Dateien geschrieben, und der lädt weiter. Das sieht man nur im Code, zum Beispiel in `theme.liquid`. Hier hilft ein Blick von jemandem, der Liquid lesen kann.

### 3. Große Bilder und Videos auf der Startseite

Ein Slider mit fünf großen Fotos oder ein Hintergrundvideo ganz oben ist oft der größte Einzelposten. Shopify verkleinert Bilder automatisch, aber nur, wenn das Theme das richtig nutzt. Laden Sie Bilder nicht größer hoch als nötig, und fragen Sie sich, ob der Slider wirklich verkauft oder nur hübsch ist.

### 4. Ein altes oder überladenes Theme

Themes, die vor Jahren gekauft und seitdem immer wieder angepasst wurden, schleppen viel mit. Neuere Themes aus dem Shopify Theme Store sind meist deutlich schlanker. Ein Wechsel lohnt sich vor allem, wenn ohnehin vieles im Shop über Apps läuft, die ein neues Theme selbst kann.

### 5. Tracking- und Marketing-Skripte

Google Analytics, Meta-Pixel, TikTok, Pinterest, Heatmaps: Jeder Dienst lädt Code. Prüfen Sie, welche Sie wirklich auswerten. Shopify bietet dafür **Kundenereignisse (Custom Pixel)**, damit Tracking-Code nicht mehr direkt im Theme steckt.

### 6. Zu viele Schriften

Drei Schriftarten in je vier Stärken sind zwölf Dateien, die der Browser laden muss, bevor Text sauber erscheint. Zwei Schriften in wenigen Stärken reichen fast immer.

### 7. Zu viel auf einer Seite

Startseiten wachsen mit jeder Aktion um eine Section. Zwanzig Sections mit Produktkarussells, Instagram-Feed und Bewertungs-Widget laden entsprechend lange. Weniger, dafür klarere Sections helfen der Ladezeit und dem Verkauf.

## Was Sie selbst tun können

- Apps aufräumen: alles deinstallieren, was Sie nicht nutzen.
- Bilder vor dem Hochladen verkleinern, Hintergrundvideos weglassen.
- Die Startseite kürzen: welche Sections klickt wirklich jemand an?
- Ungenutzte Tracking-Dienste entfernen.
- Danach erneut messen und mit Ihren Notizen vergleichen.

## Wann ein Entwickler mehr bringt

Wenn die einfachen Schritte erledigt sind und der Shop trotzdem langsam bleibt, steckt die Ursache meist im Code: App-Reste im Theme, Skripte, die alles blockieren, oder ein Theme, das sich nicht mehr sinnvoll aufräumen lässt. Dann ist entweder ein gezieltes Aufräumen oder ein Wechsel auf ein schlankeres Theme der größere Hebel. Wie Sie so einen Auftrag vorbereiten, Ausgangswerte festhalten und einem Dienstleister sicher Zugang geben, steht in [Shopify-Shop optimieren lassen](/de/blog/shopify-shop-optimieren-lassen).

## Ein Beispiel: Pedchem

[Pedchem](/de/projects/pedchem), ein Shop für Schädlingsbekämpfung mit 323 Produkten, lief auf dem Flex-Theme mit mehreren Bezahl-Apps. Ich habe den Shop auf dem Enterprise-Theme neu aufgebaut, ohne Bezahl-Apps, die Produktdaten in Metafelder verlegt und Tracking in ein Custom Pixel. Im Labortest erreichte das neue Theme 96 Punkte für Performance, das alte 57. Der Live-Shop hat in der Zeit weiter verkauft, gewechselt wurde erst nach schriftlicher Freigabe.

## Häufige Fragen

**Liegt es an meinem Shopify-Tarif?** Nein. Die Ladezeit hängt nicht vom Tarif ab, sondern vom Theme und dem, was darin geladen wird.

**Muss ich ein neues Theme kaufen?** Nicht immer. Oft reicht es, Apps und alten Code aufzuräumen. Ein Wechsel lohnt sich, wenn das alte Theme viel mitschleppt.

**Wie wichtig ist die Punktzahl in PageSpeed Insights?** Sie ist ein guter Anhaltspunkt. Für Google zählen am Ende die echten Nutzerdaten, die Core Web Vitals.

**Verkauft mein Shop weiter, während daran gearbeitet wird?** Ja. Ich arbeite in einem unveröffentlichten Test-Theme; live geht es erst nach Ihrer Freigabe.

## Soll ich mir Ihren Shop ansehen?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir Ladezeit, Apps und Theme an und sage Ihnen, was am meisten bringt, auch wenn Sie es danach selbst umsetzen. Wenn Sie es lieber abgeben: Ich [mache Ihren Shopify-Shop schneller](/de/services/shopify-speed), zum Festpreis nach dem Briefing.

**Weiterlesen:** [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) · [Shopify Metafelder und Metaobjekte: Produktdaten strukturiert pflegen](/de/blog/shopify-metafelder-metaobjects) · [Shopify Cookie-Banner und Datenschutzerklärung](/de/blog/shopify-cookie-banner-datenschutz)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
