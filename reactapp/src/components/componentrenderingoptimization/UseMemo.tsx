import { useEffect, useMemo, useState } from "react";
import UserList from "./UserList";

type User = {
  id: number;
  name: string;
  email: string;
};

// ✅ Correct Mental Model

// React.memo → skips child render if props are shallowly equal

// useMemo → preserves the reference of computed values so React.memo can work correctly

// Counter state → parent renders but doesn’t affect UserList because:

// Without useMemo → array is new → child re-renders

// With useMemo → array reference same → child skipped
// ✅ Simplified Mental Model

// useMemo: “Compute this value once, and reuse it until dependencies change”

// React.memo: “Skip rendering this component if props didn’t change”
function ReactMemo() {
  const [users, setUsers] = useState<User[]>([]);
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  // ✅ Memoized value
  const formattedUsers = useMemo(() => {
    console.log("formattedUsers computed");
    return users.map((user) => ({
      ...user,
      name: user.name.toUpperCase(),
    }));
  }, [users]);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        Counter: {count}
      </button>

      <UserList users={formattedUsers} />
    </div>
  );
}

export default ReactMemo;
