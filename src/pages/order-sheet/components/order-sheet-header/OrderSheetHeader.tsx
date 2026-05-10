import closeIcon from '@/shared/assets/icons/ic-close.svg';
import {Header} from '@/shared/components/header';

interface OrderSheetHeaderProps {
  onCloseClick?: () => void;
}

export const OrderSheetHeader = ({onCloseClick}: OrderSheetHeaderProps) => {
  return (
    <Header className='h-[108px]'>
      <Header.Left>
        <Header.NPayLogo />
      </Header.Left>

      <Header.Center>
        <Header.Title variant='payment'>주문/결제</Header.Title>
      </Header.Center>

      <Header.Right>
        <Header.IconButton label='닫기' onClick={onCloseClick}>
          <img src={closeIcon} alt='' className='h-[24px] w-[24px]' />
        </Header.IconButton>
      </Header.Right>
    </Header>
  );
};
