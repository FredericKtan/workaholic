import React from 'react';
import PropTypes from 'prop-types';

const UIHorizontalLayout = ({ reversed, children }) => {
  const styles = {
    view: {
      display: 'flex',
      flex: '1',
    },
    reversed: {
      flexDirection: reversed ? 'row-reverse' : 'row',
    },
  };

  return <div style={{ ...styles.view, ...styles.reversed }}>{children}</div>;
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
