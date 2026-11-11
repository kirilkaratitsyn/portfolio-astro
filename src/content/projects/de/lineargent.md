---
order: 7
title: "Lineargent"
seoTitle: "Lineargent: Shopify-GTM-Ladezeit von 15,4 auf 2,9 s"
summary: "Laufende Shopify-Arbeit für Lineargent, eine Silberschmuck-Marke aus Vic bei Barcelona: Searchspring-Raster für Kollektionen und Suche, Beacon-2.0-Tracking, ein Google-Tag-Loader, der 15 Sekunden zu spät kam und jetzt bei 2,9 s lädt, und 1.773 interne Links in 114 Kollektionen neu geschrieben."
brandSummary: "Lineargent ist eine Marke für Silberschmuck aus Vic bei Barcelona: Schmuck, in Barcelona entworfen und seit 1992 verkauft."
brandDescription: "Die Kollektionen von Lineargent umfassen Ohrringe, Ringe, Halsketten und Armbänder aus Silber, von Eheringen bis zu Stücken mit Zirkonia, mit kostenlosem Versand in 24–48 Stunden ab 50 €."
image: /source/desktop/lineargent-desktop.webp
mobileImage: /source/mobile/lineargent-mobile.webp
liveUrl: https://lineargent.com/
tags:
  - "Laufende Betreuung"
  - "Suche & Merchandising"
  - "Prestige-Theme"
challenge: "Lineargent betreibt ein angepasstes Prestige-Theme, einen Katalog mit Hunderten Stücken und ein externes Tool für Suche und Merchandising. Der Shop musste weiter verkaufen, während Suche, Kollektionsseiten, Tracking und Tag-Ladevorgang überarbeitet wurden."
scope:
  - "Kollektionen und Suche über die Searchspring-API betreiben und die Integration betreuen."
  - "Das Searchspring-Tracking auf Beacon 2.0 umstellen."
  - "Herausfinden, warum Google-Tags zu spät luden, und das beheben."
  - "Die internen Links in den SEO-Texten der Kollektionen korrigieren."
solution:
  - "Kollektionsseiten und Suche auf der Searchspring-API gebaut: Raster, Filter, Sortierung und Paginierung werden aus deren Daten gerendert, dazu ein Filter nach Steinfarbe, und der Kollektionsname geht zusammen mit der ID in die Anfrage, damit Athos-Kampagnen und angepinnte Produkte greifen."
  - "Das Searchspring-Tracking auf Beacon 2.0 umgestellt: ein gemeinsamer Tracker, Identitäts-Cookies ab der ersten Seite und Events für Render, Impression, Klick und In den Warenkorb aus Suche, Kollektionen, Autocomplete (einmal pro abgeschlossener Anfrage) sowie den Related- und Cross-Sell-Blöcken. Der alte Beacon-1.0-Code wurde entfernt. Empfehlungen laufen über Athos statt LimeSpot."
  - "Den Google-Tag und GTM, die rund 15 Sekunden zu spät luden, auf den Geschwindigkeits-Optimierer des Themes zurückgeführt: Er schrieb Shopifys load_feature in ein verzögertes Skript um, sodass Stape GTM erst nach dem ersten Scrollen oder 6 Sekunden nach dem Laden einfügte. Der Fix setzt das Cookiebot-Skript und den Google-Tag an den Anfang des Heads. Google Ads hatte den Tag auf 243 URLs als nicht korrekt platziert markiert."
  - "1.773 interne Links in den SEO-Texten von 114 Kollektionen und ihren EN/FR-Übersetzungen über die Admin-API neu geschrieben, mit Probelauf, Backup vor jedem Schreiben und einem Rollback, der parallele Änderungen nicht überschreibt."
  - "Die Kollektionsseiten an den Daten ausgerichtet: Breadcrumbs aus einem Kollektions-Metafeld, eine Tab-Leiste aus Unterkollektionen mit Scroll-Pfeilen, die unter der Kopfzeile haftet, und die Badges „Letzte Stücke“ und „Schnell weg“ aus Produktdaten."
  - "Black-Friday-Preise gebaut: Solange ein Schalter aktiv ist, zeigt ein Produkt mit Rabatt-Prozentsatz den reduzierten Preis, den durchgestrichenen Preis und ein Badge überall, wo ein Preis steht, von der Produktseite bis zum Warenkorb."
outcome:
  - "Der GTM-Loader der Startseite kam nach dem Rollout im Live-Shop bei 2,9 s, vorher bei 15,4 s; Cookiebot lädt einmal, im Head."
  - "Der wiederholte Probelauf zeigte 0 offene interne Links in den 114 Kollektionen."
  - "Vom Kunden während des ersten Vertrags auf Upwork mit 5,0 bewertet."
  - "Die Zusammenarbeit läuft in einem zweiten Vertrag weiter."
stack:
  - "Shopify"
  - "Prestige-Theme"
  - "Liquid"
  - "JavaScript"
  - "Searchspring (Athos Commerce)"
  - "Beacon 2.0"
  - "Admin-API"
screenshotCaptions:
  - "Die Startseite auf dem angepassten Prestige-Theme."
  - "Eine Produktseite mit ähnlichen Produkten."
  - "Kollektions-Breadcrumbs und Searchspring-Suche."
review:
  quote: "Kiril is a good professional, he works efficiently and solves the problems delivering accurate job on time and welldone."
  rating: 5
---
