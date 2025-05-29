import { Fragment, useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import React from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "kam karle bhai", isCompleted: false, city: "Jaipur" }
  ]);

  return (
    <>
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} />
    </>
  );
};

export default App;