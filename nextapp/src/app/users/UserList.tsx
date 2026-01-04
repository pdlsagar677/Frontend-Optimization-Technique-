"use client";

import { useState, useMemo, useCallback } from "react";
import UserCard from "./UserCard";
import UserSearch from "./UserSearch";

export type User = {
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

export default function UserList({ users }: { users: User[] }) {
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
      u.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [users, query]);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
  }, []);

  return (
    <>
      <UserSearch onSearch={handleSearch} />
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}
