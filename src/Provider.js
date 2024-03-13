import React, { createContext } from "react";
import { useState } from "react";
export const TodoListContext = createContext(null);
export const Provider = (props) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (item) => {
    setTodos((prev) => [...todos, item]);
  };
  const deleteTodo = (item) => {
    setTodos((prev) => todos.filter((val) => val !== item));
  };
  const val = { todos, addTodo, deleteTodo };
  return <TodoListContext.Provider value={val}>{props.children}</TodoListContext.Provider>
}