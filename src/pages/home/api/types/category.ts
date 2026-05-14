import {z} from 'zod';

import {createApiSuccessSchema} from '@/shared/api/response-schemas';

export const categorySchema = z.object({
  categoryId: z.number(),
  name: z.string(),
  iconUrl: z.string(),
});

export const categoryResponseDataSchema = z.object({
  categories: z.array(categorySchema),
  totalCount: z.number(),
  isExpanded: z.boolean(),
});

export const categoryResponseSchema = createApiSuccessSchema(
  categoryResponseDataSchema
);

export type Category = z.infer<typeof categorySchema>;
export type CategoryResponseData = z.infer<typeof categoryResponseDataSchema>;
export type CategoryResponse = z.infer<typeof categoryResponseSchema>;
