import {OrderCardLayout} from '@/shared/components';
import {IcSvgCheckLg} from '@/shared/icons';

import type {PointMoneyData} from '@/pages/order-sheet/api/types/order-sheet';
import {POINT_MONEY_SECTION_TEXT} from '@/pages/order-sheet/constants/OrderSheetConstants';

const {deferredPayment} = POINT_MONEY_SECTION_TEXT;

type DeferredPaymentCardProps = Pick<
  PointMoneyData,
  'deferredPaymentAvailableAmount'
>;

export const DeferredPaymentCard = ({
  deferredPaymentAvailableAmount,
}: DeferredPaymentCardProps) => {
  const hasDeferredPaymentAvailable = deferredPaymentAvailableAmount > 0;

  return (
    <OrderCardLayout
      variant='paymentAgreement'
      className='flex max-w-full gap-[6px] border border-gray-500 pt-[14px] pr-[77px] pb-[24px] pl-[14px]'>
      <IcSvgCheckLg
        width={24}
        height={24}
        className='cursor-pointer text-gray-700'
      />
      <div className='flex flex-col gap-[18px]'>
        <div className='flex gap-[6px]'>
          <h3 className='text-body-16b'>{deferredPayment.title}</h3>
          {hasDeferredPaymentAvailable && (
            <span className='text-caption-12sb box-border flex h-[20px] w-[52px] items-center justify-center rounded-[35px] bg-green-400'>
              {deferredPayment.rewardBadge}
            </span>
          )}
        </div>
        <p className='text-body-14m text-gray-800'>
          {deferredPayment.description}
        </p>
      </div>
    </OrderCardLayout>
  );
};
