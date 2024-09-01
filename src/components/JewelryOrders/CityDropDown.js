import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const CityDropdown = ({ getValue, row, column, table }) => {



  // State to keep track of the selected city
  const [selectedCity, setSelectedCity] = useState('Choose city');

  // Function to handle the selection of a city
  const handleSelect = (city) => {
      setSelectedCity(city);
      table.options.meta?.updateData(row.index, column.id, selectedCity);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
        {selectedCity}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSelect('London')}>London</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect('Paris')}>Paris</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect('Berlin')}>Berlin</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect('Rome')}>Rome</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect('Madrid')}>Madrid</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect('Amsterdam')}>Amsterdam</Dropdown.Item>
      </Dropdown.Menu>.
    </Dropdown>
  );
};

export default CityDropdown;