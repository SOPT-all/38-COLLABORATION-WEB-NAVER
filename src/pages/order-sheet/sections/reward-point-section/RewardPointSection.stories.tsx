import type {Meta} from '@storybook/react-vite';

import {MOCK_ORDER_SHEET_RESPONSE_DATA} from '@/pages/order-sheet/mocks/RewardInfoCardMocks';
import {RewardPointSection} from '@/pages/order-sheet/sections/reward-point-section/RewardPointSection';
import {getRewardPointData} from '@/pages/order-sheet/utils/order-sheet-data';

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
  render: () => (
    <RewardPointSection
      rewardPointData={getRewardPointData(MOCK_ORDER_SHEET_RESPONSE_DATA)}
    />
  ),
} satisfies Meta<typeof RewardPointSection>;

export default meta;

export const Default = {};
