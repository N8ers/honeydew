import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";

import { getLists } from "../../../../store/actions";

import styles from "./ListsContainer.module.css";

function ListsContainer() {
  const listsFromStore = useSelector((state) => state.lists);
  const [lists, setLists] = useState(listsFromStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLists());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setLists(listsFromStore);
  }, [listsFromStore]);

  return (
    <div>
      <h1>Lists</h1>

      <IconButton aria-label="delete" size="large">
        <Add fontSize="inherit" />
      </IconButton>

      <div className={styles.cardContainer}>
        {lists.map((list) => (
          <Link key={list.id} to={`/lists/${list.id}`}>
            <Card varient="outlined" className={styles.card}>
              {list.title} | {list.id}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListsContainer;
