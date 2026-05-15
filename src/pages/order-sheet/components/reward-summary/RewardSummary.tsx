import {IcSvgQuestion} from '@/shared/icons';
import {formatPrice} from '@/shared/utils/format-product';
import {cn} from '@/shared/utils/cn';

type RewardSummaryProps = {
  totalAmount: number;
  items: {
    label: string;
    amount: number;
    badge?: string;
  }[];
  title?: string;
  amountPrefix?: string;
  amountClassName?: string;
  className?: string;
};

export const RewardSummary = ({
  totalAmount,
  items,
  title = '구매적립',
  amountPrefix = '총 ',
  amountClassName = 'text-body-16b text-navy',
  className,
}: RewardSummaryProps) => {
  return (
    <section className={cn('flex w-full flex-col gap-[6px]', className)}>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-[4px]'>
          <h3 className='text-body-16b text-navy'>{title}</h3>
          <IcSvgQuestion
            aria-hidden
            width={24}
            height={24}
            className='text-gray-700'
          />
        </div>

        <span className={amountClassName}>
          {amountPrefix}
          {formatPrice(totalAmount)}
        </span>
      </div>

      <div className='flex w-full items-center gap-[8px]'>
        <div className='h-[49px] w-[4px] shrink-0 bg-gray-500' />

        <div className='flex w-full flex-col gap-[4px]'>
          {items.map((item) => (
            <div
              key={item.label}
              className='flex w-full items-start justify-between'>
              <span className='flex items-center gap-[4px]'>
                <span className='text-body-14m text-gray-800'>
                  {item.label}
                </span>

                {item.badge && (
                  <span className='text-caption-12m flex h-[22px] w-[60px] items-center justify-center rounded-[25px] border border-gray-500 text-gray-800'>
                    {item.badge}
                  </span>
                )}
              </span>

              <span className='text-body-14m text-gray-800'>
                {formatPrice(item.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
