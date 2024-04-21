import styled from 'styled-components';

export const CatalogWrapper = styled.div`
  background-color: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 64px;
`;

export const LeftColumn = styled.div`
  flex: 0 0 30%; 
`;

export const Location = styled.div`
  margin-bottom: 20px;
`;

export const Filters = styled.div`
  margin-bottom: 20px;
`;

export const VehicleEquipment = styled.div`
  margin-bottom: 20px;
`;

export const VehicleType = styled.div`
  margin-bottom: 20px;
`;

export const RightColumn = styled.div`
  flex: 0 0 70%;
`;

export const SearchButton = styled.button`
display: inline-flex;
padding: 16px 60px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 200px;
color: var(--white-color);
background-color: var(--red-color);
border: none;
`;

