import type {Meta, StoryObj} from '@storybook/react-vite';
import {DeliveryBanner} from '@/pages/home/components/delivery-banner/DeliveryBanner';

const meta = {
  title: 'Components/DeliveryBanner',
  component: DeliveryBanner,
  parameters: {
    layout: 'centered',
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof DeliveryBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
