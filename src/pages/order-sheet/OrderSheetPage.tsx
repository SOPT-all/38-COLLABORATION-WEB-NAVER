import {useNavigate} from 'react-router-dom';

import {OrderSheetHeader} from '@/pages/order-sheet/components/order-sheet-header/OrderSheetHeader';
import {
  MOCK_ORDER_SHEET_RESPONSE_DATA,
  MOCK_POINT_MONEY_DATA,
  MOCK_REWARD_INFO,
  MOCK_REWARD_ITEMS,
} from '@/pages/order-sheet/mocks/RewardInfoCardMocks';
import {ROUTES} from '@/shared/constants/routes';

import {AgreementSection} from '@/pages/order-sheet/sections/agreement-section/AgreementSection';
import {PaymentButtonSection} from '@/pages/order-sheet/sections/payment-button-section/PaymentButtonSection';
import {PointMoneySection} from '@/pages/order-sheet/sections/point-money-section/PointMoneySection';
import {RewardPointSection} from '@/pages/order-sheet/sections/reward-point-section/RewardPointSection';

export function OrderSheetPage() {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    navigate(ROUTES.CART);
  };

  return (
    <div className='flex min-h-screen flex-col gap-[31px] bg-gray-300'>
      <OrderSheetHeader
        className='pt-[72px] pr-[16px] pb-[12px] pl-[16px]'
        onCloseClick={handleCloseClick}
      />

      <main className='flex flex-col gap-[40px] px-[16px] pb-[16px]'>
        <PointMoneySection {...MOCK_POINT_MONEY_DATA} />
        <RewardPointSection
          totalPoint={MOCK_ORDER_SHEET_RESPONSE_DATA.expectedPoint.totalPoint}
          rewardItems={MOCK_REWARD_ITEMS}
          rewardInfo={MOCK_REWARD_INFO}
        />
        <AgreementSection />
        <PaymentButtonSection />
      </main>
    </div>
  );
}
