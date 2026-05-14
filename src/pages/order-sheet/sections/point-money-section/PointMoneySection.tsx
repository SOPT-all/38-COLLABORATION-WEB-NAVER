import {Header} from '@/shared/components/header';

import type {PointMoneyData} from '@/pages/order-sheet/api/types/order-sheet';
import {POINT_MONEY_SECTION_TEXT} from '@/pages/order-sheet/constants/OrderSheetConstants';
import {MOCK_POINT_MONEY_DATA} from '@/pages/order-sheet/mocks/RewardInfoCardMocks';

import {DeferredPaymentCard} from '@/pages/order-sheet/sections/point-money-section/DeferredPaymentCard';
import {PointMoneyCard} from '@/pages/order-sheet/sections/point-money-section/PointMoneyCard';

type PointMoneySectionProps = PointMoneyData;

export const PointMoneySection = (props: Partial<PointMoneySectionProps> = {}) => {
  const {
    availableAmount,
    availablePoint,
    availableMoney,
    allUseAmount,
    deferredPaymentAvailableAmount,
  } = {
    ...MOCK_POINT_MONEY_DATA,
    ...props,
  };

  return (
    <section className='flex flex-col gap-[12px]'>
      <h2 className='flex items-center gap-[4px]'>
        <Header.NPayLogo />
        <span className='text-title-18b text-navy'>
          {POINT_MONEY_SECTION_TEXT.title}
        </span>
      </h2>

      <PointMoneyCard
        availableAmount={availableAmount}
        availablePoint={availablePoint}
        availableMoney={availableMoney}
        allUseAmount={allUseAmount}
      />
      <DeferredPaymentCard
        deferredPaymentAvailableAmount={deferredPaymentAvailableAmount}
      />
    </section>
  );
};
