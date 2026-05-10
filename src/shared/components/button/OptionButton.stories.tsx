import {OptionButton} from '@/shared/components/button/OptionButton';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta = {
  title: 'Shared/Button/OptionButton',
  component: OptionButton,
  tags: ['autodocs'],
  args: {
    children: '옵션 변경',
  },
} satisfies Meta<typeof OptionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
