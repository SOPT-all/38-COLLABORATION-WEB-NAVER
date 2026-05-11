import type {Meta, StoryObj} from '@storybook/react-vite';

import {
  OrderPriceSummaryCard,
  OrderPriceSummaryCardRow,
  OrderPriceSummaryCardRows,
} from '@/shared/components/cards/OrderPriceSummaryCard';

const meta = {
  title: 'Shared/Card/OrderPriceSummaryCard',
  component: OrderPriceSummaryCard,
} satisfies Meta<typeof OrderPriceSummaryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const LayoutRows = (
  <OrderPriceSummaryCardRows>
    <div className='h-[1.7rem] w-full rounded-[0.4rem] bg-gray-300' />
    <div className='h-[1.7rem] w-full rounded-[0.4rem] bg-gray-300' />
    <div className='h-[1.7rem] w-full rounded-[0.4rem] bg-gray-300' />
    <div className='h-[1.7rem] w-full rounded-[0.4rem] bg-gray-300' />
  </OrderPriceSummaryCardRows>
);

const LayoutTotal = (
  <div className='h-[1.9rem] w-[6.8rem] rounded-[0.4rem] bg-gray-300' />
);

export const LayoutOnly: Story = {
  args: {
    title: (
      <div className='h-[1.9rem] w-[9.2rem] rounded-[0.4rem] bg-gray-300' />
    ),
    totalLabel: (
      <div className='h-[1.7rem] w-[10.8rem] rounded-[0.4rem] bg-gray-300' />
    ),
    totalValue: LayoutTotal,
    children: LayoutRows,
  },
};

export const PriceExample: Story = {
  args: {
    title: '주문 예상 금액',
    totalLabel: '총 주문 예상 금액',
    totalValue: (
      <div className='flex items-center gap-[0.2rem]'>
        <span className='text-body-16b'>17,200</span>
        <span className='text-body-14m'>원</span>
      </div>
    ),
    children: (
      <OrderPriceSummaryCardRows>
        <OrderPriceSummaryCardRow label='총 선택상품금액' value='17,700원' />
        <OrderPriceSummaryCardRow
          label='즉시할인예상금액'
          value='-500원'
          valueClassName='text-red-900'
        />
        <OrderPriceSummaryCardRow
          label='쿠폰할인예상금액'
          value='0원'
          valueClassName='text-red-900'
        />
        <OrderPriceSummaryCardRow label='총 배송비' value='0원' />
      </OrderPriceSummaryCardRows>
    ),
  },
};
