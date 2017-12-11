import React from 'react';
import PropTypes from 'prop-types';
import { KawaiiPlanet } from 'react-kawaii';

// const styles = {
//   view: {
//     display: 'flex',
//     height: '50px',
//     width: '50px',
//     borderRadius: '50px',
//     backgroundColor: 'blue',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// };

const MenuIcon = ({ mood }) => (
  <KawaiiPlanet size={50} mood={mood} color="#FDA7DC" />
);

MenuIcon.propTypes = {
  mood: PropTypes.string,
};

MenuIcon.defaultProps = {
  mood: 'happy',
};

export default MenuIcon;

