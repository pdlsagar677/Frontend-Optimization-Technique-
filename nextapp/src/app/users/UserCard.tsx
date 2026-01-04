"use client";

import React from "react";

const UserCard = React.memo(({ user }: { user: any }) => {
  console.log("Rendered:", user.name);

  return (
    <div style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
      <h4>{user.name} ({user.username})</h4>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Age: {user.age}</p>
      <p>Address: {user.address}</p>
      <p>Grade: {user.grade}</p>
      <p>Sex: {user.sex}</p>
    </div>
  );
});

export default UserCard;
