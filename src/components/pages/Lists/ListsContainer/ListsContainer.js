import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";

import styles from "./ListsContainer.module.css";

function ListsContainer() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await axios.get("http://localhost:3050/lists");
      setLists(result.data);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Lists</h1>

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
