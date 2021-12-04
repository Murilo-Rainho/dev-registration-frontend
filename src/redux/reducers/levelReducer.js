import {
  WHICH_BUTTON_IS_ACTIVE,
  FETCH_REQUEST_LEVELS,
} from '../actions';

const INITIAL_STATE = {
  whichButtonIsActive: 'show',
  allLevels: {},
};

// Always use actions only with keys type (for checking)
// and payload (with information), to avoid errors.

const levelReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case WHICH_BUTTON_IS_ACTIVE:
      return { ...state, whichButtonIsActive: payload };

    case FETCH_REQUEST_LEVELS:
      return { ...state, allLevels: payload };

    default:
      return state;
  }
};

export default levelReducer;
