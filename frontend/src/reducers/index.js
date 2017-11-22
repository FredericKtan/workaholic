// Modules
import { combineReducers } from 'redux';

// Custom reducer
import messageReducer from './messageReducer';

// Combined reducer
const rootReducer = combineReducers({
  message: messageReducer,
});

export default rootReducer;
