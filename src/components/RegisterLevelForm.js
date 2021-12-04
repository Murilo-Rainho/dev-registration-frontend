import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { notify, URL } from '../helpers';

function RegisterLevelForm() {
  const [levelName, setLevelName] = useState('');

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const fetchPromise = await fetch(`${URL}/level`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ levelName }),
      });
      console.log(fetchPromise);
      notify('success', 'Level has been registered!');
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
        Register Level
      </button>
    </form>
  );
}

// RegisterLevelForm.propTypes = {

// };

export default RegisterLevelForm;
