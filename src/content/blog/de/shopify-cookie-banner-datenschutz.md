---
publishedAt: 2026-10-23
title: "Shopify Cookie-Banner und Datenschutzerklärung: was die Einstellungen leisten und was Sie selbst prüfen müssen"
date: 23. Oktober 2026
readingTime: 7 Min
excerpt: "Wo Shopify Datenschutzerklärung und Cookie-Banner einstellt, was die automatischen Einstellungen abdecken, wann ein Drittanbieter-Banner nötig wird und warum Ihre Statistik danach anders aussieht."
image: /og/projects/marinepatches.jpg
topic: build
tags:
  - Shopify
  - Cookie-Banner
  - Datenschutz
  - Consent Mode
---

Wer in Deutschland oder der EU verkauft, landet früher oder später bei der Frage: „Habe ich ein Cookie-Banner, und stimmt meine Datenschutzerklärung?“ Shopify bringt dafür eigene Einstellungen mit, und bei neuen Shops sind sie sogar schon eingeschaltet. Das beruhigt, lässt aber zwei Dinge offen: Was genau diese Einstellungen abdecken, und was Sie zusätzlich selbst prüfen müssen, sobald Apps, Pixel oder Tracking-Tools im Spiel sind. Dieser Text führt Händler ohne technischen Hintergrund durch beides.

## Vorab eine Einordnung

Alle Angaben stammen aus der Shopify-Hilfe zu den Datenschutzeinstellungen, Stand Oktober 2026. Das ist **keine Rechtsberatung**, und Shopify schreibt das in der Hilfe ausdrücklich selbst: Sie bleiben für die Einhaltung der Gesetze verantwortlich, und bei konkreten Fragen empfiehlt Shopify einen Anwalt. Ob und in welcher Form Ihr Shop eine Einwilligung einholen muss, beantworte ich deshalb nicht, dafür sind ein Rechtsanwalt oder Ihr Datenschutzbeauftragter die richtige Adresse. Hier geht es um die Technik: wo Sie etwas einstellen, was Shopify automatisch erledigt und wo Handarbeit bleibt.

## Wo die Einstellungen liegen

Im Shopify-Admin gehen Sie auf **Settings > Customer privacy** (Einstellungen > Kundendatenschutz). Die Menünamen übernehme ich so, wie die Hilfe sie auf Englisch nennt, im deutschen Admin heißen sie entsprechend übersetzt. Dort liegen laut Hilfe drei Bausteine:

1. **Datenschutzerklärung:** der Text, der erklärt, wie Ihr Shop personenbezogene Daten erhebt und nutzt.
2. **Cookie-Banner:** die Abfrage, die Besucher um Einwilligung zu Cookies und ähnlichen Technologien bittet.
3. **Seite zum Widerspruch gegen die Datenweitergabe** (Data sharing opt-out page): eine eigene Seite, auf der Besucher der Weitergabe oder dem Verkauf ihrer Daten widersprechen können.

Dazu kommen zwei Einträge, die man leicht übersieht: die Einstellung **Shopify Network Intelligence** (dazu unten mehr) und die Angabe, an welchem Standort Shopify Ihre Shop-, Bestell- und Kundendaten hostet.

## Automatische Einstellungen: was Shopify von allein macht

Bei neuen Shops sind die **automatischen Datenschutzeinstellungen** laut Hilfe von Anfang an aktiv. Das bedeutet unter anderem: Haben Sie aktive Märkte im Vereinigten Königreich oder im EWR, richtet Shopify das Cookie-Banner für Besucher aus diesen Regionen automatisch ein. Änderungen werden im Aktivitätsprotokoll des Shops festgehalten, und die Funktion unterstützt alle 32 Sprachen, die Shopify in Checkout und Themes anbietet. Bei bestehenden Shops können Sie die Automatik selbst einschalten.

Wichtig ist der Satz, den Shopify selbst dazuschreibt: Prüfen Sie die Standardinhalte, ob sie Ihren tatsächlichen Betrieb und die eingebundenen Dienste abbilden. Die Automatik passt sich an Shop-Einstellungen an, sie weiß aber nicht, welches Marketing-Tool Ihr Webdesigner vor zwei Jahren per Hand eingebaut hat. Wollen Sie Texte oder Regionen selbst bestimmen, schalten Sie den Schalter „Use automated settings“ (automatische Einstellungen verwenden) ab.

## Die Datenschutzerklärung

Die automatische Datenschutzerklärung ist eine Vorlage, die sich mit Ihren Einstellungen mitändert. Laut Hilfe enthält sie viele der nötigen Angaben schon, aber nicht alle: Einiges können Sie nur selbst ergänzen, und Shopify rät, sie regelmäßig auf Richtigkeit zu prüfen. Wer die Vorlage verwendet, muss sie also trotzdem lesen.

Praktisch zu wissen:

- Im Text arbeitet Shopify mit Variablen, etwa für Adresse, E-Mail und Shop-Name, und mit Bedingungen wie „verkauft nach Europa“. So passt sich der Inhalt an Ihre aktiven Märkte an.
- Frühere Fassungen archiviert Shopify laut Hilfe **zwei Jahre** lang. Sie lassen sich unter **Settings > Policies** (Richtlinien) exportieren. Wie lange Sie Änderungen aufbewahren müssen, liegt in Ihrer Verantwortung.
- Das Cookie-Banner und die Widerspruchsseite lassen sich erst einschalten, wenn die Datenschutzerklärung veröffentlicht ist.

## Das Cookie-Banner von Shopify

Das Banner von Shopify wird laut Hilfe auf Shop-Seiten, im Warenkorb, im Checkout und in Kundenkonten angezeigt, jeweils für Besucher aus den eingestellten Regionen. Sie können Regionen und Texte anpassen, Farben und Position festlegen und mit der Vorschau prüfen, wie es im Shop aussieht. Ist die Anzeige im Checkout nicht aktiviert, finden Kunden ihre Cookie-Einstellungen über einen Link im Footer.

Die entscheidende Grenze steht ebenfalls in der Hilfe: Das Shopify-Banner steuert **die Werkzeuge von Shopify selbst**, einschließlich der Shopify Pixels. Haben Sie Cookies oder Pixel von Drittanbietern von Hand oder über Apps eingebaut, brauchen Sie unter Umständen ein Banner eines Drittanbieters oder eigene Logik, damit diese Dienste die Entscheidung der Besucher auch beachten.

## Ein Drittanbieter-Banner einbinden

Im Shopify App Store gibt es eine eigene Kategorie für Cookie-Consent-Apps. Wer eine nutzt, sollte laut Hilfe drei Dinge beachten:

- **Dieselben Regionen an beiden Stellen:** Die Regionen im Admin (Kundendatenschutz) und in der App müssen übereinstimmen. Sonst können nicht notwendige Daten verarbeitet werden, bevor ein Besucher eingewilligt hat.
- **Shopify-Banner entfernen:** Zu den Schritten in der Hilfe gehört, das Shopify-Banner zu entfernen (sofern die Option angezeigt wird) und die Regionen dann manuell einzustellen.
- **Texte anpassen:** Shopify empfiehlt, im Banner Shopify namentlich zu nennen, auf Ihre Datenschutzerklärung zu verlinken und in dieser Erklärung auf die Verbraucher-Datenschutzerklärung von Shopify zu verweisen.

Technisch hängt das daran, dass die App mit der **Customer Privacy API** von Shopify zusammenarbeitet. Dann respektiert Shopify die Entscheidung der Besucher. Ob eine bestimmte App das sauber tut, prüft man im Browser, nicht im Werbetext der App.

## Google Consent Mode v2

Nutzen Sie Google-Werbung oder Google Analytics, begegnet Ihnen irgendwann der Consent Mode v2. Laut Shopify-Hilfe werden Ereignisdaten etwa von Kunden aus dem EWR nur dann für personalisierte Werbung verwendet, wenn Consent Mode v2 aktiv ist und eine gültige Einwilligung vorliegt. Die Einwilligung muss dafür über die Datenschutzeinstellungen korrekt an Google weitergegeben werden. Bei einem Drittanbieter-Banner muss dieser mit den Datenschutzeinstellungen von Shopify verbunden sein. Und wer ein eigenes Custom Pixel nutzt, etwa über den Google Tag Manager, muss ein Code-Snippet **von Hand** einsetzen. Das ist eine der Stellen, an denen ein Entwickler Zeit spart.

## Warum Ihre Zahlen danach anders aussehen

Mit aktivem Banner wird in den eingestellten Regionen erst nach der Einwilligung erhoben. Shopify weist selbst darauf hin, dass dadurch weniger Daten für Analyse, Marketing und Personalisierung zur Verfügung stehen können. Sichtbar wird das an geringeren Sitzungszahlen und an Kennzahlen, die davon abhängen, etwa der Conversion-Rate. Das ist kein Fehler im Shop. Wer vor und nach dem Einschalten vergleicht, sollte das wissen, sonst wird aus einer Einstellung schnell ein vermeintliches Traffic-Problem.

## Shopify Network Intelligence

Dieser Punkt betrifft vor allem Händler, die Shopify-Funktionen wie Shop-Kanal, Shopify Audiences oder Search & Discovery nutzen. Ist Shopify Network Intelligence aktiv, nutzt Shopify Ihre Kundendaten zusammen mit denen anderer Händler für zusätzliche Dienste, und es gelten zusätzliche Anforderungen an Ihre Datenschutzerklärung. Einige Apps und Funktionen **setzen die Einstellung voraus**. Schalten Sie sie ab, werden diese laut Hilfe sofort deaktiviert beziehungsweise deinstalliert, und eine Wiederinstallation holt sie nicht zurück. Die Liste der betroffenen Funktionen steht in der Hilfe, lesen Sie sie, bevor Sie auf „Deaktivieren“ klicken.

## Mehrsprachige Shops

Verkaufen Sie in mehreren Sprachen, sollten auch Banner, Datenschutzerklärung und Widerspruchsseite übersetzt sein. Laut Hilfe geht das über die App Translate & Adapt oder eine kompatible Übersetzungs-App. Fügen Sie eine neue Sprache hinzu, liefert Shopify für Themes von Shopify professionelle Übersetzungen dieser Texte mit. Gibt es eine Sprache nicht, erscheint eine Warnung. Wie Sie mehrere Länder und Sprachen insgesamt planen, steht in [Shopify Markets: In mehrere Länder verkaufen, ohne mehrere Shops zu betreiben](/de/blog/shopify-markets-mehrere-laender).

## Checkliste für Ihren Shop

1. Datenschutzerklärung veröffentlicht, Standardtext gelesen und um Fehlendes ergänzt?
2. Automatische Einstellungen bewusst an oder abgeschaltet?
3. Cookie-Banner in den Regionen aktiv, in denen Sie verkaufen?
4. Alle selbst eingebauten Pixel und Tracking-Skripte aufgelistet?
5. Falls ein Drittanbieter-Banner läuft: Regionen im Admin und in der App identisch, Shopify-Banner entfernt?
6. Consent Mode v2 geprüft, wenn Sie Google-Werbung oder Analytics nutzen?
7. Banner, Datenschutzerklärung und Widerspruchsseite in allen Shop-Sprachen vorhanden?
8. Vor dem Abschalten von Shopify Network Intelligence die Liste der betroffenen Funktionen gelesen?
9. Den Text von einem Rechtsanwalt oder Datenschutzbeauftragten gegenprüfen lassen?

## Wann ein Entwickler hilft

Die Einstellungen im Admin schafft jeder Händler allein. Hilfe lohnt sich, wenn Sie Skripte und Pixel haben, von denen niemand mehr weiß, woher sie stammen, wenn ein Drittanbieter-Banner sauber mit Shopify zusammenspielen soll, wenn der Consent Mode über einen eigenen Tag Manager laufen muss oder wenn Sie nach dem Einschalten wissen wollen, welche Skripte vor der Einwilligung noch laden. Auch der Zusammenhang mit Ladezeit ist praktisch: Jede zusätzliche App und jedes Skript im Quelltext kostet Ladezeit, mehr dazu in [Shopify-Shop optimieren lassen: Was dazugehört und woran Sie ein gutes Angebot erkennen](/de/blog/shopify-shop-optimieren-lassen). Die rechtliche Bewertung bleibt dabei bei Ihrem Anwalt.

## Häufige Fragen

**Brauche ich ein Cookie-Banner?** Laut Shopify-Hilfe ist das Banner für Regionen gedacht, die eine Einwilligung vor der Datenerhebung verlangen, genannt werden die EWR-Länder und das Vereinigte Königreich. In den USA ist es nach dieser Beschreibung standardmäßig aus. Ob Ihr Shop im Einzelfall eines braucht, ist eine Rechtsfrage, die ich nicht beantworte.

**Reicht das Banner von Shopify?** Das Banner steuert laut Hilfe die Werkzeuge von Shopify. Haben Sie zusätzliche Pixel oder Apps eingebaut, die selbst Cookies setzen, kann ein zweites Werkzeug oder eigene Logik nötig sein.

**Muss ich die automatische Datenschutzerklärung prüfen?** Ja, Shopify rät in der Hilfe ausdrücklich dazu, sie regelmäßig zu prüfen. Sie ist eine Vorlage und kein Ersatz für eine rechtliche Prüfung.

**Was kostet die Einrichtung durch einen Entwickler?** Das hängt davon ab, wie viele Skripte und Dienste im Shop hängen. Konkrete Beträge nenne ich hier nicht.

## Wie steht es um Ihren Shop?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich schaue mir an, was von außen sichtbar ist, etwa Ladezeit, Apps und Skripte im Quelltext und die Struktur der Seiten, und sage Ihnen, was auffällt. Dabei arbeite ich nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Konto. Ein Rechtsgutachten ersetzt das nicht. Wo Skripte Ihren Shop ausbremsen, helfe ich bei der [Shopify-Optimierung](/de/services/shopify-speed). Was ich sonst für Shops mache, finden Sie unter [Leistungen](/de/services).

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
