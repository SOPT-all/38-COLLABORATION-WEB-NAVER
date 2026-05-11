import {
  HeaderBackButton,
  HeaderCartButton,
  HeaderCenter,
  HeaderIconButton,
  HeaderLeft,
  HeaderNPayLogo,
  HeaderRight,
  HeaderRoot,
  HeaderStoreTitle,
  HeaderTextButton,
  HeaderTitle,
} from './Header';

export const Header = Object.assign(HeaderRoot, {
  Left: HeaderLeft,
  Center: HeaderCenter,
  Right: HeaderRight,
  Title: HeaderTitle,
  StoreTitle: HeaderStoreTitle,
  IconButton: HeaderIconButton,
  BackButton: HeaderBackButton,
  CartButton: HeaderCartButton,
  TextButton: HeaderTextButton,
  NPayLogo: HeaderNPayLogo,
});
