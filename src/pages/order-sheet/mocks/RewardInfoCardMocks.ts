import type {
  RewardInfo,
  RewardItem,
} from '@/pages/order-sheet/components/reward-info-card/RewardInfoCard';
import type {PointMoneyData} from '@/pages/order-sheet/api/types/order-sheet';
import {orderSheetResponseDataSchema} from '@/pages/order-sheet/api/types/order-sheet';
import {PURCHASE_REWARD_LABEL} from '@/pages/order-sheet/constants/OrderSheetConstants';

export const MOCK_ORDER_SHEET_RESPONSE_DATA =
  orderSheetResponseDataSchema.parse({
    orderId: 1,
    availableAmount: 80,
    availablePoint: 80,
    availableMoney: 0,
    hiddenPoint: 0,
    allUseAmount: 80,
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

export const MOCK_POINT_MONEY_DATA: PointMoneyData = {
  availableAmount: MOCK_ORDER_SHEET_RESPONSE_DATA.availableAmount,
  availablePoint: MOCK_ORDER_SHEET_RESPONSE_DATA.availablePoint,
  availableMoney: MOCK_ORDER_SHEET_RESPONSE_DATA.availableMoney,
  hiddenPoint: MOCK_ORDER_SHEET_RESPONSE_DATA.hiddenPoint,
  allUseAmount: MOCK_ORDER_SHEET_RESPONSE_DATA.allUseAmount,
  deferredPaymentAvailableAmount:
    MOCK_ORDER_SHEET_RESPONSE_DATA.deferredPaymentAvailableAmount,
};

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
