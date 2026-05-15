import {DeliveryBadge} from '@/shared/components/badges/DeliveryBadge';

import {DeliveryDetailButton} from '@/pages/product/components/product-delivery-section/sections/DeliveryDetailButton';
import {DeliveryMembershipInfo} from '@/pages/product/components/product-delivery-section/sections/DeliveryMembershipInfo';
import {DeliveryTimerInfo} from '@/pages/product/components/product-delivery-section/sections/DeliveryTimerInfo';

type ProductDeliveryData = {
  isFreeDelivery: boolean;
  arrivalDate: string;
  deadlineAt: string;
};

type ProductDeliverySectionProps = {
  delivery: ProductDeliveryData;
  onDetailClick?: () => void;
};

const DELIVERY_MEMBERSHIP_TEXT = 'N배송 주문당 1회 무료교환반품';
const EXCLUDED_DELIVERY_TEXT = '일반배송 전환(선물하기, 합배송 등) 제외';

export const ProductDeliverySection = ({
  delivery,
  onDetailClick,
}: ProductDeliverySectionProps) => {
  const {isFreeDelivery, arrivalDate, deadlineAt} = delivery;

  return (
    <section className='flex w-full gap-[3.6rem] bg-white p-[1.6rem]'>
      <h2 className='text-body-14m h-[1.7rem] w-[2.5rem] shrink-0 text-gray-800'>
        배송
      </h2>

      <div className='flex flex-1 flex-col gap-[0.8rem]'>
        <DeliveryBadge
          arrivalDate={arrivalDate}
          className='h-[3rem] w-[26.1rem]'
        />

        <DeliveryTimerInfo
          key={deadlineAt}
          deadlineAt={deadlineAt}
          arrivalDate={arrivalDate}
        />

        <p className='text-body-14m h-[1.7rem] w-[26.1rem] text-gray-900'>
          {isFreeDelivery ? '무료배송' : '배송비 별도'}
        </p>

        <DeliveryMembershipInfo membershipText={DELIVERY_MEMBERSHIP_TEXT} />

        <p className='text-body-14m h-[1.7rem] w-[26.1rem] text-gray-800'>
          {EXCLUDED_DELIVERY_TEXT}
        </p>

        <DeliveryDetailButton onClick={onDetailClick} />
      </div>
    </section>
  );
};
