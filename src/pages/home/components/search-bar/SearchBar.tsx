import type {ComponentPropsWithoutRef} from 'react';

import {IcSvgSearch} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

interface SearchBarProps extends Omit<
  ComponentPropsWithoutRef<'form'>,
  'onChange' | 'onSubmit'
> {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  inputName?: string;
  onValueChange?: (value: string) => void;
  onSearch?: (keyword: string) => void;
}

export const SearchBar = ({
  value,
  defaultValue,
  placeholder = 'N배송 상품을 검색해보세요!',
  disabled = false,
  inputName = 'keyword',
  className,
  onValueChange,
  onSearch,
  ...props
}: SearchBarProps) => {
  return (
    <form
      role='search'
      className={cn(
        'flex h-[36px] w-full items-center justify-between gap-[10px] rounded-[8px] border border-blue-900 px-[10px] py-[6px]',
        className
      )}
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const keyword = formData.get(inputName);

        onSearch?.(typeof keyword === 'string' ? keyword : '');
      }}
      {...props}>
      <input
        type='search'
        enterKeyHint='search'
        name={inputName}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(event) => onValueChange?.(event.currentTarget.value)}
        className='text-caption-12m min-w-0 flex-1 bg-transparent text-black outline-none placeholder:text-gray-700 disabled:cursor-not-allowed disabled:text-gray-700 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none'
      />

      <button
        type='submit'
        aria-label='검색'
        disabled={disabled}
        className='flex h-[24px] w-[24px] shrink-0 cursor-pointer items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 disabled:cursor-not-allowed'>
        <IcSvgSearch aria-hidden='true' className='h-[24px] w-[24px]' />
      </button>
    </form>
  );
};
