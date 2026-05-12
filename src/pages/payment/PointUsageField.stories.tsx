import type {Meta, StoryObj} from '@storybook/react-vite';

import {PointUsageField} from './PointUsageField';

const meta = {
  title: 'Payment/PointUsageField',
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
