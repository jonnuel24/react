import React from 'react';
import Select from 'react-select';
import '../asset/styles/signup.css'

const countryOptions = [
  { value: 'usa', label: 'United States' },
  { value: 'canada', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  // Add more countries here...
];

function CountrySelector({ selectedCountry, onChange }) {
  const handleCountryChange = (selectedOption) => {
    // Handle the selected country here, e.g., update state
    onChange(selectedOption);
  };

  return (
    < >
      {/* <Select
        className="w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline country"
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countryOptions}
      /> */}

          <div className="col-md">
              <select className="form-select" id="floatingSelectGrid">
                <option selected>Open this select menu</option>
                <option value="1">Nigeria</option>
                <option value="2">Canada</option>
                <option value="3">England</option>
              </select>
          </div>
    </>
  );
}

export default CountrySelector;
