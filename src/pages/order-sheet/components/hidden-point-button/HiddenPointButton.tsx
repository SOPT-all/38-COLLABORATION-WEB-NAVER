import {IcSvgChevronRightSm} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

type HiddenPointButtonProps = {
  point: number | null;
  className?: string;
  onClick?: () => void;
};

const formatPoint = (point: number | null) =>
  point === null ? '?원' : `${point.toLocaleString()}원`;

export const HiddenPointButton = ({
  point,
  className,
  onClick,
}: HiddenPointButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'flex h-[41px] w-[315px] items-center justify-between rounded-[6px] bg-blue-800 px-[15px] py-[11px]',
        className
      )}>
      <span className='text-body-14m text-navy'>내 숨은 포인트 찾기</span>

      <span className='text-body-14m text-navy flex items-center'>
        <span>{formatPoint(point)}</span>
        <IcSvgChevronRightSm width={24} height={24} />
      </span>
    </button>
  );
};
