import {OrderCardLayout} from '@/shared/components';
import {IcSvgQuestion} from '@/shared/icons';

export const AgreementSection = () => {
  return (
    <section aria-label='결제 약관 안내'>
      <OrderCardLayout
        variant='paymentAgreement'
        className='flex max-w-full flex-col gap-[12px] pt-[19px] pr-[124px] pb-[14px] pl-[14px]'>
        <p className='flex gap-[4px]'>
          <span className='text-navy text-body-14m'>개인정보 제공 동의 :</span>
          <strong className='text-body-14m font-normal text-green-600'>
            바디랩
          </strong>
          <span className='text-navy text-body-14m'>상세보기</span>
        </p>

        <div className='flex items-center gap-[4px]'>
          <span className='text-body-14m text-gray-800'>
            구매안전 서비스 안내
          </span>
          <IcSvgQuestion
            aria-hidden
            width={24}
            height={24}
            className='text-gray-700'
          />
        </div>
      </OrderCardLayout>
    </section>
  );
};
