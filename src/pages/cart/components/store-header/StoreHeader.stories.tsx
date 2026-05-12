import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';
import StoreHeader from '@/pages/cart/components/store-header/StoreHeader';

const meta = {
  title: 'Cart/StoreHeader',
  component: StoreHeader,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof StoreHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    storeName: '광동제약 직영스토어',
    checked: true,
    onToggleStore: () => undefined,
    onCouponClick: () => undefined,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <StoreHeader
        {...args}
        checked={checked}
        onToggleStore={() => {
          setChecked((prevChecked) => !prevChecked);
          args.onToggleStore();
        }}
      />
    );
  },
};
