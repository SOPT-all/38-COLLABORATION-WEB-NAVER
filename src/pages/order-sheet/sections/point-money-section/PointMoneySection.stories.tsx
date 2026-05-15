import type {Meta} from '@storybook/react-vite';

import {PointMoneySection} from '@/pages/order-sheet/sections/point-money-section/PointMoneySection';
import {MOCK_POINT_MONEY_DATA} from '@/pages/order-sheet/mocks/RewardInfoCardMocks';

const meta = {
  title: 'OrderSheet/Sections/PointMoneySection',
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
  render: () => <PointMoneySection {...MOCK_POINT_MONEY_DATA} />,
} satisfies Meta<typeof PointMoneySection>;

export default meta;

export const Default = {};
