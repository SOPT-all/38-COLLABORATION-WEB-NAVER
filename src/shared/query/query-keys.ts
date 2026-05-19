export const QUERY_KEYS = {
  PRODUCT: {
    DETAIL: (productId: number) => ['product', 'detail', productId] as const,
  },
  PAYMENT: {
    DETAIL: (orderId: number) => ['payment', 'detail', orderId] as const,
  },
  ORDER: {
    POINTS: (orderId: number) => ['order', 'points', orderId] as const,
  },
  HOME: {
    RECOMMENDATIONS: ['home', 'recommendations'] as const,
    CATEGORIES: ['home', 'categories'] as const,
    PROMOTIONS: ['home', 'promotions'] as const,
  },
} as const;
