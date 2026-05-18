const SKELETON_PRODUCT_COUNT = 6;

export const SpecialDealSectionSkeleton = () => {
  return (
    <div
      role='status'
      aria-label='보장 특가를 불러오는 중입니다.'
      className='animate-pulse'>
      <div className='flex flex-col items-center gap-6 px-4 py-[1.8rem]'>
        <div className='flex flex-col items-center gap-0.75'>
          <div
            className='h-[35px] w-[35px] rounded-full bg-gray-300'
            aria-hidden='true'
          />
          <div className='mt-[3px] flex flex-col items-center gap-1.5'>
            <div
              className='h-[24px] w-[130px] rounded-[4px] bg-gray-300'
              aria-hidden='true'
            />
            <div
              className='h-[14px] w-[120px] rounded-[4px] bg-gray-300'
              aria-hidden='true'
            />
          </div>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <div className='flex items-center gap-2.5' aria-hidden='true'>
            <div className='h-[4.8rem] w-[4.6rem] rounded-md bg-gray-300' />
            <div className='h-[18px] w-[8px] rounded bg-gray-300' />
            <div className='h-[4.8rem] w-[4.6rem] rounded-md bg-gray-300' />
            <div className='h-[18px] w-[8px] rounded bg-gray-300' />
            <div className='h-[4.8rem] w-[4.6rem] rounded-md bg-gray-300' />
          </div>
          <div className='flex items-center gap-2.5' aria-hidden='true'>
            <div className='h-[12px] w-[4.6rem] rounded-[4px] bg-gray-300' />
            <div className='w-[8px]' />
            <div className='h-[12px] w-[4.6rem] rounded-[4px] bg-gray-300' />
            <div className='w-[8px]' />
            <div className='h-[12px] w-[4.6rem] rounded-[4px] bg-gray-300' />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center px-[16px] pt-[10px] pb-[24px]'>
        <ul
          className='grid grid-cols-3 gap-x-2 gap-y-[1.6rem]'
          aria-hidden='true'>
          {Array.from({length: SKELETON_PRODUCT_COUNT}, (_, i) => (
            <li key={i}>
              <div className='flex w-[119px] flex-col gap-[8px]'>
                <div className='h-[119px] w-[119px] rounded-[3px] bg-gray-300' />
                <div className='flex flex-col gap-[4px]'>
                  <div className='h-[12px] w-full rounded-[4px] bg-gray-300' />
                  <div className='h-[10px] w-[70%] rounded-[4px] bg-gray-300' />
                  <div className='h-[14px] w-[80%] rounded-[4px] bg-gray-300' />
                  <div className='h-[16px] w-[76px] rounded-[4px] bg-gray-300' />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
