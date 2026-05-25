import { defineCollection, z } from 'astro:content';

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    order: z.number(),
    duration: z.string().default('50-60 分鐘'),
    objectives: z.array(z.string()).optional(),
  }),
});

const labs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    order: z.number(),
    duration: z.string().default('50 分鐘'),
    scenario: z.string().optional(),
  }),
});

const handouts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    order: z.number(),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    order: z.number(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    order: z.number(),
  }),
});

const teachingNotes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    order: z.number(),
  }),
});

const templates = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    order: z.number(),
  }),
});

export const collections = { lessons, labs, handouts, resources, guides, 'teaching-notes': teachingNotes, templates };
