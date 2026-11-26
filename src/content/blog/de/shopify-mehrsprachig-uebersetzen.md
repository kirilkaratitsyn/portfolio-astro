---
publishedAt: 2026-11-15
updatedAt: 2026-11-26
title: "Shopify mehrsprachig: Shop übersetzen, ohne dass eine halbfertige Sprache live geht"
seoTitle: "Shopify mehrsprachig: Shop übersetzen mit Translate & Adapt"
date: 15. November 2026
readingTime: 7 Min
excerpt: "Shopify mehrsprachig einrichten und den Shop übersetzen: Voraussetzungen, Translate & Adapt, automatische Übersetzung, URLs und hreflang, Grenzen."
image: /og/projects/bazar-bizar.jpg
topic: build
tags:
  - Shopify
  - Sprachen
  - International
---

Einen Shopify-Shop mehrsprachig zu machen, braucht keinen zweiten Shop: Sie fügen eine Sprache hinzu, übersetzen die Inhalte und veröffentlichen sie. Jede Sprache bekommt eigene Adressen, etwa `ihr-shop.de/en`. Die Arbeit steckt in den Übersetzungen und in den Stellen, die Shopify nicht übersetzt. Quelle ist die Shopify-Hilfe, Stand November 2026.

## Was Ihr Shop dafür braucht

Laut Shopify-Hilfe müssen diese Punkte erfüllt sein:

- **Plan:** In den Plänen Basic, Grow und Advanced verkaufen Sie in bis zu 20 Sprachen, mit Shopify Plus in bis zu 30.
- **Theme:** Das aktive Theme muss mehrere Sprachen unterstützen. Alle kostenlosen Themes von Shopify tun das. Bei einem gekauften Theme fragen Sie den Hersteller, ein älteres Theme braucht unter Umständen ein Update.
- **Sprachauswahl:** Die meisten Shopify-Themes haben einen Sprachumschalter, den Sie in den Theme-Einstellungen aktivieren.
- **Übersetzungen:** Sie kommen aus der App **Translate & Adapt** von Shopify, aus einer kompatiblen Übersetzungs-App oder aus einer CSV-Datei.

Bei einem individuell entwickelten Theme kommt ein technischer Punkt dazu: Interne Links müssen über das Liquid-Objekt `routes` gebaut sein, nicht fest als `/cart`. Sonst springt der Kunde beim Klick auf den Warenkorb zurück in die Standardsprache.

Um die Geschwindigkeit müssen Sie sich nicht sorgen: Übersetzte Inhalte werden laut Hilfe dynamisch ausgeliefert, zusätzliche Sprachen bremsen den Shop nicht.

## Sprache hinzufügen und veröffentlichen

Der Weg im Admin (Bezeichnungen wie in der englischen Hilfe): **Settings > Languages > Add language** (Einstellungen > Sprachen). Sie wählen die Sprache und die Domain, auf der sie erscheinen soll. Dabei wird Translate & Adapt automatisch installiert.

Hinzufügen und veröffentlichen sind zwei Schritte. Eine hinzugefügte Sprache sehen Kunden erst, wenn Sie in der Sprachtabelle auf **Publish** klicken. Das ist der Schutz vor halbfertigen Übersetzungen:

- Veröffentlichen Sie eine Sprache ohne eigene Übersetzungen, zeigt der Shop nur die Standardtexte von Theme und Checkout in dieser Sprache.
- Alles andere erscheint in Ihrer Standardsprache. Das Ergebnis ist eine englische Navigation über deutschen Produkttexten.

Übersetzen Sie also zuerst und veröffentlichen Sie danach.

## Translate & Adapt: von Hand oder automatisch

In der App übersetzen Sie Produkte, Kollektionen, Seiten, Blogartikel, Richtlinien und Theme-Texte. Es gibt zwei Wege.

**Von Hand.** Sie tragen jeden Text selbst ein, in der App oder direkt am Inhalt über **More actions > Localize**. So bestimmen Sie den Wortlaut, können Bilder, Videos und Logos je Sprache tauschen und URL-Handles übersetzen.

**Automatisch.** Shopify übersetzt mit KI. Was Sie nutzen können, hängt vom Land des Shops ab:

- Shops in Deutschland, Österreich und der Schweiz (und einigen weiteren Ländern) übersetzen **bis zu 8 Sprachen** automatisch. **Translate now** übersetzt einmalig, **Auto-sync** aktualisiert danach wöchentlich.
- In allen anderen Ländern sind es 2 Sprachen, ohne Auto-sync.

Vier Regeln aus der Hilfe, die man vorher kennen sollte:

- Die automatische Übersetzung ergänzt fehlende Texte und aktualisiert veraltete maschinelle Übersetzungen. **Von Hand geänderte Übersetzungen fasst sie nicht an.**
- Eine automatisch übersetzte Sprache lässt sich nicht gegen eine andere tauschen. Auch das Entfernen einer Sprache gibt den Platz nicht frei.
- **Rechtstexte werden nicht automatisch übersetzt.** Shopify empfiehlt dafür einen professionellen Übersetzer.
- Prüfen Sie automatische Übersetzungen, bevor Sie die Sprache veröffentlichen. Das empfiehlt die Hilfe ausdrücklich.

Auto-sync startet nicht sofort: Die erste Übersetzung läuft zum nächsten wöchentlichen Termin, also bis zu eine Woche später. Wer schneller sein will, klickt zusätzlich auf Translate now.

## Was sich nicht übersetzen lässt

Hier bleiben in mehrsprachigen Shops die Lücken. Laut Hilfe:

- **Tags** (Produkt-, Artikel- und Blog-Tags) lassen sich nicht übersetzen. Zeigt Ihr Theme Tags als Filter oder Label an, stehen sie in jeder Sprache gleich da.
- Translate & Adapt übersetzt keine **Kollektionsfilter**, keine Formulare der App Shopify Forms, keine Hinweise zu **manuellen Zahlungsarten** und keine Produktbilder.
- **Inhalte von Drittanbieter-Apps** erscheinen nur dann übersetzt, wenn die App Shopifys Übersetzungsschnittstelle nutzt. Bewertungen, Pop-ups oder Größentabellen aus Apps prüfen Sie deshalb einzeln.
- In übersetzten Adressen bleibt der feste Teil stehen: Aus `/products/stuhl` wird `/en/products/chair`, das Wort `products` ändert sich nicht.

Wie Filter und Tags zusammenhängen, steht in [Shopify Kollektionen und Filter](/de/blog/shopify-kollektionen-filter).

## Adressen, hreflang und Google

Für jede veröffentlichte Sprache legt Shopify eigene Adressen an, indem der Sprachcode an die Domain gehängt wird: `ihr-shop.de/en`, `ihr-shop.de/fr`. Alternativ liegt eine Sprache auf einer eigenen Domain oder Subdomain.

Shopify übernimmt laut Hilfe automatisch:

- **hreflang-Tags** für alle Sprachadressen,
- die Aufnahme aller veröffentlichten Sprachen in die **Sitemap**.

Ihre Aufgaben:

- **URL-Handles** übersetzen, wenn Sie das möchten. Die automatische Übersetzung lässt sie aus. Beim Anlegen eines übersetzten Handles erstellt Shopify eine Weiterleitung von der alten Adresse.
- **SEO-Titel und Beschreibung** prüfen. Stehen sie auf Standard, nimmt Shopify den übersetzten Produkttitel und die übersetzte Beschreibung. Haben Sie sie von Hand geschrieben, übersetzen Sie sie auch von Hand.
- **Links in Ihren Texten** prüfen. Ein Link in einer englischen Kollektionsbeschreibung, der auf die deutsche Adresse zeigt, wird nicht automatisch umgeschrieben (das ist eine Beobachtung aus meiner Arbeit, nicht aus der Hilfe).

Soll der Shop die Sprache des Browsers erkennen, aktivieren Sie unter **Online Store > Preferences > Automatic redirection** die Einstellung **Language**. Verkaufen Sie zugleich in mehrere Länder mit eigenen Währungen, gehört das Thema zu [Shopify Markets](/de/blog/shopify-markets-mehrere-laender). Mehr zur Suche: [Shopify SEO optimieren lassen](/de/blog/shopify-seo-optimieren-lassen).

## Checkout und E-Mails

Der Checkout erscheint in der Sprache, in der der Kunde im Shop unterwegs war. Shopify liefert dafür Übersetzungen in 49 Sprachen mit. Eigene Formulierungen im Checkout brauchen eine Übersetzungs-App oder den CSV-Import, siehe auch [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen).

Bestellmails gehen in der Sprache raus, in der bestellt wurde, sofern eine Übersetzung vorliegt. Sie pflegen sie unter **Settings > Notifications**: Mail öffnen, **Localize**, speichern, dann über **Preview** in jeder Sprache ansehen. Mehr dazu: [Shopify E-Mail-Benachrichtigungen](/de/blog/shopify-email-benachrichtigungen).

## Übersetzungen per CSV

Arbeiten Sie mit einem Übersetzungsbüro, ist die CSV-Datei der praktische Weg. Unter **Settings > Languages > Export** wählen Sie Sprache und Umfang, zum Beispiel nur unübersetzte oder nur veraltete Inhalte. Die Datei kommt per E-Mail. Die Übersetzung gehört in die Spalte **Translated content**, alle anderen Spalten bleiben unverändert.

Zwei Hinweise aus der Hilfe:

- Stellen Sie das Tabellenprogramm auf **Komma** als Trennzeichen, nicht auf Semikolon. Sonst verrutschen Spalten, deren HTML ein Semikolon enthält.
- Importierte Texte gelten als von Hand übersetzt. Die automatische Übersetzung überschreibt sie später nicht.

## Drei Fehler, die Übersetzungen kosten

- **Standardsprache wechseln.** Laut Hilfe werden dabei die vorhandenen Übersetzungen der Sprache gelöscht, auf die Sie wechseln, und sie werden nicht zum Shop-Inhalt. Exportieren Sie sie vorher als CSV.
- **Sprache löschen.** Das löscht alle Übersetzungen dieser Sprache endgültig. Zurückziehen heißt **Unpublish**: Die Sprache verschwindet für Kunden, die Texte bleiben.
- **Sprache zurückziehen ohne Weiterleitungen.** Die Adressen dieser Sprache liefern danach einen 404-Fehler. Die Hilfe rät zu Weiterleitungen, siehe [Weiterleitungen einrichten](/de/blog/shopify-migration-weiterleitungen).

Ändern Sie später Texte in der Standardsprache, markiert Shopify die Übersetzung als **Outdated**. Nach einem Theme-Update bleiben eigene Übersetzungen erhalten, geänderte Stellen sind ebenfalls als veraltet markiert.

## Checkliste vor der Veröffentlichung

1. Unterstützt das Theme mehrere Sprachen, und ist der Sprachumschalter aktiv?
2. Sind Navigation, Startseite, Produkte, Kollektionen und Seiten übersetzt?
3. Sind die Rechtstexte von einem Menschen übersetzt und geprüft?
4. Stimmen Checkout-Texte und Bestellmails in jeder Sprache?
5. Was zeigen Apps (Bewertungen, Pop-ups, Formulare) in der neuen Sprache?
6. Führen Links in Texten und Menüs in die richtige Sprache?
7. Sind Cookie-Banner und Datenschutzerklärung übersetzt? (Siehe [Shopify Cookie-Banner](/de/blog/shopify-cookie-banner-datenschutz).)
8. Eine Testbestellung in jeder Sprache, vom Produkt bis zur Bestellmail.

## Beispiele aus der Praxis

[Bazar Bizar](/de/projects/bazar-bizar), eine Interior-Marke aus Antwerpen und Bali, verkauft in 6 Sprachen und 53 Ländern. Mein Teil war nicht die Übersetzung, sondern die Storefront-Logik: Ein Skript fragt bei Shopify den Sprach- und Ländervorschlag für den Besucher ab und leitet ihn dorthin, bevor die Seite sichtbar ist. Eine manuelle Wahl des Besuchers wird nie überschrieben.

Bei [Lineargent](/de/projects/lineargent) habe ich 1.773 interne Links in den SEO-Texten von 114 Kollektionen und ihren englischen und französischen Übersetzungen neu geschrieben, mit Probelauf und Backup vor jedem Schreiben. Daher der Punkt mit den Links in der Checkliste.

## Wie ich es handhabe

Ich bin Entwickler, kein Übersetzer. Die Texte liefern Sie, ein Übersetzungsbüro oder die automatische Übersetzung. Ich prüfe, ob das Theme für mehrere Sprachen gebaut ist, richte Sprachumschalter und Weiterleitung ein, finde die Stellen, die in der neuen Sprache unübersetzt bleiben (feste Texte im Theme, Apps, Filter), und teste den Weg vom Produkt bis zur Bestellmail. Im Admin arbeite ich über ein Collaborator-Konto mit begrenzten Rechten.

## Häufige Fragen

**Wie übersetze ich meinen Shopify-Shop?** Sprache unter Settings > Languages hinzufügen, Inhalte in Translate & Adapt von Hand oder automatisch übersetzen und erst danach auf Publish klicken.

**Übersetzt Shopify automatisch?** Ja, mit KI über Translate & Adapt. Shops in Deutschland, Österreich und der Schweiz übersetzen laut Hilfe bis zu 8 Sprachen automatisch. Rechtstexte sind ausgenommen.

**Brauche ich für jede Sprache einen eigenen Shop?** Nein. Ein Shop trägt je nach Plan bis zu 20 oder 30 Sprachen.

**Brauche ich für Österreich und die Schweiz eine weitere Sprache?** Für deutschsprachige Kunden nicht. Abweichende Begriffe oder Hinweise je Land passen Sie in Translate & Adapt pro Markt an, ohne eine Sprache hinzuzufügen.

**Reicht die automatische Übersetzung?** Als Grundlage oft ja, aber prüfen Sie sie vor der Veröffentlichung. Rechtstexte übersetzt Shopify nicht automatisch.

**Schadet Mehrsprachigkeit dem Ranking?** Shopify setzt hreflang-Tags und Sitemap-Einträge automatisch. Ob eine Sprachversion rankt, hängt von ihren Inhalten ab. Versprechen kann das niemand.

**Kann ich eine Sprache wieder entfernen?** Ja. Ziehen Sie sie zuerst zurück (Unpublish) und richten Sie Weiterleitungen ein. Löschen entfernt die Übersetzungen endgültig.

## Zweite Sprache geplant oder schon live?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact): Ich sage Ihnen, was in jeder Sprache von außen auffällt. Für einen bestehenden Shop passt die [Shopify Betreuung](/de/services/shopify-betreuung), für einen neuen, der von Anfang an mehrsprachig sein soll, [Shopify-Shop erstellen lassen](/de/services/shopify-shop-erstellen-lassen).

**Weiterlesen:** [Shopify Markets: mehrere Länder](/de/blog/shopify-markets-mehrere-laender) · [Shopify E-Mail-Benachrichtigungen](/de/blog/shopify-email-benachrichtigungen) · [Shopify Domain verbinden](/de/blog/shopify-domain-verbinden)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
