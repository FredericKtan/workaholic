import React from 'react';

const styles = {
  view: {
    display: 'flex',
    height: '20px',
    width: '20px',
    borderRadius: '20px',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const MenuIcon = () => (
  <span style={{ ...styles.view }}>A</span>
);

export default MenuIcon;

