import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DevCard, LevelCard } from '.';

function ListDevsOrLevels({ devOrLevel }) {
  const [devOrLevelList, setDevOrLevelList] = useState([]);

  useEffect(() => {
    const fetchRequest = async () => {
      const URL = `http://localhost:8080/${devOrLevel}`;
      const fetchPromise = await fetch(URL);
      const fetchJson = await fetchPromise.json();
      setDevOrLevelList(() => fetchJson);
    }
    fetchRequest();
  }, [devOrLevel]);

  return (
    <ul>
      { (devOrLevelList.length !== 0) && (
        (devOrLevel === 'dev') ?
          devOrLevelList.results.map((devInfo) => (
            <DevCard key={ `${devInfo.id}-${devInfo.level}` } devInfo={ devInfo } />
          )) :
          devOrLevelList.results.map((levelInfo, index) => (
            <LevelCard key={ `${index}-${levelInfo.id}` } levelInfo={ levelInfo } />
          ))
      ) }
    </ul>
  );
}

ListDevsOrLevels.propTypes = {
  devOrLevel: PropTypes.string.isRequired,
};

export default ListDevsOrLevels;
