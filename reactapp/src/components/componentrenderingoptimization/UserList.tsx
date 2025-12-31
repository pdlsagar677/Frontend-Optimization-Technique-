type User = {
  id: number;
  name: string;
  email: string;
};

type UserListProps = {
  users: User[];
};

function UserList({ users }: UserListProps) {
  console.log("UserList rendered");

  return (
    <div>
      <h3>User List</h3>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  );
}

export default UserList;
