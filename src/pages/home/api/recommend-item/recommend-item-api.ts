import {
  recommendationResponseDataSchema,
  type RecommendationResponseData,
} from '@/pages/home/api/types';
import {API_ENDPOINTS} from '@/shared/api/endpoints';
import {http} from '@/shared/api/http';

export const getRecommendationItems =
  async (): Promise<RecommendationResponseData> => {
    return http.get(
      API_ENDPOINTS.HOME.RECOMMENDATIONS,
      recommendationResponseDataSchema
    );
  };
