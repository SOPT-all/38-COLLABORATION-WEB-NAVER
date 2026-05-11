import homeBannerImage from '@/shared/assets/images/img-home-banner.png';
import {cn} from '@/shared/utils/cn';

type HomeBannerProps = {
  className?: string;
};

export const HomeBanner = ({className}: HomeBannerProps) => {
  return (
    <section
      aria-label='내일배송 안내 배너'
      className={cn(
        'relative aspect-[375/100] w-full overflow-hidden bg-black',
        className
      )}>
      <img
        src={homeBannerImage}
        alt='빠른 배송이 필요할 땐 오늘 구매하면 내일배송'
        className='h-full w-full object-cover'
      />
    </section>
  );
};
