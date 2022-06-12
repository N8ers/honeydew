import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function NewTodo(props) {
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = () => {
    props.addNewTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <Button variant="contained" onClick={addNewTodo}>
        Add
      </Button>
    </div>
  );
}

export default NewTodo;
