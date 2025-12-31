import React, { useState, useEffect, useMemo, useCallback } from "react";

// Memoized child component
type User = {
  id: number;
  name: string;
  email: string;
};

type UserListProps = {
  users: User[];
  onUserClick: (user: User) => void;
};

const UserList = React.memo(({ users, onUserClick }: UserListProps) => {
  console.log("UserList rendered");

  return (
    <div>
      <h3>User List</h3>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid gray", margin: "5px", padding: "5px" }}
          onClick={() => onUserClick(user)}
        >
          <p>{user.name}</p>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  );
});

// Parent component
function OptimizedDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  // Fetch users once
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  // Memoize formatted users
  const formattedUsers = useMemo(() => {
    console.log("formattedUsers computed");
    return users.map((user) => ({
      ...user,
      name: user.name.toUpperCase(),
    }));
  }, [users]);

  // Memoize click handler
  const handleUserClick = useCallback((user: User) => {
    alert(`User clicked: ${user.name}`);
  }, []);

  // Memoize counter increment
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment Counter</button>

      <UserList users={formattedUsers} onUserClick={handleUserClick} />
    </div>
  );
}

export default OptimizedDashboard;
