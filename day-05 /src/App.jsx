import { useState } from "react"

const App = () => {
  const [users, setUsers] = useState([
    { name: "Rachit", age: 23 },
    { name: "Teena", age: 21 },
  ]);

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!fullName || !age) return; // optional: prevent empty inputs

    const newUser = { name: fullName, age: parseInt(age) };
    setUsers([...users, newUser]);

    // Clear inputs
    setFullName("");
    setAge("");
  };

  const renderUsers = users.map((user, index) => (
    <li key={index}>
      {user.name} - {user.age}
    </li>
  ));

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <hr />
      <h1>User Data</h1>
      <ol>{renderUsers}</ol>
    </div>
  );
};

export default App;