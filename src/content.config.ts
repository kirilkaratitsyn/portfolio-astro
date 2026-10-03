import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies: src/content/projects/<locale>/<slug>.md
const projects = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number().int().positive(),
    title: z.string(),
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

export const collections = { projects, works, blog };
