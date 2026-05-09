import {createBrowserRouter, Navigate} from 'react-router-dom';

import {CartPage} from '@/pages/cart/CartPage';
import {HomePage} from '@/pages/home/HomePage';
import {OrderSheetPage} from '@/pages/order-sheet/OrderSheetPage';
import {ProductDetailPage} from '@/pages/product/ProductDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/home' replace />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/:id',
    element: <ProductDetailPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/ordersheet',
    element: <OrderSheetPage />,
  },
]);
