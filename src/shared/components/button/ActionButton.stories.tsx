import {ActionButton} from '@/shared/components/button/ActionButton';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta = {
  title: 'Components/Button/ActionButton',
  component: ActionButton,
  args: {
    children: '변경',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['sm', 'm'],
    },
  },
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    variant: 'sm',
  },
};

export const Medium: Story = {
  args: {
    variant: 'm',
    children: '주문배송',
  },
};
