import {useSuspenseQuery} from '@tanstack/react-query';

import {getCategories} from '@/pages/home/api/category/category-api';
import {QUERY_KEYS} from '@/shared/query/query-keys';

interface UseCategoryQueryParams {
  expand: boolean;
}

export const useCategoryQuery = ({expand}: UseCategoryQueryParams) => {
  return useSuspenseQuery({
    queryKey: QUERY_KEYS.HOME.CATEGORIES(expand),
    queryFn: () => getCategories({expand}),
  });
};
