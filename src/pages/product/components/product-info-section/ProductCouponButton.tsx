import {ActionButton} from '@/shared/components/button/ActionButton';
import {IcSvgCoupon} from '@/shared/icons';

type ProductCouponButtonProps = {
  dDay: string;
  label: string;
  onClick?: () => void;
};

export const ProductCouponButton = ({
  dDay,
  label,
  onClick,
}: ProductCouponButtonProps) => {
  return (
    <ActionButton
      variant='m'
      className='text-body-14b relative flex h-[3.8rem] w-[9.7rem] items-center justify-center rounded-[0.8rem] border border-red-800 bg-red-700 p-[1rem] text-red-900'
      onClick={onClick}
      >
      <span className='text-caption-12sb absolute top-[-1.7rem] right-[0.8rem] flex h-[1.9rem] w-[3.6rem] items-center justify-center rounded-[0.4rem] bg-red-900 text-white'>
        {dDay}
        <span className='absolute bottom-[-0.4rem] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[0.4rem] border-t-[0.4rem] border-x-transparent border-t-red-900' />
      </span>
      <span className='flex h-[1.7rem] w-[7.7rem] items-center gap-[0.6rem]'>
        <IcSvgCoupon aria-hidden='true' className='h-[1.5rem] w-[1.9rem]' />
        <span className='flex h-[1.7rem] w-[5.2rem] items-center leading-[100%] tracking-[0px] whitespace-nowrap'>
          {label}
        </span>
      </span>
    </ActionButton>
  );
};
