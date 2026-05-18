import {useSearchParams} from 'react-router-dom';

import {DEFAULT_ORDER_ID} from '@/pages/order-sheet/constants/order-sheet-route';

const getOrderId = (orderIdParam: string | null) => {
  const orderId = Number(orderIdParam);

  return Number.isInteger(orderId) && orderId > 0 ? orderId : DEFAULT_ORDER_ID;
};

export const useOrderId = () => {
  const [searchParams] = useSearchParams();

  return getOrderId(searchParams.get('orderId'));
};
