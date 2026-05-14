import {useState} from 'react';

import {OrderCardLayout} from '@/shared/components';
import {IcSvgCheckSm, IcSvgCheckSmChecked, IcSvgQuestion} from '@/shared/icons';
import {formatPrice} from '@/shared/utils/format-product';

import type {PointMoneyData} from '@/pages/order-sheet/api/types/order-sheet';
import {POINT_MONEY_SECTION_TEXT} from '@/pages/order-sheet/constants/OrderSheetConstants';
import {HiddenPointButton} from '@/pages/order-sheet/components/hidden-point-button/HiddenPointButton';
import {PointUsageField} from '@/pages/order-sheet/components/point-usage-field/PointUsageField';

const {balance} = POINT_MONEY_SECTION_TEXT;

type PointMoneyBalanceCardProps = Pick<
  PointMoneyData,
  | 'availableAmount'
  | 'availablePoint'
  | 'availableMoney'
  | 'allUseAmount'
>;

export const PointMoneyCard = ({
  availableAmount,
  availablePoint,
  availableMoney,
  allUseAmount,
}: PointMoneyBalanceCardProps) => {
  const [usedPoint, setUsedPoint] = useState(0);
  const [isAlwaysUseAllChecked, setIsAlwaysUseAllChecked] = useState(false);

  const handlePointChange = (point: number) => {
    setUsedPoint(Math.min(point, allUseAmount));
  };

  const handleUseAllClick = () => {
    setUsedPoint(allUseAmount);
  };

  const handleClearPoint = () => {
    setUsedPoint(0);
  };

  const handleAlwaysUseAllToggle = () => {
    setIsAlwaysUseAllChecked((prevChecked) => !prevChecked);
  };

  const isUseAllDisabled = usedPoint === allUseAmount;

  return (
    <OrderCardLayout
      variant='paymentPoint'
      className='max-w-full border border-gray-500 px-[14px] py-[19px]'>
      <div className='flex w-full flex-col gap-[16px]'>
        <div className='flex w-full flex-col items-end gap-[12px]'>
          <dl className='flex w-full flex-col gap-[6px]'>
            <div className='flex w-full items-center justify-between'>
              <div className='flex items-center gap-[4px]'>
                <dt className='text-body-16b text-navy'>
                  {balance.availableAmount}
                </dt>
                <IcSvgQuestion
                  aria-hidden
                  width={24}
                  height={24}
                  className='text-gray-700'
                />
              </div>
              <dd className='text-title-18b text-navy'>
                {formatPrice(availableAmount)}
              </dd>
            </div>

            <div className='flex w-full items-center gap-[8px]'>
              <div
                aria-hidden
                className='h-[4.9rem] w-[0.4rem] bg-gray-500'
              />

              <dl className='flex w-full flex-col gap-[4px]'>
                <div className='flex w-full items-center justify-between'>
                  <div className='flex items-center gap-[4px]'>
                    <dt className='text-body-14m text-gray-800'>
                      {balance.point}
                    </dt>
                    <span className='text-caption-12m flex h-[22px] w-[60px] items-center justify-center rounded-[25px] border border-gray-500 text-gray-800'>
                      {balance.priorityUse}
                    </span>
                  </div>
                  <dd className='text-body-14m text-gray-800'>
                    {formatPrice(availablePoint)}
                  </dd>
                </div>

                <div className='text-body-14m flex w-full items-center justify-between text-gray-800'>
                  <dt>{balance.money}</dt>
                  <dd>{formatPrice(availableMoney)}</dd>
                </div>
              </dl>
            </div>
          </dl>

          <PointUsageField
            point={usedPoint}
            isUseAllDisabled={isUseAllDisabled}
            onChangePoint={handlePointChange}
            onClearPoint={handleClearPoint}
            onClickUseAll={handleUseAllClick}
          />

          <div className='flex items-center gap-[6px]'>
            <button
              type='button'
              aria-label={`${balance.allUseAmount} ${formatPrice(allUseAmount)}`}
              aria-pressed={isAlwaysUseAllChecked}
              onClick={handleAlwaysUseAllToggle}
              className='flex h-[24px] w-[24px] items-center justify-center'>
              {isAlwaysUseAllChecked ? (
                <IcSvgCheckSmChecked
                  width={24}
                  height={24}
                  className='text-white'
                />
              ) : (
                <IcSvgCheckSm
                  width={24}
                  height={24}
                  className='text-gray-700'
                />
              )}
            </button>
            <span className='text-body-14m text-navy cursor-pointer'>
              {balance.allUseAmount}
            </span>
          </div>
        </div>

        <HiddenPointButton className='w-full' />
      </div>
    </OrderCardLayout>
  );
};
