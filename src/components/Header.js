import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name }) => (
  <header>
    <h1>{name}</h1>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
