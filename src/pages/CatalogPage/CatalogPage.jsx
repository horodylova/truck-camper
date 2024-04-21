import Location from '../../components/Location/Location'; 
import { useState } from 'react'; // Путь к файлу компонента Location
import { CatalogWrapper, LeftColumn, LocationTitle, Filters, VehicleEquipment, VehicleType, RightColumn, SearchButton } from './CatalogPage.styled';

const CatalogPage = () => {
  const [ setSelectedLocation] = useState('');

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    console.log("Selected Location:", location);
  };

  return (
    <CatalogWrapper className="container">
      <LeftColumn>
        <LocationTitle>Location</LocationTitle>
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
        {/* Здесь вы можете добавить компоненты для отображения карточек товаров */}
      </RightColumn>
    </CatalogWrapper>
  );
};

export default CatalogPage;
