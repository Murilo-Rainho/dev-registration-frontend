import React from 'react';
import PropTypes from 'prop-types';

function LevelCard({ levelInfo: { id, level, devTotal } }) {
  return (
    <li>
      <h3>{ id }</h3>
      <h3>{ level }</h3>
      <h3>{ devTotal }</h3>
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
