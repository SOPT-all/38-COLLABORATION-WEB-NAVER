import type {Meta, StoryObj} from '@storybook/react-vite';

import {ProductInfoGroup} from '@/pages/product/components/product-info-group/ProductInfoGroup';
import {PRODUCT_BENEFIT_MOCK} from '@/pages/product/mocks/product-benefit-data';
import {PRODUCT_DELIVERY_MOCK} from '@/pages/product/mocks/product-delivery-data';
import {PRODUCT_INFO_MOCK} from '@/pages/product/mocks/product-info-data';

const meta = {
  title: 'Product/ProductInfoGroup',
  component: ProductInfoGroup,
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
    product: PRODUCT_INFO_MOCK.data,
    delivery: PRODUCT_DELIVERY_MOCK.data.delivery,
    benefit: PRODUCT_BENEFIT_MOCK,
  },
} satisfies Meta<typeof ProductInfoGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
