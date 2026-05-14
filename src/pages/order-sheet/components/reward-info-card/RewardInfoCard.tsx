import {
  IcSvgChevronRightSm,
  IcSvgQuestion,
  IcSvgTagMembershipSm,
} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

import {RewardSummary} from '@/pages/order-sheet/components/reward-summary/RewardSummary';
import {REVIEW_REWARD_LIMIT_NOTICE} from '@/pages/order-sheet/constants/OrderSheetConstants';
import {formatPrice} from '@/shared/utils/format-product';

export type RewardItem = {
  label: string;
  amount: number;
};

export type RewardInfo = {
  purchaseRewardAmount: number;
  reviewRewardAmount: number;
  membershipBenefitAmount: number;
};

type RewardInfoCardProps = {
  rewardItems: RewardItem[];
  rewardInfo: RewardInfo;
  className?: string;
};

export const RewardInfoCard = ({
  rewardItems,
  rewardInfo,
  className,
}: RewardInfoCardProps) => {
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
              totalAmount={rewardInfo.purchaseRewardAmount}
              items={rewardItems}
            />

            <section className='flex w-full flex-col gap-[6px]'>
              <div className='flex w-full items-center justify-between'>
                <div className='flex items-center gap-[4px]'>
                  <h3 className='text-body-16b text-navy'>리뷰적립</h3>
                  <IcSvgQuestion
                    aria-hidden
                    width={24}
                    height={24}
                    className='text-gray-700'
                  />
                </div>

                <span className='text-body-16b text-green-600'>
                  최대 {formatPrice(rewardInfo.reviewRewardAmount)}
                </span>
              </div>

              <p className='text-body-14m text-gray-800'>
                {REVIEW_REWARD_LIMIT_NOTICE}
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
            +{formatPrice(rewardInfo.membershipBenefitAmount)}
          </span>
        </button>
      </div>
    </article>
  );
};
