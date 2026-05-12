import {cn} from '@/shared/utils/cn';

type PointUsageFieldProps = {
  point?: number;
  className?: string;
  onClickUseAll?: () => void;
};

export const PointUsageField = ({
  point = 0,
  className,
  onClickUseAll,
}: PointUsageFieldProps) => {
  return (
    <div className={cn('flex w-[315px] items-center gap-[10px]', className)}>
      <div className='flex h-[42px] w-[229px] shrink-0 items-center justify-between rounded-[6px] border border-gray-500 px-[14px] py-[9px]'>
        <span className='text-body-14m text-gray-800'>사용</span>
        <span className='text-body-14b text-green-600'>
          {point.toLocaleString()}원
        </span>
      </div>

      <button
        type='button'
        onClick={onClickUseAll}
        className='text-body-14b text-semi-black flex h-[42px] w-[76px] shrink-0 items-center justify-center gap-[10px] rounded-[6px] bg-green-200 p-[10px]'>
        전액사용
      </button>
    </div>
  );
}
