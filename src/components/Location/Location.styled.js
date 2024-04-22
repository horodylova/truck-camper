import styled from 'styled-components';
import LocationIcon from '../../Icons/Small icons/location.png';

export const LocationWrapper = styled.div`
position: relative;

`;


export const Input = styled.input`

display: flex;
padding: 18px 218px 18px 18px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
border-radius: 10px;
background: #F7F7F7;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-image:(${LocationIcon})
 

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
