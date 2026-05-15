import {useId, type ChangeEvent, type FocusEvent, type MouseEvent} from 'react';

import {IcSvgDelete} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

type PointUsageFieldProps = {
  point: number;
  className?: string;
  isUseAllDisabled?: boolean;
  onChangePoint?: (point: number) => void;
  onClearPoint?: () => void;
  onClickUseAll?: () => void;
};

export const PointUsageField = ({
  point,
  className,
  isUseAllDisabled = false,
  onChangePoint,
  onClearPoint,
  onClickUseAll,
}: PointUsageFieldProps) => {
  const inputId = useId();
  const pointText = point.toLocaleString();
  const hasPoint = point > 0;

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
      <div className='flex h-[42px] min-w-0 flex-1 items-center justify-between rounded-[6px] border border-gray-500 px-[14px] py-[9px]'>
        <label
          htmlFor={inputId}
          className='text-body-14m shrink-0 text-gray-800'>
          사용
        </label>

        <div className='flex min-w-0 flex-1 items-center justify-end text-green-600'>
          <input
            id={inputId}
            type='text'
            inputMode='numeric'
            aria-label='사용 포인트'
            value={pointText}
            readOnly={!onChangePoint}
            onChange={handlePointChange}
            onClick={moveCaretToAmountEnd}
            onFocus={moveCaretToAmountEnd}
            className='text-body-14b min-w-0 flex-1 bg-transparent text-right text-green-600 caret-green-600 outline-none'
          />

          <span aria-hidden='true' className='text-body-14b shrink-0'>
            원
          </span>

          {hasPoint && (
            <button
              type='button'
              aria-label='사용 포인트 삭제'
              onClick={onClearPoint}
              className='ml-[4px] flex size-[24px] shrink-0 items-center justify-center'>
              <IcSvgDelete
                aria-hidden
                width={24}
                height={24}
                className='text-white'
              />
            </button>
          )}
        </div>
      </div>

      <button
        type='button'
        disabled={isUseAllDisabled}
        onClick={onClickUseAll}
        className={cn(
          'text-body-14b flex h-[42px] w-[76px] shrink-0 items-center justify-center gap-[10px] rounded-[6px] p-[10px]',
          isUseAllDisabled
            ? 'bg-gray-500 text-gray-700'
            : 'text-semi-black bg-green-200'
        )}>
        전액사용
      </button>
    </div>
  );
};
