// Modules
import { combineReducers } from 'redux';

// Custom reducer
import messageReducer from './messageReducer';
import routerReducer from './routerReducer';

// Combined reducer
const rootReducer = combineReducers({
  message: messageReducer,
  router: routerReducer,
});

export default rootReducer;
