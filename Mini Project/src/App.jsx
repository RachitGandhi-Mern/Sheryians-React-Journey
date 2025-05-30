import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Complete React project", isCompleted: false, city: "Jaipur" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Create todos={todos} setTodos={setTodos} />
        <Read todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;