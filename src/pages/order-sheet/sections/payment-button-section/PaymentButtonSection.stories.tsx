import type {Meta, StoryObj} from '@storybook/react-vite';

import {PaymentButtonSection} from '@/pages/order-sheet/sections/payment-button-section/PaymentButtonSection';

const meta = {
  title: 'OrderSheet/Sections/PaymentButtonSection',
  component: PaymentButtonSection,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='w-[343px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PaymentButtonSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
