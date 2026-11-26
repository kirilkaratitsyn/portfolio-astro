---
publishedAt: 2026-11-07
updatedAt: 2026-11-11
title: "Shopify-Entwickler wechseln: So übernimmt ein neuer Entwickler Ihren Shop, ohne dass etwas verloren geht"
seoTitle: "Shopify-Entwickler oder Agentur wechseln: Übergabe, Zugang"
date: 7. November 2026
readingTime: 6 Min
excerpt: "Shopify-Entwickler oder Agentur wechseln: was Sie vor der Übergabe sichern, wie der Entwickler-Zugang sicher läuft und wie Sie den alten Zugang beenden."
image: /og/projects/lineargent.jpg
topic: support
tags:
  - Shopify
  - Entwickler
  - Übergabe
---

Sie wollen Ihren Shopify-Entwickler wechseln, weil der bisherige nicht mehr antwortet, ausgelastet ist oder die Zusammenarbeit nicht mehr passt. Klären Sie zuerst, was schon da ist: Wer hat Zugang, wo liegt der Code, welche Apps hängen am Theme?

## Schritt 1: Bestandsaufnahme, bevor Sie jemanden einladen

Das klären Sie in einer Stunde, auch ohne technisches Wissen:

- **Wer hat heute Zugang?** In Shopify unter „Einstellungen > Benutzer“ (je nach Konto „Benutzer und Berechtigungen“). Dort stehen Mitarbeiter und Collaborator, also Shopify-Partner mit Zugriff. Ein Filter zeigt laut Shopify-Hilfe alle Collaborator-Konten.
- **Welche Apps sind installiert?** Unter „Einstellungen > Apps“.
- **Welches Theme ist veröffentlicht, und gibt es Entwürfe?** Unter „Onlineshop > Themes“. Dort liegen auch ältere Versionen des bisherigen Entwicklers.
- **Wem gehören Domain und Shop?** Shop-Eigentümer sind Sie, das Konto läuft auf Ihre E-Mail-Adresse. Prüfen Sie, ob Domain und Zusatzdienste auf Ihren Namen laufen oder auf den der Agentur.

Notieren Sie das in Stichpunkten für den neuen Entwickler.

## Schritt 2: Sichern, was sich sichern lässt

- **Theme-Kopie.** Eine Kopie („Duplicate“) ist laut Shopify-Hilfe der empfohlene Weg, vor Änderungen einen Stand zu sichern. Sie sichert nur das Theme: Ein Theme-Download enthält laut Shopify keine Produkte, Kollektionen, Menüs, Seiten, Blogbeiträge oder Dateien.
- **Produkte.** Ein CSV-Export sichert die Produktdaten, siehe [Shopify-Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv).
- **Daten aus Apps.** Manche Apps speichern Daten, die sich laut Shopify-Hilfe nach der Deinstallation nicht wiederherstellen lassen. Exportieren Sie vorher, was Sie brauchen.
- **Zugangsdaten außerhalb von Shopify.** E-Mail-Dienste, Domain-Anbieter, Zahlungsanbieter. Diese Logins gehören Ihnen.

## Schritt 3: Zugang für den neuen Entwickler, ohne Ihr Passwort

Geben Sie niemandem Ihr eigenes Login. Shopify hat dafür **Collaborator-Konten**. So läuft es laut Shopify-Hilfe:

- Der Entwickler braucht ein Shopify-Partner-Konto und stellt eine Zugriffsanfrage. Dafür geben Sie ihm einen **Anfragecode**. Sie können jederzeit einen neuen Code erzeugen, dann gilt der alte nicht mehr.
- Sie sehen die Anfrage in der Benutzerverwaltung und entscheiden, ob Sie annehmen.
- Sie legen die **Berechtigungen** fest. Shopify rät, nur die zu geben, bei denen Sie sich wohlfühlen. Der Entwickler sollte erklären können, wofür er eine Berechtigung braucht.
- Bei einem einzelnen Shop ist die Rolle „Administrator“ für Collaborator nicht vergebbar. Die Eigentümerschaft lässt sich nicht auf einen Collaborator übertragen.
- Der Partner muss die Zwei-Faktor-Anmeldung aktiviert haben, sonst kann er sich nicht einloggen.
- Collaborator zählen nicht zur Benutzergrenze Ihres Tarifs.
- Berechtigungen für einzelne Apps und Vertriebskanäle lassen sich getrennt festlegen.

Kundendaten und Zahlungsdaten gehören laut Shopify-Hilfe zu den „sensiblen Berechtigungen“, die nur an die vertrauenswürdigsten Nutzer gehen sollten. Für Theme-Arbeit brauchen Entwickler sie in der Regel nicht.

## Schritt 4: Den alten Zugang beenden

Das ist der wichtigste Sicherheitsschritt. Prüfen Sie nach der Übergabe:

- **Alter Collaborator:** Laut Shopify-Hilfe entfernen Sie das Konto in der Benutzerverwaltung. Das ist endgültig, für neuen Zugang ist eine neue Anfrage nötig. Ohne Entfernen läuft der Zugang ab, wenn der Collaborator sich 90 Tage nicht eingeloggt hat.
- **Alte Mitarbeiter-Konten:** Hat die Agentur ein normales Mitarbeiter-Konto bekommen, löschen oder deaktivieren Sie es.
- **Alter Anfragecode:** Erzeugen Sie einen neuen Code.
- **Passwörter:** Wurde ein Passwort weitergegeben, ändern Sie es und aktivieren Sie die Zwei-Faktor-Anmeldung.
- **Apps und Webhooks:** Prüfen Sie unter „Einstellungen > Apps“, welche Apps noch zum alten Entwickler gehören (zum Beispiel selbst gebaute Apps) und ob Sie sie noch brauchen.

Namen und Aktionen eines entfernten Collaborators bleiben laut Shopify im Aktivitätsprotokoll und in der Bestell-Timeline sichtbar.

## Schritt 5: Audit vor dem ersten Umbau

Wer sofort umbaut, ändert etwas, das er noch nicht versteht. Besser ist ein Audit:

1. **Theme prüfen:** Welche Anpassungen stecken im Code, welche in den Einstellungen? Was ist veraltet oder doppelt?
2. **Apps prüfen:** Was ist installiert, was wird genutzt, was hängt im Theme? Die Infoseite zeigt laut Shopify-Hilfe bei Drittanbieter-Apps, welche Bereiche sie lesen oder ändern dürfen und ob Berechtigungen seit 30 Tagen ungenutzt sind. Apps von Shopify selbst sind dort nicht aufgeführt.
3. **Kosten prüfen:** Läuft eine App-Abrechnung außerhalb von Shopify? Laut Hilfe endet sie nicht mit der Deinstallation.
4. **Probleme auflisten:** Was ist kaputt, was nur unschön, was riskant? Das ergibt einen Maßnahmenplan mit Reihenfolge.

Das Ergebnis ist ein kurzes Dokument, das Sie verstehen. Daraus entsteht das Angebot.

## Worauf Sie beim Übernahme-Angebot achten

- **Start mit einem Audit**, nicht mit einem Komplett-Neubau.
- **Zugang über Collaborator-Anfrage.** Wer Ihr Login verlangt, ist ein Warnsignal.
- **Kleine, einzeln prüfbare Schritte** mit Vorschau in einem unveröffentlichten Theme. Der Live-Shop verkauft weiter.
- **Dokumentation:** Was wurde geändert, wo, warum?
- **Ehrlichkeit über Altlasten:** Ist Code schwer zu pflegen, sagt der Entwickler das und nennt Optionen.
- **Festpreis oder klar abgegrenzte Meilensteine nach dem Briefing.** Wer ohne Blick in den Shop eine Summe nennt, kennt ihn nicht.
- **Klarheit nach der Übergabe:** Wer kümmert sich um Updates und kleine Korrekturen? Siehe [Shopify Wartung und Betreuung](/de/blog/shopify-wartung-betreuung).

Ob Freelancer oder Agentur besser passt, steht in [Shopify-Freelancer oder Agentur](/de/blog/shopify-freelancer-oder-agentur). Ich bin selbst Freelancer, lesen Sie die Abwägung mit dieser Einordnung.

## Ein Beispiel aus der Praxis: Lineargent

[Lineargent](/de/projects/lineargent), eine Marke für Silberschmuck aus der Nähe von Barcelona, nutzt ein angepasstes Prestige-Theme mit Hunderten Produkten und einem externen Tool für Suche und Merchandising. Ich arbeite dort in kleinen Schritten, die sich jeweils im Live-Shop prüfen lassen.

Ein Beispiel: Ein Google-Tag-Loader kam 15 Sekunden zu spät. Die Ursache lag im Geschwindigkeits-Optimierer des Themes und wurde in einer Änderung behoben. Vorher wurden die Live-Dateien mit einem Backup verglichen, weil auch das Design-Team des Kunden das Live-Theme bearbeitet.

Der Kunde hat das Projekt auf Upwork mit 5,0 bewertet, die Zusammenarbeit läuft mit einem zweiten Auftrag weiter. Das Beispiel zeigt das Vorgehen „erst prüfen, dann in kleinen Schritten ändern“, keine Übernahme von einem Vorgänger.

## Häufige Fragen

**Muss ich meinen alten Entwickler um Erlaubnis fragen?** Nein. Der Shop gehört Ihnen, Sie entscheiden, wer Zugang hat. Ein Gespräch lohnt trotzdem, wegen Zugangsdaten außerhalb von Shopify und offener Fragen zum Code. Rechtliche Fragen, etwa zu Nutzungsrechten am Code, klären Sie mit einer Rechtsberatung und dem Vertrag.

**Gilt das auch, wenn ich die Agentur wechsle?** Ja. Agenturen arbeiten in der Regel ebenfalls über Collaborator-Konten, die Schritte sind dieselben.

**Wie bekommt der neue Shopify-Entwickler Zugang?** Über eine Zugriffsanfrage aus seinem Partner-Konto, mit dem Anfragecode, den Sie ihm geben. Ihr Passwort braucht er nicht.

**Wie finde ich einen neuen Shopify-Entwickler?** Über das Shopify Partner Directory, Empfehlungen oder Freelancer-Plattformen. Welche Fragen Sie jedem Anbieter stellen: [Shopify-Freelancer oder Agentur](/de/blog/shopify-freelancer-oder-agentur).

**Kann der neue Entwickler mit meinem Shop-Login arbeiten?** Technisch ja, empfohlen ist es nicht. Der Collaborator-Zugang ist begrenzt, nachvollziehbar und jederzeit entfernbar.

**Was, wenn der alte Entwickler nicht mehr antwortet?** Als Shop-Eigentümer entfernen Sie Collaborator-Konten selbst und ändern den Anfragecode. Eigene Apps oder Code-Dokumentation bekommen Sie nur, soweit sie im Shop liegen.

**Geht dabei etwas verloren?** Ein Wechsel der Zugänge ändert nichts an Produkten, Bestellungen und Kunden. Verlust droht durch voreiliges Löschen von Apps oder Themes. Deshalb zuerst sichern.

**Was kostet eine Übernahme?** Das hängt vom Zustand des Shops ab. Bei mir gibt es nach dem Briefing und einem ersten Blick in den Shop ein Angebot zum Festpreis.

## Soll ich mir Ihren Shop ansehen?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich sage Ihnen, wo bei einer Übergabe die Risiken liegen. Für die laufende Betreuung: [Shopify-Betreuung](/de/services/shopify-betreuung) mit klarem Umfang und Festpreis nach dem Briefing.

**Weiterlesen:** [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) · [Shopify-Shop optimieren lassen](/de/blog/shopify-shop-optimieren-lassen) · [Shopify-Relaunch lassen](/de/blog/shopify-relaunch-theme-wechsel) · [Shopify-App entwickeln lassen](/de/blog/shopify-app-entwickeln-lassen) · [Shopify Beratung: wann sie sich lohnt](/de/blog/shopify-beratung)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
