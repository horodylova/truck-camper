import styled from 'styled-components';
import LocationIcon from '../../Icons/Small icons/location.png';

export const LocationWrapper = styled.div``;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  color: #101828;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-repeat: no-repeat;
  background-position: 10px center; 

  &:focus {
    border-color: var(--primary-txt-color);
  }

  &::placeholder {
    color: var(--primary-txt-color);
    font-family: Inter;
    background-image: url(${LocationIcon} );
    
    font-size: 16px;
    font-style: normal;
    font-weight: var(--regular);
    line-height: 1.25;
   

    background-repeat: no-repeat;
    background-position: 10px center;
    padding-left: 30px;
  }

  
`;

export const List = styled.ul`
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
