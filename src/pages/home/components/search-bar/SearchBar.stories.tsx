import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import {SearchBar} from '@/pages/home/components/search-bar/SearchBar.tsx';

const meta = {
  title: 'Home/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='w-[339px] bg-white'>
        <Story />
      </div>
    ),
  ],
  args: {
    onSearch: fn(),
    onValueChange: fn(),
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: '삼다수',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '삼다수',
  },
};
