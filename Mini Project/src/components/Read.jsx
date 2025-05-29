import { Fragment } from "react";

const Read = ({ todos }) => {
    return (
      <Fragment style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Your Tasks</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ marginBottom: "5px",color :todo.isCompleted?"green" :"tomato" }}>
              {todo.title} - {todo.isCompleted ? "✅ Done" : "❌ Not done"} ({todo.city})
            </li>
          ))}
        </ul>
      </Fragment>
    );
  };
  
  export default Read;