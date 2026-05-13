export type ProductBenefitData = {
  pointBenefit: {
    maxPoint: number;
  };
  cardBenefits: {
    title: string;
  }[];
};

export const PRODUCT_BENEFIT_MOCK: ProductBenefitData = {
  pointBenefit: {
    maxPoint: 1608,
  },
  cardBenefits: [
    {
      title: '라인프렌즈 카드 최대 374원 추가 적립(2%)',
    },
    {
      title: '최대 12개월 무이자 할부 · 60개월 특별금리',
    },
  ],
};
