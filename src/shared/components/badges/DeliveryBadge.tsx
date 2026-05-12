import type {ComponentPropsWithoutRef} from 'react';

import {IcSvgTagDelivery} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';
import { getDeliveryDateInfo } from '@/shared/utils/formatDeliveryDate';

type DeliveryBadgeProps = ComponentPropsWithoutRef<'div'> & {
  arrivalPrefix?: string;
  arrivalDate?: string;
};

export const DeliveryBadge = ({
  className,
  arrivalPrefix,
  arrivalDate,
  ...props
}: DeliveryBadgeProps) => {
  const deliveryDateInfo = getDeliveryDateInfo();

  return (
    <div
      className={cn(
        'flex h-12 w-[26.1rem] items-center gap-[0.4rem] rounded-lg border border-green-600 bg-green-100 px-[0.4rem] text-black',
        className
      )}
      {...props}>
      <IcSvgTagDelivery
        aria-hidden='true'
        className='h-[1.6rem] w-[7.6rem] shrink-0 overflow-hidden'
      />
      <span className='text-body-14b leading-none'>·</span>
      <span className='flex shrink-0 items-center gap-[0.4rem] leading-none whitespace-nowrap'>
        <span className='text-caption-12m'>{arrivalPrefix ?? deliveryDateInfo.arrivalPrefix}</span>
        <span className='text-caption-12sb text-green-600'>{arrivalDate ?? deliveryDateInfo.arrivalDate}</span>
        <span className='text-caption-12m'>도착</span>
      </span>
    </div>
  );
}
