import type {Meta, StoryObj} from '@storybook/react-vite';

import {CartHeader} from '@/pages/cart/components/cart-header/CartHeader';
import {HomeHeader} from '@/pages/home/components/home-header/HomeHeader';
import {OrderSheetHeader} from '@/pages/order-sheet/components/order-sheet-header/OrderSheetHeader';
import {ProductHeader} from '@/pages/product/components/product-header/ProductHeader';
import {Header} from '@/shared/components/header';
import {IcSvgMenu, IcSvgSearch} from '@/shared/icons';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='w-[375px] bg-white'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => (
    <Header>
      <Header.Left>
        <Header.BackButton />
        <Header.Title variant='home'>N배송</Header.Title>
      </Header.Left>

      <Header.Right>
        <Header.IconButton label='검색'>
          <IcSvgSearch aria-hidden='true' className='h-[24px] w-[24px]' />
        </Header.IconButton>
        <Header.CartButton />
      </Header.Right>
    </Header>
  ),
};

export const Home: Story = {
  render: () => <HomeHeader />,
};

export const Product: Story = {
  render: () => <ProductHeader storeName='광동제약 직영스토어' cartCount={1} />,
};

export const Cart: Story = {
  render: () => <CartHeader />,
};

export const OrderSheet: Story = {
  render: () => <OrderSheetHeader />,
};

export const ProductWithoutBadge: Story = {
  render: () => <ProductHeader storeName='광동제약 직영스토어' />,
};

export const StoreTitle: Story = {
  render: () => (
    <Header>
      <Header.Left className='flex-1'>
        <Header.BackButton />
        <Header.StoreTitle prefix='N배송'>
          광동제약 직영스토어
        </Header.StoreTitle>
      </Header.Left>

      <Header.Right>
        <Header.IconButton label='검색'>
          <IcSvgSearch aria-hidden='true' className='h-[24px] w-[24px]' />
        </Header.IconButton>
        <Header.CartButton count={1} />
        <Header.IconButton label='메뉴'>
          <IcSvgMenu aria-hidden='true' className='h-[24px] w-[24px]' />
        </Header.IconButton>
      </Header.Right>
    </Header>
  ),
};
