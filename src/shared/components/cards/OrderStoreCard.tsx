import type {ComponentPropsWithoutRef, ReactNode} from 'react';

import {cn} from '@/shared/utils/cn';

type OrderStoreCardProps = ComponentPropsWithoutRef<'article'> & {
  header?: ReactNode;
  headerAction?: ReactNode;
  footer?: ReactNode;
  showHeaderCheck?: boolean;
  showLeadingCheck?: boolean;
};

export function OrderStoreCard({
  className,
  children,
  ...props
}: OrderStoreCardProps) {

  return (
    <article
      className={cn(
        'w-full max-w-[34.3rem] rounded-[1.2rem] bg-white p-[1.1rem] border-2',
        className
      )}
      {...props}>
      {children}
    </article>
  );
}