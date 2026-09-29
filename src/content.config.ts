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
    image: z.string(),
    caseStudySlug: z.string().optional(),
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
