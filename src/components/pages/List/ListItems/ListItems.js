import { Checkbox, IconButton, ListItem, List } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

function ListItems(props) {
  return (
    <List>
      {props.listItems.map((item) => {
        return (
          <ListItem key={item.id}>
            <Checkbox />
            {item.title}
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ListItems;
