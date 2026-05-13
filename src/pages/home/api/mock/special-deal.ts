import type {SpecialDealItem, SpecialDealResponse} from '@/pages/home/api/types';
import downyBrandDayImage from '@/shared/assets/images/img-product-downy-brand-day.png';
import downyPlusSaleImage from '@/shared/assets/images/img-product-downy-plus-sale.png';
import cookieImage from '@/shared/assets/images/img-product-cookie.png';
import mochiImage from '@/shared/assets/images/img-product-mochi.png';
import samdasooImage from '@/shared/assets/images/img-product-samdasoo.png';

const MOCK_SPECIAL_DEAL_ITEMS: SpecialDealItem[] = [
  {
    itemId: 20011,
    name: '다우니 섬유유연제 브랜드 기획',
    imageUrl: downyBrandDayImage,
    imageAlt: '다우니 섬유유연제 브랜드 기획',
    originalPrice: 56100,
    discountRate: 38,
    discountedPrice: 34800,
    isTomorrowDelivery: true,
    badge: 'brand-day',
  },
  {
    itemId: 20012,
    name: '다우니 섬유유연제 플러스 특가',
    imageUrl: downyPlusSaleImage,
    imageAlt: '다우니 섬유유연제 플러스 특가',
    originalPrice: 4980,
    discountRate: 20,
    discountedPrice: 3980,
    isTomorrowDelivery: true,
    badge: 'plus-sale',
  },
  {
    itemId: 20013,
    name: '널담 두바이 쫀득 쿠키 4개 두쫀쿠 카다이프...',
    imageUrl: cookieImage,
    imageAlt: '널담 두바이 쫀득 쿠키',
    originalPrice: 42700,
    discountRate: 45,
    discountedPrice: 23460,
    isTomorrowDelivery: true,
    badge: 'brand-day',
  },
  {
    itemId: 20014,
    name: '생크림 과일 모찌 찹쌀 떡 딸기 모찌...',
    imageUrl: mochiImage,
    imageAlt: '생크림 과일 모찌 찹쌀떡',
    originalPrice: 15900,
    discountRate: 25,
    discountedPrice: 11780,
    isTomorrowDelivery: true,
    badge: 'plus-sale',
  },
  {
    itemId: 20015,
    name: '(광동 직영) 제주 삼다수 그린 (무라벨)...',
    imageUrl: samdasooImage,
    imageAlt: '제주 삼다수 그린 무라벨',
    originalPrice: 19700,
    discountRate: 5,
    discountedPrice: 19200,
    isTomorrowDelivery: true,
    badge: 'brand-day',
  },
  {
    itemId: 20016,
    name: '다우니 섬유유연제 브랜드 기획 2차',
    imageUrl: downyBrandDayImage,
    imageAlt: '다우니 섬유유연제 브랜드 기획',
    originalPrice: 23400,
    discountRate: 18,
    discountedPrice: 19200,
    isTomorrowDelivery: true,
    badge: 'plus-sale',
  },
];

export const getMockSpecialDealResponse = (): SpecialDealResponse => {
  return {
    success: true,
    status: 200,
    message: '요청이 성공했습니다.',
    data: {
      endTime: '2026-05-13T23:59:59',
      items: MOCK_SPECIAL_DEAL_ITEMS,
    },
  };
};
