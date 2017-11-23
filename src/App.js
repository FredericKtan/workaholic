// Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

// Actions
import { createMessage } from './actions/message';

// Developer component
import DeveloperIndicator from './components/Developer/DeveloperIndicator';

// Component
import UIHorizontalLayout from './components/UI/UIHorizontalLayout';
import UIVerticalLayout from './components/UI/UIVerticalLayout';

import Message from './components/Message';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.store.dispatch(createMessage('Hello world'));
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <span>FM</span>
          <h1>Workaholic</h1>
          <button onClick={this.handleOnClick}>Press me !</button>
        </header>
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
              <li><Message text={this.props.store.getState().message} /></li>
            </ul>
          </UIVerticalLayout>
        </UIVerticalLayout>
        { process.env.NODE_ENV ? <DeveloperIndicator /> : null }
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
};

App.defaultProps = {
  store: {},
};

export default App;
