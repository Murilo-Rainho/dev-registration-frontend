import React, { useState } from 'react';
import SearchBarFilters from './SearchBarFilters';
import PropTypes from 'prop-types';
import SearchBarButtonsToAppearsForms from './SearchBarButtonsToAppearsForms';

function SearchBar({ devOrLevel }) {
  const [renderRegisterEditOrRemoveForm,
    setRenderRegisterEditOrRemoveForm] = useState('show');

  return (
    <div>
      { (renderRegisterEditOrRemoveForm === 'show') && (
        <SearchBarFilters devOrLevel={ devOrLevel } />
      ) }
      <SearchBarButtonsToAppearsForms
        renderRegisterEditOrRemoveForm={ renderRegisterEditOrRemoveForm }
        setRenderRegisterEditOrRemoveForm={ setRenderRegisterEditOrRemoveForm }
        devOrLevel={ devOrLevel }
      />
    </div>
  );
}

SearchBar.propTypes = {
  devOrLevel: PropTypes.string.isRequired,
};

export default SearchBar;
