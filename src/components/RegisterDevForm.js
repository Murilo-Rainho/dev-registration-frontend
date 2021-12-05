import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { GenderInputs } from '.';

import { notify, URL, ageCalculator } from '../helpers';
import { EDITOR_DEV_ENABLE, WHICH_BUTTON_IS_ACTIVE } from '../redux/actions';

function RegisterDevForm() {
  const { editDevEnable, devEditInfo } = useSelector((state) => state.devReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState(devEditInfo.name || '');
  const [hobby, setHobby] = useState(devEditInfo.hobby || '');
  const [level, setLevel] = useState(devEditInfo.level || 0);
  const [gender, setGender] = useState(devEditInfo.gender || 'F');
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
      const fetchUrl = (editDevEnable) ? `${URL}/dev/${devEditInfo.id}` : `${URL}/dev`;
      await fetch(fetchUrl, {
        method: (editDevEnable) ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fetchBody),
      });
      notify('success', `Dev has been ${(editDevEnable) ? 'edited' : 'registered'}!`);
      dispatch({ type: WHICH_BUTTON_IS_ACTIVE, payload: 'show' });
      dispatch({ type: EDITOR_DEV_ENABLE, payload: {} });
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
      <GenderInputs setGender={ setGender } devGender={ devEditInfo.gender } />
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
          value={ level }
          onChange={ ({ target: { value } }) => setLevel(value) }
          type="number"
          required
        />
      </label>
      <button type="submit" >
        { (editDevEnable) ? 'Edit Dev' : 'Register Dev' }
      </button>
    </form>
  );
}

// RegisterDevForm.propTypes = {

// };

export default RegisterDevForm;
