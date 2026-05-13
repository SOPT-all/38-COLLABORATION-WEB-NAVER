import type {Meta, StoryObj} from '@storybook/react-vite';
import {RewardInfoCard} from '@/pages/order-sheet/components/reward-info-card/RewardInfoCard';
import {
  MOCK_REWARD_INFO,
  MOCK_REWARD_ITEMS,
} from '@/pages/order-sheet/mocks/RewardInfoCardMocks';

const meta = {
  title: 'OrderSheet/RewardInfoCard',
  component: RewardInfoCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RewardInfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rewardItems: MOCK_REWARD_ITEMS,
    rewardInfo: MOCK_REWARD_INFO,
  },
};
