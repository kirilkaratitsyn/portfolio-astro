# karatitsyn.com

Портфолио Shopify-разработчика на [Astro](https://astro.build). Сайт собирается в статический HTML: у каждой страницы свой title, описание, canonical и hreflang, а у каждого языка свои адреса.

| Язык | Адреса |
|---|---|
| English | `/`, `/projects`, `/projects/nimfa`, `/blog` … |
| Deutsch | `/de`, `/de/projects`, `/de/projects/nimfa` … |
| Українська | `/uk`, `/uk/projects`, `/uk/projects/nimfa` … |

## Команды

```bash
npm install
npm run dev       # локальная разработка
npm run build     # сборка в dist/
npm run preview   # раздать dist/ так же, как Vercel (cleanUrls, без слэша в конце)
npm run check     # проверка типов и контента
```

## Где что лежит

```
src/
  content/
    projects/<язык>/<slug>.md   # кейсы: одна страница /projects/<slug> на каждый язык
    works.yaml                  # каталог проектов (карточки), описания на 3 языках
    blog/<язык>/<slug>.md       # статьи
  content.config.ts             # схема полей: сборка упадёт, если поле забыто
  i18n/<язык>.json              # все остальные тексты сайта
  sections/                     # секции страниц (Hero, Services, Experience …)
  views/                        # шаблоны страниц, общие для всех языков
  pages/                        # роуты: английский в корне, [lang]/ для de и uk
public/                         # картинки, шрифты, видео, robots.txt, llms.txt
```

## Как добавить кейс

1. Создать `src/content/projects/en/<slug>.md`, `de/<slug>.md` и `uk/<slug>.md` (удобно скопировать существующий кейс).
2. Заполнить поля во frontmatter. `order` задаёт порядок: первые три кейса показываются на главной.
3. Под frontmatter можно писать обычный Markdown: он выводится внизу страницы кейса.
4. Если у проекта есть карточка в `works.yaml`, указать у неё `caseStudySlug: <slug>`.

Страницы на трёх языках, sitemap и hreflang появятся автоматически.

## Как добавить проект в каталог

Добавить запись в `src/content/works.yaml` (`id`, `order`, `title`, `url`, `image`, `tech` на трёх языках). Скриншот положить в `public/source/desktop/`.

## Деплой

Vercel определяет Astro автоматически (Build: `npm run build`, Output: `dist`). `vercel.json` включает адреса без `.html` и без слэша в конце и держит 301-редиректы со старых `/work/*`.

## Миграция

Контент перенесён из React-версии (`portfolio-react/src/i18n.ts`) скриптом `scripts/migrate-from-react.mjs`. Повторно запускать его не нужно: он перезапишет правки в `src/content` и `src/i18n`.
