import {
  productDetailSchema,
  type ProductDetail,
} from '@/pages/product/api/types';
import {API_ENDPOINTS} from '@/shared/api/endpoints';
import {http} from '@/shared/api/http';

export const getProductDetail = async (
  productId: number
): Promise<ProductDetail> => {
  return http.get(API_ENDPOINTS.PRODUCT.DETAIL(productId), productDetailSchema);
};
