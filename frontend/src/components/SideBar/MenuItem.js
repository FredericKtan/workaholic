import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap';

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

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.hoverAnimation = this.hoverAnimation.bind(this);
  }

  hoverAnimation() {
    TweenLite.to(this.item, 0.3, {
      backgroundColor: this.state.isHovered ? 'green' : 'white',
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
        backgroundColor: 'white',
        display: 'flex',
        flex: '1',
        color: 'black',
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
        ref={(ref) => { this.item = ref; }}
        style={{ ...styles.view }}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
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
