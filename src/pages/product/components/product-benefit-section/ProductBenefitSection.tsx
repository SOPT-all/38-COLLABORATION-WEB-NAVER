import membershipTagImage from '@/shared/assets/images/img-tag-membership-lg.png';
import {IcSvgChevronRight} from '@/shared/icons';
import {formatPrice} from '@/shared/utils/format-product';

import type {ProductDetail} from '@/pages/product/api/types/product-detail';

type ProductBenefitSectionProps = {
  pointBenefit: ProductDetail['pointBenefit'];
  cardBenefits: ProductDetail['cardBenefits'];
  onPointClick?: () => void;
  onCardBenefitClick?: (index: number) => void;
};

export const ProductBenefitSection = ({
  pointBenefit,
  cardBenefits,
  onPointClick,
  onCardBenefitClick,
}: ProductBenefitSectionProps) => {
  const hasPointBenefit = (pointBenefit.maxPoint ?? 0) > 0;
  const hasCardBenefits = cardBenefits.length > 0;

  return (
    <section className='flex w-[33rem] flex-col gap-[0.8rem] bg-white'>
      <div className='flex items-center gap-[3.6rem]'>
        <span className='text-body-14m h-[1.7rem] w-[2.5rem] shrink-0 text-gray-800'>
          적립
        </span>

        {hasPointBenefit && (
          <button
            type='button'
            className='flex h-[2.4rem] items-center'
            onClick={onPointClick}>
            <img
              src={membershipTagImage}
              alt='N+ 멤버십'
              className='h-[1.4rem] w-[5.7rem] shrink-0'
            />
            <span className='text-body-14sb text-purple ml-[0.4rem] h-[1.7rem] whitespace-nowrap'>
              최대 적립 포인트 {formatPrice(pointBenefit.maxPoint ?? 0)}
            </span>
            <IcSvgChevronRight
              aria-hidden='true'
              className='ml-[0.4rem] size-[2.4rem] shrink-0 text-gray-900'
            />
          </button>
        )}
      </div>

      {hasCardBenefits && (
        <div className='flex items-start gap-[3.6rem]'>
          <span className='text-body-14m h-[1.7rem] w-[2.5rem] shrink-0 text-gray-800'>
            혜택
          </span>

          <div className='flex flex-col gap-[0.2rem]'>
            {cardBenefits.map((cardBenefit, index) => (
              <button
                key={cardBenefit.title}
                type='button'
                className='text-body-14m flex h-[2.4rem] items-center text-gray-900'
                onClick={() => onCardBenefitClick?.(index)}>
                <span className='h-[1.7rem] whitespace-nowrap'>
                  {cardBenefit.title}
                </span>
                <IcSvgChevronRight
                  aria-hidden='true'
                  className='size-[2.4rem] shrink-0 text-gray-900'
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
