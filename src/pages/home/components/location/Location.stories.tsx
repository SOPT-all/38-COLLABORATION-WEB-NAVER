import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import {Location} from '@/pages/home/components/location/Location';

const meta = {
  title: 'Home/Location',
  component: Location,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='w-[375px] bg-white'>
        <Story />
      </div>
    ),
  ],
  args: {
    onChangeClick: fn(),
  },
} satisfies Meta<typeof Location>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongAddress: Story = {
  args: {
    address: '서울 마포구 백범로31길 21 창업허브 본관 3층 세미나실',
  },
};
