import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { EDITOR_DEV_ENABLE, EDITOR_LEVEL_ENABLE, WHICH_BUTTON_IS_ACTIVE } from '../../redux/actions';
import { capitalize } from '../../helpers';

function SearchBarButtonsToAppearsForms({
  devOrLevel,
}) {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state[`${devOrLevel}Reducer`]);
  const { whichButtonIsActive } = selector;

  return (
    <section>
      { (whichButtonIsActive !== 'show' && !selector[`edit${capitalize(devOrLevel)}Enable`]) && (
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
      { (selector[`edit${capitalize(devOrLevel)}Enable`]) && (
        <button type="button" onClick={ () => {
          dispatch({ type: EDITOR_DEV_ENABLE, payload: {} });
          dispatch({ type: EDITOR_LEVEL_ENABLE, payload: {} });
          dispatch({ type: WHICH_BUTTON_IS_ACTIVE, payload: 'show' });
        } }>
          Cancel edition
        </button>
      ) }
    </section>
  );
}

SearchBarButtonsToAppearsForms.propTypes = {
  devOrLevel: PropTypes.string.isRequired,
};

export default SearchBarButtonsToAppearsForms;
