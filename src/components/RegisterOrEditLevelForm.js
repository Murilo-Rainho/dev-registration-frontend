import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import { notify } from '../helpers';
import { EDITOR_LEVEL_ENABLE, WHICH_BUTTON_IS_ACTIVE } from '../redux/actions';

function RegisterOrEditLevelForm() {
  const { editLevelEnable, levelEditInfo } = useSelector((state) => state.levelReducer);
  const dispatch = useDispatch();
  
  const [levelName, setLevelName] = useState(levelEditInfo.level || '');
  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const fetchUrl = (editLevelEnable) ? `${process.env.REACT_APP_BACKEND_URL}level/${levelEditInfo.id}` : `${process.env.REACT_APP_BACKEND_URL}level`;
      await fetch(fetchUrl, {
        method: (editLevelEnable) ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ levelName, level: levelName }),
      });
      notify('success', `Level has been ${(editLevelEnable) ? 'edited' : 'registered'}!`);
      dispatch({ type: WHICH_BUTTON_IS_ACTIVE, payload: 'show' });
      dispatch({ type: EDITOR_LEVEL_ENABLE, payload: {} });
    } catch (error) {
      console.log(error);
      notify('error', error.message || 'Unexpected error');
    }
  }

  return (
    <form onSubmit={ submitForm }>
      <label>
        Level Name:
        <input
          placeholder="Example II"
          type="text"
          maxLength="40"
          value={ levelName }
          onChange={ ({ target: { value } }) => setLevelName(value) }
        />
      </label>
      <button type="submit">
      { (editLevelEnable) ? 'Edit Level' : 'Register Level' }
      </button>
    </form>
  );
}

// RegisterOrEditLevelForm.propTypes = {

// };

export default RegisterOrEditLevelForm;
