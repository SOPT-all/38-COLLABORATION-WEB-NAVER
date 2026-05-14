import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';
import {StoreOrderSummary} from '@/pages/cart/components/store-order-summary/StoreOrderSummary';

const meta = {
  title: 'Cart/StoreOrderSummary',
  component: StoreOrderSummary,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StoreOrderSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FreeDelivery: Story = {
  args: {
    deliveryFee: 0,
    expectedOrderAmount: 17200,
    isExpanded: false,
    onToggleExpand: () => undefined,
  },
  render: (args) => {
    const [isExpanded, setIsExpanded] = useState(args.isExpanded);

    return (
      <StoreOrderSummary
        {...args}
        isExpanded={isExpanded}
        onToggleExpand={() => {
          setIsExpanded((prevIsExpanded) => !prevIsExpanded);
          args.onToggleExpand();
        }}
      />
    );
  },
};

export const PaidDelivery: Story = {
  args: {
    deliveryFee: 3000,
    expectedOrderAmount: 20200,
    isExpanded: true,
    onToggleExpand: () => undefined,
  },
  render: FreeDelivery.render,
};
