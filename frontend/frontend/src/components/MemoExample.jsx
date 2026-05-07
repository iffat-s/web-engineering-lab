import React, { useMemo, useState } from 'react';

function MemoExample() {
  const [number, setNumber] = useState(1);
  
  const expensiveComputation = useMemo(() => {
    console.log("Expensive computation running...");
    return number * 1000;
  }, [number]);
  
  return (
    <div>
      <p>{expensiveComputation}</p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
}

export default MemoExample;

//not important