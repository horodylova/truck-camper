import { Logo, NavLink, HeaderContainer, Navigation} from './Header.styled';


export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        Truck Camper
      </Logo>
      <Navigation>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/truck-camper/catalog">Catalog</NavLink>
        <NavLink href="/truck-camper/favorites">Favorites</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};
