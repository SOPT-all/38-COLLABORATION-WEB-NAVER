import {CTAButton} from '@/shared/components/button/CTAButton';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta = {
  title: 'Shared/Button/CTAButton',
  component: CTAButton,
  tags: ['autodocs'],
  args: {
    children: '내일배송 상품 더보기',
  },
} satisfies Meta<typeof CTAButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
