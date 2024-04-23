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
  VehicleTypeTitle,
  VehicleList,
  RightColumn,
  SearchButton,
} from './CatalogPage.styled';
import Location from '../../components/Location/Location';
import { ReactComponent as TV } from '../../Icons/Big icons/TV.svg';
import { ReactComponent as Gear } from '../../Icons/Big icons/Gear.svg';
import { ReactComponent as Wind} from '../../Icons/Big icons/wind.svg';
import { ReactComponent as Shower } from '../../Icons/Big icons/Shower.svg';
import { ReactComponent as Food } from '../../Icons/Big icons/Food.svg';

import {ReactComponent as Van} from '../../Icons/Big icons/Van.svg';
import {ReactComponent as Alcove} from '../../Icons/Big icons/alcove.svg';
import {ReactComponent as Integrated} from '../../Icons/Big icons/integrated.svg';





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
          
            <EquipmentItemSingle style={{ paddingLeft: "40px", paddingRight: "40px" }}>
            <Wind width="32" height="32"/>
            <EquipmentText>AC</EquipmentText>
            </EquipmentItemSingle>
          </EquipmentItem>
          <EquipmentItem>
            <EquipmentItemSingle style={{ paddingLeft: "16px", paddingRight: "16px" }}>
            <Gear width="32" height="32" />
            <EquipmentText>Automatic</EquipmentText>
            </EquipmentItemSingle>
          </EquipmentItem>
          <EquipmentItem>
          <EquipmentItemSingle style={{ paddingLeft: "27px", paddingRight: "27px" }}>
            <Food width="32" height="32"/>
            <EquipmentText>Kitchen</EquipmentText>
            </EquipmentItemSingle>
          </EquipmentItem>
          <EquipmentItem>
            <EquipmentItemSingle style={{ paddingLeft: "40px", paddingRight: "40px" }}>
            <TV width="32" height="32"/>
              <EquipmentText>TV</EquipmentText>
            </EquipmentItemSingle>
          </EquipmentItem>
          <EquipmentItem>
          <EquipmentItemSingle style={{ paddingLeft: "12px", paddingRight: "12px" }}>
            <Shower width="32" height="32"/>
            <EquipmentText>Shower/WC</EquipmentText>
            </EquipmentItemSingle>
          </EquipmentItem>
        </EquipmentList>
        <VehicleTypeTitle>Vehicle Type</VehicleTypeTitle>
            <VehicleList>
            <EquipmentItem>
          
            <EquipmentItemSingle style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <Van width="40" height="28"/>
            <EquipmentText>Van</EquipmentText>
            </EquipmentItemSingle>
          </EquipmentItem>
          <EquipmentItem>
          
          <EquipmentItemSingle style={{ paddingLeft: "24px", paddingRight: "24px" }}>
          <Integrated width="40" height="28"/>
          <EquipmentText>Fully<br/>Integrated</EquipmentText>
          </EquipmentItemSingle>
        </EquipmentItem>
        <EquipmentItem>
          
          <EquipmentItemSingle style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <Alcove width="40" height="28"/>
          <EquipmentText>Alcove</EquipmentText>
          </EquipmentItemSingle>
        </EquipmentItem>
          </VehicleList>

        <SearchButton>Search</SearchButton>
      </LeftColumn>
      <RightColumn>
        {/* Здесь вы можете добавить компоненты для отображения карточек товаров */}
      </RightColumn>
    </CatalogWrapper>
  );
};

export default CatalogPage;
