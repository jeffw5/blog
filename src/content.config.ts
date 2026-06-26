import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const emptyToUndefined = (val: unknown) =>
	val == null ||
	val === '' ||
	(typeof val === 'object' && !(val instanceof Date))
		? undefined
		: val;

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.preprocess(emptyToUndefined, z.coerce.date().optional()),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };