import {http} from '@/shared/api/http';
import {API_ENDPOINTS} from '@/shared/api/endpoints';
import {
  promotionResponseDataSchema,
  type PromotionResponseData,
} from '@/pages/home/api/types';

export const getPromotions = (): Promise<PromotionResponseData> =>
  http.get(API_ENDPOINTS.HOME.PROMOTIONS, promotionResponseDataSchema);
