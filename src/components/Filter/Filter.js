import React from 'react';
import css from './Filter.module.css';

const Filter = props => {
  const { value, onChange } = props;
  return (
    <label className={css.label}>
      Find contacs by name
      <input
        className={css.input}
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
