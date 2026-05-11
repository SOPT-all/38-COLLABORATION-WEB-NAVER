import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';
import {Tap} from '@/pages/cart/components/tap/Tap';
import {
  KURLY_DELIVERY_LABEL,
  NORMAL_DELIVERY_LABEL,
} from '@/pages/cart/constants/CartConstants';

const meta = {
  id: 'cart-chip',
  title: 'Cart/Tap',
  component: Tap,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Tap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {value: 'normal', label: NORMAL_DELIVERY_LABEL, count: 1},
      {value: 'kurly', label: KURLY_DELIVERY_LABEL, count: 0},
    ],
    selectedTab: 'normal',
    onChange: () => undefined,
  },
  render: (args) => {
    const [selectedTab, setSelectedTab] = useState<'normal' | 'kurly'>(
      args.selectedTab
    );

    return (
      <Tap
        {...args}
        selectedTab={selectedTab}
        onChange={(tab) => {
          setSelectedTab(tab);
          args.onChange(tab);
        }}
      />
    );
  },
};
