import type {Meta, StoryObj} from '@storybook/react-vite';

import {HiddenPointButton} from '@/pages/order-sheet/components/hidden-point-button/HiddenPointButton';

const meta = {
  title: 'OrderSheet/HiddenPointButton',
  component: HiddenPointButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HiddenPointButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
