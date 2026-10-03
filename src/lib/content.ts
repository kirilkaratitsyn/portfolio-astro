import { getCollection, type CollectionEntry } from 'astro:content';
import { splitEntryId, type Locale } from '../i18n';

export type CaseStudy = CollectionEntry<'projects'>['data'] & {
  slug: string;
  entry: CollectionEntry<'projects'>;
};

/** The kinds of work the /projects filter offers, in the order it lists them (labels: i18n works.filters.work). */
export const WORK_KINDS = ['build', 'migration', 'redesign', 'features', 'speed', 'support', 'launch'] as const;
export type WorkKind = (typeof WORK_KINDS)[number];

/** URL value of a theme for the /projects filter: "Be Yours" → "be-yours". */
export const themeSlug = (theme: string) => theme.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Themes by the number of projects on them, own themes ("Custom") last. */
export function themesOf(works: WorkProject[]) {
  const counts = new Map<string, number>();
  for (const w of works) counts.set(w.theme, (counts.get(w.theme) ?? 0) + 1);
  return [...counts.entries()]
    .map(([name, count]) => ({ name, slug: themeSlug(name), count }))
    .sort((a, b) => Number(a.name === 'Custom') - Number(b.name === 'Custom') || b.count - a.count || a.name.localeCompare(b.name));
}

export type WorkProject = {
  id: string;
  title: string;
  url: string;
  theme: string;
  work: WorkKind[];
  country?: string;
  city?: string;
  lat?: number;
  lng?: number;
  image: string;
  mobileImage?: string;
  tech: string;
  caseStudySlug?: string;
  archived?: boolean;
  accent?: string;
};

export type BlogPost = CollectionEntry<'blog'>['data'] & {
  slug: string;
  entry: CollectionEntry<'blog'>;
};

export async function getCaseStudies(locale: Locale): Promise<CaseStudy[]> {
  const entries = await getCollection('projects', (entry) => splitEntryId(entry.id).locale === locale);

  return entries
    .map((entry) => ({ ...entry.data, slug: splitEntryId(entry.id).slug, entry }))
    .sort((a, b) => a.order - b.order);
}

export async function getWorks(locale: Locale): Promise<WorkProject[]> {
  const entries = await getCollection('works');

  return entries
    .sort((a, b) => a.data.order - b.data.order)
    .map(({ id, data }) => ({
      id,
      title: data.title,
      url: data.url,
      theme: data.theme,
      work: data.work,
      country: data.country,
      city: data.city,
      lat: data.lat,
      lng: data.lng,
      image: data.image,
      mobileImage: data.mobileImage,
      tech: data.tech[locale],
      caseStudySlug: data.caseStudySlug,
      archived: data.archived,
      accent: data.accent,
    }));
}

export async function getPosts(locale: Locale): Promise<BlogPost[]> {
  const entries = await getCollection('blog', (entry) => splitEntryId(entry.id).locale === locale);

  return entries
    .map((entry) => ({ ...entry.data, slug: splitEntryId(entry.id).slug, entry }))
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}
