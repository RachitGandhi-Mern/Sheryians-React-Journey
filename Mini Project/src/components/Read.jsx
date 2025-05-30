import React from "react";
import { toast } from "react-toastify";

const Read = ({ todos, setTodos }) => {
  const DeleteHandler = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    toast.error("Task deleted successfully!");
  };


  return (
    <div className="p-6 max-w-xl mx-auto mt-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Your Tasks</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-4 rounded-lg shadow flex justify-between items-center ${
              todo.isCompleted ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <div>
              <p className="font-semibold text-lg">{todo.title}</p>
              <p className="text-sm text-gray-600">
                {todo.isCompleted ? "✅ Done" : "❌ Not done"} - {todo.city}
              </p>
            </div>
            <button
              onClick={() => DeleteHandler(todo.id)}
              className="text-sm text-red-600 hover:text-red-800"
            >
              🗑 Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Read;