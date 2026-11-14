---
publishedAt: 2026-11-13
title: "Shopify Domain verbinden: eigene Adresse einrichten, ohne dass Mail oder Shop ausfallen"
seoTitle: "Shopify Domain verbinden: Schritte, DNS und typische Fehler"
date: 13. November 2026
readingTime: 7 Min
excerpt: "Shopify Domain verbinden: welcher Weg passt, welche DNS-Einträge Shopify braucht, was für .de-Domains und E-Mail gilt und woran es meist hängt."
image: /og/projects/reserve-kava.jpg
topic: build
tags:
  - Shopify
  - Domain
  - Einrichtung
---

Ihr Shop läuft zunächst unter `ihr-shop.myshopify.com`. Eine eigene Shopify Domain verbinden Sie über drei DNS-Einträge bei Ihrem Domain-Anbieter, zum Beispiel `www.ihr-shop.de`. Eine falsche Zeile dort, und der Shop ist unter der Adresse nicht erreichbar. Quelle ist die Shopify-Hilfe, Stand November 2026.

## Drei Wege zur eigenen Domain

Laut Shopify-Hilfe gibt es drei Möglichkeiten:

1. **Domain über Shopify kaufen.** Sie verwalten alles im Shopify-Admin.
2. **Vorhandene Domain verbinden.** Sie bleibt beim Anbieter, nur die DNS-Einträge zeigen auf Shopify.
3. **Vorhandene Domain zu Shopify übertragen.** Die Verwaltung wandert zu Shopify.

Haben Sie schon eine Domain, ist **Verbinden** meist der richtige Start. Shopify empfiehlt das im Zweifel selbst: Übertragen können Sie später noch.

## Verbinden oder übertragen: der Vergleich

**Verbinden:**

- DNS-Einstellungen, Bezahlung und Verlängerung bleiben beim bisherigen Anbieter.
- Shopify-Support hilft nur bei Problemen mit der Shop-Verbindung.
- Dauer: Minuten bis 48 Stunden. Keine zusätzlichen Kosten von Shopify. Funktioniert mit allen Endungen.

**Übertragen:**

- DNS-Einstellungen, Bezahlung und Verlängerung liegen im Shopify-Admin, der Support deckt die Domain voll ab.
- Dauer: bis zu 20 Tage. Es fällt die Verlängerung um ein Jahr an. Nicht jede Endung ist übertragbar.

**Verbinden passt, wenn** andere Dienste an der Domain hängen (etwa E-Mail), die Endung nicht übertragbar ist oder die Domain in den letzten 60 Tagen registriert oder übertragen wurde.

**Für .de ist das wichtig:** Shopify nennt Endungen wie `.at`, `.co.uk`, `.de`, `.jp` und `.kr` als **nicht übertragbar**. Eine .de-Domain verbinden Sie also.

**Übertragen passt, wenn** Sie alles an einem Ort und den Shopify-Support für die Domain möchten. Bei einer produktiven Domain droht Ausfallzeit, Shopify rät deshalb, sie **vorher zu verbinden**.

## Die DNS-Einträge, die Shopify braucht

Im Konto Ihres Domain-Anbieters (Bereich „DNS“ oder „Domainverwaltung“) ändern Sie drei Einträge. Die Werte laut Shopify-Hilfe:

- **A-Eintrag** (Host `@`): `23.227.38.65`
- **AAAA-Eintrag** (Host `@`): `2620:0127:f00f:5::`. Lehnt Ihr Anbieter die verkürzte Schreibweise ab, geht die ausgeschriebene: `2620:0127:f00f:0005:0000:0000:0000:0000`.
- **CNAME-Eintrag** für `www`: `shops.myshopify.com.` (mit Punkt am Ende)

An diesen Regeln hängt es oft:

- Es darf **nur einen A-Eintrag und nur einen AAAA-Eintrag** geben. Alte Einträge löschen Sie, sonst landet ein Teil der Besucher woanders.
- Es darf nur **einen `www`-CNAME** geben. Weitere CNAMEs brauchen eigene Namen, etwa `shop`.
- Die **TTL** bleibt auf dem Standardwert.
- Shopify zeigt danach unter Umständen eine A-Adresse mit anderem Ende, etwa `23.227.38.32`. Das ist laut Hilfe gültig.

Danach gehen Sie im Shopify-Admin auf **Einstellungen > Domains > Vorhandene Domain verbinden** und tragen die Domain **ohne** `www` ein. Für manche Anbieter (unter anderem GoDaddy, IONOS, Cloudflare, Namecheap, Wix und Squarespace) hat Shopify eine eigene Anleitung, teilweise läuft die Verbindung automatisch. Die Werte oben gelten für November 2026, prüfen Sie sie gegen die aktuelle Shopify-Hilfe.

**Shopify-Support kann sich nicht in Ihr Konto beim Domain-Anbieter einloggen**, auch nicht mit Ihrer Erlaubnis. Dort hilft nur der Anbieter.

## Wie lange dauert es

Shopify nennt meist bis zu zwei Stunden, in Einzelfällen **bis zu 48 Stunden**. In dieser Zeit kann die Domain zeitweise Fehler zeigen, im Admin steht „TLS pending“. Das Zertifikat (https) erstellt Shopify automatisch und kostenlos, sobald die Einträge stimmen.

Ändern Sie in der Wartezeit nichts erneut: Laut Hilfe kann das die Wartezeit zurücksetzen. Den Stand der Einträge sehen Sie mit freien Werkzeugen wie whatsmydns.net oder dnschecker.org.

## Primäre Domain festlegen

Ihr Shop kann bis zu 20 Domains zusätzlich zur myshopify-Adresse haben. **Eine** ist die **primäre**, sie steht in der Browserzeile. Alle anderen leiten laut Hilfe auf sie um, auch die `myshopify.com`-Adresse. Dafür braucht die neue Domain im Admin den Status **Verbunden**, das kann bis zu 48 Stunden dauern.

Setzen Sie nur eine Variante als primär, mit oder ohne `www`. Das vermeidet zwei Varianten derselben Seite.

## E-Mail nicht vergessen

Shopify bietet **kein E-Mail-Postfach** an. Bevor Sie DNS-Einträge ändern:

- **Notieren Sie alle bestehenden Einträge**, mindestens MX und TXT, am besten als Screenshot der DNS-Seite (diese Empfehlung stammt von mir, nicht aus der Shopify-Hilfe). So können Sie jede Änderung zurücknehmen.
- **Lassen Sie die Nameserver Ihres Anbieters unverändert.** Die Hilfe warnt, dass falsch eingerichtete eigene oder externe Nameserver **Verbindungs- und E-Mail-Probleme** verursachen können. Hostet schon ein anderer Anbieter (etwa Cloudflare) Ihre DNS-Einträge, müssen Sie nicht zurückwechseln.
- Bei einer bei Shopify **gekauften oder dorthin übertragenen** Domain gibt es kostenlose **Weiterleitungs-Adressen**. Kommen später MX-Einträge für ein echtes Postfach (Zoho, Google Workspace) hinzu, sind die Weiterleitungen laut Hilfe betroffen.

Die Absenderadresse für Bestellmails stellen Sie getrennt im Admin ein, siehe [Shopify E-Mail-Benachrichtigungen](/de/blog/shopify-email-benachrichtigungen).

## .de-Domain: Verifizierung beachten

Bei EU-Endungen wie `.de`, `.eu`, `.nl` oder `.it` kann der Registrar eine **Identitätsprüfung** verlangen (Hintergrund ist laut Shopify die NIS2-Regulierung). Zeigt Ihre Domain im Admin das Badge „Action Required“, liegt in Ihrem E-Mail-Postfach eine Verifizierungsanfrage. Das ist ein eigener Schritt neben den DNS-Einträgen.

## Wenn es nicht funktioniert: die häufigsten Ursachen

Prüfen Sie diese Punkte zuerst:

- **Tippfehler** in A-, AAAA- oder CNAME-Eintrag, oder der Punkt am Ende der CNAME-Adresse fehlt.
- **Mehr als ein A- oder AAAA-Eintrag**, weil ein alter Eintrag vom früheren Hoster stehen blieb.
- **Ein Proxy zwischen Domain und Shopify**, zum Beispiel der Cloudflare-Proxy. Laut Hilfe werden Proxys von Dritten nicht unterstützt.
- **Ein defektes DNSSEC.** Dann gilt die Domain trotz richtiger Einträge nicht als vollständig verbunden. Das klärt Ihr Domain-Anbieter.
- **CAA-Einträge**, falls vorhanden: Sie müssen `letsencrypt.org`, `pki.goog` und `ssl.com` erlauben, sonst wird kein Zertifikat ausgestellt.
- **Domain abgelaufen oder gesperrt** beim Anbieter.

Für den Shopify-Support halten Sie Domain, DNS-Einträge (als Screenshot) und Admin-Status bereit.

## Domain beim Shop-Umzug

Beim Wechsel von einem anderen System würde ich die Domain **zuletzt** umstellen, nachdem der neue Shop geprüft wurde. So bleibt die alte Seite bis dahin erreichbar (eine Empfehlung aus der Praxis, nicht aus der Shopify-Hilfe). Ist die Domain bereits mit einem anderen Shopify-Shop verbunden, bestätigen Sie laut Hilfe den Besitz per TXT-Eintrag.

Mehr zum Umzug: [Shopify-Umzug und SEO: Weiterleitungen einrichten](/de/blog/shopify-migration-weiterleitungen), [Von WooCommerce zu Shopify wechseln](/de/blog/woocommerce-to-shopify) und [Von Wix zu Shopify wechseln](/de/blog/wix-zu-shopify-umzug).

## Beispiele aus der Praxis

Einen eigenen Domain-Fall aus meinen Projekten kann ich nicht als Beleg zeigen. Der Ablauf stammt aus der Shopify-Hilfe, die Empfehlungen zu E-Mail und Reihenfolge aus Shop-Aufbau und Umzügen.

## Wie ich es handhabe

Bei Aufbau oder Umzug klären wir im Briefing, wo die Domain liegt, welche Dienste (E-Mail) daran hängen und wann sie auf den neuen Shop zeigen soll. Ihr Passwort beim Domain-Anbieter brauche ich nicht: Ich nenne die Einträge, Sie oder Ihr Anbieter tragen sie ein, ich prüfe die Erreichbarkeit. Im Shopify-Admin arbeite ich über ein Collaborator-Konto mit begrenzten Rechten, nicht mit Ihrem Inhaber-Login.

## Häufige Fragen

**Kann ich meine .de-Domain zu Shopify übertragen?** Nein. Laut Shopify-Hilfe ist `.de` nicht übertragbar. Sie verbinden die Domain.

**Geht meine E-Mail kaputt, wenn ich die Domain verbinde?** Nicht zwangsläufig, aber sie hängt an derselben DNS-Zone. Sichern Sie die bestehenden Einträge und ändern Sie nur A, AAAA und den `www`-CNAME.

**Was kostet das Verbinden?** Shopify berechnet dafür nichts zusätzlich. Die Domain selbst zahlen Sie weiter bei Ihrem Anbieter.

**Kann ich mehrere Domains auf einen Shop legen?** Ja, bis zu 20 zusätzlich zur myshopify-Adresse.

**Muss ich die myshopify-Adresse ändern?** Nein. Sie können sie nur ein einziges Mal ändern, und sie leitet auf Ihre primäre Domain um.

## Domain steht, aber der Shop noch nicht?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact): Ich sage Ihnen, was von außen auffällt. Wie ein neuer Shop samt Domain und E-Mail-Umstellung bei mir abläuft, steht auf [Shopify-Shop erstellen lassen](/de/services/shopify-shop-erstellen-lassen), was dabei anfällt, in [Shopify-Shop erstellen lassen: Kosten](/de/blog/shopify-shop-erstellen-lassen-kosten).

**Weiterlesen:** [Shopify E-Mail-Benachrichtigungen](/de/blog/shopify-email-benachrichtigungen) · [Shopify-Umzug und SEO](/de/blog/shopify-migration-weiterleitungen) · [Shopify Markets: mehrere Länder](/de/blog/shopify-markets-mehrere-laender)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
