import {getFormattedDate} from '@/pages/home/utils/formatDate';
import {useEffect, useState} from 'react';
import homeClock from '@/shared/assets/images/home-clock.png';

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;

const getRemainingTime = (currentTime: Date) => {
  const endOfDay = new Date(currentTime);
  endOfDay.setHours(23, 59, 59, 999);

  const diffMs = endOfDay.getTime() - currentTime.getTime() + 1;

  return {
    hours: Math.floor(diffMs / MS_PER_HOUR),
    minutes: Math.floor((diffMs % MS_PER_HOUR) / MS_PER_MINUTE),
    seconds: Math.floor((diffMs % MS_PER_MINUTE) / MS_PER_SECOND),
  };
};

const pad = (n: number) => String(n).padStart(2, '0');

const NumberBox = ({value}: {value: string}) => (
  <div className='flex h-[4.8rem] w-[4.6rem] items-center justify-center rounded-md bg-red-700'>
    <span className='text-display-24sb text-red-900'>{value}</span>
  </div>
);

export const SpecialDealTimer = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(new Date());
    }, MS_PER_SECOND);

    return () => clearInterval(id);
  }, []);

  const remaining = getRemainingTime(currentTime);

  return (
    <section
      aria-labelledby='special-deal-heading'
      className='flex flex-col items-center gap-6 px-4 py-[1.8rem]'>
      <div className='flex flex-col items-center gap-0.75'>
        <img src={homeClock} alt='' width={35} height={35} />

        <div className='flex flex-col items-center gap-1.5'>
          <div className='text-display-24sb flex gap-2.5'>
            <h2 id='special-deal-heading' className='order-2 text-red-900'>
              보장 특가
            </h2>
            <p className='text-semi-black order-1'>
              {getFormattedDate(currentTime)}
            </p>
          </div>
          <p className='text-body-14m text-semi-black'>
            기간 한정 서프라이즈 딜!
          </p>
        </div>
      </div>

      <div
        role='timer'
        aria-label={`${pad(remaining.hours)}시간 ${pad(remaining.minutes)}분 ${pad(remaining.seconds)}초 남음`}
        className='flex flex-col items-center gap-1'>
        <div aria-hidden='true' className='flex items-center gap-2.5'>
          <NumberBox value={pad(remaining.hours)} />
          <span className='text-title-18sb text-red-900' aria-hidden='true'>
            :
          </span>
          <NumberBox value={pad(remaining.minutes)} />
          <span className='text-title-18sb text-red-900' aria-hidden='true'>
            :
          </span>
          <NumberBox value={pad(remaining.seconds)} />
        </div>
        <div aria-hidden='true' className='flex items-center gap-2.5'>
          <span className='text-caption-12m text-semi-black w-[4.6rem] text-center'>
            시간
          </span>
          <span className='text-title-18sb invisible' aria-hidden='true'>
            :
          </span>
          <span className='text-caption-12m text-semi-black w-[4.6rem] text-center'>
            분
          </span>
          <span className='text-title-18sb invisible' aria-hidden='true'>
            :
          </span>
          <span className='text-caption-12m text-semi-black w-[4.6rem] text-center'>
            초
          </span>
        </div>
      </div>
    </section>
  );
};
