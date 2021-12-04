import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DevCard, LevelCard } from '.';
import { useDispatch, useSelector } from 'react-redux';

import { FETCH_REQUEST_DEVS, FETCH_REQUEST_LEVELS } from '../redux/actions';
import { capitalize, URL } from '../helpers';

function ListDevsOrLevels({ devOrLevel }) {
  const allDevsOrLevels = useSelector((state) => state[`${devOrLevel}Reducer`][`all${capitalize(devOrLevel)}s`])
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRequest = async () => {
      const FETCH_URL = `${URL}/${devOrLevel}`;
      const fetchPromise = await fetch(FETCH_URL);
      const fetchJson = await fetchPromise.json();
      const ACTION_TYPE = (devOrLevel === 'dev') ?
        FETCH_REQUEST_DEVS : FETCH_REQUEST_LEVELS;
      dispatch({ type: ACTION_TYPE, payload: fetchJson });
    }
    fetchRequest();
  }, [devOrLevel, dispatch]);

  const renderErrorMessageOrList = () => {
    if (allDevsOrLevels.message || !allDevsOrLevels.results) {
      return (<h1>{allDevsOrLevels.message || 'Some error occurs'}</h1>);
    } else {
      return (devOrLevel === 'dev') ?
      allDevsOrLevels.results.map((devInfo) => (
        <DevCard key={ `${devInfo.id}-${devInfo.level}` } devInfo={ devInfo } />
      )) :
      allDevsOrLevels.results.map((levelInfo, index) => (
        <LevelCard key={ `${index}-${levelInfo.id}` } levelInfo={ levelInfo } />
      ));
    }
  }

  return (
    <ul>
      { renderErrorMessageOrList() }
    </ul>
  );
}

ListDevsOrLevels.propTypes = {
  devOrLevel: PropTypes.string.isRequired,
};

export default ListDevsOrLevels;
