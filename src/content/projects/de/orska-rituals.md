---
order: 1
title: Orska Rituals
seoTitle: "Orska Rituals: Shopify-B2B-Shop, Worker und Dropship"
summary: "Ein Shopify-Shop für eine professionelle Hautpflegemarke, der Gäste und Kosmetik-Profis in einem Shop bedient: eigene Preise je Stufe, ein Mitgliederbereich, Schnellbestellung, und freigegebene Profis bestellen im Großhandel, ohne dass das Team etwas von Hand einrichtet."
brandSummary: Orska Rituals ist eine professionelle Hautpflegemarke für Kosmetikstudios und Spas mit anpassbaren Protokollen und Behandlungsprodukten, einer Retail-Linie und einem Partnerprogramm für den Großhandel.
brandDescription: Orska Rituals verbindet intelligente Hautkorrektur mit anpassbaren Protokollen für professionelle Kosmetikerinnen und Kosmetiker. Die Marke bedient Behandlungsräume sowie Hotels und Resorts, verkauft über ein Partnerprogramm an Profis und lässt allen anderen den Retail-Zugang offen.
image: /source/desktop/orska-rituals-desktop.webp
mobileImage: /source/mobile/orska-rituals-mobile.webp
liveUrl: https://orskarituals.com/
tags:
  - "B2B"
  - "Shopify Functions"
  - "Cloudflare Workers"
challenge: "Die Marke hatte einen HTML-Prototyp und brauchte daraus einen echten Shopify-Shop für mehrere Zielgruppen: Gäste, freigegebene Profis und Partner auf höheren Stufen, jeweils mit anderen Preisen, Werkzeugen und Inhalten. Die Regeln jeder Stufe mussten in Warenkorb und Checkout gelten, nicht nur in der Oberfläche."
scope:
  - "Den HTML-Prototyp in ein Shopify-Theme umsetzen: Home, Shop, Produktseiten, Journal, FAQ, Quick Order und den Pro Vault."
  - "Preise, Werkzeuge und Inhalte nach Zugriffsstufe freischalten."
  - "Beim Freigeben eines Profis automatisch ein B2B-Unternehmen anlegen."
  - "Kaufregeln im Warenkorb durchsetzen, darunter das Discovery-Kit-Limit und die Mindestbestellung im Großhandel."
  - "Das Backend für Dropship-Bestellungen bauen, die Partner für ihre eigenen Kunden aufgeben."
solution:
  - "Das Theme nach dem Prototyp gebaut: 71 Sections, 167 Blöcke und 14 Templates. Die Produktseiten lesen die Akkordeons Key Ingredients, How To Use und Curated For aus Metafeldern, dazu ein Galerie-Overlay, das die Kerndateien von Horizon unangetastet lässt, Breadcrumbs und Organization-Markup."
  - "Jedem Kunden über Tags eine Zugriffsstufe gegeben (Gast, freigegeben, bestellt, committed), in einem Snippet. Pro Vault, Quick Order und die Kaufbuttons lesen sie, und Artikel nur für Profis bleiben für Gäste verborgen."
  - "Den Pro Vault auf Metaobjekten gebaut: Playlists, eine Medienbibliothek mit Filtern und Paginierung und eine Trainingsbibliothek."
  - "Einen Cloudflare Worker geschrieben, der aus einem freigegebenen Profi ein natives B2B-Unternehmen macht: Er prüft den Webhook, liest den Kunden über die Admin-API, legt Unternehmen und Kontakt an und weist die Rolle Location admin und den Hauptkontakt zu. Der Haken: Shopify hängt Markt und Katalog erst an eine Location, wenn ein Kontakt eine Bestellrolle hat. Am Live-Auftrag zeigte sich auch, warum Etiketten nicht druckten, und der Fix setzt den Firmennamen dorthin, wo das Etikett ihn erwartet."
  - "Zwei Warenkorb-Validierungs-Functions geschrieben: eine Mindestbestellung im Großhandel und ein Discovery-Kit-Limit von einem pro Konto und zwei pro Bestellung. Das Theme mit dem Locksmith-Schloss, den Helium-Tags und der Bestelllimit-App des Kunden abgeglichen, damit Produktseite und Checkout über denselben Kunden nie verschiedener Meinung sind."
  - "Das Dropship-Backend als zweiten Worker hinter einem App Proxy gebaut: signierte Anfrage, Identität nur vom angemeldeten Kunden, ein Kundenbuch in einem Kunden-Metafeld und eine Bestellung als Entwurf an den Kunden des Partners, mit Preisen und Versand aus draftOrderCalculate, sodass die Rechnung zum Panel passt. Die Währung ist auf USD festgelegt."
  - "„Ship to any address“ bei den B2B-Standorten von Partnern unterhalb der Stufe committed abgeschaltet, mit den alten Werten für einen Rollback."
outcome:
  - "Ein Shop statt zwei: Gäste, freigegebene Profis und höhere Stufen sehen jeweils ihre eigenen Preise und Werkzeuge."
  - "Wird ein Profi freigegeben, kann er zu B2B-Konditionen bestellen, ohne dass das Team etwas von Hand einrichtet."
  - "Das Limit für das Discovery Kit greift im Warenkorb, Kunden können es nicht umgehen."
  - "Dropship-Bestellungen sind seit dem 26. Oktober 2026 in den echten Bestellungen als solche markiert."
stack:
  - "Shopify"
  - "Horizon-Theme"
  - "Liquid"
  - "Shopify B2B"
  - "Shopify Functions"
  - "Cloudflare Workers"
  - "App Proxy"
  - "Metaobjekte"
screenshotCaptions:
  - "Startseite nach dem HTML-Prototyp neu aufgebaut."
  - "Preise und Quick Order hängen von der Zugriffsstufe ab."
  - "Produktdetails und der Pro Vault aus Daten pro Produkt."
review:
  quote: "Kiril did an amazing job building our custom shopify. We used Claude to design the site and Kiril implemented the design perfectly. We did have a lot of complexities. We are a B2B skincare product website with some custom javascript and also have workers running off site on Cloudflare that help our shopify store run the way we want. I will continue to work with him. Great job!"
  rating: 5
---
