import {useSuspenseQuery} from '@tanstack/react-query';

import {getCategories} from '@/pages/home/api/category/category-api';
import {QUERY_KEYS} from '@/shared/query/query-keys';

export const useCategoryQuery = () => {
  return useSuspenseQuery({
    queryKey: QUERY_KEYS.HOME.CATEGORIES,
    queryFn: getCategories,
  });
};
