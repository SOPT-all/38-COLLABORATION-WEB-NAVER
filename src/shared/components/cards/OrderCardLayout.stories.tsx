import type { Meta, StoryObj } from '@storybook/react-vite';

import { OrderCardLayout } from '@/shared/components/cards/OrderCardLayout';

const meta = {
  title: 'Components/Card/OrderCardLayout',
  component: OrderCardLayout,
  args: {
    children: '카드 내부 콘텐츠 영역',
  },
} satisfies Meta<typeof OrderCardLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CartStore: Story = {
  args: {
    variant: 'cartStore',
    className: 'h-[40rem]',
  },
};

export const CartPriceSummary: Story = {
  args: {
    variant: 'cartPriceSummary',
    className: 'h-[15rem]',
  },
};