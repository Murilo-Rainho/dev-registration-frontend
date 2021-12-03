import React from 'react';
import { useSelector } from 'react-redux';
import {
  SearchBar,
  Header,
  ListDevsOrLevels,
} from '../components';
// import PropTypes from 'prop-types';

function ListDevs() {
  const {
    whichButtonIsActive,
  } = useSelector(state => state.levelReducer);

  return (
    <div>
      <Header />
      <SearchBar devOrLevel="dev" />
      { (whichButtonIsActive === 'show') && (
        <ListDevsOrLevels devOrLevel="dev" />
      ) }
    </div>
  );
}

// ListDevs.propTypes = {

// };

export default ListDevs;

