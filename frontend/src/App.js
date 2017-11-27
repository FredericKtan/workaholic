// Modules
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { TweenLite } from 'gsap';
import './App.css';

// Actions
// import { createMessage } from './actions/message';

// Developer component
import DeveloperIndicator from './components/Developer/DeveloperIndicator';

// Component
import UIHorizontalLayout from './components/UI/UIHorizontalLayout';
import UIVerticalLayout from './components/UI/UIVerticalLayout';

// Pages
import AboutPage from './routes/AboutPage';
import HomePage from './routes/HomePage';
import MessagesPage from './routes/MessagesPage';
import UsersPage from './routes/UsersPage';

const getElements = items => (
  items.map((item, key) => (
    <li key={item}>Element {key}</li>
  ))
);

const navigationItems = [
  { route: '/', text: 'Home' },
  { route: '/messages', text: 'Messages' },
  { route: '/users', text: 'Users' },
  { route: '/about', text: 'About' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideBarIsOpen: true,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    // this.props.store.dispatch(createMessage('Hello world'));

    TweenLite.to(this.sideBar, 1, {
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
        overflowY: 'hidden',
        backgroundColor: '#050505',
        color: '#fafafa',
      },
    };

    return (
      <div className="app">
        <UIVerticalLayout>
          <header className="header">
            <span>FM</span>
            <h1>Workaholic</h1>
            <button onClick={this.handleOnClick}>Press me !</button>
          </header>
          <UIHorizontalLayout>
            <div
              ref={(ref) => { this.sideBar = ref; }}
              style={{ ...styles.sideBar }}
            >
              <h2>Menu</h2>
              <hr />
              <ul>
                {getElements(['a', 'b', 'c'])}
              </ul>
            </div>
            <UIVerticalLayout>
              <UIVerticalLayout reversed>
                <form>
                  <UIHorizontalLayout>
                    <input type="text" placeholder="message" />
                    <input type="submit" value="send" />
                  </UIHorizontalLayout>
                </form>
                <UIVerticalLayout>
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/Messages" component={MessagesPage} />
                    <Route exact path="/Users" component={UsersPage} />
                    <Route exact path="/About" component={AboutPage} />
                  </Switch>
                </UIVerticalLayout>
              </UIVerticalLayout>
            </UIVerticalLayout>
          </UIHorizontalLayout>
        </UIVerticalLayout>
        { process.env.NODE_ENV ? <DeveloperIndicator /> : null }
      </div>
    );
  }
}

App.propTypes = {
  // store: PropTypes.object,
};

App.defaultProps = {
  // store: {},
};

export default App;
