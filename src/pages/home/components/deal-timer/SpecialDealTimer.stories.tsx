import type {Meta, StoryObj} from '@storybook/react-vite';
import {SpecialDealTimer} from '@/pages/home/components/deal-timer/SpecialDealTimer';

const meta = {
  title: 'Home/SpecialDealTimer',
  component: SpecialDealTimer,
  parameters: {
    layout: 'centered',
    freezeTime: '2026-05-23T18:14:32',
  },
  decorators: [(Story) => <Story />],
  args: {
    endsAt: '2026-05-23T23:59:59',
  },
} satisfies Meta<typeof SpecialDealTimer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
