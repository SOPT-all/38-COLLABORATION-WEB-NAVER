import type {Meta, StoryObj} from '@storybook/react-vite';

import {ProductCard} from '@/pages/home/components/product-card/ProductCard';
import mochiImage from '@/shared/assets/images/img-product-mochi.png';
import downyBrandDayImage from '@/shared/assets/images/img-product-downy-brand-day.png';
import downyPlusSaleImage from '@/shared/assets/images/img-product-downy-plus-sale.png';

const meta = {
  title: 'Home/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='bg-white p-[16px]'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: mochiImage,
    imageAlt: '생크림 과일 모찌 찹쌀떡',
    name: '생크림 과일 모찌 찹쌀 떡 딸기 모찌...',
    originalPrice: 15900,
    discountRate: 25,
    discountedPrice: 11780,
  },
};

export const BrandDay: Story = {
  args: {
    imageSrc: downyBrandDayImage,
    imageAlt: '다우니 호텔 컬렉션 섬유유연제',
    name: '다우니 호텔 컬렉션 1L 초고농축 섬유유연제...',
    originalPrice: 57000,
    discountRate: 38,
    discountedPrice: 34800,
    badge: 'brand-day',
  },
};

export const PlusSale: Story = {
  args: {
    imageSrc: downyPlusSaleImage,
    imageAlt: '다우니 호텔 컬렉션 미스티크 섬유유연제',
    name: '다우니 호텔 컬렉션 미스티크 1L 초고농...',
    originalPrice: 57000,
    discountRate: 42,
    discountedPrice: 32800,
    badge: 'plus-sale',
  },
};

export const ImageFallback: Story = {
  args: {
    imageSrc: '/invalid-product-image.png',
    imageAlt: '이미지 로딩 실패 상품',
    name: '이미지 로딩 실패 시 회색 배경으로 보이는 상품',
    originalPrice: 19700,
    discountRate: 5,
    discountedPrice: 19200,
  },
};
