// Modules
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Reducer
import rootReducer from './reducers/index';

// History
export const history = createHistory();

// Root store
const configureStore = () => {
  const middlewares = [];

  middlewares.push(routerMiddleware(history));
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  );
};

export default configureStore;
