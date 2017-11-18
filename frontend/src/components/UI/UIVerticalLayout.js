import React from 'react';
import PropTypes from 'prop-types';

const UIVerticalLayout = ({ reversed, children }) => {
  const styles = {
    container: {
      display: 'flex',
      flex: '1',
    },
    reversed: {
      flexDirection: reversed ? 'column-reverse' : 'column',
    },
  };

  return <div style={{ ...styles.container, ...styles.reversed }}>{children}</div>;
};

UIVerticalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  reversed: PropTypes.bool,
};

UIVerticalLayout.defaultProps = {
  children: null,
  reversed: false,
};

export default UIVerticalLayout;
