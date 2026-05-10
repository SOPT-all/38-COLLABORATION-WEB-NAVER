import type {Meta, StoryObj} from '@storybook/react-vite';
import {ExpandButton} from './ExpandButton';

const meta = {
  title: 'Shared/Button/ExpandButton',
  component: ExpandButton,
  tags: ['autodocs'],
  args: {
    children: '전체 카테고리 더보기',
    isExpanded: false,
  },
} satisfies Meta<typeof ExpandButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = {
  args: {
    isExpanded: false,
  },
};

export const Expanded: Story = {
  args: {
    isExpanded: true,
  },
};
