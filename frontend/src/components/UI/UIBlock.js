import React from 'react';
import PropTypes from 'prop-types';

const UIBlock = ({ children }) => {
  const styles = {
    view: {
      backgroundColor: 'green',
    },
  };

  return (
    <div style={{ ...styles.view }}>
      {children}
    </div>
  );
};

UIBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

UIBlock.defaultProps = {
  children: null,
};

export default UIBlock;
