import type {ComponentPropsWithoutRef} from 'react';
import {cn} from '@/shared/utils/cn';

type PrimaryButtonProps = ComponentPropsWithoutRef<'button'>;

export const PrimaryButton = ({
  className,
  children,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      type='button'
      className={cn(
        'text-body-16b w-85.75 rounded-[7px] bg-green-400 py-2.5 text-black',
        className
      )}
      {...props}>
      {children}
    </button>
  );
};
