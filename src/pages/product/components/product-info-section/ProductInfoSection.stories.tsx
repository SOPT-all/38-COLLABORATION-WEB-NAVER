import type {Meta, StoryObj} from '@storybook/react-vite';

import {ProductInfoSection} from '@/pages/product/components/product-info-section/ProductInfoSection';
import {PRODUCT_DETAIL_MOCK} from '@/pages/product/mocks/product-detail-mock';

const meta = {
  title: 'Product/ProductInfoSection',
  component: ProductInfoSection,
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
  args: {
    product: PRODUCT_DETAIL_MOCK,
  },
} satisfies Meta<typeof ProductInfoSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
