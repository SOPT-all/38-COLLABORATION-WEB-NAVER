import {PrimaryButton} from '@/shared/components/button/PrimaryButton';

export const PaymentButtonSection = () => {
  return (
    <section className='flex w-full flex-1 flex-col items-center justify-center gap-[16px]'>
      <p className='text-semi-black text-caption-12m'>
        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
      </p>
      <PrimaryButton className='h-[48px] w-full'>
        충전 후 결제하기
      </PrimaryButton>
    </section>
  );
};
