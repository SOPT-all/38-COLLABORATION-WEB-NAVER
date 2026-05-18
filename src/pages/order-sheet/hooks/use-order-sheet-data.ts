import type {
  OrderSheetResponseData,
  PointMoneyData,
} from '@/pages/order-sheet/api/types/order-sheet';
import type {
  RewardInfo,
  RewardItem,
} from '@/pages/order-sheet/components/reward-info-card/RewardInfoCard';
import {PURCHASE_REWARD_LABEL} from '@/pages/order-sheet/constants/OrderSheetConstants';

export type RewardPointData = {
  totalPoint: number;
  rewardItems: RewardItem[];
  rewardInfo: RewardInfo;
};

export const getPointMoneyData = ({
  expectedPoint,
  orderId,
  ...pointMoneyData
}: OrderSheetResponseData): PointMoneyData => {
  void expectedPoint;
  void orderId;

  return pointMoneyData;
};

export const getRewardPointData = ({
  expectedPoint,
}: OrderSheetResponseData): RewardPointData => {
  const {purchasePoint} = expectedPoint;

  return {
    totalPoint: expectedPoint.totalPoint,
    rewardItems: [
      {
        label: PURCHASE_REWARD_LABEL.basicPoint,
        amount: purchasePoint.basicPoint,
      },
      {
        label: PURCHASE_REWARD_LABEL.npayMoneyPoint,
        amount: purchasePoint.npayMoneyPoint,
      },
    ],
    rewardInfo: {
      purchaseRewardAmount: purchasePoint.total,
      reviewRewardAmount: expectedPoint.reviewPoint,
      membershipBenefitAmount: expectedPoint.membershipPoint,
    },
  };
};
