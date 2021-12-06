import React from 'react';
import { Header } from '../components';
// import PropTypes from 'prop-types';

function Homepage() {
  return (
    <div>
      <Header title="homepage" />
      { console.log(process.env.REACT_APP_TEST_ENV) }
    </div>
  );
}

// Homepage.propTypes = {

// };

export default Homepage;

