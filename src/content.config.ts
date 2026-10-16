import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies: src/content/projects/<locale>/<slug>.md
const projects = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number().int().positive(),
    title: z.string(),
    /** Search title: the store and what was done, e.g. "Jula Bloom: WooCommerce to Shopify Migration" (the site name is added). */
    seoTitle: z.string().optional(),
    summary: z.string(),
    brandSummary: z.string(),
    brandDescription: z.string(),
    image: z.string(),
    mobileImage: z.string().optional(),
    liveUrl: z.url(),
    /** The store has closed: keep the case study, hide links to the store. */
    archived: z.boolean().optional(),
    tags: z.array(z.string()),
    challenge: z.string(),
    scope: z.array(z.string()),
    solution: z.array(z.string()),
    outcome: z.array(z.string()).min(1),
    stack: z.array(z.string()),
    screenshotCaptions: z.array(z.string()).optional(),
    /** The client's Upwork review, word for word and unnamed (shown in English on every locale). */
    review: z.object({ quote: z.string(), rating: z.number().min(1).max(5) }).optional(),
  }),
});

// Project catalog cards, one entry per project with descriptions for every locale.
const works = defineCollection({
  loader: file('./src/content/works.yaml'),
  schema: z.object({
    order: z.number().int().positive(),
    title: z.string(),
    url: z.url(),
    /** The theme the live store runs on (schema_name of Shopify.theme on its homepage); "Custom" for own themes. */
    theme: z.string(),
    /** What the work was, for the filters on /projects (lib/content.ts WORK_KINDS). */
    work: z.array(z.enum(['build', 'migration', 'redesign', 'features', 'speed', 'support', 'launch'])).min(1),
    /** Where the store is based (Shopify /meta.json), for the globe section. */
    country: z.string().length(2).optional(),
    city: z.string().optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    image: z.string(),
    /** Mobile screenshot (Safari viewport, 1179x1977); case studies may set it in their own frontmatter instead. */
    mobileImage: z.string().optional(),
    caseStudySlug: z.string().optional(),
    archived: z.boolean().optional(),
    /** Brand color of the project (scripts/make-accents.mjs), used as the background of its card. */
    accent: z.string().regex(/^#[0-9a-fA-F]{6}$/).optional(),
    accentLocked: z.boolean().optional(),
    tech: z.object({ en: z.string(), de: z.string(), uk: z.string() }),
  }),
});

// Blog posts: src/content/blog/<locale>/<slug>.md
const blog = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/blog' }),
  schema: z.object({
    publishedAt: z.coerce.date(),
    title: z.string(),
    date: z.string(),
    readingTime: z.string(),
    excerpt: z.string(),
    image: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// Service pages: src/content/services/<locale>/<slug>.md, one per kind of work that has its own page.
const services = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/services' }),
  schema: z.object({
    order: z.number().int().positive(),
    /** The kind of work in works.yaml / lib/content.ts WORK_KINDS; the Services row of that kind links here. */
    kind: z.enum(['build', 'migration', 'redesign', 'features', 'speed', 'support', 'launch']).optional(),
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    lead: z.string(),
    audience: z.array(z.string()).min(1),
    scope: z.array(z.object({ title: z.string(), text: z.string() })).min(1),
    steps: z.array(z.object({ title: z.string(), text: z.string() })).min(1),
    /** A case study that proves the service, with a few lines about it. */
    caseSlug: z.string(),
    caseText: z.array(z.string()).min(1),
    /** Other case studies that show this kind of work; their pages link here too. */
    alsoCases: z.array(z.string()).optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })),
    /** A blog article on the same topic, if there is one. */
    articleSlug: z.string().optional(),
  }),
});

export const collections = { projects, works, blog, services };
