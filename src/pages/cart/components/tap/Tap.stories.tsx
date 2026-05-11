import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';
import {Tap} from '@/pages/cart/components/tap/Tap';

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
    normalCount: 1,
    kurlyCount: 0,
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
