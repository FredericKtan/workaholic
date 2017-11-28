/* global document */

// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// Custom modules
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore, { history } from './store';

// Custom components
import App from './App';

// Store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
