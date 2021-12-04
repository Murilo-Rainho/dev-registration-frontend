import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { WHICH_BUTTON_IS_ACTIVE } from '../redux/actions';

function SearchBarButtonsToAppearsForms({
  devOrLevel,
}) {
  const dispatch = useDispatch();
  const {
    whichButtonIsActive,
  } = useSelector(state => state[`${devOrLevel}Reducer`]);

  return (
    <section>
      { (whichButtonIsActive !== 'show') && (
        <button
          type="button"
          onClick={ () => dispatch({ type: WHICH_BUTTON_IS_ACTIVE, payload: 'show' }) }
        >
          Show {devOrLevel}s
        </button>
      ) }
      { (whichButtonIsActive !== 'register') && (
        <button
          type="button"
          onClick={ () => dispatch({ type: WHICH_BUTTON_IS_ACTIVE, payload: 'register' }) }
        >
          Register {devOrLevel}
        </button>
      ) }
      { (whichButtonIsActive !== 'edit') && (
        <button
          type="button"
          onClick={ () => dispatch({ type: WHICH_BUTTON_IS_ACTIVE, payload: 'edit' }) }
        >
          Edit {devOrLevel}
        </button>
      ) }
      { (whichButtonIsActive !== 'remove') && (
        <button
          type="button"
          onClick={ () => dispatch({ type: WHICH_BUTTON_IS_ACTIVE, payload: 'remove' }) }
        >
          Remove {devOrLevel}
        </button>
      ) }
    </section>
  );
}

SearchBarButtonsToAppearsForms.propTypes = {
  devOrLevel: PropTypes.string.isRequired,
};

export default SearchBarButtonsToAppearsForms;
