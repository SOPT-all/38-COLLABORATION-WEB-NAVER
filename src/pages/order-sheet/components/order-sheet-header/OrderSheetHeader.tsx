import {Header} from '@/shared/components/header';
import {IcSvgClose} from '@/shared/icons';

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
          <IcSvgClose aria-hidden='true' className='h-[24px] w-[24px]' />
        </Header.IconButton>
      </Header.Right>
    </Header>
  );
};
