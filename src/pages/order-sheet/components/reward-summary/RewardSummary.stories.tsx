import type {Meta, StoryObj} from '@storybook/react-vite';

import {RewardSummary} from '@/pages/order-sheet/components/reward-summary/RewardSummary';

const meta = {
  title: 'OrderSheet/RewardSummary',
  component: RewardSummary,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RewardSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

const MOCK_REWARD_ITEMS = [
  {label: '기본적립', amount: 289},
  {label: '네이버페이 머니 결제적립', amount: 433},
];

export const Default: Story = {
  args: {
    totalAmount: 722,
    items: MOCK_REWARD_ITEMS,
  },
};
