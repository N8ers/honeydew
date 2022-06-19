import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function NewListItem(props) {
  const [newListItem, setNewListItem] = useState("");

  const addNewListItem = (event) => {
    event.preventDefault();
    props.addListItem(newListItem);
    setNewListItem("");
  };

  return (
    <form onSubmit={addNewListItem}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={newListItem}
        onChange={(event) => setNewListItem(event.target.value)}
      />
      <Button
        variant="contained"
        type="submit"
        style={{
          backgroundColor: "#1ea5a3",
          color: "#002f3c",
          fontWeight: "bold",
        }}
      >
        Add
      </Button>
    </form>
  );
}

export default NewListItem;
