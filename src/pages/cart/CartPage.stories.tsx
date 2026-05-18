import type {Meta, StoryObj} from '@storybook/react-vite';
import {CartPage} from '@/pages/cart/CartPage';

const meta = {
  title: 'Cart/CartPage',
  component: CartPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CartPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
