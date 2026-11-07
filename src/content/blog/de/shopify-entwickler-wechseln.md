---
publishedAt: 2026-11-07
title: "Shopify-Entwickler wechseln: So übernimmt ein neuer Entwickler Ihren Shop, ohne dass etwas verloren geht"
seoTitle: "Shopify-Entwickler wechseln: Übergabe, Zugänge, Audit"
date: 7. November 2026
readingTime: 7 Min
excerpt: Der bisherige Entwickler ist weg, zu teuer oder nicht mehr erreichbar. Was Sie vor der Übergabe sichern, wie der neue Zugang sicher läuft, wie Sie den alten beenden und woran Sie ein gutes Übernahme-Angebot erkennen.
image: /og/projects/lineargent.jpg
topic: support
tags:
  - Shopify
  - Entwickler
  - Übergabe
---

Der Entwickler, der Ihren Shop gebaut hat, antwortet nicht mehr, ist ausgelastet oder die Zusammenarbeit passt nicht mehr. Die Frage, die dann bleibt, ist selten die nach dem neuen Namen, sondern: Was passiert mit dem, was schon da ist? Wer hat Zugang, wo liegt der Code, welche Apps hängen am Theme? Dieser Artikel zeigt, was Sie vor einer Übergabe sichern, wie der neue Entwickler sicher Zugang bekommt, wie Sie den alten Zugang beenden und woran Sie ein gutes Angebot für die Übernahme erkennen.

## Schritt 1: Bestandsaufnahme, bevor Sie jemanden einladen

Eine Übergabe ist leichter, wenn Sie wissen, was es gibt. Das lässt sich in einer Stunde klären, auch ohne technisches Wissen:

- **Wer hat heute Zugang?** In Shopify unter „Einstellungen > Benutzer“ (je nach Konto „Benutzer und Berechtigungen“). Dort stehen Mitarbeiter und Collaborator, also Shopify-Partner, denen Sie Zugriff gegeben haben. Eine Filteransicht zeigt laut Shopify-Hilfe alle Collaborator-Konten.
- **Welche Apps sind installiert?** Unter „Einstellungen > Apps“. Jede App hat eine Infoseite mit Abrechnung, Berechtigungen und Verlauf.
- **Welches Theme ist veröffentlicht, und gibt es Entwürfe?** Unter „Onlineshop > Themes“. Dort liegen auch ältere Versionen, die der bisherige Entwickler hinterlassen hat.
- **Wem gehören Domain und Shop?** Der Shop-Eigentümer sind Sie, das Konto läuft auf Ihre E-Mail-Adresse. Bei Domain und Hosting von Zusatzdiensten lohnt der Blick: Läuft die Domain auf Ihren Namen oder auf den der Agentur? Das ist eine praktische Empfehlung, keine Aussage aus der Shopify-Hilfe.

Schreiben Sie das auf, auch wenn es nur Stichpunkte sind. Mit dieser Liste kann der neue Entwickler gezielt fragen, statt zu raten.

## Schritt 2: Sichern, was sich sichern lässt

- **Theme-Kopie.** Eine Kopie („Duplicate“) ist laut Shopify-Hilfe der empfohlene Weg, vor Änderungen am Theme einen Stand zu sichern. Die Kopie sichert das Theme, nicht den ganzen Shop: Ein Theme-Download enthält laut Shopify keine Produkte, Kollektionen, Menüs, Seiten, Blogbeiträge oder Dateien.
- **Produkte.** Ein CSV-Export sichert Produktdaten, wie in [Shopify-Produkte per CSV importieren](/de/blog/shopify-produkte-importieren-csv) beschrieben.
- **Daten aus Apps.** Manche Apps speichern Daten, die sich nach einer Deinstallation nicht wiederherstellen lassen. Exportieren Sie, was Sie brauchen, bevor eine App entfernt wird. Das steht in der Shopify-Hilfe zum Deinstallieren von Apps.
- **Zugangsdaten außerhalb von Shopify.** E-Mail-Dienste, Domain-Anbieter, Zahlungsanbieter. Diese Logins gehören Ihnen und sollten bei Ihnen liegen.

## Schritt 3: Zugang für den neuen Entwickler, ohne Ihr Passwort

Geben Sie niemandem Ihr eigenes Login. Shopify hat dafür den Weg über **Collaborator-Konten**. So läuft er laut Shopify-Hilfe:

- Der Entwickler braucht ein Shopify-Partner-Konto und stellt eine Zugriffsanfrage für Ihren Shop. Dafür geben Sie ihm einen **Anfragecode**. Nur wer den Code kennt, kann eine Anfrage senden. Sie können jederzeit einen neuen Code erzeugen, dann funktioniert der alte nicht mehr.
- Sie sehen die Anfrage in der Benutzerverwaltung, samt einigen Angaben zum Partner (zum Beispiel seit wann das Partner-Konto besteht), und entscheiden, ob Sie annehmen.
- Sie legen fest, welche **Berechtigungen** der Collaborator bekommt. Shopify rät, nur die zu geben, bei denen Sie sich wohlfühlen. Wenn der Entwickler eine Berechtigung verlangt, darf er erklären, wofür. Bei einem einzelnen Shop ist die Rolle „Administrator“ für Collaborator nicht vergebbar, die Eigentümerschaft lässt sich auch nicht auf einen Collaborator übertragen.
- Der Partner muss die Zwei-Faktor-Anmeldung aktiviert haben, sonst kann er sich nicht einloggen.
- Collaborator zählen nicht zur Benutzergrenze Ihres Tarifs.
- Berechtigungen für bestimmte Apps und Vertriebskanäle lassen sich getrennt festlegen.

Heikle Daten wie Kundendaten oder Zahlungsdaten gehören laut Shopify-Hilfe zu den „sensiblen Berechtigungen“, die nur an die vertrauenswürdigsten Nutzer gehen sollten. Für Theme-Arbeit brauchen Entwickler sie in der Regel nicht. Fragen Sie im Zweifel nach dem Grund.

## Schritt 4: Den alten Zugang beenden

Das vergessen viele, und es ist der wichtigste Sicherheitsschritt. Prüfen Sie nach der Übergabe:

- **Alter Collaborator:** Laut Shopify-Hilfe lässt sich das Konto in der Benutzerverwaltung entfernen. Das ist endgültig. Will jemand später wieder Zugang, muss er eine neue Anfrage stellen. Ohne Entfernen läuft der Zugang automatisch ab, wenn der Collaborator sich 90 Tage nicht eingeloggt hat.
- **Alte Mitarbeiter-Konten:** Hat die Agentur ein normales Mitarbeiter-Konto bekommen, löschen oder deaktivieren Sie es.
- **Alter Anfragecode:** Erzeugen Sie einen neuen Code, damit niemand mit einem alten Code eine neue Anfrage stellen kann.
- **Passwörter:** Wurde irgendwo ein Passwort weitergegeben, ändern Sie es und aktivieren Sie die Zwei-Faktor-Anmeldung.
- **Apps und Webhooks:** In „Einstellungen > Apps“ prüfen, welche Apps noch zum alten Entwickler gehören (zum Beispiel selbst gebaute Apps) und ob sie noch gebraucht werden.

Die Namen und Aktionen eines entfernten Collaborators bleiben laut Shopify im Aktivitätsprotokoll und in der Bestell-Timeline sichtbar. Das ist hilfreich, wenn später gefragt wird, wer etwas geändert hat.

## Schritt 5: Audit vor dem ersten Umbau

Ein neuer Entwickler, der sofort loslegt, ändert etwas, das er noch nicht versteht. Ein guter Start ist ein Audit:

1. **Theme prüfen:** Welche Anpassungen stecken im Code, welche in den Einstellungen? Was ist veraltet oder doppelt?
2. **Apps prüfen:** Was ist installiert, was wird genutzt, was hängt im Theme? Die Infoseite einer App zeigt laut Shopify-Hilfe bei Drittanbieter-Apps, welche Bereiche sie lesen oder ändern dürfen und ob Berechtigungen seit 30 Tagen ungenutzt sind. Apps von Shopify selbst werden dort nicht aufgeführt.
3. **Kosten prüfen:** Läuft eine App-Abrechnung außerhalb von Shopify? Laut Hilfe wird sie nicht durch die Deinstallation beendet.
4. **Probleme auflisten:** Was ist kaputt, was nur unschön, was riskant? Ein Maßnahmenplan mit Reihenfolge, nicht eine Wunschliste.

Das Ergebnis sollte ein kurzes Dokument sein, das Sie verstehen. Daraus entsteht das Angebot, nicht umgekehrt.

## Worauf Sie beim Übernahme-Angebot achten

- **Es beginnt mit einem Audit oder einer klar umrissenen Prüfung**, nicht mit einem Komplett-Neubau.
- **Zugang über Collaborator-Anfrage**, nicht über Ihr Passwort. Wer Ihr Login verlangt, ist ein Warnsignal.
- **Kleine, einzeln prüfbare Schritte** mit Vorschau in einem unveröffentlichten Theme. Der Live-Shop verkauft weiter.
- **Dokumentation:** Was wurde geändert, wo, warum? So kann der nächste Entwickler (oder Sie) nachvollziehen, was passiert ist.
- **Ehrlichkeit über Altlasten:** Wenn Code schwer zu pflegen ist, soll der Entwickler das sagen und Optionen nennen, statt es zu verstecken.
- **Ein Festpreis oder klar abgegrenzte Meilensteine nach dem Briefing.** Wer ohne Blick in den Shop eine Summe nennt, kennt ihn nicht.
- **Klarheit nach der Übergabe:** Wer kümmert sich um Updates und kleine Korrekturen? Siehe [Shopify Wartung und Betreuung](/de/blog/shopify-wartung-betreuung).

Ob ein Freelancer oder eine Agentur besser passt, hängt von Ihrem Shop ab: [Shopify-Freelancer oder Agentur](/de/blog/shopify-freelancer-oder-agentur) geht darauf ein. Ich bin selbst Freelancer, lesen Sie die Abwägung also mit dieser Einordnung.

## Ein Beispiel aus der Praxis: Lineargent

[Lineargent](/de/projects/lineargent), eine Marke für Silberschmuck aus der Nähe von Barcelona, nutzt ein angepasstes Prestige-Theme mit Hunderten Produkten und einem externen Tool für Suche und Merchandising. Bei dieser Zusammenarbeit habe ich das bestehende Theme zuerst geprüft und die Fixes dann in sieben kleinen Meilensteinen umgesetzt, jeder klein genug, um ihn im Live-Shop zu prüfen. Der Kunde hat das Projekt auf Upwork mit 5,0 bewertet, die Zusammenarbeit läuft mit einem zweiten Auftrag weiter. Das ist ein Beispiel für das Vorgehen „erst prüfen, dann in kleinen Schritten ändern“, nicht der Bericht einer Übernahme von einem Vorgänger.

## Häufige Fragen

**Muss ich meinen alten Entwickler um Erlaubnis fragen?** Der Shop gehört Ihnen, Sie entscheiden, wer Zugang hat. Zusätzlich lohnt ein freundliches Gespräch, schon wegen Zugangsdaten außerhalb von Shopify und offener Fragen zum Code. Rechtliche Fragen, etwa zu Nutzungsrechten am Code, klären Sie mit einer Rechtsberatung und dem Vertrag.

**Kann der neue Entwickler mit meinem Shop-Login arbeiten?** Technisch ja, empfohlen ist es nicht. Der Collaborator-Zugang ist begrenzt, nachvollziehbar und jederzeit entfernbar.

**Was, wenn der alte Entwickler nicht mehr antwortet?** Als Shop-Eigentümer können Sie Collaborator-Konten selbst entfernen und den Anfragecode ändern. Eigene Apps oder Code-Dokumentation bekommen Sie dann nur, soweit sie im Shop liegen.

**Geht dabei etwas verloren?** Ein Wechsel der Zugänge ändert nichts an Produkten, Bestellungen und Kunden. Verlust droht eher durch voreiliges Löschen von Apps oder Themes. Deshalb zuerst sichern.

**Was kostet eine Übernahme?** Das hängt vom Zustand des Shops ab. Bei mir gibt es nach dem Briefing und einem ersten Blick in den Shop ein Angebot zum Festpreis.

## Soll ich mir Ihren Shop ansehen?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, und sage Ihnen, wo bei einer Übergabe die Risiken liegen, auch wenn Sie danach jemand anderen beauftragen. Wenn Sie die Betreuung lieber abgeben: [Shopify-Betreuung](/de/services/shopify-betreuung) mit klarem Umfang und Festpreis nach dem Briefing.

**Weiterlesen:** [Shopify-Theme anpassen lassen](/de/blog/shopify-theme-customization) · [Shopify-Shop optimieren lassen](/de/blog/shopify-shop-optimieren-lassen) · [Shopify-Relaunch lassen](/de/blog/shopify-relaunch-theme-wechsel)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
