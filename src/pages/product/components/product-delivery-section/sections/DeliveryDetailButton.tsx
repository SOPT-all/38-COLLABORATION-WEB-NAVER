import {IcSvgChevronRight} from '@/shared/icons';

export const DeliveryDetailButton = () => {
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
