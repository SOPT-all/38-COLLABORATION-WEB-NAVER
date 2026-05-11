import type {ComponentPropsWithoutRef} from 'react';
import {cn} from '@/shared/utils/cn';

type ActionButtonVariant = 'sm' | 'm';

type ActionButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant: ActionButtonVariant;
};

const variantStyles: Record<ActionButtonVariant, string> = {
  sm: 'text-caption-12m w-[43px] py-2',
  m: 'text-caption-12sb w-[57px] py-[6px]',
};

export const ActionButton = ({
  variant,
  className,
  children,
  ...props
}: ActionButtonProps) => {
  return (
    <button
      type='button'
      className={cn(
        variantStyles[variant],
        'rounded-sm border border-gray-500',
        className
      )}
      {...props}>
      {children}
    </button>
  );
};
