import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Paper from "@mui/material/Paper";

import styles from "./ListContainer.module.css";

import ListItems from "../ListItems/ListItems";
import NewListItem from "../NewListItem/NewListItem";

function ListContainer() {
  const params = useParams();
  const [title, setTitle] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [id, setId] = useState(10);

  useEffect(() => {
    async function getData() {
      const result = await axios.get(
        `http://localhost:3050/lists/${params.id}`
      );
      setListItems(result.data.tasks);
      setTitle(result.data.title);
    }
    getData();
  }, []);

  const handleAddingListItem = (newItem) => {
    const item = { id, title: newItem };
    setListItems((items) => [...items, item]);
    setId(id + 1);
  };

  return (
    <Paper elevation={3} className={styles.container}>
      <h1>{title}</h1>
      <ListItems listItems={listItems} />
      <NewListItem addListItem={handleAddingListItem} />
    </Paper>
  );
}

export default ListContainer;
