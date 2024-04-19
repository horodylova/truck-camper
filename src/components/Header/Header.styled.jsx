import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
`;

export const Navigation = styled.nav`
  margin-top: 10px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;