import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';
import {SelectControl} from '@/pages/cart/components/select-control/SelectControl';

const meta = {
  title: 'Cart/SelectControl',
  component: SelectControl,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SelectControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
    onToggleAll: () => undefined,
    onDeleteSelected: () => undefined,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <SelectControl
        {...args}
        checked={checked}
        onToggleAll={() => {
          setChecked((prevChecked) => !prevChecked);
          args.onToggleAll();
        }}
      />
    );
  },
};
