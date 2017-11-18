import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ reversed, children }) => {
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

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  reversed: PropTypes.bool,
};

Layout.defaultProps = {
  children: null,
  reversed: false,
};

export default Layout;
