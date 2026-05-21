import {useSuspenseQuery} from '@tanstack/react-query';
import {promotionsQueryOptions} from '@/pages/home/api/promotion/promotion-query-options';

export const usePromotionsQuery = () =>
  useSuspenseQuery(promotionsQueryOptions());
