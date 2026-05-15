import {ORDER_PRICE_SUMMARY} from '@/pages/cart/constants/CartConstants';
import {OrderCardLayout} from '@/shared/components';
import {cn} from '@/shared/utils/cn';
import {formatPrice} from '@/shared/utils/format-product';
type OrderPriceSummaryProps = {
  selectedProductsAmount: number;
  instantDiscountAmount: number;
  couponDiscountAmount: number;
  deliveryFee: number;
};

const getDiscountAmount = (amount: number) => Math.abs(amount);

const formatDiscountPrice = (amount: number) =>
  `-${formatPrice(getDiscountAmount(amount))}`;

export const OrderPriceSummary = ({
  selectedProductsAmount,
  instantDiscountAmount,
  couponDiscountAmount,
  deliveryFee,
}: OrderPriceSummaryProps) => {
  const totalAmount =
    selectedProductsAmount -
    getDiscountAmount(instantDiscountAmount) -
    getDiscountAmount(couponDiscountAmount) +
    deliveryFee;

  const priceSummaryItems = [
    {
      label: ORDER_PRICE_SUMMARY.SELECTED_PRODUCTS,
      value: selectedProductsAmount,
      isDiscount: false,
    },
    {
      label: ORDER_PRICE_SUMMARY.INSTANT_DISCOUNT,
      value: instantDiscountAmount,
      isDiscount: true,
    },
    {
      label: ORDER_PRICE_SUMMARY.COUPON_DISCOUNT,
      value: couponDiscountAmount,
      isDiscount: true,
    },
    {
      label: ORDER_PRICE_SUMMARY.DELIVERY_FEE,
      value: deliveryFee,
      isDiscount: false,
    },
  ];
  return (
    <OrderCardLayout
      variant='cartPriceSummary'
      className='flex flex-col gap-[8px]'
      aria-labelledby='order-price-summary-title'>
      <h2 id='order-price-summary-title' className='text-body-16b'>
        {ORDER_PRICE_SUMMARY.TITLE}
      </h2>

      {priceSummaryItems.map(({label, value, isDiscount}) => (
        <div key={label} className='text-body-14m flex justify-between'>
          <span>{label}</span>
          <span className={cn(isDiscount && 'text-red-900')}>
            {isDiscount ? formatDiscountPrice(value) : formatPrice(value)}
          </span>
        </div>
      ))}

      <div className='flex justify-between border-t border-gray-500 pt-[16px]'>
        <span className='text-body-14sb'>{ORDER_PRICE_SUMMARY.TOTAL}</span>
        <span className='text-body-16b'>{formatPrice(totalAmount)}</span>
      </div>
    </OrderCardLayout>
  );
};
