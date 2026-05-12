import type {Meta, StoryObj} from '@storybook/react-vite';

import {ProductInfoSection} from '@/pages/product/components/product-info-section/ProductInfoSection';
import {PRODUCT_INFO_MOCK} from '@/pages/product/mocks/product-info-data';

const meta = {
  title: 'Product/ProductInfoSection',
  component: ProductInfoSection,
  args: {
    productName: PRODUCT_INFO_MOCK.productName,
    optionName: PRODUCT_INFO_MOCK.optionName,
    review: PRODUCT_INFO_MOCK.review,
    price: PRODUCT_INFO_MOCK.price,
    coupon: PRODUCT_INFO_MOCK.coupon,
    delivery: PRODUCT_INFO_MOCK.delivery,
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='w-[37.5rem] bg-white py-[1.6rem]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
