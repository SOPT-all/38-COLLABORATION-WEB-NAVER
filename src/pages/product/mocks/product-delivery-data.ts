const getMockDeadlineAt = () => {
  const deadlineDate = new Date(Date.now() + 30 * 60 * 1000 + 5 * 1000);

  return deadlineDate.toISOString();
};

export const PRODUCT_DELIVERY_MOCK = {
  data: {
    delivery: {
      isFreeDelivery: true,
      arrivalDate: '4.25.(토)',
      deadlineAt: getMockDeadlineAt(),
    },
  },
} as const;
