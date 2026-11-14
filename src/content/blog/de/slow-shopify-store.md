---
publishedAt: 2026-10-22
updatedAt: 2026-11-11
title: "Shopify-Shop langsam? 7 Ursachen und was Sie selbst prüfen können"
date: 22. Oktober 2026
readingTime: 4 Min
excerpt: "Warum ein Shopify-Shop langsam lädt, wie Sie es in zehn Minuten selbst messen und welche Ursachen Sie ohne Entwickler beheben. Mit echtem Beispiel."
image: /og/projects/pedchem.jpg
topic: speed
tags:
  - Shopify
  - Ladezeit
  - Performance
---

Ist Ihr Shopify-Shop langsam, vor allem auf dem Smartphone? Am Server liegt es fast nie: Hosting und Checkout übernimmt Shopify selbst. Langsam wird ein Shop durch das, was im Theme steckt: Apps, Bilder, Skripte und Sections. Vieles davon finden Sie selbst.

## Zuerst messen: so prüfen Sie Ihren Shop in zehn Minuten

1. Öffnen Sie [PageSpeed Insights](https://pagespeed.web.dev/) und prüfen Sie die **Startseite**, eine **Kollektion** und eine **Produktseite**.
2. Schauen Sie auf den Reiter **Mobilgeräte**. Die meisten Besucher kommen vom Smartphone.
3. Ganz oben steht, wenn genug Besucher da sind, die Bewertung aus echten Nutzerdaten („Core Web Vitals“). Sie zählt für Google mehr als die Punktzahl aus dem Labortest darunter.
4. Die Google Search Console zeigt unter **Core Web Vitals** dieselben Werte für den ganzen Shop.

Notieren Sie die Werte. So sehen Sie später, ob eine Änderung etwas gebracht hat.

## Die 7 häufigsten Ursachen

### 1. Zu viele Apps

Jede App, die etwas im Shop anzeigt, lädt eigenen Code: Bewertungen, Pop-ups, Chat, Wunschliste, Upsells, Zähler. Zusammen bremst das jede Seite. Fragen Sie bei jeder App: Brauche ich sie noch, und kann mein Theme das inzwischen selbst?

### 2. Reste deinstallierter Apps

Ältere Apps haben Code direkt in die Theme-Dateien geschrieben. Er lädt weiter, auch wenn die App gelöscht ist. Das sieht man nur im Code, zum Beispiel in `theme.liquid`. Dafür braucht es jemanden, der Liquid lesen kann.

### 3. Große Bilder und Videos auf der Startseite

Ein Slider mit fünf großen Fotos oder ein Hintergrundvideo ganz oben ist oft der größte Einzelposten. Shopify verkleinert Bilder automatisch, aber nur, wenn das Theme das richtig nutzt. Laden Sie Bilder nicht größer hoch als nötig.

### 4. Ein altes oder überladenes Theme

Themes, die vor Jahren gekauft und immer wieder angepasst wurden, schleppen viel mit. Neuere Themes aus dem Shopify Theme Store sind meist schlanker. Ein Wechsel lohnt sich vor allem, wenn vieles über Apps läuft, die ein neues Theme selbst kann.

### 5. Tracking- und Marketing-Skripte

Google Analytics, Meta-Pixel, TikTok, Pinterest, Heatmaps: Jeder Dienst lädt Code. Prüfen Sie, welche Sie wirklich auswerten. Mit den **Kundenereignissen (Custom Pixel)** von Shopify steckt Tracking-Code nicht mehr direkt im Theme.

### 6. Zu viele Schriften

Drei Schriftarten in je vier Stärken sind zwölf Dateien, die der Browser vor dem Text laden muss. Zwei Schriften in wenigen Stärken reichen fast immer.

### 7. Zu viel auf einer Seite

Startseiten wachsen mit jeder Aktion um eine Section. Zwanzig Sections mit Produktkarussells, Instagram-Feed und Bewertungs-Widget laden lange. Weniger Sections helfen der Ladezeit und dem Verkauf.

## Was Sie selbst tun können

- Ungenutzte Apps deinstallieren.
- Bilder vor dem Hochladen verkleinern, Hintergrundvideos weglassen.
- Die Startseite kürzen: Welche Sections klickt jemand an?
- Ungenutzte Tracking-Dienste entfernen.
- Erneut messen und mit Ihren Notizen vergleichen.

## Wann ein Entwickler mehr bringt

Bleibt der Shop danach langsam, steckt die Ursache meist im Code: App-Reste im Theme, blockierende Skripte oder ein Theme, das sich nicht mehr aufräumen lässt. Dann hilft ein gezieltes Aufräumen oder der Wechsel auf ein schlankeres Theme. Wie Sie den Auftrag vorbereiten, Ausgangswerte festhalten und sicher Zugang geben, steht in [Shopify-Shop optimieren lassen](/de/blog/shopify-shop-optimieren-lassen).

## Ein Beispiel: Pedchem

[Pedchem](/de/projects/pedchem), ein Shop für Schädlingsbekämpfung mit 323 Produkten, lief auf dem Flex-Theme. Ich habe ihn auf dem Enterprise-Theme neu aufgebaut, ohne eine App hinzuzufügen, den Produktdaten in Metafeldern passende Typen gegeben und das Tracking in ein Custom Pixel verlegt. Der Mobile-PageSpeed der Startseite stieg live von 57 auf 82, der LCP von 12,0 auf 4,2 Sekunden. Der Live-Shop verkaufte weiter, gewechselt wurde erst nach schriftlicher Freigabe.

## Häufige Fragen

**Liegt es an meinem Shopify-Tarif?** Nein. Die Ladezeit hängt vom Theme ab und von dem, was es lädt.

**Muss ich ein neues Theme kaufen?** Nicht immer. Oft reicht es, Apps und alten Code aufzuräumen.

**Wie wichtig ist die Punktzahl in PageSpeed Insights?** Sie ist ein Anhaltspunkt. Für Google zählen die echten Nutzerdaten, die Core Web Vitals.

**Verkauft mein Shop weiter, während daran gearbeitet wird?** Ja. Ich arbeite in einem unveröffentlichten Test-Theme. Live geht es erst nach Ihrer Freigabe.

## Soll ich mir Ihren Shop ansehen?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich sage Ihnen, was am meisten bringt, auch wenn Sie es selbst umsetzen. Oder ich [mache Ihren Shopify-Shop schneller](/de/services/shopify-speed), zum Festpreis nach dem Briefing.

**Weiterlesen:** [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) · [Shopify Metafelder und Metaobjekte](/de/blog/shopify-metafelder-metaobjects) · [Shopify Cookie-Banner und Datenschutzerklärung](/de/blog/shopify-cookie-banner-datenschutz)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
