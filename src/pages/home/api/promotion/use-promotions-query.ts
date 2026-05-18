import {useSuspenseQuery} from '@tanstack/react-query';
import {QUERY_KEYS} from '@/shared/query/query-keys';
import {getPromotions} from '@/pages/home/api/promotion/promotion-api';

export const usePromotionsQuery = () =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.HOME.PROMOTIONS,
    queryFn: getPromotions,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
  });
