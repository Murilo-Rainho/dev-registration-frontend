import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GenderInputs } from '.';

import { notify, URL, ageCalculator } from '../helpers';

function RegisterDevForm() {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [level, setLevel] = useState(0);
  const [gender, setGender] = useState('F');
  const [birthdayDate, setBirthdayDate] = useState(new Date());

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const fetchBody = {
        birthday_date: `${birthdayDate.getFullYear()}-${birthdayDate.getMonth() + 1}-${birthdayDate.getDate()}`,
        gender,
        name,
        age: ageCalculator(birthdayDate, new Date()),
        hobby,
        level,
      };
      await fetch(`${URL}/dev`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fetchBody),
      });
      notify('success', 'Dev has been registered!');
    } catch (error) {
      console.log(error);
      notify('error', error.message || 'Unexpected error');
    }
  }

  return (
    <form onSubmit={ submitForm }>
      <label>
        Name:
        <input
          required
          placeholder="Example Mc'Donald"
          type="text"
          maxLength="100"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
      </label>
      <GenderInputs setGender={ setGender } />
      <label>
        Birthday Date:
        <DatePicker
          required={ true }
          dateFormat="yyyy/MM/dd"
          selected={ birthdayDate }
          onChange={ (date) => setBirthdayDate(date) }
        />
      </label>
      <label>
        Hobby:
        <input
          required
          placeholder="I like to play video games!"
          type="text"
          maxLength="100"
          value={ hobby }
          onChange={ ({ target: { value } }) => setHobby(value) }
        />
      </label>
      <label>
        Level Id:
        <input
          onChange={ ({ target: { value } }) => setLevel(value) }
          type="number"
          required
        />
      </label>
      <button type="submit">
        Register Dev
      </button>
    </form>
  );
}

// RegisterDevForm.propTypes = {

// };

export default RegisterDevForm;
