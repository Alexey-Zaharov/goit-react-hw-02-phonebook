import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onFilter }) => {
  return (
    <div className={css.filterContainer}>
      <label>
        Serch
        <input
          className={css.filterInput}
          type="text"
          name="serch"
          onChange={onFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
