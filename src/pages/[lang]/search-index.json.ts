import type { APIRoute } from 'astro';
import { useTranslations, type Locale } from '../../i18n';
import { prefixedLocalePaths } from '../../lib/paths';
import { getSearchIndex } from '../../lib/search-index';

export const getStaticPaths = prefixedLocalePaths;

export const GET: APIRoute = async ({ params }) => {
  const locale = params.lang as Locale;
  return new Response(JSON.stringify(await getSearchIndex(locale, useTranslations(locale))), { headers: { 'Content-Type': 'application/json' } });
};
