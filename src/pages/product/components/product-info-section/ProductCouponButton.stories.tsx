import type {Meta, StoryObj} from '@storybook/react-vite';

import {ProductCouponButton} from './ProductCouponButton';

const meta = {
  title: 'Product/ProductCouponButton',
  component: ProductCouponButton,
  args: {
    dDay: 'D-6',
    label: '쿠폰 받기',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProductCouponButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
