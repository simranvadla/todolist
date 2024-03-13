import React, { useContext } from "react";
import { TodoListContext } from "./Provider";
export default function AddTodo() {
  const { addTodo } = useContext(TodoListContext);
  return (
    <div>
        <h1>Hello Lyros</h1>
      <button onClick={() => addTodo(Date.now())}>Add</button>
    </div>
  );
}