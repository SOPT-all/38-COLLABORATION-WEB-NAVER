import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';
import ProductCard from '@/pages/cart/components/product-card/ProductCard';
import productImage from '@/shared/assets/images/img-product.png';

const meta = {
  title: 'Cart/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
    onToggle: () => undefined,
    orderDeadline: '00:45:27',
    deliveryDate: '내일(토)',
    product: {
      imageUrl: productImage,
      imageAlt: '제주 삼다수 330ml 상품 이미지',
      payBadge: true,
      title: '(광동 직영) 제주 삼다수 330ml 20입 + 20입 (유/무라벨 랜덤발송)',
      discountRate: 3,
      price: 17200,
      originalPrice: 17700,
      giftable: true,
    },
    option: {
      optionName: '삼다수 330ml 20입 + 20입',
      quantity: 1,
      price: 17200,
      onDecrease: () => undefined,
      onIncrease: () => undefined,
      onDelete: () => undefined,
    },
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <ProductCard
        {...args}
        checked={checked}
        onToggle={() => {
          setChecked((prevChecked) => !prevChecked);
          args.onToggle();
        }}
      />
    );
  },
};
