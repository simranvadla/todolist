import React from "react";
import { useContext } from "react";
import { TodoListContext } from "./Provider";
export default function TodoList() {
  const { todos,deleteTodo } = useContext(TodoListContext);
  return (
    <div>
      {todos.map((elem,index) => (
        <div key={index}>{elem}-<button onClick={()=>deleteTodo(elem)}>Delete</button></div>
      ))}
    </div>
  );
}