import en from './en.json';
import de from './de.json';
import uk from './uk.json';

export const LOCALES = ['en', 'de', 'uk'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

// Labels shown in the language switcher, in display order.
export const SWITCHER_LOCALES: { locale: Locale; label: string }[] = [
  { locale: 'en', label: 'EN' },
  { locale: 'uk', label: 'UA' },
  { locale: 'de', label: 'DE' },
];

export const OG_LOCALES: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  uk: 'uk_UA',
};

export type UI = typeof en;

const dictionaries: Record<Locale, UI> = { en, de, uk } as Record<Locale, UI>;

export function useTranslations(locale: Locale): UI {
  return dictionaries[locale];
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

/**
 * Prefix an unlocalized path with the locale segment.
 * localizePath('de', '/projects') -> '/de/projects'
 * localizePath('de', '/#services') -> '/de#services'
 * localizePath('en', '/projects') -> '/projects'
 */
export function localizePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  if (path === '/') return `/${locale}`;
  if (path.startsWith('/#')) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

export function interpolate(template: string, values: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => values[key] ?? '');
}

/** Split a content collection id like "de/nimfa" into its locale and slug. */
export function splitEntryId(id: string): { locale: Locale; slug: string } {
  const [locale, ...rest] = id.split('/');
  if (!isLocale(locale)) throw new Error(`Unknown locale in content id "${id}"`);
  return { locale, slug: rest.join('/') };
}
