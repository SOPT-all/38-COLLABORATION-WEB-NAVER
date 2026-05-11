import type {ComponentPropsWithoutRef} from 'react';
import {cn} from '@/shared/utils/cn';

type CTAButtonProps = ComponentPropsWithoutRef<'button'>;

export const CTAButton = ({className, children, ...props}: CTAButtonProps) => {
  return (
    <button
      type='button'
      className={cn(
        'text-caption-12sb w-80 rounded-lg bg-green-600 py-3 text-white',
        className
      )}
      {...props}>
      {children}
    </button>
  );
};
