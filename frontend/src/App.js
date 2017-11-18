import React from 'react';
import './App.css';

const App = () => (
  <div className="app">
    <header className="header"><h1>Workaholic</h1></header>
    <div className="layout-column-reversed">
      <form>
        <input type="text" placeholder="message" />
        <input type="submit" value="send" />
      </form>
      <div className="layout-column">
        <ul>
          <li>Message 1</li>
          <li>Message 2</li>
          <li>Message 3</li>
          <li>Message 4</li>
          <li>Message 5</li>
        </ul>
      </div>
    </div>
  </div>
);

export default App;
