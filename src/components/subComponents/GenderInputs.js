import React from 'react';
import PropTypes from 'prop-types';

function GenderInputs({ setGender }) {
  return (
    <>
      <h3>Gender:</h3>
        <label>
          Female
          <input
            required
            type="radio"
            name="gender"
            value="F"
            onClick={ ({ target: { value } }) => setGender(value) }
          />
        </label>
        <label>
          Male
          <input
            required
            type="radio"
            name="gender"
            value="M"
            onClick={ ({ target: { value } }) => setGender(value) }
          />
        </label>
        <label>
          Lesbian
          <input
            required
            type="radio"
            name="gender"
            value="L"
            onClick={ ({ target: { value } }) => setGender(value) }
          />
        </label>
        <label>
          Gay
          <input
            required
            type="radio"
            name="gender"
            value="G"
            onClick={ ({ target: { value } }) => setGender(value) }
          />
        </label>
        <label>
          Bisexual
          <input
            required
            type="radio"
            name="gender"
            value="B"
            onClick={ ({ target: { value } }) => setGender(value) }
          />
        </label>
        <label>
          Trans
          <input
            required
            type="radio"
            name="gender"
            value="T"
            onClick={ ({ target: { value } }) => setGender(value) }
          />
        </label>
        <label>
          Questioning
          <input
            required
            type="radio"
            name="gender"
            value="Q"
            onClick={ ({ target: { value } }) => setGender(value) }
          />
        </label>
        <label>
          + (Other)
          <input
            required
            type="radio"
            name="gender"
            value="+"
            onClick={ ({ target: { value } }) => setGender(value) }
          />
        </label>
    </>
  );
}

GenderInputs.propTypes = {
  setGender: PropTypes.func.isRequired,
};

export default GenderInputs;

