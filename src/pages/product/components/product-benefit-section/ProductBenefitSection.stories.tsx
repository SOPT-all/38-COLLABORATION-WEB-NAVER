import type {Meta, StoryObj} from '@storybook/react-vite';

import {ProductBenefitSection} from '@/pages/product/components/product-benefit-section/ProductBenefitSection';
import {PRODUCT_BENEFIT_MOCK} from '@/pages/product/mocks/product-benefit-data';

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
  args: {
    benefit: PRODUCT_BENEFIT_MOCK,
  },
} satisfies Meta<typeof ProductBenefitSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
