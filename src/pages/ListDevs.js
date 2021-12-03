import React from 'react';
import {
  SearchBar,
  Header,
  ListDevsOrLevels,
} from '../components';
// import PropTypes from 'prop-types';

function ListDevs() {
  return (
    <div>
      <Header />
      <SearchBar devOrLevel="Dev" />
      <ListDevsOrLevels devOrLevel="dev" />
    </div>
  );
}

// ListDevs.propTypes = {

// };

export default ListDevs;

