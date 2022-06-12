import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

function Todos(props) {
  return (
    <List>
      {props.todoList.map((todo) => {
        return (
          <ListItem key={todo.id}>
            <Checkbox />
            {todo.title}
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default Todos;
