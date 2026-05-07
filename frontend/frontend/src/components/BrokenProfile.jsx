import React from 'react';

const BrokenProfile = () => {
  const user = null;

  return (
    <div>
      <h2>User Profile</h2>
      <p>{user?.name || "No user data"}</p>
    </div>
  );
};

export default BrokenProfile;

