import type {Meta, StoryObj} from '@storybook/react-vite';

import {ProductBenefitSection} from '@/pages/product/components/product-benefit-section/ProductBenefitSection';

const meta = {
  title: 'PRODUCT/ProductBenefitSection',
  component: ProductBenefitSection,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='w-[34.3rem] bg-white'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductBenefitSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
