import {CHANGE_ADDRESS} from '@/pages/cart/constants/CartConstants';
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
        <IcSvgMap width={24} height={24} color='var(--color-green-600' />
        <p className='text'>{address}</p>
      </div>
      <ActionButton variant='sm' onClick={onChangeAddress}>
        {CHANGE_ADDRESS}
      </ActionButton>
    </div>
  );
};
