export const API_ENDPOINTS = {
  PRODUCT: {
    DETAIL: (productId: number) => `/api/products/${productId}`,
  },
  PAYMENT: {
    DETAIL: (orderId: number) => `/api/payments/${orderId}`,
  },
  HOME: {
    RECOMMENDATIONS: '/api/home/recommendations',
    CATEGORIES: '/api/home/categories',
    PROMOTIONS: '/api/home/promotions',
  },
} as const;
