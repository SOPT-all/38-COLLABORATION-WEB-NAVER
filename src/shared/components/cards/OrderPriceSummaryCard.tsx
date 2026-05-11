import type {ComponentPropsWithoutRef} from 'react';

import {OrderCardLayout} from '@/shared/components/cards/OrderCardLayout';

type OrderPriceSummaryCardProps = ComponentPropsWithoutRef<
  typeof OrderCardLayout
>;

export function OrderPriceSummaryCard(props: OrderPriceSummaryCardProps) {
  return <OrderCardLayout variant='priceSummary' {...props} />;
}
