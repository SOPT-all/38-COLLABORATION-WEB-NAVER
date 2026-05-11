import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  OrderStoreCard,
} from '@/shared/components/cards/OrderStoreCard';

const meta = {
  title: 'Shared/Card/OrderStoreCard',
  component: OrderStoreCard,
} satisfies Meta<typeof OrderStoreCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LayoutOnly: Story = {
  args: {
    className: 'h-[40rem]',
  },
};