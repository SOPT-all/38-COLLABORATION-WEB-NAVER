import {useState} from 'react';
import {AddressBox} from '@/pages/cart/components/address-box/AddressBox';
import {CartHeader} from '@/pages/cart/components/cart-header/CartHeader';
import {OrderPriceSummary} from '@/pages/cart/components/section/order-price-summary-section/OrderPriceSummarySection';
import {StoreSection} from '@/pages/cart/components/section/store-section/StoreSection';
import {SelectControl} from '@/pages/cart/components/select-control/SelectControl';
import {Tap} from '@/pages/cart/components/tap/Tap';
import {
  KURLY_DELIVERY_LABEL,
  NORMAL_DELIVERY_LABEL,
} from '@/pages/cart/constants/CartConstants';
import {MOCK_STORE} from '@/pages/cart/mock/store-section';

type DeliveryTab = 'normal' | 'kurly';

const DELIVERY_TAB_ITEMS = [
  {value: 'normal', label: NORMAL_DELIVERY_LABEL, count: 1},
  {value: 'kurly', label: KURLY_DELIVERY_LABEL, count: 0},
] satisfies {
  value: DeliveryTab;
  label: string;
  count: number;
}[];

const DELIVERY_ADDRESS = '서울 마포구 백범로31길';

export function CartPage() {
  const [isAllSelected, setIsAllSelected] = useState(true);
  const [isStoreChecked, setIsStoreChecked] = useState(true);
  const [isProductChecked, setIsProductChecked] = useState(true);
  const [quantity, setQuantity] = useState<number>(MOCK_STORE.option.quantity);

  const selectedQuantity = isProductChecked ? quantity : 0;
  const selectedProductsAmount =
    MOCK_STORE.product.originalPrice * selectedQuantity;
  const instantDiscountAmount =
    (MOCK_STORE.product.price - MOCK_STORE.product.originalPrice) *
    selectedQuantity;
  const expectedOrderAmount = MOCK_STORE.product.price * selectedQuantity;

  const handleToggleAll = () => {
    const nextIsSelected = !isAllSelected;

    setIsAllSelected(nextIsSelected);
    setIsStoreChecked(nextIsSelected);
    setIsProductChecked(nextIsSelected);
  };

  const handleToggleStore = () => {
    const nextIsSelected = !isStoreChecked;

    setIsAllSelected(nextIsSelected);
    setIsStoreChecked(nextIsSelected);
    setIsProductChecked(nextIsSelected);
  };

  const handleToggleProduct = () => {
    const nextIsSelected = !isProductChecked;

    setIsAllSelected(nextIsSelected);
    setIsStoreChecked(nextIsSelected);
    setIsProductChecked(nextIsSelected);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <div className='min-h-screen bg-white'>
      <CartHeader />
      <Tap items={DELIVERY_TAB_ITEMS} />
      <AddressBox
        address={DELIVERY_ADDRESS}
        onChangeAddress={() => undefined}
      />
      <SelectControl
        checked={isAllSelected}
        onToggleAll={handleToggleAll}
        onDeleteSelected={() => undefined}
      />
      <main className='flex flex-col items-center gap-[12px] bg-gray-300 px-[16px] py-[12px]'>
        <StoreSection
          storeChecked={isStoreChecked}
          productChecked={isProductChecked}
          quantity={quantity}
          expectedOrderAmount={expectedOrderAmount}
          onToggleStore={handleToggleStore}
          onToggleProduct={handleToggleProduct}
          onDecreaseQuantity={handleDecreaseQuantity}
          onIncreaseQuantity={() =>
            setQuantity((prevQuantity) => prevQuantity + 1)
          }
          onDeleteProduct={() => {}}
        />
        <OrderPriceSummary
          selectedProductsAmount={selectedProductsAmount}
          instantDiscountAmount={instantDiscountAmount}
          couponDiscountAmount={0}
          deliveryFee={MOCK_STORE.deliveryFee}
        />
      </main>
    </div>
  );
}
