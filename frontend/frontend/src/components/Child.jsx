import React from 'react';
import Grandchild from './Grandchild';

const Child = ({ theme }) => {
  return <Grandchild theme={theme} />;
};

export default Child;

