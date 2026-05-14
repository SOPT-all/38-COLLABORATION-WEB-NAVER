import {
  categoryResponseDataSchema,
  type CategoryResponseData,
} from '@/pages/home/api/types';
import {API_ENDPOINTS} from '@/shared/api/endpoints';
import {http} from '@/shared/api/http';

interface GetCategoriesParams {
  expand: boolean;
}

export const getCategories = async ({
  expand,
}: GetCategoriesParams): Promise<CategoryResponseData> => {
  return http.get(
    API_ENDPOINTS.HOME.CATEGORIES(expand),
    categoryResponseDataSchema
  );
};
