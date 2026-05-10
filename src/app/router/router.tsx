import {createBrowserRouter, Navigate} from 'react-router-dom';

import {ROUTES} from '@/shared/constants/routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Navigate to={ROUTES.HOME} replace />,
  },
  {
    path: ROUTES.HOME,
    lazy: async () => {
      const {HomePage} = await import('@/pages/home/HomePage');
      return {Component: HomePage};
    },
  },
  {
    path: ROUTES.PRODUCT_DETAIL,
    lazy: async () => {
      const {ProductDetailPage} = await import(
        '@/pages/product/ProductDetailPage'
      );
      return {Component: ProductDetailPage};
    },
  },
  {
    path: ROUTES.CART,
    lazy: async () => {
      const {CartPage} = await import('@/pages/cart/CartPage');
      return {Component: CartPage};
    },
  },
  {
    path: ROUTES.ORDER_SHEET,
    lazy: async () => {
      const {OrderSheetPage} = await import(
        '@/pages/order-sheet/OrderSheetPage'
      );
      return {Component: OrderSheetPage};
    },
  },
  {
    path: '*',
    element: <Navigate to={ROUTES.HOME} replace />,
  },
]);
