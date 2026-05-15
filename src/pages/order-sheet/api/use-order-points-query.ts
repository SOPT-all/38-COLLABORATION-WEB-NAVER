import {useSuspenseQuery} from '@tanstack/react-query';

import {getOrderPoints} from '@/pages/order-sheet/api/order-points-api';
import {QUERY_KEYS} from '@/shared/query/query-keys';

export const useOrderPointsQuery = (orderId: number) => {
  return useSuspenseQuery({
    queryKey: QUERY_KEYS.ORDER.POINTS(orderId),
    queryFn: () => getOrderPoints(orderId),
  });
};
