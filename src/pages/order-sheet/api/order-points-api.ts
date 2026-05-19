import {
  orderSheetResponseDataSchema,
  type OrderSheetResponseData,
} from '@/pages/order-sheet/api/types/order-sheet';
import {API_ENDPOINTS} from '@/shared/api/endpoints';
import {http} from '@/shared/api/http';

export const getOrderPoints = async (
  orderId: number
): Promise<OrderSheetResponseData> => {
  return http.get(
    API_ENDPOINTS.ORDER.POINTS(orderId),
    orderSheetResponseDataSchema
  );
};
