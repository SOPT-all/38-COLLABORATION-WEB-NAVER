const RECOMMEND_PRODUCT_SKELETON_COUNT = 5;

export const RecommendListSkeleton = () => {
  return (
    <div
      role='status'
      aria-label='추천 상품을 불러오는 중입니다.'
      className='w-full animate-pulse'>
      <div
        className='mb-[14px] h-[19px] w-[168px] rounded-[4px] bg-gray-300'
        aria-hidden='true'
      />

      <div className='-mx-[16px] overflow-hidden px-[16px]' aria-hidden='true'>
        <ul className='flex w-max gap-[8px]'>
          {Array.from(
            {length: RECOMMEND_PRODUCT_SKELETON_COUNT},
            (_, index) => (
              <li key={index}>
                <div className='flex w-[119px] flex-col gap-[8px]'>
                  <div className='h-[119px] w-full rounded-[3px] bg-gray-300' />

                  <div className='flex w-full flex-col items-start gap-[4px]'>
                    <div className='flex w-full flex-col items-start gap-[2px]'>
                      <div className='flex w-full flex-col items-start gap-[6px]'>
                        <div className='flex w-full flex-col gap-[4px]'>
                          <div className='h-[14px] w-full rounded-[4px] bg-gray-300' />
                          <div className='h-[14px] w-[76px] rounded-[4px] bg-gray-300' />
                        </div>

                        <div className='h-[12px] w-[48px] rounded-[4px] bg-gray-300' />
                      </div>

                      <div className='flex items-center gap-[2px]'>
                        <div className='h-[16px] w-[24px] rounded-[4px] bg-gray-300' />
                        <div className='h-[17px] w-[64px] rounded-[4px] bg-gray-300' />
                      </div>
                    </div>

                    <div className='h-[16px] w-[76px] rounded-[3px] bg-gray-300' />
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
