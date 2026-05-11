import type {Meta, StoryObj} from '@storybook/react-vite';

import {DeliveryBadge} from '@/shared/components/badges';
import {OrderStoreCard} from '@/shared/components/cards/OrderStoreCard';
import {
  IcSvgChevronDownSm,
  IcSvgCloseSm,
  IcSvgMinus,
  IcSvgPlus,
  IcSvgTagPay,
} from '@/shared/icons';

const meta = {
  title: 'Shared/Card/OrderStoreCard',
  component: OrderStoreCard,
} satisfies Meta<typeof OrderStoreCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const LayoutHeader = (
  <div className='h-[2.4rem] w-[16rem] rounded-[0.4rem] bg-gray-300' />
);

const LayoutHeaderAction = (
  <div className='h-[3.1rem] w-[8.1rem] rounded-[0.4rem] bg-red-700' />
);

const LayoutContent = (
  <>
    <div className='h-[4.8rem] w-full rounded-[0.4rem] bg-green-100' />
    <div className='h-[7.6rem] w-full rounded-[0.4rem] bg-gray-300' />
    <div className='h-[8.2rem] w-full rounded-[0.4rem] bg-blue-800' />
  </>
);

const LayoutFooter = (
  <div className='flex flex-col gap-[0.4rem]'>
    <div className='h-[1.7rem] w-full rounded-[0.4rem] bg-gray-300' />
    <div className='h-[2.4rem] w-full rounded-[0.4rem] bg-gray-300' />
  </div>
);

const mockProduct = {
  storeName: '광동제약 직영스토어',
  title: '(광동 직영) 제주 삼다수 330',
  subtitle: 'ml 20입 + 20입 (유/무라벨 랜덤발송)',
  optionName: '삼다수 330ml 20입 + 20입',
  price: '17,200원',
  originalPrice: '17,700원',
};

const StoreHeader = (
  <div className='text-body-16b flex items-center gap-[0.2rem] text-black'>
    {mockProduct.storeName}
  </div>
);

const CouponButton = (
  <button
    className='text-caption-12sb flex h-[3.1rem] w-[8.1rem] items-center justify-center gap-[0.4rem] rounded-[0.4rem] border border-red-800 bg-red-700 text-red-900'
    type='button'>
    <span className='flex h-[1.2rem] w-[1.7rem] items-center justify-center rounded-[0.1rem] bg-red-900 text-[0.9rem] leading-none font-bold text-white'>
      N
    </span>
    쿠폰받기
  </button>
);

const DeliverySection = (
  <div className='flex w-[26.1rem] flex-col gap-[0.6rem]'>
    <DeliveryBadge className='w-full' />
    <div className='text-caption-12m flex items-center gap-[0.4rem]'>
      <span className='text-gray-900'>00:45:27 내 주문 시</span>
      <span className='text-green-600'>내일(토) 도착</span>
    </div>
  </div>
);

const ProductSection = (
  <div className='flex items-center gap-[0.8rem]'>
    <div className='text-caption-10r flex size-[7.6rem] shrink-0 items-center justify-center rounded-[0.4rem] bg-gray-300 text-gray-700'>
      이미지
    </div>
    <div className='flex w-[19.1rem] flex-col gap-[0.4rem]'>
      <div className='flex items-center gap-[0.2rem]'>
        <IcSvgTagPay
          aria-hidden='true'
          className='h-[1.3823rem] w-[5.2rem] shrink-0'
        />
        <p className='text-caption-12m text-semi-black truncate'>
          {mockProduct.title}
        </p>
      </div>
      <p className='text-caption-12m text-semi-black'>{mockProduct.subtitle}</p>
      <div className='flex items-center gap-[0.2rem]'>
        <span className='text-body-14sb text-red-900'>3%</span>
        <span className='text-body-14sb text-semi-black'>
          {mockProduct.price}
        </span>
        <span className='text-caption-10r relative text-gray-700'>
          {mockProduct.originalPrice}
          <span className='absolute top-1/2 left-0 h-px w-full bg-gray-700' />
        </span>
      </div>
      <span className='text-caption-10r flex h-[1.8rem] w-fit items-center rounded-[0.4rem] border border-gray-500 px-[0.3rem] text-gray-800'>
        선물가능상품
      </span>
    </div>
  </div>
);

const QuantityStepper = (
  <div className='flex h-12 w-[10.3rem] items-center rounded-[0.4rem] border border-gray-500 bg-white'>
    <button
      aria-label='수량 감소'
      className='flex size-[2.9rem] items-center justify-center text-gray-800'
      type='button'>
      <IcSvgMinus aria-hidden='true' className='size-[2.4rem]' />
    </button>
    <span className='h-full w-px bg-gray-500' />
    <span className='text-body-14b flex flex-1 items-center justify-center text-black'>
      1
    </span>
    <span className='h-full w-px bg-gray-500' />
    <button
      aria-label='수량 증가'
      className='flex size-[2.9rem] items-center justify-center text-gray-900'
      type='button'>
      <IcSvgPlus aria-hidden='true' className='size-[2.4rem]' />
    </button>
  </div>
);

const OptionSection = (
  <div className='flex h-[8.2rem] w-full flex-col rounded-[0.4rem] bg-blue-800 px-[1.3rem] pt-[0.8rem] pb-[1.3rem]'>
    <div className='flex w-full items-center justify-between'>
      <p className='text-caption-12m text-gray-800'>{mockProduct.optionName}</p>
      <button
        aria-label='옵션 삭제'
        className='flex size-[2.4rem] items-center justify-center text-black'
        type='button'>
        <IcSvgCloseSm aria-hidden='true' className='size-[2.4rem]' />
      </button>
    </div>
    <div className='mt-[0.8rem] flex w-full items-center justify-between'>
      {QuantityStepper}
      <span className='text-caption-12r text-semi-black'>
        {mockProduct.price}
      </span>
    </div>
  </div>
);

const OptionButton = (
  <button
    className='text-body-14m h-[3.4rem] w-full rounded-[0.4rem] border border-gray-500 text-gray-900'
    type='button'>
    옵션 변경
  </button>
);

const CartContent = (
  <>
    {DeliverySection}
    {ProductSection}
    {OptionSection}
    {OptionButton}
  </>
);

const SummaryFooter = (
  <div className='flex flex-col gap-[0.4rem]'>
    <div className='text-body-14m flex items-center justify-between'>
      <span className='text-gray-800'>총 배송비</span>
      <span className='text-blue-900'>무료</span>
    </div>
    <div className='flex items-center justify-between'>
      <span className='text-body-14b text-black'>예상 주문금액</span>
      <span className='text-body-14b flex items-center gap-[0.2rem] text-black'>
        {mockProduct.price}
        <IcSvgChevronDownSm
          aria-hidden='true'
          className='size-[2.4rem] text-black'
        />
      </span>
    </div>
  </div>
);

export const LayoutOnly: Story = {
  args: {
    header: LayoutHeader,
    headerAction: LayoutHeaderAction,
    footer: LayoutFooter,
    children: LayoutContent,
  },
};

export const CartExample: Story = {
  args: {
    header: StoreHeader,
    headerAction: CouponButton,
    footer: SummaryFooter,
    children: CartContent,
  },
};
