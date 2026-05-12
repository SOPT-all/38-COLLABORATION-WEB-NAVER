export const QUERY_KEYS = {
  PRODUCT: {
    DETAIL: (productId: number) => ['product', 'detail', productId] as const,
  },
  PAYMENT: {
    DETAIL: (orderId: number) => ['payment', 'detail', orderId] as const,
  },
  HOME: {
    RECOMMENDATIONS: ['home', 'recommendations'] as const,
    CATEGORIES: (expand: boolean) => ['home', 'categories', expand] as const,
    PROMOTIONS: ['home', 'promotions'] as const,
  },
} as const;
