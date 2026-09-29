import { DEFAULT_LOCALE, LOCALES, type Locale } from '../i18n';
import { getCaseStudies, getPosts } from './content';

/** Locales that live under a URL prefix (/de, /uk). English is served from the root. */
export const PREFIXED_LOCALES = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

export function prefixedLocalePaths() {
  return PREFIXED_LOCALES.map((lang) => ({ params: { lang } }));
}

export async function caseStudyPaths(locales: readonly Locale[]) {
  const paths = [];
  for (const locale of locales) {
    const caseStudies = await getCaseStudies(locale);
    for (const caseStudy of caseStudies) {
      paths.push({ params: { lang: locale, slug: caseStudy.slug }, props: { locale, caseStudy, caseStudies } });
    }
  }
  return paths;
}

export async function postPaths(locales: readonly Locale[]) {
  const paths = [];
  for (const locale of locales) {
    for (const post of await getPosts(locale)) {
      paths.push({ params: { lang: locale, slug: post.slug }, props: { locale, post } });
    }
  }
  return paths;
}
