import { useState } from "react";

const Create = (props) => {
  const users = props.users;
  const setUsers = props.setusers;

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!fullName || !age) return;

    const newUser = { name: fullName, age: parseInt(age) };
    setUsers([...users, newUser]);

    // Clear inputs
    setFullName("");
    setAge("");
  };

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
    </div>
  );
};

export default Create;