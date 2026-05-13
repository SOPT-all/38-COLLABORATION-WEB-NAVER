import {useState} from 'react';

import deliveryTagImage from '@/shared/assets/images/img-tag-delivery.png';
import {cn} from '@/shared/utils/cn';
import {formatDiscountRate, formatPrice} from '@/shared/utils/format-product';

type ProductCardBadgeVariant = 'brand-day' | 'plus-sale';

type ProductCardProps = {
  imageSrc: string;
  imageAlt: string;
  name: string;
  originalPrice: number;
  discountRate: number;
  discountedPrice: number;
  badge?: ProductCardBadgeVariant;
  className?: string;
};

const badgeStyles: Record<ProductCardBadgeVariant, string> = {
  'brand-day': 'text-[11px] font-semibold px-[5px] py-[4px]',
  'plus-sale': 'text-caption-12sb gap-0 px-[6px] py-[2px]',
};

const getImageHeightClass = (badge?: ProductCardBadgeVariant) => {
  return badge ? 'h-[111px]' : 'h-[119px]';
};

const getCardSizeClass = (badge?: ProductCardBadgeVariant) => {
  return badge ? 'w-[111px] gap-[9px]' : 'w-[119px] gap-[8px]';
};

const getContentGapClass = (badge?: ProductCardBadgeVariant) => {
  return badge ? 'gap-[3px]' : 'gap-[4px]';
};

export const ProductCard = ({
  imageSrc,
  imageAlt,
  name,
  originalPrice,
  discountRate,
  discountedPrice,
  badge,
  className,
}: ProductCardProps) => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <article
      className={cn('flex flex-col', getCardSizeClass(badge), className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-[3px] bg-gray-300',
          getImageHeightClass(badge)
        )}>
        {!hasImageError && (
          <img
            src={imageSrc}
            alt={imageAlt}
            className='h-full w-full object-cover'
            onError={() => setHasImageError(true)}
          />
        )}

        {badge && <PromotionBadge badge={badge} />}
      </div>

      <div
        className={cn(
          'flex w-full flex-col items-start',
          getContentGapClass(badge)
        )}>
        <div className='flex w-full flex-col items-start gap-[2px]'>
          <div className='flex w-full flex-col items-start gap-[6px]'>
            <p className='text-caption-12m text-semi-black line-clamp-2 w-full'>
              {name}
            </p>

            <del className='text-caption-10r text-gray-700'>
              {formatPrice(originalPrice)}
            </del>
          </div>

          <div className='flex items-center gap-[2px] whitespace-nowrap'>
            <span className='text-caption-13sb text-red-900'>
              {formatDiscountRate(discountRate)}
            </span>
            <strong className='text-body-14sb text-semi-black'>
              {formatPrice(discountedPrice)}
            </strong>
          </div>
        </div>

        <DeliveryBadge />
      </div>
    </article>
  );
};

const PromotionBadge = ({badge}: {badge: ProductCardBadgeVariant}) => {
  return (
    <div
      className={cn(
        'bg-purple absolute top-0 left-0 flex h-[21px] items-center justify-center rounded-tl-[3px] rounded-br-[3px] text-center whitespace-nowrap text-white',
        badgeStyles[badge]
      )}>
      {badge === 'plus-sale' ? (
        <>
          <span className='text-body-14b'>+</span>
          <span>세일</span>
        </>
      ) : (
        '브랜드데이'
      )}
    </div>
  );
};

const DeliveryBadge = () => {
  return (
    <img
      src={deliveryTagImage}
      alt='내일배송'
      className='h-[16px] w-[76px] object-contain'
    />
  );
};
