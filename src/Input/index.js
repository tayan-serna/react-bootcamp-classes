import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ handleChange, value }) => {
  return (
    <div className="search-container">
      <input className="search-input" onChange={handleChange} value={value} />
      <span role="img" aria-label="search" className="search-button">
        🔍
      </span>
    </div>
  );
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
