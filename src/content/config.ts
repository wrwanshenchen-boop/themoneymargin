import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    readTime: z.string(),
    order: z.number(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
};
