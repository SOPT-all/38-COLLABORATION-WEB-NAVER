import {z} from 'zod';

import {createApiSuccessSchema} from '@/shared/api/response-schemas';

export const recommendationItemSchema = z.object({
  itemId: z.number(),
  name: z.string(),
  imageUrl: z.string(),
  originalPrice: z.number(),
  discountRate: z.number(),
  discountedPrice: z.number().nullable(),
  isTomorrowDelivery: z.boolean(),
});

export const recommendationResponseDataSchema = z.object({
  title: z.string(),
  items: z.array(recommendationItemSchema),
});

export const recommendationResponseSchema = createApiSuccessSchema(
  recommendationResponseDataSchema
);

export type RecommendationItem = z.infer<typeof recommendationItemSchema>;
export type RecommendationResponseData = z.infer<
  typeof recommendationResponseDataSchema
>;
export type RecommendationResponse = z.infer<
  typeof recommendationResponseSchema
>;
