import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function NewListItem(props) {
  const [newListItem, setNewListItem] = useState("");

  const addNewListItem = () => {
    props.addListItem(newListItem);
    setNewListItem("");
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={newListItem}
        onChange={(event) => setNewListItem(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={addNewListItem}
        style={{
          backgroundColor: "#1ea5a3",
          color: "#002f3c",
          fontWeight: "bold",
        }}
      >
        Add
      </Button>
    </div>
  );
}

export default NewListItem;
