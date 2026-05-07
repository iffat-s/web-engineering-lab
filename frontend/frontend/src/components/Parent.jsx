// src/components/Parent.js
import React from 'react';
import Child from './Child';

const Parent = () => {
  const theme = 'dark';
  return <Child theme={theme} />;
};

export default Parent;

