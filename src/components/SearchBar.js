import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarButtonsToAppearsForms,
  SearchBarFilters,
} from '.';
import { useSelector } from 'react-redux';

function SearchBar({ devOrLevel }) {
  const {
    whichButtonIsActive,
  } = useSelector(state => state[`${devOrLevel}Reducer`]);

  return (
    <div>
      { (whichButtonIsActive === 'show' || whichButtonIsActive === 'remove') && (
        <SearchBarFilters devOrLevel={ devOrLevel } />
      ) }
      <SearchBarButtonsToAppearsForms
        devOrLevel={ devOrLevel }
      />
    </div>
  );
}

SearchBar.propTypes = {
  devOrLevel: PropTypes.string.isRequired,
};

export default SearchBar;
