import React from 'react';
import PropTypes from 'prop-types';

const MenuList = ({ children }) => {
  const styles = {
    view: {
      display: 'flex',
      flexDirection: 'column',
      listStyleType: 'none',
      padding: '0px',
      margin: '0px',
    },
  };

  return (
    <ul style={{ ...styles.view }}>
      { children }
    </ul>
  );
};

MenuList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

MenuList.defaultProps = {
  children: null,
};

export default MenuList;
