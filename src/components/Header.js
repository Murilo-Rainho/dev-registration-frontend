import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { capitalize } from '../helpers';

function Header({ title }) {
  return (
    <div>
      <h1>{ capitalize(title) }</h1>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/dev">About Devs</Link></li>
        <li><Link to="/level">About Levels</Link></li>
      </ul>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

