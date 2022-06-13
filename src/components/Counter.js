import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { increment, decrement, set } from "../store/actions";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import styles from "./Counter.module.css";

function Counter() {
  const countFromStore = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [count, setCount] = useState(countFromStore);
  useEffect(() => {
    setCount(countFromStore);
  }, [countFromStore]);

  return (
    <Paper elevation={3} className={styles.container}>
      <h1>Counter</h1>
      <h3>current count: {countFromStore}</h3>
      <div>
        <Button onClick={() => dispatch(increment())}>Add</Button>
        <Button onClick={() => dispatch(decrement())}>Sub</Button>
        <br />
        <TextField
          label="set amount"
          type="number"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <Button onClick={() => dispatch(set(count))}>Set</Button>
      </div>
    </Paper>
  );
}

export default Counter;
