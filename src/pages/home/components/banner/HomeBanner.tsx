import type {ComponentPropsWithoutRef} from 'react';

import homeBannerImage from '@/shared/assets/images/img-home-banner.png';
import {cn} from '@/shared/utils/cn';

type HomeBannerProps = Omit<ComponentPropsWithoutRef<'a'>, 'children'> & {
  href: string;
};

export const HomeBanner = ({href, className, ...props}: HomeBannerProps) => {
  return (
    <a
      href={href}
      aria-label='내일배송 상품 보러가기'
      className={cn(
        'block aspect-[375/100] w-full overflow-hidden bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900',
        className
      )}
      {...props}>
      <img
        src={homeBannerImage}
        alt='빠른 배송이 필요할 땐 오늘 구매하면 내일배송'
        width={375}
        height={100}
        className='h-full w-full object-cover'
      />
    </a>
  );
};
