import {z} from 'zod';

import {createApiSuccessSchema} from '@/shared/api/response-schemas';

export const promotionItemSchema = z.object({
  itemId: z.number(),
  name: z.string(),
  imageUrl: z.string(),
  tag: z.string().nullable(),
  originalPrice: z.number(),
  discountRate: z.number(),
  discountedPrice: z.number(),
  isTomorrowDelivery: z.boolean(),
});

export const promotionSchema = z.object({
  promotionId: z.number(),
  tag: z.string(),
  endsAt: z.string(),
  items: z.array(promotionItemSchema),
});

export const promotionResponseDataSchema = z.object({
  promotions: z.array(promotionSchema),
});

export const promotionResponseSchema = createApiSuccessSchema(
  promotionResponseDataSchema
);

export type PromotionItem = z.infer<typeof promotionItemSchema>;
export type Promotion = z.infer<typeof promotionSchema>;
export type PromotionResponseData = z.infer<typeof promotionResponseDataSchema>;
export type PromotionResponse = z.infer<typeof promotionResponseSchema>;
