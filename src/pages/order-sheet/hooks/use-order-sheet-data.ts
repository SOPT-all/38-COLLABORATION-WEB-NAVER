import {
  MOCK_ORDER_SHEET_RESPONSE_DATA,
  MOCK_POINT_MONEY_DATA,
  MOCK_REWARD_INFO,
  MOCK_REWARD_ITEMS,
} from '@/pages/order-sheet/mocks/RewardInfoCardMocks';

export const usePointMoneyData = () => {
  return MOCK_POINT_MONEY_DATA;
};

export const useRewardPointData = () => {
  return {
    totalPoint: MOCK_ORDER_SHEET_RESPONSE_DATA.expectedPoint.totalPoint,
    rewardItems: MOCK_REWARD_ITEMS,
    rewardInfo: MOCK_REWARD_INFO,
  };
};
