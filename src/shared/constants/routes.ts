export const ROUTES = {
  ROOT: '/',
  HOME: '/home',
  PRODUCT_DETAIL: '/products/:id',
  CART: '/cart',
  ORDER_SHEET: '/ordersheet',
} as const;

export const createPath = {
  productDetail: (id: string | number) =>
    ROUTES.PRODUCT_DETAIL.replace(':id', String(id)),
} as const;
