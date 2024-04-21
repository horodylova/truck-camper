import styled from 'styled-components';


export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--white-color); 

`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
  color: var(--white-color); 

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

// export const List = styled.ul`
//   list-style-type: disc;
//   margin-left: 20px;
// `;

// export const ListItem = styled.li`
//   font-size: 16px;
//   line-height: 1.6;
//   margin-bottom: 5px; 
// `;
