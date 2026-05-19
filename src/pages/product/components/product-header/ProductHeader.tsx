import {Header} from '@/shared/components/header';
import {IcSvgMenu, IcSvgSearch} from '@/shared/icons';

interface ProductHeaderProps {
  storeName: string;
  cartCount?: number;
  onBackClick?: () => void;
  onStoreNameClick?: () => void;
  onSearchClick?: () => void;
  onCartClick?: () => void;
  onMenuClick?: () => void;
}

export const ProductHeader = ({
  storeName,
  cartCount,
  onBackClick,
  onStoreNameClick,
  onSearchClick,
  onCartClick,
  onMenuClick,
}: ProductHeaderProps) => {
  return (
    <Header>
      <Header.Left className='flex-1'>
        <Header.BackButton onClick={onBackClick} />
        <Header.StoreTitle prefix='N배송'>
          <button
            type='button'
            className='cursor-pointer truncate bg-transparent text-inherit'
            onClick={onStoreNameClick}>
            {storeName}
          </button>
        </Header.StoreTitle>
      </Header.Left>

      <Header.Right>
        <Header.IconButton label='검색' onClick={onSearchClick}>
          <IcSvgSearch aria-hidden='true' className='h-[24px] w-[24px]' />
        </Header.IconButton>
        <Header.CartButton count={cartCount} onClick={onCartClick} />
        <Header.IconButton label='메뉴' onClick={onMenuClick}>
          <IcSvgMenu aria-hidden='true' className='h-[24px] w-[24px]' />
        </Header.IconButton>
      </Header.Right>
    </Header>
  );
};
