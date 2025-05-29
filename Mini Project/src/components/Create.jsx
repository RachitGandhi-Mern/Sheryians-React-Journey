
import { nanoid } from "nanoid";
import React, { Fragment, useState } from "react";

// Create Component
const Create = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [city, setCity] = useState("Jaipur");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    
    const newTodo = {
      id:nanoid(), // Using Date.now() instead of nanoid for simplicity
      title,
      isCompleted,
      city,
    };
    
    setTodos([...todos, newTodo]);
    setTitle("");
    setIsCompleted(false);
    setCity("Jaipur");
  };

  return (
    <Fragment style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Create Tasks</h1>
      <div onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="title">Task Title:</label><br />
          <input
            id="title"
            type="text"
            placeholder="Enter task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: "5px", width: "200px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={(e) => setIsCompleted(e.target.checked)}
            />
            {" "}Completed
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="city">Select City:</label><br />
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{ padding: "5px" }}
          >
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>
        <button type="button" onClick={handleSubmit} style={{ padding: "8px 16px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Add Task
        </button>
      </div>
      <h3 style={{ marginTop: "20px" }}>Selected City: {city}</h3>
    </Fragment>
  );
};
export default Create;