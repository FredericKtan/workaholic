import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UIContainer from '../UI/UIContainer';
import UIHorizontalLayout from '../UI/UIHorizontalLayout';
import UIVerticalLayout from '../UI/UIVerticalLayout';

import MenuIcon from './MenuIcon';

const styles = {
  view: {
    display: 'flex',
    flex: '1',
    color: 'black',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    color: 'black',
  },
};

class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div style={{ ...styles.view }}>
        <UIContainer>
          <UIHorizontalLayout centered>
            <MenuIcon />
            <UIVerticalLayout>
              <p style={{ ...styles.title }}>{ this.props.title }</p>
              <p style={{ ...styles.text }}>{ this.props.text }</p>
            </UIVerticalLayout>
          </UIHorizontalLayout>
        </UIContainer>
      </div>
    );
  }
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
