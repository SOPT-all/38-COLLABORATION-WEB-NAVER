import {Header} from '@/shared/components/header';
import {IcSvgSearch} from '@/shared/icons';

interface HomeHeaderProps {
  onBackClick?: () => void;
  onSearchClick?: () => void;
  onCartClick?: () => void;
}

export const HomeHeader = ({
  onBackClick,
  onSearchClick,
  onCartClick,
}: HomeHeaderProps) => {
  return (
    <Header className='sticky top-0 z-10 border-b border-gray-500'>
      <Header.Left>
        <Header.BackButton onClick={onBackClick} />
        <Header.Title variant='home'>N배송</Header.Title>
      </Header.Left>

      <Header.Right>
        <Header.IconButton label='검색' onClick={onSearchClick}>
          <IcSvgSearch aria-hidden='true' className='h-[24px] w-[24px]' />
        </Header.IconButton>
        <Header.CartButton onClick={onCartClick} />
      </Header.Right>
    </Header>
  );
};
