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
  }),
})

export const collections = { blog }
