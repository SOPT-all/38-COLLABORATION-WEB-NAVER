import type { ComponentPropsWithoutRef } from 'react';

import { CartCardLayout } from '@/shared/components/cards/CartCardLayout';

type OrderStoreCardProps = ComponentPropsWithoutRef<typeof CartCardLayout>;

export function OrderStoreCard(props: OrderStoreCardProps) {
  return <CartCardLayout variant='store' {...props} />;
}