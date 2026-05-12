import {
  DELETE_SELECTED_LABEL,
  SELECT_ALL_LABEL,
} from '@/pages/cart/constants/CartConstants';
import {ActionButton} from '@/shared/components/button/ActionButton';
import {
  IcSvgCheckboxChecked,
  IcSvgCheckboxUnChecked,
  IcSvgChevronDownSm,
  IcSvgCloseSm,
} from '@/shared/icons';

type SelectControlProps = {
  checked: boolean;
  onToggleAll: () => void;
  onDeleteSelected: () => void;
};

export const SelectControl = ({
  checked,
  onToggleAll,
  onDeleteSelected,
}: SelectControlProps) => {
  return (
    <div className='flex justify-between px-[16px] py-[8px]'>
      <div className='flex items-center gap-[1px]'>
        <button
          type='button'
          className='flex items-center gap-[1px]'
          aria-pressed={checked}
          onClick={onToggleAll}>
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
          <IcSvgChevronDownSm />
          <p className='text-body-16b'>{SELECT_ALL_LABEL}</p>
        </button>
      </div>
      <ActionButton
        variant='m'
        onClick={onDeleteSelected}
        className='text-caption-12m flex w-auto items-center gap-[1px] p-[4px]'>
        <IcSvgCloseSm width={24} height={24} />
        {DELETE_SELECTED_LABEL}
      </ActionButton>
    </div>
  );
};
