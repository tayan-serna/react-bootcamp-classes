import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ handleChange }) => {
  return (
    <div className="search-container">
      <input className="search-input" onChange={handleChange} />
      <span role="img" aria-label="search" className="search-button">
        🔍
      </span>
    </div>
  );
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Input;
