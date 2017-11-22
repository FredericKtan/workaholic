// Modules
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

// Reducer
import rootReducer from './reducers/index';

// Root store
const configureStore = () => {
  const middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  );
};

export default configureStore;
