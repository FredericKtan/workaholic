import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ text }) => {
  const styles = {
    container: {
      backgroundColor: 'blue',
      borderRadius: '50px',
    },
  };

  return <p style={{ ...styles.container }}>{text}</p>;
};

Message.propTypes = {
  text: PropTypes.string,
};

Message.defaultProps = {
  text: '',
};

export default Message;
