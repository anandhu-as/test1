import React from "react";
import { useState } from "react";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleClick = () => setTodos([...todo]);
  return (
    <div>
      <h3>Todo App</h3>
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => handleClick()}>add</button>
      <h1>
        {todos.map((data) => {
          return <>{data}</>;
        })}
      </h1>
    </div>
  );
};

export default App;
