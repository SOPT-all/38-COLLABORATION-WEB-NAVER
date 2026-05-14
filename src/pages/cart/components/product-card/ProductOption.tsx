import {IcSvgCloseSm, IcSvgMinus, IcSvgPlus} from '@/shared/icons';
import {formatPrice} from '@/shared/utils/format-product';

export type ProductOptionProps = {
  optionName: string;
  quantity: number;
  price: number;
  onDecrease: () => void;
  onIncrease: () => void;
  onDelete: () => void;
};
export const ProductOption = ({
  optionName,
  quantity,
  price,
  onDecrease,
  onIncrease,
  onDelete,
}: ProductOptionProps) => {
  return (
    <article className='flex flex-col gap-[8px] rounded-[4px] bg-blue-800 px-[14px] py-[10px]'>
      <div className='flex justify-between'>
        <p className='text-caption-12m'>{optionName}</p>
        <button type='button' aria-label='옵션 삭제' onClick={onDelete}>
          <IcSvgCloseSm width={24} height={24} />
        </button>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex w-fit items-center gap-[14px] rounded-[4px] border border-gray-500'>
          <button
            type='button'
            aria-label='수량 감소'
            onClick={onDecrease}
            disabled={quantity <= 1}
            className='border-r border-r-gray-500 px-[5px] py-[3px]'>
            <IcSvgMinus width={24} height={24} color='var(--color-gray-700)' />
          </button>
          <span className='text-body-14b'>{quantity}</span>
          <button
            type='button'
            aria-label='수량 증가'
            onClick={onIncrease}
            className='border-l border-gray-500 px-[5px] py-[3px]'>
            <IcSvgPlus width={24} height={24} color='var(--color-gray-900)' />
          </button>
        </div>
        <p className='text-caption-12r'>{formatPrice(price)}</p>
      </div>
    </article>
  );
};
