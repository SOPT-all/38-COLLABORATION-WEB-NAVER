import type {Meta, StoryObj} from '@storybook/react-vite';

import {DeliveryBadge} from '@/shared/components/badges/DeliveryBadge';

const meta = {
  title: 'Components/DeliveryBadge',
  component: DeliveryBadge,
  args: {
    arrivalDate: '4.25.(토)',
  },
} satisfies Meta<typeof DeliveryBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
