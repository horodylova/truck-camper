import  { useState } from 'react';
import Autosuggest from 'react-autosuggest';

const Location = ({ onLocationChange }) => {
  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    // Другие города...
  ];

  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? cities : cities.filter(city =>
      city.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const getSuggestionValue = (suggestion) => suggestion;

  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion}
    </div>
  );

  const inputProps = {
    placeholder: 'Enter location',
    value,
    onChange: onChange,
    onFocus: () => setShowSuggestions(true),
    onBlur: () => setShowSuggestions(false)
  };

  return (
    <div>
      <Autosuggest
        suggestions={showSuggestions ? suggestions : []}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  );
};

export default Location;




