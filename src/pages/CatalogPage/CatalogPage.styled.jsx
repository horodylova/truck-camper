import styled from 'styled-components';

export const CatalogWrapper = styled.div`
  background-color: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 64px;
`;

export const LeftColumn = styled.div`
  flex: 0 0 30%; 
`;

export const LocationTitle = styled.div`
color: rgba(16, 24, 40, 0.60);
align-self: stretch;

font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
margin-bottom:8px;
`;

export const Location = styled.div`

`;

export const Filters = styled.div`
  margin-top:32px;
  margin-bottom: 14px;
  color: var(--grey-color);

font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: var(--medium);
line-height: 1.5;
`;

export const VehicleEquipment = styled.div`
  margin-bottom: 24px;
  color: var(--primary-txt-color);

font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: var(--medium);
line-height: 1.2;

display: inline-flex;
flex-direction: column;
align-items: flex-start;
gap: 24px;
`;

export const EquipmentList = styled.ul`
border-top: 1px solid rgba(16, 24, 40, 0.10);
padding-top:24px;

display: flex;
width: 360px;
align-items: flex-start;
gap: 8px;
flex-wrap: wrap;
margin-bottom:32px;
`

export const EquipmentItem = styled.li`
display: inline-block;
height: 95px;
padding-top: 17px;
padding-bottom: 17px;
align-items: center;
gap: 8px;

border-radius: 10px;
border: 1px solid rgba(16, 24, 40, 0.20);

mix-blend-mode: multiply;

&:hover{
  border: 1px solid var(--red-color);
}

`;

export const EquipmentItemSingle = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
`

export const EquipmentIcon = styled.img`
`
export const EquipmentText = styled.p`
color: var(--primary-txt-color);

text-align: center;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: var(--medium);
line-height:1.25;
`

export const VehicleTypeTitle = styled.div`
  margin-bottom: 24px;
  color: var(--primary-txt-color);

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: 1.2;
`;

export const VehicleList = styled.ul`
border-top: 1px solid rgba(16, 24, 40, 0.10);
padding-top:24px;
gap: 8px;
`;
export const VehicleType = styled.li`
`

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

