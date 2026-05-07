import React, { useCallback, useState } from 'react';
//important
function CallbackExample() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  
  return <button onClick={handleClick}>Click Me {count}</button>;
}

export default CallbackExample;

