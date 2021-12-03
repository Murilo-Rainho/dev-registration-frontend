import React from 'react';
import PropTypes from 'prop-types';

function SearchBarFilters({ devOrLevel }) {
  return (
    <section>
        <label>
          Search {devOrLevel}s:
          <input type="text" maxLength="100" />
        </label>
          <h4>Sort By:</h4>
        <label>
          Ascending
          <input type="radio" value="Asc" name="order" />
        </label>
        <label>
          Descending
          <input type="radio" value="Desc" name="order" />
        </label>
      </section>
  );
}

SearchBarFilters.propTypes = {
  devOrLevel: PropTypes.string.isRequired,
};

export default SearchBarFilters;
