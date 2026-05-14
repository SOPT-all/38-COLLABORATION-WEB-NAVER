import {useId, type ChangeEvent, type FocusEvent, type MouseEvent} from 'react';

import {POINT_USAGE_FIELD_TEXT} from '@/pages/order-sheet/constants/OrderSheetConstants';
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
  const inputId = useId();
  const pointText = point.toLocaleString();

  const handlePointChange = (event: ChangeEvent<HTMLInputElement>) => {
    const pointValue = Number(event.target.value.replace(/\D/g, ''));

    onChangePoint?.(pointValue);
  };

  const moveCaretToAmountEnd = (
    event: FocusEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>
  ) => {
    event.currentTarget.setSelectionRange(pointText.length, pointText.length);
  };

  return (
    <div className={cn('flex w-full items-center gap-[10px]', className)}>
      <label
        htmlFor={inputId}
        className='flex h-[42px] flex-1 shrink-0 items-center justify-between rounded-[6px] border border-gray-500 px-[14px] py-[9px]'>
        <span className='text-body-14m shrink-0 text-gray-800'>
          {POINT_USAGE_FIELD_TEXT.label}
        </span>

        <div className='flex min-w-0 flex-1 items-center justify-end text-green-600'>
          <input
            id={inputId}
            type='text'
            inputMode='numeric'
            aria-label={POINT_USAGE_FIELD_TEXT.inputAriaLabel}
            value={pointText}
            readOnly={!onChangePoint}
            onChange={handlePointChange}
            onClick={moveCaretToAmountEnd}
            onFocus={moveCaretToAmountEnd}
            className='text-body-14b min-w-[1ch] bg-transparent text-right text-green-600 caret-green-600 outline-none'
            style={{width: `${Math.max(pointText.length, 1)}ch`}}
          />

          <span aria-hidden='true' className='text-body-14b shrink-0'>
            {POINT_USAGE_FIELD_TEXT.currencyUnit}
          </span>
        </div>
      </label>

      <button
        type='button'
        onClick={onClickUseAll}
        className='text-body-14b text-semi-black flex h-[42px] w-[76px] shrink-0 items-center justify-center gap-[10px] rounded-[6px] bg-green-200 p-[10px]'>
        {POINT_USAGE_FIELD_TEXT.useAllButton}
      </button>
    </div>
  );
};
