import { useState } from "react";
import Paper from "@mui/material/Paper";

import styles from "./TodoContainer.module.css";

import Todos from "./Todos";
import NewTodo from "./NewTodo";

function TodoContainer(props) {
  const dummyTodos = [
    { id: 1, title: "throw rocks" },
    { id: 2, title: "eat socks" },
    { id: 3, title: "shake blocks" },
  ];

  const [todos, setTodos] = useState(dummyTodos);

  const [id, setId] = useState(10);

  const handleAddingNewTodo = (newTodo) => {
    const todo = { id, title: newTodo };
    setTodos((oldTodos) => [...oldTodos, todo]);
    setId(id + 1);
  };

  return (
    <Paper elevation={3} className={styles.container}>
      <h1>{props.title}</h1>
      <Todos todoList={todos} />
      <NewTodo addNewTodo={handleAddingNewTodo} />
    </Paper>
  );
}

export default TodoContainer;
