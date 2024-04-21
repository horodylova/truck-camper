import { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const Location = ({ onLocationChange }) => {
  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    
  ];

  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
    onLocationChange(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const filteredCities = inputLength === 0 ? [] : cities.filter(city =>
      city.toLowerCase().slice(0, inputLength) === inputValue
    );

    setSuggestions(filteredCities);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: 'Enter location',
    value,
    onChange: onChange
  };

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion}
    </div>
  );

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={(suggestion) => suggestion}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default Location;
