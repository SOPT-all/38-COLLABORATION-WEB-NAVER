import type {ComponentPropsWithoutRef} from 'react';
import {cn} from '@/shared/utils/cn';

type OptionButtonProps = ComponentPropsWithoutRef<'button'>;

export const OptionButton = ({
  className,
  children,
  ...props
}: OptionButtonProps) => {
  return (
    <button
      type='button'
      className={cn(
        'text-body-m w-73.25 rounded-sm border border-gray-500 py-2.25 text-gray-900',
        className
      )}
      {...props}>
      {children}
    </button>
  );
};
