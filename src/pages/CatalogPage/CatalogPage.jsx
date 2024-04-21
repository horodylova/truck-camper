import { useState } from 'react';
import Location from '../../components/Location/Location'; 
import { CatalogWrapper, LeftColumn, Filters, VehicleEquipment, VehicleType, RightColumn, SearchButton } from './CatalogPage.styled';

const CatalogPage = () => {
  const [ setLocation] = useState('');

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <CatalogWrapper className="container">
      <LeftColumn>
        <Location onLocationChange={handleLocationChange} /> 
        <Filters>
          <h3>Filters</h3>
        </Filters>
        <VehicleEquipment>
          <h3>Vehicle Equipment</h3>
        </VehicleEquipment>
        <VehicleType>
          <h3>Vehicle Type</h3>
          <ul>
            <li>Van</li>
            <li>Fully Integrated</li>
            <li>Alcove</li>
          </ul>
        </VehicleType>
        <SearchButton>Search</SearchButton>
      </LeftColumn>
      <RightColumn>
      </RightColumn>
    </CatalogWrapper>
  );
};

export default CatalogPage;



