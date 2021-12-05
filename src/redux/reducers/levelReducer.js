import {
  WHICH_BUTTON_IS_ACTIVE,
  FETCH_REQUEST_LEVELS,
  EDITOR_LEVEL_ENABLE,
} from '../actions';

const INITIAL_STATE = {
  whichButtonIsActive: 'show',
  allLevels: {},
  editLevelEnable: false,
  levelEditInfo: {},
};

// Always use actions only with keys type (for checking)
// and payload (with information), to avoid errors.

const levelReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case WHICH_BUTTON_IS_ACTIVE:
      return { ...state, whichButtonIsActive: payload };

    case FETCH_REQUEST_LEVELS:
      return { ...state, allLevels: payload };

    case EDITOR_LEVEL_ENABLE:
      return { ...state, editLevelEnable: !state.editLevelEnable, levelEditInfo: payload };

    default:
      return state;
  }
};

export default levelReducer;
