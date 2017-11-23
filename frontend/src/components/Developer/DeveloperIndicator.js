import React from 'react';

const DeveloperIndicator = () => {
  const styles = {
    view: {
      position: 'fixed',
      right: '25px',
      bottom: '25px',
      margin: '0',
      padding: '10px',
      backgroundColor: '#DCE775',
    },
  };

  return (
    <p style={{ ...styles.view }}>
      Development
    </p>
  );
};

export default DeveloperIndicator;
