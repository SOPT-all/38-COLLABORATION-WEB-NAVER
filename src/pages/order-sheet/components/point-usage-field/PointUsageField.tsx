import type {ChangeEvent} from 'react';

import {cn} from '@/shared/utils/cn';

type PointUsageFieldProps = {
  point: number;
  className?: string;
  onChangePoint?: (point: number) => void;
  onClickUseAll?: () => void;
};

export const PointUsageField = ({
  point,
  className,
  onChangePoint,
  onClickUseAll,
}: PointUsageFieldProps) => {
  const handlePointChange = (event: ChangeEvent<HTMLInputElement>) => {
    const pointValue = Number(event.target.value.replace(/\D/g, ''));

    onChangePoint?.(pointValue);
  };

  return (
    <div className={cn('flex w-full items-center gap-[10px]', className)}>
      <label className='flex h-[42px] flex-1 shrink-0 items-center justify-between rounded-[6px] border border-gray-500 px-[14px] py-[9px]'>
        <span className='text-body-14m shrink-0 text-gray-800'>사용</span>

        <div className='flex min-w-0 flex-1 items-center justify-end'>
          <input
            type='text'
            inputMode='numeric'
            aria-label='사용 포인트'
            value={point.toLocaleString()}
            readOnly={!onChangePoint}
            onChange={handlePointChange}
            className='text-body-14b min-w-0 flex-1 bg-transparent text-right text-green-600 outline-none'
          />

          <span aria-hidden='true' className='text-body-14b text-green-600'>
            원
          </span>
        </div>
      </label>

      <button
        type='button'
        onClick={onClickUseAll}
        className='text-body-14b text-semi-black flex h-[42px] w-[76px] shrink-0 items-center justify-center gap-[10px] rounded-[6px] bg-green-200 p-[10px]'>
        전액사용
      </button>
    </div>
  );
};
