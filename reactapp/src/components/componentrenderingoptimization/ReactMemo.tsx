import { useEffect, useState } from "react";
import UserList from "./UserList";

type User = {
  id: number;
  name: string;
  email: string;
};

// only the counter function execuates and upatded other remains same . as react memo skips unnecessary rendering so it only changes the updated  state only 
function ReactMemo() {
  const [users, setUsers] = useState<User[]>([]);
  const [count, setCount] = useState(0);

  console.log("ReactMemo (Parent) rendered");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>React.memo Demo</h2>

      <button onClick={() => setCount((c) => c + 1)}>
        Counter: {count}
      </button>

      <UserList users={users} />
    </div>
  );
}

export default ReactMemo;
