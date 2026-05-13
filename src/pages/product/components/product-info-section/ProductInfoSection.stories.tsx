import type {Meta, StoryObj} from '@storybook/react-vite';

import {ProductInfoSection} from '@/pages/product/components/product-info-section/ProductInfoSection';
import {PRODUCT_INFO_MOCK} from '@/pages/product/mocks/product-info-data';

const meta = {
  title: 'Product/ProductInfoSection',
  component: ProductInfoSection,
  args: {
    product: PRODUCT_INFO_MOCK.data,
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
