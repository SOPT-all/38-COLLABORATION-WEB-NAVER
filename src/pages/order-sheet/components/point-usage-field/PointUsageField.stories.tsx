import type {Meta, StoryObj} from '@storybook/react-vite';

import {PointUsageField} from '@/pages/order-sheet/components/point-usage-field/PointUsageField';

const meta = {
  title: 'OrderSheet/PointUsageField',
  component: PointUsageField,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PointUsageField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    point: 0,
  },
};

export const HasPoint: Story = {
  args: {
    point: 12000,
  },
};
