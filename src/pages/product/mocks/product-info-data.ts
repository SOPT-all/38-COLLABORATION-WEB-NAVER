export const PRODUCT_INFO_MOCK = {
  success: true,
  status: 200,
  message: '요청이 성공했습니다.',
  data: {
    productName:
      '(광동 직영) 제주 삼다수 그린(무라벨) 500ml 40개입 (유 무라벨 랜덤) [원산지:상세설명에 표시]',
    reviewScore: 4.91,
    recentReviewScore: 4.92,
    reviewCount: 120445,
    discountRate: 5,
    originalPrice: 19700,
    salePrice: 19200,
    memberPrice: 18700,
    couponAvailable: true,
    couponDday: 6,
    unitPrice: 96,
    unitQuantity: 100,
    unit: 'ml',
    delivery: {
      isFreeDelivery: true,
    },
  },
} as const;
