import {useState} from 'react';

import {OrderCardLayout} from '@/shared/components';
import {IcSvgCheckSm, IcSvgCheckSmChecked} from '@/shared/icons';
import {formatPrice} from '@/shared/utils/format-product';

import type {PointMoneyData} from '@/pages/order-sheet/api/types/order-sheet';
import {POINT_MONEY_SECTION_TEXT} from '@/pages/order-sheet/constants/OrderSheetConstants';
import {HiddenPointButton} from '@/pages/order-sheet/components/hidden-point-button/HiddenPointButton';
import {PointUsageField} from '@/pages/order-sheet/components/point-usage-field/PointUsageField';
import {RewardSummary} from '@/pages/order-sheet/components/reward-summary/RewardSummary';

const {balance, validationMessage} = POINT_MONEY_SECTION_TEXT;

type PointMoneyBalanceCardProps = Pick<
  PointMoneyData,
  'availableAmount' | 'availablePoint' | 'availableMoney' | 'allUseAmount'
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
    if (point > allUseAmount) {
      window.alert(validationMessage.exceedAvailableAmount);
    }

    setUsedPoint(Math.min(point, allUseAmount));
  };

  const handleUseAllClick = () => {
    setUsedPoint(allUseAmount);
  };

  const handleClearPoint = () => {
    setUsedPoint(0);
  };

  const handleAlwaysUseAllToggle = () => {
    setIsAlwaysUseAllChecked((prevChecked) => {
      if (prevChecked) {
        return false;
      }

      setUsedPoint(allUseAmount);
      return true;
    });
  };

  const isUseAllDisabled = usedPoint === allUseAmount;

  return (
    <OrderCardLayout
      variant='paymentPoint'
      className='max-w-full border border-gray-500 px-[14px] py-[19px]'>
      <div className='flex w-full flex-col gap-[16px]'>
        <div className='flex w-full flex-col items-end gap-[12px]'>
          <RewardSummary
            title={balance.availableAmount}
            totalAmount={availableAmount}
            amountPrefix=''
            amountClassName='text-title-18b text-navy'
            items={[
              {
                label: balance.point,
                amount: availablePoint,
                badge: balance.priorityUse,
              },
              {label: balance.money, amount: availableMoney},
            ]}
          />

          <PointUsageField
            point={usedPoint}
            isUseAllDisabled={isUseAllDisabled}
            onChangePoint={handlePointChange}
            onClearPoint={handleClearPoint}
            onClickUseAll={handleUseAllClick}
          />

          <div className='flex items-center'>
            <button
              type='button'
              aria-label={`${balance.allUseAmount} ${formatPrice(allUseAmount)}`}
              aria-pressed={isAlwaysUseAllChecked}
              onClick={handleAlwaysUseAllToggle}
              className='flex items-center gap-[6px]'>
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
              <span className='text-body-14m text-navy'>
                {balance.allUseAmount}
              </span>
            </button>
          </div>
        </div>

        <HiddenPointButton className='w-full' />
      </div>
    </OrderCardLayout>
  );
};
