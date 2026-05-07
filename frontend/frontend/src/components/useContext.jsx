import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function ContextExample() {
  const user = useContext(UserContext);

  return <div>Hello, {user.name}</div>;
}

function App() {
  const [user, setUser] = useState({ name: "John Doe" });

  const changeUserName = () => {
    setUser({ name: "Jane Doe" });  // Update user state
  };

  return (
    <UserContext.Provider value={user}>
      <ContextExample />
      <button onClick={changeUserName}>Change Name</button>
    </UserContext.Provider>
  );
}

export default App;

