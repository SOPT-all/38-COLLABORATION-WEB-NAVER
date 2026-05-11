import type {Meta, StoryObj} from '@storybook/react-vite';
import {AddressBox} from '@/pages/cart/components/address-box/AddressBox';

const meta = {
  title: 'Cart/AddressBox',
  component: AddressBox,
} satisfies Meta<typeof AddressBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
