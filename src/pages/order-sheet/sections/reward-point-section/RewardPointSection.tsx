import {useState} from 'react';

import {IcSvgChevronDown} from '@/shared/icons';
import {formatPrice} from '@/shared/utils/format-product';
import {cn} from '@/shared/utils/cn';

import {
  RewardInfoCard,
  type RewardInfo,
  type RewardItem,
} from '@/pages/order-sheet/components/reward-info-card/RewardInfoCard';
import {POINT_SECTION_TEXT} from '@/pages/order-sheet/constants/OrderSheetConstants';

type RewardPointSectionProps = {
  totalPoint: number;
  rewardItems: RewardItem[];
  rewardInfo: RewardInfo;
};

export const RewardPointSection = ({
  totalPoint,
  rewardItems,
  rewardInfo,
}: RewardPointSectionProps) => {
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
            <IcSvgChevronDown
              aria-hidden
              width={24}
              height={24}
              className={cn(
                'text-gray-900 transition-transform duration-200',
                isRewardInfoOpen && 'rotate-180'
              )}
            />
          </button>
        </div>
      </header>

      {isRewardInfoOpen && (
        <RewardInfoCard rewardItems={rewardItems} rewardInfo={rewardInfo} />
      )}
    </section>
  );
};
