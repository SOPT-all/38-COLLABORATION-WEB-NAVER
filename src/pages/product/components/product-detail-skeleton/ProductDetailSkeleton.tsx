export const ProductDetailSkeleton = () => {
  return (
    <div className='w-full animate-pulse'>
      <div className='aspect-square w-full bg-gray-200' />

      <div className='w-full bg-white px-[1.6rem] py-[1.6rem]'>
        <div className='mb-[0.8rem] h-[2.2rem] w-full rounded bg-gray-200' />
        <div className='mb-[1.6rem] h-[2.2rem] w-[70%] rounded bg-gray-200' />
        <div className='mb-[0.8rem] h-[1.6rem] w-[40%] rounded bg-gray-200' />
        <div className='mb-[0.4rem] h-[2.6rem] w-[5rem] rounded bg-gray-200' />
        <div className='h-[2.6rem] w-[5rem] rounded bg-gray-200' />
      </div>

      <div className='mx-auto w-[34.3rem] border-t border-gray-200' />

      <div className='w-full bg-white p-[1.6rem]'>
        <div className='mb-[0.8rem] h-[3rem] w-[60%] rounded bg-gray-200' />
        <div className='mb-[0.8rem] h-[1.6rem] w-[80%] rounded bg-gray-200' />
        <div className='h-[1.6rem] w-[50%] rounded bg-gray-200' />
      </div>

      <div className='mx-auto w-[34.3rem] border-t border-gray-200' />

      <div className='w-full bg-white px-[1.6rem] py-[1.6rem]'>
        <div className='mb-[0.8rem] h-[2.4rem] w-[70%] rounded bg-gray-200' />
        <div className='h-[2.4rem] w-[80%] rounded bg-gray-200' />
      </div>
    </div>
  );
};
