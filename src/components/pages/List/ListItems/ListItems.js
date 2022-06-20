import { List } from "@mui/material";

import ItemContainer from "../ItemContainer/ItemContainer";

function ListItems(props) {
  return (
    <List>
      {props.listItems.map((item) => {
        return (
          <ItemContainer
            key={item.id}
            id={item.id}
            listId={props.listId}
            title={item.title}
            completed={item.completed}
          />
        );
      })}
    </List>
  );
}

export default ListItems;
