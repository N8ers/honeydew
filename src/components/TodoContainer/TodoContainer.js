import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Paper from "@mui/material/Paper";

import styles from "./TodoContainer.module.css";

import Todos from "../Todo/Todos";
import NewTodo from "../NewTodo/NewTodo";

function TodoContainer() {
  const params = useParams();
  const [title, setTitle] = useState([]);
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(10);

  useEffect(() => {
    async function getData() {
      const result = await axios.get(
        `http://localhost:3050/lists/${params.id}`
      );
      setTodos(result.data.tasks);
      setTitle(result.data.title);
    }
    getData();
  }, []);

  const handleAddingNewTodo = (newTodo) => {
    const todo = { id, title: newTodo };
    setTodos((oldTodos) => [...oldTodos, todo]);
    setId(id + 1);
  };

  return (
    <Paper elevation={3} className={styles.container}>
      <h1>{title}</h1>
      <Todos todoList={todos} />
      <NewTodo addNewTodo={handleAddingNewTodo} />
    </Paper>
  );
}

export default TodoContainer;
