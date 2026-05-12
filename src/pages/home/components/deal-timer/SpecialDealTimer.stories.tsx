import type {Meta, StoryObj} from '@storybook/react-vite';
import {SpecialDealTimer} from '@/pages/home/components/deal-timer/SpecialDealTimer';

const meta = {
  title: 'Home/SpecialDealTimer',
  component: SpecialDealTimer,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof SpecialDealTimer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
