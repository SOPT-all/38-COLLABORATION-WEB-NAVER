import searchIcon from '@/shared/assets/icons/ic-search.svg';
import {Header} from '@/shared/components/header';

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
    <Header>
      <Header.Left>
        <Header.BackButton onClick={onBackClick} />
        <Header.Title variant='home'>N배송</Header.Title>
      </Header.Left>

      <Header.Right>
        <Header.IconButton label='검색' onClick={onSearchClick}>
          <img src={searchIcon} alt='' className='h-[24px] w-[24px]' />
        </Header.IconButton>
        <Header.CartButton onClick={onCartClick} />
      </Header.Right>
    </Header>
  );
};
