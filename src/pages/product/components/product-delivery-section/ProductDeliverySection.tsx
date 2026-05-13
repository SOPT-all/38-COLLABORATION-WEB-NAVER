import {useEffect, useState} from 'react';

import membershipTagImage from '@/shared/assets/images/img-tag-membership-lg.png';
import {DeliveryBadge} from '@/shared/components/badges/DeliveryBadge';
import {IcSvgChevronRight, IcSvgNotice} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

type ProductDeliveryData = {
  isFreeDelivery: boolean;
  arrivalDate: string;
  deadlineAt: string;
};

type ProductDeliverySectionProps = {
  delivery: ProductDeliveryData;
};

type DeliveryTimerInfoProps = {
  deadlineAt: string;
  arrivalDate: string;
};

type DeliveryMembershipInfoProps = {
  membershipText: string;
};

const DELIVERY_MEMBERSHIP_TEXT = 'N배송 주문당 1회 무료교환반품';
const EXCLUDED_DELIVERY_TEXT = '일반배송 전환(선물하기, 합배송 등) 제외';

const getArrivalDayText = (arrivalDate: string) => {
  const dayMatch = arrivalDate.match(/\(([^)]+)\)/);

  return dayMatch ? `내일(${dayMatch[1]})` : '내일';
};

const getRemainingSeconds = (deadlineAt: string) => {
  const remainingMilliseconds = new Date(deadlineAt).getTime() - Date.now();

  return Math.max(Math.floor(remainingMilliseconds / 1000), 0);
};

const formatCountdownText = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((time) => String(time).padStart(2, '0'))
    .join(':');
};

const DeliveryTimerInfo = ({
  deadlineAt,
  arrivalDate,
}: DeliveryTimerInfoProps) => {
  const [remainingSeconds, setRemainingSeconds] = useState(() =>
    getRemainingSeconds(deadlineAt)
  );
  const isDeadlineSoon = remainingSeconds <= 30 * 60;
  const arrivalDayText = getArrivalDayText(arrivalDate);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setRemainingSeconds((previousSeconds) =>
        Math.max(previousSeconds - 1, 0)
      );
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  return (
    <p className='text-body-14m text-semi-black h-[1.7rem] w-[22.6rem] whitespace-nowrap'>
      <span className={cn(isDeadlineSoon && 'text-red-900')}>
        {formatCountdownText(remainingSeconds)} 내 주문 시
      </span>
      <span className='text-green-600'> {arrivalDayText} 도착</span> 보장
    </p>
  );
};

const DeliveryMembershipInfo = ({
  membershipText,
}: DeliveryMembershipInfoProps) => {
  return (
    <div className='flex h-[2.3rem] w-[26.1rem] items-center gap-[0.4rem]'>
      <img
        src={membershipTagImage}
        alt='N+ 멤버십'
        className='h-[1.5rem] w-[5.7rem] shrink-0'
      />
      <span className='text-body-14m h-[1.7rem] w-[17.2rem] text-gray-900'>
        {membershipText}
      </span>
      <IcSvgNotice
        aria-hidden='true'
        className='size-[2.4rem] shrink-0 text-gray-700'
      />
    </div>
  );
};

const DeliveryDetailButton = () => {
  return (
    <button
      type='button'
      className='text-body-14m flex h-[2.4rem] w-[9.2rem] items-center gap-[0.4rem] text-gray-800 underline underline-offset-[0.3rem]'
      onClick={() => undefined}>
      자세히 보기
      <IcSvgChevronRight
        aria-hidden='true'
        className='size-[2.4rem] text-gray-800'
      />
    </button>
  );
};

export const ProductDeliverySection = ({
  delivery,
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

        <DeliveryDetailButton />
      </div>
    </section>
  );
};
