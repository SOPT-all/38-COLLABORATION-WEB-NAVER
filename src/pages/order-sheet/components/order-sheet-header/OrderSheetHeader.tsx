import {Header} from '@/shared/components/header';
import {IcSvgClose} from '@/shared/icons';
import {cn} from '@/shared/utils/cn';

interface OrderSheetHeaderProps {
  className?: string;
  onCloseClick?: () => void;
}

export const OrderSheetHeader = ({
  className,
  onCloseClick,
}: OrderSheetHeaderProps) => {
  return (
    <Header className={cn('h-[108px]', className)}>
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
