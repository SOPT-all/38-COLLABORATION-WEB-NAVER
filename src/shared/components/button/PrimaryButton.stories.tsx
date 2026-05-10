import {PrimaryButton} from '@/shared/components/button/PrimaryButton';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta = {
  title: 'Shared/Button/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
  args: {
    children: '충전 후 결제하기',
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
