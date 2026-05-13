import membershipTagImage from '@/shared/assets/images/img-tag-membership-lg.png';
import {DeliveryBadge} from '@/shared/components/badges/DeliveryBadge';
import {IcSvgChevronRight, IcSvgNotice} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

type ProductDeliveryData = {
  isFreeDelivery: boolean;
  arrivalDate: string;
  countdownText: string;
  orderDeadlineLabel: string;
  arrivalGuaranteeLabel: string;
  membershipText: string;
  excludedDeliveryText: string;
};

type ProductDeliverySectionProps = {
  delivery: ProductDeliveryData;
};

const getCountdownSeconds = (countdownText: string) => {
  const [hours = 0, minutes = 0, seconds = 0] = countdownText
    .split(':')
    .map(Number);

  return hours * 3600 + minutes * 60 + seconds;
};

export const ProductDeliverySection = ({
  delivery,
}: ProductDeliverySectionProps) => {
  const {
    isFreeDelivery,
    arrivalDate,
    countdownText,
    orderDeadlineLabel,
    arrivalGuaranteeLabel,
    membershipText,
    excludedDeliveryText,
  } = delivery;
  const isDeadlineSoon = getCountdownSeconds(countdownText) <= 30 * 60;

  return (
    <section className='flex w-full gap-[2.4rem] border-b border-gray-500 py-[1.2rem]'>
      <h2 className='text-body-14m shrink-0 text-gray-800'>배송</h2>

      <div className='flex flex-1 flex-col gap-[0.8rem]'>
        <DeliveryBadge arrivalDate={arrivalDate} className='w-full' />

        <p className='text-body-14m text-semi-black'>
          <span className={cn(isDeadlineSoon && 'text-red-900')}>
            {countdownText} {orderDeadlineLabel}
          </span>
          <span className='text-green-600'> {arrivalGuaranteeLabel}</span> 보장
        </p>

        <p className='text-body-14m text-semi-black'>
          {isFreeDelivery ? '무료배송' : '배송비 별도'}
        </p>

        <div className='flex items-center gap-[0.4rem]'>
          <img
            src={membershipTagImage}
            alt='N+ 멤버십'
            className='h-[1.5rem] w-[5.7rem] shrink-0'
          />
          <span className='text-body-14m text-semi-black'>
            {membershipText}
          </span>
          <IcSvgNotice
            aria-hidden='true'
            className='size-[1.6rem] shrink-0 text-gray-700'
          />
        </div>

        <p className='text-body-14m text-gray-800'>{excludedDeliveryText}</p>

        <button
          type='button'
          className='text-body-14m flex w-fit items-center gap-[0.4rem] text-gray-800 underline underline-offset-[0.3rem]'
          onClick={() => undefined}>
          자세히 보기
          <IcSvgChevronRight
            aria-hidden='true'
            className='size-[2.4rem] text-gray-800'
          />
        </button>
      </div>
    </section>
  );
};
