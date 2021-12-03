import React from 'react';
import { useSelector } from 'react-redux';
import {
  ListDevsOrLevels,
  SearchBar,
  Header,
} from '../components';
// import PropTypes from 'prop-types';

function ListLevels() {
  const {
    whichButtonIsActive,
  } = useSelector(state => state.levelReducer);
  return (
    <div>
      <Header />
      <SearchBar devOrLevel="level" />
      { (whichButtonIsActive === 'show') && (
        <ListDevsOrLevels devOrLevel="level" />
      ) }
    </div>
  );
}

// ListLevels.propTypes = {

// };

export default ListLevels;
