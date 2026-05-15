import {useState} from 'react';
import {CardProduct} from '@/pages/cart/components/product-card/CartProduct';
import {StoreHeader} from '@/pages/cart/components/store-header/StoreHeader';
import {StoreOrderSummary} from '@/pages/cart/components/store-order-summary/StoreOrderSummary';
import {MOCK_STORE} from '@/pages/cart/mock/store-section';
import {OrderCardLayout} from '@/shared/components';

export const StoreSection = () => {
  const [isStoreChecked, setIsStoreChecked] = useState(true);
  const [isProductChecked, setIsProductChecked] = useState(true);
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);

  return (
    <OrderCardLayout variant='cartStore' className='flex flex-col gap-[12px]'>
      <StoreHeader
        storeName={MOCK_STORE.storeName}
        checked={isStoreChecked}
        onToggleStore={() => setIsStoreChecked((prevChecked) => !prevChecked)}
        onCouponClick={() => undefined}
      />
      <CardProduct
        checked={isProductChecked}
        onToggle={() => setIsProductChecked((prevChecked) => !prevChecked)}
        orderDeadline={MOCK_STORE.orderDeadline}
        deliveryDate={MOCK_STORE.deliveryDate}
        product={MOCK_STORE.product}
        option={{
          ...MOCK_STORE.option,
          onDecrease: () => undefined,
          onIncrease: () => undefined,
          onDelete: () => undefined,
        }}
      />
      <StoreOrderSummary
        deliveryFee={MOCK_STORE.deliveryFee}
        expectedOrderAmount={MOCK_STORE.expectedOrderAmount}
        isExpanded={isSummaryExpanded}
        onToggleExpand={() =>
          setIsSummaryExpanded((prevIsExpanded) => !prevIsExpanded)
        }
      />
    </OrderCardLayout>
  );
};
