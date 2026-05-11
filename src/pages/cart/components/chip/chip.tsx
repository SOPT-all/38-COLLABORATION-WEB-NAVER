import {cn} from '@/shared/utils/cn';

type DeliveryTab = 'normal' | 'kurly';

type ChipProps = {
  selectedTab: DeliveryTab;
  onChange: (tab: DeliveryTab) => void;
};

const variantStyles = {
  base: 'flex-1 py-[1.2rem] text-center',
  selected: 'border-b-2 border-green-600 text-green-600',
  unselected: 'border-b-2 border-gray-500 text-gray-900',
};

const Chip = ({selectedTab, onChange}: ChipProps) => {
  return (
    <div className='text-body-14b flex'>
      <button
        className={cn(
          variantStyles.base,
          selectedTab === 'normal'
            ? variantStyles.selected
            : variantStyles.unselected
        )}
        type='button'
        aria-selected={selectedTab === 'normal'}
        onClick={() => onChange('normal')}>
        일반배송 1
      </button>
      <button
        className={cn(
          variantStyles.base,
          selectedTab === 'kurly'
            ? variantStyles.selected
            : variantStyles.unselected
        )}
        type='button'
        aria-selected={selectedTab === 'kurly'}
        onClick={() => onChange('kurly')}>
        컬리N마트 · 지금배달 0
      </button>
    </div>
  );
};

export default Chip;
