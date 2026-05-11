import type {ComponentPropsWithoutRef} from 'react';

import {OrderCardLayout} from '@/shared/components/cards/OrderCardLayout';

type OrderStoreCardProps = ComponentPropsWithoutRef<typeof OrderCardLayout>;

export function OrderStoreCard(props: OrderStoreCardProps) {
  return <OrderCardLayout variant='store' {...props} />;
}
