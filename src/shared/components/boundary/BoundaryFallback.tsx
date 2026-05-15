export type BoundaryFallbackProps = {
  error: unknown;
  reset: () => void;
};

export const DefaultPendingFallback = () => {
  return (
    <p
      role='status'
      className='text-caption-12m py-[48px] text-center text-gray-800'>
      불러오는 중입니다.
    </p>
  );
};

export const DefaultErrorFallback = ({reset}: BoundaryFallbackProps) => {
  return (
    <div
      role='alert'
      className='flex flex-col items-center gap-[12px] py-[48px] text-center'>
      <p className='text-caption-12m text-red-900'>
        데이터를 불러오지 못했습니다.
      </p>
      <button
        type='button'
        className='text-caption-12sb rounded-[4px] border border-gray-500 px-[10px] py-[6px] text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900'
        onClick={reset}>
        다시 시도
      </button>
    </div>
  );
};
