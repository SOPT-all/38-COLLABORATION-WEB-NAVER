import {queryOptions} from '@tanstack/react-query';

import {QUERY_KEYS} from '@/shared/query/query-keys';
import {getPromotions} from '@/pages/home/api/promotion/promotion-api';

export const promotionsQueryOptions = () =>
  queryOptions({
    queryKey: QUERY_KEYS.HOME.PROMOTIONS,
    queryFn: getPromotions,
  });
