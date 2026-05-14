import {useState} from 'react';

import {IcSvgChevronDown, IcSvgChevronUp} from '@/shared/icons';
import {formatPrice} from '@/shared/utils/format-product';

import {RewardInfoCard} from '@/pages/order-sheet/components/reward-info-card/RewardInfoCard';
import {POINT_SECTION_TEXT} from '@/pages/order-sheet/constants/OrderSheetConstants';
import {
  MOCK_ORDER_SHEET_RESPONSE_DATA,
  MOCK_REWARD_INFO,
  MOCK_REWARD_ITEMS,
} from '@/pages/order-sheet/mocks/RewardInfoCardMocks';

type PointSectionProps = {
  totalPoint?: number;
};

export const PointSection = ({
  totalPoint = MOCK_ORDER_SHEET_RESPONSE_DATA.expectedPoint.totalPoint,
}: PointSectionProps = {}) => {
  const [isRewardInfoOpen, setIsRewardInfoOpen] = useState(true);

  const handleRewardInfoToggle = () => {
    setIsRewardInfoOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <section className='flex flex-col gap-[12px]'>
      <header className='flex items-center justify-between'>
        <h2 className='text-title-18b'>{POINT_SECTION_TEXT.title}</h2>
        <div className='flex items-center gap-[4px]'>
          <span className='text-body-16b text-green-600'>
            {POINT_SECTION_TEXT.maxPrefix} {formatPrice(totalPoint)}
          </span>
          <button
            type='button'
            aria-label={
              isRewardInfoOpen
                ? '적립 포인트 상세 접기'
                : '적립 포인트 상세 펼치기'
            }
            aria-expanded={isRewardInfoOpen}
            onClick={handleRewardInfoToggle}>
            {isRewardInfoOpen ? (
              <IcSvgChevronUp
                width={24}
                height={24}
                className='text-gray-900'
              />
            ) : (
              <IcSvgChevronDown
                width={24}
                height={24}
                className='text-gray-900'
              />
            )}
          </button>
        </div>
      </header>

      {isRewardInfoOpen && (
        <RewardInfoCard
          rewardItems={MOCK_REWARD_ITEMS}
          rewardInfo={MOCK_REWARD_INFO}
        />
      )}
    </section>
  );
};
