import {ActionButton} from '@/shared/components/button/ActionButton';
import {IcSvgMap} from '@/shared/icons';

type AddressBoxProps = {
  address: string;
  onChangeAddress: () => void;
};

export const AddressBox = ({address, onChangeAddress}: AddressBoxProps) => {
  return (
    <div className='text-caption-12m flex justify-between border-b-2 border-gray-500 px-[16px] py-[8px]'>
      <div className='flex items-center gap-[4px]'>
        <IcSvgMap
          width={24}
          height={24}
          aria-hidden='true'
          color='var(--color-green-600)'
        />
        <p className='truncate'>{address}</p>
      </div>
      <ActionButton
        variant='sm'
        aria-label='배송지 변경'
        onClick={onChangeAddress}>
        변경
      </ActionButton>
    </div>
  );
};
