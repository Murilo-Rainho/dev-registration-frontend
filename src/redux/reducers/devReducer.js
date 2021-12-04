import {
  WHICH_BUTTON_IS_ACTIVE,
  FETCH_REQUEST_DEVS,
} from '../actions';

const INITIAL_STATE = {
  whichButtonIsActive: 'show',
  allDevs: {},
};

// Always use actions only with keys type (for checking)
// and payload (with information), to avoid errors.

const devReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case WHICH_BUTTON_IS_ACTIVE:
      return { ...state, whichButtonIsActive: payload };

    case FETCH_REQUEST_DEVS:
      return { ...state, allDevs: payload };

    default:
      return state;
  }
};

export default devReducer;
