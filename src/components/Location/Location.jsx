import   { useState } from 'react';
import { LocationWrapper, Input, List, ListItem} from './Location.styled';

export const Location = ({ onLocationChange }) => {
  const [showList, setShowList] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
     
  ];

  const handleLocationSelection = (city) => {
    setSelectedCity(city);
    onLocationChange(city);
    setShowList(false);
  };

  return (
    <LocationWrapper>
      <Input
        type="text"
        placeholder="Kyiv"
        onFocus={() => setShowList(true)}
        onBlur={() => setShowList(false)}
        value={selectedCity}
        readOnly
      />
      {showList && (
        <List>
          {cities.map((city, index) => (
            <ListItem key={index} onMouseDown={() => handleLocationSelection(city)}>
              {city}
            </ListItem>
          ))}
        </List>
      )}
    </LocationWrapper>
  );
};

export default Location;