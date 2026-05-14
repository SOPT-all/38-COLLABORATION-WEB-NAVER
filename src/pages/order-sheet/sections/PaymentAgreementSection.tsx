import {OrderCardLayout} from '@/shared/components';
import {IcSvgQuestion} from '@/shared/icons';

const PAYMENT_AGREEMENT_LABEL = {
  section: '결제 약관 안내',
  privacyAgreement: '개인정보 제공 동의 :',
  detail: '상세보기',
  purchaseSafetyService: '구매안전 서비스 안내',
  purchaseSafetyServiceDetail: '구매안전 서비스 안내 상세보기',
} as const; // 컴포넌트 pr 머지 후 파일로 분리

const MOCK_PAYMENT_AGREEMENT = {
  sellerName: '바디랩',
} as const; // 컴포넌트 pr 머지 후 파일로 분리

export const PaymentAgreementSection = () => {
  return (
    <section aria-label={PAYMENT_AGREEMENT_LABEL.section}>
      <OrderCardLayout
        variant='paymentAgreement'
        className='flex max-w-full flex-col gap-[12px] pt-[19px] pr-[124px] pb-[14px] pl-[14px]'>
        <p className='flex gap-[4px]'>
          <span className='text-navy text-body-14m'>
            {PAYMENT_AGREEMENT_LABEL.privacyAgreement}
          </span>
          <strong className='text-body-14m font-normal text-green-600'>
            {MOCK_PAYMENT_AGREEMENT.sellerName}
          </strong>
          <button type='button' className='text-navy text-body-14m'>
            {PAYMENT_AGREEMENT_LABEL.detail}
          </button>
        </p>

        <button
          type='button'
          className='flex items-center gap-[4px]'
          aria-label={PAYMENT_AGREEMENT_LABEL.purchaseSafetyServiceDetail}>
          <span className='text-body-14m text-gray-800'>
            {PAYMENT_AGREEMENT_LABEL.purchaseSafetyService}
          </span>
          <IcSvgQuestion
            aria-hidden
            width={24}
            height={24}
            className='text-gray-700'
          />
        </button>
      </OrderCardLayout>
    </section>
  );
};
