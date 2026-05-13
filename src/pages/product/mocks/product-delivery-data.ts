export const PRODUCT_DELIVERY_MOCK = {
  success: true,
  status: 200,
  message: '요청이 성공했습니다.',
  data: {
    delivery: {
      isFreeDelivery: true,
      arrivalDate: '4.25.(토)',
      countdownText: '00:45:27',
      orderDeadlineLabel: '내 주문 시',
      arrivalGuaranteeLabel: '내일(토) 도착',
      membershipText: 'N배송 주문당 1회 무료교환반품',
      excludedDeliveryText: '일반배송 전환(선물하기, 합배송 등) 제외',
    },
  },
} as const;
