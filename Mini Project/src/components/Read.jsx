import React from "react";

const Read = ({ todos, setTodos }) => {
  const DeleteHandler = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Your Tasks</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ marginBottom: "5px", color: todo.isCompleted ? "green" : "tomato" }}
          >
            {todo.title} - {todo.isCompleted ? "✅ Done" : "❌ Not done"} ({todo.city}) |{" "}
            <span
              onClick={() => DeleteHandler(todo.id)}
              style={{ color: "purple", cursor: "pointer" }}
            >
              Delete
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Read;