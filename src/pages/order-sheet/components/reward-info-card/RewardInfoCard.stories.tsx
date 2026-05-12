import type {Meta, StoryObj} from '@storybook/react-vite';
import {RewardInfoCard} from '@/pages/order-sheet/components/reward-info-card/RewardInfoCard';

const meta = {
  title: 'OrderSheet/RewardInfoCard',
  component: RewardInfoCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RewardInfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
