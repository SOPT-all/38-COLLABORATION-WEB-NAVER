import menuIcon from '@/shared/assets/icons/ic-menu.svg';
import searchIcon from '@/shared/assets/icons/ic-search.svg';
import {Header} from '@/shared/components/header';

interface ProductHeaderProps {
  storeName: string;
  cartCount?: number;
  onBackClick?: () => void;
  onSearchClick?: () => void;
  onCartClick?: () => void;
  onMenuClick?: () => void;
}

export const ProductHeader = ({
  storeName,
  cartCount,
  onBackClick,
  onSearchClick,
  onCartClick,
  onMenuClick,
}: ProductHeaderProps) => {
  return (
    <Header>
      <Header.Left className='flex-1'>
        <Header.BackButton onClick={onBackClick} />
        <Header.StoreTitle prefix='N배송'>{storeName}</Header.StoreTitle>
      </Header.Left>

      <Header.Right>
        <Header.IconButton label='검색' onClick={onSearchClick}>
          <img src={searchIcon} alt='' className='h-[24px] w-[24px]' />
        </Header.IconButton>
        <Header.CartButton count={cartCount} onClick={onCartClick} />
        <Header.IconButton label='메뉴' onClick={onMenuClick}>
          <img src={menuIcon} alt='' className='h-[24px] w-[24px]' />
        </Header.IconButton>
      </Header.Right>
    </Header>
  );
};
