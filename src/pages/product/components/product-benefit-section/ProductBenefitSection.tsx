import type {ReactNode} from 'react';

import membershipTagImage from '@/shared/assets/images/img-tag-membership-lg.png';
import {IcSvgChevronRight} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

import type {ProductBenefitData} from '@/pages/product/mocks/product-benefit-data';

type BenefitRowProps = {
  label?: string;
  children: ReactNode;
  className?: string;
};

type ProductBenefitSectionProps = {
  benefit: ProductBenefitData;
  onPointClick?: () => void;
  onCardBenefitClick?: (index: number) => void;
};

const formatPoint = (point: number) => {
  return point.toLocaleString('ko-KR');
};

const MembershipTag = () => {
  return (
    <img
      src={membershipTagImage}
      alt='N+ 멤버십'
      className='h-[1.4rem] w-[5.7rem] shrink-0'
    />
  );
};

const BenefitRow = ({label, children, className}: BenefitRowProps) => {
  return (
    <div className={cn('flex h-[2.4rem] items-center gap-[3.6rem]', className)}>
      {label && (
        <span className='text-body-14m h-[1.7rem] w-[2.5rem] shrink-0 text-gray-800'>
          {label}
        </span>
      )}
      {children}
    </div>
  );
};

export const ProductBenefitSection = ({
  benefit,
  onPointClick,
  onCardBenefitClick,
}: ProductBenefitSectionProps) => {
  const {pointBenefit, cardBenefits} = benefit;

  return (
    <section className='flex h-[8.2rem] w-[33rem] flex-col gap-[0.8rem] bg-white'>
      <BenefitRow label='적립'>
        <button
          type='button'
          className='flex h-[2.4rem] w-[23.2rem] items-center'
          onClick={onPointClick}>
          <MembershipTag />
          <span className='text-body-14sb text-purple ml-[0.4rem] h-[1.7rem] w-[14.3rem] whitespace-nowrap'>
            최대 적립 포인트 {formatPoint(pointBenefit.maxPoint)}원
          </span>
          <IcSvgChevronRight
            aria-hidden='true'
            className='ml-[0.4rem] size-[2.4rem] shrink-0 text-gray-900'
          />
        </button>
      </BenefitRow>

      <BenefitRow label='혜택' className='h-[5rem] items-start'>
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
      </BenefitRow>
    </section>
  );
};
