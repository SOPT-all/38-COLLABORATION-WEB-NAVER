import {getFormattedDate} from '@/pages/home/utils/formatDate';
import {useEffect, useState} from 'react';
import homeClock from '@/shared/assets/images/home-clock.png';

const getRemainingTime = () => {
  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);
  const diffMs = endOfDay.getTime() - now.getTime() + 1;

  return {
    hours: Math.floor(diffMs / (1000 * 60 * 60)),
    minutes: Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diffMs % (1000 * 60)) / 1000),
  };
};

const pad = (n: number) => String(n).padStart(2, '0');

const NumberBox = ({value}: {value: string}) => (
  <div className='flex h-[4.8rem] w-[4.6rem] items-center justify-center rounded-md bg-red-700'>
    <span className='text-display-24sb text-red-900'>{value}</span>
  </div>
);

export const SpecialDealTimer = () => {
  const [now, setNow] = useState(() => new Date());
  const [remaining, setRemaining] = useState(getRemainingTime);

  useEffect(() => {
    const tick = () => {
      setNow(new Date());
      setRemaining(getRemainingTime());
    };

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className='flex flex-col items-center gap-6 px-4 py-3'>
      <div className='flex flex-col items-center gap-0.75'>
        <img src={homeClock} alt='' width={35} height={35} />

        <div className='flex flex-col items-center gap-1.5'>
          <div className='text-display-24sb flex gap-2.5'>
            <p className='text-semi-black'>{getFormattedDate(now)}</p>
            <h2 className='text-red-900'>보장 특가</h2>
          </div>
          <p className='text-body-14m text-semi-black'>
            기간 한정 서프라이즈 딜!
          </p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-1'>
        <div className='flex items-center gap-2.5'>
          <NumberBox value={pad(remaining.hours)} />
          <span className='text-title-18sb text-red-900'>:</span>
          <NumberBox value={pad(remaining.minutes)} />
          <span className='text-title-18sb text-red-900'>:</span>
          <NumberBox value={pad(remaining.seconds)} />
        </div>
        <div className='flex items-center gap-2.5'>
          <span className='text-caption-12m text-semi-black w-[4.6rem] text-center'>
            시간
          </span>
          <span className='text-title-18sb invisible'>:</span>
          <span className='text-caption-12m text-semi-black w-[4.6rem] text-center'>
            분
          </span>
          <span className='text-title-18sb invisible'>:</span>
          <span className='text-caption-12m text-semi-black w-[4.6rem] text-center'>
            초
          </span>
        </div>
      </div>
    </section>
  );
};
