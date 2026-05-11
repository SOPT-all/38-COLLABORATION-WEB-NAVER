import type { Meta, StoryObj } from '@storybook/react-vite';

import { OrderPriceSummaryCard } from '@/shared/components/cards/OrderPriceSummaryCard';

const meta = {
  title: 'Shared/Card/OrderPriceSummaryCard',
  component: OrderPriceSummaryCard,
} satisfies Meta<typeof OrderPriceSummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LayoutOnly: Story = {
  args: {
    className: 'h-[15rem]',
  },
};