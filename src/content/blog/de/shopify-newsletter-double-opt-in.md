---
publishedAt: 2026-11-27
title: "Shopify Newsletter einrichten: Anmeldung, Double-Opt-in und Shopify Messaging"
seoTitle: "Shopify Newsletter einrichten: Double-Opt-in und DSGVO"
date: 27. November 2026
readingTime: 7 Min
excerpt: "Newsletter in Shopify einrichten: wo sich Kunden anmelden, wie Sie Double-Opt-in für Deutschland aktivieren, was Shopify Messaging (früher Shopify Email) kann und was vor der ersten Kampagne stimmen muss."
image: /og/projects/jula-bloom.jpg
topic: build
tags:
  - Shopify
  - Newsletter
  - E-Mail-Marketing
  - DSGVO
---

Einen Newsletter richten Sie in Shopify in drei Schritten ein: Anmeldung im Shop und im Checkout sammeln, für Deutschland Double-Opt-in aktivieren und dann Kampagnen mit Shopify Messaging oder einer anderen E-Mail-App versenden. Shopify Messaging hieß bis vor Kurzem **Shopify Email**. Dieser Artikel zeigt, wo die Einstellungen liegen und was Sie vor der ersten Kampagne prüfen sollten. Quelle ist die Shopify-Hilfe, Stand November 2026. Menüs heißen dort englisch, ich nenne sie so. Das ist keine Rechtsberatung.

## Wo sich Kunden anmelden können

Laut Shopify-Hilfe gibt es drei Wege in Ihre Liste:

- **Newsletter-Formular im Onlineshop.** Die meisten Themes haben dafür eine eigene Section oder einen Block. Alternativ baut die Shopify-App **Shopify Forms** Formulare im Seiteninhalt oder als Pop-up.
- **Checkbox im Checkout.** Kunden haken beim Bezahlen an, dass sie Marketing-E-Mails möchten.
- **Anmeldung beim Kundenkonto.** Auch beim Einloggen kann eine Einwilligungs-Checkbox erscheinen.

Alle Adressen landen im Admin unter **Customers**, im fertigen Segment **Email subscribers**. Über eigene Segmente schreiben Sie später gezielt einzelne Gruppen an.

## Die Checkbox im Checkout richtig einstellen

Unter **Settings > Checkout** im Bereich **Marketing opt-in** aktivieren Sie **Email**. Dann wählen Sie, wo die Checkbox **vorausgewählt** ist:

- **Regions recommended by Shopify:** Shopify richtet sich nach dem Recht im Land des Kunden.
- **Regions you choose:** Sie wählen die Länder selbst. Wählen Sie **keine** Region, ist die Checkbox nirgends vorausgewählt, und jeder Kunde muss selbst anhaken.

Die Hilfe sagt dazu deutlich, dass diese Automatik keine Rechtsberatung ersetzt. Die Einwilligung gilt laut Hilfe erst, wenn der Kunde mit angehakter Box auf **Pay now** (einseitiger Checkout) oder **Continue to shipping** (dreiseitiger Checkout) klickt.

Ein Detail, das oft übersehen wird: Der Standardtext neben der Checkbox spricht von Neuigkeiten und Angeboten. Verschicken Sie auch Warenkorb-Erinnerungen, sollten Sie den Text laut Hilfe anpassen. Mehr dazu in [Shopify abgebrochene Checkouts](/de/blog/shopify-abgebrochene-checkouts).

## Double-Opt-in für Deutschland aktivieren

Beim Double-Opt-in bekommt ein neuer Abonnent eine E-Mail mit einem Bestätigungslink. Erst nach dem Klick gilt er als Abonnent. Die Hilfe nennt das in manchen Ländern gesetzlich vorgeschrieben und schreibt für Shops mit Sitz in Deutschland: Verlangt Ihr Setup eine Bestätigung, kommen Kunden erst nach ihrer Antwort in Ihre Marketing-Liste. Double-Opt-in hilft laut Hilfe auch bei der DSGVO.

So aktivieren Sie es laut Hilfe:

1. **Settings > Notifications** öffnen.
2. **Customer notifications** anklicken.
3. Im Bereich **Marketing double opt-in** **Customer marketing confirmation** auswählen.

Für Shops mit Sitz in Deutschland gibt es laut Hilfe zusätzlich die Checkbox **Require customers to confirm their subscription** in den E-Mail-Marketing-Einstellungen der Notifications. Voraussetzung ist der Vertriebskanal **Online Store**.

Drei Punkte aus der Hilfe, die in der Praxis zählen:

- **Keine Werbung in der Bestätigungs-E-Mail.** Sie soll nur bestätigen.
- **Bestätigungstext im Theme ändern.** Nach dem Absenden sollte das Formular sagen: „Bitte prüfen Sie Ihr Postfach und bestätigen Sie die Anmeldung.“ Den Text finden Sie unter **Online Store** beim aktiven Theme über **Edit default theme content**, meist als **Confirmation** im Bereich Newsletter-Formular oder **Post success** bei Sign up.
- **Alte Abonnenten müssen nicht nachbestätigen.** Wer sich vor dem Einschalten angemeldet hat, bleibt laut Hilfe Abonnent. Ob Ihre bestehende Liste sauber ist, klären Sie mit Ihrem Anwalt.

Nutzen Sie eine Formular- oder Pop-up-App, muss Double-Opt-in **auch in der App** eingestellt sein. Hat die App keine solche Option, wird laut Hilfe jeder, der sich dort einträgt, direkt als Abonnent markiert.

## Shopify Messaging: Newsletter direkt aus dem Admin

Shopify Messaging ist laut Hilfe standardmäßig installiert und unter **Apps > Shopify Messaging** zu finden. Damit verschicken Sie E-Mail-, SMS- und WhatsApp-Kampagnen an Ihre Abonnenten. Was die Hilfe nennt:

- **Voraussetzungen:** ein aktiver, bezahlter Shopify-Tarif, der Kanal Online Store und ein eingerichteter Zahlungsanbieter. Im Testzeitraum können Sie Kampagnen bauen und Testmails an sich selbst schicken, aber nicht an Abonnenten.
- **Kosten:** abhängig von der Zahl der gesendeten Nachrichten. Auf bezahlten Tarifen ist ein monatliches Kontingent an E-Mails kostenlos. Die aktuellen Zahlen stehen in der Hilfe und im Versanddialog. Eine **monatliche Ausgabengrenze** löst nur eine Benachrichtigung aus und stoppt die Abrechnung nicht.
- **Smart delivery:** standardmäßig an. Kampagnen gehen dann nur an Abonnenten, die zuletzt mit Ihrem Marketing interagiert haben.
- **Automatisierungen:** zum Beispiel eine Willkommens-E-Mail nach der Anmeldung oder die Erinnerung an abgebrochene Checkouts. Sie gehen standardmäßig nur an Abonnenten. Für eigene Abläufe oder Abläufe mit Drittanbieter-Apps verweist die Hilfe auf [Shopify Flow](/de/blog/shopify-flow-automatisierung).
- **Datenschutz:** Gemessen werden Öffnungen, Klicks, Abmeldungen und Spam-Beschwerden. Das Öffnungs-Tracking lässt sich unter **Settings > Notifications** abschalten. Laut Hilfe muss dafür außerdem **Shopify Network Intelligence** in den Datenschutzeinstellungen aktiv sein.

Klaviyo, Mailchimp und andere Apps sind die Alternative, wenn Sie mehr Segmentierung oder schon eine Liste dort haben. Die Regeln oben zu Checkbox und Double-Opt-in gelten trotzdem: Die Einwilligung entsteht im Shop.

## Vor der ersten Kampagne: Absender und Zustellung

- **Absenderadresse festlegen.** Ohne eigene Authentifizierung verschickt Shopify laut Hilfe über eine Subdomain von shopifyemail.com, und Ihre Absenderadresse wird darauf umgeschrieben. Die eigene Domain zu authentifizieren ist optional, laut Hilfe aber empfohlen, weil Kunden dann Ihre Domain sehen. Das passiert in den DNS-Einträgen, mehr in [Shopify Domain verbinden](/de/blog/shopify-domain-verbinden).
- **Langsam anfangen.** Shopify setzt automatisch Versandgrenzen pro Tag oder Woche. Bei wenig Interaktion oder vielen Spam-Meldungen kann der Versand pausiert werden. Große Listen teilen Sie in Segmente auf.
- **Adresse im Footer.** Standardmäßig steht Ihre Shop-Adresse aus **Settings > General** unten in jeder E-Mail. Welche Angaben in Werbe-E-Mails aus Deutschland gehören, klären Sie mit Ihrem Anwalt. Zu den Pflichtseiten im Shop mehr in [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Checkliste

1. Newsletter-Formular im Footer oder als Pop-up, mit Hinweis auf die Datenschutzerklärung?
2. Checkbox im Checkout aktiv, für Deutschland **nicht** vorausgewählt?
3. Double-Opt-in eingeschaltet, auch in jeder Formular-App?
4. Bestätigungs-E-Mail ohne Werbung, auf Deutsch?
5. Bestätigungstext im Theme sagt „Postfach prüfen“?
6. Absender-Domain authentifiziert?
7. Willkommens-E-Mail als Automatisierung angelegt?
8. Datenschutzerklärung nennt den E-Mail-Dienst, mit Anwalt abgestimmt? Mehr in [Shopify Cookie-Banner und Datenschutz](/de/blog/shopify-cookie-banner-datenschutz).

## Wie ich es handhabe

Bei [Jula Bloom](/de/projects/jula-bloom) habe ich vor dem Launch eine Klaviyo-Anmeldung im Footer und Pop-ups mit sinnvollen Verzögerungen eingebaut. Bei [Bazar Bizar](/de/projects/bazar-bizar) sitzt eine Mailchimp-Anmeldung im Footer und im Pop-up, beides ohne App. Mein Teil ist dabei das Theme: wo das Formular steht, wann das Pop-up kommt, dass der Bestätigungstext stimmt und die Seite schnell bleibt. Zahlen zum Listenwachstum habe ich aus diesen Projekten nicht. Kampagnen und Texte schreibt das Team des Shops.

## Häufige Fragen

**Ist Double-Opt-in in Deutschland Pflicht?** Die Shopify-Hilfe nennt Double-Opt-in in manchen Ländern gesetzlich vorgeschrieben und als Hilfe bei der DSGVO. In Deutschland ist es der übliche Weg, eine Einwilligung nachzuweisen. Die verbindliche Antwort für Ihren Shop gibt Ihr Anwalt.

**Wo finde ich in Shopify meine Newsletter-Abonnenten?** Im Admin unter **Customers**, im Segment **Email subscribers**. Dort landen Anmeldungen aus Formular, Checkout und Kundenkonto.

**Was ist aus Shopify Email geworden?** Die App heißt jetzt **Shopify Messaging** und verschickt neben E-Mails auch SMS und WhatsApp-Nachrichten. Sie finden sie unter **Apps > Shopify Messaging**.

**Warum bekommen Kunden keine Bestätigungs-E-Mail?** Häufige Gründe: Double-Opt-in ist nicht eingeschaltet, das Formular kommt aus einer App mit eigenen Einstellungen, oder die Mail landet im Spam, weil die Absender-Domain nicht authentifiziert ist.

## Newsletter-Anmeldung, die im Shop passt

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact): Ich sehe mir an, wo sich Kunden anmelden können, ob Checkbox und Bestätigung stimmen und ob das Pop-up die Seite bremst. Einrichtung und laufende Pflege passen zur [Shopify Betreuung](/de/services/shopify-betreuung).

**Weiterlesen:** [Shopify abgebrochene Checkouts](/de/blog/shopify-abgebrochene-checkouts) · [Shopify E-Mail-Benachrichtigungen](/de/blog/shopify-email-benachrichtigungen) · [Shopify Cookie-Banner und Datenschutz](/de/blog/shopify-cookie-banner-datenschutz)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
