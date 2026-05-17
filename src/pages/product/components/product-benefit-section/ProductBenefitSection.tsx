import membershipTagImage from '@/shared/assets/images/img-tag-membership-lg.png';
import {IcSvgChevronRight} from '@/shared/icons';
import {formatPrice} from '@/shared/utils/format-product';

import {PRODUCT_BENEFIT_MOCK} from '@/pages/product/mocks/product-benefit-data';

type ProductBenefitSectionProps = {
  onPointClick?: () => void;
  onCardBenefitClick?: (index: number) => void;
};

export const ProductBenefitSection = ({
  onPointClick,
  onCardBenefitClick,
}: ProductBenefitSectionProps) => {
  const {pointBenefit, cardBenefits} = PRODUCT_BENEFIT_MOCK;

  return (
    <section className='flex h-[8.2rem] w-[33rem] flex-col gap-[0.8rem] bg-white'>
      <div className='flex h-[2.4rem] items-center gap-[3.6rem]'>
        <span className='text-body-14m h-[1.7rem] w-[2.5rem] shrink-0 text-gray-800'>
          적립
        </span>

        <button
          type='button'
          className='flex h-[2.4rem] w-[23.2rem] items-center'
          onClick={onPointClick}>
          <img
            src={membershipTagImage}
            alt='N+ 멤버십'
            className='h-[1.4rem] w-[5.7rem] shrink-0'
          />
          <span className='text-body-14sb text-purple ml-[0.4rem] h-[1.7rem] w-[14.3rem] whitespace-nowrap'>
            최대 적립 포인트 {formatPrice(pointBenefit.maxPoint)}
          </span>
          <IcSvgChevronRight
            aria-hidden='true'
            className='ml-[0.4rem] size-[2.4rem] shrink-0 text-gray-900'
          />
        </button>
      </div>

      <div className='flex h-[5rem] items-start gap-[3.6rem]'>
        <span className='text-body-14m h-[1.7rem] w-[2.5rem] shrink-0 text-gray-800'>
          혜택
        </span>

        <div className='flex h-[5rem] w-[29.3rem] flex-col gap-[0.2rem]'>
          {cardBenefits.map((cardBenefit, index) => (
            <button
              key={cardBenefit.title}
              type='button'
              className='text-body-14m flex h-[2.4rem] w-[26.9rem] items-center text-gray-900'
              onClick={() => onCardBenefitClick?.(index)}>
              <span className='h-[1.7rem] w-[24.3rem] whitespace-nowrap'>
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
    </section>
  );
};
