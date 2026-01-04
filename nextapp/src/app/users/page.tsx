import UserList from "./UserList";

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

async function getUsers(): Promise<User[]> {
  // Cached & revalidated every 60 seconds
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  // Normalize data (server-side only)
  return data.map((u: any, i: number) => ({
    id: u.id,
    name: u.name,
    username: u.username,
    email: u.email,
    phone: u.phone,
    age: 18 + (i % 10),
    address: `${u.address.street}, ${u.address.city}`,
    grade: ["A", "B", "C"][i % 3],
    sex: i % 2 === 0 ? "Male" : "Female",
  }));
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div style={{ padding: 20 }}>
      <h1>User Dashboard</h1>
      <UserList users={users} />
    </div>
  );
}
