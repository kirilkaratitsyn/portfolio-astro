---
order: 1
title: Orska Rituals
summary: "Ein Shopify-Store für eine professionelle Hautpflegemarke, umgesetzt nach einem HTML-Prototyp: Großhandelspreise für freigegebene Kosmetikerinnen und Kosmetiker, ein Pro Vault nur für Mitglieder, Quick Order und ein Limit für das Discovery Kit, das der Server durchsetzt."
brandSummary: Orska Rituals ist eine professionelle Hautpflegemarke für Kosmetikstudios und Spas mit anpassbaren Protokollen und Behandlungsprodukten, einer Retail-Linie und einem Partnerprogramm für den Großhandel.
brandDescription: Orska Rituals verbindet intelligente Hautkorrektur mit anpassbaren Protokollen für professionelle Kosmetikerinnen und Kosmetiker. Die Marke bedient Behandlungsräume sowie Hotels und Resorts, verkauft über ein Partnerprogramm an Profis und lässt allen anderen den Retail-Zugang offen.
image: /source/desktop/orska-rituals-desktop.webp
mobileImage: /source/mobile/orska-rituals-mobile.webp
liveUrl: https://orskarituals.com/
tags:
  - B2B
  - Shopify Functions
  - Custom Theme
challenge: "Die Marke hatte einen HTML-Prototyp und brauchte daraus einen echten Shopify-Store für zwei Zielgruppen: Retail-Besucher und freigegebene Profis, die andere Preise, Werkzeuge und Inhalte sehen. Großhandelsregeln, Pro Vault und das Limit für das Discovery Kit sollte die Plattform durchsetzen, statt sie nur in der Oberfläche zu verstecken."
scope:
  - "Den HTML-Prototyp in ein Shopify-Theme überführen: Startseite, Shop, Produktseiten, Journal, FAQ, Warenkorb und den Pro Vault."
  - "B2B einrichten: regionale Großhandelspreise, Quick Order für Profis und ein Unternehmen, das nach der Freigabe eines Profis automatisch angelegt wird."
  - Kaufregeln serverseitig durchsetzen, darunter das Limit für die Erstbestellung des Discovery Kits und die Mindestbestellregeln im Großhandel.
solution:
  - "Das Theme nach dem Prototyp gebaut, mit Produktseiten, die über Metafelder gesteuert werden: Die Akkordeons Key Ingredients, How To Use und Curated For lesen Daten pro Produkt, dazu eine Galerie mit Lightbox und Platz für Video."
  - Nicht angemeldeten Besuchern Retail-Preise und eine Partner-Login-Aufforderung gezeigt, nur für Profis gedachte Inhalte wie die Preise der chemischen Peelings verborgen und Quick Order ausschließlich angemeldeten Profis angezeigt.
  - Einen kleinen Cloudflare Worker geschrieben, der das Shopify-Unternehmen nach der Freigabe eines Profis anlegt, und Shopify Functions für die Warenkorbprüfung eingerichtet.
  - "Das Discovery Kit in drei Ebenen begrenzt: im Theme, durch eine Prüfung auf dem Server und durch eine Zugriffsregel, sodass niemand außerhalb des Programms es kaufen kann."
outcome:
  - Retail-Besucher und freigegebene Profis sehen im selben Storefront unterschiedliche Preise und Werkzeuge.
  - Ein Profi erhält direkt nach der Freigabe ein Großhandelskonto, ganz ohne manuelle Einrichtung.
  - Das Limit für das Discovery Kit hält, auch wenn jemand die Oberfläche umgeht.
  - Das Team pflegt Produktdetails in Shopify statt im Code.
stack:
  - Shopify
  - Liquid
  - Shopify B2B
  - Shopify Functions
  - Cloudflare Workers
  - Metafelder
screenshotCaptions:
  - Startseite, nach dem HTML-Prototyp neu aufgebaut.
  - Großhandelspreise und Quick Order nur für freigegebene Profis.
  - Produktdetails und Pro Vault, gesteuert über Daten pro Produkt.
---
