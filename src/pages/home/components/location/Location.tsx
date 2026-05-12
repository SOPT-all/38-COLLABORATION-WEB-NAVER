import type {ComponentPropsWithoutRef} from 'react';

import {IcSvgMap} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

type LocationProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  recipientName?: string;
  address?: string;
  deliveryStandard?: string;
  changeLabel?: string;
  onChangeClick?: () => void;
};

export const Location = ({
  recipientName = '김렛솝',
  address = '서울 마포구 백범로31길',
  deliveryStandard = '도착기준',
  changeLabel = '변경',
  className,
  onChangeClick,
  ...props
}: LocationProps) => {
  return (
    <div
      aria-label='배송 위치'
      className={cn(
        'flex h-[58px] w-full items-center gap-[6px] bg-white px-[20px]',
        className
      )}
      {...props}>
      <IcSvgMap
        aria-hidden='true'
        className='h-[24px] w-[24px] shrink-0 text-green-600'
      />

      <div className='flex min-w-0 flex-1 items-center gap-[5px] text-gray-900'>
        <strong className='text-caption-12sb shrink-0'>{recipientName}</strong>
        <span className='text-caption-12m truncate'>({address})</span>
        <span className='text-caption-12m shrink-0'>{deliveryStandard}</span>
      </div>

      <button
        type='button'
        className='text-caption-12m shrink-0 cursor-pointer text-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900'
        onClick={onChangeClick}>
        {changeLabel}
      </button>
    </div>
  );
};
