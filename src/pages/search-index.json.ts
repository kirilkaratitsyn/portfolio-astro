import type { APIRoute } from 'astro';
import { DEFAULT_LOCALE, useTranslations } from '../i18n';
import { getSearchIndex } from '../lib/search-index';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(await getSearchIndex(DEFAULT_LOCALE, useTranslations(DEFAULT_LOCALE))), { headers: { 'Content-Type': 'application/json' } });
