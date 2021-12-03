import React from 'react';
import {
  ListDevsOrLevels,
  SearchBar,
  Header,
} from '../components';
// import PropTypes from 'prop-types';

function ListLevels() {
  return (
    <div>
      <Header />
      <SearchBar devOrLevel="Level" />
      <ListDevsOrLevels devOrLevel="level" />
    </div>
  );
}

// ListLevels.propTypes = {

// };

export default ListLevels;
