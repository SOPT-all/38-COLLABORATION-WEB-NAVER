import {ActionButton} from '@/shared/components/button/ActionButton';
import {
  IcSvgCheckboxChecked,
  IcSvgCheckboxUnChecked,
  IcSvgCoupon,
} from '@/shared/icons';

type StoreHeaderProps = {
  storeName: string;
  checked: boolean;
  onToggleStore: () => void;
  onCouponClick: () => void;
};

export const StoreHeader = ({
  storeName,
  checked,
  onToggleStore,
  onCouponClick,
}: StoreHeaderProps) => {
  return (
    <section className='flex justify-between border-b-1 border-gray-900 pb-[12px]'>
      <button
        type='button'
        className='flex items-center gap-[1px]'
        aria-pressed={checked}
        onClick={onToggleStore}>
        {checked ? (
          <IcSvgCheckboxChecked
            width={24}
            height={24}
            className='text-green-600'
            aria-hidden
          />
        ) : (
          <IcSvgCheckboxUnChecked
            width={24}
            height={24}
            className='text-green-600'
            aria-hidden
          />
        )}
        <p className='text-body-16b'>{storeName}</p>
      </button>
      <ActionButton
        variant='m'
        onClick={onCouponClick}
        className='text-caption-12sb flex w-auto items-center border-red-800 bg-red-700 px-[5.5px] py-[3.5px] text-red-900'>
        <IcSvgCoupon width={24} height={24} color='var(--color-red-900)' />
        쿠폰 받기
      </ActionButton>
    </section>
  );
};
