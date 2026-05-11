import {IcSvgMap} from '@/shared/icons';

type AddressBoxProps = {
  address: string;
  onChangeAddress: () => void;
};

export const AddressBox = ({address, onChangeAddress}: AddressBoxProps) => {
  return (
    <div>
      <div>
        <IcSvgMap width={24} height={24} />
        <p>{address}</p>
      </div>
      <button onClick={onChangeAddress}>공컴머지하면바꾸자</button>
    </div>
  );
};
