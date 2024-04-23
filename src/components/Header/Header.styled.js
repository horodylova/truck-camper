import styled from 'styled-components';

export const HeaderContainer = styled.header`
  
display: flex;
align-items: center;
justify-content: space-between;

  width: 100%;
  padding: 20px;
  color: #fff;
  
`;

export const Logo = styled.a`
  margin: 0;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
  color: #fff;
  text-decoration: none;
  src: url('/fonts/Inter-Medium.ttf') format('truetype');
  transition: color 0.3s ease; 

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);   }
`;


export const Navigation = styled.nav`
  margin-top: 10px;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 16px;
  font-family: 'Inter';
  src: url('/fonts/Inter-Medium.ttf') format('truetype');
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); 
  }
`;