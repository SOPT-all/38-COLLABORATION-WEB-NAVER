import {Header} from '@/shared/components/header';

interface CartHeaderProps {
  onBackClick?: () => void;
  onDeliveryClick?: () => void;
  onMyShoppingClick?: () => void;
}

export const CartHeader = ({
  onBackClick,
  onDeliveryClick,
  onMyShoppingClick,
}: CartHeaderProps) => {
  return (
    <Header>
      <Header.Left>
        <Header.BackButton onClick={onBackClick} />
        <Header.Title>장바구니</Header.Title>
      </Header.Left>

      <Header.Right className='gap-[8px]'>
        <Header.TextButton onClick={onDeliveryClick}>
          주문배송
        </Header.TextButton>
        <Header.TextButton onClick={onMyShoppingClick}>
          마이쇼핑
        </Header.TextButton>
      </Header.Right>
    </Header>
  );
};
