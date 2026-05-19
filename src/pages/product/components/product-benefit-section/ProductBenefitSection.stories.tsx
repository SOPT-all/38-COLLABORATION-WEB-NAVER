import type {Meta, StoryObj} from '@storybook/react-vite';

import {ProductBenefitSection} from '@/pages/product/components/product-benefit-section/ProductBenefitSection';
import {PRODUCT_DETAIL_MOCK} from '@/pages/product/mocks/product-detail-mock';

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
    pointBenefit: PRODUCT_DETAIL_MOCK.pointBenefit,
    cardBenefits: PRODUCT_DETAIL_MOCK.cardBenefits,
  },
} satisfies Meta<typeof ProductBenefitSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
