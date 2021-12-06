import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

import { FETCH_REQUEST_DEVS, EDITOR_DEV_ENABLE, WHICH_BUTTON_IS_ACTIVE } from '../../redux/actions';
import { notify } from '../../helpers';

function DevCard({ devInfo: {
  id,
  level,
  name,
  gender,
  birthday_date,
  age,
  hobby,
} }) {
  const dispatch = useDispatch();

  const deleteDev = async (devId) => {
    try {
      const URL = `${process.env.REACT_APP_BACKEND_URL}${devId}`;
      const { ok } = await fetch(URL, { method: 'DELETE' });
      if (ok) {
        notify('success', 'Dev has been deleted');
        const fetchPromise = await fetch('http://localhost:8080/dev');
        const fetchJson = await fetchPromise.json();
        dispatch({ type: FETCH_REQUEST_DEVS, payload: fetchJson });
      }
      else notify('error', 'Has no dev to be deleted');
    } catch (error) {
      console.log(error);
      notify('error', error.message);
    }
  };

  return (
    <li>
      <h3>Dev Id: { id }</h3>
      <h3>Name: { name }</h3>
      <h3>Gender: { gender }</h3>
      <h3>Birthday Date: { birthday_date }</h3>
      <h3>Age: { age }</h3>
      <h3>Hobby: { hobby }</h3>
      <h3>Level Id: { level }</h3>
      <button type="button" onClick={ () => deleteDev(id) }>
        Delete Dev
      </button>
      <button type="button" onClick={ () => {
        const payload = { id, level, name, gender, birthday_date, age, hobby };
        dispatch({ type: EDITOR_DEV_ENABLE, payload });
        dispatch({ type: WHICH_BUTTON_IS_ACTIVE, payload: 'register' });
      } }>
        Edit Dev
      </button>
    </li>
  );
}

DevCard.propTypes = {
  devInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    birthday_date: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hobby: PropTypes.string.isRequired,
  }).isRequired,
};

export default DevCard;
