import React from 'react';
import PropTypes from 'prop-types';

const UIHorizontalLayout = ({ reversed, children }) => {
  const styles = {
    container: {
      display: 'flex',
      flex: '1',
    },
    reversed: {
      flexDirection: reversed ? 'row-reverse' : 'row',
    },
  };

  return <div style={{ ...styles.container, ...styles.reversed }}>{children}</div>;
};

UIHorizontalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  reversed: PropTypes.bool,
};

UIHorizontalLayout.defaultProps = {
  children: null,
  reversed: false,
};

export default UIHorizontalLayout;
