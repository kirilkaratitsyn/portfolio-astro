---
publishedAt: 2026-10-23
title: "Shopify Cookie-Banner und Datenschutzerklärung: was die Einstellungen leisten und was Sie selbst prüfen müssen"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Shopify Cookie-Banner und Datenschutzerklärung: wo Sie sie einstellen, was die Automatik abdeckt und wann ein Drittanbieter-Banner nötig wird."
image: /og/projects/marinepatches.jpg
topic: build
tags:
  - Shopify
  - Cookie-Banner
  - Datenschutz
  - Consent Mode
---

Shopify bringt für Cookie-Banner und Datenschutzerklärung eigene Einstellungen mit, und bei neuen Shops sind sie schon eingeschaltet. Offen bleibt, was diese Einstellungen abdecken und was Sie selbst prüfen müssen, sobald Apps, Pixel oder Tracking-Tools im Spiel sind.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe zu den Datenschutzeinstellungen, Stand Oktober 2026. Das ist **keine Rechtsberatung**: Laut Shopify bleiben Sie für die Einhaltung der Gesetze verantwortlich, bei konkreten Fragen empfiehlt Shopify einen Anwalt. Ob Ihr Shop eine Einwilligung einholen muss, klären Sie mit einem Rechtsanwalt oder Ihrem Datenschutzbeauftragten. Hier geht es um die Technik.

## Wo die Einstellungen liegen

Im Shopify-Admin gehen Sie auf **Settings > Customer privacy** (Einstellungen > Kundendatenschutz). Dort liegen laut Hilfe drei Bausteine:

1. **Datenschutzerklärung:** wie Ihr Shop personenbezogene Daten erhebt und nutzt.
2. **Cookie-Banner:** die Abfrage der Einwilligung zu Cookies und ähnlichen Technologien.
3. **Seite zum Widerspruch gegen die Datenweitergabe** (Data sharing opt-out page): Hier können Besucher der Weitergabe oder dem Verkauf ihrer Daten widersprechen.

Leicht zu übersehen sind zwei weitere Einträge: **Shopify Network Intelligence** (siehe unten) und der Standort, an dem Shopify Ihre Shop-, Bestell- und Kundendaten hostet.

## Automatische Einstellungen: was Shopify von allein macht

Bei neuen Shops sind die **automatischen Datenschutzeinstellungen** laut Hilfe von Anfang an aktiv. Bei bestehenden Shops schalten Sie sie selbst ein. Das bedeutet unter anderem:

- Haben Sie aktive Märkte im Vereinigten Königreich oder im EWR, richtet Shopify das Cookie-Banner für Besucher aus diesen Regionen automatisch ein.
- Änderungen stehen im Aktivitätsprotokoll des Shops.
- Die Funktion unterstützt alle 32 Sprachen, die Shopify in Checkout und Themes anbietet.

Shopify schreibt dazu: Prüfen Sie, ob die Standardinhalte Ihren tatsächlichen Betrieb und die eingebundenen Dienste abbilden. Von Hand eingebaute Marketing-Tools kennt die Automatik nicht. Für eigene Texte oder Regionen schalten Sie „Use automated settings“ ab.

## Die Datenschutzerklärung

Die automatische Datenschutzerklärung ist eine Vorlage, die sich mit Ihren Einstellungen mitändert. Laut Hilfe enthält sie viele der nötigen Angaben, aber nicht alle. Einiges können nur Sie ergänzen, und Shopify rät, sie regelmäßig auf Richtigkeit zu prüfen.

- Variablen, etwa für Adresse, E-Mail und Shop-Name, und Bedingungen wie „verkauft nach Europa“ passen den Inhalt an Ihre aktiven Märkte an.
- Frühere Fassungen archiviert Shopify laut Hilfe **zwei Jahre** lang. Sie lassen sich unter **Settings > Policies** (Richtlinien) exportieren. Wie lange Sie Änderungen aufbewahren müssen, liegt in Ihrer Verantwortung.
- Cookie-Banner und Widerspruchsseite lassen sich erst einschalten, wenn die Datenschutzerklärung veröffentlicht ist. Die übrigen Texte stehen im selben Bereich: [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Das Cookie-Banner von Shopify

Das Banner wird laut Hilfe auf Shop-Seiten, im Warenkorb, im Checkout und in Kundenkonten angezeigt, jeweils für Besucher aus den eingestellten Regionen. Sie können Regionen, Texte, Farben und Position anpassen und das Ergebnis in der Vorschau prüfen. Ist die Anzeige im Checkout nicht aktiviert, finden Kunden ihre Cookie-Einstellungen über einen Link im Footer.

Laut Hilfe steuert das Shopify-Banner **die Werkzeuge von Shopify selbst**, einschließlich der Shopify Pixels. Haben Sie Cookies oder Pixel von Drittanbietern von Hand oder über Apps eingebaut, brauchen Sie unter Umständen ein Drittanbieter-Banner oder eigene Logik, damit auch diese Dienste die Entscheidung der Besucher beachten.

## Ein Drittanbieter-Banner einbinden

Cookie-Consent-Apps haben im Shopify App Store eine eigene Kategorie. Laut Hilfe ist dreierlei zu beachten:

- **Dieselben Regionen an beiden Stellen:** Die Regionen im Admin (Kundendatenschutz) und in der App müssen übereinstimmen. Sonst können nicht notwendige Daten verarbeitet werden, bevor ein Besucher eingewilligt hat.
- **Shopify-Banner entfernen:** sofern die Option angezeigt wird. Danach stellen Sie die Regionen manuell ein.
- **Texte anpassen:** Shopify empfiehlt, im Banner Shopify namentlich zu nennen, auf Ihre Datenschutzerklärung zu verlinken und dort auf die Verbraucher-Datenschutzerklärung von Shopify zu verweisen.

Technisch muss die App mit der **Customer Privacy API** von Shopify zusammenarbeiten. Dann respektiert Shopify die Entscheidung der Besucher. Ob eine App das tut, prüft man im Browser, nicht im Werbetext der App.

## Google Consent Mode v2

Der Consent Mode v2 betrifft Sie, wenn Sie Google-Werbung oder Google Analytics nutzen. Laut Shopify-Hilfe werden Ereignisdaten etwa von Kunden aus dem EWR nur dann für personalisierte Werbung verwendet, wenn Consent Mode v2 aktiv ist und eine gültige Einwilligung vorliegt. Dafür gilt:

- Die Einwilligung muss über die Datenschutzeinstellungen korrekt an Google weitergegeben werden.
- Ein Drittanbieter-Banner muss mit den Datenschutzeinstellungen von Shopify verbunden sein.
- Wer ein eigenes Custom Pixel nutzt, etwa über den Google Tag Manager, muss ein Code-Snippet **von Hand** einsetzen.

## Warum Ihre Zahlen danach anders aussehen

Mit aktivem Banner wird in den eingestellten Regionen erst nach der Einwilligung erhoben. Shopify weist darauf hin, dass dadurch weniger Daten für Analyse, Marketing und Personalisierung zur Verfügung stehen können. Sie sehen das an geringeren Sitzungszahlen und an Kennzahlen, die davon abhängen, etwa der Conversion-Rate. Das ist kein Fehler im Shop und kein Traffic-Problem.

## Shopify Network Intelligence

Das betrifft vor allem Händler, die Shop-Kanal, Shopify Audiences oder Search & Discovery nutzen. Ist Shopify Network Intelligence aktiv, nutzt Shopify Ihre Kundendaten zusammen mit denen anderer Händler für zusätzliche Dienste. Dann gelten zusätzliche Anforderungen an Ihre Datenschutzerklärung.

Einige Apps und Funktionen **setzen die Einstellung voraus**. Schalten Sie sie ab, werden diese laut Hilfe sofort deaktiviert beziehungsweise deinstalliert, und eine Wiederinstallation holt sie nicht zurück. Lesen Sie die Liste der betroffenen Funktionen in der Hilfe, bevor Sie auf „Deaktivieren“ klicken.

## Mehrsprachige Shops

Verkaufen Sie in mehreren Sprachen, sollten auch Banner, Datenschutzerklärung und Widerspruchsseite übersetzt sein. Laut Hilfe geht das über die App Translate & Adapt oder eine kompatible Übersetzungs-App. Fügen Sie eine Sprache hinzu, liefert Shopify für Themes von Shopify professionelle Übersetzungen dieser Texte mit. Gibt es eine Sprache nicht, erscheint eine Warnung. Zur Planung mehrerer Länder und Sprachen siehe [Shopify Markets: In mehrere Länder verkaufen](/de/blog/shopify-markets-mehrere-laender).

## Checkliste für Ihren Shop

1. Datenschutzerklärung veröffentlicht, gelesen und ergänzt?
2. Automatische Einstellungen bewusst an oder aus?
3. Cookie-Banner in Ihren Verkaufsregionen aktiv?
4. Eigene Pixel und Tracking-Skripte aufgelistet?
5. Drittanbieter-Banner: Regionen in Admin und App identisch, Shopify-Banner entfernt?
6. Consent Mode v2 für Google-Werbung oder Analytics geprüft?
7. Banner, Datenschutzerklärung und Widerspruchsseite in allen Shop-Sprachen?
8. Vor dem Abschalten von Shopify Network Intelligence die betroffenen Funktionen gelesen?
9. Text von Rechtsanwalt oder Datenschutzbeauftragtem geprüft?

## Wann ein Entwickler hilft

Die Einstellungen im Admin schafft jeder Händler allein. Hilfe lohnt sich in diesen Fällen:

- Niemand weiß mehr, woher Skripte und Pixel im Shop stammen.
- Ein Drittanbieter-Banner soll sauber mit Shopify zusammenspielen.
- Der Consent Mode muss über einen eigenen Tag Manager laufen.
- Sie wollen wissen, welche Skripte vor der Einwilligung noch laden.

Jede zusätzliche App und jedes Skript im Quelltext kostet außerdem Ladezeit, mehr dazu in [Shopify-Shop optimieren lassen](/de/blog/shopify-shop-optimieren-lassen).

## Häufige Fragen

**Brauche ich ein Cookie-Banner?** Laut Shopify-Hilfe ist das Banner für Regionen gedacht, die eine Einwilligung vor der Datenerhebung verlangen: die EWR-Länder und das Vereinigte Königreich. In den USA ist es danach standardmäßig aus. Ob Ihr Shop eines braucht, ist eine Rechtsfrage.

**Reicht das Banner von Shopify?** Laut Hilfe nur für die Werkzeuge von Shopify. Zusätzliche Pixel oder Apps, die selbst Cookies setzen, können ein zweites Werkzeug oder eigene Logik brauchen.

**Muss ich die automatische Datenschutzerklärung prüfen?** Ja, Shopify rät in der Hilfe dazu. Sie ist eine Vorlage und kein Ersatz für eine rechtliche Prüfung.

**Was kostet die Einrichtung durch einen Entwickler?** Das hängt davon ab, wie viele Skripte und Dienste im Shop hängen. Konkrete Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich prüfe, was von außen sichtbar ist, etwa Ladezeit, Apps und Skripte im Quelltext, ohne Zugang zu Ihrem Konto. Ein Rechtsgutachten ersetzt das nicht. Wo Skripte Ihren Shop ausbremsen, helfe ich bei der [Shopify-Optimierung](/de/services/shopify-speed), alles Weitere steht unter [Leistungen](/de/services).

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
