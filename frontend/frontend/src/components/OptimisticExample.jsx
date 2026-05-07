import React, { useState } from 'react';

function OptimisticExample() {
  const [value, setValue] = useState("Click me");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setValue("Loading..."); 
    setLoading(true);

   
    setTimeout(() => {
      setValue("Clicked!");
      setLoading(false);
    }, 2000); // Simulating a 2-second delay
  };

  return (
    <button onClick={handleClick}>
      {loading ? "Loading..." : value}
    </button>
  );
}

export default OptimisticExample;


