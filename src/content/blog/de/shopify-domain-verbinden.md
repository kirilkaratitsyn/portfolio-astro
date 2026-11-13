---
publishedAt: 2026-11-13
title: "Shopify Domain verbinden: eigene Adresse einrichten, ohne dass Mail oder Shop ausfallen"
seoTitle: "Shopify Domain verbinden: Schritte, DNS und typische Fehler"
date: 13. November 2026
readingTime: 7 Min
excerpt: "Verbinden, übertragen oder neu kaufen: Welcher Weg zu Ihrer Domain passt, welche DNS-Einträge Shopify braucht, was bei .de-Domains und E-Mail zu beachten ist und woran es meist hängt, wenn die Adresse nicht funktioniert."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Domain
  - Einrichtung
---

Ihr Shop läuft zunächst unter einer Adresse wie `ihr-shop.myshopify.com`. Für Kundschaft, Google und Visitenkarten soll dort Ihre eigene Domain stehen, zum Beispiel `www.ihr-shop.de`. Das ist keine große Aufgabe, aber eine mit Stolperstellen: Eine falsch gesetzte Zeile bei Ihrem Domain-Anbieter, und der Shop ist unter der Adresse nicht erreichbar. Dieser Artikel erklärt die drei Wege, die DNS-Einträge, die Besonderheiten bei .de-Domains und E-Mail und die häufigsten Gründe, warum es nicht klappt. Quelle ist die Shopify-Hilfe, Stand November 2026.

## Drei Wege zur eigenen Domain

Laut Shopify-Hilfe gibt es drei Möglichkeiten:

1. **Domain über Shopify kaufen.** Am einfachsten: Sie verwalten alles im Shopify-Admin.
2. **Vorhandene Domain verbinden.** Die Domain bleibt bei Ihrem bisherigen Anbieter, Sie ändern dort DNS-Einträge, sodass sie auf Shopify zeigen. Verwaltung, Bezahlung und Verlängerung bleiben beim Anbieter.
3. **Vorhandene Domain zu Shopify übertragen.** Die Verwaltung wandert zu Shopify, Sie sehen Einstellungen, Rechnung und Verlängerung im Admin.

Für die meisten Shops, die schon eine Domain haben, ist **Verbinden** der richtige Start. Shopify selbst empfiehlt, im Zweifel zu verbinden: Übertragen können Sie später immer noch.

## Verbinden oder übertragen: der Vergleich

**Verbinden:**

- DNS-Einstellungen, Bezahlung und Verlängerung bleiben beim bisherigen Anbieter.
- Shopify-Support hilft nur bei Problemen mit der Shop-Verbindung.
- Dauer: Minuten bis 48 Stunden. Keine zusätzlichen Kosten von Shopify. Funktioniert mit allen Endungen.

**Übertragen:**

- DNS-Einstellungen, Bezahlung und Verlängerung liegen im Shopify-Admin, der Support deckt die Domain voll ab.
- Dauer: bis zu 20 Tage. Es fällt die Verlängerung um ein Jahr an. Nicht jede Endung ist übertragbar.

**Verbinden passt, wenn** Sie die Domain beim Anbieter lassen wollen, andere Dienste daran hängen (etwa E-Mail), die Endung nicht übertragbar ist oder die Domain in den letzten 60 Tagen registriert oder übertragen wurde.

**Für .de ist das wichtig:** Shopify nennt in seiner Hilfe ausdrücklich Endungen wie `.at`, `.co.uk`, `.de`, `.jp` und `.kr` als **nicht übertragbar**. Eine .de-Domain verbinden Sie also.

**Übertragen passt, wenn** Sie alles an einem Ort haben und den Support von Shopify für die Domain nutzen möchten. Läuft die Domain schon produktiv, kann es beim Übertragen zu Ausfallzeit kommen. Shopify rät deshalb, die Domain **vorher zu verbinden**.

## Die DNS-Einträge, die Shopify braucht

Beim manuellen Verbinden ändern Sie im Konto Ihres Domain-Anbieters (Bereich „DNS“ oder „Domainverwaltung“) drei Einträge. Die Werte nennt die Shopify-Hilfe so:

- **A-Eintrag** (Host `@`): `23.227.38.65`
- **AAAA-Eintrag** (Host `@`): `2620:0127:f00f:5::`. Lehnt Ihr Anbieter die verkürzte Schreibweise ab, geht die ausgeschriebene: `2620:0127:f00f:0005:0000:0000:0000:0000`.
- **CNAME-Eintrag** für `www`: `shops.myshopify.com.` (mit Punkt am Ende)

Dazu gelten Regeln, an denen es oft hängt:

- Es darf **nur einen A-Eintrag und nur einen AAAA-Eintrag** geben. Alte Einträge löschen Sie. Gäbe es mehrere, würden Browser zufällig einen wählen, und ein Teil der Besucher landete woanders.
- Es darf nur **einen `www`-CNAME** geben. Weitere CNAMEs brauchen eigene Namen, etwa `shop`.
- Die **TTL** lassen Sie auf dem Standardwert.
- Nach dem Verbinden zeigt Shopify unter Umständen eine A-Adresse mit anderem Ende, etwa `23.227.38.32`. Das ist laut Hilfe gültig und kein Fehler.

Danach gehen Sie im Shopify-Admin auf **Einstellungen > Domains > Vorhandene Domain verbinden**, tragen die Domain **ohne** `www` ein und bestätigen. Bei manchen Anbietern (Shopify nennt unter anderem GoDaddy, IONOS, Cloudflare, Namecheap, Wix und Squarespace) gibt es eine eigene Anleitung, und teilweise läuft die Verbindung automatisch. Prüfen Sie Ihre Werte immer gegen die aktuelle Shopify-Hilfe: Die Zahlen oben gelten für November 2026.

Wichtig: **Shopify-Support kann sich nicht in Ihr Konto beim Domain-Anbieter einloggen**, auch nicht mit Ihrer Erlaubnis. Bei Fragen zu den Einstellungen dort hilft nur der Anbieter selbst.

## Wie lange dauert es

Nach der Änderung braucht das DNS Zeit. Shopify nennt für das Verbinden meist bis zu zwei Stunden, **bis zu 48 Stunden** in Einzelfällen. In dieser Zeit kann die Domain zeitweise Fehler zeigen, und im Admin steht ein „TLS pending“-Status. Das Zertifikat (https) erstellt Shopify automatisch und kostenlos, sobald die Einträge stimmen.

Ändern Sie in der Wartezeit nicht dauernd Einträge neu: Laut Hilfe kann das die Wartezeit zurücksetzen. Ob die Einträge angekommen sind, sehen Sie mit freien Werkzeugen wie whatsmydns.net oder dnschecker.org.

## Primäre Domain festlegen

Ihr Shop kann mehrere Domains haben (bis zu 20 zusätzlich zur myshopify-Adresse), aber **eine** davon ist die **primäre**. Das ist die Adresse, die in der Browserzeile steht. Alle anderen Domains leiten laut Hilfe auf sie um, auch die `myshopify.com`-Adresse. Voraussetzung: Die neue Domain hat im Admin den Status **Verbunden**, das kann bis zu 48 Stunden dauern.

Praktisch: Entscheiden Sie vorher, ob Ihre Hauptadresse mit oder ohne `www` erscheinen soll, und setzen Sie nur diese als primär. Das vermeidet zwei Varianten derselben Seite.

## E-Mail nicht vergessen

Shopify bietet **kein E-Mail-Postfach** an. Wenn an Ihrer Domain bereits Mailadressen hängen, laufen sie bei einem anderen Dienst. Bevor Sie dort DNS-Einträge ändern:

- **Notieren Sie alle bestehenden Einträge**, mindestens die MX- und TXT-Einträge (diese Empfehlung stammt von mir, nicht aus der Shopify-Hilfe). Mit einem Screenshot der DNS-Seite können Sie jede Änderung zurücknehmen.
- **Lassen Sie die Nameserver Ihres Anbieters unverändert**, wenn Sie nichts Anderes eingerichtet haben. Die Hilfe warnt, dass eigene oder externe Nameserver **Verbindungs- und E-Mail-Probleme** verursachen können, wenn sie nicht richtig eingerichtet sind. Hostet schon ein anderer Anbieter (etwa Cloudflare) Ihre DNS-Einträge, müssen Sie nicht zurückwechseln.
- Wenn Sie eine Domain bei Shopify **kaufen oder übertragen**, bietet Shopify kostenlose **Weiterleitungs-Adressen**. Hängen Sie später ein echtes Postfach (Zoho, Google Workspace) an, sind die Weiterleitungen laut Hilfe betroffen, sobald MX-Einträge hinzukommen.

Die Absenderadresse, von der Shopify Ihre Bestellmails verschickt, stellen Sie getrennt im Admin ein. Mehr dazu in [Shopify E-Mail-Benachrichtigungen](/de/blog/shopify-email-benachrichtigungen).

## .de-Domain: Verifizierung beachten

Bei EU-Endungen wie `.de`, `.eu`, `.nl` oder `.it` kann der Registrar eine **Identitätsprüfung** verlangen (Hintergrund ist laut Shopify die NIS2-Regulierung). Zeigt Ihre Domain im Admin ein Badge „Action Required“, schauen Sie in Ihr E-Mail-Postfach: Dort liegt eine Verifizierungsanfrage. Diese Verifizierung ist ein eigener Schritt neben den DNS-Einträgen.

## Wenn es nicht funktioniert: die häufigsten Ursachen

Die Shopify-Hilfe führt eine lange Fehlersuche. In der Praxis lohnt ein Blick auf diese Punkte zuerst:

- **Tippfehler** in A-, AAAA- oder CNAME-Eintrag, der Punkt am Ende der CNAME-Adresse fehlt.
- **Mehr als ein A- oder AAAA-Eintrag**, weil ein alter Eintrag vom früheren Hoster stehen blieb.
- **Ein Proxy zwischen Domain und Shopify**, zum Beispiel der Cloudflare-Proxy. Die Hilfe sagt, dass Proxys von Dritten nicht unterstützt werden und zu Störungen führen können.
- **Ein defektes DNSSEC.** Dann gilt die Domain nicht als vollständig verbunden, auch wenn alle Einträge stimmen. Das klärt Ihr Domain-Anbieter.
- **CAA-Einträge**, falls vorhanden: Sie müssen `letsencrypt.org`, `pki.goog` und `ssl.com` erlauben, sonst kann das Zertifikat nicht ausgestellt werden.
- **Domain abgelaufen oder gesperrt** beim Anbieter.
- **Zu früh nachgeschaut**: Warten Sie die 48 Stunden ab, bevor Sie weiter ändern.

Bevor Sie sich an den Shopify-Support wenden, sammeln Sie die Domain, die aktuellen DNS-Einträge (als Screenshot) und den Status aus dem Admin. Das spart Rückfragen.

## Domain beim Shop-Umzug

Wechseln Sie von einem anderen System zu Shopify, würde ich die Domain **zuletzt** umstellen, nachdem der neue Shop geprüft wurde, damit die alte Seite bis dahin erreichbar bleibt (eine Empfehlung aus der Praxis, nicht aus der Shopify-Hilfe). Wenn die Domain bereits mit einem anderen Shopify-Shop verbunden ist, müssen Sie laut Hilfe den Besitz per TXT-Eintrag bestätigen, bevor sie zum neuen Shop wechselt. Was bei einem Umzug für Suchmaschinen wichtig ist, steht in [Shopify-Umzug und SEO: Weiterleitungen einrichten](/de/blog/shopify-migration-weiterleitungen), den Ablauf bei einem bestimmten System beschreiben [Von WooCommerce zu Shopify wechseln](/de/blog/woocommerce-to-shopify) und [Von Wix zu Shopify wechseln](/de/blog/wix-zu-shopify-umzug).

## Beispiele aus der Praxis

Zu Domains gibt es in meinen Projekten keinen eigenen Fall, den ich Ihnen hier als Beleg zeigen könnte. Der Ablauf oben stammt aus der Shopify-Hilfe, die Empfehlungen zu E-Mail und Reihenfolge aus der Erfahrung mit Shop-Aufbau und Umzügen. Was ich konkret tue, steht im nächsten Abschnitt.

## Wie ich es handhabe

Wenn Sie mich mit dem Aufbau oder Umzug Ihres Shops beauftragen, klären wir die Domain im Briefing: wo sie liegt, welche Dienste (E-Mail) daran hängen und wann die Adresse auf den neuen Shop zeigen soll. Ihr Passwort beim Domain-Anbieter brauche ich dafür nicht: Ich sage Ihnen genau, welche Einträge zu ändern sind, Sie oder Ihr Anbieter tragen sie ein, und danach prüfe ich, ob der Shop unter der Adresse erreichbar ist. Im Shopify-Admin arbeite ich über ein Collaborator-Konto mit begrenzten Rechten, nicht mit Ihrem Inhaber-Login.

## Häufige Fragen

**Kann ich meine .de-Domain zu Shopify übertragen?** Laut Shopify-Hilfe gehört `.de` zu den Endungen, die nicht übertragbar sind. Sie verbinden sie stattdessen.

**Geht meine E-Mail kaputt, wenn ich die Domain verbinde?** Nicht zwangsläufig, aber sie hängt an derselben DNS-Zone. Sichern Sie vorher die bestehenden Einträge und ändern Sie nur A, AAAA und den `www`-CNAME.

**Was kostet das Verbinden?** Shopify berechnet dafür nichts zusätzlich. Die Domain selbst zahlen Sie weiter bei Ihrem Anbieter.

**Kann ich mehrere Domains auf einen Shop legen?** Ja, bis zu 20 zusätzlich zur myshopify-Adresse. Eine ist die primäre, die anderen leiten auf sie um.

**Muss ich die myshopify-Adresse ändern?** Nein. Sie können sie nur ein einziges Mal ändern, und sie leitet auf Ihre primäre Domain um.

## Domain steht, aber der Shop noch nicht?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact): Ich schaue mir an, was von außen sichtbar ist, und sage Ihnen, was auffällt. Wenn ein neuer Shop samt Domain und E-Mail-Umstellung entstehen soll, finden Sie auf der Seite [Shopify-Shop erstellen lassen](/de/services/shopify-shop-erstellen-lassen), wie das bei mir abläuft. Was bei der Erstellung insgesamt anfällt, steht in [Shopify-Shop erstellen lassen: Kosten](/de/blog/shopify-shop-erstellen-lassen-kosten).

**Weiterlesen:** [Shopify E-Mail-Benachrichtigungen](/de/blog/shopify-email-benachrichtigungen) · [Shopify-Umzug und SEO](/de/blog/shopify-migration-weiterleitungen) · [Shopify Markets: mehrere Länder](/de/blog/shopify-markets-mehrere-laender)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
