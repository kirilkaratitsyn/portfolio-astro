---
publishedAt: 2026-11-28
title: "Shopify Kundenkonten einrichten: Anmeldung ohne Passwort, Einstellungen und Umstieg von Legacy-Konten"
seoTitle: "Shopify Kundenkonten einrichten: Login, Einstellungen, Upgrade"
date: 28. November 2026
readingTime: 7 Min
excerpt: "Shopify Kundenkonten einrichten: wie die Anmeldung ohne Passwort funktioniert, welche Einstellungen unter Customer accounts liegen, was Kunden im Konto selbst erledigen und wie der Umstieg von den alten Legacy-Konten abläuft."
image: /og/projects/petaljet.jpg
topic: build
tags:
  - Shopify
  - Kundenkonten
  - Kundenlogin
  - Checkout
---

Kundenkonten richten Sie in Shopify unter **Settings > Customer accounts** ein: Dort schalten Sie den Login-Link im Shop ein und legen fest, was Kunden im Konto selbst erledigen können. In der aktuellen Version melden sich Kunden ohne Passwort an, mit einem sechsstelligen Code per E-Mail. Die alten Konten mit E-Mail und Passwort heißen jetzt **Legacy customer accounts** und sind laut Shopify-Hilfe abgekündigt. Dieser Artikel zeigt, wo die Einstellungen liegen und wie der Umstieg abläuft. Quelle ist die Shopify-Hilfe, Stand November 2026. Menüs heißen dort englisch, ich nenne sie so. Das ist keine Rechtsberatung.

## Zwei Versionen: neue Kundenkonten und Legacy

Die Shopify-Hilfe unterscheidet zwei Versionen:

- **Customer accounts** (die neue Version): Kunden geben ihre E-Mail-Adresse ein und bekommen einen einmaligen sechsstelligen Code. Ein Passwort gibt es nicht, also auch kein „Passwort vergessen“.
- **Legacy customer accounts:** Anmeldung mit E-Mail und Passwort, vorher Registrierung auf einer eigenen Seite oder über eine Einladung.

Was laut Vergleichstabelle der Hilfe nur die neue Version kann: Rücksendungen im Konto anfragen, Guthaben (Store credit) einsehen und im Checkout einlösen, erneut bestellen mit dem Button **Buy again**, Zusammenarbeit mit B2B und mit Markets. Bestellübersicht und gespeicherte Adressen haben beide Versionen.

Noch ein Unterschied, der im Alltag zählt: Die neuen Konten sind laut Hilfe **unabhängig vom Theme**. Ein Theme-Update verändert das Konto nicht. Bei den Legacy-Konten liegen die Seiten als Templates im Theme, und Anpassungen im Liquid-Code gehen bei Theme-Updates leicht kaputt.

## Wie die Anmeldung für Kunden abläuft

- **Kein Registrieren.** Wer schon ein Kundenprofil in Ihrem Admin hat, zum Beispiel durch eine Bestellung, hat laut Hilfe damit bereits ein Konto. Die Anmeldung mit derselben E-Mail-Adresse zeigt die bisherigen Bestellungen.
- **Neue E-Mail-Adresse:** Meldet sich jemand mit einer Adresse an, die Shopify nicht kennt, wird automatisch ein neues Kundenprofil angelegt.
- **Lange Sitzung.** Die Anmeldung bleibt laut Hilfe bis zu 365 Tage bestehen. Kunden müssen sich beim nächsten Besuch nicht neu anmelden.
- **Schnellerer Checkout.** Bei angemeldeten Kunden werden die gespeicherten Daten im Checkout vorausgefüllt.

Zusätzlich zum Code per E-Mail können Sie weitere Wege anbieten:

- **Sign in with Shop:** Kunden melden sich mit ihrem Shop-Konto an. Laut Hilfe ist das bei Shops mit Shop Pay automatisch eingeschaltet.
- **Social sign-in:** Anmeldung mit Google oder Facebook. Laut Hilfe wird dabei nur die E-Mail-Adresse des Kunden an Shopify übertragen.
- **Eigener Identity Provider:** nur mit Shopify Plus. Er ersetzt die Standard-Anmeldung komplett. Mehr zum Tarif in [Shopify Plus: wann es sich lohnt](/de/blog/shopify-plus-wann-lohnt).

## Die Einstellungen unter Customer accounts

Alles Wichtige liegt im Admin unter **Settings > Customer accounts**:

1. **Show sign-in links** einschalten und speichern. Erst dann sehen Kunden den Login im Shop. Wie er aussieht, hängt laut Hilfe vom Theme ab: meist ein Personen-Icon im Header, der erste Buchstabe des Namens oder ein Text wie „Konto“.
2. **Self-serve returns and cancellations:** Kunden fragen Rücksendungen und Stornierungen selbst im Konto an. Wie Sie die Regeln dafür setzen, steht in [Shopify Retouren einrichten](/de/blog/shopify-retouren-ruecksendungen).
3. **Store credit:** Kunden sehen ihr Guthaben im Konto und lösen es im Checkout ein.
4. **URL:** eine eigene Subdomain für das Konto, zum Beispiel `account.ihr-shop.de`.
5. **Social sign-in** und **Sign in with Shop:** die zusätzlichen Anmeldewege von oben.

Schalten Sie **Show sign-in links** aus, können sich Kunden laut Hilfe nicht mehr anmelden, und das Kontomenü verschwindet aus dem Shop.

Zwei Punkte, die Händler oft überraschen:

- **Einzelne Konten lassen sich nicht deaktivieren.** Sie können laut Hilfe ein Kundenprofil löschen. Meldet sich der Kunde aber wieder mit derselben E-Mail an, entsteht ein neues Profil.
- **Zusätzliche Felder bei der Anmeldung gibt es noch nicht.** Die Anmeldung fragt nur nach der E-Mail-Adresse. Ein optionales Formular nach der ersten Anmeldung, etwa für Geburtstag oder Firmendaten, ist laut Hilfe angekündigt, aber noch für keinen Shop verfügbar. Brauchen Sie eine Angabe von jedem Kunden, empfiehlt die Hilfe, sie im Checkout abzufragen.

In den Checkout-Einstellungen gibt es außerdem die Option, eine Anmeldung vor dem Checkout zu verlangen. Meine Empfehlung, nicht aus der Hilfe: Für einen normalen Endkunden-Shop lassen Sie die Gastbestellung offen. Pflicht-Login passt zu Großhandel und geschlossenen Shops.

## Was Kunden im Konto selbst erledigen

Das Konto besteht laut Hilfe aus vier Seiten: **Sign-in**, **Orders**, **Order status** und **Profile**. Kunden können dort:

- alle Bestellungen und den Status mit Sendungsverfolgung sehen,
- offene Zahlungen abschließen und erneut bestellen,
- Namen, E-Mail-Adresse und Lieferadressen ändern,
- Rücksendungen anfragen und Guthaben einsehen, wenn Sie das eingeschaltet haben,
- ihr Abo pausieren, überspringen oder kündigen, wenn Sie Abos anbieten. Mehr in [Shopify Abos einrichten](/de/blog/shopify-abos-subscriptions).

Ändert ein Kunde seine E-Mail-Adresse, muss er sie bestätigen. Seine Einwilligung für Marketing-E-Mails bleibt laut Hilfe unverändert. Zwei Profile zusammenführen können Kunden nicht selbst, das machen Sie im Admin unter **Customers**.

Für Firmenkunden: Die neuen Konten arbeiten laut Hilfe automatisch mit Shopify B2B zusammen. Ein B2B-Kunde bestellt nach der Anmeldung für seine Firma, sieht Bestellungen mehrerer Standorte und zahlt offene Beträge. Mehr in [Shopify B2B und Großhandel](/de/blog/shopify-b2b-wholesale).

## Design, Apps und eigene Subdomain

**Design.** Kundenkonto und Checkout teilen sich dieselben Markeneinstellungen. Logo, Farben und Schriften stellen Sie im **Checkout and accounts editor** ein, zu erreichen über **Settings > Checkout**. Wie der Editor funktioniert, steht in [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen).

**Apps.** Zusatzfunktionen wie Treueprogramm, Wunschliste oder Bewertungen kommen als **App-Blöcke** auf die Seiten Orders, Order status und Profile. Im Shopify App Store filtern Sie dafür unter **Works with** nach **Customer accounts**. Auf der Anmeldeseite sind laut Hilfe keine Blöcke möglich, dort ändern Sie nur Logo, Farben, Schriften und ein Markenbild.

**Subdomain.** Ohne eigene Einstellung laufen die Kontoseiten unter einer Adresse von `shopify.com` mit der ID Ihres Shops. Das gilt auch für die Bestellstatus-Seite. Mit einer Subdomain wie `account.ihr-shop.de` sehen Kunden durchgehend Ihre Domain. Voraussetzung ist eine verbundene Domain. Liegt sie bei einem externen Anbieter, tragen Sie dort einen DNS-Eintrag ein, mehr in [Shopify Domain verbinden](/de/blog/shopify-domain-verbinden). Zwei Hinweise aus der Hilfe:

- Nutzen Sie Social sign-in oder einen Identity Provider, tragen Sie die neue Subdomain **zuerst** beim Anbieter ein und stellen erst dann in Shopify um. Sonst können sich Kunden vorübergehend nicht anmelden.
- Es gibt nur **eine** Domain für das Kundenkonto, auch wenn Ihr Shop mehrere Länder-Domains hat.

**Login ohne Seitenwechsel.** Die **Account component** zeigt die Anmeldung als Menü im Header, ohne dass Kunden den Shop verlassen. Laut Hilfe steckt sie in der neuesten Version der Horizon-Themes. In andere Themes lässt sie sich per Anpassung einbauen.

## Von Legacy-Konten umsteigen: die Schritte

Die Hilfe beschreibt den Umstieg in neun Schritten. Verkürzt:

1. **Anpassungen sichten.** Im Theme-Editor gibt es dafür im Seitenmenü den Bereich **Legacy customer accounts** mit den Templates für Login, Registrierung, Konto, Adressen und Bestellung. Im Code liegen sie unter **templates > customers**. Notieren Sie, was Sie davon behalten wollen. Die Anpassungen werden nicht übernommen.
2. **Konfiguration duplizieren.** Unter **Settings > Checkout** im Bereich **Configurations** auf **Duplicate** klicken. In der Kopie arbeiten Sie als Entwurf.
3. **Anpassungen durch Apps ersetzen.** App-Blöcke im Editor hinzufügen. Findet sich keine passende App, nennt die Hilfe als Ausweg eine Custom App vom Entwickler, mehr in [Shopify App entwickeln lassen](/de/blog/shopify-app-entwickeln-lassen).
4. **Markeneinstellungen prüfen**, auf allen Seiten von Checkout und Konto.
5. **Subdomain verbinden** (optional, aber vor dem Umstieg sinnvoll).
6. **Absender-E-Mail prüfen.** Die Anmeldecodes gehen von Ihrer Absenderadresse aus. Sie müssen Zugriff darauf haben.
7. **Konfiguration veröffentlichen.** Der Shop verlinkt danach noch auf die alten Konten.
8. **Testen.** Die Adresse der neuen Konten steht unter **Settings > Customer accounts** im Feld **URL**. In einem neuen Tab öffnen, mit einem Testkunden anmelden und jeden Anmeldeweg prüfen.
9. **Upgrade** im Banner oben auf der Seite klicken.

Laut Hilfe können Sie den Umstieg innerhalb von 30 Tagen rückgängig machen. Der KI-Assistent **Sidekick** im Admin kann Theme und Apps nach Anpassungen durchsuchen und eine To-do-Liste anlegen. Die Änderungen machen Sie selbst.

Was Sie vor dem Umstieg wissen sollten:

- **Alte Links funktionieren weiter.** Adressen wie `/account/login` leitet Shopify nach dem Umstieg automatisch auf die neuen Konten um, auch fest eingebaute Links im Theme.
- **Eigene Login-Fenster müssen raus.** Haben Sie Anmeldung oder Registrierung als eigenes Pop-up oder auf einer eigenen Seite gebaut, müssen Sie das laut Hilfe eventuell vor dem Umstieg aus dem Theme entfernen.
- **Flow und Segmente prüfen.** Der Trigger **Customer account enabled** startet nach dem Umstieg bei der ersten Anmeldung im neuen Konto, nicht für Kunden mit altem Konto. Andere Trigger rund um Legacy-Konten werden nicht mehr unterstützt. Sidekick prüft Workflows und Kundensegmente nicht mit. Mehr zu Workflows in [Shopify Flow](/de/blog/shopify-flow-automatisierung).

## Checkliste

1. **Show sign-in links** eingeschaltet, Icon im Header sichtbar?
2. Anmeldung mit einer Testadresse probiert, kommt der Code an, auch nicht im Spam?
3. Absenderadresse stimmt und gehört zu Ihrer Domain?
4. Logo, Farben und Schrift im Konto passen zum Shop?
5. Rücksendeanfragen und Guthaben bewusst ein- oder ausgeschaltet?
6. Eigene Subdomain verbunden, Bestellstatus-Seite zeigt Ihre Domain?
7. Bei Legacy: Anpassungen notiert und ersetzt, bevor Sie auf **Upgrade** klicken?
8. Datenschutzerklärung nennt Kundenkonto und Anmeldewege, mit Anwalt abgestimmt? Mehr in [Shopify Rechtstexte und Richtlinien](/de/blog/shopify-rechtstexte-richtlinien).

## Wie ich es handhabe

Einen dokumentierten Umstieg von Legacy-Konten habe ich nicht in meinem Portfolio. Was ich aus Projekten zeigen kann, ist die Arbeit rund um das Konto im Theme: Bei [Petaljet](/de/projects/petaljet), einem Blumen-Großhändler, sehen Preise nur Käufer mit Konto. Bei einem Umstieg ist mein Teil die Sichtung: welche Anpassungen in den alten Templates stecken, was davon eine App ersetzt und was eine eigene Lösung braucht.

## Häufige Fragen

**Wo richte ich in Shopify Kundenkonten ein?** Im Admin unter **Settings > Customer accounts**. Dort schalten Sie **Show sign-in links** ein. Design und Apps stellen Sie im Checkout and accounts editor unter **Settings > Checkout** ein.

**Brauchen Kunden bei Shopify ein Passwort?** In den neuen Kundenkonten nicht. Kunden geben ihre E-Mail-Adresse ein und bekommen einen einmaligen sechsstelligen Code. Nur die alten Legacy-Konten arbeiten mit Passwort.

**Müssen sich Kunden registrieren, um zu bestellen?** Nein, solange Sie die Anmeldung vor dem Checkout nicht verlangen. Wer schon bestellt hat, hat laut Hilfe bereits ein Konto und meldet sich einfach mit seiner E-Mail-Adresse an.

**Was passiert mit bestehenden Kunden beim Umstieg von Legacy-Konten?** Die Kundenprofile bleiben. Kunden melden sich mit ihrer E-Mail-Adresse und einem Code an, das alte Passwort wird nicht mehr gebraucht. Alte Login-Links leitet Shopify automatisch um.

**Kann ich das Kundenkonto unter meiner eigenen Domain anzeigen?** Ja, über eine Subdomain wie `account.ihr-shop.de` unter **Settings > Customer accounts**. Ohne sie laufen die Kontoseiten unter einer Adresse von shopify.com.

## Kundenkonto, das zum Shop passt

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact): Ich sehe mir an, ob der Login im Header zu finden ist, welche Version der Kundenkonten läuft und ob Konto und Bestellstatus-Seite zu Ihrem Shop passen. Einrichtung, Umstieg und laufende Pflege passen zur [Shopify Betreuung](/de/services/shopify-betreuung).

**Weiterlesen:** [Shopify Retouren einrichten](/de/blog/shopify-retouren-ruecksendungen) · [Shopify Checkout anpassen](/de/blog/shopify-checkout-anpassen) · [Shopify Newsletter einrichten](/de/blog/shopify-newsletter-double-opt-in)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
