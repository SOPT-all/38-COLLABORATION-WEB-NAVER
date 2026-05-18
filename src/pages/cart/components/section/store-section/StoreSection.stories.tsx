import type {Meta, StoryObj} from '@storybook/react-vite';
import {StoreSection} from '@/pages/cart/components/section/store-section/StoreSection';

const meta = {
  title: 'Cart/StoreSection',
  component: StoreSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StoreSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    storeChecked: true,
    productChecked: true,
    quantity: 1,
    expectedOrderAmount: 17200,
    onToggleStore: () => undefined,
    onToggleProduct: () => undefined,
    onDecreaseQuantity: () => undefined,
    onIncreaseQuantity: () => undefined,
    onDeleteProduct: () => undefined,
  },
};
