import React from 'react';
import PropTypes from 'prop-types';

const UIHorizontalLayout = ({ centered, children, reversed }) => {
  const styles = {
    view: {
      display: 'flex',
      flex: '1',
    },
    reversed: {
      flexDirection: reversed ? 'row-reverse' : 'row',
    },
    centered: {
      justifyContent: centered ? 'center' : undefined,
      alignItems: centered ? 'center' : undefined,
    },
  };

  return <div style={{ ...styles.view, ...styles.reversed, ...styles.centered }}>{children}</div>;
};

UIHorizontalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  reversed: PropTypes.bool,
  centered: PropTypes.bool,
};

UIHorizontalLayout.defaultProps = {
  children: null,
  reversed: false,
  centered: false,
};

export default UIHorizontalLayout;
