import React from 'react';
import PropTypes from 'prop-types';

const UIHorizontalLayout = ({
  centered,
  children,
  ratio,
  reversed,
}) => {
  const styles = {
    view: {
      display: 'flex',
      flex: ratio,
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
  ratio: PropTypes.string,
};

UIHorizontalLayout.defaultProps = {
  ratio: '1',
  children: null,
  reversed: false,
  centered: false,
};

export default UIHorizontalLayout;
