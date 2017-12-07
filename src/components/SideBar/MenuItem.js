import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UIContainer from '../UI/UIContainer';
import UIHorizontalLayout from '../UI/UIHorizontalLayout';
import UIVerticalLayout from '../UI/UIVerticalLayout';

import MenuIcon from './MenuIcon';

class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };

    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseLeave() {
    this.setState({
      isHovered: false,
    });
  }

  handleMouseEnter() {
    this.setState({
      isHovered: true,
    });
  }

  render() {
    const styles = {
      view: {
        display: 'flex',
        flex: '1',
        color: 'black',
        backgroundColor: this.state.isHovered ? 'green' : 'white',
      },
      title: {
        fontWeight: 'bold',
        color: 'black',
      },
      text: {
        color: 'black',
      },
    };

    return (
      <div
        style={{ ...styles.view }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
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
