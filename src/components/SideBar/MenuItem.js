import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';

import UIHorizontalLayout from '../UI/UIHorizontalLayout';
import UIVerticalLayout from '../UI/UIVerticalLayout';

import MenuIcon from './MenuIcon';

class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.hoverAnimation = this.hoverAnimation.bind(this);
  }

  hoverAnimation() {
    TweenLite.to(this.item, 0.3, {
      backgroundColor: this.state.isHovered ? 'rgba(110, 110, 200, 1)' : 'white',
      color: this.state.isHovered ? 'rgba(250, 250, 250, 1)' : 'rgba(176, 176, 176, 1)',
      onComplete: () => {},
    });
  }

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered,
    }, () => {
      this.hoverAnimation();
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
        backgroundColor: this.props.active ? 'rgba(110, 110, 200, 1)' : 'white',
        display: 'flex',
        flex: '1',
        color: 'rgba(176, 176, 176, 1)',
      },
      title: {
        fontWeight: 'bold',
        marginTop: '15px',
        marginBottom: '5px',
      },
      text: {
        marginTop: '5px',
        marginBottom: '15px',
      },
    };

    return (
      <div
        ref={(ref) => { this.item = ref; }}
        style={{ ...styles.view }}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <UIHorizontalLayout centered>
          <UIHorizontalLayout centered ratio="1">
            <MenuIcon />
          </UIHorizontalLayout>
          <UIVerticalLayout ratio="2">
            <p style={{ ...styles.title }}>{ this.props.title }</p>
            <p style={{ ...styles.text }}>{ this.props.text }</p>
          </UIVerticalLayout>
        </UIHorizontalLayout>
      </div>
    );
  }
}

MenuItem.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  active: false,
};

export default MenuItem;
