import type {ButtonHTMLAttributes, HTMLAttributes, ReactNode} from 'react';

import arrowLeftIcon from '@/shared/assets/icons/ic-arrow_left.svg';
import cartIcon from '@/shared/assets/icons/ic-cart.svg';
import subtractNIcon from '@/shared/assets/icons/ic-subtract-n.svg';
import {cn} from '@/shared/utils/cn';

type HeaderRootProps = HTMLAttributes<HTMLElement>;

type HeaderSlotProps = HTMLAttributes<HTMLDivElement>;

type HeaderTitleVariantTypes = 'home' | 'cart' | 'payment';

interface HeaderTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: HeaderTitleVariantTypes;
}

interface HeaderStoreTitleProps extends HTMLAttributes<HTMLDivElement> {
  prefix: string;
  children: ReactNode;
}

interface HeaderIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
}

type HeaderCartButtonProps = Omit<
  HeaderIconButtonProps,
  'label' | 'children'
> & {
  count?: number;
};

type HeaderTextButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const HEADER_TITLE_CLASS_NAMES: Record<HeaderTitleVariantTypes, string> = {
  home: 'text-display-20sb text-black',
  cart: 'text-title-18b text-semi-black',
  payment: 'text-body-16b text-black',
};

export const HeaderRoot = ({
  className,
  children,
  ...props
}: HeaderRootProps) => {
  return (
    <header
      className={cn(
        'relative flex h-[56px] w-full items-center justify-between bg-white px-[16px]',
        className
      )}
      {...props}>
      {children}
    </header>
  );
};

export const HeaderLeft = ({
  className,
  children,
  ...props
}: HeaderSlotProps) => {
  return (
    <div
      className={cn('flex min-w-0 items-center gap-[8px]', className)}
      {...props}>
      {children}
    </div>
  );
};

export const HeaderCenter = ({
  className,
  children,
  ...props
}: HeaderSlotProps) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute left-1/2 flex max-w-[52%] -translate-x-1/2 items-center justify-center',
        className
      )}
      {...props}>
      {children}
    </div>
  );
};

export const HeaderRight = ({
  className,
  children,
  ...props
}: HeaderSlotProps) => {
  return (
    <div
      className={cn('ml-auto flex shrink-0 items-center gap-[14px]', className)}
      {...props}>
      {children}
    </div>
  );
};

export const HeaderTitle = ({
  variant = 'cart',
  className,
  children,
  ...props
}: HeaderTitleProps) => {
  return (
    <h1
      className={cn('truncate', HEADER_TITLE_CLASS_NAMES[variant], className)}
      {...props}>
      {children}
    </h1>
  );
};

export const HeaderStoreTitle = ({
  prefix,
  className,
  children,
  ...props
}: HeaderStoreTitleProps) => {
  return (
    <div
      className={cn('flex min-w-0 items-center gap-[8px]', className)}
      {...props}>
      <span className='text-body-16m shrink-0 text-gray-900'>{prefix}</span>
      <span aria-hidden='true' className='h-[12px] w-px shrink-0 bg-gray-500' />
      <span className='text-title-18sb truncate text-black'>{children}</span>
    </div>
  );
};

export const HeaderIconButton = ({
  label,
  type = 'button',
  className,
  children,
  ...props
}: HeaderIconButtonProps) => {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        'relative flex h-[24px] w-[24px] shrink-0 items-center justify-center text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900',
        className
      )}
      {...props}>
      {children}
    </button>
  );
};

export const HeaderBackButton = (
  props: Omit<HeaderIconButtonProps, 'label' | 'children'>
) => {
  return (
    <HeaderIconButton label='뒤로가기' {...props}>
      <img src={arrowLeftIcon} alt='' className='h-[24px] w-[24px]' />
    </HeaderIconButton>
  );
};

export const HeaderCartButton = ({
  count,
  className,
  ...props
}: HeaderCartButtonProps) => {
  const hasBadge = typeof count === 'number' && count > 0;
  const badgeText = hasBadge ? Math.min(count, 99).toString() : null;

  return (
    <HeaderIconButton label='장바구니' className={className} {...props}>
      <img src={cartIcon} alt='' className='h-[24px] w-[24px]' />
      {badgeText && (
        <span className='text-caption-10r absolute top-[-4px] right-[-4px] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-red-900 text-white'>
          {badgeText}
        </span>
      )}
    </HeaderIconButton>
  );
};

export const HeaderTextButton = ({
  type = 'button',
  className,
  children,
  ...props
}: HeaderTextButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        'text-caption-12sb text-semi-black flex h-[27px] shrink-0 items-center justify-center rounded-[4px] border border-gray-500 px-[8px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900',
        className
      )}
      {...props}>
      {children}
    </button>
  );
};

export const HeaderNPayLogo = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'text-title-18sb flex shrink-0 items-center gap-[3px] text-black',
        className
      )}
      aria-label='N pay'
      {...props}>
      <img src={subtractNIcon} alt='' className='h-[22px] w-[22px]' />
      <span>pay</span>
    </div>
  );
};
