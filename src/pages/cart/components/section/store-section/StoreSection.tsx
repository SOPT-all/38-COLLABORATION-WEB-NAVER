import {useState} from 'react';
import {CardProduct} from '@/pages/cart/components/product-card/CartProduct';
import {StoreHeader} from '@/pages/cart/components/store-header/StoreHeader';
import {StoreOrderSummary} from '@/pages/cart/components/store-order-summary/StoreOrderSummary';
import {MOCK_STORE} from '@/pages/cart/mock/store-section';
import {OrderCardLayout} from '@/shared/components';

type StoreSectionProps = {
  storeChecked: boolean;
  productChecked: boolean;
  quantity: number;
  expectedOrderAmount: number;
  onToggleStore: () => void;
  onToggleProduct: () => void;
  onDecreaseQuantity: () => void;
  onIncreaseQuantity: () => void;
  onDeleteProduct: () => void;
};

export const StoreSection = ({
  storeChecked,
  productChecked,
  quantity,
  expectedOrderAmount,
  onToggleStore,
  onToggleProduct,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onDeleteProduct,
}: StoreSectionProps) => {
  const [isSummaryExpanded, setIsSummaryExpanded] = useState(false);

  return (
    <OrderCardLayout variant='cartStore' className='flex flex-col gap-[12px]'>
      <StoreHeader
        storeName={MOCK_STORE.storeName}
        checked={storeChecked}
        onToggleStore={onToggleStore}
        onCouponClick={() => undefined}
      />
      <CardProduct
        checked={productChecked}
        onToggle={onToggleProduct}
        orderDeadline={MOCK_STORE.orderDeadline}
        deliveryDate={MOCK_STORE.deliveryDate}
        product={MOCK_STORE.product}
        option={{
          ...MOCK_STORE.option,
          quantity,
          price: MOCK_STORE.option.price * quantity,
          onDecrease: onDecreaseQuantity,
          onIncrease: onIncreaseQuantity,
          onDelete: onDeleteProduct,
        }}
      />
      <StoreOrderSummary
        deliveryFee={MOCK_STORE.deliveryFee}
        expectedOrderAmount={expectedOrderAmount}
        isExpanded={isSummaryExpanded}
        onToggleExpand={() =>
          setIsSummaryExpanded((prevIsExpanded) => !prevIsExpanded)
        }
      />
    </OrderCardLayout>
  );
};
