type ProductMembershipBadgeProps = {
  text: string;
};

export function ProductMembershipBadge({text}: ProductMembershipBadgeProps) {
  return (
    <div className='flex h-[2.2rem] w-[15.2rem] items-center rounded-[2.3rem] bg-gray-800 p-[0.2rem] text-caption-12sb text-white'>
      <div className='flex h-[1.8rem] w-[14.6rem] items-center gap-[0.2rem]'>
        <span className='size-[1.8rem] shrink-0 rounded-full bg-red-700' />
        <span className='relative top-[0.1rem] block h-[1.4rem] w-[12.6rem] whitespace-nowrap leading-[100%] tracking-[0] text-white'>
          {text}
        </span>
      </div>
    </div>
  );
}
