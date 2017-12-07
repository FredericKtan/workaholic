import React from 'react';
import PropTypes from 'prop-types';

const UIContainer = ({ children }) => {
  const styles = {
    view: {
      margin: '10px',
    },
  };

  return (
    <div style={{ ...styles.view }}>
      {children}
    </div>
  );
};

UIContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

UIContainer.defaultProps = {
  children: null,
};

export default UIContainer;
