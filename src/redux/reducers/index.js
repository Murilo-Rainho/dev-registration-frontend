import { combineReducers } from "redux";

import levelReducer from './levelReducer'
import devReducer from './devReducer'

const rootReducers = combineReducers({ levelReducer, devReducer });

export default rootReducers;
