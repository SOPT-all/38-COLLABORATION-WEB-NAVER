const SkeletonBlock = ({className}: {className: string}) => {
  return <div className={`rounded-[8px] bg-gray-300 ${className}`} />;
};

export const OrderSheetSkeleton = () => {
  return (
    <div
      role='status'
      aria-label='주문 포인트 정보를 불러오는 중입니다.'
      className='flex animate-pulse flex-col gap-[40px]'
      aria-live='polite'>
      <section className='flex flex-col gap-[12px]' aria-hidden='true'>
        <div className='flex items-center gap-[4px]'>
          <SkeletonBlock className='h-[24px] w-[24px] rounded-full' />
          <SkeletonBlock className='h-[22px] w-[120px]' />
        </div>

        <div className='flex flex-col gap-[16px] rounded-[12px] border border-gray-500 bg-white px-[14px] py-[19px]'>
          <div className='flex items-center justify-between'>
            <SkeletonBlock className='h-[22px] w-[92px]' />
            <SkeletonBlock className='h-[24px] w-[72px]' />
          </div>
          <div className='flex gap-[8px]'>
            <SkeletonBlock className='h-[49px] w-[4px] rounded-none' />
            <div className='flex flex-1 flex-col gap-[6px]'>
              <SkeletonBlock className='h-[18px] w-full' />
              <SkeletonBlock className='h-[18px] w-[76%]' />
            </div>
          </div>
          <SkeletonBlock className='h-[42px] w-full' />
          <SkeletonBlock className='h-[24px] w-[112px]' />
          <SkeletonBlock className='h-[44px] w-full' />
        </div>

        <div className='flex gap-[6px] rounded-[12px] border border-gray-500 bg-white px-[14px] pt-[14px] pb-[24px]'>
          <SkeletonBlock className='h-[24px] w-[24px] shrink-0 rounded-full' />
          <div className='flex flex-1 flex-col gap-[18px]'>
            <SkeletonBlock className='h-[22px] w-[112px]' />
            <SkeletonBlock className='h-[20px] w-full' />
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-[12px]' aria-hidden='true'>
        <div className='flex items-center justify-between'>
          <SkeletonBlock className='h-[22px] w-[150px]' />
          <SkeletonBlock className='h-[24px] w-[96px]' />
        </div>
        <div className='flex flex-col gap-[20px] rounded-[10px] border-[1.5px] border-green-600 bg-green-100 p-[10px]'>
          <SkeletonBlock className='h-[72px] w-full' />
          <SkeletonBlock className='h-[48px] w-full' />
          <SkeletonBlock className='h-px w-full rounded-none' />
          <SkeletonBlock className='h-[24px] w-full' />
        </div>
      </section>

      <section aria-hidden='true'>
        <div className='flex flex-col gap-[12px] rounded-[12px] bg-white pt-[19px] pr-[124px] pb-[14px] pl-[14px]'>
          <SkeletonBlock className='h-[20px] w-[210px]' />
          <SkeletonBlock className='h-[24px] w-[150px]' />
        </div>
      </section>

      <section
        className='flex w-full flex-col items-center justify-center gap-[16px]'
        aria-hidden='true'>
        <SkeletonBlock className='h-[16px] w-[260px]' />
        <SkeletonBlock className='h-[48px] w-full' />
      </section>
    </div>
  );
};
