import type {ComponentPropsWithoutRef} from 'react';

import {CartCardLayout} from '@/shared/components/cards/CartCardLayout';

type OrderPriceSummaryCardProps = ComponentPropsWithoutRef<
  typeof CartCardLayout
>;

export function OrderPriceSummaryCard(props: OrderPriceSummaryCardProps) {
  return <CartCardLayout variant='priceSummary' {...props} />;
}
