import {
  ProductInfo,
  type ProductInfoProps,
} from '@/pages/cart/components/product-card/ProductInfo';
import {
  ProductOption,
  type ProductOptionProps,
} from '@/pages/cart/components/product-card/ProductOption';
import {DeliveryBadge} from '@/shared/components';
import {OptionButton} from '@/shared/components/button/OptionButton';
import {IcSvgCheckboxChecked, IcSvgCheckboxUnChecked} from '@/shared/icons';

type CardProductProps = {
  product: ProductInfoProps;
  option: ProductOptionProps;
  orderDeadline: string;
  deliveryDate: string;
  checked: boolean;
  onToggle: () => void;
};

export const CardProduct = ({
  product,
  option,
  orderDeadline,
  deliveryDate,
  checked,
  onToggle,
}: CardProductProps) => {
  return (
    <section className='flex items-start gap-[3px] pb-[6px]'>
      <button
        type='button'
        className='flex items-center gap-[1px]'
        aria-label={checked ? '상품 선택 해제' : '상품 선택'}
        onClick={onToggle}>
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
      </button>
      <div className='flex flex-col gap-[6px]'>
        <DeliveryBadge />
        <p>
          {orderDeadline} 내 주문 시{' '}
          <span className='text-green-600'>{deliveryDate} 도착</span>
        </p>
        <ProductInfo {...product} />
        <ProductOption {...option} />
        <OptionButton className='text-body-14m w-auto rounded-[4px] py-[8px]'>
          옵션 변경
        </OptionButton>
      </div>
    </section>
  );
};
