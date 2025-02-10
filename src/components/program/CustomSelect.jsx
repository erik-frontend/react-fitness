import React, { useState } from "react";
import Select from "react-select";
import { options } from "../../data/programData";

const CustomSelect = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <Select
      className="custom-select"
      classNamePrefix="react-select"
      options={options}
      defaultValue={options[0]}
      onMenuOpen={toggleDropdown}
      onMenuClose={toggleDropdown}
      components={{
        DropdownIndicator: () => (
          <div
            style={{
              width: '0',
              height: '0',
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '10px solid #333',
              display: 'inline-block',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        ),
      }}
    />
  );
};

export default CustomSelect;
