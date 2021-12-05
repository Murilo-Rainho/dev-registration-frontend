import React from 'react';
import PropTypes from 'prop-types';

function GenderInputs({ setGender, devGender }) {
  return (
    <>
      <h3>Gender:</h3>
        <label>
          Female
          <input
            defaultChecked={ (devGender === 'F') }
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
            defaultChecked={ (devGender === 'M') }
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
            defaultChecked={ (devGender === 'L') }
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
            defaultChecked={ (devGender === 'G') }
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
            defaultChecked={ (devGender === 'B') }
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
            defaultChecked={ (devGender === 'T') }
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
            defaultChecked={ (devGender === 'Q') }
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
            defaultChecked={ (devGender === '+') }
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
  devGender: PropTypes.string,
};

export default GenderInputs;

