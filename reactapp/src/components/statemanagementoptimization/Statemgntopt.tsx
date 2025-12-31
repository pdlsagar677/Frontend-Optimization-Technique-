import React, { useState, useEffect, useMemo, useCallback } from "react";

// User type
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  age: number;
  address: string;
  grade: string;
  sex: string;
};

// Memoized Child Component
type UserListProps = {
  users: User[];
  onSelect: (user: User) => void;
};

const UserList = React.memo(({ users, onSelect }: UserListProps) => {
  console.log("UserList rendered");

  return (
    <div>
      <h3>User List ({users.length})</h3>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            margin: "5px",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={() => onSelect(user)}
        >
          <p>
            <strong>{user.name}</strong> ({user.username})
          </p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Age: {user.age}</p>
          <p>Address: {user.address}</p>
          <p>Grade: {user.grade}</p>
          <p>Sex: {user.sex}</p>
        </div>
      ))}
    </div>
  );
});

// Parent Component
function UserDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [counter, setCounter] = useState(0);

  console.log("Parent rendered");

  // Simulate fetching data
  useEffect(() => {
    const fetchUsers = async () => {
      const data: User[] = Array.from({ length: 20 }).map((_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        username: `username${i + 1}`,
        email: `user${i + 1}@example.com`,
        phone: `+977-9800000${i + 1}`,
        age: 18 + (i % 10),
        address: `Address ${i + 1}, Kathmandu`,
        grade: ["A", "B", "C"][i % 3],
        sex: i % 2 === 0 ? "Male" : "Female",
      }));
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // Debounce search input
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(handler);
  }, [search]);

  // Filter users using useMemo
  const filteredUsers = useMemo(() => {
    console.log("Filtered users computed");
    return users.filter((user) =>
      user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [users, debouncedSearch]);

  // Memoized function to select user
  const handleSelectUser = useCallback((user: User) => {
    setSelectedUser(user);
  }, []);

  // Memoized counter increment
  const incrementCounter = useCallback(() => setCounter((c) => c + 1), []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Dashboard</h2>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={incrementCounter}>Increment Counter ({counter})</button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
        />
      </div>

      <UserList users={filteredUsers} onSelect={handleSelectUser} />

      {selectedUser && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid blue" }}>
          <h3>Selected User</h3>
          <p>
            <strong>{selectedUser.name}</strong> ({selectedUser.username})
          </p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Age: {selectedUser.age}</p>
          <p>Address: {selectedUser.address}</p>
          <p>Grade: {selectedUser.grade}</p>
          <p>Sex: {selectedUser.sex}</p>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;


// How it Works in Real-Time

// Initial load → Parent renders, UserList renders, filtered users computed

// Typing in search → debounce prevents multiple filter recalculations

// Click counter → Parent re-renders, but UserList skipped (React.memo)

// Select a user → selected user panel updates without affecting other components