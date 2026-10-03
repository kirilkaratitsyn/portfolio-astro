import { getCollection, type CollectionEntry } from 'astro:content';
import { splitEntryId, type Locale } from '../i18n';

export type CaseStudy = CollectionEntry<'projects'>['data'] & {
  slug: string;
  entry: CollectionEntry<'projects'>;
};

export type WorkProject = {
  id: string;
  title: string;
  url: string;
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
