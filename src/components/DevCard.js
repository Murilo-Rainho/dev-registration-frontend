import React from 'react';
import PropTypes from 'prop-types';

function DevCard({ devInfo: {
  id,
  level,
  name,
  gender,
  birthday_date,
  age,
  hobby,
} }) {
  return (
    <li>
      <h3>{ id }</h3>
      <h3>{ level }</h3>
      <h3>{ name }</h3>
      <h3>{ gender }</h3>
      <h3>{ birthday_date }</h3>
      <h3>{ age }</h3>
      <h3>{ hobby }</h3>
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
