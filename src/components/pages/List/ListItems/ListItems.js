import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
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
