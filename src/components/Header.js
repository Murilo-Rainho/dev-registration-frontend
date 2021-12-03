import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function Header() {
  return (
    <div>
      <h1>Page's Title</h1>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/dev">About Devs</Link></li>
        <li><Link to="/level">About Levels</Link></li>
      </ul>
    </div>
  );
}

// Header.propTypes = {

// };

export default Header;

