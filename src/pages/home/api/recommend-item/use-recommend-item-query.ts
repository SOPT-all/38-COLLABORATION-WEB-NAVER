import {useSuspenseQuery} from '@tanstack/react-query';

import {getRecommendationItems} from '@/pages/home/api/recommend-item/recommend-item-api';
import {QUERY_KEYS} from '@/shared/query/query-keys';

export const useRecommendItemQuery = () => {
  return useSuspenseQuery({
    queryKey: QUERY_KEYS.HOME.RECOMMENDATIONS,
    queryFn: getRecommendationItems,
  });
};
