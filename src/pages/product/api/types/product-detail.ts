import {z} from 'zod';

import {createApiSuccessSchema} from '@/shared/api/response-schemas';

const productDeliverySchema = z.object({
  isFreeDelivery: z.boolean(),
  arrivalDate: z.string(),
  deadlineAt: z.string().nullable(),
});

const productPointBenefitSchema = z.object({
  maxPoint: z.number().nullable(),
});

const productCardBenefitSchema = z.object({
  title: z.string(),
});

export const productDetailSchema = z.object({
  productId: z.number(),
  brandName: z.string(),
  thumbnailImageUrl: z.string(),
  productName: z.string(),
  reviewScore: z.number().nullable(),
  recentReviewScore: z.number().nullable(),
  reviewCount: z.number().nullable(),
  discountRate: z.number().nullable(),
  originalPrice: z.number().nullable(),
  salePrice: z.number().nullable(),
  memberPrice: z.number().nullable(),
  couponAvailable: z.boolean(),
  couponDday: z.number().nullable(),
  unitPrice: z.number(),
  unitQuantity: z.number(),
  unit: z.string(),
  delivery: productDeliverySchema,
  pointBenefit: productPointBenefitSchema,
  cardBenefits: z.array(productCardBenefitSchema),
});

export const productDetailResponseSchema =
  createApiSuccessSchema(productDetailSchema);

export type ProductDetail = z.infer<typeof productDetailSchema>;
export type ProductDetailResponse = z.infer<typeof productDetailResponseSchema>;
