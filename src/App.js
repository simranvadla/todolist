import React from "react";
import {Provider} from "./Provider";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
export default function App() {
  return (
    <Provider>
      <AddTodo />
      <TodoList />
    </Provider>
  );
}


