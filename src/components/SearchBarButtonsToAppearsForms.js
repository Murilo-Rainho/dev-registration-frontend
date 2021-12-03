import React from 'react';
import PropTypes from 'prop-types';

function SearchBarButtonsToAppearsForms({
  devOrLevel,
  renderRegisterEditOrRemoveForm,
  setRenderRegisterEditOrRemoveForm,
}) {
  return (
    <section>
      { (renderRegisterEditOrRemoveForm !== 'show') && (
        <button
          type="button"
          onClick={ () => setRenderRegisterEditOrRemoveForm('show') }
        >
          Show {devOrLevel}s
        </button>
      ) }
      { (renderRegisterEditOrRemoveForm !== 'register') && (
        <button
          type="button"
          onClick={ () => setRenderRegisterEditOrRemoveForm('register') }
        >
          Register {devOrLevel}
        </button>
      ) }
      { (renderRegisterEditOrRemoveForm !== 'edit') && (
        <button
          type="button"
          onClick={ () => setRenderRegisterEditOrRemoveForm('edit') }
        >
          Edit {devOrLevel}
        </button>
      ) }
      { (renderRegisterEditOrRemoveForm !== 'remove') && (
        <button
          type="button"
          onClick={ () => setRenderRegisterEditOrRemoveForm('remove') }
        >
          Remove {devOrLevel}
        </button>
      ) }
    </section>
  );
}

SearchBarButtonsToAppearsForms.propTypes = {
  devOrLevel: PropTypes.string.isRequired,
  renderRegisterEditOrRemoveForm: PropTypes.string.isRequired,
  setRenderRegisterEditOrRemoveForm: PropTypes.func.isRequired,
};

export default SearchBarButtonsToAppearsForms;
