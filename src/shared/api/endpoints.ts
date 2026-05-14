export const API_ENDPOINTS = {
  PRODUCT: {
    DETAIL: (productId: number) => `/api/products/${productId}`,
  },
  PAYMENT: {
    DETAIL: (orderId: number) => `/api/payments/${orderId}`,
  },
  HOME: {
    RECOMMENDATIONS: '/api/home/recommendations',
    CATEGORIES: (expand: boolean) => {
      const searchParams = new URLSearchParams({
        expand: String(expand),
      });

      return `/api/home/categories?${searchParams.toString()}`;
    },
    PROMOTIONS: '/api/home/promotions',
  },
} as const;
