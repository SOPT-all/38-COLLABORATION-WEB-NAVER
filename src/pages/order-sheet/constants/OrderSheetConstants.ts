export const REVIEW_REWARD_LIMIT_NOTICE =
  '· 동일상품의 상품/한달리뷰 적립은 각 1회로 제한';

export const PURCHASE_REWARD_LABEL = {
  basicPoint: '기본적립',
  npayMoneyPoint: '네이버페이 머니 결제적립',
} as const;

export const POINT_MONEY_SECTION_TEXT = {
  title: '포인트 · 머니',
  balance: {
    availableAmount: '사용 가능',
    point: '포인트',
    money: '머니',
    priorityUse: '우선사용',
    allUseAmount: '항상 전액사용',
  },
  deferredPayment: {
    title: '후불 결제',
    rewardBadge: '1% 적립',
    description: '지금 구매, 다음 달 납부 (소득공제 30%)',
  },
} as const;