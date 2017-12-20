// Modules
import { combineReducers } from 'redux';

// Custom reducer
import boardReducer from './boardReducer';
import boardsReducer from './boardsReducer';
import messageReducer from './messageReducer';
import routerReducer from './routerReducer';

// Combined reducer
const rootReducer = combineReducers({
  board: boardReducer,
  boards: boardsReducer,
  message: messageReducer,
  router: routerReducer,
});

export default rootReducer;
