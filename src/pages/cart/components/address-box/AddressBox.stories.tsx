import type {Meta, StoryObj} from '@storybook/react-vite';
import {AddressBox} from '@/pages/cart/components/address-box/AddressBox';

const meta = {
  title: 'Cart/AddressBox',
  component: AddressBox,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AddressBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    address: '서울 마포구 백범로31길',
    onChangeAddress: () => undefined,
  },
};
