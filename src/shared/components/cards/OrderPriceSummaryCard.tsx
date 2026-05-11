import type {ComponentPropsWithoutRef, ReactNode} from 'react';

import {cn} from '@/shared/utils/cn';

type OrderPriceSummaryCardProps = Omit<
  ComponentPropsWithoutRef<'section'>,
  'title'
> & {
  title?: ReactNode;
  totalLabel?: ReactNode;
  totalValue?: ReactNode;
};

export function OrderPriceSummaryCard({
  className,
  title,
  totalLabel,
  totalValue,
  children,
  ...props
}: OrderPriceSummaryCardProps) {
  return (
    <section
      className={cn(
        'w-full max-w-[34.3rem] rounded-[1.2rem] bg-white pt-[1.8rem] pr-[1.3rem] pb-[1.4rem] pl-[1.2rem]',
        className
      )}
      {...props}>
      <div className='flex w-full flex-col items-end gap-[1.2rem]'>
        <div className='flex w-full flex-col items-start gap-[0.8rem]'>
          {title && (
            <div className='text-body-16b w-full text-black'>{title}</div>
          )}
          {children}
        </div>

        {(totalLabel || totalValue) && (
          <>
            <OrderPriceSummaryCardDivider />
            <div className='flex w-full items-end justify-between whitespace-nowrap text-black'>
              {totalLabel && <div className='text-body-14sb'>{totalLabel}</div>}
              {totalValue && <div>{totalValue}</div>}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export function OrderPriceSummaryCardRows({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn(
        'text-body-14m flex w-full flex-col gap-[0.8rem] whitespace-nowrap',
        className
      )}
      {...props}
    />
  );
}

export function OrderPriceSummaryCardRow({
  className,
  label,
  value,
  valueClassName,
  ...props
}: ComponentPropsWithoutRef<'div'> & {
  label: ReactNode;
  value: ReactNode;
  valueClassName?: string;
}) {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-between text-gray-900',
        className
      )}
      {...props}>
      <div>{label}</div>
      <div className={cn('text-right', valueClassName)}>{value}</div>
    </div>
  );
}

export function OrderPriceSummaryCardDivider({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn('h-px w-full bg-gray-500', className)} {...props} />
  );
}
