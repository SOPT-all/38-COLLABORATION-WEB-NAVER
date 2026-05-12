import chevronDownSmIcon from '@/shared/assets/svg/ic_chevron_down_sm.svg';
import deliveryIcon from '@/shared/assets/svg/ic_delivery.svg';
import starIcon from '@/shared/assets/svg/ic_star.svg';
import {IcSvgNotice} from '@/shared/icons';

import {ProductCouponButton} from '@/pages/product/components/product-info-section/ProductCouponButton';

type ProductInfoSectionProps = {
  productName: string;
  optionName: string;
  review: {
    rating: number;
    recentRatingLabel: string;
    recentRating: number;
    reviewCount: number;
  };
  price: {
    discountRate: number;
    originalPrice: number;
    salePrice: number;
    benefitPrice: number;
    benefitLabel: string;
  };
  coupon: {
    dDay: string;
    label: string;
  };
  delivery: {
    feeText: string;
    unitPriceText: string;
  };
};

export const ProductInfoSection = ({
  productName,
  optionName,
  review,
  price,
  coupon,
  delivery,
}: ProductInfoSectionProps) => {
  return (
    <section className='w-full bg-white px-[1.6rem]'>
      <div className='flex w-full flex-col gap-[0.8rem]'>
        <p className='text-body-16m h-[1.9rem] leading-[100%] tracking-[0px] text-black'>
          {productName}
        </p>
        <p className='text-body-16m h-[1.9rem] leading-[100%] tracking-[0px] text-black'>
          {optionName}
        </p>

        <div className='flex h-[2.4rem] w-[27.2rem] items-center gap-[0.6rem]'>
          <img src={starIcon} alt='' className='h-[2.4rem] w-[2.4rem]' />
          <span className='flex cursor-pointer items-center gap-[0.6rem]'>
            <span className='text-body-14sb text-semi-black flex h-[1.7rem] w-[2.8rem] items-center leading-[100%] tracking-[0px]'>
              {review.rating}
            </span>
            <span className='text-caption-12m flex h-[2.4rem] items-center gap-[0.1rem] leading-[100%] tracking-[0px] whitespace-nowrap text-gray-900'>
              <span>
                ({review.recentRatingLabel} {review.recentRating}
              </span>
              <IcSvgNotice
                aria-hidden='true'
                className='h-[2.4rem] w-[2.4rem] text-gray-700'
              />
              <span>)</span>
            </span>
          </span>
          <span className='h-[1.2rem] w-px shrink-0 bg-gray-500' />
          <span className='text-caption-12m h-[1.4rem] w-[8rem] shrink-0 cursor-pointer leading-[100%] tracking-[0px] whitespace-nowrap text-gray-900'>
            {review.reviewCount.toLocaleString()}건 리뷰
          </span>
        </div>

        <div className='flex min-h-[7.1rem] w-full items-end justify-between'>
          <div className='flex flex-col'>
            <div className='flex h-[1.9rem] w-[8.4rem] items-center gap-[0.2rem] whitespace-nowrap'>
              <span className='text-body-16b h-[1.9rem] w-[2.6rem] leading-[100%] tracking-[0px] text-gray-800'>
                {price.discountRate}%
              </span>
              <span className='text-body-14m h-[1.9rem] leading-[100%] tracking-[0px] text-gray-700'>
                {price.originalPrice.toLocaleString()}원
              </span>
            </div>
            <span className='text-display-22b h-[2.6rem] w-[7.3rem] leading-[100%] tracking-[0px] whitespace-nowrap text-black'>
              {price.salePrice.toLocaleString()}
              <span className='text-body-16r leading-[100%] tracking-[0px] text-black'>
                원
              </span>
            </span>
            <div className='flex h-[2.3rem] items-center whitespace-nowrap'>
              <span className='text-display-22b h-[2.6rem] leading-[100%] tracking-[0px] text-red-900'>
                {price.benefitPrice.toLocaleString()}
              </span>
              <span className='text-body-16m mr-[0.8rem] h-[1.9rem] leading-[100%] tracking-[0px] text-red-900'>
                원
              </span>
              <button
                type='button'
                className='flex h-[2.4rem] items-center'
                aria-label={`${price.benefitLabel} 자세히 보기`}>
                <span className='text-body-16m h-[1.9rem] leading-[100%] tracking-[0px] text-red-900'>
                  {price.benefitLabel}
                </span>
                <img
                  src={chevronDownSmIcon}
                  alt=''
                  className='h-[2.4rem] w-[2.4rem]'
                />
              </button>
            </div>
          </div>
          <ProductCouponButton dDay={coupon.dDay} label={coupon.label} />
        </div>
        <div className='flex h-[2.4rem] items-center gap-[0.4rem]'>
          <img
            src={deliveryIcon}
            alt='배송아이콘'
            className='h-[2.4rem] w-[2.4rem]'
          />
          <span className='text-caption-12m h-[1.4rem] w-[4.2rem] leading-[100%] tracking-[0px] text-gray-900'>
            {delivery.feeText}
          </span>
          <span className='h-[1.2rem] w-px bg-gray-500' />
          <span className='text-caption-12m h-[1.4rem] w-[7.2rem] leading-[100%] tracking-[0px] text-gray-900'>
            {delivery.unitPriceText}
          </span>
        </div>
      </div>
    </section>
  );
};
