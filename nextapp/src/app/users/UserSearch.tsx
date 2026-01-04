"use client";

import { useEffect, useState } from "react";

export default function UserSearch({ onSearch }: { onSearch: (v: string) => void }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const id = setTimeout(() => onSearch(value), 400);
    return () => clearTimeout(id);
  }, [value, onSearch]);

  return (
    <input
      placeholder="Search users..."
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}
