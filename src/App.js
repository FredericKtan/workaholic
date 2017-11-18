import React from 'react';
import './App.css';

import Layout from './components/UI/UILayout';

const App = () => (
  <div className="app">
    <header className="header"><h1>Workaholic</h1></header>
    <Layout reversed>
      <form>
        <input type="text" placeholder="message" />
        <input type="submit" value="send" />
      </form>
      <Layout>
        <ul>
          <li>Message 1</li>
          <li>Message 2</li>
          <li>Message 3</li>
          <li>Message 4</li>
          <li>Message 5</li>
        </ul>
      </Layout>
    </Layout>
  </div>
);

export default App;
