import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Paper, Input } from "@mui/material";

import {
  getListById,
  updateListTitle,
  createListItem,
} from "../../../../store/actions";

import styles from "./ListContainer.module.css";

import ListItems from "../ListItems/ListItems";
import NewListItem from "../NewListItem/NewListItem";

function ListContainer() {
  const params = useParams();
  const dispatch = useDispatch();
  const listDataFromState = useSelector((state) => state.selectedList);

  const [title, setTitle] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    dispatch(getListById(params.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTitle(listDataFromState.title);
    setListItems(listDataFromState.tasks);
    setId(listDataFromState.id);
  }, [listDataFromState]);

  const handleAddingListItem = async (newItem) => {
    const item = { listId: listDataFromState.id, title: newItem };
    dispatch(createListItem(item));
  };

  const saveTitle = () => {
    if (listDataFromState.title !== title) {
      dispatch(updateListTitle(id, title));
    }
  };

  return (
    <Paper elevation={3} className={styles.container}>
      <Input
        fullWidth
        variant="standard"
        onBlur={saveTitle}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <ListItems listItems={listItems} />
      <NewListItem addListItem={handleAddingListItem} />
    </Paper>
  );
}

export default ListContainer;
