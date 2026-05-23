import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    titleTag: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    imageAlt: z.string(),
    language: z.string().optional(),
    color: z.string().optional(),
    category: z.string().optional(),
    showBackToBlog: z.boolean().optional(),
  }),
})

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    titleTag: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
})

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    theme: z.enum(["engineering", "career", "books", "music", "uses"]),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
})

export const collections = { blog, writing, notes }
