import type {ComponentPropsWithoutRef, ReactNode} from 'react';

import {IcSvgCheckboxOn} from '@/shared/icons';
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
  header,
  headerAction,
  footer,
  showHeaderCheck = true,
  showLeadingCheck = true,
  children,
  ...props
}: OrderStoreCardProps) {
  const hasHeader = Boolean(header || headerAction);

  return (
    <article
      className={cn(
        'w-full max-w-[34.3rem] rounded-[1.2rem] bg-white p-[1.1rem]',
        className
      )}
      {...props}>
      <div className='flex w-full flex-col gap-[1.2rem]'>
        {hasHeader && (
          <>
            <div className='flex w-full items-center justify-between'>
              <div className='flex min-w-0 items-center gap-[0.2rem]'>
                {showHeaderCheck && (
                  <IcSvgCheckboxOn
                    aria-hidden='true'
                    className='size-[2.4rem] shrink-0 text-white'
                  />
                )}
                <div className='min-w-0'>{header}</div>
              </div>
              {headerAction && <div className='shrink-0'>{headerAction}</div>}
            </div>
            <OrderStoreCardDivider />
          </>
        )}

        <div className='flex w-full flex-col gap-[1.8rem]'>
          <div className='flex w-full items-start gap-[0.4rem]'>
            {showLeadingCheck && (
              <IcSvgCheckboxOn
                aria-hidden='true'
                className='size-[2.4rem] shrink-0 text-white'
              />
            )}
            <div className='flex w-full flex-col gap-4'>{children}</div>
          </div>

          {footer && (
            <div className='flex w-full flex-col gap-4'>
              <OrderStoreCardDivider />
              {footer}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function OrderStoreCardDivider({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('h-px w-full bg-black', className)} {...props} />;
}
