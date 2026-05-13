export const formatPrice = (price: number) => {
  return `${price.toLocaleString('ko-KR')}원`;
};

export const formatDiscountRate = (discountRate: number) => {
  return `${discountRate}%`;
};
