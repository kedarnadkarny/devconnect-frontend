import React from 'react';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  name,
  value,
  error,
  onChange,
  options
}) => {
  const selectoptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div>
      <select
        style={{ display: "block" }}
        name={name}
        value={value}
        onChange={onChange}>
        {selectoptions}
      </select>
      {error}
    </div>
  )
}

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}

export default SelectListGroup;