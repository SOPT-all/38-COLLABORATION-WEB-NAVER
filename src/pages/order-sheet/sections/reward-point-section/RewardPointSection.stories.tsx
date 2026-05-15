import type {Meta} from '@storybook/react-vite';

import {
  MOCK_ORDER_SHEET_RESPONSE_DATA,
  MOCK_REWARD_INFO,
  MOCK_REWARD_ITEMS,
} from '@/pages/order-sheet/mocks/RewardInfoCardMocks';
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
  render: () => (
    <RewardPointSection
      totalPoint={MOCK_ORDER_SHEET_RESPONSE_DATA.expectedPoint.totalPoint}
      rewardItems={MOCK_REWARD_ITEMS}
      rewardInfo={MOCK_REWARD_INFO}
    />
  ),
} satisfies Meta<typeof RewardPointSection>;

export default meta;

export const Default = {};
