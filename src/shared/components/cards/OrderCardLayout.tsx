import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/shared/utils/cn';

type OrderCardLayoutVariant =
  | 'cartStore'
  | 'cartPriceSummary'
  | 'paymentPoint'
  | 'paymentMethod'
  | 'paymentAgreement';

type OrderCardLayoutProps = ComponentPropsWithoutRef<'section'> & {
  variant: OrderCardLayoutVariant;
};

const orderCardLayoutVariants: Record<OrderCardLayoutVariant, string> = {
  cartStore: 'p-[1.1rem]',
  cartPriceSummary: 'pt-[1.8rem] pr-[1.3rem] pb-[1.4rem] pl-[1.2rem]',
  paymentPoint: 'p-[1.6rem]',
  paymentMethod: 'p-[1.6rem]',
  paymentAgreement: 'p-[1.6rem]',
};

export function OrderCardLayout({
  className,
  variant,
  ...props
}: OrderCardLayoutProps) {
  return (
    <section
      className={cn(
        'w-full max-w-[34.3rem] rounded-[1.2rem] bg-white',
        orderCardLayoutVariants[variant],
        className
      )}
      {...props}
    />
  );
}
