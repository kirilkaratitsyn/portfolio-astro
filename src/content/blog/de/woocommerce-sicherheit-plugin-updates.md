---
publishedAt: 2026-10-22
title: "WooCommerce Sicherheit und Plugin-Updates: pflegen oder wechseln?"
date: 22. Oktober 2026
readingTime: 6 Min
excerpt: "WooCommerce Sicherheit und Plugin-Updates: wo die Lücken liegen, was Pflege konkret heißt und wann Shopify weniger Aufwand bringt."
image: /og/projects/petaljet.jpg
topic: migration
tags:
  - WooCommerce
  - Sicherheit
  - Shopify
---

„Ständig sind Plugin-Updates nötig“ ist ein häufiger und berechtigter Grund, über einen Wechsel von WooCommerce nachzudenken. WooCommerce ist nicht unsicher. Aber ein WooCommerce-Shop ist nur so sicher wie seine Pflege.

## Wo die Sicherheitslücken wirklich liegen

Der WordPress-Kern ist selten das Problem. Der Sicherheitsanbieter Patchstack zählt im Bericht [State of WordPress Security in 2026](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/) für 2025 insgesamt 11.334 neue Schwachstellen im WordPress-Umfeld, 42 Prozent mehr als im Vorjahr. Davon lagen 91 Prozent in Plugins, 9 Prozent in Themes und nur 6 im WordPress-Kern.

Zwei weitere Zahlen aus demselben Bericht:

- **46 Prozent** der Schwachstellen hatten bei der Veröffentlichung noch keinen Fix des Entwicklers.
- Bei den am häufigsten ausgenutzten Lücken lag die Zeit bis zu Massenangriffen im Median bei rund **5 Stunden**; etwa die Hälfte der folgenschweren Lücken wurde binnen 24 Stunden ausgenutzt.

Zur Einordnung: Patchstack verkauft Sicherheitslösungen, und die Zahlen gelten für WordPress insgesamt, nicht nur für WooCommerce. Das Muster ist trotzdem eindeutig. Jedes Plugin ist zusätzliche Angriffsfläche, und ein Update nach einer Woche kommt für manche Lücken zu spät. Weil fast jede zweite Lücke bei Bekanntwerden noch keinen Fix hat, reichen Updates allein nicht. Weniger Plugins bedeuten weniger, was betroffen sein kann.

## Was „regelmäßig pflegen“ konkret heißt

Die [offizielle Sicherheitsanleitung von WooCommerce](https://developer.woocommerce.com/docs/best-practices/security/security-best-practices) nennt Updates, Staging, Aufräumen, Backups und Zugangsschutz. Als Aufgaben, ergänzt aus der Praxis:

1. **Updates einspielen:** WordPress, WooCommerce, Theme und jedes Plugin, dazu die PHP-Version beim Hoster.
2. **Vorher testen:** in einer Staging-Kopie, nicht im laufenden Shop.
3. **Danach prüfen:** Warenkorb, Kasse, Zahlungsarten, Übersetzung und Formulare.
4. **Aufräumen:** Plugins entfernen, die nicht mehr gepflegt werden, bekannte Lücken haben oder nicht mehr gebraucht werden.
5. **Zugänge absichern:** starke Passwörter, Zwei-Faktor-Anmeldung, Begrenzung der Login-Versuche, so wenige Admin-Konten wie nötig.
6. **Backups:** regelmäßig, außerhalb des Servers gespeichert und mindestens einmal probeweise zurückgespielt.

Die Liste ist **nie fertig**: Sie wiederholt sich jede Woche, für jedes Plugin.

### Automatische Updates sind nur die halbe Antwort

Sind alle automatischen Updates an, kann nachts ein Update die Kasse lahmlegen. Das kostet Umsatz, bevor es jemand merkt. Sind sie aus, bleibt die Lücke offen, bis jemand Zeit hat. Was funktioniert:

- automatische Updates für das Unkritische,
- ein fester Wartungsrhythmus mit Test für alles, was Shop und Kasse berührt,
- eine Person, die dafür zuständig ist.

## Was Shopify abnimmt

- **Hosting, Server und Plattform-Updates** übernimmt Shopify. Sie spielen keine WordPress-Version, keine PHP-Version und keine Plugin-Updates der Plattform ein.
- **SSL** ist eingebaut, der **Checkout** läuft auf Shopify.
- **Kartendaten:** Shopify gibt an, nach [PCI DSS Level 1](https://www.shopify.com/pci-compliant) zertifiziert zu sein; die Zertifizierung gilt laut Shopify standardmäßig für alle Shops und umfasst Shop, Warenkorb und Hosting.
- **Apps** werden von ihren Entwicklern zentral aktualisiert.

## Was bei Shopify Ihre Aufgabe bleibt

- **Apps auswählen und ausmisten.** Jede App ist Code von Dritten mit Zugriff auf Ihre Daten. Weniger Apps bedeuten weniger Risiko und einen schnelleren Shop (siehe [Langsamer Shopify-Shop? 7 Ursachen](/de/blog/slow-shopify-store)).
- **Zugänge verwalten.** Wer hat Zugang, mit welchen Rechten, mit Zwei-Faktor-Anmeldung? Ehemalige Mitarbeiter und Agenturen gehören entfernt.
- **Theme-Updates und Theme-Code.** Neue Versionen aus dem Theme Store übernehmen Sie bewusst. Ein angepasstes Theme aktualisiert sich nicht von selbst. Eigene Anpassungen verantworten Sie oder Ihr Entwickler.
- **Phishing und Passwörter.** Konten werden häufig nicht durch Lücken übernommen, sondern durch gestohlene Zugangsdaten.

Sie pflegen damit einen kleinen Kreis aus Zugängen und Apps statt eines ganzen Systems.

## Drei Wege, wenn Updates Sie belasten

1. **WooCommerce sauber warten.** Am wenigsten Umbruch. Es braucht jemanden, der Updates, Tests, Backups und Aufräumen verlässlich in festem Rhythmus erledigt. Weniger Plugins helfen.
2. **Nur den Shop zu Shopify.** Checkout, Kundendaten und Zahlungen wandern auf Shopify. Die Firmenseiten und ihre Updates bleiben auf WordPress, aber das sensibelste Stück ist nicht mehr dabei. Alte Produktadressen brauchen Weiterleitungen, damit Ihre Rankings bleiben.
3. **Die ganze Website zu Shopify.** Ein System, die WordPress-Updates fallen ganz weg. Das ist der größte Umbau, weil Firmenseiten, Formulare und gegebenenfalls Sprachversionen neu aufgebaut werden.

Welcher Weg passt, hängt davon ab, wer die Seite heute pflegt, was neben dem Shop dazugehört und ob Sonderfunktionen an anderen Systemen hängen.

## Wann Sie bei WooCommerce bleiben sollten

Bleiben Sie, wenn:

- jemand die Wartung **verlässlich und mit Test** übernimmt, zum Beispiel eine Agentur mit festem Wartungsplan,
- Ihr Shop auf Erweiterungen aufbaut, für die es in Shopify keinen Ersatz gibt,
- nur wenige, gut gepflegte Plugins im Einsatz sind und der Aufwand klein ist.

Das klärt man am besten Plugin für Plugin. Wie ein Umzug abläuft, zeigt [Von WooCommerce zu Shopify umziehen, ohne Rankings zu verlieren](/de/blog/woocommerce-to-shopify).

## Zehn Fragen, die Sie sich stellen können

1. Wer spielt die Updates ein, und wer vertritt diese Person?
2. Wann lief das letzte Update, und was wurde danach getestet?
3. Gibt es eine Staging-Kopie für Updates?
4. Wie viele Plugins sind aktiv, und wie viele werden noch gepflegt?
5. Welche Plugins brauchen wir nicht mehr?
6. Wurde ein Backup schon einmal zurückgespielt?
7. Wie viele Admin-Konten gibt es, und haben alle Zwei-Faktor-Anmeldung?
8. Welche PHP-Version läuft beim Hoster, und wird sie noch unterstützt?
9. Wer merkt es, wenn die Kasse nach einem Update ausfällt?
10. Was kostet eine Stunde Stillstand im Shop?

Mehrere Antworten mit „weiß nicht“ zeigen, wie sicher der Shop heute gepflegt wird.

## Häufige Fragen

**Ist WooCommerce unsicher?** Nein. Das Risiko entsteht durch die vielen Plugins und Themes drumherum und durch Updates, die verspätet oder gar nicht eingespielt werden.

**Reichen automatische Updates?** Für Unkritisches ja. Alles, was Shop und Kasse berührt, braucht einen Test.

**Ist Shopify sicherer als WooCommerce?** Pauschal lässt sich das nicht sagen. Shopify nimmt Ihnen Hosting, Plattform-Updates und den Checkout ab. Apps, Zugänge und Theme-Code bleiben Ihre Verantwortung.

**Verliere ich beim Wechsel meine Google-Rankings?** Nicht, wenn alle alten Adressen auf die passenden neuen weitergeleitet werden.

**Geht es auch ohne Wechsel mit weniger Aufwand?** Ja: Plugins reduzieren, einen festen Wartungsrhythmus mit Test einführen und klären, wer zuständig ist.

## Wie gut ist Ihr Shop heute gepflegt?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich sehe mir an, welche Plugins im Einsatz sind und wie schnell die Seiten laden, nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Backend und ohne Sicherheitsscan. Dann sage ich Ihnen, ob Pflegen oder Wechseln besser passt.

Ich arbeite von [Bad Bentheim](/de/services/shopify-bad-bentheim) aus und übernehme den [Umzug von WooCommerce zu Shopify](/de/services/woocommerce-to-shopify) zum Festpreis nach dem Briefing. Mehr dazu: [Was ein Shopify-Shop kostet](/de/blog/shopify-shop-erstellen-lassen-kosten).

**Weiterlesen:** [Shopify Wartung: Was die Plattform übernimmt](/de/blog/shopify-wartung-betreuung)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
