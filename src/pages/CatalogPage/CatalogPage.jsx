import { useState } from 'react';
import {
  CatalogWrapper,
  LeftColumn,
  LocationTitle,
  Filters,
  VehicleEquipment,
  EquipmentList,
  EquipmentItem,
  EquipmentItemSingle,
  EquipmentText,
  VehicleType,
  RightColumn,
  SearchButton,
} from './CatalogPage.styled';
import Location from '../../components/Location/Location';
import { ReactComponent as TV } from '../../Icons/Big icons/TV.svg';
import { ReactComponent as Gear } from '../../Icons/Big icons/Gear.svg';



const CatalogPage = () => {
  const [, setSelectedLocation] = useState('');

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <CatalogWrapper className="container">
      <LeftColumn>
        <LocationTitle>Location</LocationTitle>
        <Location onLocationChange={handleLocationChange} />
        <Filters>Filters</Filters>
        <VehicleEquipment>Vehicle Equipment</VehicleEquipment>
        <EquipmentList>
          <EquipmentItem>
            <EquipmentItemSingle>
            <TV width="32" height="32"/>
              <EquipmentText>TV</EquipmentText>
            </EquipmentItemSingle>
          </EquipmentItem>
          <EquipmentItem>
            <EquipmentItemSingle>
            <Gear width="32" height="32" />
            <EquipmentText>Automatic</EquipmentText>
            </EquipmentItemSingle>
          </EquipmentItem>
          <EquipmentItem>
            <EquipmentItemSingle></EquipmentItemSingle>
          </EquipmentItem>
          <EquipmentItem>
            <EquipmentItemSingle></EquipmentItemSingle>
          </EquipmentItem>
          <EquipmentItem>
            <EquipmentItemSingle></EquipmentItemSingle>
          </EquipmentItem>
        </EquipmentList>
        <VehicleType>
          Vehicle Type
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
