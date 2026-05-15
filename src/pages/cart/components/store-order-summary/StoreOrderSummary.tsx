import {
  DELIVERY_FEE,
  EXPECTED_ORDER_AMOUNT,
} from '@/pages/cart/constants/CartConstants';
import {IcSvgChevronDownSm} from '@/shared/icons';
import {formatPrice} from '@/shared/utils/format-product';

type StoreOrderSummaryProps = {
  deliveryFee: number;
  expectedOrderAmount: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
};

const formatDeliveryFee = (deliveryFee: number) => {
  return deliveryFee === 0 ? '무료' : formatPrice(deliveryFee);
};

export const StoreOrderSummary = ({
  deliveryFee,
  expectedOrderAmount,
  isExpanded,
  onToggleExpand,
}: StoreOrderSummaryProps) => {
  return (
    <div className='gap=[4px] flex flex-col gap-[4px] border-t pt-[10px]'>
      <div className='text-body-14m flex justify-between'>
        <span className='text-gray-800'>{DELIVERY_FEE}</span>
        <span className='text-blue-900'>{formatDeliveryFee(deliveryFee)}</span>
      </div>
      <div className='text-body-14b flex justify-between'>
        <span>{EXPECTED_ORDER_AMOUNT}</span>
        <span className='flex items-center gap-[2px]'>
          {formatPrice(expectedOrderAmount)}{' '}
          <button
            type='button'
            aria-label='주문 금액 상세 보기'
            aria-expanded={isExpanded}
            onClick={onToggleExpand}>
            <IcSvgChevronDownSm width={24} height={24} />
          </button>
        </span>
      </div>
    </div>
  );
};
