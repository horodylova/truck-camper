import styled from 'styled-components';

export const PageWrapper = styled.div`
  color: var(--white-color); 
  margin: 0 auto;
  padding: 20px;
`;


export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Inter';
  src: url('/fonts/Inter-Medium.ttf') format('truetype');
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
  font-family: 'Inter';
  src: url('/fonts/Inter-Medium.ttf') format('truetype');
`;

export const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  font-family: 'Inter';
  src: url('/fonts/Inter-Medium.ttf') format('truetype');
`;

export const ListItem = styled.li`
  font-size: 16px;
  line-height: 1.6;
  font-family: 'Inter';
  src: url('/fonts/Inter-Medium.ttf') format('truetype');
`;

export const StyledButton = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 0.5); 
  color: #fff;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  padding: 10px 20px; 
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); 
  }
`;