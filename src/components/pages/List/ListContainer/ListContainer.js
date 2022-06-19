import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@mui/material/Paper";

import { getListById } from "../../../../store/actions";

import styles from "./ListContainer.module.css";

import ListItems from "../ListItems/ListItems";
import NewListItem from "../NewListItem/NewListItem";

function ListContainer() {
  const params = useParams();
  const dispatch = useDispatch();
  const listDataFromState = useSelector((state) => state.selectedList);

  const [title, setTitle] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [id, setId] = useState(10);

  useEffect(() => {
    dispatch(getListById(params.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTitle(listDataFromState.title);
    setListItems(listDataFromState.tasks);
  }, [listDataFromState]);

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
