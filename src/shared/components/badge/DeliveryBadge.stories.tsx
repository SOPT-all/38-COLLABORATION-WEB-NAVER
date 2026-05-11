import type {Meta, StoryObj} from '@storybook/react-vite';

import {DeliveryBadge} from '@/shared/components/badge/DeliveryBadge';

const meta = {
  title: 'Shared/Badge/DeliveryBadge',
  component: DeliveryBadge,
  args: {
    arrivalDate: '4.25.(토)',
  },
} satisfies Meta<typeof DeliveryBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
