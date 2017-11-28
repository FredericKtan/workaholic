/* global document */

// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Custom modules
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

// Custom components
import App from './App';

// Store
const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
