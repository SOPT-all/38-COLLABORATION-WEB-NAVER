import {z} from 'zod';

import {createApiSuccessSchema} from '@/shared/api/response-schemas';

export const purchasePointSchema = z.object({
  total: z.number(),
  basicPoint: z.number(),
  npayMoneyPoint: z.number(),
});

export const expectedPointSchema = z.object({
  totalPoint: z.number(),
  purchasePoint: purchasePointSchema,
  reviewPoint: z.number(),
  membershipPoint: z.number(),
});

export const pointMoneyDataSchema = z.object({
  availableAmount: z.number(),
  availablePoint: z.number(),
  availableMoney: z.number(),
  hiddenPoint: z.number(),
  allUseAmount: z.number(),
  deferredPaymentAvailableAmount: z.number(),
});

export const orderSheetResponseDataSchema = z.object({
  orderId: z.number(),
  ...pointMoneyDataSchema.shape,
  expectedPoint: expectedPointSchema,
});

export const orderSheetResponseSchema = createApiSuccessSchema(
  orderSheetResponseDataSchema
);

export type PurchasePoint = z.infer<typeof purchasePointSchema>;
export type ExpectedPoint = z.infer<typeof expectedPointSchema>;
export type PointMoneyData = z.infer<typeof pointMoneyDataSchema>;
export type OrderSheetResponseData = z.infer<
  typeof orderSheetResponseDataSchema
>;
export type OrderSheetResponse = z.infer<typeof orderSheetResponseSchema>;
