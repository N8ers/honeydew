import { Checkbox, IconButton, ListItem, Input } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { updateListItem } from "../../../../store/actions";

function ItemContainer(props) {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(props.title);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const saveTitle = () => {
    dispatch(updateListItem({ listId: props.listId, id: props.id, title }));
  };

  const toggleCompleted = (completed) => {
    dispatch(updateListItem({ listId: props.listId, id: props.id, completed }));
  };

  const deleteItem = (id) => {
    console.log("deleteItem ", id);
  };

  return (
    <ListItem key={props.id}>
      <Checkbox
        checked={props.completed}
        onChange={(event) => toggleCompleted(event.target.checked)}
      />
      <Input
        fullWidth
        variant="standard"
        onBlur={saveTitle}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => deleteItem(props.id)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default ItemContainer;
