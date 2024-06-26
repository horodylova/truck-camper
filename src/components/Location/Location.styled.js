import styled from 'styled-components';

export const LocationWrapper = styled.div`
position: relative;

`;

export const Input = styled.input`

display: flex;
padding-top: 18px;
padding-bottom:18px;
padding-left: 18px;
width:360px;
flex-direction: column;
align-items: flex-start;
gap: 10px;

background: #F7F7F7;
border: none;
border-radius: 10px;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: var(--regular);
  color: var(--primary-txt-color)
  line-height: 1.25;
 

  &:focus {
    border-color: var(--primary-txt-color);
  }

  &::placeholder {
    color: var(--primary-txt-color);
    font-family: Inter;
   
    font-size: 16px;
    font-style: normal;
    font-weight: var(--regular);
    line-height: 1.25;
   
 
  
`;

export const List = styled.ul`
position: absolute;
  top: calc(100% + 5px); 
  top: 100%;
  left: 0;
  width: 300px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
