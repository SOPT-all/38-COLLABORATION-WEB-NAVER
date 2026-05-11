import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/shared/utils/cn';

type OrderCardVariant = 'store' | 'priceSummary';

type OrderCardProps = ComponentPropsWithoutRef<'section'> & {
  variant?: OrderCardVariant;
};

const orderCardVariants: Record<OrderCardVariant, string> = {
  store: 'p-[1.1rem]',
  priceSummary: 'pt-[1.8rem] pr-[1.3rem] pb-[1.4rem] pl-[1.2rem]',
};

export function CartCardLayout({
  className,
  variant = 'store',
  ...props
}: OrderCardProps) {
  return (
    <section
      className={cn(
        'w-full max-w-[34.3rem] rounded-[1.2rem] bg-white',
        orderCardVariants[variant],
        className
      )}
      {...props}
    />
  );
}
