import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FETCH_REQUEST_LEVELS } from '../redux/actions';

function LevelCard({ levelInfo: { id, level, devTotal } }) {
  const {
    whichButtonIsActive,
  } = useSelector(state => state.levelReducer);
  const notify = (type, message = '') => toast[type](message, {
    theme: "dark",
  });
  const dispatch = useDispatch();

  const deleteLevel = async (levelId) => {
    try {
      const URL = `http://localhost:8080/level/${levelId}`;
      const erro = await fetch(URL, { method: 'DELETE' });
      if (erro.ok) {
        notify('success', 'Level has been deleted');
        const fetchPromise = await fetch('http://localhost:8080/level');
        const fetchJson = await fetchPromise.json();
        dispatch({ type: FETCH_REQUEST_LEVELS, payload: fetchJson });
      }
      else {
        if (erro.status === 409) notify(
          'error', 'This level cannot be deleted as a developer is linked to it'
        );
        else notify('error', 'Has no level to be deleted');
      }
    } catch (error) {
      console.log(error);
      notify('error', error.message);
    }
  };

  return (
    <li>
      <h3>Level Id: { id }</h3>
      <h3>Name: { level }</h3>
      <h3>Total of Devs With This Level: { devTotal }</h3>
      { (whichButtonIsActive === 'remove') && (
        <>
          <button type="button" onClick={ () => deleteLevel(id) }>
            Delete Level
          </button>
        </>
      ) }
    </li>
  );
}

LevelCard.propTypes = {
  levelInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    devTotal: PropTypes.number.isRequired,
  }).isRequired,
};

export default LevelCard;
