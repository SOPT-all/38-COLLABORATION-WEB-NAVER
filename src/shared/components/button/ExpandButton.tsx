import type {ComponentPropsWithoutRef} from 'react';
import {IcSvgChevronDown} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

type ExpandButtonProps = ComponentPropsWithoutRef<'button'> & {
  isExpanded: boolean;
};

export const ExpandButton = ({
  isExpanded,
  className,
  children,
  ...props
}: ExpandButtonProps) => {
  return (
    <button
      type='button'
      aria-expanded={isExpanded}
      className={cn(
        'text-caption-12sb flex w-80 items-center justify-center gap-[0.4rem] rounded-lg border border-gray-500 py-3 text-gray-900',
        className
      )}
      {...props}>
      {children}
      <IcSvgChevronDown
        width={24}
        height={24}
        color='var(--color-gray-900)'
        aria-hidden='true'
        className={cn(
          'transition-transform duration-200',
          isExpanded && 'rotate-180'
        )}
      />
    </button>
  );
};
