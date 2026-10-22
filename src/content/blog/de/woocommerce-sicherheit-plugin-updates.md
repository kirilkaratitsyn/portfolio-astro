---
publishedAt: 2026-10-22
title: "WooCommerce Sicherheit und Plugin-Updates: pflegen oder wechseln?"
date: 22. Oktober 2026
readingTime: 7 Min
excerpt: Warum fast alle WordPress-Sicherheitslücken in Plugins liegen, was regelmäßige Updates in einem WooCommerce-Shop wirklich bedeuten und wann ein Wechsel zu Shopify weniger Pflegeaufwand bringt.
image: /og/projects/petaljet.jpg
topic: migration
tags:
  - WooCommerce
  - Sicherheit
  - Shopify
---

„Ständig sind Plugin-Updates nötig“: Das ist ein häufiger Grund, über einen Wechsel von WooCommerce nachzudenken, und er ist berechtigt. WooCommerce ist nicht unsicher, aber ein WooCommerce-Shop ist nur so sicher wie die Pflege, die ihn begleitet. Dieser Artikel zeigt, wo die Risiken tatsächlich liegen, was „regelmäßig pflegen“ konkret heißt und was Shopify Ihnen abnimmt und was nicht.

## Wo die Sicherheitslücken wirklich liegen

Das Herz von WordPress ist selten das Problem. Der Sicherheitsanbieter Patchstack zählt in seinem Bericht [State of WordPress Security in 2026](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/) für das Jahr 2025 insgesamt 11.334 neue Schwachstellen im WordPress-Umfeld, 42 Prozent mehr als im Vorjahr. Davon lagen 91 Prozent in Plugins, 9 Prozent in Themes und nur 6 im WordPress-Kern.

Zwei weitere Zahlen aus demselben Bericht erklären, warum Zeit hier zählt:

- **46 Prozent** der Schwachstellen hatten bei der Veröffentlichung noch keinen Fix des Entwicklers.
- Bei den am häufigsten ausgenutzten Lücken lag die Zeit bis zu Massenangriffen im Median bei rund **5 Stunden**; etwa die Hälfte der folgenschweren Lücken wurde binnen 24 Stunden ausgenutzt.

Ein Hinweis zur Einordnung: Patchstack verkauft Sicherheitslösungen, und die Zahlen gelten für WordPress insgesamt, nicht nur für WooCommerce. Das Muster ist trotzdem eindeutig: Jedes zusätzliche Plugin ist zusätzliche Angriffsfläche, und ein Update, das erst nach einer Woche eingespielt wird, kommt für manche Lücken zu spät. Weil zudem fast jede zweite Lücke bei Bekanntwerden noch keinen Fix hat, reichen Updates allein nicht: Wer weniger Plugins einsetzt, hat weniger, was überhaupt betroffen sein kann.

## Was „regelmäßig pflegen“ konkret heißt

Die [offizielle Sicherheitsanleitung von WooCommerce](https://developer.woocommerce.com/docs/best-practices/security/security-best-practices) nennt Updates, Staging, Aufräumen, Backups und Zugangsschutz. Übersetzt in Aufgaben, die jemand erledigen muss, kommt aus der Praxis noch einiges dazu:

1. **Updates einspielen:** WordPress, WooCommerce, Theme und jedes Plugin, dazu die PHP-Version beim Hoster.
2. **Vorher testen:** Updates erst in einer Staging-Kopie ausprobieren, nicht direkt im laufenden Shop.
3. **Danach prüfen:** Warenkorb, Kasse, Zahlungsarten, Übersetzung und Formulare. Ein Update, das die Kasse stillschweigend kaputt macht, kostet Umsatz, bevor es jemand merkt.
4. **Aufräumen:** Plugins entfernen, die nicht mehr gepflegt werden oder bekannte Lücken haben. Das gilt auch für Plugins, die nur noch „irgendwie da“ sind.
5. **Zugänge absichern:** starke Passwörter, Zwei-Faktor-Anmeldung, Begrenzung der Login-Versuche, so wenige Admin-Konten wie nötig.
6. **Backups:** regelmäßig, außerhalb des Servers gespeichert, und mindestens einmal probeweise zurückgespielt.

Diese Liste ist kein Hexenwerk. Das Problem ist, dass sie **nie fertig ist**: Sie wiederholt sich mit jedem Update, jede Woche, für jedes Plugin.

### Automatische Updates sind nur die halbe Antwort

Schaltet man alle automatischen Updates ein, bleibt das Risiko, dass nachts ein Update die Kasse lahmlegt und es erst morgens auffällt. Schaltet man sie aus, bleibt die Lücke offen, bis jemand Zeit hat. Dazwischen liegt die Lösung, die funktioniert: automatische Updates für das Unkritische, ein fester Wartungsrhythmus mit Test für alles, was Shop und Kasse berührt, und eine Person, die dafür zuständig ist.

## Was Shopify abnimmt

Bei Shopify fällt der größte Teil dieser Liste weg, weil er nicht mehr bei Ihnen liegt:

- **Hosting, Server und Plattform-Updates** übernimmt Shopify. Es gibt keine WordPress-Version, keine PHP-Version und keine Plugin-Updates der Plattform, die Sie einspielen müssen.
- **SSL** ist eingebaut, der **Checkout** läuft auf Shopify.
- **Kartendaten:** Shopify gibt an, nach [PCI DSS Level 1](https://www.shopify.com/pci-compliant) zertifiziert zu sein; die Zertifizierung gilt laut Shopify standardmäßig für alle Shops und umfasst Shop, Warenkorb und Hosting.
- **Apps** werden von ihren Entwicklern zentral aktualisiert. Sie spielen keine Dateien ein.

## Was bei Shopify Ihre Aufgabe bleibt

Shopify ist kein Freifahrtschein. Das bleibt bei Ihnen:

- **Apps auswählen und ausmisten.** Jede App ist Code von Dritten mit Zugriff auf Ihre Daten. Weniger Apps bedeuten weniger Risiko und einen schnelleren Shop (siehe [Langsamer Shopify-Shop? 7 Ursachen](/de/blog/slow-shopify-store)).
- **Zugänge verwalten.** Wer ist Mitarbeiter im Shop, mit welchen Rechten, mit Zwei-Faktor-Anmeldung? Ehemalige Mitarbeiter und Agenturen gehören entfernt.
- **Theme-Updates und Theme-Code.** Themes aus dem Theme Store bekommen neue Versionen, die Sie bewusst übernehmen müssen. Eigene Anpassungen verantworten Sie oder Ihr Entwickler, und ein angepasstes Theme aktualisiert sich nicht von selbst.
- **Phishing und Passwörter.** Konten werden häufig nicht durch Lücken übernommen, sondern durch gestohlene Zugangsdaten.

Der Unterschied ist die Größenordnung: Sie pflegen einen kleinen Kreis aus Zugängen und Apps statt eines ganzen Systems.

## Drei Wege, wenn Updates Sie belasten

Das hängt davon ab, was außer dem Shop noch auf Ihrer WordPress-Installation läuft:

1. **WooCommerce sauber warten.** Am wenigsten Umbruch. Dafür braucht es jemanden, der Updates, Tests, Backups und Aufräumen verlässlich erledigt, am besten mit festem Rhythmus. Sinnvoll ist, Plugins zu reduzieren.
2. **Nur den Shop zu Shopify.** Checkout, Kundendaten und Zahlungen wandern auf Shopify. Die Firmenseiten bleiben auf WordPress, deren Updates also auch, aber das sensibelste Stück ist nicht mehr dabei. Alte Produktadressen brauchen Weiterleitungen, damit Ihre Rankings bleiben.
3. **Die ganze Website zu Shopify.** Ein System, die WordPress-Updates fallen ganz weg. Das ist der größte Umbau, weil Firmenseiten, Formulare und gegebenenfalls Sprachversionen neu aufgebaut werden.

Welcher Weg passt, hängt vor allem davon ab, wer die Seite heute pflegt, was neben dem Shop dazugehört und ob Sonderfunktionen an anderen Systemen hängen.

## Wann Sie bei WooCommerce bleiben sollten

Ein Wechsel ist nicht immer die richtige Antwort. Bleiben Sie, wenn:

- jemand die Wartung **verlässlich und mit Test** übernimmt, zum Beispiel eine Agentur mit festem Wartungsplan,
- Ihr Shop auf Erweiterungen aufbaut, für die es in Shopify keinen Ersatz gibt,
- der Aufwand für die Pflege klein ist, weil nur wenige, gut gepflegte Plugins im Einsatz sind.

Das klärt man am besten Plugin für Plugin. Wie ein Umzug abläuft, zeigt [Von WooCommerce zu Shopify umziehen, ohne Rankings zu verlieren](/de/blog/woocommerce-to-shopify).

## Zehn Fragen, die Sie sich stellen können

1. Wer spielt bei uns die Updates ein, und wer vertritt diese Person?
2. Wann wurde zuletzt ein Update eingespielt, und was wurde danach getestet?
3. Gibt es eine Staging-Kopie, auf der Updates vorab laufen?
4. Wie viele Plugins sind aktiv, und wie viele davon werden noch gepflegt?
5. Gibt es Plugins, die wir nicht mehr brauchen?
6. Wurde ein Backup schon einmal wirklich zurückgespielt?
7. Wie viele Admin-Konten gibt es, und haben alle Zwei-Faktor-Anmeldung?
8. Welche PHP-Version läuft beim Hoster, und wird sie noch unterstützt?
9. Wer merkt es, wenn die Kasse nach einem Update nicht mehr funktioniert?
10. Was kostet uns eine Stunde Stillstand im Shop?

Wenn Sie bei mehreren Fragen nur „weiß nicht“ antworten können, ist das bereits die Antwort auf die Frage, wie sicher der Shop heute gepflegt wird.

## Häufige Fragen

**Ist WooCommerce unsicher?** Nein. Die Software ist weit verbreitet und wird gepflegt. Das Risiko entsteht durch die vielen Plugins und Themes drumherum und dadurch, dass Updates verspätet oder gar nicht eingespielt werden.

**Reichen automatische Updates?** Für Unkritisches ja. Für alles, was Shop und Kasse berührt, braucht es einen Test, sonst ist das Risiko eines kaputten Checkouts größer als der Nutzen.

**Ist Shopify sicherer als WooCommerce?** Pauschal lässt sich das nicht sagen. Shopify nimmt Ihnen Hosting, Plattform-Updates und den Checkout ab und senkt damit den Pflegeaufwand deutlich. Apps, Zugänge und Theme-Code bleiben Ihre Verantwortung.

**Verliere ich beim Wechsel meine Google-Rankings?** Nicht, wenn alle alten Adressen auf die passenden neuen weitergeleitet werden. Das ist der wichtigste Schritt eines Umzugs.

**Geht es auch ohne Wechsel mit weniger Aufwand?** Ja: Plugins reduzieren, einen festen Wartungsrhythmus mit Test einführen und klären, wer zuständig ist. Das ist oft der erste Schritt, egal welchen Weg Sie danach wählen.

## Wie gut ist Ihr Shop heute gepflegt?

Schicken Sie mir die Adresse Ihres Shops für den [kostenlosen Shop-Check](#contact). Ich sehe mir an, was von außen sichtbar ist: welche Plugins im Einsatz sind und wie schnell die Seiten laden. Ich arbeite nur mit öffentlich sichtbaren Daten, ohne Zugang zu Ihrem Backend und ohne Sicherheitsscan. Dann sage ich Ihnen ehrlich, ob Pflegen oder Wechseln für Sie besser passt. Ich arbeite von [Bad Bentheim](/de/services/shopify-bad-bentheim) aus, meist remote, und übernehme bei Bedarf den [Umzug von WooCommerce zu Shopify](/de/services/woocommerce-to-shopify) zum Festpreis nach dem Briefing. Was Sie dabei im Vorfeld erwartet, steht in [Was ein Shopify-Shop kostet](/de/blog/shopify-shop-erstellen-lassen-kosten).

**Weiterlesen:** [Shopify Wartung: Was die Plattform übernimmt](/de/blog/shopify-wartung-betreuung)

*[Kiril Karatitsyn](/de/about), Shopify-Entwickler in Deutschland*
