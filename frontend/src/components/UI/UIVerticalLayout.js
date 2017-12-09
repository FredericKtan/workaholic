import React from 'react';
import PropTypes from 'prop-types';

const UIVerticalLayout = ({ reversed, children, ratio }) => {
  const styles = {
    view: {
      display: 'flex',
      flex: ratio,
    },
    reversed: {
      flexDirection: reversed ? 'column-reverse' : 'column',
    },
  };

  return <div style={{ ...styles.view, ...styles.reversed }}>{children}</div>;
};

UIVerticalLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  reversed: PropTypes.bool,
  ratio: PropTypes.string,
};

UIVerticalLayout.defaultProps = {
  ratio: '1',
  children: null,
  reversed: false,
};

export default UIVerticalLayout;
