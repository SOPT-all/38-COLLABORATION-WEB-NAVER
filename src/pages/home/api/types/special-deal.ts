import {z} from 'zod';

import {createApiSuccessSchema} from '@/shared/api/response-schemas';

export const specialProductBadgeSchema = z.enum(['brand-day', 'plus-sale']);

export const specialDealItemSchema = z.object({
  itemId: z.number(),
  name: z.string(),
  imageUrl: z.string(),
  imageAlt: z.string(),
  originalPrice: z.number(),
  discountRate: z.number(),
  discountedPrice: z.number(),
  isTomorrowDelivery: z.boolean(),
  badge: specialProductBadgeSchema,
});

export const specialDealResponseDataSchema = z.object({
  endTime: z.string(),
  items: z.array(specialDealItemSchema),
});

export const specialDealResponseSchema = createApiSuccessSchema(
  specialDealResponseDataSchema
);

export type SpecialProductBadge = z.infer<typeof specialProductBadgeSchema>;
export type SpecialDealItem = z.infer<typeof specialDealItemSchema>;
export type SpecialDealResponseData = z.infer<
  typeof specialDealResponseDataSchema
>;
export type SpecialDealResponse = z.infer<typeof specialDealResponseSchema>;
