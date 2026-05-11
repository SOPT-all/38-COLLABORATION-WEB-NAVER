import type {Meta, StoryObj} from '@storybook/react-vite';

import {HomeBanner} from '@/pages/home/components/banner/HomeBanner';

const meta = {
  title: 'Home/HomeBanner',
  component: HomeBanner,
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
} satisfies Meta<typeof HomeBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
