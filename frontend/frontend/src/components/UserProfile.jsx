import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(25);
  const [items, setItems] = useState(['apple', 'banana', 'orange']);
  const [user, setUser] = useState({ name: 'John', age: 25 });

  // Function to handle name change
  const handleNameChange = (event) => {
    setName(event.target.value); // Updates the name state
  };

  // Function to add an item to the items list
  const addItem = () => {
    setItems([...items, 'grape']); // Adds 'grape' to the items array
  };

  // Function to update user information
  const updateUser = () => {
    setUser({ name: 'Jane', age: 30 }); // Updates user's name and age
  };

  return (
    <div>
      <h1>{name} is {age} years old</h1>
      
      {/* Input field to change name */}
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange} 
      />
      
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
      <button onClick={addItem}>Add Item</button>
      <button onClick={updateUser}>Change User Info</button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>User Info:</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserProfile;