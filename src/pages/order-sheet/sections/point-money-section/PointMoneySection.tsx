import {Header} from '@/shared/components/header';

import type {PointMoneyData} from '@/pages/order-sheet/api/types/order-sheet';
import {POINT_MONEY_SECTION_TEXT} from '@/pages/order-sheet/constants/OrderSheetConstants';

import {DeferredPaymentSection} from '@/pages/order-sheet/sections/point-money-section/DeferredPaymentSection';
import {PointMoneyCardSection} from '@/pages/order-sheet/sections/point-money-section/PointMoneyCardSection';

type PointMoneySectionProps = {
  pointMoneyData: PointMoneyData;
};

export const PointMoneySection = ({pointMoneyData}: PointMoneySectionProps) => {
  const {
    availableAmount,
    availablePoint,
    availableMoney,
    allUseAmount,
    deferredPaymentAvailableAmount,
  } = pointMoneyData;

  return (
    <section className='flex flex-col gap-[12px]'>
      <h2 className='flex items-center gap-[4px]'>
        <Header.NPayLogo />
        <span className='text-title-18b text-navy'>
          {POINT_MONEY_SECTION_TEXT.title}
        </span>
      </h2>

      <PointMoneyCardSection
        availableAmount={availableAmount}
        availablePoint={availablePoint}
        availableMoney={availableMoney}
        allUseAmount={allUseAmount}
      />
      <DeferredPaymentSection
        deferredPaymentAvailableAmount={deferredPaymentAvailableAmount}
      />
    </section>
  );
};
