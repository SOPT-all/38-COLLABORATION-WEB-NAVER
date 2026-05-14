import type {Meta, StoryObj} from '@storybook/react-vite';

import {RewardSummary} from '@/pages/order-sheet/components/reward-summary/RewardSummary';
import {
  MOCK_REWARD_INFO,
  MOCK_REWARD_ITEMS,
} from '@/pages/order-sheet/mocks/RewardInfoCardMocks';

const meta = {
  title: 'OrderSheet/RewardSummary',
  component: RewardSummary,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RewardSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalAmount: MOCK_REWARD_INFO.purchaseRewardAmount,
    items: MOCK_REWARD_ITEMS,
  },
};
