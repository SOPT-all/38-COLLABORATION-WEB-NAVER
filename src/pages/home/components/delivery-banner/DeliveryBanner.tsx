import {IcSvgChevronRight} from '@/shared/icons';

export const DeliveryBanner = () => {
  return (
    <section
      aria-label='당일배송 안내'
      className='flex items-center justify-between border-y border-gray-500 bg-blue-800 px-1.75 py-3'>
      <div className='flex gap-1.25'>
        <span className='text-caption-10r rounded-[3px] bg-blue-900 px-2 py-0.75 text-white'>
          당일배송
        </span>
        <p className='text-caption-13sb'>
          오전 11시까지 주문시{' '}
          <span className='text-blue-900'>당일배송 해드려요!</span>
        </p>
      </div>
      {/** 클릭 O 인터렉션 X */}
      <button type='button' aria-label='당일배송 상세 보기'>
        <IcSvgChevronRight
          aria-hidden='true'
          width={24}
          height={24}
          color='var(--color-gray-900)'
        />
      </button>
    </section>
  );
};
