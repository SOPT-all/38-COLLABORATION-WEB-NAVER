import {
  IcSvgChevronRightSm,
  IcSvgQuestion,
  IcSvgTagMembershipSm,
} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

import {RewardSummary} from '@/pages/order-sheet/components/reward-summary/RewardSummary';

type RewardInfoCardProps = {
  className?: string;
};

const MOCK_REWARD_ITEMS = [
  {label: '기본적립', amount: 289},
  {label: '네이버페이 머니 결제적립', amount: 433},
];

const MOCK_REWARD_INFO = {
  purchaseRewardAmount: 722,
  reviewRewardAmount: 750,
  membershipBenefitAmount: 1156,
};

export const RewardInfoCard = ({className}: RewardInfoCardProps) => {
  return (
    <article
      className={cn(
        'flex w-full flex-col items-center justify-center rounded-[10px] border-[1.5px] border-green-600 bg-green-100 p-[10px]',
        className
      )}>
      <div className='flex w-full flex-col gap-[12px]'>
        <div className='flex w-full flex-col gap-[20px]'>
          <div className='flex w-full flex-col gap-[16px]'>
            <RewardSummary
              totalAmount={MOCK_REWARD_INFO.purchaseRewardAmount}
              items={MOCK_REWARD_ITEMS}
            />

            <section className='flex w-full flex-col gap-[6px]'>
              <div className='flex w-full items-center justify-between'>
                <div className='flex items-center gap-[4px]'>
                  <h3 className='text-body-16b text-navy'>리뷰적립</h3>
                  <IcSvgQuestion
                    width={24}
                    height={24}
                    className='text-transparent'
                  />
                </div>

                <span className='text-body-16b text-green-600'>
                  최대 {MOCK_REWARD_INFO.reviewRewardAmount.toLocaleString()}원
                </span>
              </div>

              <p className='text-body-14m text-gray-800'>
                · 동일상품의 상품/한달리뷰 적립은 각 1회로 제한
              </p>
            </section>
          </div>

          <div className='h-px w-full bg-gray-500' />
        </div>

        <button
          type='button'
          className='flex w-full items-center justify-center gap-[6px] rounded-[4px] px-[3px]'>
          <div className='flex items-center gap-[4px]'>
            <IcSvgTagMembershipSm width={47} height={14} />

            <span className='text-caption-12m text-navy'>
              멤버십이 드리는 구매 감사 혜택받기
            </span>

            <IcSvgChevronRightSm width={24} height={24} />
          </div>

          <span className='text-body-14b text-green-600'>
            +{MOCK_REWARD_INFO.membershipBenefitAmount.toLocaleString()}원
          </span>
        </button>
      </div>
    </article>
  );
};
