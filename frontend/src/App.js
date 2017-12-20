// Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { TweenLite } from 'gsap';
import './App.css';

// Actions
import { createMessage } from './actions/message';

// Development component
import DeveloperIndicator from './components/Developer/DeveloperIndicator';

// Component
import MenuItem from './components/SideBar/MenuItem';
import MenuList from './components/SideBar/MenuList';
import UIHorizontalLayout from './components/UI/UIHorizontalLayout';
import UISeparator from './components/UI/UISeparator';
import UIVerticalLayout from './components/UI/UIVerticalLayout';

// Pages
import navigationItems from './routes';
import AboutPage from './routes/AboutPage';
import HomePage from './routes/HomePage';
import MessagesPage from './routes/MessagesPage';
import TrelloPage from './routes/TrelloPage';
import UsersPage from './routes/UsersPage';

const NavigationListComponent = navigationList => (
  navigationList.map(navigation => (
    <Link to={navigation.route} key={navigation.id} style={{ textDecoration: 'none' }}>
      <MenuItem title={navigation.text} text="Hello World !" mood={navigation.mood} />
    </Link>
  ))
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideBarIsOpen: true,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleToggleSideBar = this.handleToggleSideBar.bind(this);
  }

  handleOnClick() {
    this.props.dispatch(createMessage('Hello World !'));
  }

  handleToggleSideBar() {
    TweenLite.to(this.sideBar, 1, {
      width: this.state.sideBarIsOpen ? '0px' : '300px',
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
        width: '300px',
        opacity: '1',
        overflowY: 'hidden',
        color: '#fafafa',
        backgroundColor: 'white',
      },
      separator: {
        borderTop: '1px solid black',
      },
    };

    return (
      <div className="app">
        <UIHorizontalLayout>
          <UIHorizontalLayout>
            <div
              ref={(ref) => { this.sideBar = ref; }}
              style={{ ...styles.sideBar }}
            >
              <MenuItem title="Frederic MAMATH" text="Admin" />
              <UISeparator />
              <MenuList>
                {NavigationListComponent(navigationItems)}
              </MenuList>
              <UISeparator />
              <MenuItem title="Log out" />
            </div>
            <UIVerticalLayout>
              <header className="header">
                <span>FM</span>
                <h1>Workaholic</h1>
                <button onClick={this.handleToggleSideBar}>Press me !</button>
              </header>
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
                    <Route exact path="/Trello" component={TrelloPage} />
                  </Switch>
                </UIVerticalLayout>
              </UIVerticalLayout>
            </UIVerticalLayout>
          </UIHorizontalLayout>
        </UIHorizontalLayout>
        { process.env.NODE_ENV ? <DeveloperIndicator /> : null }
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect()(App));
