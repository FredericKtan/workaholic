import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './UIButton.css';

class UIButton extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <button className="UIButton">
        { this.props.text }
      </button>
    );
  }
}

UIButton.propTypes = {
  text: PropTypes.string,
};

UIButton.defaultProps = {
  text: '',
};

export default UIButton;
