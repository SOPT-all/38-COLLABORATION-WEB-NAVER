import {
  KURLY_DELIVERY_LABEL,
  NORMAL_DELIVERY_LABEL,
} from '@/pages/cart/constants/CartConstants';
import {cn} from '@/shared/utils/cn';

type DeliveryTab = 'normal' | 'kurly';

type TapProps = {
  normalCount: number;
  kurlyCount: number;
  selectedTab: DeliveryTab;
  onChange: (tab: DeliveryTab) => void;
};

const variantStyles = {
  base: 'flex-1 py-[1.2rem] text-center',
  selected: 'border-b-2 border-green-600 text-green-600',
  unselected: 'border-b-2 border-gray-500 text-gray-900',
};

export const Tap = ({
  selectedTab,
  onChange,
  normalCount,
  kurlyCount,
}: TapProps) => {
  return (
    <div className='text-body-14b flex' role='tablist'>
      <button
        className={cn(
          variantStyles.base,
          selectedTab === 'normal'
            ? variantStyles.selected
            : variantStyles.unselected
        )}
        type='button'
        role='tab'
        aria-selected={selectedTab === 'normal'}
        onClick={() => onChange('normal')}>
        {NORMAL_DELIVERY_LABEL} {normalCount}
      </button>
      <button
        className={cn(
          variantStyles.base,
          selectedTab === 'kurly'
            ? variantStyles.selected
            : variantStyles.unselected
        )}
        type='button'
        role='tab'
        aria-selected={selectedTab === 'kurly'}
        onClick={() => onChange('kurly')}>
        {KURLY_DELIVERY_LABEL} {kurlyCount}
      </button>
    </div>
  );
};
