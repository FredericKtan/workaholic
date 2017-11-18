import React from 'react';
import './App.css';

import UIVerticalLayout from './components/UI/UIVerticalLayout';
import UIHorizontalLayout from './components/UI/UIHorizontalLayout';

import Message from './components/Message';

const App = () => (
  <div className="app">
    <header className="header"><h1>Workaholic</h1></header>
    <UIVerticalLayout reversed>
      <form>
        <UIHorizontalLayout>
          <input type="text" placeholder="message" />
          <input type="submit" value="send" />
        </UIHorizontalLayout>
      </form>
      <UIVerticalLayout>
        <ul>
          <li><Message text="Message 1" /></li>
          <li><Message text="Message 2" /></li>
          <li><Message text="Message 3" /></li>
          <li><Message text="Message 4" /></li>
          <li><Message text="Message 5" /></li>
        </ul>
      </UIVerticalLayout>
    </UIVerticalLayout>
  </div>
);

export default App;
