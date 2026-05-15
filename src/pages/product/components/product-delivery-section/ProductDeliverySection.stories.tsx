import type {Meta, StoryObj} from '@storybook/react-vite';

import {ProductDeliverySection} from '@/pages/product/components/product-delivery-section/ProductDeliverySection';
import {PRODUCT_DELIVERY_MOCK} from '@/pages/product/mocks/product-delivery-data';

const meta = {
  title: 'Product/ProductDeliverySection',
  component: ProductDeliverySection,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='w-[37.5rem] bg-white'>
        <Story />
      </div>
    ),
  ],
  args: {
    delivery: PRODUCT_DELIVERY_MOCK.data.delivery,
  },
} satisfies Meta<typeof ProductDeliverySection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
