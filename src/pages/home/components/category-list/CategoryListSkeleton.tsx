const SKELETON_CATEGORY_COUNT = 10;

export const CategoryListSkeleton = () => {
  return (
    <div
      role='status'
      aria-label='카테고리를 불러오는 중입니다.'
      className='w-full animate-pulse'>
      <ul
        className='grid grid-cols-5 justify-items-center gap-y-[24px]'
        aria-hidden='true'>
        {Array.from({length: SKELETON_CATEGORY_COUNT}, (_, index) => (
          <li key={index} className='flex min-w-0 justify-center'>
            <div className='flex w-[58px] flex-col items-center gap-[4px]'>
              <div className='h-[38px] w-[38px] rounded-full bg-gray-300' />
              <div className='h-[14px] w-[44px] rounded-[4px] bg-gray-300' />
            </div>
          </li>
        ))}
      </ul>

      <div
        className='mt-[34px] h-[38px] w-full rounded-[8px] bg-gray-300'
        aria-hidden='true'
      />
    </div>
  );
};
