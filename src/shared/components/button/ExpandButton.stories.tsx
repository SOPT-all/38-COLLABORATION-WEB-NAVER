import {ExpandButton} from '@/shared/components/button/ExpandButton';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta = {
  title: 'Components/Button/ExpandButton',
  component: ExpandButton,
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
