export const API_ENDPOINTS = {
  PRODUCT: {
    DETAIL: (productId: number) => `/api/products/${productId}`,
  },
  PAYMENT: {
    DETAIL: (orderId: number) => `/api/payments/${orderId}`,
  },
  ORDER: {
    POINTS: (orderId: number) => `/api/orders/${orderId}/points`,
  },
  HOME: {
    RECOMMENDATIONS: '/api/home/recommendations',
    CATEGORIES: '/api/home/categories?expand=true',
    PROMOTIONS: '/api/home/promotions',
  },
} as const;
