import type {
  RecommendationItem,
  RecommendationResponse,
} from '@/pages/home/api/types';
import cookieImage from '@/shared/assets/images/img-product-cookie.png';
import mochiImage from '@/shared/assets/images/img-product-mochi.png';
import samdasooImage from '@/shared/assets/images/img-product-samdasoo.png';

const MOCK_RECOMMENDATION_ITEMS: RecommendationItem[] = [
  {
    itemId: 10023,
    imageUrl: mochiImage,
    name: '생크림 과일 모찌 찹쌀 떡 딸기 모찌...',
    originalPrice: 15900,
    discountRate: 25,
    discountedPrice: 11780,
    isTomorrowDelivery: true,
  },
  {
    itemId: 10024,
    imageUrl: cookieImage,
    name: '널담 두바이 쫀득 쿠키 4개 두쫀쿠 카다이프...',
    originalPrice: 42700,
    discountRate: 45,
    discountedPrice: 23460,
    isTomorrowDelivery: true,
  },
  {
    itemId: 10025,
    imageUrl: samdasooImage,
    name: '(광동 직영) 제주 삼다수 그린 (무라벨)...',
    originalPrice: 19700,
    discountRate: 5,
    discountedPrice: 19200,
    isTomorrowDelivery: true,
  },
];

export const getMockRecommendationResponse = (): RecommendationResponse => {
  return {
    success: true,
    status: 200,
    message: '요청이 성공했습니다.',
    data: {
      title: '렛솝님의 최근 관심사와 비슷한 아이템',
      items: MOCK_RECOMMENDATION_ITEMS,
    },
  };
};
