import type {Meta} from '@storybook/react-vite';

import {RewardPointSection} from '@/pages/order-sheet/sections/reward-point-section/RewardPointSection';

const meta = {
  title: 'OrderSheet/Sections/RewardPointSection',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='w-[343px]'>
        <Story />
      </div>
    ),
  ],
  render: () => <RewardPointSection />,
} satisfies Meta<typeof RewardPointSection>;

export default meta;

export const Default = {};
