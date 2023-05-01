import React from 'react';

const Filter = props => {
  const { value, onChange } = props;
  return (
    <label>
      Find contacs by name
      <input
        type="text"
        name="filter"
        title="Find contacs by name"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
