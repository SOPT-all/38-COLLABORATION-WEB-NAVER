import type {Meta, StoryObj} from '@storybook/react-vite';
import {OrderPriceSummary} from '@/pages/cart/components/section/order-price-summary-section/OrderPriceSummarySection';

const meta = {
  title: 'Cart/OrderPriceSummary',
  component: OrderPriceSummary,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof OrderPriceSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedProductsAmount: 17700,
    instantDiscountAmount: -500,
    couponDiscountAmount: 0,
    deliveryFee: 0,
  },
};
