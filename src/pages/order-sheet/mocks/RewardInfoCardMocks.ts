import type {
  RewardInfo,
  RewardItem,
} from '@/pages/order-sheet/components/reward-info-card/RewardInfoCard';
import {orderSheetResponseDataSchema} from '@/pages/order-sheet/api/types/order-sheet';
import {PURCHASE_REWARD_LABEL} from '@/pages/order-sheet/constants/OrderSheetConstants';

export const MOCK_ORDER_SHEET_RESPONSE_DATA =
  orderSheetResponseDataSchema.parse({
    orderId: 1,
    availableAmount: 87,
    availablePoint: 80,
    availableMoney: 0,
    hiddenPoint: 7,
    allUseAmount: 87,
    deferredPaymentAvailableAmount: 300000,
    expectedPoint: {
      totalPoint: 1472,
      purchasePoint: {
        total: 722,
        basicPoint: 289,
        npayMoneyPoint: 433,
      },
      reviewPoint: 750,
      membershipPoint: 1156,
    },
  });

const {expectedPoint} = MOCK_ORDER_SHEET_RESPONSE_DATA;
const {purchasePoint} = expectedPoint;

export const MOCK_REWARD_ITEMS: RewardItem[] = [
  {
    label: PURCHASE_REWARD_LABEL.basicPoint,
    amount: purchasePoint.basicPoint,
  },
  {
    label: PURCHASE_REWARD_LABEL.npayMoneyPoint,
    amount: purchasePoint.npayMoneyPoint,
  },
];

export const MOCK_REWARD_INFO: RewardInfo = {
  purchaseRewardAmount: purchasePoint.total,
  reviewRewardAmount: expectedPoint.reviewPoint,
  membershipBenefitAmount: expectedPoint.membershipPoint,
};
