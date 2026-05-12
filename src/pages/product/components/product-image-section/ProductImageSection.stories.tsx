import type {Meta, StoryObj} from '@storybook/react-vite';

import {ProductImageSection} from './ProductImageSection';
import {PRODUCT_IMAGE_MOCK} from './product-image-data';

const meta = {
  title: 'Product/ProductImageSection',
  component: ProductImageSection,
  args: PRODUCT_IMAGE_MOCK,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='w-[37.5rem] bg-white'>
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof ProductImageSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
