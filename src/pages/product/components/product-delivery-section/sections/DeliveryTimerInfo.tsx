import {useEffect, useState} from 'react';

import {cn} from '@/shared/utils/cn';

type DeliveryTimerInfoProps = {
  deadlineAt: string;
  arrivalDate: string;
};

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

export const DeliveryTimerInfo = ({
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
      setRemainingSeconds((previousSeconds) => {
        if (previousSeconds <= 1) {
          window.clearInterval(timerId);

          return 0;
        }

        return previousSeconds - 1;
      });
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
