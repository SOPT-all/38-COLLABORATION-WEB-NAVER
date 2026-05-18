import {useEffect, useState} from 'react';
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
import {cn} from '@/shared/utils/cn';

type CardProductProps = {
  product: ProductInfoProps;
  option: ProductOptionProps;
  orderDeadline: string;
  deliveryDate: string;
  checked: boolean;
  onToggle: () => void;
};

const URGENT_DEADLINE_SECONDS = 30 * 60;

const getDeadlineSeconds = (deadline: string) => {
  const [hours = 0, minutes = 0, seconds = 0] = deadline.split(':').map(Number);

  return hours * 60 * 60 + minutes * 60 + seconds;
};

const formatDeadline = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((time) => String(time).padStart(2, '0'))
    .join(':');
};

export const CardProduct = ({
  product,
  option,
  orderDeadline,
  deliveryDate,
  checked,
  onToggle,
}: CardProductProps) => {
  const initialDeadlineSeconds = getDeadlineSeconds(orderDeadline);
  const [remainingSeconds, setRemainingSeconds] = useState(
    () => initialDeadlineSeconds
  );
  const isUrgentDeadline = remainingSeconds <= URGENT_DEADLINE_SECONDS;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRemainingSeconds((prevSeconds) =>
        prevSeconds <= 0 ? initialDeadlineSeconds : prevSeconds - 1
      );
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [initialDeadlineSeconds]);

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
          <span className={cn(isUrgentDeadline && 'text-red-900')}>
            {formatDeadline(remainingSeconds)}
          </span>{' '}
          내 주문 시 <span className='text-green-600'>{deliveryDate} 도착</span>
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
