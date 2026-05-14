import productImage from '@/shared/assets/images/img-product.png';

export const MOCK_STORE = {
  storeName: '광동제약 직영스토어',
  orderDeadline: '00:45:27',
  deliveryDate: '내일(토)',
  deliveryFee: 0,
  expectedOrderAmount: 17200,
  product: {
    imageUrl: productImage,
    imageAlt: '제주 삼다수 330ml 상품 이미지',
    payBadge: true,
    title: '(광동 직영) 제주 삼다수 330ml 20입 + 20입 (유/무라벨 랜덤발송)',
    discountRate: 3,
    price: 17200,
    originalPrice: 17700,
    giftable: true,
  },
  option: {
    optionName: '삼다수 330ml 20입 + 20입',
    quantity: 1,
    price: 17200,
  },
} as const;
