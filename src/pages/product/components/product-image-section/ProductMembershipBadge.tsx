type ProductMembershipBadgeProps = {
  text: string;
};

export function ProductMembershipBadge({text}: ProductMembershipBadgeProps) {
  return (
    <div className='text-caption-12sb flex h-[2.2rem] w-[15.2rem] items-center rounded-[2.3rem] bg-gray-800 p-[0.2rem] text-white'>
      <div className='flex h-[1.8rem] w-[14.6rem] items-center gap-[0.2rem]'>
        <span className='size-[1.8rem] shrink-0 rounded-full bg-red-700' />
        <span className='relative top-[0.1rem] block h-[1.4rem] w-[12.6rem] leading-[100%] tracking-[0] whitespace-nowrap text-white'>
          {text}
        </span>
      </div>
    </div>
  );
}
