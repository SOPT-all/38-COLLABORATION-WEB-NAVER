import type {ProductDetail} from '@/pages/product/api/types/product-detail';

export const PRODUCT_DETAIL_MOCK: ProductDetail = {
  productId: 1001,
  brandName: '광동제약',
  thumbnailImageUrl: 'https://image.example.com/products/samdasu.png',
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
    arrivalDate: '2026-04-25',
    deadlineAt: '2026-04-24T23:59:59',
  },
  pointBenefit: {
    maxPoint: 1608,
  },
  cardBenefits: [
    {title: '라이프플랜 카드 최대 374원 추가 적립(2%)'},
    {title: '최대 12개월 무이자 할부 · 60개월 특별금리'},
  ],
};
