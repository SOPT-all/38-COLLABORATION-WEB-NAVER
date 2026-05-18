import {useOrderPointsQuery} from '@/pages/order-sheet/api';
import {
  getPointMoneyData,
  getRewardPointData,
} from '@/pages/order-sheet/hooks/use-order-sheet-data';
import {AgreementSection} from '@/pages/order-sheet/sections/agreement-section/AgreementSection';
import {PaymentButtonSection} from '@/pages/order-sheet/sections/payment-button-section/PaymentButtonSection';
import {PointMoneySection} from '@/pages/order-sheet/sections/point-money-section/PointMoneySection';
import {RewardPointSection} from '@/pages/order-sheet/sections/reward-point-section/RewardPointSection';

type OrderSheetContentProps = {
  orderId: number;
};

export const OrderSheetContent = ({orderId}: OrderSheetContentProps) => {
  const {data: orderPointsData} = useOrderPointsQuery(orderId);

  return (
    <>
      <PointMoneySection pointMoneyData={getPointMoneyData(orderPointsData)} />
      <RewardPointSection
        rewardPointData={getRewardPointData(orderPointsData)}
      />
      <AgreementSection />
      <PaymentButtonSection />
    </>
  );
};
