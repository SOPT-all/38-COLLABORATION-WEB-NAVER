import type {
  RewardInfo,
  RewardItem,
} from '@/pages/order-sheet/components/reward-info-card/RewardInfoCard';

export const MOCK_REWARD_ITEMS: RewardItem[] = [
  {label: '기본적립', amount: 289},
  {label: '네이버페이 머니 결제적립', amount: 433},
];

export const MOCK_REWARD_INFO: RewardInfo = {
  purchaseRewardAmount: 722,
  reviewRewardAmount: 750,
  membershipBenefitAmount: 1156,
};
