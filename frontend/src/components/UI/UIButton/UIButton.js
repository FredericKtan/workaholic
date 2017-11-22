import React from 'react';
import PropTypes from 'prop-types';

import './UIButton.css';

const UIButton = ({ text, onClick }) => (
  <button className="ui-button" onClick={onClick}>
    {text}
  </button>
);

UIButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

UIButton.defaultProps = {
  text: '',
  onClick: () => ('button'),
};

export default UIButton;
