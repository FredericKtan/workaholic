// Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';
import './App.css';

// Actions
import { createMessage } from './actions/message';

// Developer component
import DeveloperIndicator from './components/Developer/DeveloperIndicator';

// Component
import UIHorizontalLayout from './components/UI/UIHorizontalLayout';
import UIVerticalLayout from './components/UI/UIVerticalLayout';
import UISideBar from './components/UI/UISideBar';

import Message from './components/Message';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideBarIsOpen: true,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleOnClick() {
    this.props.store.dispatch(createMessage('Hello world'));
  }

  toggle() {
    console.log(this.sidebar);

    TweenLite.to(this.sidebar, 1, {
      width: this.state.sideBarIsOpen ? '0px' : '500px',
      opacity: this.state.sideBarIsOpen ? '0' : '1',
      onComplete: () => {},
    });

    this.setState({
      sideBarIsOpen: !this.state.sideBarIsOpen,
    });
  }

  render() {
    const styles = {
      sideBar: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '500px',
        opacity: '1',
      },
    };

    return (
      <div className="app">
        <UIHorizontalLayout>
          <UISideBar
            width="500px"
          />
          <UIVerticalLayout>
            <header className="header">
              <span>FM</span>
              <h1>Workaholic</h1>
              <button onClick={this.toggle}>Press me !</button>
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
          </UIVerticalLayout>
        </UIHorizontalLayout>
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
