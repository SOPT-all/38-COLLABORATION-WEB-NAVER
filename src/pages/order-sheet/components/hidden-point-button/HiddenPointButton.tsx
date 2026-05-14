import {IcSvgChevronRightSm} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

import {HIDDEN_POINT_BUTTON_TEXT} from '@/pages/order-sheet/constants/OrderSheetConstants';

type HiddenPointButtonProps = {
  className?: string;
  onClick?: () => void;
};

export const HiddenPointButton = ({
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
      <span className='text-body-14m text-navy'>
        {HIDDEN_POINT_BUTTON_TEXT.label}
      </span>

      <div className='text-body-14m text-navy flex items-center'>
        <span>{HIDDEN_POINT_BUTTON_TEXT.unknownAmount}</span>
        <IcSvgChevronRightSm width={24} height={24} />
      </div>
    </button>
  );
};
