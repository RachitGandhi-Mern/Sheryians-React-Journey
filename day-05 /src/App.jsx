import { useState } from "react"
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Rachit", age: 23 },
    { name: "Teena", age: 21 },
  ]);

  return (
    <div>
      <Create users={users} setusers={setUsers} />
      <hr />
      <Read users={users} />
    </div>
  );
};

export default App;