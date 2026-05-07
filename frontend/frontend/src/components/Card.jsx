import React from 'react';

// This is a reusable Card component
const Card = ({ children }) => {
  return (
    <div style={{ border: '1px solid black', padding: '20px', margin: '20px' }}>
      <h3>Card Title</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;

