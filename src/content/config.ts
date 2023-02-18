import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      date: z.date(),
      categories: z.array(z.enum(["css", "js", "html"])),
    }),
  }),
};
