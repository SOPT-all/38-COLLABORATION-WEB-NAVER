import {
  categoryResponseDataSchema,
  type CategoryResponseData,
} from '@/pages/home/api/types';
import {API_ENDPOINTS} from '@/shared/api/endpoints';
import {http} from '@/shared/api/http';

export const getCategories = async (): Promise<CategoryResponseData> => {
  return http.get(API_ENDPOINTS.HOME.CATEGORIES, categoryResponseDataSchema);
};
