import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const garden = defineCollection({
  loader: glob({ base: "./src/content/garden", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()).optional(),
      firstPlanted: z.coerce.date(),
      lastTended: z.coerce.date(),
      growthStage: z.enum(["seed", "sprout", "plant"]),
      thumbnail: image().optional(),
    }),
});

const legal = defineCollection({
  loader: glob({ base: "./src/content/legal", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
});

const privacy = defineCollection({
  loader: glob({ base: "./src/content/privacy", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
});

export const collections = { garden, legal, privacy };
