import {useNavigate} from 'react-router-dom';

import {OrderSheetContent} from '@/pages/order-sheet/components/order-sheet-content/OrderSheetContent';
import {OrderSheetHeader} from '@/pages/order-sheet/components/order-sheet-header/OrderSheetHeader';
import {OrderSheetSkeleton} from '@/pages/order-sheet/components/order-sheet-skeleton/OrderSheetSkeleton';
import {useOrderId} from '@/pages/order-sheet/hooks/use-order-id';
import {AsyncBoundary} from '@/shared/components';
import {ROUTES} from '@/shared/constants/routes';

export const OrderSheetPage = () => {
  const navigate = useNavigate();
  const orderId = useOrderId();

  return (
    <div className='flex min-h-screen flex-col gap-[31px] bg-gray-300'>
      <OrderSheetHeader
        className='pt-[72px] pr-[16px] pb-[12px] pl-[16px]'
        onCloseClick={() => {
          navigate(ROUTES.CART);
        }}
      />

      <main className='flex flex-col gap-[40px] px-[16px] pb-[16px]'>
        <AsyncBoundary
          pendingFallback={<OrderSheetSkeleton />}
          errorFallback={() => (
            <p
              role='alert'
              className='text-caption-12m py-[48px] text-center text-red-900'>
              주문 포인트 정보를 불러오지 못했습니다.
            </p>
          )}>
          <OrderSheetContent orderId={orderId} />
        </AsyncBoundary>
      </main>
    </div>
  );
};
