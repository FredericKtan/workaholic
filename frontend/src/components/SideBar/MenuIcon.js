import React from 'react';

const styles = {
  view: {
    display: 'flex',
    height: '50px',
    width: '50px',
    borderRadius: '50px',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const MenuIcon = () => (
  <span style={{ ...styles.view }}>A</span>
);

export default MenuIcon;

