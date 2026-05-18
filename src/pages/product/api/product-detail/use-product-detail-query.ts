import {useSuspenseQuery} from '@tanstack/react-query';

import {getProductDetail} from '@/pages/product/api/product-detail/product-detail-api';
import {QUERY_KEYS} from '@/shared/query/query-keys';

export const useProductDetailQuery = (productId: number) => {
  return useSuspenseQuery({
    queryKey: QUERY_KEYS.PRODUCT.DETAIL(productId),
    queryFn: () => getProductDetail(productId),
  });
};
